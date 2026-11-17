// Produce a static portfolio preview without changing the server application.
import {cpSync,mkdirSync,rmSync,writeFileSync,readFileSync,readdirSync,symlinkSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {execFileSync} from 'node:child_process';
const root=process.cwd(), stage=resolve(root,'.demo-build');
const base=process.env.DEMO_BASE_PATH||'/trustNOpeps/bourn';
rmSync(stage,{recursive:true,force:true});mkdirSync(stage);
for(const name of ['app','lib','public','package.json','package-lock.json','tsconfig.json','next-env.d.ts','postcss.config.mjs'])cpSync(name,join(stage,name),{recursive:true});
symlinkSync(resolve(root,'node_modules'),join(stage,'node_modules'),'dir');
rmSync(join(stage,'app/auth/confirm'),{recursive:true,force:true});
writeFileSync(join(stage,'app/auth/page.tsx'),`import Link from 'next/link';export default function Auth(){return <main className="p-10"><h1 className="text-4xl">Explore without an account.</h1><p className="my-6">Account services are not enabled in this portfolio preview.</p><Link href="/plan">Plan your Bali trip →</Link></main>}`);
function walk(dir){for(const entry of readdirSync(dir,{withFileTypes:true})){const p=join(dir,entry.name);if(entry.isDirectory())walk(p);else if(p.endsWith('.tsx')){let s=readFileSync(p,'utf8').replaceAll('manifest: "/manifest.webmanifest"',`manifest: "${base}/manifest.webmanifest"`).replaceAll('src="/images/',`src="${base}/images/`).replaceAll('<a\n','<Link\n').replaceAll('<a ','<Link ').replaceAll('</a>','</Link>');writeFileSync(p,s);}}}walk(join(stage,'app'));
writeFileSync(join(stage,'next.config.ts'),`export default {output:'export',trailingSlash:true,basePath:${JSON.stringify(base)},images:{unoptimized:true}};`);
execFileSync(process.execPath,[resolve(root,'node_modules/next/dist/bin/next'),'build'],{cwd:stage,stdio:'inherit',env:{...process.env,NEXT_TELEMETRY_DISABLED:'1'}});
console.log('Static preview:',join(stage,'out'));
