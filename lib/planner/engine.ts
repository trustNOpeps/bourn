// Planning assumptions, not live supplier quotations. All amounts are IDR.
export const rates = { room: [450000, 850000, 1500000, 2800000], food: 200000, driver: 700000, car: 400000, scooter: 100000, experience: 350000 };
const moods: Record<string,string[]> = { UBUD:['CULTURE','NATURE','WELLNESS','RELAXED'], SANUR:['RELAXED','BEACH','CULTURE'], CANGGU:['BEACH','FOOD','NIGHTLIFE'], SEMINYAK:['FOOD','NIGHTLIFE','BEACH'], ULUWATU:['BEACH','ADVENTURE','ROMANTIC','NATURE'], 'NUSA DUA':['RELAXED','WELLNESS','ROMANTIC'], KUTA:['BEACH','NIGHTLIFE'] };
export function tripNights(arrival:string,departure:string) {
 const parse=(s:string)=> { if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return NaN; const t=Date.parse(s+'T00:00:00Z');return Number.isFinite(t)&&new Date(t).toISOString().slice(0,10)===s?t:NaN; };
 const n=(parse(departure)-parse(arrival))/86400000;
 return Number.isInteger(n)&&n>0&&n<=365?n:null;
}
export function planTrip(q: {get:(key:string)=>string|null}) {
 const arrival=q.get('arrival')||'',departure=q.get('departure')||'';
 const nights=tripNights(arrival,departure), people=Number(q.get('travellers'));
 const type=(q.get('type')||'').toLowerCase();
 if (!nights || !Number.isInteger(people)||people<1||people>20||!['solo','couple','family','friends','group'].includes(type)) return null;
 const feel=(q.get('feel')||'').toUpperCase().split(',').filter(x=>Object.values(moods).flat().includes(x));
 const requested=(q.get('area')||'').toUpperCase();
 const budget=q.get('budget')||'NOT SURE';
 const ranked=Object.keys(moods).sort((a,b)=>score(b)-score(a));
 function score(a:string){return moods[a].filter(m=>feel.includes(m)).length*3+(type==='family'&&['SANUR','NUSA DUA'].includes(a)?2:0)+((nights ?? 0)>7&&['UBUD','SANUR'].includes(a)?1:0)+(budget==='UNDER RP5M'&&['KUTA','UBUD'].includes(a)?1:0);}
 const area=moods[requested]?requested:ranked[0];
 const tier=budget==='RP40M+'?3:budget==='RP20–40M'?2:budget==='UNDER RP5M'?0:1;
 const transport=['PRIVATE DRIVER','RENTAL CAR','SCOOTER','MIX'].includes(q.get('transport')||'')?q.get('transport')!:'PRIVATE DRIVER';
 const days=nights+1,rooms=Math.ceil(people/2);
 const costs={Accommodation:rooms*nights*rates.room[tier],Transport:days*(transport==='SCOOTER'?rates.scooter*Math.ceil(people/2):transport==='RENTAL CAR'?rates.car*Math.ceil(people/4):rates.driver*Math.ceil(people/4)),Food:days*people*rates.food,Experiences:Math.max(1,Math.floor(days/3))*people*rates.experience};
 const total=Object.values(costs).reduce((a,b)=>a+b,0);
 const cap=budget==='UNDER RP5M'?5000000:budget==='RP5–10M'?10000000:budget==='RP10–20M'?20000000:budget==='RP20–40M'?40000000:Infinity;
 return {arrival,departure,nights,days,people,type,feel,area,transport,budget,costs,total,overBudget:total>cap,rooms,stay:(q.get('stay')||'NOT SURE').slice(0,40),why:moods[requested]?'Your chosen base, used as the starting point for this plan.':`A starting point for ${feel.length?feel.join(', ').toLowerCase():'a balanced Bali stay'}, with your group and trip length in mind.`};
}
