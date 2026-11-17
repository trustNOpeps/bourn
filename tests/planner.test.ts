import test from 'node:test';
import assert from 'node:assert/strict';
import {tripNights,planTrip} from '../lib/planner/engine.ts';
test('calendar dates validated including leap years and reverse dates',()=>{assert.equal(tripNights('2028-02-28','2028-03-01'),2);assert.equal(tripNights('2027-02-29','2027-03-02'),null);assert.equal(tripNights('2026-12-02','2026-12-01'),null);assert.equal(tripNights('bad','2026-12-01'),null);});
const q=()=>new URLSearchParams({arrival:'2026-12-01',departure:'2026-12-08',travellers:'2',type:'couple',feel:'CULTURE,NATURE',area:'NOT SURE',budget:'UNDER RP5M'});
test('recommendation and budget sum are deterministic',()=>{const p=planTrip(q())!;assert.equal(p.area,'UBUD');assert.equal(p.nights,7);assert.equal(p.total,Object.values(p.costs).reduce((a,b)=>a+b,0));assert.equal(p.overBudget,true);});
test('explicit area takes precedence and invalid people fail',()=>{const x=q();x.set('area','SANUR');assert.equal(planTrip(x)?.area,'SANUR');for(const v of ['NaN','21','0','1.5']){x.set('travellers',v);assert.equal(planTrip(x),null);}});
