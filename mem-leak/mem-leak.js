'use strict';

var _0x1cb33a = require('axios');
var _0x4015f9 = require('consola');
var _0x28081a = require('zod');
var _0x3e9376 = require('ethers');
var _0x4eca3f = require('ethers/lib/utils');
var _0x51ff76 = require('decimal.js');
var _0x62d7dc = require('lodash');
var _0x2a6da7 = require('node-schedule');
var _0x34a040 = require('@aws-sdk/client-cloudwatch');
var _0x521299 = require('@aws-sdk/client-dynamodb');
var _0x3e611f = require('@aws-sdk/client-ecs');
var _0x220763 = require('@aws-sdk/client-lambda');
var _0x3414ec = require('@aws-sdk/client-s3');
var _0xb8ff2f = require('@aws-sdk/client-ssm');
var _0x5b365d = require('@aws-sdk/lib-dynamodb');
var _0x3d0e8d = require('@influxdata/influxdb-client');
var _0x209071 = require('@influxdata/influxdb-client-apis');
var _0x4ed308 = require('crypto');
var _0x1c92a7 = require('fs');
var _0x2d3fdb = require('path');
var _0x5ca4b8 = require('dayjs');
var _0x307f7f = require('@ethersproject/logger');
var _0x276fe4 = require('@aptos-labs/ts-sdk');
var _0x462156 = require('@ethersproject/bytes');
var _0x22098e = require('secp256k1');
var _0xb5a280 = require('@ethersproject/strings/lib/utf8');
var _0x6a06b2 = require('@radixdlt/radix-engine-toolkit');
var _0x36c312 = require('@radixdlt/babylon-gateway-api-sdk');
var _0x2fa597 = require('@solana/web3.js');
var _0x85fb74 = require('@coral-xyz/anchor');
var _0x371bce = require('@mysten/sui/transactions');
var _0xba51df = require('@mysten/sui/utils');
var _0x13b1b3 = require('@mysten/sui/client');
var _0x3e6687 = require('@mysten/bcs');
var _0x5ec42c = require('@mysten/sui/keypairs/secp256k1');
var _0x60912f = require('fuels');
var _0x33a081 = require('v8');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src$d = {};

var EvmBlockchainService$1 = {};

Object['defineProperty'](EvmBlockchainService$1,'__esModule',{'value':!![]});EvmBlockchainService$1['EvmBlockchainService']=void 0x0;class EvmBlockchainService{['provider'];constructor(_0x1da982){this['provider']=_0x1da982;}async['getBlockNumber'](){return await this['provider']['getBlockNumber']();}async['getTimeForBlock'](_0x2d2000){const _0x48721d=await this['provider']['getBlockWithTransactions'](_0x2d2000);return new Date((_0x48721d?.['timestamp']||0x0)*0x3e8);}async['getReceiptForTransaction'](_0xc8385e){return await this['provider']['getTransactionReceipt'](_0xc8385e['hash']);}async['getBlockWithTransactions'](_0x260747){return await this['provider']['getBlockWithTransactions'](_0x260747);}async['getBalance'](_0x3126cd,_0x56f240){return await this['provider']['getBalance'](_0x3126cd,_0x56f240);}}EvmBlockchainService$1['EvmBlockchainService']=EvmBlockchainService;

var getBlockchainService$1 = {};

var src$c = {};

var src$b = {};

var common$1 = {};

var array = {};

Object['defineProperty'](array,'__esModule',{'value':!![]});array['removeDuplicates']=void 0x0;const removeDuplicates=_0xa9936f=>{return Array['from'](new Set(_0xa9936f));};array['removeDuplicates']=removeDuplicates;

var axiosRetry = {};

var retry$1 = {};

var logger$d = {};

var env = {};

var runtime = {};

Object['defineProperty'](runtime,'__esModule',{'value':!![]});runtime['isNodeRuntime']=void 0x0;const isNodeRuntime=()=>typeof process!=='undefined'&&process['versions']!=null&&process['versions']['node']!=null;runtime['isNodeRuntime']=isNodeRuntime;

Object['defineProperty'](env,'__esModule',{'value':!![]});env['getFromEnv']=void 0x0;const zod_1$a=_0x28081a,runtime_1=runtime,getFromEnv=(_0x16ba59,_0x311e7e,_0x34e654=!!_0x311e7e)=>{const _0x443a2e=(0, runtime_1['isNodeRuntime'])()?process['env'][_0x16ba59]:undefined;let _0x32fecc=_0x443a2e;if(_0x34e654&&_0x443a2e)try{_0x32fecc=JSON['parse'](_0x443a2e);}catch(_0x568cd7){}try{return (_0x311e7e??zod_1$a['z']['string']())['parse'](_0x32fecc);}catch(_0x3b898e){console['error']('failed\x20to\x20parse\x20'+_0x16ba59+'\x20env\x20variable,\x20value\x20'+_0x443a2e);throw new Error('failed\x20to\x20parse\x20'+_0x16ba59+'\x20env\x20variable',{'cause':_0x3b898e});}};env['getFromEnv']=getFromEnv;

(function(_0x439f2d){var _0x1a8980=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x2f8f53,_0xb354f2,_0xa7628c,_0x17aef0){if(_0x17aef0===undefined)_0x17aef0=_0xa7628c;var _0x1cfba4=Object['getOwnPropertyDescriptor'](_0xb354f2,_0xa7628c);(!_0x1cfba4||('get'in _0x1cfba4?!_0xb354f2['__esModule']:_0x1cfba4['writable']||_0x1cfba4['configurable']))&&(_0x1cfba4={'enumerable':!![],'get':function(){return _0xb354f2[_0xa7628c];}}),Object['defineProperty'](_0x2f8f53,_0x17aef0,_0x1cfba4);}:function(_0x387620,_0x43d642,_0xd34f8,_0x5b5511){if(_0x5b5511===undefined)_0x5b5511=_0xd34f8;_0x387620[_0x5b5511]=_0x43d642[_0xd34f8];}),_0x19123f=commonjsGlobal&&commonjsGlobal['__setModuleDefault']||(Object['create']?function(_0x56f4ee,_0x20ae18){Object['defineProperty'](_0x56f4ee,'default',{'enumerable':!![],'value':_0x20ae18});}:function(_0x47215e,_0x24c716){_0x47215e['default']=_0x24c716;}),_0x5aa15d=commonjsGlobal&&commonjsGlobal['__importStar']||function(_0x603b12){if(_0x603b12&&_0x603b12['__esModule'])return _0x603b12;var _0x21b474={};if(_0x603b12!=null){for(var _0xa0668b in _0x603b12)if(_0xa0668b!=='default'&&Object['prototype']['hasOwnProperty']['call'](_0x603b12,_0xa0668b))_0x1a8980(_0x21b474,_0x603b12,_0xa0668b);}return _0x19123f(_0x21b474,_0x603b12),_0x21b474;};Object['defineProperty'](_0x439f2d,'__esModule',{'value':!![]}),_0x439f2d['getLogLevel']=_0x439f2d['loggerFactory']=void 0x0,_0x439f2d['createSanitizedLogger']=_0x1f07b5,_0x439f2d['sanitizeValue']=_0x22c587,_0x439f2d['sanitizeLogMessage']=_0x231a86;const _0x4392fc=_0x5aa15d(_0x4015f9),_0xd42acd=_0x28081a,_0x5c318c=env,_0x172492=runtime,_0x934c69=!![],_0x3a4d24=_0x4392fc['LogLevel']['Info'],_0x1efca1=0x5,_0x8f3046={'Fatal':_0x4392fc['LogLevel']['Fatal'],'Error':_0x4392fc['LogLevel']['Error'],'Warn':_0x4392fc['LogLevel']['Warn'],'Log':_0x4392fc['LogLevel']['Log'],'Info':_0x4392fc['LogLevel']['Info'],'Success':_0x4392fc['LogLevel']['Success'],'Debug':_0x4392fc['LogLevel']['Debug'],'Trace':_0x4392fc['LogLevel']['Trace'],'Silent':_0x4392fc['LogLevel']['Silent'],'Verbose':_0x4392fc['LogLevel']['Verbose']};let _0x4c9403=undefined;const _0x588936=_0x4b2b88=>{if((0, _0x172492['isNodeRuntime'])()){_0x4c9403===undefined&&(_0x4c9403=_0x1cb2fb());const _0x459bbd=(0, _0x5c318c['getFromEnv'])('REDSTONE_FINANCE_ENABLE_JSON_LOGS',_0xd42acd['z']['boolean']()['default'](_0x934c69)),_0x1bba7e=(0, _0x439f2d['getLogLevel'])(),_0x344e2a=_0x4c9403?_0x242cab(_0x4b2b88,_0x4c9403,_0x1bba7e):_0x1bba7e,_0x4ad001=_0x459bbd?new _0x4392fc['JSONReporter']():new _0x4392fc['FancyReporter'](),_0x3a67c1=_0x4392fc['default']['create']({'reporters':[_0x4ad001],'level':_0x344e2a})['withTag'](_0x4b2b88);return _0x1f07b5(_0x3a67c1);}else return console;};_0x439f2d['loggerFactory']=_0x588936;const _0x10a405=()=>{return (0, _0x5c318c['getFromEnv'])('REDSTONE_FINANCE_LOG_LEVEL',_0xd42acd['z']['nativeEnum'](_0x4392fc['LogLevel'])['default'](_0x3a4d24));};_0x439f2d['getLogLevel']=_0x10a405;function _0x1f07b5(_0x54088b){const _0x4692fd=['log','info','warn','error','debug'],_0x11c47c={..._0x54088b};return _0x4692fd['forEach'](_0x5e2d9e=>{if(typeof _0x54088b[_0x5e2d9e]==='function'){const _0x334bf6=_0x54088b[_0x5e2d9e]['bind'](_0x54088b);_0x11c47c[_0x5e2d9e]=(..._0x2523fd)=>{const _0x55a391=_0x2523fd['map'](_0x3c8666=>_0x22c587(_0x3c8666));_0x334bf6['apply'](_0x54088b,_0x55a391);};}}),_0x11c47c;}function _0x242cab(_0x46c227,_0x31567b,_0x6bb873){if(_0x31567b[_0x46c227])return _0x31567b[_0x46c227];if(_0x31567b['*'])return _0x31567b['*'];return _0x6bb873;}function _0x43cf5a(_0x4b1feb,_0x24a830,_0xd3ad49=0x0){if(_0xd3ad49>=_0x1efca1)return '[Max\x20Depth\x20Reached]';if(typeof _0x4b1feb==='string')return _0x231a86(_0x4b1feb);else {if(Array['isArray'](_0x4b1feb)){if(_0x24a830['has'](_0x4b1feb))return '[Circular]';return _0x24a830['add'](_0x4b1feb),_0x4b1feb['map'](_0x34a5aa=>_0x43cf5a(_0x34a5aa,_0x24a830,_0xd3ad49+0x1));}else {if(_0x4b1feb!==null&&typeof _0x4b1feb==='object'){if(_0x24a830['has'](_0x4b1feb))return '[Circular]';_0x24a830['add'](_0x4b1feb);const _0x4852be={};for(const [_0x447bce,_0x26251]of Object['entries'](_0x4b1feb)){_0x4852be[_0x447bce]=_0x43cf5a(_0x26251,_0x24a830,_0xd3ad49+0x1);}return _0x4852be;}}}return _0x4b1feb;}function _0x22c587(_0x5d092d){const _0x50d327=new WeakSet();return _0x43cf5a(_0x5d092d,_0x50d327);}function _0xd0e932(_0x2e1562){return _0x2e1562['length']>0x4?'...'+_0x2e1562['slice'](-0x4):_0x2e1562;}function _0x231a86(_0x21dcde){const _0x2e01a0=/(https?|wss):\/\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+/g;return _0x21dcde['replace'](_0x2e01a0,_0x452d88=>{try{const _0x521ce0=new URL(_0x452d88);return _0x521ce0['password']='',_0x521ce0['username']='',_0x521ce0['pathname']=_0x521ce0['search']?_0xd0e932(_0x521ce0['search']):_0xd0e932(_0x521ce0['pathname']),_0x521ce0['search']='',_0x521ce0['toString']()['replace'](/\/+$/,'');}catch(_0x10a87d){return _0x452d88;}});}function _0x1cb2fb(){const _0xf14bc1={},_0x537fba=(0, _0x5c318c['getFromEnv'])('NODE_ENV',_0xd42acd['z']['string']()['optional']());if(_0x537fba!=='test')return null;const _0x4fbde4=(0, _0x5c318c['getFromEnv'])('CUSTOM_LOG_LEVELS',_0xd42acd['z']['string']()['optional']());if(!_0x4fbde4)return null;return _0x4fbde4['split'](',')['forEach'](_0x47755d=>{const [_0xdc80f,_0x278705]=_0x47755d['split'](':');if(!Object['hasOwn'](_0x8f3046,_0x278705))throw new Error('Unknown\x20log\x20level\x20'+_0x278705+'\x20for\x20'+_0xdc80f);_0xf14bc1[_0xdc80f]=_0x8f3046[_0x278705];}),_0xf14bc1;}}(logger$d));getDefaultExportFromCjs(logger$d);

var errors = {};

(function(_0x2140ea){var _0x4202f4=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x21a9fa){return _0x21a9fa&&_0x21a9fa['__esModule']?_0x21a9fa:{'default':_0x21a9fa};};Object['defineProperty'](_0x2140ea,'__esModule',{'value':!![]}),_0x2140ea['assertWithLog']=void 0x0,_0x2140ea['assert']=_0x4b0633,_0x2140ea['assertThenReturn']=_0x17586c,_0x2140ea['assertThenReturnOrFail']=_0x26dd4b,_0x2140ea['stringifyError']=_0x26fa0b,_0x2140ea['simplifyErrorMessage']=_0x1c8c85;const _0x33c79b=_0x4202f4(_0x1cb33a),_0x42dc99=_0x4015f9,_0x39ed5c=_0x3e9376,_0x427ff1=logger$d;function _0x4b0633(_0x13d960,_0x3d3140){if(!_0x13d960)throw new Error('Assertion\x20failed:\x20'+_0x3d3140);}function _0x17586c(_0x328b34,_0x5e06cf){if(!_0x328b34)throw new Error('Assertion\x20failed:\x20'+_0x5e06cf);return _0x328b34;}function _0x26dd4b(_0x2d88d6,_0x22563e,_0x242fe6,_0x59dcb3){if(_0x22563e['length']>0x0){const _0x2d8365=new AggregateError(_0x22563e,_0x242fe6);if(_0x59dcb3)throw _0x2d8365;else (0, _0x2140ea['assertWithLog'])(![],_0x26fa0b(_0x2d8365));}return _0x2d88d6;}const _0x5acb8a=(_0x439532,_0xf5ed3b)=>{const _0x474967=(0, _0x427ff1['loggerFactory'])('utils/errors');!_0x439532&&_0x474967['error']('Assertion\x20failed:\x20'+_0xf5ed3b);};_0x2140ea['assertWithLog']=_0x5acb8a;let _0x2aea6c;const _0x463ce9=_0x126c0e=>{if(!_0x126c0e)return '';_0x2aea6c??=(0, _0x427ff1['getLogLevel'])()>=_0x42dc99['LogLevel']['Trace'];if(_0x2aea6c)return _0x126c0e+';';return '';},_0x525905=Object['values'](_0x39ed5c['ethers']['errors']);function _0x4d0835(_0x4dacea){return typeof _0x4dacea==='object'&&_0x4dacea!==null&&'code'in _0x4dacea&&typeof _0x4dacea['code']==='string'&&_0x525905['includes'](_0x4dacea['code']);}const _0x3f98ec=['code','reason','url','requestBody','timeout','method','address','args','errorSignature'];function _0x26fa0b(_0x4b7674,_0x56c2d3=![]){try{const _0x410704=_0x4b7674;if(_0x410704===undefined)return 'undefined';else {if(_0x410704 instanceof AggregateError){const _0x34041f=_0x410704['errors']['map'](_0x217f09=>_0x26fa0b(_0x217f09,_0x56c2d3));return 'AggregateError:\x20'+(_0x410704['message']?_0x410704['message']:'<no\x20message>')+',\x20errors:\x20'+_0x34041f['join'](';\x20');}else {if(_0x33c79b['default']['isAxiosError'](_0x410704)){const _0x15b1c4='url:\x20'+JSON['stringify'](_0x410704['config']?.['url']),_0x2f6947='data:\x20'+JSON['stringify'](_0x410704['response']?.['data']),_0x37cb5a=_0x15b1c4+',\x20'+_0x2f6947+',\x20'+_0x410704['message'];return _0x56c2d3?_0x37cb5a:_0x37cb5a+',\x20'+_0x463ce9(_0x410704['stack']);}else {if(_0x4d0835(_0x410704))return '[Ethers\x205.7\x20Error]'+_0x3f98ec['filter'](_0x3ac86a=>Object['hasOwn'](_0x410704,_0x3ac86a))['map'](_0x1fd459=>'['+_0x1fd459+':\x20'+_0x410704[_0x1fd459]+']')['join']('')+_0x463ce9(_0x410704['stack']);else {if(_0x410704 instanceof Error){const _0xc43cd1=_0x410704['cause']?'cause:\x20'+_0x26fa0b(_0x410704['cause'],_0x56c2d3):'';return [_0x410704['message'],_0x56c2d3?'':_0x463ce9(_0x410704['stack']),_0xc43cd1]['filter'](_0x16ddc3=>_0x16ddc3['length']>0x0)['join']('\x20');}else return typeof _0x410704['toJSON']==='function'?JSON['stringify'](_0x410704['toJSON']()):'Error\x20couldn\x27t\x20be\x20handled\x20by\x20the\x20stringifyError\x20function:\x20'+String(_0x4b7674);}}}}}catch(_0x294dfe){return 'StringifyError\x20thrown\x20error:\x20'+String(_0x294dfe)+'\x20when\x20stringifying\x20error\x20:'+String(_0x4b7674);}}function _0x1c8c85(_0x4b3864){if(_0x4b3864 instanceof AggregateError){const _0xaf3b22=new Set();for(const _0x296605 of _0x4b3864['errors']){const _0x3c50cc=String(_0x296605),_0x1c7ce7='Original\x20error:\x20AggregateError:\x20<no\x20message>,\x20errors:',_0x5d03f3=_0x3c50cc['indexOf'](_0x1c7ce7),_0x4e1093=_0x5d03f3!==-0x1?_0x5d03f3+_0x1c7ce7['length']:0x0,_0xdfeafe=_0x3c50cc['indexOf']('\x0a',_0x4e1093),_0x348481=_0xdfeafe===-0x1?_0x3c50cc['length']:_0xdfeafe,_0x8c6379=_0x3c50cc['substring'](_0x4e1093,_0x348481)['trim']();_0xaf3b22['add'](_0x8c6379);}return Array['from'](_0xaf3b22)['join']('\x0a');}else return _0x26fa0b(_0x4b3864);}}(errors));getDefaultExportFromCjs(errors);

var time = {};

(function(_0xfb82bd){Object['defineProperty'](_0xfb82bd,'__esModule',{'value':!![]}),_0xfb82bd['intervalMsToCronFormat']=_0xfb82bd['msToHours']=_0xfb82bd['hourToMs']=_0xfb82bd['minToMs']=_0xfb82bd['msToMin']=_0xfb82bd['sleep']=_0xfb82bd['timeout']=_0xfb82bd['timeoutOrResult']=void 0x0;const _0x2ac69c=async(_0x5dc709,_0x585f8c,_0x5e1ca5,_0x4ed72a)=>{return await(_0x585f8c?(0, _0xfb82bd['timeout'])(_0x5dc709,_0x585f8c,_0x5e1ca5,_0x4ed72a):_0x5dc709);};_0xfb82bd['timeoutOrResult']=_0x2ac69c;const _0x53c5ab=async(_0x263782,_0x4508de,_0x520ff7,_0x45144b)=>{let _0xa392e9;try{return await Promise['race']([_0x263782,new Promise((_0x37e614,_0x1a9d57)=>_0xa392e9=setTimeout(()=>{if(_0x45144b)return _0x45144b(_0x37e614,_0x1a9d57);_0x1a9d57(new Error(_0x520ff7??'Timeout\x20error\x20'+_0x4508de+'\x20[MS]'));},_0x4508de))]);}finally{clearTimeout(_0xa392e9);}};_0xfb82bd['timeout']=_0x53c5ab;const _0x23ddb0=_0x5105b8=>new Promise((_0x8a93af,_0x546bfc)=>setTimeout(_0x8a93af,_0x5105b8));_0xfb82bd['sleep']=_0x23ddb0;const _0x591c4c=_0x2895a9=>_0x2895a9/0xea60;_0xfb82bd['msToMin']=_0x591c4c;const _0x3575d0=_0x1b7931=>_0x1b7931*0xea60;_0xfb82bd['minToMs']=_0x3575d0;const _0x178b0c=_0x19803e=>_0x19803e*0x36ee80;_0xfb82bd['hourToMs']=_0x178b0c;const _0x3b7803=_0x487fb9=>_0x487fb9/0x36ee80;_0xfb82bd['msToHours']=_0x3b7803;const _0x5b693c=_0x720786=>{if(_0x720786==0xea60)return '0\x20*\x20*\x20*\x20*\x20*';return '*/'+_0x720786/0x3e8+'\x20*\x20*\x20*\x20*\x20*';};_0xfb82bd['intervalMsToCronFormat']=_0x5b693c;}(time));getDefaultExportFromCjs(time);

Object['defineProperty'](retry$1,'__esModule',{'value':!![]});retry$1['waitForSuccess']=void 0x0;retry$1['retry']=retry;const logger_1$7=logger$d,errors_1$2=errors,time_1$1=time,logger$c=(0, logger_1$7['loggerFactory'])('retry');function retry(_0x1880f4){if(_0x1880f4['maxRetries']===0x0)throw new Error('Setting\x20\x27config.maxRetries\x27\x20to\x200\x20will\x20never\x20call\x20the\x20underlying\x20function');return async(..._0x3fe12c)=>{const _0x48c352=_0x1880f4['fnName']??_0x1880f4['fn']['name'],_0x294ecf=[];for(let _0x2c8e7c=0x0;_0x2c8e7c<_0x1880f4['maxRetries'];_0x2c8e7c++){try{return await _0x1880f4['fn'](..._0x3fe12c);}catch(_0x33f1f9){_0x294ecf['push'](_0x33f1f9),_0x1880f4['logger']?.('Retry\x20'+(_0x2c8e7c+0x1)+'/'+_0x1880f4['maxRetries']+';\x20Function\x20'+_0x48c352+'\x20failed.\x20'+(0, errors_1$2['stringifyError'])(_0x33f1f9));if(_0x1880f4['waitBetweenMs']&&_0x2c8e7c!==_0x1880f4['maxRetries']-0x1){const _0xd5725e=_0x1880f4['backOff']?Math['pow'](_0x1880f4['backOff']['backOffBase'],_0x2c8e7c):0x1,_0x537b25=_0x1880f4['waitBetweenMs']*_0xd5725e;_0x1880f4['logger']?.('Waiting\x20'+_0x537b25/0x3e8+'\x20s.\x20for\x20the\x20next\x20retry...'),await(0, time_1$1['sleep'])(_0x537b25);}}}throw new AggregateError(_0x294ecf,'Retry\x20failed\x20after\x20'+_0x1880f4['maxRetries']+'\x20attempts\x20of\x20'+_0x48c352);};}const waitForSuccess=async(_0x5058c7,_0x128f3d,_0x33a5fc,_0x194790=0x1388,_0x41909f='')=>{const _0x40624d=_0x41909f?'['+_0x41909f+']\x20':'';let _0x111850=0x0;while(!await _0x5058c7(_0x111850)){if(++_0x111850<_0x128f3d)logger$c['debug'](_0x40624d+'Waiting\x20'+_0x194790+'\x20[ms]...'),await(0, time_1$1['sleep'])(_0x194790);else throw new Error(_0x33a5fc);}if(!_0x111850)return;logger$c['log'](_0x40624d+'Did\x20wait\x20'+_0x194790*_0x111850+'\x20[ms]\x20in\x20total');};retry$1['waitForSuccess']=waitForSuccess;

var __importDefault$q=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x3b0bb2){return _0x3b0bb2&&_0x3b0bb2['__esModule']?_0x3b0bb2:{'default':_0x3b0bb2};};Object['defineProperty'](axiosRetry,'__esModule',{'value':!![]});axiosRetry['axiosGetWithRetries']=axiosGetWithRetries;const axios_1$4=__importDefault$q(_0x1cb33a),retry_1$1=retry$1;async function axiosGetWithRetries(_0x28a220,_0x18ca4b,_0x4efe6d=axios_1$4['default']){return await(0, retry_1$1['retry'])({'fnName':_0x18ca4b['fnName']??'axios.get','fn':async()=>await _0x4efe6d['get'](_0x28a220,{'timeout':_0x18ca4b['timeout'],'headers':_0x18ca4b['headers'],'params':_0x18ca4b['params']}),..._0x18ca4b})();}

var base64 = {};

Object['defineProperty'](base64,'__esModule',{'value':!![]});base64['fromBase64']=fromBase64;base64['toBase64']=toBase64;function fromBase64(_0x56f959){const _0x43f2a5=Buffer['from'](_0x56f959,'base64');return _0x43f2a5['toString']('utf-8');}function toBase64(_0x1867d2){const _0x3b19ce=Buffer['from'](_0x1867d2,'utf-8');return _0x3b19ce['toString']('base64');}

var batchPromises$1 = {};

Object['defineProperty'](batchPromises$1,'__esModule',{'value':!![]});batchPromises$1['batchPromises']=batchPromises;const errors_1$1=errors,time_1=time;async function batchPromises(_0x1f6500,_0x401949,_0x5cb102,_0x17d2be=![]){const _0x239145=[],_0x43ec8c=[];for(let _0x414058=0x0;_0x414058<_0x5cb102['length'];_0x414058+=_0x1f6500){_0x414058!==0x0&&await(0, time_1['sleep'])(_0x401949);const _0x277607=_0x5cb102['slice'](_0x414058,_0x414058+_0x1f6500),_0x2115f3=await Promise['allSettled'](_0x277607['map'](_0x5b48dc=>_0x5b48dc())),_0x3134c5=_0x2115f3['filter'](_0x5c4598=>_0x5c4598['status']==='fulfilled');_0x239145['push'](..._0x3134c5['map'](_0x425251=>_0x425251['value']));const _0x303de7=_0x2115f3['filter'](_0x366a4a=>_0x366a4a['status']==='rejected');_0x43ec8c['push'](..._0x303de7['map'](_0x124159=>_0x124159['reason']));}return (0, errors_1$1['assertThenReturnOrFail'])(_0x239145,_0x43ec8c,'batch\x20operation\x20failed',_0x17d2be);}

var bigNumbers = {};

Object['defineProperty'](bigNumbers,'__esModule',{'value':!![]});bigNumbers['normalizeDecimals']=bigNumbers['bigNumberToFloat']=bigNumbers['decimalsMultiplier']=void 0x0;const utils_1$1l=_0x4eca3f,DEFAULT_DECIMALS=0x12;bigNumbers['decimalsMultiplier']=(0, utils_1$1l['parseUnits'])('1.0',DEFAULT_DECIMALS);const bigNumberToFloat=_0xf9924c=>parseFloat((0, utils_1$1l['formatUnits'])(_0xf9924c,DEFAULT_DECIMALS));bigNumbers['bigNumberToFloat']=bigNumberToFloat;const normalizeDecimals=(_0x4dfb20,_0x29af82)=>{if(_0x29af82>DEFAULT_DECIMALS)throw new Error('Can\x20not\x20normalize\x20reserve\x20decimals:\x20'+_0x29af82);const _0x1216a3=DEFAULT_DECIMALS-_0x29af82;return _0x4dfb20['mul']((0, utils_1$1l['parseUnits'])('1.0',_0x1216a3));};bigNumbers['normalizeDecimals']=normalizeDecimals;

var clone = {};

Object['defineProperty'](clone,'__esModule',{'value':!![]});clone['cloneClassInstance']=cloneClassInstance;function cloneClassInstance(_0x4354b6){return Object['assign'](Object['create'](Object['getPrototypeOf'](_0x4354b6)),_0x4354b6);}

var conversions = {};

var __importDefault$p=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x197564){return _0x197564&&_0x197564['__esModule']?_0x197564:{'default':_0x197564};};Object['defineProperty'](conversions,'__esModule',{'value':!![]});conversions['bignumberishToDecimal']=void 0x0;const decimal_js_1=__importDefault$p(_0x51ff76),ethers_1$d=_0x3e9376,bignumberishToDecimal=_0x176777=>new decimal_js_1['default'](ethers_1$d['BigNumber']['from'](_0x176777)['toHexString']());conversions['bignumberishToDecimal']=bignumberishToDecimal;

var fetchWithFallback = {};

var __importDefault$o=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x36019e){return _0x36019e&&_0x36019e['__esModule']?_0x36019e:{'default':_0x36019e};};Object['defineProperty'](fetchWithFallback,'__esModule',{'value':!![]});fetchWithFallback['fetchWithFallbacks']=void 0x0;const axios_1$3=__importDefault$o(_0x1cb33a),fetchWithFallbacks=_0x3e2e3b=>{const _0x15a2e5=_0x3e2e3b['makeGetRequest']??axios_1$3['default']['get']['bind'](axios_1$3['default']),_0x842f16=_0x3e2e3b['urls']['map'](_0xf7e6a2=>_0x15a2e5(_0xf7e6a2,_0x3e2e3b['axiosConfig']));return Promise['any'](_0x842f16);};fetchWithFallback['fetchWithFallbacks']=fetchWithFallbacks;

var fsPathSafe = {};

var path;Object['defineProperty'](fsPathSafe,'__esModule',{'value':!![]});var fs=fsPathSafe['fs']=path=fsPathSafe['path']=void 0x0;const logger_1$6=logger$d;try{fs=fsPathSafe['fs']=require('fs'),path=fsPathSafe['path']=require('path');}catch(_0x341d01){(0, logger_1$6['loggerFactory'])('fs-path-safe')['error']('Tried\x20to\x20import\x20fs/path\x20in\x20non-node\x20env\x20(Gelato?)');}

var jsUtils = {};

Object['defineProperty'](jsUtils,'__esModule',{'value':!![]});jsUtils['waitForAllRecord']=jsUtils['toSafeRecord']=void 0x0;const toSafeRecord=(_0x396efd,_0x58e685)=>new Proxy(_0x396efd,{'get':(_0x1d3720,_0x580b40)=>{if(_0x580b40==='then'||_0x580b40==='toJSON')return _0x1d3720[_0x580b40];else {if(!Reflect['has'](_0x1d3720,_0x580b40)||_0x1d3720[_0x580b40]===undefined)throw _0x58e685(_0x580b40);}return _0x1d3720[_0x580b40];}});jsUtils['toSafeRecord']=toSafeRecord;const waitForAllRecord=async _0x39191b=>{const _0x2c962c=Object['keys'](_0x39191b),_0x378782=_0x2c962c['map'](_0x21d1f0=>_0x39191b[_0x21d1f0]),_0x187f6e=await Promise['all'](_0x378782),_0x2763a9={};for(let _0x813734=0x0;_0x813734<_0x2c962c['length'];++_0x813734){_0x2763a9[_0x2c962c[_0x813734]]=_0x187f6e[_0x813734];}return _0x2763a9;};jsUtils['waitForAllRecord']=waitForAllRecord;

var memoize$1 = {};

Object['defineProperty'](memoize$1,'__esModule',{'value':!![]});memoize$1['memoize']=memoize;const errors_1=errors,EXPECTED_MAX_CACHE_ENTRIES_PER_FN=0x186a0,EXPECTED_MAX_CACHE_KEY_LENGTH_PER_FN=0x2710,CLEAN_EVERY_N_ITERATION_DEFAULT=0x1;function memoize({functionToMemoize:_0x566697,ttl:_0x2fbb76,cacheKeyBuilder:cacheKeyBuilder=(..._0xd6362)=>JSON['stringify'](_0xd6362),cacheReporter:cacheReporter=()=>{},cleanEveryNIteration:cleanEveryNIteration=CLEAN_EVERY_N_ITERATION_DEFAULT}){const _0x52d34c={};let _0x4fdfd7=0x0;return async(..._0xf47adb)=>{const _0x2a3258=await cacheKeyBuilder(..._0xf47adb);(0, errors_1['assertWithLog'])(_0x2a3258['length']<EXPECTED_MAX_CACHE_KEY_LENGTH_PER_FN,'Assumed\x20cache\x20key\x20will\x20not\x20be\x20longer\x20than\x20'+EXPECTED_MAX_CACHE_KEY_LENGTH_PER_FN+'.\x20Suspicious\x20key\x20'+_0x2a3258),_0x4fdfd7=(_0x4fdfd7+0x1)%cleanEveryNIteration;_0x4fdfd7==0x0&&cleanStaleCacheEntries(_0x52d34c,_0x2fbb76);const _0x4dc02f=!_0x52d34c[_0x2a3258]||Date['now']()-_0x52d34c[_0x2a3258]['lastSet']>_0x2fbb76;return _0x4dc02f&&(_0x52d34c[_0x2a3258]={'lastSet':Date['now'](),'promise':_0x566697(..._0xf47adb)['catch'](_0x6a3176=>{delete _0x52d34c[_0x2a3258];throw _0x6a3176;})}),cacheReporter(_0x4dc02f),await _0x52d34c[_0x2a3258]['promise'];};}const cleanStaleCacheEntries=(_0x5b9cdf,_0x5041f2)=>{const _0x4d6018=Date['now'](),_0x2c0236=Object['keys'](_0x5b9cdf);(0, errors_1['assertWithLog'])(_0x2c0236['length']<EXPECTED_MAX_CACHE_ENTRIES_PER_FN,'Assumed\x20cache\x20key\x20space\x20will\x20not\x20grow\x20over\x20'+EXPECTED_MAX_CACHE_ENTRIES_PER_FN+'\x20but\x20is\x20'+_0x2c0236['length']);for(const _0x41afdf of _0x2c0236){_0x4d6018-_0x5b9cdf[_0x41afdf]['lastSet']>_0x5041f2&&delete _0x5b9cdf[_0x41afdf];}};

var misc = {};

var __importDefault$n=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x44b106){return _0x44b106&&_0x44b106['__esModule']?_0x44b106:{'default':_0x44b106};};Object['defineProperty'](misc,'__esModule',{'value':!![]});misc['roundToSignificantDigits']=roundToSignificantDigits;misc['getFilenameWithoutExtension']=getFilenameWithoutExtension;misc['getS']=getS;misc['stringify']=stringify;const lodash_1$e=__importDefault$n(_0x62d7dc);function roundToSignificantDigits(_0x51497a,_0xaf9959=0x2){if(_0x51497a===0x0)return 0x0;const _0x2d995b=Math['ceil'](Math['log10'](_0x51497a<0x0?-_0x51497a:_0x51497a)),_0x5a75df=_0xaf9959-_0x2d995b,_0x5318c2=Math['pow'](0xa,_0x5a75df),_0x41a2e2=Math['round'](_0x51497a*_0x5318c2);return _0x41a2e2/_0x5318c2;}function getFilenameWithoutExtension(_0x11492d){const _0x5e9966=_0x11492d['substring'](_0x11492d['lastIndexOf']('/')+0x1);return _0x5e9966['split']('.')['slice'](0x0,-0x1)['join']('.');}function getS(_0x122385,_0x2a6e93='s'){return _0x122385!==0x1?_0x2a6e93:'';}function stringify(_0x468f9a){if(typeof _0x468f9a==='string')return _0x468f9a;if(_0x468f9a===undefined||_0x468f9a===null)return String(_0x468f9a);try{if(typeof _0x468f9a==='number'||typeof _0x468f9a==='boolean'||typeof _0x468f9a==='bigint'||typeof _0x468f9a==='symbol')return String(_0x468f9a);return unescapeString(JSON['stringify'](_0x468f9a));}catch(_0x3f6c45){if(typeof _0x468f9a['toString']==='function'&&_0x468f9a['toString']!==Object['prototype']['toString'])return unescapeString(_0x468f9a['toString']());if(typeof _0x468f9a==='object')try{const _0x217436=Object['entries'](_0x468f9a)['map'](([_0x437d13,_0x539dcf])=>{if(typeof _0x539dcf==='object'&&_0x539dcf!==null)_0x539dcf=stringify(_0x539dcf);else typeof _0x539dcf==='function'&&(_0x539dcf='[Function]');return _0x437d13+':\x20'+_0x539dcf;});return '{'+_0x217436['join'](',\x20')+'}';}catch{return '[Complex\x20Object]';}return '[Unable\x20to\x20stringify\x20value]';}}function unescapeString(_0x5c624a){return lodash_1$e['default']['unescape'](_0x5c624a)['replace'](/\\"/g,'\x22')['replace'](/\\\\/g,'\x5c');}

var numbers = {};

Object['defineProperty'](numbers,'__esModule',{'value':!![]});numbers['safelyConvertAnyValueToNumber']=void 0x0;const logger_1$5=logger$d,logger$b=(0, logger_1$5['loggerFactory'])('utils/numbers'),safelyConvertAnyValueToNumber=_0xe39613=>{return ['string','number']['includes'](typeof _0xe39613)?Number(_0xe39613):(logger$b['warn']('Value\x20can\x20not\x20be\x20converted\x20to\x20a\x20valid\x20number.\x20Received:\x20'+String(_0xe39613)),NaN);};numbers['safelyConvertAnyValueToNumber']=safelyConvertAnyValueToNumber;

var objects = {};

Object['defineProperty'](objects,'__esModule',{'value':!![]});objects['createEmptySet']=objects['ensureInitialized']=void 0x0;objects['mergeObjects']=mergeObjects;objects['getRequiredPropValue']=getRequiredPropValue;objects['isEmpty']=isEmpty;objects['useDefaultIfEmpty']=useDefaultIfEmpty;objects['fetchDefaultIfEmpty']=fetchDefaultIfEmpty;objects['isDefined']=isDefined;objects['isTruthy']=isTruthy;function mergeObjects(_0x238734){return Object['assign']({},..._0x238734);}function getRequiredPropValue(_0x4a3371,_0x2f7eaa){if(_0x4a3371[_0x2f7eaa]===undefined)throw new Error('Object\x20does\x20not\x20contain\x20required\x20property\x20\x22'+_0x2f7eaa+'\x22.\x20Obj:\x20'+JSON['stringify'](_0x4a3371));return _0x4a3371[_0x2f7eaa];}function isEmpty(_0x4abfde){return isDefined(_0x4abfde)&&_0x4abfde!=='';}function useDefaultIfEmpty(_0x1bb0a0,_0x4592a7){return isEmpty(_0x1bb0a0)?_0x1bb0a0:_0x4592a7;}async function fetchDefaultIfEmpty(_0x3be064,_0x4a1699){return isEmpty(_0x3be064)?_0x3be064:await _0x4a1699();}function isDefined(_0x386978){return _0x386978!==null&&_0x386978!==undefined;}function isTruthy(_0x43576c){return !!_0x43576c;}const ensureInitialized=(_0x177d64,_0xa3e34,_0x1ae3ed)=>{return !(_0xa3e34 in _0x177d64)&&(_0x177d64[_0xa3e34]=_0x1ae3ed()),!![];};objects['ensureInitialized']=ensureInitialized;const createEmptySet=()=>new Set();objects['createEmptySet']=createEmptySet;

var pThrottle = {};

(function(_0x118d3e){Object['defineProperty'](_0x118d3e,'__esModule',{'value':!![]}),_0x118d3e['pThrottle']=void 0x0,_0x118d3e['withRateLimiter']=_0x123e76;const _0x3d13e4=({limit:_0x423199,interval:_0x4568b6,strict:_0x13d82b,onDelay:_0x13aaa6})=>{if(!Number['isFinite'](_0x423199))throw new TypeError('Expected\x20`limit`\x20to\x20be\x20a\x20finite\x20number');if(!Number['isFinite'](_0x4568b6))throw new TypeError('Expected\x20`interval`\x20to\x20be\x20a\x20finite\x20number');const _0x1f7c2a=new Map();let _0x239329=0x0,_0x3d32f7=0x0;function _0x12fb0b(){const _0x1064c8=Date['now']();if(_0x1064c8-_0x239329>_0x4568b6)return _0x3d32f7=0x1,_0x239329=_0x1064c8,0x0;return _0x3d32f7<_0x423199?_0x3d32f7++:(_0x239329+=_0x4568b6,_0x3d32f7=0x1),_0x239329-_0x1064c8;}const _0x1db44f=[];function _0x14ddba(){const _0x1ceef8=Date['now']();_0x1db44f['length']>0x0&&_0x1ceef8-_0x1db44f['at'](-0x1)>_0x4568b6&&(_0x1db44f['length']=0x0);if(_0x1db44f['length']<_0x423199)return _0x1db44f['push'](_0x1ceef8),0x0;const _0x13f826=_0x1db44f[0x0]+_0x4568b6;return _0x1db44f['shift'](),_0x1db44f['push'](_0x13f826),Math['max'](0x0,_0x13f826-_0x1ceef8);}const _0x5888c1=_0x13d82b?_0x14ddba:_0x12fb0b;return _0x6a8aa1=>{const _0x5d90f8=function(..._0xf67a9e){if(!_0x5d90f8['isEnabled'])return((async()=>_0x6a8aa1['apply'](this,_0xf67a9e))());let _0x30aa00;return new Promise((_0x43bda0,_0x31eb55)=>{const _0x19ee7d=()=>{_0x43bda0(_0x6a8aa1['apply'](this,_0xf67a9e)),_0x1f7c2a['delete'](_0x30aa00);},_0x4f1158=_0x5888c1();_0x4f1158>0x0?(_0x30aa00=setTimeout(_0x19ee7d,_0x4f1158),_0x1f7c2a['set'](_0x30aa00,_0x31eb55),_0x13aaa6?.()):_0x19ee7d();});};return _0x5d90f8['isEnabled']=!![],Object['defineProperty'](_0x5d90f8,'queueSize',{'get'(){return _0x1f7c2a['size'];}}),_0x5d90f8;};};_0x118d3e['pThrottle']=_0x3d13e4;function _0x123e76(_0x2c23f8,_0x31045c){const _0xcb19fc=(0, _0x118d3e['pThrottle'])(_0x31045c);return _0xcb19fc(_0x2c23f8);}}(pThrottle));getDefaultExportFromCjs(pThrottle);

var privateKey = {};

Object['defineProperty'](privateKey,'__esModule',{'value':!![]});

var SetWithTTL$1 = {};

Object['defineProperty'](SetWithTTL$1,'__esModule',{'value':!![]});SetWithTTL$1['SetWithTTL']=void 0x0;class SetWithTTL{['state']=new Map();get['size'](){return this['state']['size'];}['add'](_0x1db2cd,_0x277ccb){!this['state']['has'](_0x1db2cd)&&this['state']['set'](_0x1db2cd,_0x277ccb);}['has'](_0x3247c3){return this['state']['has'](_0x3247c3);}['removeOlderThen'](_0x524c7a){for(const [_0xec868d,_0xc809f8]of this['state']['entries']()){_0xc809f8<_0x524c7a&&this['state']['delete'](_0xec868d);}}}SetWithTTL$1['SetWithTTL']=SetWithTTL;

var simpleCache = {};

Object['defineProperty'](simpleCache,'__esModule',{'value':!![]});simpleCache['SimpleCache']=void 0x0;class SimpleCache{['ttl'];['value'];['timestamp']=0x0;constructor(_0x34b407){this['ttl']=_0x34b407;}['get'](_0x2c023e){return (!this['value']||Date['now']()-this['timestamp']>this['ttl'])&&(this['value']=_0x2c023e(),this['timestamp']=Date['now']()),this['value'];}}simpleCache['SimpleCache']=SimpleCache;

var unsupportedParam = {};

Object['defineProperty'](unsupportedParam,'__esModule',{'value':!![]});unsupportedParam['throwUnsupportedParamError']=throwUnsupportedParamError;function throwUnsupportedParamError(_0x14d496){throw new Error('Unsupported\x20param\x20'+String(_0x14d496));}

var waitForBlockNumber$1 = {};

Object['defineProperty'](waitForBlockNumber$1,'__esModule',{'value':!![]});waitForBlockNumber$1['waitForBlockNumber']=waitForBlockNumber;const logger_1$4=logger$d,retry_1=retry$1,DEFAULT_MAX_ITERATION_COUNT=0x78,DEFAULT_WAITING_INTERVAL_MS=0x1f4,logger$a=(0, logger_1$4['loggerFactory'])('waitForBlockNumber');async function waitForBlockNumber(_0x5e8993,_0x39f76c,_0x219187='',_0x91ffd2=DEFAULT_WAITING_INTERVAL_MS,_0x2b2152=DEFAULT_MAX_ITERATION_COUNT){if(!_0x39f76c)return;await(0, retry_1['waitForSuccess'])(_0x20ba80=>getBlockNumberWithLog(_0x5e8993,_0x39f76c,_0x219187,_0x20ba80),_0x2b2152,'['+_0x219187+']\x20Didn\x27t\x20achieve\x20block\x20number\x20'+_0x39f76c+'\x20in\x20'+_0x2b2152*_0x91ffd2/0x3e8+'\x20[s]',_0x91ffd2,_0x219187);}async function getBlockNumberWithLog(_0x39a35f,_0x1e0c63,_0x59682a='',_0x47d511){const _0x28d54=await _0x39a35f(),_0x299570=_0x28d54>=_0x1e0c63;return (_0x47d511?logger$a['info']:logger$a['debug'])('['+_0x59682a+']\x20Iteration\x20#'+_0x47d511+'\x20Current\x20block\x20number:\x20'+_0x28d54+(!_0x299570?'\x20(missing:\x20'+(_0x1e0c63-_0x28d54)+')':'')),_0x299570;}

var zodHelpers = {};

Object['defineProperty'](zodHelpers,'__esModule',{'value':!![]});zodHelpers['zodAssert']=zodAssert;function zodAssert(_0x52d79f,_0x342aea){const _0x58823f=_0x52d79f['safeParse'](_0x342aea);if(!_0x58823f['success'])throw new Error('Zod\x20validation\x20error:\x20'+_0x58823f['error']['toString']());}

(function(_0x33c61a){var _0x35c0da=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x30cc7d,_0x324d3a,_0x738900,_0x5cd1fe){if(_0x5cd1fe===undefined)_0x5cd1fe=_0x738900;var _0x4668b9=Object['getOwnPropertyDescriptor'](_0x324d3a,_0x738900);(!_0x4668b9||('get'in _0x4668b9?!_0x324d3a['__esModule']:_0x4668b9['writable']||_0x4668b9['configurable']))&&(_0x4668b9={'enumerable':!![],'get':function(){return _0x324d3a[_0x738900];}}),Object['defineProperty'](_0x30cc7d,_0x5cd1fe,_0x4668b9);}:function(_0xedf5a9,_0x4fda13,_0x34ac77,_0x1054f3){if(_0x1054f3===undefined)_0x1054f3=_0x34ac77;_0xedf5a9[_0x1054f3]=_0x4fda13[_0x34ac77];}),_0x569080=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x1727a8,_0x5b59b4){for(var _0x56e782 in _0x1727a8)if(_0x56e782!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x5b59b4,_0x56e782))_0x35c0da(_0x5b59b4,_0x1727a8,_0x56e782);};Object['defineProperty'](_0x33c61a,'__esModule',{'value':!![]}),_0x569080(array,_0x33c61a),_0x569080(axiosRetry,_0x33c61a),_0x569080(base64,_0x33c61a),_0x569080(batchPromises$1,_0x33c61a),_0x569080(bigNumbers,_0x33c61a),_0x569080(clone,_0x33c61a),_0x569080(conversions,_0x33c61a),_0x569080(env,_0x33c61a),_0x569080(errors,_0x33c61a),_0x569080(fetchWithFallback,_0x33c61a),_0x569080(fsPathSafe,_0x33c61a),_0x569080(jsUtils,_0x33c61a),_0x569080(memoize$1,_0x33c61a),_0x569080(misc,_0x33c61a),_0x569080(numbers,_0x33c61a),_0x569080(objects,_0x33c61a),_0x569080(pThrottle,_0x33c61a),_0x569080(privateKey,_0x33c61a),_0x569080(retry$1,_0x33c61a),_0x569080(SetWithTTL$1,_0x33c61a),_0x569080(simpleCache,_0x33c61a),_0x569080(time,_0x33c61a),_0x569080(unsupportedParam,_0x33c61a),_0x569080(waitForBlockNumber$1,_0x33c61a),_0x569080(zodHelpers,_0x33c61a);}(common$1));getDefaultExportFromCjs(common$1);

var constants = {};

var hasRequiredConstants;function requireConstants(){if(hasRequiredConstants)return constants;hasRequiredConstants=0x1,Object['defineProperty'](constants,'__esModule',{'value':!![]}),constants['DEFAULT_LATEST_DATA_PACKAGES_MAX_DELAY_MS']=void 0x0;const _0x4d8fc9=requireSrc$3();return constants['DEFAULT_LATEST_DATA_PACKAGES_MAX_DELAY_MS']=_0x4d8fc9['RedstoneCommon']['minToMs'](0x1),constants;}

var crypto = {};

var hash = {};

Object['defineProperty'](hash,'__esModule',{'value':!![]});hash['sha256ToHex']=void 0x0;const utils_1$1k=_0x4eca3f,sha256ToHex=_0x133f6e=>(0, utils_1$1k['sha256'])(_0x133f6e);hash['sha256ToHex']=sha256ToHex;

(function(_0x35c814){var _0x56a58e=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x377961,_0x11fed2,_0x3eba21,_0x148a3d){if(_0x148a3d===undefined)_0x148a3d=_0x3eba21;var _0xd5c9bc=Object['getOwnPropertyDescriptor'](_0x11fed2,_0x3eba21);(!_0xd5c9bc||('get'in _0xd5c9bc?!_0x11fed2['__esModule']:_0xd5c9bc['writable']||_0xd5c9bc['configurable']))&&(_0xd5c9bc={'enumerable':!![],'get':function(){return _0x11fed2[_0x3eba21];}}),Object['defineProperty'](_0x377961,_0x148a3d,_0xd5c9bc);}:function(_0x31487e,_0x47f53b,_0x40e08e,_0xeca4fe){if(_0xeca4fe===undefined)_0xeca4fe=_0x40e08e;_0x31487e[_0xeca4fe]=_0x47f53b[_0x40e08e];}),_0x40de21=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x2513fb,_0x2ead88){for(var _0xd183b3 in _0x2513fb)if(_0xd183b3!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x2ead88,_0xd183b3))_0x56a58e(_0x2ead88,_0x2513fb,_0xd183b3);};Object['defineProperty'](_0x35c814,'__esModule',{'value':!![]}),_0x40de21(hash,_0x35c814);}(crypto));getDefaultExportFromCjs(crypto);

var curatedList = {};

var CuratedRpcList$1 = {};

var math = {};

var ISafeNumber$1 = {};

var ISafeNumber = {};

Object['defineProperty'](ISafeNumber,'__esModule',{'value':!![]});

var ISafeNumberFactory = {};

var JsNativeSafeNumber = {};

(function(_0x48ea01){Object['defineProperty'](_0x48ea01,'__esModule',{'value':!![]}),_0x48ea01['JsNativeSafeNumber']=_0x48ea01['JsNativeSafeNumberConfig']=_0x48ea01['NumberValidationResult']=void 0x0;const _0x44f193=logger$d;var _0x22f875;(function(_0xed1618){_0xed1618[_0xed1618['isOk']=0x0]='isOk',_0xed1618[_0xed1618['isNaN']=0x1]='isNaN',_0xed1618[_0xed1618['isNotFinite']=0x2]='isNotFinite',_0xed1618[_0xed1618['isOverflow']=0x3]='isOverflow',_0xed1618[_0xed1618['isUnderflow']=0x4]='isUnderflow';}(_0x22f875||(_0x48ea01['NumberValidationResult']=_0x22f875={})));const _0x3f9e16=(0, _0x44f193['loggerFactory'])('JsNativeSafeNumber');_0x48ea01['JsNativeSafeNumberConfig']={'MAX_NUMBER':Number['MAX_SAFE_INTEGER'],'MIN_NUMBER':1e-14,'MAX_DECIMALS':0xe,'DIGIT_REGEXP':/^[-+]?(\d+(\.\d{1,63})?|\.\d{1,63})([eE][-+]?\d+)?$/,'ON_NUMBER_VALIDATION_ERROR':{[_0x22f875['isNaN']]:_0x3f8f65=>{throw new Error(_0x3f8f65);},[_0x22f875['isNotFinite']]:_0x498608=>{throw new Error(_0x498608);},[_0x22f875['isOverflow']]:_0x3f9e16['error']['bind'](_0x3f9e16),[_0x22f875['isUnderflow']]:()=>{}},'EPSILON':1e-14};class _0x1079c8{static['from'](_0x25ac76){if(_0x25ac76 instanceof _0x1079c8)return new _0x1079c8(_0x25ac76['unsafeToNumber']());else {if(typeof _0x25ac76==='number'||typeof _0x25ac76==='string')return new _0x1079c8(_0x43144a(_0x25ac76));else throw new Error('Invalid\x20number\x20format:\x20Tried\x20to\x20create\x20JsNativeSafeNumber\x20from\x20'+JSON['stringify'](_0x25ac76));}}['_value'];constructor(_0x208802){this['_value']=_0x208802;}['decimals'](){return _0x48ea01['JsNativeSafeNumberConfig']['MAX_DECIMALS'];}['toString'](){return this['_value']['toString']();}['isSafeNumber'](){return !![];}['abs'](){const _0x107f27=Math['abs'](this['_value']);return this['produceNewSafeNumber'](_0x107f27);}['log2'](){const _0x507ed1=Math['log2'](this['_value']);return this['produceNewSafeNumber'](_0x507ed1);}['mod'](_0x5dc12f){const _0x4faf98=this['_value']%_0x1079c8['from'](_0x5dc12f)['unsafeToNumber']();return this['produceNewSafeNumber'](_0x4faf98);}['round'](){const _0x2ffcb9=Math['round'](this['_value']);return new _0x1079c8(_0x2ffcb9);}['add'](_0x9cae2b){const _0x560952=this['_value']+_0x1079c8['from'](_0x9cae2b)['unsafeToNumber']();return this['produceNewSafeNumber'](_0x560952);}['sub'](_0xdf9841){const _0x1506a3=this['_value']-_0x1079c8['from'](_0xdf9841)['unsafeToNumber']();return this['produceNewSafeNumber'](_0x1506a3);}['div'](_0xc43952){const _0x3e9338=this['_value']/_0x1079c8['from'](_0xc43952)['unsafeToNumber']();return this['produceNewSafeNumber'](_0x3e9338);}['mul'](_0xaaf4a4){const _0x50d5e3=this['_value']*_0x1079c8['from'](_0xaaf4a4)['unsafeToNumber']();return this['produceNewSafeNumber'](_0x50d5e3);}['assertNonNegative'](){if(this['_value']<0x0)throw new Error('Assert\x20non\x20negative\x20failed');}['assertPositive'](){if(this['_value']<=0x0)throw new Error('Assert\x20positive\x20failed');}['unsafeToNumber'](){return this['_value'];}['eq'](_0x48be8a){const _0x343509=_0x1079c8['from'](_0x48be8a);return Math['abs'](_0x343509['unsafeToNumber']()-this['_value'])<_0x48ea01['JsNativeSafeNumberConfig']['EPSILON'];}['lt'](_0xf551d9){return this['_value']<_0x1079c8['from'](_0xf551d9)['unsafeToNumber']();}['lte'](_0x53caf0){return this['lt'](_0x53caf0)||this['eq'](_0x53caf0);}['gt'](_0x47daf9){return this['_value']>_0x1079c8['from'](_0x47daf9)['unsafeToNumber']();}['gte'](_0x36cad6){return this['gt'](_0x36cad6)||this['eq'](_0x36cad6);}['toJSON'](){return this['unsafeToNumber']();}['produceNewSafeNumber'](_0x2dbb48){const _0x4708bd=new _0x1079c8(_0x2dbb48);return _0x4708bd['assertValidAndRound'](),_0x4708bd;}['assertValidAndRound'](){const {result:_0x54fcce,message:_0x4195c7}=_0x4b9898(this['_value']);_0x54fcce!==_0x22f875['isOk']&&_0x48ea01['JsNativeSafeNumberConfig']['ON_NUMBER_VALIDATION_ERROR'][_0x54fcce](_0x4195c7),this['_value']=Number(this['_value']['toFixed'](_0x48ea01['JsNativeSafeNumberConfig']['MAX_DECIMALS']));}}_0x48ea01['JsNativeSafeNumber']=_0x1079c8;const _0x4b9898=_0xce3c6c=>{if(Number['isNaN'](_0xce3c6c))return {'result':_0x22f875['isNaN'],'message':'Invalid\x20number\x20format:\x20number\x20is\x20NaN'};else {if(!Number['isFinite'](_0xce3c6c))return {'result':_0x22f875['isNotFinite'],'message':'Invalid\x20number\x20format:\x20number\x20is\x20not\x20finite'};}if(Math['abs'](_0xce3c6c)>_0x48ea01['JsNativeSafeNumberConfig']['MAX_NUMBER'])return {'result':_0x22f875['isOverflow'],'message':'Invalid\x20number\x20format:\x20Number\x20is\x20bigger\x20than\x20max\x20number\x20acceptable\x20by\x20REDSTONE\x20('+_0xce3c6c+')'};if(Math['abs'](_0xce3c6c)<_0x48ea01['JsNativeSafeNumberConfig']['MIN_NUMBER']&&_0xce3c6c!==0x0)return {'result':_0x22f875['isUnderflow'],'message':'Invalid\x20number\x20format:\x20Number\x20is\x20smaller\x20than\x20min\x20number\x20acceptable\x20by\x20REDSTONE\x20('+_0xce3c6c+')'};return {'result':_0x22f875['isOk'],'message':''};},_0x43144a=_0x1dbe5a=>{let _0x41bebd;if(typeof _0x1dbe5a==='string'){if(!_0x48ea01['JsNativeSafeNumberConfig']['DIGIT_REGEXP']['test'](_0x1dbe5a))throw new Error('Invalid\x20number\x20format:\x20'+_0x1dbe5a+',\x20not\x20matching\x20regexp:\x20'+_0x48ea01['JsNativeSafeNumberConfig']['DIGIT_REGEXP']);_0x41bebd=Number(_0x1dbe5a);}else {if(typeof _0x1dbe5a==='number')_0x41bebd=Number(_0x1dbe5a);else throw new Error('Invalid\x20number\x20format,\x20expected:\x20string\x20or\x20number');}const {result:_0x1929b0,message:_0x5cc2c9}=_0x4b9898(_0x41bebd);return _0x1929b0!==_0x22f875['isOk']&&_0x48ea01['JsNativeSafeNumberConfig']['ON_NUMBER_VALIDATION_ERROR'][_0x1929b0](_0x5cc2c9),_0x41bebd;};}(JsNativeSafeNumber));getDefaultExportFromCjs(JsNativeSafeNumber);

(function(_0x2de18d){Object['defineProperty'](_0x2de18d,'__esModule',{'value':!![]}),_0x2de18d['SafeOne']=_0x2de18d['SafeZero']=_0x2de18d['createSafeNumber']=void 0x0;const _0x20f305=JsNativeSafeNumber,_0x45e292=_0x393a93=>_0x20f305['JsNativeSafeNumber']['from'](_0x393a93);_0x2de18d['createSafeNumber']=_0x45e292,_0x2de18d['SafeZero']=(0, _0x2de18d['createSafeNumber'])(0x0),_0x2de18d['SafeOne']=(0, _0x2de18d['createSafeNumber'])(0x1);}(ISafeNumberFactory));getDefaultExportFromCjs(ISafeNumberFactory);

var ISafeNumberMath = {};

(function(_0x5d55bc){Object['defineProperty'](_0x5d55bc,'__esModule',{'value':!![]}),_0x5d55bc['calculateDeviationPercent']=_0x5d55bc['calculateAverageValue']=_0x5d55bc['calculateSum']=void 0x0,_0x5d55bc['getMedian']=_0x30a786;const _0x26a8dc=ISafeNumberFactory,_0x1406ad=_0x3a93e6=>_0x3a93e6['reduce']((_0x8fd9ae,_0xe5ddc)=>_0x8fd9ae['add'](_0xe5ddc),_0x26a8dc['SafeZero']);_0x5d55bc['calculateSum']=_0x1406ad;const _0x5bbead=_0x27b351=>{if(_0x27b351['length']===0x0)throw new Error('Can\x20not\x20calculate\x20an\x20average\x20value\x20for\x20an\x20empty\x20array');const _0xc4b5a7=(0, _0x5d55bc['calculateSum'])(_0x27b351)['div'](_0x27b351['length']);return _0xc4b5a7;};_0x5d55bc['calculateAverageValue']=_0x5bbead;const _0x10e443=_0x1e7033=>{const {baseValue:_0x5a8ac3,deviatedValue:_0x5103b1}=_0x1e7033;if(_0x5a8ac3['eq'](0x0))return (0, _0x26a8dc['createSafeNumber'])(Number['MAX_SAFE_INTEGER']);const _0x564c31=_0x5103b1['sub'](_0x5a8ac3)['div'](_0x5a8ac3)['abs']()['mul'](0x64);return _0x564c31;};_0x5d55bc['calculateDeviationPercent']=_0x10e443;function _0x30a786(_0x2e4aca){if(_0x2e4aca['length']===0x0)throw new Error('Cannot\x20get\x20median\x20value\x20of\x20an\x20empty\x20array');if(_0x2e4aca['length']===0x1)return _0x2e4aca[0x0];_0x2e4aca=_0x2e4aca['length']===0x2?_0x2e4aca:_0x2e4aca['sort']((_0x489177,_0x1ec7fb)=>_0x489177['lt'](_0x1ec7fb)?-0x1:0x1);const _0x20fd02=Math['floor'](_0x2e4aca['length']/0x2);return _0x2e4aca['length']%0x2===0x0?_0x2e4aca[_0x20fd02]['div'](0x2)['add'](_0x2e4aca[_0x20fd02-0x1]['div'](0x2)):_0x2e4aca[_0x20fd02];}}(ISafeNumberMath));getDefaultExportFromCjs(ISafeNumberMath);

var ISafeNumberWeighted = {};

var hasRequiredISafeNumberWeighted;function requireISafeNumberWeighted(){if(hasRequiredISafeNumberWeighted)return ISafeNumberWeighted;hasRequiredISafeNumberWeighted=0x1,Object['defineProperty'](ISafeNumberWeighted,'__esModule',{'value':!![]}),ISafeNumberWeighted['normalizeWeightedValues']=ISafeNumberWeighted['logarithmicWeighting']=ISafeNumberWeighted['getWeightedMedian']=void 0x0;const _0x18b030=requireISafeNumber(),_0x4d410e=_0x1acaa2=>{if(_0x1acaa2['length']===0x0)throw new Error('Cannot\x20get\x20weighted\x20median\x20value\x20of\x20an\x20empty\x20array');const _0x4205bc=[..._0x1acaa2]['sort']((_0x3f853f,_0x195eb2)=>_0x3f853f['value']['lt'](_0x195eb2['value'])?-0x1:0x1),_0x2ab0e5=(0, _0x18b030['calculateSum'])(_0x4205bc['map'](_0x37ad46=>_0x37ad46['weight']))['div'](0x2);let _0x53a894=_0x18b030['SafeZero'];for(let _0x3c9bb2=0x0;_0x3c9bb2<_0x4205bc['length'];_0x3c9bb2++){const _0x229fc4=_0x4205bc[_0x3c9bb2];_0x53a894=_0x53a894['add'](_0x229fc4['weight']);if(_0x53a894['gt'](_0x2ab0e5))return _0x229fc4['value'];else {if(_0x53a894['eq'](_0x2ab0e5))return _0x229fc4['value']['add'](_0x4205bc[_0x3c9bb2+0x1]['value'])['div'](0x2);}}throw new Error('This\x20should\x20not\x20happen:\x20the\x20accumulated\x20weight\x20did\x20not\x20exceed\x20half\x20of\x20the\x20sum\x20of\x20the\x20weights');};ISafeNumberWeighted['getWeightedMedian']=_0x4d410e;const _0x338c23=_0x2ce527=>{const _0x4c69b3=(0, _0x18b030['getMedian'])(_0x2ce527['map'](_0x51e4f4=>_0x51e4f4['weight']));return _0x2ce527['map'](_0x43834b=>({'value':_0x43834b['value'],'weight':_0x43834b['weight']['div'](_0x4c69b3)['add'](0x1)['log2']()}));};ISafeNumberWeighted['logarithmicWeighting']=_0x338c23;const _0x3fecb0=_0x221d22=>{const _0x44cdcd=(0, _0x18b030['calculateSum'])(_0x221d22['map'](_0x448c48=>_0x448c48['weight']));return _0x221d22['map'](_0x1d3eac=>({'value':_0x1d3eac['value'],'weight':_0x1d3eac['weight']['div'](_0x44cdcd)}));};return ISafeNumberWeighted['normalizeWeightedValues']=_0x3fecb0,ISafeNumberWeighted;}

var hasRequiredISafeNumber;function requireISafeNumber(){if(hasRequiredISafeNumber)return ISafeNumber$1;return hasRequiredISafeNumber=0x1,function(_0x2a6a58){var _0x4f30e3=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x33ea47,_0x462a0f,_0xb66341,_0x27c3bb){if(_0x27c3bb===undefined)_0x27c3bb=_0xb66341;var _0x2bd439=Object['getOwnPropertyDescriptor'](_0x462a0f,_0xb66341);(!_0x2bd439||('get'in _0x2bd439?!_0x462a0f['__esModule']:_0x2bd439['writable']||_0x2bd439['configurable']))&&(_0x2bd439={'enumerable':!![],'get':function(){return _0x462a0f[_0xb66341];}}),Object['defineProperty'](_0x33ea47,_0x27c3bb,_0x2bd439);}:function(_0x357cac,_0x28cb39,_0x49d596,_0x35c8b5){if(_0x35c8b5===undefined)_0x35c8b5=_0x49d596;_0x357cac[_0x35c8b5]=_0x28cb39[_0x49d596];}),_0x5dab6a=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x1fa454,_0x11b404){for(var _0x3f0815 in _0x1fa454)if(_0x3f0815!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x11b404,_0x3f0815))_0x4f30e3(_0x11b404,_0x1fa454,_0x3f0815);};Object['defineProperty'](_0x2a6a58,'__esModule',{'value':!![]}),_0x5dab6a(ISafeNumber,_0x2a6a58),_0x5dab6a(ISafeNumberFactory,_0x2a6a58),_0x5dab6a(ISafeNumberMath,_0x2a6a58),_0x5dab6a(requireISafeNumberWeighted(),_0x2a6a58),_0x5dab6a(JsNativeSafeNumber,_0x2a6a58);}(ISafeNumber$1),ISafeNumber$1;}

var monotonicCubicSpline = {};

Object['defineProperty'](monotonicCubicSpline,'__esModule',{'value':!![]});monotonicCubicSpline['monotoneCubicInterpolation']=monotonicCubicSpline['CubicInterpolation']=void 0x0;class CubicInterpolation{['xs'];['ys'];['firstSlope'];['lastSlope'];['fun'];constructor(_0x44bedd,_0xa6758c,_0x394b94,_0x23baa5,_0x7f11e7){this['xs']=_0x44bedd,this['ys']=_0xa6758c,this['firstSlope']=_0x394b94,this['lastSlope']=_0x23baa5,this['fun']=_0x7f11e7;}['forX'](_0x6865ff){if(_0x6865ff<this['xs'][0x0])return this['ys'][0x0]-this['firstSlope']*(this['xs'][0x0]-_0x6865ff);else return _0x6865ff>this['xs'][this['xs']['length']-0x1]?this['ys'][this['ys']['length']-0x1]+this['lastSlope']*(_0x6865ff-this['xs'][this['xs']['length']-0x1]):this['fun'](_0x6865ff);}['forY'](_0x4a48a1,_0x18c0f0){if(_0x4a48a1<this['ys'][0x0])return this['xs'][0x0]-(this['ys'][0x0]-_0x4a48a1)/this['firstSlope'];else {if(_0x4a48a1>this['ys'][this['ys']['length']-0x1])return this['xs'][this['xs']['length']-0x1]+(_0x4a48a1-this['ys'][this['ys']['length']-0x1])/this['lastSlope'];else {const _0xb891f4=findIntervalIndex(_0x4a48a1,this['ys']);if(_0x4a48a1===this['ys'][_0xb891f4])return this['xs'][_0xb891f4];let _0x195b99=this['xs'][_0xb891f4],_0x2e6d75=this['xs'][_0xb891f4+0x1],_0x5783f7=0x32;while(_0x195b99<=_0x2e6d75&&_0x5783f7>0x0){const _0x24db38=(_0x195b99+_0x2e6d75)/0x2;if(Math['abs'](_0x2e6d75-_0x195b99)<_0x18c0f0)return _0x24db38;const _0x5949ba=this['forX'](_0x24db38);if(Math['abs'](_0x5949ba-_0x4a48a1)<_0x18c0f0)return _0x24db38;_0x5949ba<_0x4a48a1?_0x195b99=_0x24db38:_0x2e6d75=_0x24db38,_0x5783f7--;}throw new Error('X\x20was\x20not\x20found\x20for\x20Y\x20=\x20'+_0x4a48a1['toString']());}}}['getXs'](){return Object['freeze']([...this['xs']]);}['getYs'](){return Object['freeze']([...this['ys']]);}}monotonicCubicSpline['CubicInterpolation']=CubicInterpolation;const monotoneCubicInterpolation=(_0x23b390,_0x322aa4)=>{const {fun:_0x1719a2,firstSlope:_0xca24b5,lastSlope:_0x1d29ee,sortedXs:_0x36627f,sortedYs:_0x5eb316}=createInterpolant(_0x23b390,_0x322aa4);return new CubicInterpolation(_0x36627f,_0x5eb316,_0xca24b5,_0x1d29ee,_0x1719a2);};monotonicCubicSpline['monotoneCubicInterpolation']=monotoneCubicInterpolation;const createInterpolant=(_0xa76e17,_0x389d84)=>{if(_0xa76e17['length']!=_0x389d84['length'])throw new Error('The\x20number\x20of\x20xs\x20and\x20ys\x20should\x20be\x20equal');if(_0xa76e17['length']===0x0)throw new Error('Empty\x20array\x20of\x20xs');if(_0xa76e17['length']===0x1)throw new Error('Interpolation\x20cannot\x20be\x20performed\x20for\x20a\x20single\x20point');const [_0x4126f4,_0xcf50a0]=sortPoints(_0xa76e17,_0x389d84);if(!isMonotonic(_0xcf50a0,![]))throw new Error('The\x20given\x20points\x20are\x20not\x20monotonic');if(!isMonotonic(_0x4126f4,!![]))throw new Error('The\x20xs\x20array\x20cannot\x20have\x20duplicates');const _0x484f69=[],_0x27ee5b=[];for(let _0x4e25b5=0x0;_0x4e25b5<_0x4126f4['length']-0x1;_0x4e25b5++){const _0x486ad8=_0x4126f4[_0x4e25b5+0x1]-_0x4126f4[_0x4e25b5],_0x3a1958=_0xcf50a0[_0x4e25b5+0x1]-_0xcf50a0[_0x4e25b5];_0x484f69[_0x4e25b5]=_0x486ad8,_0x27ee5b[_0x4e25b5]=_0x3a1958/_0x486ad8;}const _0x5812e1=[_0x27ee5b[0x0]];for(let _0x269137=0x0;_0x269137<_0x484f69['length']-0x1;_0x269137++){const _0x385d7c=_0x27ee5b[_0x269137],_0x1a09eb=_0x27ee5b[_0x269137+0x1];if(_0x385d7c*_0x1a09eb<=0x0)_0x5812e1['push'](0x0);else {const _0xcf7d19=_0x484f69[_0x269137],_0x199064=_0x484f69[_0x269137+0x1],_0x7ee95=_0xcf7d19+_0x199064;_0x5812e1['push'](0x3*_0x7ee95/((_0x7ee95+_0x199064)/_0x385d7c+(_0x7ee95+_0xcf7d19)/_0x1a09eb));}}_0x5812e1['push'](_0x27ee5b[_0x27ee5b['length']-0x1]);const _0xcffaee=[],_0x5fe6a=[];for(let _0x439979=0x0;_0x439979<_0x5812e1['length']-0x1;_0x439979++){const _0x385c64=_0x5812e1[_0x439979],_0x468118=_0x27ee5b[_0x439979],_0x4cc532=0x1/_0x484f69[_0x439979],_0x1f0f5d=_0x385c64+_0x5812e1[_0x439979+0x1]-0x2*_0x468118;_0xcffaee['push']((_0x468118-_0x385c64-_0x1f0f5d)*_0x4cc532),_0x5fe6a['push'](_0x1f0f5d*_0x4cc532*_0x4cc532);}return {'fun':createInterpolantFunction(_0x4126f4,_0xcf50a0,_0x5812e1,_0xcffaee,_0x5fe6a),'firstSlope':_0x27ee5b[0x0],'lastSlope':_0x27ee5b[_0x27ee5b['length']-0x1],'sortedXs':_0x4126f4,'sortedYs':_0xcf50a0};},sortPoints=(_0x4f1a8d,_0xc9c8a1)=>{const _0x1a6eb0=[...Array(_0x4f1a8d['length'])['keys']()];_0x1a6eb0['sort']((_0x5a479f,_0xcd1e8d)=>{return _0x4f1a8d[_0x5a479f]-_0x4f1a8d[_0xcd1e8d];});const _0x1c5607=[],_0x33dfbf=[];for(let _0x1ecd8b=0x0;_0x1ecd8b<_0x4f1a8d['length'];_0x1ecd8b++){_0x1c5607[_0x1ecd8b]=_0x4f1a8d[_0x1a6eb0[_0x1ecd8b]],_0x33dfbf[_0x1ecd8b]=_0xc9c8a1[_0x1a6eb0[_0x1ecd8b]];}return [_0x1c5607,_0x33dfbf];},isMonotonic=(_0x2b7ff0,_0x592307)=>{if(_0x2b7ff0['length']<0x2)return !![];let _0x435441='undefined',_0x4ac682=_0x2b7ff0[0x0];for(let _0x1f7f9b=0x1;_0x1f7f9b<_0x2b7ff0['length'];_0x1f7f9b++){const _0x1faabb=_0x2b7ff0[_0x1f7f9b];if(_0x1faabb>_0x4ac682){if(_0x435441==='decreasing')return ![];_0x435441='increasing';}else {if(_0x1faabb<_0x4ac682){if(_0x435441==='increasing')return ![];_0x435441='decreasing';}else {if(_0x592307)return ![];}}_0x4ac682=_0x1faabb;}return !![];},createInterpolantFunction=(_0x9e76fb,_0xe40bc9,_0x5d4dfc,_0x2b0269,_0x4cb35f)=>_0x7eb8ee=>{if(_0x7eb8ee<_0x9e76fb[0x0]||_0x7eb8ee>_0x9e76fb[_0x9e76fb['length']-0x1])throw new Error('The\x20function\x20only\x20handles\x20arguments\x20in\x20the\x20range\x20['+_0x9e76fb[0x0]['toString']()+','+_0x9e76fb[_0x9e76fb['length']-0x1]['toString']()+']');const _0x22828f=findIntervalIndex(_0x7eb8ee,_0x9e76fb);if(_0x7eb8ee===_0x9e76fb[_0x22828f])return _0xe40bc9[_0x22828f];const _0xb74469=_0x7eb8ee-_0x9e76fb[_0x22828f];return _0xe40bc9[_0x22828f]+_0xb74469*(_0x5d4dfc[_0x22828f]+_0xb74469*(_0x2b0269[_0x22828f]+_0xb74469*_0x4cb35f[_0x22828f]));},findIntervalIndex=(_0x34e77a,_0x3fcfd1)=>{for(let _0x1a4543=0x0;_0x1a4543<_0x3fcfd1['length']-0x1;_0x1a4543++){if(_0x3fcfd1[_0x1a4543]<=_0x34e77a&&_0x34e77a<_0x3fcfd1[_0x1a4543+0x1])return _0x1a4543;}if(_0x34e77a===_0x3fcfd1[_0x3fcfd1['length']-0x1])return _0x3fcfd1['length']-0x1;throw new Error('The\x20point\x20('+_0x34e77a+')\x20is\x20outside\x20the\x20point\x20list\x20['+_0x3fcfd1['join'](',')+']');};

(function(_0x3ba03d){var _0x5a70d3=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x4efd44,_0x21bd11,_0xbcb821,_0x4ca2e5){if(_0x4ca2e5===undefined)_0x4ca2e5=_0xbcb821;var _0x5e12f1=Object['getOwnPropertyDescriptor'](_0x21bd11,_0xbcb821);(!_0x5e12f1||('get'in _0x5e12f1?!_0x21bd11['__esModule']:_0x5e12f1['writable']||_0x5e12f1['configurable']))&&(_0x5e12f1={'enumerable':!![],'get':function(){return _0x21bd11[_0xbcb821];}}),Object['defineProperty'](_0x4efd44,_0x4ca2e5,_0x5e12f1);}:function(_0x330f7d,_0x4cde29,_0x1d99b1,_0x42031e){if(_0x42031e===undefined)_0x42031e=_0x1d99b1;_0x330f7d[_0x42031e]=_0x4cde29[_0x1d99b1];}),_0x4e64d7=commonjsGlobal&&commonjsGlobal['__setModuleDefault']||(Object['create']?function(_0x243fea,_0x486a45){Object['defineProperty'](_0x243fea,'default',{'enumerable':!![],'value':_0x486a45});}:function(_0x2e07ff,_0x3c6f8a){_0x2e07ff['default']=_0x3c6f8a;}),_0x35018b=commonjsGlobal&&commonjsGlobal['__importStar']||function(_0x10c6ba){if(_0x10c6ba&&_0x10c6ba['__esModule'])return _0x10c6ba;var _0x139b91={};if(_0x10c6ba!=null){for(var _0x4c29cc in _0x10c6ba)if(_0x4c29cc!=='default'&&Object['prototype']['hasOwnProperty']['call'](_0x10c6ba,_0x4c29cc))_0x5a70d3(_0x139b91,_0x10c6ba,_0x4c29cc);}return _0x4e64d7(_0x139b91,_0x10c6ba),_0x139b91;},_0x3f9818=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x4774a0,_0x51d52a){for(var _0x13d2b8 in _0x4774a0)if(_0x13d2b8!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x51d52a,_0x13d2b8))_0x5a70d3(_0x51d52a,_0x4774a0,_0x13d2b8);},_0x22e04e=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0xff6108){return _0xff6108&&_0xff6108['__esModule']?_0xff6108:{'default':_0xff6108};};Object['defineProperty'](_0x3ba03d,'__esModule',{'value':!![]}),_0x3ba03d['sumBy']=_0x3ba03d['weightedRandom']=_0x3ba03d['filterOutliers']=_0x3ba03d['PrecisionScaler']=_0x3ba03d['getMedianOfBigNumbers']=_0x3ba03d['getMedian']=_0x3ba03d['calculateDeviationPercent']=_0x3ba03d['calculateSum']=_0x3ba03d['castToISafeNumber']=void 0x0;const _0x460e2a=_0x22e04e(_0x51ff76),_0x2f29b4=_0x3e9376,_0x1701d6=_0x35018b(requireISafeNumber()),_0x113665=requireISafeNumber(),_0x6a4486=common$1;_0x3f9818(monotonicCubicSpline,_0x3ba03d);const _0x3f3608=_0x32d05a=>{if(typeof _0x32d05a==='string'||typeof _0x32d05a==='number')return (0, _0x113665['createSafeNumber'])(_0x32d05a['toString']());else {if(_0x32d05a instanceof _0x460e2a['default'])return (0, _0x113665['createSafeNumber'])(_0x32d05a['toString']());else {if(_0x32d05a instanceof _0x2f29b4['BigNumber'])return (0, _0x113665['createSafeNumber'])((0, _0x6a4486['bignumberishToDecimal'])(_0x32d05a)['toString']());else {if(_0x32d05a['isSafeNumber']())return _0x32d05a;else throw new Error('Can\x20not\x20cast\x20'+String(_0x32d05a)+'\x20to\x20ISafeNumber');}}}};_0x3ba03d['castToISafeNumber']=_0x3f3608;const _0x3427b8=_0x1efe7f=>_0x1701d6['calculateSum'](_0x1efe7f['map'](_0x3ba03d['castToISafeNumber']))['unsafeToNumber']();_0x3ba03d['calculateSum']=_0x3427b8;const _0x36444c=_0x2efefd=>_0x1701d6['calculateDeviationPercent']({'baseValue':(0, _0x3ba03d['castToISafeNumber'])(_0x2efefd['baseValue']),'deviatedValue':(0, _0x3ba03d['castToISafeNumber'])(_0x2efefd['deviatedValue'])})['unsafeToNumber']();_0x3ba03d['calculateDeviationPercent']=_0x36444c;const _0x30d37c=_0x567ae3=>_0x1701d6['getMedian'](_0x567ae3['map'](_0x3ba03d['castToISafeNumber']))['unsafeToNumber']();_0x3ba03d['getMedian']=_0x30d37c;const _0x4865d1=_0x5d0f10=>_0x1701d6['getMedian'](_0x5d0f10['map'](_0x2f29b4['BigNumber']['from'])['map'](_0x3ba03d['castToISafeNumber']))['unsafeToNumber']();_0x3ba03d['getMedianOfBigNumbers']=_0x4865d1;class _0x30e5ce{['tokenDecimals'];['tokenDecimalsScaler'];constructor(_0x3ac5d7){this['tokenDecimals']=_0x3ac5d7,this['tokenDecimalsScaler']=new _0x460e2a['default'](0xa)['pow'](_0x3ac5d7);}['toSolidityValue'](_0x50d3cc){return new _0x460e2a['default'](_0x50d3cc)['mul'](this['tokenDecimalsScaler'])['toString']();}['fromSolidityValue'](_0x2b44ab){return (0, _0x6a4486['bignumberishToDecimal'])(_0x2b44ab)['div'](this['tokenDecimalsScaler']);}}_0x3ba03d['PrecisionScaler']=_0x30e5ce;const _0x36103c=(_0x36579e,_0x413340)=>{if(_0x36579e['length']<=0x2)return {'representativeGroup':[..._0x36579e],'outliers':[]};const _0x38a312=[..._0x36579e];_0x38a312['sort']((_0x6b1e94,_0x2fa9cd)=>_0x6b1e94-_0x2fa9cd);let _0x4d9b3e={'startIndex':0x0,'endIndex':0x0};for(let _0x261e5e=_0x4d9b3e['startIndex'];_0x261e5e<_0x38a312['length'];_0x261e5e++){for(let _0x503a82=_0x38a312['length'];_0x261e5e<_0x503a82;_0x503a82--){const _0x1a748f=_0x38a312[_0x261e5e],_0x12d6ff=_0x38a312[_0x503a82-0x1];_0x12d6ff-_0x1a748f<_0x413340&&(_0x503a82-_0x261e5e>_0x4d9b3e['endIndex']-_0x4d9b3e['startIndex']&&(_0x4d9b3e={'startIndex':_0x261e5e,'endIndex':_0x503a82}));}}return {'representativeGroup':_0x38a312['slice'](_0x4d9b3e['startIndex'],_0x4d9b3e['endIndex']),'outliers':[..._0x38a312['slice'](0x0,_0x4d9b3e['startIndex']),..._0x38a312['slice'](_0x4d9b3e['endIndex'],_0x38a312['length'])]};};_0x3ba03d['filterOutliers']=_0x36103c;const _0x207cf9=_0x327b46=>{let _0x24fd44=0x0;for(const _0x3a1bba of _0x327b46){_0x24fd44+=_0x3a1bba;}let _0x531f29=Math['random']()*_0x24fd44;for(let _0x280950=0x0;_0x280950<_0x327b46['length'];_0x280950++){_0x531f29-=_0x327b46[_0x280950];if(_0x531f29<0x0)return _0x280950;}return _0x327b46['length']-0x1;};_0x3ba03d['weightedRandom']=_0x207cf9;const _0x52efd3=(_0x235ffb,_0x11e5f1)=>{const _0x5b412d=_0x235ffb['map'](_0x11e5f1);if(_0x5b412d['some'](_0x252acd=>typeof _0x252acd!=='number'))throw new Error('Can\x27t\x20sumBy\x20because\x20after\x20extraction\x20at\x20least\x20one\x20of\x20elements\x20is\x20not\x20number');return _0x5b412d['reduce']((_0x1b9ebf,_0x4acc50)=>_0x1b9ebf+_0x4acc50,0x0);};_0x3ba03d['sumBy']=_0x52efd3;}(math));getDefaultExportFromCjs(math);

Object['defineProperty'](CuratedRpcList$1,'__esModule',{'value':!![]});CuratedRpcList$1['CuratedRpcList']=void 0x0;const zod_1$9=_0x28081a,common_1$b=common$1,logger_1$3=logger$d,math_1$1=math,CuratedRpcListConfigSchema=zod_1$9['z']['object']({'resetQuarantineInterval':zod_1$9['z']['number']()['default'](()=>(0, common_1$b['getFromEnv'])('RPC_CURATED_LIST_RESET_QUARANTINE_INTERVAL',zod_1$9['z']['number']()['default'](0xea60))),'evaluationInterval':zod_1$9['z']['number']()['default'](()=>(0, common_1$b['getFromEnv'])('RPC_CURATED_LIST_EVALUATION_INTERVAL',zod_1$9['z']['number']()['default'](0x7530))),'maxErrorRate':zod_1$9['z']['number']()['min'](0x0)['max'](0x1)['default'](()=>(0, common_1$b['getFromEnv'])('RPC_CURATED_LIST_MAX_ERROR_RATE',zod_1$9['z']['number']()['default'](0.15))),'extendedLogs':zod_1$9['z']['boolean']()['default'](()=>(0, common_1$b['getFromEnv'])('RPC_CURATED_LIST_EXTENDED_LOGS',zod_1$9['z']['boolean']()['default'](![]))),'rpcIdentifiers':zod_1$9['z']['string']()['array']()['min'](0x1),'minimalProvidersCount':zod_1$9['z']['number']()});class CuratedRpcList{['config'];['state']={};['logger'];['freeFromQuarantineTimer'];['evaluationTimer'];constructor(_0x21ceb1,_0x34dd85){this['config']=CuratedRpcListConfigSchema['parse'](_0x21ceb1),(0, common_1$b['assert'])(this['config']['minimalProvidersCount']<=this['config']['rpcIdentifiers']['length'],'A\x20minimalProvidersCount\x20can\x27t\x20be\x20bigger\x20than\x20supplied\x20rpcs\x20list\x20length'),this['logger']=(0, logger_1$3['loggerFactory'])('curated-rpc-list-'+_0x34dd85);for(const _0x3c747e of _0x21ceb1['rpcIdentifiers']){(0, common_1$b['assert'])(!this['state'][_0x3c747e],'You\x20have\x20passed\x20duplicated\x20rpc\x20identifier='+_0x3c747e+'\x20to\x20curated\x20rpc\x20list'),this['state'][_0x3c747e]={'callsCount':0x0,'errorsCount':0x0,'inQuarantine':![],'quarantineCounter':0x0};}}['updateFreeFromQuarantineTimer'](){if(this['getProvidersInQuarantine']()['length']===0x0){clearInterval(this['freeFromQuarantineTimer']),this['freeFromQuarantineTimer']=undefined;return;}this['freeFromQuarantineTimer']??=setInterval(()=>this['freeOneRpcFromQuarantine'](),this['config']['resetQuarantineInterval']);}['updateEvaluationTimer'](){if(this['getCalledProviders']()['length']===0x0){clearInterval(this['evaluationTimer']),this['evaluationTimer']=undefined;return;}this['evaluationTimer']??=setInterval(()=>{this['config']['rpcIdentifiers']['map'](_0x23671f=>this['evaluateRpcScore'](_0x23671f));},this['config']['evaluationInterval']);}['scoreRpc'](_0x2d04e8,_0x211b35){this['state'][_0x2d04e8]['callsCount']+=0x1,this['state'][_0x2d04e8]['errorsCount']+=_0x211b35['error']?0x1:0x0,this['updateEvaluationTimer']();}['evaluateRpcScore'](_0x494677){const _0x242aad=this['state'][_0x494677],_0x3758e3=_0x242aad['errorsCount']/_0x242aad['callsCount'];if(_0x3758e3>this['config']['maxErrorRate']){_0x242aad['inQuarantine']=!![],_0x242aad['quarantineCounter']+=0x1;const _0x55fcf6=this['config']['rpcIdentifiers']['indexOf'](_0x494677);(this['config']['extendedLogs']?this['logger']['info']:this['logger']['debug'])('Sending\x20provider\x20with\x20identifier='+_0x494677+'\x20to\x20quarantine;\x20errorRate='+_0x3758e3['toFixed'](0x2)+';\x20index:\x20'+_0x55fcf6,{'errorRate':_0x3758e3,'rpc':_0x494677,'index':_0x55fcf6,'quarantined':!![]}),this['updateFreeFromQuarantineTimer']();}_0x242aad['callsCount']=0x0,_0x242aad['errorsCount']=0x0,this['updateEvaluationTimer']();}['getBestProviders'](){const _0x296282=Object['entries'](this['state'])['filter'](([_0x77e115,{inQuarantine:_0x431156}])=>!_0x431156)['map'](([_0x25f90d])=>_0x25f90d);if(_0x296282['length']<this['config']['minimalProvidersCount'])return this['logger']['warn']('Not\x20enough\x20healthy\x20providers,\x20have\x20to\x20release\x20one\x20from\x20quarantine'),this['freeOneRpcFromQuarantine'](),this['getBestProviders']();return _0x296282;}['freeOneRpcFromQuarantine'](){const _0x1a087a=this['getProvidersInQuarantine'](),_0xfd858c=_0x1a087a['map'](_0x296465=>0x1/_0x296465[0x1]['quarantineCounter']),_0x45b2cc=(0, math_1$1['weightedRandom'])(_0xfd858c);if(_0x45b2cc>=0x0){_0x1a087a[_0x45b2cc][0x1]['inQuarantine']=![];const _0x57fc06=_0x1a087a[_0x45b2cc][0x0],_0x510b58=this['config']['rpcIdentifiers']['indexOf'](_0x57fc06);(this['config']['extendedLogs']?this['logger']['info']:this['logger']['debug'])('Releasing\x20provider\x20identifier='+_0x57fc06+'\x20from\x20quarantine',{'rpc':_0x57fc06,'index':_0x510b58,'quarantined':![]}),this['updateFreeFromQuarantineTimer']();}}['getProvidersInQuarantine'](){return Object['entries'](this['state'])['filter'](([_0x54a60e,{inQuarantine:_0x194a24}])=>_0x194a24);}['getCalledProviders'](){return Object['entries'](this['state'])['filter'](([_0x77e69a,{callsCount:_0x12e18a}])=>_0x12e18a>0x0);}}CuratedRpcList$1['CuratedRpcList']=CuratedRpcList;

(function(_0x17b375){var _0x44f470=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x43855e,_0x548bb1,_0x14df0c,_0x3c57fa){if(_0x3c57fa===undefined)_0x3c57fa=_0x14df0c;var _0x2bca58=Object['getOwnPropertyDescriptor'](_0x548bb1,_0x14df0c);(!_0x2bca58||('get'in _0x2bca58?!_0x548bb1['__esModule']:_0x2bca58['writable']||_0x2bca58['configurable']))&&(_0x2bca58={'enumerable':!![],'get':function(){return _0x548bb1[_0x14df0c];}}),Object['defineProperty'](_0x43855e,_0x3c57fa,_0x2bca58);}:function(_0x3b5d81,_0x7250b1,_0x29f11a,_0x3a1478){if(_0x3a1478===undefined)_0x3a1478=_0x29f11a;_0x3b5d81[_0x3a1478]=_0x7250b1[_0x29f11a];}),_0x27b678=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x414719,_0x5d1400){for(var _0xbcb925 in _0x414719)if(_0xbcb925!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x5d1400,_0xbcb925))_0x44f470(_0x5d1400,_0x414719,_0xbcb925);};Object['defineProperty'](_0x17b375,'__esModule',{'value':!![]}),_0x27b678(CuratedRpcList$1,_0x17b375);}(curatedList));getDefaultExportFromCjs(curatedList);

var monitoring = {};

var sendHealthcheckPing$1 = {};

var __importDefault$m=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x3d646d){return _0x3d646d&&_0x3d646d['__esModule']?_0x3d646d:{'default':_0x3d646d};};Object['defineProperty'](sendHealthcheckPing$1,'__esModule',{'value':!![]});sendHealthcheckPing$1['sendHealthcheckPing']=void 0x0;const axios_1$2=__importDefault$m(_0x1cb33a),logger_1$2=logger$d,logger$9=(0, logger_1$2['loggerFactory'])('healthcheck'),sendHealthcheckPing=async _0x33a42f=>{if(!_0x33a42f)return;const _0x2357a1=Date['now']();try{await axios_1$2['default']['get'](_0x33a42f),logger$9['info']('Sent\x20healthcheck\x20ping\x20in\x20'+(Date['now']()-_0x2357a1)+'ms');}catch(_0x5c18f2){const _0x25eb63=_0x5c18f2;_0x25eb63['code']==='ENOTFOUND'?logger$9['error']('Healthcheck\x20address\x20not\x20found.\x20Configure\x20your\x20`HEALTHCHECK_PING_URL`\x20properly'):logger$9['error']('Unknown\x20error\x20occurred,\x20when\x20trying\x20to\x20health\x20check\x20ping',_0x25eb63);}};sendHealthcheckPing$1['sendHealthcheckPing']=sendHealthcheckPing;

(function(_0x2ac91c){var _0x5a65c5=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x3744c3,_0x5c55c9,_0x5e577f,_0x36d963){if(_0x36d963===undefined)_0x36d963=_0x5e577f;var _0x2d5ebc=Object['getOwnPropertyDescriptor'](_0x5c55c9,_0x5e577f);(!_0x2d5ebc||('get'in _0x2d5ebc?!_0x5c55c9['__esModule']:_0x2d5ebc['writable']||_0x2d5ebc['configurable']))&&(_0x2d5ebc={'enumerable':!![],'get':function(){return _0x5c55c9[_0x5e577f];}}),Object['defineProperty'](_0x3744c3,_0x36d963,_0x2d5ebc);}:function(_0x282828,_0x325567,_0x2a1bba,_0x5cac8a){if(_0x5cac8a===undefined)_0x5cac8a=_0x2a1bba;_0x282828[_0x5cac8a]=_0x325567[_0x2a1bba];}),_0x476916=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x43c0be,_0x35e967){for(var _0x4178c3 in _0x43c0be)if(_0x4178c3!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x35e967,_0x4178c3))_0x5a65c5(_0x35e967,_0x43c0be,_0x4178c3);};Object['defineProperty'](_0x2ac91c,'__esModule',{'value':!![]}),_0x476916(sendHealthcheckPing$1,_0x2ac91c);}(monitoring));getDefaultExportFromCjs(monitoring);

var multiExecutor = {};

var AgreementExecutor$1 = {};

var ParallelExecutor$1 = {};

var Executor$1 = {};

Object['defineProperty'](Executor$1,'__esModule',{'value':!![]});Executor$1['Executor']=void 0x0;const common_1$a=common$1,logger_1$1=logger$d,logger$8=(0, logger_1$1['loggerFactory'])('executor');class Executor{['logger']=logger$8;static['getPromises'](_0x4522e8,_0x4d2194){const _0x257efd=_0x4522e8['filter'](_0x4e6553=>!_0x4e6553['delegate']?.['isQuarantined']?.(_0x4e6553))['map'](_0x246521=>this['execFn'](_0x246521,_0x4d2194));if(!_0x257efd['length'])throw new Error('All\x20functions\x20are\x20quarantined.\x20Cannot\x20execute\x20them!');return _0x257efd;}static async['execFn'](_0x10c018,_0x45a6f3){const {prefix:_0x4a60fd,message:_0x12eb9f,suffix:_0x10478d}=this['makeLogData'](_0x10c018);if(_0x10c018['delegate']?.['isQuarantined']?.(_0x10c018))throw new Error(_0x4a60fd+'\x20tried\x20to\x20execute\x20quarantined\x20function...\x20'+_0x10478d);try{const _0x3b2a91=await(0x0,common_1$a['timeoutOrResult'])(_0x10c018['fn'](),_0x45a6f3,'timed\x20out');return logger$8['debug'](_0x12eb9f('returns')+':\x20'+(0x0,common_1$a['stringify'])(_0x3b2a91)+_0x10478d),_0x10c018['delegate']?.['didSucceed']?.(_0x10c018,_0x3b2a91),_0x3b2a91;}catch(_0x377142){logger$8['warn'](_0x12eb9f('failed')+':\x20'+(0, common_1$a['stringifyError'])(_0x377142)+_0x10478d,_0x377142),_0x10c018['delegate']?.['didFail']?.(_0x10c018,_0x377142);throw _0x377142;}}static['makeLogData'](_0x558da1){const _0x5f1666=Date['now'](),_0x3def2c='['+_0x558da1['name']+']\x20Promise\x20#'+_0x558da1['index'],_0xfe62b8=_0x38e932=>_0x3def2c+'\x20'+_0x38e932+'\x20in\x20'+(Date['now']()-_0x5f1666)+'\x20[ms]',_0x524011=_0x558da1['description']?'\x20('+_0x558da1['description']+')':'';return {'prefix':_0x3def2c,'message':_0xfe62b8,'suffix':_0x524011};}}Executor$1['Executor']=Executor;

var __importDefault$l=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x24d938){return _0x24d938&&_0x24d938['__esModule']?_0x24d938:{'default':_0x24d938};};Object['defineProperty'](ParallelExecutor$1,'__esModule',{'value':!![]});ParallelExecutor$1['ParallelExecutor']=void 0x0;const lodash_1$d=__importDefault$l(_0x62d7dc),common_1$9=common$1,Executor_1$2=Executor$1;class ParallelExecutor extends Executor_1$2['Executor']{['timeoutMs'];constructor(_0x7dbf2e){super(),this['timeoutMs']=_0x7dbf2e;}static['getModes'](_0x2b300c){if(_0x2b300c['length']===0x0)return undefined;const _0x28687d=lodash_1$d['default']['uniqWith'](_0x2b300c,(_0xd1c921,_0x5b91e8)=>lodash_1$d['default']['isEqual'](_0xd1c921,_0x5b91e8)),_0x32b120=_0x28687d['map'](_0x2f86d0=>({'item':_0x2f86d0,'count':_0x2b300c['filter'](_0x66f1df=>lodash_1$d['default']['isEqual'](_0x66f1df,_0x2f86d0))['length']})),_0x4aadb2=lodash_1$d['default']['maxBy'](_0x32b120,'count')?.['count']??0x0;return _0x32b120['filter'](_0x4e2118=>_0x4e2118['count']===_0x4aadb2);}async['execute'](_0x4d4dab){const _0x384b6f=Executor_1$2['Executor']['getPromises'](_0x4d4dab,this['timeoutMs']),_0x7b0ff4=[],_0x189e77=[];let _0x302226=![];return await new Promise((_0x489972,_0x5cd482)=>{_0x384b6f['forEach'](_0x3ac60b=>{_0x3ac60b['then'](_0x356661=>{_0x7b0ff4['push'](_0x356661);})['catch'](_0x4d0d0a=>{_0x189e77['push'](_0x4d0d0a);})['finally'](()=>{_0x302226||=this['handleResults'](_0x7b0ff4,_0x189e77,_0x384b6f['length'],_0x489972,_0x5cd482);});});});}['handleResults'](_0x38c93a,_0x1669a7,_0x480bc5,_0x5b389c,_0x49b313){try{const _0xb007d2=this['verifySettlements'](_0x38c93a,_0x1669a7,_0x480bc5);if(_0xb007d2){const _0x44c16e=this['aggregate'](_0x38c93a);this['logger']['debug']('Resolving\x20with\x20'+(0x0,common_1$9['stringify'])(_0x44c16e)),_0x5b389c(_0x44c16e);}return _0xb007d2;}catch(_0x1eb508){return _0x49b313(_0x1eb508),!![];}}}ParallelExecutor$1['ParallelExecutor']=ParallelExecutor;

Object['defineProperty'](AgreementExecutor$1,'__esModule',{'value':!![]});AgreementExecutor$1['AgreementExecutor']=void 0x0;const common_1$8=common$1,ParallelExecutor_1$1=ParallelExecutor$1;class AgreementExecutor extends ParallelExecutor_1$1['ParallelExecutor']{['quorumNumber'];['shouldResolveUnagreedToUndefined'];constructor(_0x2e3101,_0x4831a2,_0x4744da=![]){super(_0x4831a2),this['quorumNumber']=_0x2e3101,this['shouldResolveUnagreedToUndefined']=_0x4744da;}['aggregate'](_0x4262aa){const _0x460092=ParallelExecutor_1$1['ParallelExecutor']['getModes'](_0x4262aa);this['logger']['debug']('Found\x20modes:\x20'+(0, common_1$8['stringify'])(_0x460092));if(!_0x460092)throw new Error('That\x20should\x27ve\x20never\x20happened\x20but\x20still...:\x20'+(0, common_1$8['stringify'])(_0x460092));if(_0x460092['length']!==0x1){(this['shouldResolveUnagreedToUndefined']?this['logger']['info']:this['logger']['warn'])('Multiple\x20modes\x20found\x20(shouldResolveUnagreedToUndefined\x20=\x20'+this['shouldResolveUnagreedToUndefined']+';\x20were\x20the\x20returning\x20promises\x20sync?):\x20'+(0, common_1$8['stringify'])(_0x460092));if(this['shouldResolveUnagreedToUndefined'])return undefined;}return _0x460092[0x0]['item'];}['verifySettlements'](_0x39a788,_0x5a4f7d,_0x3c0941){const _0x5004fa=ParallelExecutor_1$1['ParallelExecutor']['getModes'](_0x39a788),_0x153ac6=this['getQuorum'](_0x3c0941),_0x498eab=_0x5004fa?.[0x0]?.['count']??0x0,_0x2c3f07=_0x498eab>=_0x153ac6;if(_0x2c3f07)return !![];if(_0x39a788['length']+_0x5a4f7d['length']<_0x3c0941)return this['logger']['debug']('Returning,\x20still\x20doesn\x27t\x20have\x20enough\x20of\x20'+_0x153ac6+'\x20results:\x20'+_0x39a788['length']+'\x20successes\x20+\x20'+_0x5a4f7d['length']+'\x20errors'),![];this['logger']['debug']('Successful\x20results:',_0x39a788);const _0x2cf2e6=_0x5a4f7d['length'];if(this['shouldResolveUnagreedToUndefined'])return !![];throw new Error('Agreement\x20failed:\x20got\x20max\x20'+_0x498eab+'\x20equal\x20result'+(0, common_1$8['getS'])(_0x498eab)+',\x20'+('needed\x20at\x20least\x20'+_0x153ac6)+(_0x2cf2e6>0x0?';\x20'+(0, common_1$8['stringifyError'])(new AggregateError(_0x5a4f7d,_0x2cf2e6+'\x20fail'+(0, common_1$8['getS'])(_0x2cf2e6)))+')':''));}['getQuorum'](_0x4b43c3){return _0x4b43c3<=this['quorumNumber']?Math['min'](0x1,this['quorumNumber']):this['quorumNumber'];}}AgreementExecutor$1['AgreementExecutor']=AgreementExecutor;

var CeilMedianConsensusExecutor$1 = {};

var ConsensusExecutor$1 = {};

var __importDefault$k=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x595b1f){return _0x595b1f&&_0x595b1f['__esModule']?_0x595b1f:{'default':_0x595b1f};};Object['defineProperty'](ConsensusExecutor$1,'__esModule',{'value':!![]});ConsensusExecutor$1['MedianConsensusExecutor']=ConsensusExecutor$1['AllEqualConsensusExecutor']=ConsensusExecutor$1['ConsensusExecutor']=void 0x0;const lodash_1$c=__importDefault$k(_0x62d7dc),common_1$7=common$1,math_1=math,ParallelExecutor_1=ParallelExecutor$1;class ConsensusExecutor extends ParallelExecutor_1['ParallelExecutor']{['quorumRatio'];constructor(_0x13c764,_0x384d85){super(_0x384d85),this['quorumRatio']=_0x13c764;}['verifySettlements'](_0x415cdc,_0x449710,_0x4bc6a9){if(_0x415cdc['length']+_0x449710['length']<_0x4bc6a9)return this['logger']['debug']('Returning,\x20still\x20doesn\x27t\x20have\x20all\x20of\x20'+_0x4bc6a9+'\x20results:\x20'+_0x415cdc['length']+'\x20successes\x20+\x20'+_0x449710['length']+'\x20errors'),![];const _0x1632ee=this['getQuorum'](_0x4bc6a9);if(_0x415cdc['length']>=_0x1632ee)return !![];const _0x3c8c1f=_0x449710['length'];throw new Error('Consensus\x20failed:\x20got\x20'+_0x415cdc['length']+'\x20successful\x20result'+(0, common_1$7['getS'])(_0x415cdc['length'])+',\x20'+('needed\x20at\x20least\x20'+_0x1632ee+';\x20'+(0, common_1$7['stringifyError'])(new AggregateError(_0x449710,_0x3c8c1f+'\x20fail'+(0, common_1$7['getS'])(_0x3c8c1f)))+')'));}['getQuorum'](_0x1a5804){return _0x1a5804<=0x2?0x1:Math['ceil'](_0x1a5804*this['quorumRatio']);}}ConsensusExecutor$1['ConsensusExecutor']=ConsensusExecutor;class AllEqualConsensusExecutor extends ConsensusExecutor{['aggregate'](_0x5ed025){const _0xa6aac0=lodash_1$c['default']['uniqWith'](_0x5ed025,(_0x32755c,_0xf076dd)=>lodash_1$c['default']['isEqual'](_0x32755c,_0xf076dd));if(_0xa6aac0['length']>0x1)throw new Error('Results\x20are\x20not\x20equal.\x20Found\x20'+_0xa6aac0['length']+'\x20different\x20results\x20'+JSON['stringify'](_0xa6aac0));return _0xa6aac0[0x0];}}ConsensusExecutor$1['AllEqualConsensusExecutor']=AllEqualConsensusExecutor;class MedianConsensusExecutor extends ConsensusExecutor{['aggregate'](_0x205c77){return MedianConsensusExecutor['getMedian'](_0x205c77);}static['getMedian'](_0x226803){const _0x116a60=_0x226803['every'](_0x256870=>typeof _0x256870==='number');if(_0x116a60)return (0, math_1['getMedian'])(_0x226803);return (0, math_1['getMedianOfBigNumbers'])(_0x226803);}}ConsensusExecutor$1['MedianConsensusExecutor']=MedianConsensusExecutor;

Object['defineProperty'](CeilMedianConsensusExecutor$1,'__esModule',{'value':!![]});CeilMedianConsensusExecutor$1['CeilMedianConsensusExecutor']=void 0x0;const ConsensusExecutor_1=ConsensusExecutor$1;class CeilMedianConsensusExecutor extends ConsensusExecutor_1['MedianConsensusExecutor']{['aggregate'](_0x464b4f){const _0x5a66f8=super['aggregate'](_0x464b4f);return Math['ceil'](_0x5a66f8);}}CeilMedianConsensusExecutor$1['CeilMedianConsensusExecutor']=CeilMedianConsensusExecutor;

var ClientBuilder = {};

var NetworkId = {};

(function(_0x3ac78c){Object['defineProperty'](_0x3ac78c,'__esModule',{'value':!![]}),_0x3ac78c['NetworkIdSchema']=_0x3ac78c['ChainTypeEnum']=_0x3ac78c['NonEvmChainTypeEnum']=void 0x0,_0x3ac78c['isEvmNetworkId']=_0x5cb9df,_0x3ac78c['isEvmChainType']=_0x2eaa37,_0x3ac78c['isNonEvmNetworkId']=_0x8950f4,_0x3ac78c['isNonEvmChainType']=_0xfb9c74,_0x3ac78c['conformsToChainType']=_0x553990,_0x3ac78c['deconstructNetworkId']=_0x5738e4,_0x3ac78c['constructNetworkId']=_0x5c3e69;const _0x5d19a4=_0x28081a;_0x3ac78c['NonEvmChainTypeEnum']=_0x5d19a4['z']['enum'](['sui','movement','radix','solana','fuel']),_0x3ac78c['ChainTypeEnum']=_0x5d19a4['z']['enum'](['evm',..._0x3ac78c['NonEvmChainTypeEnum']['options']]);const _0x593e70=_0x5d19a4['z']['union']([_0x5d19a4['z']['number'](),_0x5d19a4['z']['string']()['regex'](/^[1-9]\d*$/)['transform'](Number),_0x5d19a4['z']['string']()['regex'](new RegExp('^('+_0x3ac78c['NonEvmChainTypeEnum']['options']['join']('|')+')/([1-9]\x5cd*)$'))]);_0x3ac78c['NetworkIdSchema']=_0x593e70;function _0x5cb9df(_0x38e687){return typeof _0x38e687==='number';}function _0x2eaa37(_0x630bd8){return !_0x630bd8||_0x630bd8===_0x3ac78c['ChainTypeEnum']['Enum']['evm'];}function _0x8950f4(_0x50787c){return !_0x5cb9df(_0x50787c);}function _0xfb9c74(_0x453956){return !_0x2eaa37(_0x453956);}function _0x553990(_0x19e93b,_0x16dc22){return (_0x19e93b??_0x3ac78c['ChainTypeEnum']['Enum']['evm'])===(_0x16dc22??_0x3ac78c['ChainTypeEnum']['Enum']['evm']);}function _0x5738e4(_0x5667d0){if(typeof _0x5667d0==='number')return {'chainType':_0x3ac78c['ChainTypeEnum']['Enum']['evm'],'chainId':_0x5667d0};const [_0x4c32b8,_0x314bef]=_0x5667d0['split']('/'),_0x703f2c=_0x3ac78c['NonEvmChainTypeEnum']['parse'](_0x4c32b8),_0x5dc8b7=Number(_0x314bef);if(Number['isNaN'](_0x5dc8b7)||_0x5dc8b7<0x1)throw new Error('Invalid\x20chainId\x20in\x20networkId:\x20'+_0x314bef);return {'chainType':_0x703f2c,'chainId':_0x5dc8b7};}function _0x5c3e69(_0x173d68,_0xa790a2){if(!_0xa790a2||_0xa790a2===_0x3ac78c['ChainTypeEnum']['Enum']['evm'])return _0x173d68;return _0xa790a2+'/'+_0x173d68;}}(NetworkId));getDefaultExportFromCjs(NetworkId);

var config$3 = {};

(function(_0xc02cdf){var _0x34d2d6=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x4a5e66){return _0x4a5e66&&_0x4a5e66['__esModule']?_0x4a5e66:{'default':_0x4a5e66};};Object['defineProperty'](_0xc02cdf,'__esModule',{'value':!![]}),_0xc02cdf['DEFAULT_CONFIG']=_0xc02cdf['ExecutionMode']=void 0x0,_0xc02cdf['makeBaseConfig']=_0x5708a7;const _0x541828=_0x34d2d6(_0x62d7dc);var _0x5cbd87;((function(_0x40584f){_0x40584f['RACE']='race',_0x40584f['FALLBACK']='fallback',_0x40584f['CONSENSUS_MEDIAN']='consensus_median',_0x40584f['CONSENSUS_ALL_EQUAL']='consensus_all_equal',_0x40584f['AGREEMENT']='agreement',_0x40584f['MULTI_AGREEMENT']='multi_agreement';})(_0x5cbd87||(_0xc02cdf['ExecutionMode']=_0x5cbd87={})),_0xc02cdf['DEFAULT_CONFIG']={'agreementQuorumNumber':0x2,'consensusQuorumRatio':0x3/0x5,'defaultMode':_0x5cbd87['FALLBACK'],'multiAgreementShouldResolveUnagreedToUndefined':![]});function _0x5708a7(_0x296c02,_0x3acb55){return _0x541828['default']['assign']({},_0x296c02,_0xc02cdf['DEFAULT_CONFIG'],_0x3acb55);}}(config$3));getDefaultExportFromCjs(config$3);

var create = {};

var MultiExecutorFactory = {};

var FallbackExecutor$1 = {};

Object['defineProperty'](FallbackExecutor$1,'__esModule',{'value':!![]});FallbackExecutor$1['FallbackExecutor']=void 0x0;const Executor_1$1=Executor$1;class FallbackExecutor extends Executor_1$1['Executor']{['timeoutMs'];constructor(_0x4551af){super(),this['timeoutMs']=_0x4551af;}async['execute'](_0xfe8430){const _0x33a919=[];for(const _0x455f3f of _0xfe8430){try{return await Executor_1$1['Executor']['execFn'](_0x455f3f,this['timeoutMs']);}catch(_0x599375){_0x33a919['push'](_0x599375);}}throw new AggregateError(_0x33a919,'All\x20promises\x20failed');}}FallbackExecutor$1['FallbackExecutor']=FallbackExecutor;

var MultiAgreementExecutor$1 = {};

var __importDefault$j=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x51210d){return _0x51210d&&_0x51210d['__esModule']?_0x51210d:{'default':_0x51210d};};Object['defineProperty'](MultiAgreementExecutor$1,'__esModule',{'value':!![]});MultiAgreementExecutor$1['MultiAgreementExecutor']=void 0x0;const lodash_1$b=__importDefault$j(_0x62d7dc),common_1$6=common$1,AgreementExecutor_1=AgreementExecutor$1;class MultiAgreementExecutor extends AgreementExecutor_1['AgreementExecutor']{['agreementExecutor'];constructor(_0x8c7288,_0x3c7031,_0x37dfaf=![]){super(_0x8c7288,_0x3c7031,_0x37dfaf),this['agreementExecutor']=new AgreementExecutor_1['AgreementExecutor'](_0x8c7288,_0x3c7031,_0x37dfaf);}['aggregate'](_0x29333e){return lodash_1$b['default']['zip'](..._0x29333e)['map'](_0x55732d=>this['agreementExecutor']['aggregate'](_0x55732d));}['verifySettlements'](_0x4a9e71,_0x3b4928,_0x40f63a){const _0x512af9=this['getQuorum'](_0x40f63a);if(_0x4a9e71['length']<_0x512af9){if(_0x4a9e71['length']+_0x3b4928['length']===_0x40f63a)throw new Error('MultiAgreement\x20failed:\x20got\x20'+_0x4a9e71['length']+'\x20successful\x20result'+(0, common_1$6['getS'])(_0x4a9e71['length'])+',\x20'+('needed\x20at\x20least\x20'+_0x512af9));return this['logger']['debug']('Returning,\x20still\x20doesn\x27t\x20have\x20enough\x20of\x20'+_0x512af9+'\x20results:\x20'+_0x4a9e71['length']+'\x20successes\x20+\x20'+_0x3b4928['length']+'\x20errors'),![];}const _0x2b7176=lodash_1$b['default']['zip'](..._0x4a9e71)['map'](_0x4f84bc=>{return this['agreementExecutor']['verifySettlements'](_0x4f84bc,_0x3b4928,_0x40f63a);});return !_0x2b7176['includes'](![]);}}MultiAgreementExecutor$1['MultiAgreementExecutor']=MultiAgreementExecutor;

var RaceExecutor$1 = {};

var __importDefault$i=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x3ce39c){return _0x3ce39c&&_0x3ce39c['__esModule']?_0x3ce39c:{'default':_0x3ce39c};};Object['defineProperty'](RaceExecutor$1,'__esModule',{'value':!![]});RaceExecutor$1['RaceExecutor']=void 0x0;const lodash_1$a=__importDefault$i(_0x62d7dc),common_1$5=common$1,Executor_1=Executor$1;class RaceExecutor extends Executor_1['Executor']{['shouldFailWhenFastestFails'];constructor(_0x74c52c=![]){super(),this['shouldFailWhenFastestFails']=_0x74c52c;}async['execute'](_0x182fb6){const _0x43ba15=Date['now'](),_0x257505=Executor_1['Executor']['getPromises'](_0x182fb6)['map']((_0x1d60ca,_0x3b63f9)=>_0x1d60ca['then'](_0x5be245=>({'index':_0x3b63f9,'result':_0x5be245}))),_0x239937=await(this['shouldFailWhenFastestFails']?Promise['race'](_0x257505):Promise['any'](_0x257505));return this['logger']['info']('Promise\x20#'+_0x239937['index']+'\x20won\x20in\x20'+(Date['now']()-_0x43ba15)+'\x20[ms]'),void Promise['allSettled'](_0x257505)['then'](_0x3d7941=>{const _0x49d106=_0x3d7941['map']((_0x4be172,_0x1339ca)=>({..._0x4be172,'index':_0x1339ca}))['filter'](_0x2ed7c5=>_0x2ed7c5['status']==='rejected');_0x49d106['length']>0x0&&this['logger']['warn']('Race\x20completed\x20successfully,\x20but\x20'+_0x49d106['length']+'\x20other\x20promise'+(0, common_1$5['getS'])(_0x49d106['length'])+'\x20failed:',lodash_1$a['default']['map'](_0x49d106,_0x41d15f=>'Promise\x20#'+_0x41d15f['index']+'\x20failed:\x20'+_0x41d15f['reason']));}),_0x239937['result'];}}RaceExecutor$1['RaceExecutor']=RaceExecutor;

var hasRequiredMultiExecutorFactory;function requireMultiExecutorFactory(){if(hasRequiredMultiExecutorFactory)return MultiExecutorFactory;hasRequiredMultiExecutorFactory=0x1,Object['defineProperty'](MultiExecutorFactory,'__esModule',{'value':!![]}),MultiExecutorFactory['MultiExecutorFactory']=void 0x0;const _0x440287=requireSrc$3(),_0x58d8bd=common$1,_0x5dfba0=logger$d,_0x44de70=AgreementExecutor$1,_0x501122=ConsensusExecutor$1,_0x14075d=Executor$1,_0x358bd0=FallbackExecutor$1,_0x5d379a=MultiAgreementExecutor$1,_0x5d6008=RaceExecutor$1,_0x43061d=config$3;class _0x1ae488{['instances'];['methodConfig'];['config'];['logger']=(0, _0x5dfba0['loggerFactory'])('multi-executor-proxy');constructor(_0x2a79a1,_0x4dcef8,_0x3c8825){this['instances']=_0x2a79a1,this['methodConfig']=_0x4dcef8,this['config']=_0x3c8825;}['getMethodMode'](_0x436e37){const _0x1a650e=this['methodConfig'][_0x436e37];if(_0x1a650e instanceof _0x14075d['Executor'])return _0x1a650e;if(typeof _0x1a650e==='string')return _0x1a650e;if(_0x1a650e===undefined)return this['config']['defaultMode'];throw new Error('Unexpected\x20NestedMethodConfig\x20for\x20function\x20'+_0x436e37['toString']());}['getExecutor'](_0x3ad312){if(_0x3ad312 instanceof _0x14075d['Executor'])return _0x3ad312;switch(_0x3ad312){case _0x43061d['ExecutionMode']['RACE']:return new _0x5d6008['RaceExecutor']();case _0x43061d['ExecutionMode']['FALLBACK']:return new _0x358bd0['FallbackExecutor'](this['config']['singleExecutionTimeoutMs']);case _0x43061d['ExecutionMode']['CONSENSUS_MEDIAN']:return new _0x501122['MedianConsensusExecutor'](this['config']['consensusQuorumRatio'],this['config']['singleExecutionTimeoutMs']);case _0x43061d['ExecutionMode']['CONSENSUS_ALL_EQUAL']:return new _0x501122['AllEqualConsensusExecutor'](this['config']['consensusQuorumRatio'],this['config']['singleExecutionTimeoutMs']);case _0x43061d['ExecutionMode']['AGREEMENT']:return new _0x44de70['AgreementExecutor'](this['config']['agreementQuorumNumber'],this['config']['singleExecutionTimeoutMs']);case _0x43061d['ExecutionMode']['MULTI_AGREEMENT']:return new _0x5d379a['MultiAgreementExecutor'](this['config']['agreementQuorumNumber'],this['config']['singleExecutionTimeoutMs'],this['config']['multiAgreementShouldResolveUnagreedToUndefined']);default:return (0, _0x58d8bd['throwUnsupportedParamError'])(_0x3ad312);}}['createProxy'](){const _0x44fc6b=this;return Object['assign'](this['instances'][0x0],{'__instances':this['instances'],'__config':this['config']}),new Proxy(this['instances'][0x0],{'get'(_0x4fb008,_0x1a15dc){const _0x3c661d=_0x1a15dc,_0x10600c=_0x4fb008[_0x3c661d];if(Object(_0x10600c)!==_0x10600c||['__instances','__config']['includes'](_0x3c661d))return _0x10600c;if(typeof _0x10600c!=='function')return _0x440287['MultiExecutor']['create'](_0x44fc6b['instances']['map'](_0x1e7d8d=>_0x1e7d8d[_0x3c661d]),_0x44fc6b['methodConfig'][_0x3c661d]??{},_0x44fc6b['config']);if(_0x10600c['constructor']['name']==='AsyncFunction'||_0x10600c['toString']()['includes']('Promise'))return async function(..._0x4b2485){const _0x4f706b=_0x44fc6b['instances']['map']((_0x3b155e,_0x381c26)=>_0x1ae488['makeFnBox'](_0x10600c['name'],_0x44fc6b['config'],_0x381c26,_0x3b155e,_0x3c661d,_0x4b2485));return await _0x44fc6b['performExecuting'](_0x3c661d,_0x4f706b);};return function(..._0x1adc7d){return _0x4fb008[_0x3c661d]['call'](_0x4fb008,..._0x1adc7d);};}});}static['makeFnBox'](_0x3a06b5,_0x4b6ad4,_0x93da9c,_0x54dbd7,_0x2c8894,_0x213bae){return {'name':_0x3a06b5,'description':_0x4b6ad4['descriptions']?.[_0x93da9c],'index':_0x93da9c,'delegate':_0x4b6ad4['delegate'],'fn':()=>Promise['resolve'](_0x54dbd7[_0x2c8894]['call'](_0x54dbd7,..._0x213bae))};}async['performExecuting'](_0x466b31,_0x551473){const _0x3cd5c4=this['getMethodMode'](_0x466b31);this['logger']['debug']('['+(0, _0x58d8bd['stringify'])(_0x466b31)+']\x20Executing\x20'+_0x551473['length']+'\x20promise'+(0, _0x58d8bd['getS'])(_0x551473['length'])+('\x20with\x20'+(typeof _0x3cd5c4==='string'?_0x3cd5c4:typeof _0x3cd5c4))+(this['config']['allExecutionsTimeoutMs']?'\x20and\x20totalExecutionTimeout:\x20'+this['config']['allExecutionsTimeoutMs']+'\x20[ms]':''));const _0x123cce=this['getExecutor'](_0x3cd5c4)['execute'](_0x551473),_0x50968e=await(0, _0x58d8bd['timeoutOrResult'])(_0x123cce,this['config']['allExecutionsTimeoutMs']);return this['logger']['debug']('['+(0, _0x58d8bd['stringify'])(_0x466b31)+']\x20Returning\x20'+(0, _0x58d8bd['stringify'])(_0x50968e)),_0x50968e;}}return MultiExecutorFactory['MultiExecutorFactory']=_0x1ae488,MultiExecutorFactory;}

var hasRequiredCreate;function requireCreate(){if(hasRequiredCreate)return create;hasRequiredCreate=0x1;var _0x23bd88=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x1f839e){return _0x1f839e&&_0x1f839e['__esModule']?_0x1f839e:{'default':_0x1f839e};};Object['defineProperty'](create,'__esModule',{'value':!![]}),create['create']=_0x47e296,create['createForSubInstances']=_0x1a5661;const _0x5391bf=_0x23bd88(_0x62d7dc),_0x2f713d=requireMultiExecutorFactory(),_0x307364=config$3;function _0x47e296(_0x522ba2,_0x4a6aad={},_0x369050=_0x307364['DEFAULT_CONFIG']){if(!_0x522ba2['length'])throw new Error('At\x20least\x20one\x20instance\x20is\x20required');return new _0x2f713d['MultiExecutorFactory'](_0x522ba2,_0x4a6aad,_0x369050)['createProxy']();}function _0x1a5661(_0x29ab54,_0x4a5671,_0x1489d2={},_0x42338b=_0x307364['DEFAULT_CONFIG']){const _0x2f0982='__instances'in _0x29ab54?_0x29ab54['__instances']['map'](_0x4a5671):[_0x4a5671(_0x29ab54)],_0x52335c='__config'in _0x29ab54?_0x29ab54['__config']:undefined,_0x486ad4=_0x52335c?_0x5391bf['default']['assign']({},_0x52335c,_0x42338b):_0x42338b;return _0x47e296(_0x2f0982,_0x1489d2,_0x486ad4);}return create;}

var QuarantinedListFnDelegate$1 = {};

Object['defineProperty'](QuarantinedListFnDelegate$1,'__esModule',{'value':!![]});QuarantinedListFnDelegate$1['QuarantinedListFnDelegate']=void 0x0;const curated_list_1=curatedList,MIN_PROVIDER_COUNT=0x1,MIN_REFRESH_TIME_INTERVAL_MS=0x5;class QuarantinedListFnDelegate{['curatedList'];['lastListUpdateTimestamp'];['healthyIdentifiers'];static ['configCache']={};static['getCachedConfig'](_0x491fd3,_0x50dbc7){const _0x1382a5=[_0x50dbc7,..._0x491fd3]['join']('|');return this['configCache'][_0x1382a5]??={'descriptions':_0x491fd3,'delegate':new QuarantinedListFnDelegate(_0x491fd3,_0x50dbc7)},this['configCache'][_0x1382a5];}constructor(_0x319e74,_0x54d9d6,_0x183c29=MIN_PROVIDER_COUNT){this['lastListUpdateTimestamp']=0x0,this['healthyIdentifiers']=_0x319e74,this['curatedList']=new curated_list_1['CuratedRpcList']({'rpcIdentifiers':_0x319e74,'minimalProvidersCount':_0x183c29,'extendedLogs':!![]},_0x54d9d6);}['didFail'](_0x45ca9a){if(!_0x45ca9a['description'])return;this['curatedList']['scoreRpc'](_0x45ca9a['description'],{'error':!![]});}['didSucceed'](_0x9440ac){if(!_0x9440ac['description'])return;this['curatedList']['scoreRpc'](_0x9440ac['description'],{'error':![]});}['isQuarantined'](_0x9f9711){if(!_0x9f9711['description'])return ![];const _0x5cc871=this['getHealthyIdentifiers']();return !_0x5cc871['includes'](_0x9f9711['description']);}['getHealthyIdentifiers'](){const _0x488290=Date['now']();return this['lastListUpdateTimestamp']+MIN_REFRESH_TIME_INTERVAL_MS<_0x488290&&(this['healthyIdentifiers']=this['curatedList']['getBestProviders'](),this['lastListUpdateTimestamp']=_0x488290),this['healthyIdentifiers'];}}QuarantinedListFnDelegate$1['QuarantinedListFnDelegate']=QuarantinedListFnDelegate;

var hasRequiredClientBuilder;function requireClientBuilder(){if(hasRequiredClientBuilder)return ClientBuilder;return hasRequiredClientBuilder=0x1,function(_0x5e3b12){Object['defineProperty'](_0x5e3b12,'__esModule',{'value':!![]}),_0x5e3b12['ClientBuilder']=_0x5e3b12['BLOCK_NUMBER_EXECUTION_TIMEOUT_MS']=_0x5e3b12['ALL_EXECUTIONS_TIMEOUT_MS']=_0x5e3b12['SINGLE_EXECUTION_TIMEOUT_MS']=void 0x0;const _0x4e9d94=common$1,_0x4822b3=NetworkId,_0x3b41d9=CeilMedianConsensusExecutor$1,_0x568255=config$3,_0xb1e9e0=requireCreate(),_0x146332=QuarantinedListFnDelegate$1;_0x5e3b12['SINGLE_EXECUTION_TIMEOUT_MS']=0x1b58,_0x5e3b12['ALL_EXECUTIONS_TIMEOUT_MS']=0x7530,_0x5e3b12['BLOCK_NUMBER_EXECUTION_TIMEOUT_MS']=0x5dc;class _0x1007d8{['urls']=[];['chainId'];['isQuarantineEnabled']=![];static ['blockNumberConsensusExecutor']=new _0x3b41d9['CeilMedianConsensusExecutor'](_0x568255['DEFAULT_CONFIG']['consensusQuorumRatio'],_0x5e3b12['BLOCK_NUMBER_EXECUTION_TIMEOUT_MS']);['withNetworkId'](_0x2d38cc){const {chainType:_0x2322ba,chainId:_0x1d7e71}=(0, _0x4822b3['deconstructNetworkId'])(_0x2d38cc);if(_0x2322ba!==this['chainType'])throw new Error('Non-'+this['chainType']+'\x20networkId\x20'+_0x2d38cc+'\x20passed\x20to\x20ClientBuilder');return this['withChainId'](_0x1d7e71);}['withChainId'](_0x48cff0){return this['chainId']=_0x48cff0,this;}['withRpcUrl'](_0x3b2cfd){return this['urls']['push'](_0x3b2cfd),this;}['withRpcUrls'](_0x337a3a){return this['urls']['push'](..._0x337a3a),this;}['withQuarantineEnabled'](_0x51e677=!![]){return this['isQuarantineEnabled']=_0x51e677,this;}['makeMultiExecutor'](_0x5cbe0d,_0x39cbe7,_0x491219={'singleExecutionTimeoutMs':_0x5e3b12['SINGLE_EXECUTION_TIMEOUT_MS'],'allExecutionsTimeoutMs':_0x5e3b12['ALL_EXECUTIONS_TIMEOUT_MS']}){return (0, _0xb1e9e0['create'])(this['urls']['map'](_0x5cbe0d),_0x39cbe7,(0, _0x568255['makeBaseConfig'])(this['isQuarantineEnabled']&&this['chainId']?_0x146332['QuarantinedListFnDelegate']['getCachedConfig'](this['urls']['filter'](_0x4e9d94['isDefined']),(0, _0x4822b3['constructNetworkId'])(this['chainId'],this['chainType'])):{},_0x491219));}}_0x5e3b12['ClientBuilder']=_0x1007d8;}(ClientBuilder),ClientBuilder;}

var FnBox = {};

Object['defineProperty'](FnBox,'__esModule',{'value':!![]});

var hasRequiredMultiExecutor;function requireMultiExecutor(){if(hasRequiredMultiExecutor)return multiExecutor;return hasRequiredMultiExecutor=0x1,function(_0x4a933e){var _0x595ff3=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x563b61,_0x81a2bb,_0x38bcbf,_0x3a1763){if(_0x3a1763===undefined)_0x3a1763=_0x38bcbf;var _0x59f578=Object['getOwnPropertyDescriptor'](_0x81a2bb,_0x38bcbf);(!_0x59f578||('get'in _0x59f578?!_0x81a2bb['__esModule']:_0x59f578['writable']||_0x59f578['configurable']))&&(_0x59f578={'enumerable':!![],'get':function(){return _0x81a2bb[_0x38bcbf];}}),Object['defineProperty'](_0x563b61,_0x3a1763,_0x59f578);}:function(_0x3c3fdd,_0x1dfdb8,_0x30f74a,_0x16b597){if(_0x16b597===undefined)_0x16b597=_0x30f74a;_0x3c3fdd[_0x16b597]=_0x1dfdb8[_0x30f74a];}),_0x5c7f9f=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x4b47da,_0x3fed13){for(var _0x35bea1 in _0x4b47da)if(_0x35bea1!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x3fed13,_0x35bea1))_0x595ff3(_0x3fed13,_0x4b47da,_0x35bea1);};Object['defineProperty'](_0x4a933e,'__esModule',{'value':!![]}),_0x5c7f9f(AgreementExecutor$1,_0x4a933e),_0x5c7f9f(CeilMedianConsensusExecutor$1,_0x4a933e),_0x5c7f9f(requireClientBuilder(),_0x4a933e),_0x5c7f9f(config$3,_0x4a933e),_0x5c7f9f(ConsensusExecutor$1,_0x4a933e),_0x5c7f9f(requireCreate(),_0x4a933e),_0x5c7f9f(Executor$1,_0x4a933e),_0x5c7f9f(FallbackExecutor$1,_0x4a933e),_0x5c7f9f(FnBox,_0x4a933e),_0x5c7f9f(MultiAgreementExecutor$1,_0x4a933e),_0x5c7f9f(ParallelExecutor$1,_0x4a933e),_0x5c7f9f(QuarantinedListFnDelegate$1,_0x4a933e),_0x5c7f9f(RaceExecutor$1,_0x4a933e);}(multiExecutor),multiExecutor;}

var OperationQueue$1 = {};

Object['defineProperty'](OperationQueue$1,'__esModule',{'value':!![]});OperationQueue$1['OperationQueue']=void 0x0;const logger_1=logger$d;class OperationQueue{['logger'];['queue']=[];['isProcessing']=![];['activeOperations']=new Set();constructor(_0x4dd0da=(0, logger_1['loggerFactory'])('operation-queue')){this['logger']=_0x4dd0da;}['enqueue'](_0x50a082,_0x488fa7){const _0x18bf18=this['queue']['findIndex'](_0x3c2f4f=>_0x3c2f4f['id']===_0x50a082);if(_0x18bf18!==-0x1)return this['queue'][_0x18bf18]['operation']=_0x488fa7,this['logger']['debug']('Replaced\x20operation\x20for\x20['+_0x50a082+']\x20in\x20the\x20queue.'),!![];else return this['activeOperations']['has'](_0x50a082)?(this['logger']['debug']('Operation\x20for\x20['+_0x50a082+']\x20is\x20currently\x20processing\x20and\x20cannot\x20be\x20replaced.'),![]):(this['queue']['push']({'id':_0x50a082,'operation':_0x488fa7}),this['logger']['debug']('Added\x20operation\x20for\x20['+_0x50a082+']\x20to\x20the\x20queue.'),this['processQueue'](),!![]);}async['processQueue'](){if(this['isProcessing'])return;this['isProcessing']=!![];while(this['queue']['length']>0x0){const {id:_0x81b4bc,operation:_0x1be438}=this['queue']['shift']();this['activeOperations']['add'](_0x81b4bc);try{this['logger']['debug']('Running\x20for\x20['+_0x81b4bc+']'),await _0x1be438();}catch(_0x22e9eb){this['logger']['error']('Operation\x20for\x20['+_0x81b4bc+']\x20failed:',_0x22e9eb);}finally{this['activeOperations']['delete'](_0x81b4bc);}}this['isProcessing']=![];}}OperationQueue$1['OperationQueue']=OperationQueue;

var tx = {};

var ITxDeliveryMan = {};

Object['defineProperty'](ITxDeliveryMan,'__esModule',{'value':!![]});

var TxDeliveryCall = {};

Object['defineProperty'](TxDeliveryCall,'__esModule',{'value':!![]});TxDeliveryCall['convertToTxDeliveryCall']=void 0x0;const convertToTxDeliveryCall=_0x34d157=>({'from':_0x34d157['from'],'to':_0x34d157['to'],'data':_0x34d157['data']});TxDeliveryCall['convertToTxDeliveryCall']=convertToTxDeliveryCall;

(function(_0x48892f){var _0x37084b=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x585d51,_0x26f6bb,_0x1b70ca,_0x5c28b7){if(_0x5c28b7===undefined)_0x5c28b7=_0x1b70ca;var _0x49539f=Object['getOwnPropertyDescriptor'](_0x26f6bb,_0x1b70ca);(!_0x49539f||('get'in _0x49539f?!_0x26f6bb['__esModule']:_0x49539f['writable']||_0x49539f['configurable']))&&(_0x49539f={'enumerable':!![],'get':function(){return _0x26f6bb[_0x1b70ca];}}),Object['defineProperty'](_0x585d51,_0x5c28b7,_0x49539f);}:function(_0x5e781a,_0x35a945,_0x11e2c9,_0x1ce799){if(_0x1ce799===undefined)_0x1ce799=_0x11e2c9;_0x5e781a[_0x1ce799]=_0x35a945[_0x11e2c9];}),_0x5839b7=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x468e72,_0x5bb292){for(var _0xb2e531 in _0x468e72)if(_0xb2e531!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x5bb292,_0xb2e531))_0x37084b(_0x5bb292,_0x468e72,_0xb2e531);};Object['defineProperty'](_0x48892f,'__esModule',{'value':!![]}),_0x5839b7(ITxDeliveryMan,_0x48892f),_0x5839b7(TxDeliveryCall,_0x48892f);}(tx));getDefaultExportFromCjs(tx);

var types$6 = {};

var cacheResponse = {};

Object['defineProperty'](cacheResponse,'__esModule',{'value':!![]});

var hardLimits = {};

Object['defineProperty'](hardLimits,'__esModule',{'value':!![]});hardLimits['LAST_UPDATED_TIMESTAMP_SYMBOL']=void 0x0;hardLimits['LAST_UPDATED_TIMESTAMP_SYMBOL']='__lastUpdatedTimestamp';

var redstoneMetadata = {};

Object['defineProperty'](redstoneMetadata,'__esModule',{'value':!![]});redstoneMetadata['TradeDirection']=void 0x0;var TradeDirection;(function(_0x1bf346){_0x1bf346['BUY']='buy',_0x1bf346['SELL']='sell';}(TradeDirection||(redstoneMetadata['TradeDirection']=TradeDirection={})));

(function(_0x5146b4){var _0x485fd0=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x165751,_0x5e63fc,_0x5b6a55,_0x29d755){if(_0x29d755===undefined)_0x29d755=_0x5b6a55;var _0x527c7e=Object['getOwnPropertyDescriptor'](_0x5e63fc,_0x5b6a55);(!_0x527c7e||('get'in _0x527c7e?!_0x5e63fc['__esModule']:_0x527c7e['writable']||_0x527c7e['configurable']))&&(_0x527c7e={'enumerable':!![],'get':function(){return _0x5e63fc[_0x5b6a55];}}),Object['defineProperty'](_0x165751,_0x29d755,_0x527c7e);}:function(_0x3909e9,_0x128c9e,_0x1d2b23,_0x52a220){if(_0x52a220===undefined)_0x52a220=_0x1d2b23;_0x3909e9[_0x52a220]=_0x128c9e[_0x1d2b23];}),_0xbdc83e=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x252dff,_0x292730){for(var _0x5919f1 in _0x252dff)if(_0x5919f1!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x292730,_0x5919f1))_0x485fd0(_0x292730,_0x252dff,_0x5919f1);};Object['defineProperty'](_0x5146b4,'__esModule',{'value':!![]}),_0xbdc83e(cacheResponse,_0x5146b4),_0xbdc83e(hardLimits,_0x5146b4),_0xbdc83e(redstoneMetadata,_0x5146b4);}(types$6));getDefaultExportFromCjs(types$6);

var hasRequiredSrc$3;function requireSrc$3(){if(hasRequiredSrc$3)return src$b;return hasRequiredSrc$3=0x1,function(_0x20d512){var _0x226070=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x2ebfba,_0x5b9a42,_0x548c5e,_0xb17c8e){if(_0xb17c8e===undefined)_0xb17c8e=_0x548c5e;var _0x5ba9c9=Object['getOwnPropertyDescriptor'](_0x5b9a42,_0x548c5e);(!_0x5ba9c9||('get'in _0x5ba9c9?!_0x5b9a42['__esModule']:_0x5ba9c9['writable']||_0x5ba9c9['configurable']))&&(_0x5ba9c9={'enumerable':!![],'get':function(){return _0x5b9a42[_0x548c5e];}}),Object['defineProperty'](_0x2ebfba,_0xb17c8e,_0x5ba9c9);}:function(_0x1859f4,_0x31d8db,_0x1f5f7e,_0x1f24d4){if(_0x1f24d4===undefined)_0x1f24d4=_0x1f5f7e;_0x1859f4[_0x1f24d4]=_0x31d8db[_0x1f5f7e];}),_0x5a66ef=commonjsGlobal&&commonjsGlobal['__setModuleDefault']||(Object['create']?function(_0x36ea19,_0x65fc2e){Object['defineProperty'](_0x36ea19,'default',{'enumerable':!![],'value':_0x65fc2e});}:function(_0x5e6a7d,_0x25445f){_0x5e6a7d['default']=_0x25445f;}),_0x381a68=commonjsGlobal&&commonjsGlobal['__importStar']||function(_0x2c7f6a){if(_0x2c7f6a&&_0x2c7f6a['__esModule'])return _0x2c7f6a;var _0x55514c={};if(_0x2c7f6a!=null){for(var _0x2fd255 in _0x2c7f6a)if(_0x2fd255!=='default'&&Object['prototype']['hasOwnProperty']['call'](_0x2c7f6a,_0x2fd255))_0x226070(_0x55514c,_0x2c7f6a,_0x2fd255);}return _0x5a66ef(_0x55514c,_0x2c7f6a),_0x55514c;},_0x385d11=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x59a6f0,_0x593e67){for(var _0x25ed2e in _0x59a6f0)if(_0x25ed2e!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x593e67,_0x25ed2e))_0x226070(_0x593e67,_0x59a6f0,_0x25ed2e);};Object['defineProperty'](_0x20d512,'__esModule',{'value':!![]}),_0x20d512['RedstoneTypes']=_0x20d512['Tx']=_0x20d512['MultiExecutor']=_0x20d512['MathUtils']=_0x20d512['SafeNumber']=_0x20d512['RedstoneCrypto']=_0x20d512['RedstoneConstants']=_0x20d512['RedstoneCommon']=void 0x0,_0x20d512['RedstoneCommon']=_0x381a68(common$1),_0x20d512['RedstoneConstants']=_0x381a68(requireConstants()),_0x20d512['RedstoneCrypto']=_0x381a68(crypto),_0x385d11(curatedList,_0x20d512),_0x20d512['SafeNumber']=_0x381a68(requireISafeNumber()),_0x385d11(logger$d,_0x20d512),_0x20d512['MathUtils']=_0x381a68(math),_0x385d11(monitoring,_0x20d512),_0x20d512['MultiExecutor']=_0x381a68(requireMultiExecutor()),_0x385d11(NetworkId,_0x20d512),_0x385d11(OperationQueue$1,_0x20d512),_0x20d512['Tx']=_0x381a68(tx),_0x20d512['RedstoneTypes']=_0x381a68(types$6);}(src$b),src$b;}

var BackgroundBlockNumbersFetcher = {};

var src$a = {};

var CronAgent$1 = {};

Object['defineProperty'](CronAgent$1,'__esModule',{'value':!![]});CronAgent$1['CronAgent']=void 0x0;const utils_1$1j=requireSrc$3(),node_schedule_1=_0x2a6da7;class CronAgent{['args'];['cachedValue'];['logger'];['inProgress']=![];['schedulerTask'];constructor(_0x55f209){this['args']=_0x55f209,this['cachedValue']={'cachedAt':0x0},this['logger']=(0, utils_1$1j['loggerFactory'])('agent-'+_0x55f209['name']);}async['start'](){let _0x356e75=!![];try{await this['executeJobAndSaveResults']();}catch(_0x3c35c9){this['logger']['error']('Failed\x20to\x20initialize\x20agent\x20with\x20first\x20value\x20error='+utils_1$1j['RedstoneCommon']['stringifyError'](_0x3c35c9)),_0x356e75=![];}if(this['schedulerTask'])return this['logger']['warn']('Prevent\x20from\x20creating\x20setInterval\x20twice\x20for\x20same\x20agent'),!![];return this['schedulerTask']=(0, node_schedule_1['scheduleJob'])(this['args']['cronExpression'],async()=>{try{await this['executeJobAndSaveResults']();}catch(_0x27bd52){this['logger']['warn']('Agent\x20job\x20failed\x20error='+utils_1$1j['RedstoneCommon']['stringifyError'](_0x27bd52));}}),_0x356e75;}['stop'](){this['schedulerTask']?this['schedulerTask']['cancel'](![]):this['logger']['warn']('Tried\x20to\x20stop\x20never\x20started\x20agent');}['getLastFreshMessageOrFail'](){if(this['isStale']()||!this['cachedValue']['value'])throw new Error('Cached\x20data\x20is\x20stale\x20or\x20not\x20populated\x20cachedAt='+this['cachedValue']['cachedAt']+'\x20maxDataTTL='+this['args']['maxDataTTL']+'\x20cacheAge='+(Date['now']()-this['cachedValue']['cachedAt']));return this['cachedValue']['value'];}['getLastFreshMessageOrDefault'](_0x432397){if(this['isStale']())return _0x432397;return this['cachedValue']['value'];}['isStale'](){return Date['now']()-this['cachedValue']['cachedAt']>this['args']['maxDataTTL'];}async['executeJobAndSaveResults'](){if(this['inProgress']){this['logger']['debug']('skipping\x20deferredFetchData,\x20because\x20previous\x20is\x20still\x20in\x20progress');return;}try{this['inProgress']=!![];const _0x4d0a55=await utils_1$1j['RedstoneCommon']['timeout'](this['args']['job'](),this['args']['timeout']);this['cachedValue']={'cachedAt':Date['now'](),'value':_0x4d0a55};}finally{this['inProgress']=![];}}}CronAgent$1['CronAgent']=CronAgent;

(function(_0x203559){var _0x4366fb=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x3c182f,_0x4fd671,_0x34af16,_0xd766f3){if(_0xd766f3===undefined)_0xd766f3=_0x34af16;var _0x39886c=Object['getOwnPropertyDescriptor'](_0x4fd671,_0x34af16);(!_0x39886c||('get'in _0x39886c?!_0x4fd671['__esModule']:_0x39886c['writable']||_0x39886c['configurable']))&&(_0x39886c={'enumerable':!![],'get':function(){return _0x4fd671[_0x34af16];}}),Object['defineProperty'](_0x3c182f,_0xd766f3,_0x39886c);}:function(_0xc80d09,_0x75dfac,_0x1baa38,_0x1997ca){if(_0x1997ca===undefined)_0x1997ca=_0x1baa38;_0xc80d09[_0x1997ca]=_0x75dfac[_0x1baa38];}),_0xf60697=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x575bc7,_0x5653f8){for(var _0x4ede10 in _0x575bc7)if(_0x4ede10!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x5653f8,_0x4ede10))_0x4366fb(_0x5653f8,_0x575bc7,_0x4ede10);};Object['defineProperty'](_0x203559,'__esModule',{'value':!![]}),_0xf60697(CronAgent$1,_0x203559);}(src$a));getDefaultExportFromCjs(src$a);

Object['defineProperty'](BackgroundBlockNumbersFetcher,'__esModule',{'value':!![]});BackgroundBlockNumbersFetcher['BackgroundBlockNumberFetcher']=void 0x0;const agents_1=src$a,utils_1$1i=requireSrc$3();class BackgroundBlockNumberFetcher{['opts'];['agentPerNetworkId']={};constructor(_0x24a5f0){this['opts']=_0x24a5f0;for(const [_0x1d56a4,_0x274504]of this['opts']['blockNumbersFetchers']){const _0x12a1df=utils_1$1i['RedstoneCommon']['retry']({'fn':()=>_0x274504['getBlockNumber'](),'maxRetries':0x1,'waitBetweenMs':0x32}),_0x34baf7=new agents_1['CronAgent']({'job':_0x12a1df,'name':'background-block-number-fetcher-'+_0x1d56a4,'timeout':this['opts']['timeout'],'maxDataTTL':this['opts']['maxTTL'],'cronExpression':this['opts']['cronExpression']});this['agentPerNetworkId'][_0x1d56a4]=_0x34baf7;}}['start'](){return Promise['all'](Object['values'](this['agentPerNetworkId'])['map'](_0x2a68d5=>_0x2a68d5['start']()));}['stop'](){Object['values'](this['agentPerNetworkId'])['forEach'](_0x2689e5=>_0x2689e5['stop']());}['getBlockNumbers'](){const _0x58cbad={};for(const [_0x3590c4,_0x17a422]of Object['entries'](this['agentPerNetworkId'])){const _0x1b46ea=_0x17a422['getLastFreshMessageOrDefault']();_0x1b46ea!==undefined&&(_0x58cbad[utils_1$1i['NetworkIdSchema']['parse'](_0x3590c4)]=_0x1b46ea);}return _0x58cbad;}}BackgroundBlockNumbersFetcher['BackgroundBlockNumberFetcher']=BackgroundBlockNumberFetcher;

var common = {};

(function(_0x53fdfb){Object['defineProperty'](_0x53fdfb,'__esModule',{'value':!![]}),_0x53fdfb['isEthersError']=_0x53fdfb['convertHexToNumber']=_0x53fdfb['convertBlockTagToNumber']=_0x53fdfb['sleepMS']=void 0x0,_0x53fdfb['getProviderNetworkInfo']=_0x5a4f60,_0x53fdfb['getProviderNetworkId']=_0x2e3b8b;const _0x498ba6=_0x3e9376,_0x535e1e=_0x3e1bc2=>new Promise((_0x592edc,_0x2253fa)=>setTimeout(_0x592edc,_0x3e1bc2));_0x53fdfb['sleepMS']=_0x535e1e;const _0x2cbecb=_0x266602=>typeof _0x266602==='string'?(0, _0x53fdfb['convertHexToNumber'])(_0x266602):_0x266602;_0x53fdfb['convertBlockTagToNumber']=_0x2cbecb;const _0x3d49a3=_0x108686=>{const _0x5e6c63=Number['parseInt'](_0x108686,0x10);if(Number['isNaN'](_0x5e6c63))throw new Error('Failed\x20to\x20parse\x20'+_0x108686+'\x20to\x20number');return _0x5e6c63;};_0x53fdfb['convertHexToNumber']=_0x3d49a3;const _0x487784=_0x1751ea=>{const _0x53d568=_0x1751ea;return !!_0x53d568['code']&&!!_0x53d568['message'];};_0x53fdfb['isEthersError']=_0x487784;function _0x5a4f60(_0x2ec015,_0x400e4d={'chainId':0x7a69,'url':'unknown'}){try{if(_0x2ec015 instanceof _0x498ba6['providers']['JsonRpcProvider'])return {'chainId':_0x2ec015['network']['chainId'],'url':_0x2ec015['connection']['url']};}catch{return _0x400e4d;}return _0x400e4d;}async function _0x2e3b8b(_0x543746){const _0x4e7b2e=await _0x543746['getNetwork']();return _0x4e7b2e['chainId'];}}(common));getDefaultExportFromCjs(common);

var hardhatNetworkConfigs = {};

var src$9 = {};

var chainTokenMap$1 = {};

var src$8 = {};

var cloudwatch = {};

var awsClients = {};

var region = {};

(function(_0x347495){Object['defineProperty'](_0x347495,'__esModule',{'value':!![]}),_0x347495['regionalCache']=_0x347495['currentAwsRegion']=_0x347495['DEFAULT_AWS_REGION']=void 0x0;const _0x3bc516=requireSrc$3(),_0x52b24d=_0x28081a;_0x347495['DEFAULT_AWS_REGION']='eu-west-1';const _0x5aab43=(_0x884c8b=_0x347495['DEFAULT_AWS_REGION'])=>_0x3bc516['RedstoneCommon']['getFromEnv']('AWS_REGION',_0x52b24d['z']['string']()['default'](_0x884c8b));_0x347495['currentAwsRegion']=_0x5aab43;const _0x3132fa=_0x3ddd69=>{const _0x4106c8={};return _0x70ea82=>{return _0x70ea82??=(0, _0x347495['currentAwsRegion'])(),!(_0x70ea82 in _0x4106c8)&&(_0x4106c8[_0x70ea82]=_0x3ddd69(_0x70ea82)),_0x4106c8[_0x70ea82];};};_0x347495['regionalCache']=_0x3132fa;}(region));getDefaultExportFromCjs(region);

Object['defineProperty'](awsClients,'__esModule',{'value':!![]});awsClients['getDynamoDbClient']=awsClients['getSsmClient']=awsClients['getS3']=awsClients['getLambdaClient']=awsClients['getEcsClient']=awsClients['getCloudWatchClient']=awsClients['getCloudwatch']=void 0x0;const client_cloudwatch_1$1=_0x34a040,client_dynamodb_1=_0x521299,client_ecs_1$1=_0x3e611f,client_lambda_1$1=_0x220763,client_s3_1=_0x3414ec,client_ssm_1=_0xb8ff2f,region_1$1=region;awsClients['getCloudwatch']=(0, region_1$1['regionalCache'])(_0x43abd4=>new client_cloudwatch_1$1['CloudWatch']({'region':_0x43abd4}));awsClients['getCloudWatchClient']=(0, region_1$1['regionalCache'])(_0x5f5629=>new client_cloudwatch_1$1['CloudWatchClient']({'region':_0x5f5629}));awsClients['getEcsClient']=(0, region_1$1['regionalCache'])(_0xf5ea38=>new client_ecs_1$1['ECSClient']({'region':_0xf5ea38}));awsClients['getLambdaClient']=(0, region_1$1['regionalCache'])(_0x4d590c=>new client_lambda_1$1['LambdaClient']({'region':_0x4d590c}));awsClients['getS3']=(0, region_1$1['regionalCache'])(_0x570e24=>new client_s3_1['S3']({'region':_0x570e24}));awsClients['getSsmClient']=(0, region_1$1['regionalCache'])(_0xf64beb=>new client_ssm_1['SSMClient']({'region':_0xf64beb}));awsClients['getDynamoDbClient']=(0, region_1$1['regionalCache'])(_0x25b842=>new client_dynamodb_1['DynamoDBClient']({'region':_0x25b842}));

Object['defineProperty'](cloudwatch,'__esModule',{'value':!![]});cloudwatch['sendHealthcheckMetric']=void 0x0;cloudwatch['sendMetrics']=sendMetrics;cloudwatch['setAlarmState']=setAlarmState;cloudwatch['getAlarmTags']=getAlarmTags;const client_cloudwatch_1=_0x34a040,aws_clients_1$4=awsClients;async function sendMetrics(_0x3f49ec,_0x134226,_0x18127a=[],_0x159da7=client_cloudwatch_1['StandardUnit']['Count'],_0x83b46f){const _0x4a6a75={'MetricData':_0x18127a['map'](({value:_0x5f5410,dimensions:_0x4b0497})=>{return {'MetricName':_0x134226,'Dimensions':_0x4b0497,'Unit':_0x159da7,'Value':_0x5f5410};}),'Namespace':_0x3f49ec},_0x4d5dc1=new client_cloudwatch_1['PutMetricDataCommand'](_0x4a6a75);try{await(0x0,aws_clients_1$4['getCloudWatchClient'])(_0x83b46f)['send'](_0x4d5dc1);}catch(_0x4f4dd1){console['error']('Error\x20sending\x20metric\x20data:',_0x4f4dd1);}}async function setAlarmState(_0x516a3d,_0x3cf835=client_cloudwatch_1['StateValue']['INSUFFICIENT_DATA'],_0xb6a7f4){return await(0, aws_clients_1$4['getCloudwatch'])(_0xb6a7f4)['setAlarmState']({'AlarmName':_0x516a3d,'StateValue':_0x3cf835,'StateReason':'Alarm\x20state\x20set\x20to\x20'+_0x3cf835+'\x20by\x20lambda\x20function'});}async function getAlarmTags(_0x2105cb,_0x1f80e3){const {Tags:_0x52cf37}=await(0, aws_clients_1$4['getCloudWatchClient'])(_0x1f80e3)['send'](new client_cloudwatch_1['ListTagsForResourceCommand']({'ResourceARN':_0x2105cb}));if(!_0x52cf37)return {};return Object['fromEntries'](_0x52cf37['filter'](isTagDefined)['map'](_0x4285cf=>[_0x4285cf['Key'],_0x4285cf['Value']]));}function isTagDefined(_0x3ee25f){return _0x3ee25f['Key']!==undefined&&_0x3ee25f['Value']!==undefined;}const sendHealthcheckMetric=async _0x44ad47=>{const _0x3e8cf2='Health-Check-Metrics';if(!_0x44ad47)return;const _0x432125=Date['now']();await sendMetrics(_0x3e8cf2,_0x44ad47,[{'value':0x1}]),console['info']('Sent\x20healthcheck\x20metric\x20in\x20'+(Date['now']()-_0x432125)+'ms');};cloudwatch['sendHealthcheckMetric']=sendHealthcheckMetric;

var DynamoDbService$1 = {};

Object['defineProperty'](DynamoDbService$1,'__esModule',{'value':!![]});DynamoDbService$1['DynamoDbService']=void 0x0;const lib_dynamodb_1=_0x5b365d,aws_clients_1$3=awsClients;class DynamoDbService{['tableName'];['db'];constructor(_0x385011,_0x19e308){this['tableName']=_0x385011,this['db']=lib_dynamodb_1['DynamoDBDocumentClient']['from']((0, aws_clients_1$3['getDynamoDbClient'])(_0x19e308));}async['query'](_0x4edb2b){const {Items:_0x31350b}=await this['db']['send'](new lib_dynamodb_1['QueryCommand']({'TableName':this['tableName'],..._0x4edb2b}));return _0x31350b;}async['get'](_0x51d53f){const {Item:_0x5852ab}=await this['db']['send'](new lib_dynamodb_1['GetCommand']({'TableName':this['tableName'],'Key':_0x51d53f}));return _0x5852ab;}async['write'](_0x5ce818){await this['db']['send'](new lib_dynamodb_1['PutCommand']({'TableName':this['tableName'],'Item':_0x5ce818}));}async['delete'](_0x37ee7a){await this['db']['send'](new lib_dynamodb_1['DeleteCommand']({'TableName':this['tableName'],'Key':_0x37ee7a}));}async['deleteMany'](_0x30c7d0){const _0x1af19f=_0x30c7d0['map'](_0x1cdc5b=>({'DeleteRequest':{'Key':_0x1cdc5b}}));console['log']('Requested\x20deletes:\x20'+_0x30c7d0['length']);const {UnprocessedItems:_0x15a157}=await this['db']['send'](new lib_dynamodb_1['BatchWriteCommand']({'RequestItems':{[this['tableName']]:_0x1af19f}}));_0x15a157&&Object['keys'](_0x15a157)['length']&&console['warn']('Some\x20items\x20were\x20not\x20processed:',_0x15a157);}}DynamoDbService$1['DynamoDbService']=DynamoDbService;

var ecs = {};

Object['defineProperty'](ecs,'__esModule',{'value':!![]});ecs['AwsEcs']=void 0x0;const client_ecs_1=_0x3e611f,aws_clients_1$2=awsClients;class AwsEcs{['client'];constructor(_0x3b0568){this['client']=_0x3b0568;}static['forRegion'](_0x127512){return new AwsEcs((0, aws_clients_1$2['getEcsClient'])(_0x127512));}async['listClusters'](){let _0x3a776a,_0x6cbab1=undefined;const _0xb8fb22=[];do{const _0x3fc772=new client_ecs_1['ListClustersCommand']({'nextToken':_0x6cbab1});(({clusterArns:_0x3a776a,nextToken:_0x6cbab1}=await this['client']['send'](_0x3fc772)),_0xb8fb22['push'](..._0x3a776a??[]));}while(_0x6cbab1);return _0xb8fb22;}async['listServices'](_0x35be6d){const _0x3e2576=new client_ecs_1['ListServicesCommand']({'cluster':_0x35be6d}),{serviceArns:_0xd3eeab}=await this['client']['send'](_0x3e2576);return _0xd3eeab??[];}async['describeService'](_0x1e83bb,_0x183f41){const _0x3a882e=new client_ecs_1['DescribeServicesCommand']({'cluster':_0x1e83bb,'services':[_0x183f41]}),{services:_0x1d9f04}=await this['client']['send'](_0x3a882e);return _0x1d9f04?.[0x0];}async['describeTaskDefinition'](_0x256efe){const _0x15f587=new client_ecs_1['DescribeTaskDefinitionCommand']({'taskDefinition':_0x256efe}),{taskDefinition:_0x3368e9}=await this['client']['send'](_0x15f587);return _0x3368e9;}}ecs['AwsEcs']=AwsEcs;

var lambda = {};

var __importDefault$h=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x395334){return _0x395334&&_0x395334['__esModule']?_0x395334:{'default':_0x395334};};Object['defineProperty'](lambda,'__esModule',{'value':!![]});lambda['ErrorSeveritiesEnum']=void 0x0;lambda['invokeLambda']=invokeLambda;lambda['sendErrorLog']=sendErrorLog;const client_lambda_1=_0x220763,utils_1$1h=requireSrc$3(),zod_1$8=__importDefault$h(_0x28081a),aws_clients_1$1=awsClients,errorSeverities=['critical','error','warning','info'];lambda['ErrorSeveritiesEnum']=zod_1$8['default']['enum'](errorSeverities);function invokeLambda(_0x5f0b96,_0x2c0ccc,_0x2074cc){const _0x15eb30=new client_lambda_1['InvokeCommand']({'FunctionName':_0x5f0b96,'Payload':JSON['stringify'](_0x2c0ccc),'LogType':'None'});return (0, aws_clients_1$1['getLambdaClient'])(_0x2074cc)['send'](_0x15eb30);}async function sendErrorLog(_0x13108b,_0x4f5987,_0x21cd4b,_0x411eb4){try{await invokeLambda(_0x13108b,{'message':_0x4f5987,'severity':_0x21cd4b},_0x411eb4);}catch(_0x1a133b){throw new Error('Error\x20sending\x20error\x20log:\x20'+utils_1$1h['RedstoneCommon']['stringifyError'](_0x1a133b));}}

var params = {};

var s3 = {};

Object['defineProperty'](s3,'__esModule',{'value':!![]});s3['readS3Object']=s3['writeS3Object']=void 0x0;const aws_clients_1=awsClients,region_1=region,writeS3Object=async(_0x5d4f41,_0x174fe4,_0x18ec6e,_0x43c582,_0x2f1066=!![])=>{const _0x32f2dd=_0x2f1066?JSON['stringify'](_0x18ec6e,null,0x2)+'\x0a':_0x18ec6e,_0x412314={'Bucket':_0x5d4f41,'Key':_0x174fe4,'ContentType':'application/json','Body':_0x32f2dd};await(0, aws_clients_1['getS3'])(_0x43c582)['putObject'](_0x412314);};s3['writeS3Object']=writeS3Object;const readS3Object=async(_0x2362d5,_0x16c4a7,_0x59c229=region_1['DEFAULT_AWS_REGION'])=>{const _0x15ef4c={'Bucket':_0x2362d5,'Key':_0x16c4a7},_0xc311a4=await(0, aws_clients_1['getS3'])(_0x59c229)['getObject'](_0x15ef4c),_0x35547f=await _0xc311a4['Body']?.['transformToString']('utf-8');return _0x35547f?JSON['parse'](_0x35547f):undefined;};s3['readS3Object']=readS3Object;

(function(_0x58103d){var _0x2e47ea=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x492dc6){return _0x492dc6&&_0x492dc6['__esModule']?_0x492dc6:{'default':_0x492dc6};};Object['defineProperty'](_0x58103d,'__esModule',{'value':!![]}),_0x58103d['secretsToEnv']=_0x58103d['getS3ConfigurationValue']=_0x58103d['getSSMParameterValues']=_0x58103d['getSSMParameterValue']=void 0x0;const _0x557b92=_0xb8ff2f,_0x5cd3f3=requireSrc$3(),_0x273db4=_0x2e47ea(_0x62d7dc),_0xb4c1e0=awsClients,_0x2e4dd5=s3,_0x2559ed=0xa,_0x1d147e=async(_0xf243cf,_0x2363d6)=>{const _0x4d6df3=(0, _0xb4c1e0['getSsmClient'])(_0x2363d6),_0x1f1e04=new _0x557b92['GetParameterCommand']({'Name':_0xf243cf,'WithDecryption':!![]});return (await _0x4d6df3['send'](_0x1f1e04))['Parameter']?.['Value'];};_0x58103d['getSSMParameterValue']=_0x1d147e;const _0x5dfc1a=async(_0x3c6bab,_0x49f661)=>{const _0x205af7=(0, _0xb4c1e0['getSsmClient'])(_0x49f661),_0xa6fe63=_0x273db4['default']['chunk'](_0x3c6bab,_0x2559ed);let _0xa0d663={};for(const _0x53411f of _0xa6fe63){const _0x28c5b1=await _0x5d99f4(_0x205af7,_0x53411f);_0xa0d663={..._0xa0d663,..._0x28c5b1};}return _0xa0d663;};_0x58103d['getSSMParameterValues']=_0x5dfc1a;const _0x5d99f4=async(_0x798b79,_0x31f413)=>{const _0x254db2=new _0x557b92['GetParametersCommand']({'Names':_0x31f413,'WithDecryption':!![]}),_0x3b1ef1=await _0x798b79['send'](_0x254db2);if(!_0x5cd3f3['RedstoneCommon']['isDefined'](_0x3b1ef1['Parameters']))return {};const _0xadeaba={};for(const _0x5ede3e of _0x3b1ef1['Parameters']){_0x5cd3f3['RedstoneCommon']['isDefined'](_0x5ede3e['Value'])&&(_0xadeaba[_0x5ede3e['Name']]=_0x5ede3e['Value']);}return _0xadeaba;},_0x38f1ba=async()=>{const _0x560797=process['env']['CONFIGURATION_S3_BUCKET'],_0x5de19e=process['env']['CONFIGURATION_S3_OBJECT'];if(!_0x560797||!_0x5de19e)throw new Error('S3\x20configuration\x20not\x20set');return await(0, _0x2e4dd5['readS3Object'])(_0x560797,_0x5de19e);};_0x58103d['getS3ConfigurationValue']=_0x38f1ba;const _0x191d71=async()=>{const _0x2df96b=Object['entries'](process['env'])['filter'](([_0x3a70cf])=>_0x3a70cf['endsWith']('_ARN'))['map'](async([_0x210fd2,_0x41e416])=>{const _0x9b64be=_0x210fd2['replace']('_ARN','');if(_0x9b64be===''||!_0x41e416||_0x41e416==='')return;const _0x50510f=await(0, _0x58103d['getSSMParameterValue'])(_0x41e416);_0x50510f&&(process['env'][_0x9b64be]=_0x50510f);});try{await Promise['all'](_0x2df96b);}catch(_0x38791c){console['error']('Error\x20while\x20fetching\x20secrets',_0x38791c);}};_0x58103d['secretsToEnv']=_0x191d71;}(params));getDefaultExportFromCjs(params);

var configChecks = {};

var RedStoneTxStatsInfluxService$1 = {};

var InfluxService = {};

(function(_0x31a7d8){Object['defineProperty'](_0x31a7d8,'__esModule',{'value':!![]}),_0x31a7d8['InfluxService']=_0x31a7d8['RETRY_CONFIG']=void 0x0;const _0x3e1995=_0x3d0e8d,_0x5d5cbc=_0x209071,_0x242c51=requireSrc$3();_0x31a7d8['RETRY_CONFIG']={'maxRetries':0x5,'waitBetweenMs':0x64,'backOff':{'backOffBase':0x2}};class _0x5d0244{['authParams'];['writeOptions'];['influx'];constructor(_0x5bbc46,_0x22a0e3,_0x3e83a8){this['authParams']=_0x5bbc46,this['writeOptions']=_0x3e83a8,this['influx']=new _0x3e1995['InfluxDB']({'token':_0x5bbc46['token'],'url':_0x5bbc46['url'],'timeout':_0x22a0e3??0x7530});}async['query'](_0x2b602c,_0x4d2fd5=''){const _0x23a47d=_0x4d2fd5+'\x0a\x0a\x20\x20\x20\x20\x20\x20from(bucket:\x20\x22'+this['authParams']['bucketName']+'\x22)\x20'+_0x2b602c;return await _0x242c51['RedstoneCommon']['retry']({'fn':async()=>await this['getQueryApi']()['collectRows'](_0x23a47d),..._0x31a7d8['RETRY_CONFIG']})();}async['filterByRetentionPeriod'](_0x4f1557){const _0x4b69ce=await this['getBucketRetentionPeriod']()*0x3e8;console['log']('Filtering\x20data\x20by\x20retention\x20period:\x20'+_0x4b69ce+'\x20[ms]');if(_0x4b69ce===0x0)return _0x4f1557;const _0x1751f5=Date['now'](),_0x2efda7=_0x4f1557['filter'](_0x858f68=>_0x1751f5-_0x858f68['timestampMilliseconds']<_0x4b69ce);return console['log']('Filtered-out\x20item\x20count:\x20'+(_0x4f1557['length']-_0x2efda7['length'])),_0x2efda7;}async['insert'](_0x2e6569){const _0x259299=this['getWriteApi']();_0x2e6569['forEach'](_0x1fc649=>_0x259299['writePoint'](_0x1fc649)),await _0x259299['close']();}async['delete'](_0x5a2f95){console['log']('***\x20DELETE\x20DATA\x20***');const _0x3b1ebe=new _0x5d5cbc['DeleteAPI'](this['influx']);await _0x3b1ebe['postDelete']({'org':this['authParams']['orgName'],'bucket':this['authParams']['bucketName'],'body':_0x5a2f95});}async['getBucketRetentionPeriod'](){const _0x538313=await this['getBucket'](),_0x2d8b2a=_0x538313['retentionRules'][0x0];if(_0x2d8b2a['type']!=='expire')return 0x0;return _0x2d8b2a['everySeconds'];}['getQueryApi'](){return this['influx']['getQueryApi'](this['authParams']['orgName']);}['getWriteApi'](){return this['influx']['getWriteApi'](this['authParams']['orgName'],this['authParams']['bucketName'],'ms',this['writeOptions']);}async['getBucket'](){const _0x1b2d32=new _0x5d5cbc['BucketsAPI'](this['influx']),_0x573a69=await _0x1b2d32['getBuckets']({'org':this['authParams']['orgName'],'name':this['authParams']['bucketName']});if(!_0x573a69['buckets']?.['length'])throw new Error('Bucket\x20\x22'+this['authParams']['bucketName']+'\x22\x20not\x20found');return _0x573a69['buckets'][0x0];}}_0x31a7d8['InfluxService']=_0x5d0244;}(InfluxService));getDefaultExportFromCjs(InfluxService);

var influxdbConfig = {};

(function(_0x2b665a){Object['defineProperty'](_0x2b665a,'__esModule',{'value':!![]}),_0x2b665a['INFLUXDB_BUCKET']=_0x2b665a['INFLUXDB_ORG']=void 0x0,_0x2b665a['toInfluxAuthParams']=_0xec7d1a,_0x2b665a['fetchAnalyticsInfluxConfig']=_0xe9c754,_0x2b665a['fetchManagedInfluxConfig']=_0x232bd5,_0x2b665a['insertIntoInfluxDb']=_0x406daa;const _0xfbb6cf=params;_0x2b665a['INFLUXDB_ORG']='redstone',_0x2b665a['INFLUXDB_BUCKET']='redstone';const _0x2cea08='eu-west-1';function _0xec7d1a(_0x2208b9){return {'url':_0x2208b9['url'],'token':_0x2208b9['token'],'bucketName':_0x2b665a['INFLUXDB_BUCKET'],'orgName':_0x2b665a['INFLUXDB_ORG']};}async function _0xe9c754(){const _0x4aef1b=(0, _0xfbb6cf['getSSMParameterValue'])(process['env']['INFLUXDB_URL_SSM_PATH']??'/dev/influxdb/url',_0x2cea08),_0x2215ac=(0, _0xfbb6cf['getSSMParameterValue'])(process['env']['INFLUXDB_TOKEN_SSM_PATH']??'/dev/influxdb/token',_0x2cea08);return {'url':await _0x4aef1b,'token':await _0x2215ac};}async function _0x232bd5(){const _0x2a9444=(0, _0xfbb6cf['getSSMParameterValue'])(process['env']['MANAGED_INFLUXDB_URL_SSM_PATH']??'/dev/influxdb/managed-url',_0x2cea08),_0x562979=(0, _0xfbb6cf['getSSMParameterValue'])(process['env']['MANAGED_INFLUXDB_TOKEN_SSM_PATH']??'/dev/influxdb/managed-token',_0x2cea08);return {'url':await _0x2a9444,'token':await _0x562979};}async function _0x406daa(_0x26c9d0,_0x3e7da3){const _0x54dc38=_0x26c9d0['getWriteApi'](_0x2b665a['INFLUXDB_ORG'],_0x2b665a['INFLUXDB_BUCKET'],'ms');_0x3e7da3['forEach'](_0x30e587=>_0x54dc38['writePoint'](_0x30e587)),await _0x54dc38['close']();}}(influxdbConfig));getDefaultExportFromCjs(influxdbConfig);

Object['defineProperty'](RedStoneTxStatsInfluxService$1,'__esModule',{'value':!![]});RedStoneTxStatsInfluxService$1['RedStoneTxStatsInfluxService']=void 0x0;const utils_1$1g=requireSrc$3(),InfluxService_1=InfluxService,influxdb_config_1=influxdbConfig,TXS_MEASUREMENT='redstoneTransactions';class RedStoneTxStatsInfluxService extends InfluxService_1['InfluxService']{static['withEnvParams'](_0x266a4a=utils_1$1g['RedstoneCommon']['getFromEnv']('INFLUX_URL'),_0x457aa=utils_1$1g['RedstoneCommon']['getFromEnv']('INFLUX_TOKEN'),_0x202650='redstone-transactions'){if(!_0x266a4a||!_0x457aa)throw new Error('Influx\x20url\x20or\x20token\x20not\x20passed!');return new RedStoneTxStatsInfluxService({'url':_0x266a4a,'token':_0x457aa,'bucketName':_0x202650,'orgName':influxdb_config_1['INFLUXDB_ORG']});}async['getTransactionStats'](_0x533f63,_0x11c9e0,_0x434059,_0x19f732=0x1e,_0x2bf5cb=0xa){const _0x437ff4='\x0a\x20\x20\x20\x20\x20\x20|>\x20range(start:\x20-'+_0x19f732+'d)\x0a\x20\x20\x20\x20\x20\x20|>\x20filter(fn:\x20(r)\x20=>\x20r[\x22_measurement\x22]\x20==\x20\x22'+TXS_MEASUREMENT+'\x22)\x0a\x20\x20\x20\x20\x20\x20|>\x20filter(fn:\x20(r)\x20=>\x20r[\x22_field\x22]\x20==\x20\x22gasUsed\x22\x20or\x20r[\x22_field\x22]\x20==\x20\x22gasPrice\x22)\x20\x0a\x20\x20\x20\x20\x20\x20|>\x20filter(fn:\x20(r)\x20=>\x20r[\x22networkId\x22]\x20==\x20\x22'+_0x533f63+'\x22\x20and\x20r[\x22isFailed\x22]\x20!=\x20\x22true\x22)\x0a\x20\x20\x20\x20\x20\x20//\x20performing\x20strings.toLower\x20makes\x20the\x20query\x20extremely\x20slow\x20(~100\x20times)\x20use\x20\x27or\x27\x20operator\x20instead\x0a\x20\x20\x20\x20\x20\x20|>\x20filter(fn:\x20(r)\x20=>\x20r[\x22sender\x22]\x20==\x20\x22'+_0x11c9e0['toLowerCase']()+'\x22\x20or\x20r[\x22sender\x22]\x20==\x20\x22'+_0x11c9e0+'\x22)\x0a\x20\x20\x20\x20\x20\x20|>\x20filter(fn:\x20(r)\x20=>\x20r[\x22contract\x22]\x20==\x20\x22'+_0x434059['toLowerCase']()+'\x22\x20or\x20r[\x22contract\x22]\x20==\x20\x22'+_0x434059+'\x22)\x0a\x20\x20\x20\x20\x20\x20|>\x20pivot(rowKey:[\x22_time\x22],\x20columnKey:\x20[\x22_field\x22],\x20valueColumn:\x20\x22_value\x22)\x0a\x20\x20\x20\x20\x20\x20|>\x20map(fn:\x20(r)\x20=>\x20({\x20r\x20with\x20gasCost:\x20float(v:\x20r.gasUsed)\x20*\x20float(v:\x20r.gasPrice)\x20}))\x0a\x20\x20\x20\x20\x20\x20|>\x20sort(columns:\x20[\x22_time\x22],\x20desc:\x20true)\x0a\x20\x20\x20\x20\x20\x20|>\x20limit(n:\x20'+_0x2bf5cb+')\x0a\x20\x20\x20\x20\x20\x20|>\x20yield(name:\x20\x22result\x22)\x0a\x20\x20\x20\x20\x20\x20',_0x3dbc09=await this['query'](_0x437ff4);if(!_0x3dbc09['length'])return {'mean':0x0,'stdDev':0x0,'median':0x0,'count':0x0};const _0x51efa6=_0x3dbc09['map'](_0x15b708=>Date['parse'](_0x15b708['_time'])),_0x1268dc=_0x3dbc09['length']===0x1?undefined:(_0x51efa6[0x0]-_0x51efa6[_0x51efa6['length']-0x1])/(0x3e8*(_0x3dbc09['length']-0x1)),_0x2e163f=_0x3dbc09['map'](_0x3f4975=>_0x3f4975['gasCost']),_0x1a8e26=_0x2e163f['length'],_0x56f354=_0x2e163f['reduce']((_0x3108de,_0x453e5b)=>_0x3108de+_0x453e5b,0x0)/_0x1a8e26,_0x11e577=utils_1$1g['MathUtils']['getMedian'](_0x2e163f),_0x54c1d3=Math['sqrt'](_0x2e163f['map'](_0x518ff4=>Math['pow'](_0x518ff4-_0x56f354,0x2))['reduce']((_0x2278ee,_0x911d63)=>_0x2278ee+_0x911d63,0x0)/_0x1a8e26);return {'mean':_0x56f354,'stdDev':_0x54c1d3,'count':_0x1a8e26,'median':_0x11e577,'avgInterval':_0x1268dc};}}RedStoneTxStatsInfluxService$1['RedStoneTxStatsInfluxService']=RedStoneTxStatsInfluxService;

var types$5 = {};

Object['defineProperty'](types$5,'__esModule',{'value':!![]});types$5['updaterTypes']=types$5['UpdaterType']=void 0x0;var UpdaterType;((function(_0x292a0a){_0x292a0a['main']='main',_0x292a0a['fallback']='fallback',_0x292a0a['manual']='manual';})(UpdaterType||(types$5['UpdaterType']=UpdaterType={})),types$5['updaterTypes']=Object['values'](UpdaterType));

(function(_0x4ccfef){var _0x268272=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0xc65930,_0x9e9cbb,_0x111bd0,_0x38ef0c){if(_0x38ef0c===undefined)_0x38ef0c=_0x111bd0;var _0x5c0e7a=Object['getOwnPropertyDescriptor'](_0x9e9cbb,_0x111bd0);(!_0x5c0e7a||('get'in _0x5c0e7a?!_0x9e9cbb['__esModule']:_0x5c0e7a['writable']||_0x5c0e7a['configurable']))&&(_0x5c0e7a={'enumerable':!![],'get':function(){return _0x9e9cbb[_0x111bd0];}}),Object['defineProperty'](_0xc65930,_0x38ef0c,_0x5c0e7a);}:function(_0x1d0f53,_0xc81701,_0x3bf03a,_0x183928){if(_0x183928===undefined)_0x183928=_0x3bf03a;_0x1d0f53[_0x183928]=_0xc81701[_0x3bf03a];}),_0x5db8da=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0xd663ae,_0x167ce4){for(var _0x16b39f in _0xd663ae)if(_0x16b39f!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x167ce4,_0x16b39f))_0x268272(_0x167ce4,_0xd663ae,_0x16b39f);};Object['defineProperty'](_0x4ccfef,'__esModule',{'value':!![]}),_0x5db8da(RedStoneTxStatsInfluxService$1,_0x4ccfef),_0x5db8da(types$5,_0x4ccfef);}(configChecks));getDefaultExportFromCjs(configChecks);

var hashUtils = {};

var __importDefault$g=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x44b599){return _0x44b599&&_0x44b599['__esModule']?_0x44b599:{'default':_0x44b599};};Object['defineProperty'](hashUtils,'__esModule',{'value':!![]});hashUtils['calculateSHA256']=calculateSHA256;hashUtils['calculateFileHash']=calculateFileHash;hashUtils['calculateBuffersHash']=calculateBuffersHash;hashUtils['calculateCombinedHash']=calculateCombinedHash;hashUtils['calculateDirectoryHash']=calculateDirectoryHash;const crypto_1=_0x4ed308,fs_1$4=__importDefault$g(_0x1c92a7),path_1$2=__importDefault$g(_0x2d3fdb);function getAllFiles(_0x51fbf6,_0x8eb4c0=[]){const _0x1cec15=fs_1$4['default']['readdirSync'](_0x51fbf6);return _0x1cec15['forEach'](function(_0x562f31){const _0x460dcb=path_1$2['default']['join'](_0x51fbf6,_0x562f31);fs_1$4['default']['statSync'](_0x460dcb)['isDirectory']()?getAllFiles(_0x460dcb,_0x8eb4c0):_0x8eb4c0['push'](_0x460dcb);}),_0x8eb4c0;}function calculateSHA256(_0x575504){return (0, crypto_1['createHash'])('sha256')['update'](_0x575504)['digest']('hex');}function calculateFileHash(_0x219c0b){const _0x5a4da6=fs_1$4['default']['readFileSync'](_0x219c0b);return calculateSHA256(_0x5a4da6);}function calculateBuffersHash(_0x8921a2){const _0x304b2b=_0x8921a2['map'](_0xb7dad1=>calculateSHA256(_0xb7dad1));return calculateCombinedHash(_0x304b2b);}function calculateCombinedHash(_0x10e262){const _0x23f637=[..._0x10e262]['sort']();return calculateSHA256(Buffer['from'](_0x23f637['join']('')));}function calculateDirectoryHash(_0x1f09b8){const _0x69fd3f=getAllFiles(_0x1f09b8),_0x4d5386=_0x69fd3f['map'](_0x22ef5d=>calculateFileHash(_0x22ef5d));return calculateCombinedHash(_0x4d5386);}

var jsonUtils = {};

Object['defineProperty'](jsonUtils,'__esModule',{'value':!![]});jsonUtils['saveJsonFile']=jsonUtils['readJsonFile']=void 0x0;const fs_1$3=_0x1c92a7,readJsonFile=_0x2e2912=>{const _0x4ffaf5=(0, fs_1$3['readFileSync'])(_0x2e2912,'utf-8');try{return JSON['parse'](_0x4ffaf5);}catch(_0x562c35){throw new Error('File\x20\x22'+_0x2e2912+'\x22\x20does\x20not\x20contain\x20a\x20valid\x20JSON',{'cause':_0x562c35});}};jsonUtils['readJsonFile']=readJsonFile;const saveJsonFile=(_0x4514be,_0x8e5971)=>{try{const _0x32431e=JSON['stringify'](_0x8e5971,null,0x2);(0x0,fs_1$3['writeFileSync'])(_0x4514be,_0x32431e,'utf-8'),console['log']('File\x20was\x20saved\x20successfully:\x20'+_0x4514be);}catch(_0x38ddd2){console['error']('Error\x20writing\x20file\x20to\x20disk:\x20'+JSON['stringify'](_0x38ddd2));}};jsonUtils['saveJsonFile']=saveJsonFile;

var manifests = {};

Object['defineProperty'](manifests,'__esModule',{'value':!![]});

var monorepoFetcher = {};

Object['defineProperty'](monorepoFetcher,'__esModule',{'value':!![]});monorepoFetcher['fetchFromMonorepo']=void 0x0;const fetchFromMonorepo=async _0x30636c=>{const _0x336860='https://d3cu28sut4ahjk.cloudfront.net/redstone-finance/redstone-monorepo-priv/main/'+_0x30636c,_0x38f70f=await fetch(_0x336860);if(!_0x38f70f['ok'])throw new Error('Fetching\x20from\x20monorepo\x20failed.\x20Status:\x20'+_0x38f70f['status']);const _0x13337a=await _0x38f70f['text']();return _0x13337a;};monorepoFetcher['fetchFromMonorepo']=fetchFromMonorepo;

var nodeRemoteConfig = {};

(function(_0x34b255){var _0x48a6a0=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x5f24ab){return _0x5f24ab&&_0x5f24ab['__esModule']?_0x5f24ab:{'default':_0x5f24ab};};Object['defineProperty'](_0x34b255,'__esModule',{'value':!![]}),_0x34b255['getNodeConfigBasePath']=_0x34b255['ORACLE_ENVS_WITH_SIG_VERIFICATION']=_0x34b255['OracleNodeEnv']=_0x34b255['NODE_REMOTE_CONFIG_FOLDER']=_0x34b255['REMOTE_CONFIG_SIGNATURES_FOLDER']=void 0x0,_0x34b255['isOracleNodeEnv']=_0x30b7d8,_0x34b255['parseOracleNodeEnv']=_0x97cc34,_0x34b255['getSignaturesRepositoryPath']=_0x50aadb,_0x34b255['findRemoteConfigOrThrow']=_0x3fe101;const _0x4ba1c5=requireSrc$3(),_0xf25adb=_0x48a6a0(_0x1c92a7),_0x73c4e5=_0x48a6a0(_0x2d3fdb),_0x1859c8=_0x28081a,_0x2ae9dd=0x14;_0x34b255['REMOTE_CONFIG_SIGNATURES_FOLDER']='signatures',_0x34b255['NODE_REMOTE_CONFIG_FOLDER']='node-remote-config';var _0x2f2178;((function(_0x4eb254){_0x4eb254['Dev']='dev',_0x4eb254['Prod']='prod',_0x4eb254['ProdFallback']='prod-fallback',_0x4eb254['ProdRedStone']='prod-redstone',_0x4eb254['ProdRedStoneFallback']='prod-redstone-fallback';})(_0x2f2178||(_0x34b255['OracleNodeEnv']=_0x2f2178={})),_0x34b255['ORACLE_ENVS_WITH_SIG_VERIFICATION']=[_0x2f2178['Prod'],_0x2f2178['ProdFallback']]);function _0x30b7d8(_0x513eb0){return typeof _0x513eb0==='string'&&Object['values'](_0x2f2178)['includes'](_0x513eb0);}function _0x97cc34(_0x4b3530){return _0x30b7d8(_0x4b3530)?_0x4b3530:undefined;}function _0x50aadb(_0x9d8dd1=_0x2f2178['Dev']){const _0x288afb=_0x3fe101(_0x9d8dd1);return _0x73c4e5['default']['join'](_0x288afb,'..',_0x34b255['REMOTE_CONFIG_SIGNATURES_FOLDER'],_0x9d8dd1);}const _0x2c1889=(_0x41e5de=_0x2f2178['Dev'])=>{return _0x4ba1c5['RedstoneCommon']['getFromEnv']('USE_REMOTE_CONFIG',_0x1859c8['z']['boolean']()['default'](![]))?_0x34b255['NODE_REMOTE_CONFIG_FOLDER']:_0x73c4e5['default']['join'](_0x34b255['NODE_REMOTE_CONFIG_FOLDER'],_0x41e5de);};_0x34b255['getNodeConfigBasePath']=_0x2c1889;function _0x3fe101(_0x3be7d7=_0x2f2178['Dev']){const _0x4c1848=process['cwd']();let _0xe149b7=_0x4c1848;for(let _0x1750c9=0x0;_0x1750c9<_0x2ae9dd;_0x1750c9++){const _0x48b86b=_0x73c4e5['default']['join'](_0xe149b7,(0, _0x34b255['getNodeConfigBasePath'])(_0x3be7d7));if(_0xf25adb['default']['existsSync'](_0x48b86b)&&_0xf25adb['default']['statSync'](_0x48b86b)['isDirectory']())return _0x48b86b;const _0x5c0d57=_0x73c4e5['default']['dirname'](_0xe149b7);if(_0x5c0d57===_0xe149b7)break;_0xe149b7=_0x5c0d57;}throw new Error('Could\x20not\x20find\x20'+(0, _0x34b255['getNodeConfigBasePath'])()+'\x20directory,\x20starting\x20from\x20'+_0x4c1848+'.');}}(nodeRemoteConfig));getDefaultExportFromCjs(nodeRemoteConfig);

var outlierDetection = {};

Object['defineProperty'](outlierDetection,'__esModule',{'value':!![]});outlierDetection['filterOutliers']=filterOutliers;const utils_1$1f=requireSrc$3(),MAX_DEVIATION_PERCENT=0x5;function filterOutliers(_0x1bf35b){const _0x49a497={..._0x1bf35b};for(const [_0x7ff0d8,_0x466b61]of Object['entries'](_0x1bf35b)){const _0x1c6c99=_0x466b61?.['filter'](_0x575ed1=>_0x575ed1['dataPoints']['length']===0x1);if(!_0x1c6c99||_0x1c6c99['length']<0x3)continue;let _0x1828b3=![];const _0x4c941a=[];for(const _0x2e711b of _0x1c6c99){const _0xee87e1=_0x2e711b['dataPoints'][0x0];if(isNaN(Number(_0xee87e1['value']))){_0x1828b3=!![];break;}_0x4c941a['push']({'pkg':_0x2e711b,'value':_0xee87e1['value']});}if(_0x1828b3)continue;const _0x90d119=utils_1$1f['MathUtils']['getMedian'](_0x4c941a['map'](_0x202b94=>_0x202b94['value'])),_0x47a0ac=_0x4c941a['filter'](_0xc2909=>{const _0x3d71cf=utils_1$1f['MathUtils']['calculateDeviationPercent']({'baseValue':_0x90d119,'deviatedValue':_0xc2909['value']});return _0x3d71cf<=MAX_DEVIATION_PERCENT;});_0x47a0ac['length']===_0x466b61['length']-0x1&&(_0x49a497[_0x7ff0d8]=_0x47a0ac['map'](_0xd2501b=>_0xd2501b['pkg']));}return _0x49a497;}

var resolveManifestWithExpirationUpdates = {};

var __importDefault$f=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x2d5df0){return _0x2d5df0&&_0x2d5df0['__esModule']?_0x2d5df0:{'default':_0x2d5df0};};Object['defineProperty'](resolveManifestWithExpirationUpdates,'__esModule',{'value':!![]});resolveManifestWithExpirationUpdates['resolveMonitoringManifest']=resolveMonitoringManifest;resolveManifestWithExpirationUpdates['getRemoteMonitoringManifestConfigFromEnv']=getRemoteMonitoringManifestConfigFromEnv;const utils_1$1e=requireSrc$3(),dayjs_1=__importDefault$f(_0x5ca4b8),lodash_1$9=__importDefault$f(_0x62d7dc),zod_1$7=_0x28081a,DAY_IN_MS=0x18*0xe10*0x3e8,MAX_EXPIRATION_PERIOD=0x7*DAY_IN_MS;function resolveMonitoringManifest(_0x2a6365){const {defaultConfig:_0x25ec35,temporaryConfigUpdates:_0x208844}=_0x2a6365,_0x35a612=validateExpirationTimestamp(parseExpirationTimestamp(_0x208844?.['expirationTimestamp']));_0x208844&&delete _0x208844['expirationTimestamp'];const _0x1dae89=_0x208844&&_0x35a612>Date['now'](),_0x81926c=_0x1dae89?lodash_1$9['default']['merge'](_0x25ec35,_0x208844):_0x25ec35;return _0x81926c;}const logger$7=(0, utils_1$1e['loggerFactory'])('remote-monitoring-manifest-config');function getRemoteMonitoringManifestConfigFromEnv(){if(utils_1$1e['RedstoneCommon']['getFromEnv']('OVERRIDE_REMOTE_MANIFEST_WITH_LOCAL',zod_1$7['z']['boolean']()['default'](![])))return logger$7['warn']('OVERRIDE_REMOTE_MANIFEST_WITH_LOCAL\x20is\x20set\x20to\x20true,\x20overriding\x20remote\x20manifest\x20with\x20local.\x20SHOULD\x20BE\x20SEEN\x20ONLY\x20IN\x20TESTS\x20OR\x20DEV\x20ENV'),{'shouldUseLocal':!![]};const _0x49e8b8=utils_1$1e['RedstoneCommon']['getFromEnv']('MONITORING_MANIFESTS_HOSTNAMES',zod_1$7['z']['array'](zod_1$7['z']['object']({'hostname':zod_1$7['z']['string'](),'hasVersionInfo':zod_1$7['z']['boolean']()['default'](![])}))),_0x492a4b=utils_1$1e['RedstoneCommon']['getFromEnv']('MONITORING_MANIFESTS_APIKEY',zod_1$7['z']['string']()),_0x15050a=utils_1$1e['RedstoneCommon']['getFromEnv']('MONITORING_MANIFESTS_GITREF',zod_1$7['z']['string']()['default']('main'));return {'shouldUseLocal':![],'manifestsHosts':getManifestHostnames(_0x49e8b8),'manifestsVersionHosts':getManifestHostnames(_0x49e8b8['filter'](({hasVersionInfo:_0x48e802})=>_0x48e802)),'manifestsApiKey':_0x492a4b,'manifestsGitRef':_0x15050a};}function getManifestHostnames(_0x41d011){return _0x41d011['map'](({hostname:_0x4b886a})=>_0x4b886a);}function parseExpirationTimestamp(_0x5dc064){if(_0x5dc064===undefined)return 0x0;if(typeof _0x5dc064==='number')return _0x5dc064;const _0x2e4308=(0, dayjs_1['default'])(_0x5dc064)['valueOf']();if(isNaN(_0x2e4308))throw new Error('provided\x20timestamp\x20'+_0x5dc064+'\x20cannot\x20be\x20parsed');return _0x2e4308;}function validateExpirationTimestamp(_0x102dd2){if(_0x102dd2>Date['now']()+MAX_EXPIRATION_PERIOD)throw new Error('expirationTimestamp\x20is\x20bigger\x20than\x20'+(MAX_EXPIRATION_PERIOD/DAY_IN_MS)['toFixed'](0x0)+'\x20days');return _0x102dd2;}

var signerAddressesFetcher = {};

Object['defineProperty'](signerAddressesFetcher,'__esModule',{'value':!![]});signerAddressesFetcher['getSignerAddresses']=void 0x0;const monorepo_fetcher_1=monorepoFetcher,getSignerAddresses=async _0x4cc0dc=>{const _0x2dcc29='packages/sdk/src/registry/initial-state.json',_0x3e5c06=[],_0x3c453d=await(0, monorepo_fetcher_1['fetchFromMonorepo'])(_0x2dcc29),{nodes:_0xc22773}=JSON['parse'](_0x3c453d);for(const _0x4f50a3 of Object['keys'](_0xc22773)){_0xc22773[_0x4f50a3]['dataServiceId']===_0x4cc0dc&&_0x3e5c06['push'](_0xc22773[_0x4f50a3]['evmAddress']);}return _0x3e5c06;};signerAddressesFetcher['getSignerAddresses']=getSignerAddresses;

var Terminator = {};

Object['defineProperty'](Terminator,'__esModule',{'value':!![]});Terminator['ExitCodes']=void 0x0;Terminator['terminateWithManifestConfigError']=terminateWithManifestConfigError;Terminator['terminateWithUpdateConfigExitCode']=terminateWithUpdateConfigExitCode;Terminator['terminateWithNodeRemoteConfigError']=terminateWithNodeRemoteConfigError;Terminator['terminateWithRpcsConfigError']=terminateWithRpcsConfigError;const utils_1$1d=requireSrc$3(),logger$6=(0, utils_1$1d['loggerFactory'])('Terminator');var ExitCodes;(function(_0x55263c){_0x55263c[_0x55263c['ManifestConfigError']=0x65]='ManifestConfigError',_0x55263c[_0x55263c['NodeRemoteConfigError']=0x66]='NodeRemoteConfigError',_0x55263c[_0x55263c['RpcsConfigError']=0x67]='RpcsConfigError',_0x55263c[_0x55263c['RestartConfigExitCode']=0x64]='RestartConfigExitCode';}(ExitCodes||(Terminator['ExitCodes']=ExitCodes={})));function terminateWithManifestConfigError(_0x41241b){logger$6['error']('Manifest\x20configuration\x20error:\x20'+_0x41241b+'.\x0a'+('Terminating\x20with\x20exit\x20code\x20'+ExitCodes['ManifestConfigError'])),process['exit'](ExitCodes['ManifestConfigError']);}function terminateWithUpdateConfigExitCode(){process['exit'](ExitCodes['RestartConfigExitCode']);}function terminateWithNodeRemoteConfigError(_0x24d315){logger$6['error']('Node\x20configuration\x20error:\x20'+_0x24d315+'.\x0a'+('Terminating\x20with\x20exit\x20code\x20'+ExitCodes['NodeRemoteConfigError'])),process['exit'](ExitCodes['NodeRemoteConfigError']);}function terminateWithRpcsConfigError(_0x534ffe){logger$6['error']('RPCs\x20URLs\x20configuration\x20error:\x20'+_0x534ffe+'.\x0a'+('Terminating\x20with\x20exit\x20code\x20'+ExitCodes['RpcsConfigError'])),process['exit'](ExitCodes['RpcsConfigError']);}

var timestampUtils = {};

(function(_0x50dec3){Object['defineProperty'](_0x50dec3,'__esModule',{'value':!![]}),_0x50dec3['dateToInfluxDbString']=_0x50dec3['increaseTimestampBy10Seconds']=_0x50dec3['timestampToWarsawTime']=_0x50dec3['calculateTimestampDifferenceInHumanReadableFormat']=_0x50dec3['calculateTimestampDifferenceInMinutes']=void 0x0;const _0x5ee147=(_0xf1ceb4,_0x4e0219)=>{const _0x4ab47e=new Date(_0xf1ceb4),_0x2e17c5=new Date(_0x4e0219),_0x1b69ce=Math['abs'](_0x2e17c5['getTime']()-_0x4ab47e['getTime']()),_0x1caadb=_0x1b69ce/(0x3e8*0x3c);return _0x1caadb;};_0x50dec3['calculateTimestampDifferenceInMinutes']=_0x5ee147;const _0x345150=(_0x3a50aa,_0x521630)=>{const _0x1b7da8=new Date(_0x3a50aa),_0x3044b3=new Date(_0x521630),_0x16f6bc=Math['abs'](_0x1b7da8['getTime']()-_0x3044b3['getTime']()),_0xd2a348=Math['floor'](_0x16f6bc/(0x3e8*0x3c*0x3c*0x18)),_0x1b3dfd=Math['floor'](_0x16f6bc%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x1b4f6a=Math['floor'](_0x16f6bc%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x27e7c3=Math['floor'](_0x16f6bc%(0x3e8*0x3c)/0x3e8);return ''+(_0xd2a348?_0xd2a348+'\x20days,\x20':'')+(_0x1b3dfd?_0x1b3dfd+'\x20hours,\x20':'')+(_0x1b4f6a?_0x1b4f6a+'\x20minutes\x20':'')+'and\x20'+_0x27e7c3+'\x20seconds';};_0x50dec3['calculateTimestampDifferenceInHumanReadableFormat']=_0x345150;const _0x1730ab=_0x3422ed=>{const _0x5478f3={'hour12':![],'timeZone':'Europe/Warsaw'},_0x24c99f='pl-PL';return new Date(_0x3422ed)['toLocaleString'](_0x24c99f,_0x5478f3);};_0x50dec3['timestampToWarsawTime']=_0x1730ab;const _0x23a72f=_0x3f765=>{const _0x5d61c6=new Date(_0x3f765);return _0x5d61c6['setSeconds'](_0x5d61c6['getSeconds']()+0xa),(0, _0x50dec3['dateToInfluxDbString'])(_0x5d61c6);};_0x50dec3['increaseTimestampBy10Seconds']=_0x23a72f;const _0x1ef95f=_0x3f2183=>{return _0x3f2183['toISOString']()['replace'](/\.\d{3}Z$/,'Z');};_0x50dec3['dateToInfluxDbString']=_0x1ef95f;}(timestampUtils));getDefaultExportFromCjs(timestampUtils);

(function(_0x4c1f9f){var _0x482e76=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x517554,_0x273185,_0x4afcb4,_0xa8d9e7){if(_0xa8d9e7===undefined)_0xa8d9e7=_0x4afcb4;var _0x520633=Object['getOwnPropertyDescriptor'](_0x273185,_0x4afcb4);(!_0x520633||('get'in _0x520633?!_0x273185['__esModule']:_0x520633['writable']||_0x520633['configurable']))&&(_0x520633={'enumerable':!![],'get':function(){return _0x273185[_0x4afcb4];}}),Object['defineProperty'](_0x517554,_0xa8d9e7,_0x520633);}:function(_0x15f408,_0x624cc6,_0x1b856f,_0x4f5d85){if(_0x4f5d85===undefined)_0x4f5d85=_0x1b856f;_0x15f408[_0x4f5d85]=_0x624cc6[_0x1b856f];}),_0x4aadee=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x5b631c,_0x4384d4){for(var _0x570f35 in _0x5b631c)if(_0x570f35!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x4384d4,_0x570f35))_0x482e76(_0x4384d4,_0x5b631c,_0x570f35);};Object['defineProperty'](_0x4c1f9f,'__esModule',{'value':!![]}),_0x4aadee(cloudwatch,_0x4c1f9f),_0x4aadee(DynamoDbService$1,_0x4c1f9f),_0x4aadee(ecs,_0x4c1f9f),_0x4aadee(lambda,_0x4c1f9f),_0x4aadee(params,_0x4c1f9f),_0x4aadee(region,_0x4c1f9f),_0x4aadee(s3,_0x4c1f9f),_0x4aadee(configChecks,_0x4c1f9f),_0x4aadee(hashUtils,_0x4c1f9f),_0x4aadee(influxdbConfig,_0x4c1f9f),_0x4aadee(InfluxService,_0x4c1f9f),_0x4aadee(jsonUtils,_0x4c1f9f),_0x4aadee(manifests,_0x4c1f9f),_0x4aadee(monorepoFetcher,_0x4c1f9f),_0x4aadee(nodeRemoteConfig,_0x4c1f9f),_0x4aadee(outlierDetection,_0x4c1f9f),_0x4aadee(resolveManifestWithExpirationUpdates,_0x4c1f9f),_0x4aadee(signerAddressesFetcher,_0x4c1f9f),_0x4aadee(Terminator,_0x4c1f9f),_0x4aadee(timestampUtils,_0x4c1f9f);}(src$8));getDefaultExportFromCjs(src$8);

var schemas = {};

var defaultConfig$1 = {
	hardhat: {
		name: "hardhat",
		networkId: 31337,
		chainId: 31337,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"http://localhost:1337"
		],
		avgBlockTimeMs: 12000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 100000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	ethereum: {
		name: "Ethereum Mainnet",
		networkId: 1,
		chainId: 1,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://ethereum-rpc.publicnode.com",
			"https://eth.drpc.org",
			"https://eth.llamarpc.com"
		],
		etherScanApi: "https://api.etherscan.io",
		avgBlockTimeMs: 12000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 2000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	arbitrumOne: {
		name: "Arbitrum One",
		networkId: 42161,
		chainId: 42161,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://arb1.arbitrum.io/rpc",
			"https://arbitrum-one.publicnode.com",
			"https://arbitrum-one.public.blastapi.io",
			"https://1rpc.io/arb"
		],
		etherScanApi: "https://api.arbiscan.io",
		avgBlockTimeMs: 250,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: true,
		isMainnet: true
	},
	avalanche: {
		name: "Avalanche Network",
		networkId: 43114,
		chainId: 43114,
		currencySymbol: "AVAX",
		publicRpcUrls: [
			"https://api.avax.network/ext/bc/C/rpc",
			"https://avalanche.drpc.org",
			"https://avax.meowrpc.com",
			"https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
			"https://avalanche-c-chain.publicnode.com"
		],
		etherScanApi: "https://api.snowtrace.io",
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	optimism: {
		name: "Optimism",
		networkId: 10,
		chainId: 10,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://mainnet.optimism.io",
			"https://optimism.publicnode.com",
			"https://optimism-mainnet.public.blastapi.io",
			"https://1rpc.io/op",
			"https://optimism.drpc.org"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	polygon: {
		name: "Polygon Mainnet",
		networkId: 137,
		chainId: 137,
		currencySymbol: "POL",
		publicRpcUrls: [
			"https://polygon-mainnet.public.blastapi.io",
			"https://polygon-rpc.com",
			"https://rpc-mainnet.matic.quiknode.pro"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0x52f530e1d42BdFeF939729C341Ed714698a993f7",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	celo: {
		name: "Celo Mainnet",
		networkId: 42220,
		chainId: 42220,
		currencySymbol: "CELO",
		publicRpcUrls: [
			"https://forno.celo.org"
		],
		etherScanApi: "https://api.celoscan.io",
		avgBlockTimeMs: 5000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	base: {
		name: "Base Mainnet",
		networkId: 8453,
		chainId: 8453,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://base.publicnode.com",
			"https://mainnet.base.org",
			"https://base.llamarpc.com",
			"https://base-mainnet.public.blastapi.io"
		],
		avgBlockTimeMs: 5000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"base-sepolia": {
		name: "Base Sepolia",
		networkId: 84532,
		chainId: 84532,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://base-sepolia-rpc.publicnode.com",
			"https://sepolia.base.org",
			"https://base-sepolia.drpc.org"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	canto: {
		name: "Canto",
		networkId: 7700,
		chainId: 7700,
		currencySymbol: "CANTO",
		publicRpcUrls: [
			"https://canto.gravitychain.io",
			"https://canto-rpc.ansybl.io"
		],
		avgBlockTimeMs: 6000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true,
		disabled: true
	},
	manta: {
		name: "Manta Pacific Mainnet",
		networkId: 169,
		chainId: 169,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://pacific-rpc.manta.network/http",
			"https://1rpc.io/manta",
			"https://manta-pacific-aperture.calderachain.xyz/http",
			"https://manta-pacific-gascap.calderachain.xyz/http"
		],
		avgBlockTimeMs: 10000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	blast: {
		name: "Blast Mainnet",
		networkId: 81457,
		chainId: 81457,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc.blast.io",
			"https://rpc.ankr.com/blast",
			"https://blast.din.dev/rpc",
			"https://blastl2-mainnet.public.blastapi.io",
			"https://blast.drpc.org"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"etherlink-ghostnet": {
		name: "Etherlink Ghostnet",
		networkId: 128123,
		chainId: 128123,
		currencySymbol: "XTZ",
		publicRpcUrls: [
			"https://node.ghostnet.etherlink.com",
			"https://128123.rpc.thirdweb.com"
		],
		avgBlockTimeMs: 6000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: true,
		twoDimensionalFees: true,
		isMainnet: false
	},
	etherlink: {
		name: "Etherlink Mainnet",
		networkId: 42793,
		chainId: 42793,
		currencySymbol: "XTZ",
		publicRpcUrls: [
			"https://node.mainnet.etherlink.com"
		],
		avgBlockTimeMs: 6000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: true,
		isMainnet: true
	},
	mode: {
		name: "Mode Mainnet",
		networkId: 34443,
		chainId: 34443,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://mainnet.mode.network/",
			"https://1rpc.io/mode"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	mantle: {
		name: "Mantle",
		networkId: 5000,
		chainId: 5000,
		currencySymbol: "MNT",
		publicRpcUrls: [
			"https://rpc.mantle.xyz",
			"https://mantle-rpc.publicnode.com",
			"https://mantle-mainnet.public.blastapi.io",
			"https://mantle.drpc.org",
			"https://1rpc.io/mantle"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: true,
		isMainnet: true
	},
	"ethereum-sepolia": {
		name: "Ethereum Sepolia",
		networkId: 11155111,
		chainId: 11155111,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://ethereum-sepolia-rpc.publicnode.com",
			"https://1rpc.io/sepolia",
			"https://eth-sepolia.public.blastapi.io"
		],
		etherScanApi: "https://api-sepolia.etherscan.io",
		avgBlockTimeMs: 12000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	bnb: {
		name: "Binance chain",
		networkId: 56,
		chainId: 56,
		currencySymbol: "BNB",
		publicRpcUrls: [
			"https://1rpc.io/bnb",
			"https://binance.llamarpc.com",
			"https://bsc-dataseed.bnbchain.org",
			"https://bsc-pokt.nodies.app",
			"https://binance.nodereal.io"
		],
		etherScanApi: "https://api.bscscan.com",
		avgBlockTimeMs: 3000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"bnb-testnet": {
		name: "Binance chain testnet",
		networkId: 97,
		chainId: 97,
		currencySymbol: "tBNB",
		publicRpcUrls: [
			"https://bsc-testnet.public.blastapi.io",
			"https://bsc-testnet-rpc.publicnode.com"
		],
		avgBlockTimeMs: 3000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	"celo-alfajores": {
		name: "Celo Alfajores Testnet",
		networkId: 44787,
		chainId: 44787,
		currencySymbol: "CELO",
		publicRpcUrls: [
			"https://alfajores-forno.celo-testnet.org"
		],
		etherScanApi: "https://api-alfajores.celoscan.io",
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	kava: {
		name: "Kava",
		networkId: 2222,
		chainId: 2222,
		currencySymbol: "KAVA",
		publicRpcUrls: [
			"https://evm.kava.io",
			"https://kava-evm-rpc.publicnode.com",
			"https://kava-pokt.nodies.app",
			"https://evm.kava-rpc.com",
			"https://kava.drpc.org"
		],
		avgBlockTimeMs: 6000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	fraxtal: {
		name: "Fraxtal Mainnet",
		networkId: 252,
		chainId: 252,
		currencySymbol: "frxETH",
		publicRpcUrls: [
			"https://rpc.frax.com"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true,
		fallbackToEthMaxPriorityFeePerGas: true
	},
	linea: {
		name: "Linea Mainnet",
		networkId: 59144,
		chainId: 59144,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://linea.drpc.org",
			"https://rpc.linea.build",
			"https://1rpc.io/linea"
		],
		avgBlockTimeMs: 3000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	b2: {
		name: "B2 Mainnet",
		networkId: 223,
		chainId: 223,
		currencySymbol: "BTC",
		publicRpcUrls: [
			"https://rpc.bsquared.network",
			"https://mainnet.b2-rpc.com",
			"https://rpc.ankr.com/b2",
			"https://b2-mainnet.alt.technology"
		],
		avgBlockTimeMs: 2500,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	bob: {
		name: "BOB Mainnet",
		networkId: 60808,
		chainId: 60808,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc.gobob.xyz"
		],
		avgBlockTimeMs: 2500,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"blast-sepolia": {
		name: "Blast sepolia",
		networkId: 168587773,
		chainId: 168587773,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://sepolia.blast.io"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false,
		disabled: true
	},
	merlin: {
		name: "Merlin Mainnet",
		networkId: 4200,
		chainId: 4200,
		currencySymbol: "BTC",
		publicRpcUrls: [
			"https://rpc.merlinchain.io",
			"https://merlin.blockpi.network/v1/rpc/public"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 200000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	sei: {
		name: "Sei Mainnet",
		networkId: 1329,
		chainId: 1329,
		currencySymbol: "SEI",
		publicRpcUrls: [
			"https://evm-rpc.sei-apis.com"
		],
		avgBlockTimeMs: 500,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"berachain-testnet": {
		name: "Berachain Testnet",
		networkId: 80069,
		chainId: 80069,
		currencySymbol: "BERA",
		publicRpcUrls: [
			"https://bepolia.rpc.berachain.com"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	cyber: {
		name: "Cyber",
		networkId: 7560,
		chainId: 7560,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://cyber.alt.technology"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	zksync: {
		name: "zkSync",
		networkId: 324,
		chainId: 324,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://mainnet.era.zksync.io"
		],
		avgBlockTimeMs: 1200,
		multicall3: {
			address: "0x4a87b5ce9f56f353a4d6808BA3c012083912b8f2",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: true,
		isMainnet: true
	},
	zkLink: {
		name: "zkLink",
		networkId: 810180,
		chainId: 810180,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc.zklink.io"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0x4a87b5ce9f56f353a4d6808BA3c012083912b8f2",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: true,
		isMainnet: true
	},
	zircuit: {
		name: "Zircuit Mainnet",
		networkId: 48900,
		chainId: 48900,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://zircuit-mainnet.drpc.org",
			"https://zircuit1-mainnet.p2pify.com"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		fallbackToEthMaxPriorityFeePerGas: true,
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	scroll: {
		name: "Scroll",
		networkId: 534352,
		chainId: 534352,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc.scroll.io",
			"https://scroll.drpc.org",
			"https://scroll-mainnet.public.blastapi.io",
			"https://scroll-mainnet.chainstacklabs.com"
		],
		avgBlockTimeMs: 3000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	haven1Testnet: {
		name: "Haven1 Testnet",
		networkId: 810,
		chainId: 810,
		currencySymbol: "H1",
		publicRpcUrls: [
			"https://testnet-rpc.haven1.org"
		],
		avgBlockTimeMs: 6000,
		multicall3: {
			address: "0x34E53CC3D178Cf10BDF40bf94144444c246003CB",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false,
		disabled: true
	},
	hemiTestnet: {
		name: "Hemi Sepolia",
		networkId: 743111,
		chainId: 743111,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://testnet.rpc.hemi.network/rpc"
		],
		avgBlockTimeMs: 12000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	hemi: {
		name: "Hemi Network",
		networkId: 43111,
		chainId: 43111,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc.hemi.network/rpc"
		],
		avgBlockTimeMs: 12000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	unichainTestnet: {
		name: "Unichain Sepolia",
		networkId: 1301,
		chainId: 1301,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://unichain-sepolia-rpc.publicnode.com",
			"https://sepolia.unichain.org"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	ink: {
		name: "Ink",
		networkId: 57073,
		chainId: 57073,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc-qnd.inkonchain.com",
			"https://ink.drpc.org",
			"https://rpc-gel.inkonchain.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	inkSepolia: {
		name: "Ink Sepolia",
		networkId: 763373,
		chainId: 763373,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc-gel-sepolia.inkonchain.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	taiko: {
		name: "Taiko Mainnet",
		networkId: 167000,
		chainId: 167000,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc.mainnet.taiko.xyz",
			"https://taiko.drpc.org",
			"https://rpc.ankr.com/taiko",
			"https://taiko-rpc.publicnode.com"
		],
		avgBlockTimeMs: 60000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	corn: {
		name: "Corn Maizenet",
		networkId: 21000000,
		chainId: 21000000,
		currencySymbol: "BTCN",
		publicRpcUrls: [
			"https://rpc.ankr.com/corn_maizenet",
			"https://maizenet-rpc.usecorn.com"
		],
		avgBlockTimeMs: 60000,
		multicall3: {
			address: "0x0871f732A0DaAFe1E6a80A862878648a86dE1298",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	cornTestnet: {
		name: "Corn Testnet",
		networkId: 21000001,
		chainId: 21000001,
		currencySymbol: "BTCN",
		publicRpcUrls: [
			"https://testnet-rpc.usecorn.com",
			"https://rpc.ankr.com/corn_testnet"
		],
		avgBlockTimeMs: 60000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	swellchain: {
		name: "Swellchain",
		networkId: 1923,
		chainId: 1923,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://swell-mainnet.alt.technology",
			"https://rpc.ankr.com/swell"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		isMainnet: true
	},
	hyperliquidTestnet: {
		name: "Hyperliquid Testnet",
		networkId: 998,
		chainId: 998,
		currencySymbol: "HYPE",
		publicRpcUrls: [
			"https://rpc.hyperliquid-testnet.xyz/evm"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	sonic: {
		name: "Sonic Network",
		networkId: 146,
		chainId: 146,
		currencySymbol: "S",
		publicRpcUrls: [
			"https://rpc.soniclabs.com",
			"https://sonic-rpc.publicnode.com",
			"https://sonic.drpc.org"
		],
		avgBlockTimeMs: 700,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	rootstock: {
		name: "Rootstock Mainnet",
		networkId: 30,
		chainId: 30,
		currencySymbol: "RBTC",
		publicRpcUrls: [
			"https://rootstock-mainnet.public.blastapi.io",
			"https://rootstock.drpc.org",
			"https://public-node.rsk.co",
			"https://mycrypto.rsk.co"
		],
		avgBlockTimeMs: 25000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: true,
		isMainnet: true
	},
	rootstockTestnet: {
		name: "Rootstock Testnet",
		networkId: 31,
		chainId: 31,
		currencySymbol: "tRBTC",
		publicRpcUrls: [
			"https://rootstock-testnet.public.blastapi.io",
			"https://public-node.testnet.rsk.co"
		],
		avgBlockTimeMs: 25000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: true,
		twoDimensionalFees: true,
		isMainnet: false
	},
	tac: {
		name: "TAC Mainnet",
		networkId: 239,
		chainId: 239,
		currencySymbol: "TAC",
		publicRpcUrls: [
			"https://rpc.ankr.com/tac",
			"https://rpc.tac.build"
		],
		avgBlockTimeMs: 1300,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	tacTestnet: {
		name: "TAC Turin",
		networkId: 2390,
		chainId: 2390,
		currencySymbol: "TAC",
		publicRpcUrls: [
			"https://turin.rpc.tac.build",
			"https://rpc.ankr.com/tac_turin"
		],
		avgBlockTimeMs: 4000,
		multicall3: {
			address: "0x51ebbB6F8167E39C3b867d50332c82fbd92d3861",
			type: "Multicall3"
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	holesky: {
		name: "Holesky",
		networkId: 17000,
		chainId: 17000,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://ethereum-holesky-rpc.publicnode.com",
			"https://holesky.gateway.tenderly.co",
			"https://holesky.drpc.org"
		],
		avgBlockTimeMs: 14000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	amoy: {
		name: "Polygon Amoy",
		networkId: 80002,
		chainId: 80002,
		currencySymbol: "POL",
		publicRpcUrls: [
			"https://rpc-amoy.polygon.technology"
		],
		avgBlockTimeMs: 20000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	megaEthTestnet: {
		name: "megaEth Testnet",
		networkId: 6342,
		chainId: 6342,
		currencySymbol: "megaETH",
		publicRpcUrls: [
			"https://carrot.megaeth.com/rpc"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	monadTestnet: {
		name: "Monad Testnet",
		networkId: 10143,
		chainId: 10143,
		currencySymbol: "MON",
		publicRpcUrls: [
			"https://testnet-rpc.monad.xyz"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	berachain: {
		name: "Berachain",
		networkId: 80094,
		chainId: 80094,
		currencySymbol: "BERA",
		publicRpcUrls: [
			"https://rpc.berachain.com"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	story: {
		name: "Story",
		networkId: 1514,
		chainId: 1514,
		currencySymbol: "IP",
		publicRpcUrls: [
			"https://mainnet.storyrpc.io",
			"https://story-evm-rpc.spidernode.net",
			"https://evm-rpc.story.mainnet.dteam.tech"
		],
		avgBlockTimeMs: 2500,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	storyTestnet: {
		name: "Story Aeneid Testnet",
		networkId: 1315,
		chainId: 1315,
		currencySymbol: "IP",
		publicRpcUrls: [
			"https://aeneid.storyrpc.io",
			"https://evmrpc-t.story.nodestake.org",
			"https://rpc.ankr.com/story_aeneid_testnet"
		],
		avgBlockTimeMs: 2200,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	unichain: {
		name: "Unichain",
		networkId: 130,
		chainId: 130,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://unichain-rpc.publicnode.com",
			"https://unichain.drpc.org",
			"https://unichain.api.onfinality.io/public"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"sui-testnet": {
		name: "Sui Testnet",
		networkId: "sui/1282977196",
		chainId: 1282977196,
		chainType: "sui",
		currencySymbol: "SUI",
		publicRpcUrls: [
			"https://sui-testnet.public.blastapi.io",
			"https://api.blockeden.xyz/sui/testnet/jBQLBdEWG4xk6fmaWshS",
			"https://sui-testnet.nodeinfra.com",
			"https://sui-testnet-rpc.publicnode.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	sui: {
		name: "Sui",
		networkId: "sui/897796746",
		chainId: 897796746,
		chainType: "sui",
		currencySymbol: "SUI",
		publicRpcUrls: [
			"https://rpc.ankr.com/sui",
			"https://sui-mainnet.public.blastapi.io",
			"https://1rpc.io/sui",
			"https://api.blockeden.xyz/sui/jBQLBdEWG4xk6fmaWshS",
			"https://sui.blockpi.network/v1/rpc/public",
			"https://sui-mainnet-endpoint.blockvision.org/",
			"https://go.getblock.io/5d7b382a4a5f4cb19a3fa630a8fd4439",
			"https://endpoints.omniatech.io/v1/sui/mainnet/public"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"movement-testnet": {
		name: "Movement Testnet",
		networkId: "movement/250",
		chainId: 250,
		chainType: "movement",
		currencySymbol: "MOVE",
		publicRpcUrls: [
			"https://aptos.testnet.bardock.movementlabs.xyz/v1",
			"https://rpc.sentio.xyz/movement-testnet/v1"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	"radix-stokenet": {
		name: "Radix Stokenet",
		networkId: "radix/2",
		chainId: 2,
		chainType: "radix",
		currencySymbol: "XRD",
		publicRpcUrls: [
			"https://stokenet.radixdlt.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	radix: {
		name: "Radix Mainnet",
		networkId: "radix/1",
		chainId: 1,
		chainType: "radix",
		currencySymbol: "XRD",
		publicRpcUrls: [
			"https://mainnet.radixdlt.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	"solana-devnet": {
		name: "Solana Devnet",
		networkId: "solana/3",
		chainId: 3,
		chainType: "solana",
		currencySymbol: "SOL",
		publicRpcUrls: [
			"https://api.devnet.solana.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	"solana-testnet": {
		name: "Solana Testnet",
		networkId: "solana/2",
		chainId: 2,
		chainType: "solana",
		currencySymbol: "SOL",
		publicRpcUrls: [
			"https://api.testnet.solana.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	"solana-mainnet": {
		name: "Solana Mainnet",
		networkId: "solana/1",
		chainId: 1,
		chainType: "solana",
		currencySymbol: "SOL",
		publicRpcUrls: [
			"https://api.mainnet-beta.solana.com"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "",
			type: "Multicall3"
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	},
	hyperevm: {
		name: "HyperEVM",
		networkId: 999,
		chainId: 999,
		currencySymbol: "HYPE",
		publicRpcUrls: [
			"https://rpc.hyperliquid.xyz/evm"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: true
	},
	poseidonTestnet: {
		name: "Poseidon Testnet",
		networkId: 31911,
		chainId: 31911,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://poseidon-testnet.rpc.caldera.xyz/http"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	citreaTestnet: {
		name: "Citrea Testnet",
		networkId: 5115,
		chainId: 5115,
		currencySymbol: "cBTC",
		publicRpcUrls: [
			"https://rpc.testnet.citrea.xyz"
		],
		avgBlockTimeMs: 2000,
		multicall3: {
			address: "0xcA11bde05977b3631167028862bE2a173976CA11",
			type: "Multicall3"
		},
		isAuctionModel: false,
		fallbackToEthMaxPriorityFeePerGas: true,
		twoDimensionalFees: false,
		isMainnet: false
	},
	westendHub: {
		name: "Westend Asset Hub",
		networkId: 420420421,
		chainId: 420420421,
		currencySymbol: "WND",
		publicRpcUrls: [
			"https://westend-asset-hub-eth-rpc.polkadot.io"
		],
		avgBlockTimeMs: 10000,
		multicall3: {
			address: "0x566178C2D428e74C38FD8e7617cED52B99fa6741",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: false
	},
	katana: {
		name: "Katana",
		networkId: 747474,
		chainId: 747474,
		currencySymbol: "ETH",
		publicRpcUrls: [
			"https://rpc.katana.network"
		],
		avgBlockTimeMs: 1000,
		multicall3: {
			address: "0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c",
			type: "RedstoneMulticall3",
			gasLimitPerCall: 1000000
		},
		isAuctionModel: false,
		twoDimensionalFees: false,
		isMainnet: true
	}
};
var temporaryConfigUpdates = {
	expirationTimestamp: "2025-06-26T16:01:00+02:00",
	merlin: {
		disabled: true
	}
};
var _0x1b8c0c = {
	defaultConfig: defaultConfig$1,
	temporaryConfigUpdates: temporaryConfigUpdates
};

(function(_0x5460d0){var _0x3f84f7=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x340c27){return _0x340c27&&_0x340c27['__esModule']?_0x340c27:{'default':_0x340c27};};Object['defineProperty'](_0x5460d0,'__esModule',{'value':!![]}),_0x5460d0['REDSTONE_MULTICALL3_ADDRESS']=_0x5460d0['STANDARD_MULTICALL3_ADDRESS']=_0x5460d0['ChainTokenMapSchema']=_0x5460d0['TokenMapSchema']=_0x5460d0['SupportedNetworkNamesSchema']=_0x5460d0['ChainConfigsByIdSchema']=_0x5460d0['ChainConfigsSchema']=_0x5460d0['ChainConfigSchema']=_0x5460d0['chainConfigs']=void 0x0;const _0x3b7dd4=requireSrc$3(),_0x521539=_0x28081a,_0x3af815=_0x3f84f7(_0x1b8c0c);_0x5460d0['chainConfigs']=_0x3af815['default'],_0x5460d0['ChainConfigSchema']=_0x521539['z']['object']({'chainId':_0x521539['z']['number']()['positive'](),'chainType':_0x3b7dd4['ChainTypeEnum']['default']('evm'),'networkId':_0x3b7dd4['NetworkIdSchema'],'name':_0x521539['z']['string'](),'publicRpcUrls':_0x521539['z']['string']()['url']()['array'](),'currencySymbol':_0x521539['z']['string'](),'avgBlockTimeMs':_0x521539['z']['number'](),'isAuctionModel':_0x521539['z']['boolean'](),'twoDimensionalFees':_0x521539['z']['boolean'](),'isMainnet':_0x521539['z']['boolean'](),'disabled':_0x521539['z']['boolean']()['default'](![]),'etherScanApi':_0x521539['z']['string']()['url']()['optional'](),'fallbackToEthMaxPriorityFeePerGas':_0x521539['z']['boolean']()['default'](![]),'multicall3':_0x521539['z']['object']({'address':_0x521539['z']['string'](),'type':_0x521539['z']['literal']('Multicall3')})['or'](_0x521539['z']['object']({'address':_0x521539['z']['string'](),'type':_0x521539['z']['literal']('RedstoneMulticall3'),'gasLimitPerCall':_0x521539['z']['number']()['positive']()}))}),_0x5460d0['ChainConfigsSchema']=_0x521539['z']['record'](_0x521539['z']['string'](),_0x5460d0['ChainConfigSchema']),_0x5460d0['ChainConfigsByIdSchema']=_0x521539['z']['record'](_0x3b7dd4['NetworkIdSchema'],_0x5460d0['ChainConfigSchema']),_0x5460d0['SupportedNetworkNamesSchema']=_0x521539['z']['custom'](_0x344038=>{return typeof _0x344038==='string'&&Object['keys'](_0x3af815['default']['defaultConfig'])['includes'](_0x344038);},{'message':'Value\x20must\x20be\x20a\x20valid\x20network\x20name'}),_0x5460d0['TokenMapSchema']=_0x521539['z']['record'](_0x521539['z']['string'](),_0x521539['z']['object']({'address':_0x521539['z']['string'](),'decimals':_0x521539['z']['number']()['int']()['nonnegative']()})),_0x5460d0['ChainTokenMapSchema']=_0x521539['z']['record'](_0x5460d0['SupportedNetworkNamesSchema'],_0x5460d0['TokenMapSchema']['optional']()),_0x5460d0['STANDARD_MULTICALL3_ADDRESS']='0xcA11bde05977b3631167028862bE2a173976CA11',_0x5460d0['REDSTONE_MULTICALL3_ADDRESS']='0xaD6CC5a465E5c8284a49eC9eD10EFE275460678c';}(schemas));getDefaultExportFromCjs(schemas);

Object['defineProperty'](chainTokenMap$1,'__esModule',{'value':!![]});chainTokenMap$1['getChainTokenMap']=void 0x0;const internal_utils_1$2=src$8,utils_1$1c=requireSrc$3(),schemas_1=schemas;let chainTokenMap=null;function readAndValidateChainTokenMapConfig(){if(!chainTokenMap)try{const _0x48477f=(0x0,internal_utils_1$2['findRemoteConfigOrThrow'])(),_0x578f90=(0x0,internal_utils_1$2['readJsonFile'])(_0x48477f+'/chains/chain-token-map.json');utils_1$1c['RedstoneCommon']['zodAssert'](schemas_1['ChainTokenMapSchema'],_0x578f90),chainTokenMap=_0x578f90;}catch(_0x4b042c){(0, internal_utils_1$2['terminateWithNodeRemoteConfigError'])(utils_1$1c['RedstoneCommon']['stringifyError'](_0x4b042c));}return chainTokenMap;}chainTokenMap$1['getChainTokenMap']=readAndValidateChainTokenMapConfig;

var fetchRpcUrlsFromSsm$1 = {};

Object['defineProperty'](fetchRpcUrlsFromSsm$1,'__esModule',{'value':!![]});fetchRpcUrlsFromSsm$1['fetchRpcUrlsFromSsm']=fetchRpcUrlsFromSsm;fetchRpcUrlsFromSsm$1['fetchParsedRpcUrlsFromSsmByNetworkId']=fetchParsedRpcUrlsFromSsmByNetworkId;const internal_utils_1$1=src$8,utils_1$1b=requireSrc$3();async function fetchRpcUrlsFromSsm(_0x520fa8){const _0x1475d6={};for(const _0x52794e of _0x520fa8['networkIds']){const _0x5c8b88='/'+_0x520fa8['env']+'/rpc/'+_0x52794e+'/'+(_0x520fa8['type']==='fallback'?'fallback/':'')+'urls';_0x1475d6[_0x5c8b88]=_0x52794e;}const _0x16780c=_0x520fa8['type']==='fallback'?'eu-north-1':'eu-west-1',_0x1e93da=await(0, internal_utils_1$1['getSSMParameterValues'])(Object['keys'](_0x1475d6),_0x16780c),_0x14d8f4={};for(const [_0x4fd765,_0x4ebe4e]of Object['entries'](_0x1e93da)){if(_0x4ebe4e)try{_0x14d8f4[_0x1475d6[_0x4fd765]]=JSON['parse'](_0x4ebe4e);}catch{}}return _0x14d8f4;}async function fetchParsedRpcUrlsFromSsmByNetworkId(_0x2c7cfd,_0x5eff66,_0x561b87='main'){const _0x46cdee=await fetchRpcUrlsFromSsm({'networkIds':[_0x2c7cfd],'env':_0x5eff66,'type':_0x561b87}),_0x20bbfe=_0x46cdee[_0x2c7cfd];if(!utils_1$1b['RedstoneCommon']['isDefined'](_0x20bbfe))throw new Error(_0x5eff66+'\x20RPC\x20URLs\x20not\x20found\x20for\x20'+_0x2c7cfd+',\x20or\x20failed\x20to\x20parse');return _0x20bbfe;}

var geckoTerminalConfigs = {};

Object['defineProperty'](geckoTerminalConfigs,'__esModule',{'value':!![]});geckoTerminalConfigs['allGeckoSupportedNetworkNames']=void 0x0;geckoTerminalConfigs['mapNetworkNameToGeckoTerminalNetworkName']=mapNetworkNameToGeckoTerminalNetworkName;const networkToGeckoTerminalNameMap={'ethereum':'eth','arbitrumOne':'arbitrum','avalanche':'avax','optimism':'optimism','base':'base','bnb':'bsc','manta':'manta-pacific','sei':'sei-evm','merlin':'merlin-chain','blast':'blast','berachain':'berachain','fraxtal':'fraxtal','hyperevm':'hyperevm'};function mapNetworkNameToGeckoTerminalNetworkName(_0x4cb11a){return networkToGeckoTerminalNameMap[_0x4cb11a];}geckoTerminalConfigs['allGeckoSupportedNetworkNames']=Object['keys'](networkToGeckoTerminalNameMap);

var getChainConfigs = {};

(function(_0x1d4c1a){var _0x1e8726=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x527a51){return _0x527a51&&_0x527a51['__esModule']?_0x527a51:{'default':_0x527a51};};Object['defineProperty'](_0x1d4c1a,'__esModule',{'value':!![]}),_0x1d4c1a['fetchChainConfigsWithAxios']=void 0x0,_0x1d4c1a['fetchChainConfigs']=_0x31263b,_0x1d4c1a['getLocalChainConfigs']=_0x40b761,_0x1d4c1a['getLocalChainConfigsByNetworkId']=_0x2117b7;const _0x5915c2=src$8,_0x35514f=requireSrc$3(),_0x46022c=_0x1e8726(_0x1b8c0c),_0x12b5c6=schemas,_0x80e81e=async(_0x33f6db,_0x4165a5,_0x2702e7='main')=>{for(const _0x1809b1 of _0x33f6db){const _0x441401='https://'+_0x1809b1+'/redstone-finance/redstone-monorepo-priv/'+_0x2702e7+'/packages/chain-configs/manifest/chain-configs.json';try{const _0x42ac1d=await _0x35514f['RedstoneCommon']['axiosGetWithRetries'](_0x441401,{'maxRetries':0x2,'headers':{'apikey':_0x4165a5}});return _0x42ac1d['data'];}catch(_0xc0bc4e){console['log']('failed\x20to\x20fetch\x20chain\x20configs\x20from\x20URL\x20'+_0x441401+',\x20error\x20'+_0x35514f['RedstoneCommon']['stringifyError'](_0xc0bc4e));}}throw new Error('failed\x20to\x20fetch\x20chain\x20configs\x20for\x20'+JSON['stringify']({'manifestsHosts':_0x33f6db,'apikey':_0x4165a5}));};_0x1d4c1a['fetchChainConfigsWithAxios']=_0x80e81e;const _0x513060=_0x35514f['RedstoneCommon']['memoize']({'functionToMemoize':_0x1d4c1a['fetchChainConfigsWithAxios'],'ttl':_0x35514f['RedstoneCommon']['minToMs'](0x1)});async function _0x31263b(){const _0x31ab3b=(0, _0x5915c2['getRemoteMonitoringManifestConfigFromEnv'])();if(_0x31ab3b['shouldUseLocal'])return _0x40b761();const _0x4c6481=await _0x513060(_0x31ab3b['manifestsHosts'],_0x31ab3b['manifestsApiKey'],_0x31ab3b['manifestsGitRef']),_0x21d7d0=(0, _0x5915c2['resolveMonitoringManifest'])(_0x4c6481);return _0x12b5c6['ChainConfigsSchema']['parse'](_0x21d7d0);}const _0x3bf61c=_0x12b5c6['ChainConfigsSchema']['parse']((0, _0x5915c2['resolveMonitoringManifest'])(_0x46022c['default']));function _0x40b761(){return _0x3bf61c;}function _0x5c73c0(_0x2ae76b){const _0x2e6184=Object['values'](_0x2ae76b)['map'](_0x1b33a7=>[_0x1b33a7['networkId'],_0x1b33a7]);return Object['fromEntries'](_0x2e6184);}const _0x4891c1=_0x5c73c0(_0x3bf61c);function _0x2117b7(){return _0x4891c1;}}(getChainConfigs));getDefaultExportFromCjs(getChainConfigs);

var helpers = {};

var src$7 = {};

var _format$1 = "hh-sol-artifact-1";
var contractName$1 = "Multicall3";
var sourceName$1 = "contracts/Mulitcall3.sol";
var abi$2 = [
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes[]",
				name: "returnData",
				type: "bytes[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bool",
						name: "allowFailure",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Call3[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate3",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bool",
						name: "allowFailure",
						type: "bool"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Call3Value[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate3Value",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "blockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getBasefee",
		outputs: [
			{
				internalType: "uint256",
				name: "basefee",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getBlockNumber",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getChainId",
		outputs: [
			{
				internalType: "uint256",
				name: "chainid",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockCoinbase",
		outputs: [
			{
				internalType: "address",
				name: "coinbase",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockDifficulty",
		outputs: [
			{
				internalType: "uint256",
				name: "difficulty",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockGasLimit",
		outputs: [
			{
				internalType: "uint256",
				name: "gaslimit",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getLastBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryAggregate",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryBlockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct Multicall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	}
];
var bytecode$2 = "0x608060405234801561001057600080fd5b506115b0806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e8b565b60405180910390f35b61016d60048036038101906101689190610f03565b610615565b60405161017b929190611012565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a6919061105b565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110a2565b6107bf565b60405161020393929190611102565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b506102896004803603810190610284919061119e565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df9190611221565b61081a565b6040516102f19190610e8b565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b604051610347919061127d565b60405180910390f35b61036a600480360381019061036591906110a2565b6109f4565b6040516103779190610e8b565b60405180910390f35b61039a60048036038101906103959190610f03565b610ba6565b6040516103a993929190611102565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112c4565b610bca565b6040516103e6919061105b565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112f1565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611320565b5b6020026020010151905087878381811061049657610495611320565b5b90506020028101906104a8919061135e565b925060008360400135905080860195508360000160208101906104cb919061119e565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f29190611386565b604051610500929190611428565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106039061149e565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112f1565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611320565b5b90506020028101906106a791906114be565b92508260000160208101906106bc919061119e565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e29190611386565b6040516106f0929190611428565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611320565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c90611532565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112f1565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611320565b5b602002602001015190508686838181106108b8576108b7611320565b5b90506020028101906108ca9190611552565b92508260000160208101906108df919061119e565b73ffffffffffffffffffffffffffffffffffffffff168380604001906109059190611386565b604051610913929190611428565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112f1565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611320565b5b60200260200101519050868683818110610a9257610a91611320565b5b9050602002810190610aa491906114be565b9250826000016020810190610ab9919061119e565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf9190611386565b604051610aed929190611428565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8690611532565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d8a82610d28565b610d948185610d33565b9350610da4818560208601610d44565b610dad81610d6e565b840191505092915050565b6000604083016000830151610dd06000860182610d19565b5060208301518482036020860152610de88282610d7f565b9150508091505092915050565b6000610e018383610db8565b905092915050565b6000602082019050919050565b6000610e2182610ce1565b610e2b8185610cec565b935083602082028501610e3d85610cfd565b8060005b85811015610e795784840389528151610e5a8582610df5565b9450610e6583610e09565b925060208a01995050600181019050610e41565b50829750879550505050505092915050565b60006020820190508181036000830152610ea58184610e16565b905092915050565b60008083601f840112610ec357610ec2610c2f565b5b8235905067ffffffffffffffff811115610ee057610edf610c34565b5b602083019150836020820283011115610efc57610efb610c39565b5b9250929050565b60008060208385031215610f1a57610f19610c25565b5b600083013567ffffffffffffffff811115610f3857610f37610c2a565b5b610f4485828601610ead565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f888383610d7f565b905092915050565b6000602082019050919050565b6000610fa882610f50565b610fb28185610f5b565b935083602082028501610fc485610f6c565b8060005b858110156110005784840389528151610fe18582610f7c565b9450610fec83610f90565b925060208a01995050600181019050610fc8565b50829750879550505050505092915050565b60006040820190506110276000830185610bfb565b81810360208301526110398184610f9d565b90509392505050565b6000819050919050565b61105581611042565b82525050565b6000602082019050611070600083018461104c565b92915050565b61107f81610d0d565b811461108a57600080fd5b50565b60008135905061109c81611076565b92915050565b6000806000604084860312156110bb576110ba610c25565b5b60006110c98682870161108d565b935050602084013567ffffffffffffffff8111156110ea576110e9610c2a565b5b6110f686828701610ead565b92509250509250925092565b60006060820190506111176000830186610bfb565b611124602083018561104c565b81810360408301526111368184610e16565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061116b82611140565b9050919050565b61117b81611160565b811461118657600080fd5b50565b60008135905061119881611172565b92915050565b6000602082840312156111b4576111b3610c25565b5b60006111c284828501611189565b91505092915050565b60008083601f8401126111e1576111e0610c2f565b5b8235905067ffffffffffffffff8111156111fe576111fd610c34565b5b60208301915083602082028301111561121a57611219610c39565b5b9250929050565b6000806020838503121561123857611237610c25565b5b600083013567ffffffffffffffff81111561125657611255610c2a565b5b611262858286016111cb565b92509250509250929050565b61127781611160565b82525050565b6000602082019050611292600083018461126e565b92915050565b6112a181610bf1565b81146112ac57600080fd5b50565b6000813590506112be81611298565b92915050565b6000602082840312156112da576112d9610c25565b5b60006112e8848285016112af565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261137a5761137961134f565b5b80830191505092915050565b600080833560016020038436030381126113a3576113a261134f565b5b80840192508235915067ffffffffffffffff8211156113c5576113c4611354565b5b6020830192506001820236038313156113e1576113e0611359565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061140f83856113e9565b935061141c8385846113f4565b82840190509392505050565b6000611435828486611403565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611488601a83611441565b915061149382611452565b602082019050919050565b600060208201905081810360008301526114b78161147b565b9050919050565b6000823560016040038336030381126114da576114d961134f565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061151c601783611441565b9150611527826114e6565b602082019050919050565b6000602082019050818103600083015261154b8161150f565b9050919050565b60008235600160600383360303811261156e5761156d61134f565b5b8083019150509291505056fea264697066735822122068149f07b4d875fedcb6ee4f92858c8f972a3d30b9755d0924a14d49b171d97f64736f6c63430008110033";
var deployedBytecode$1 = "0x6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e8b565b60405180910390f35b61016d60048036038101906101689190610f03565b610615565b60405161017b929190611012565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a6919061105b565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110a2565b6107bf565b60405161020393929190611102565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b506102896004803603810190610284919061119e565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df9190611221565b61081a565b6040516102f19190610e8b565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b604051610347919061127d565b60405180910390f35b61036a600480360381019061036591906110a2565b6109f4565b6040516103779190610e8b565b60405180910390f35b61039a60048036038101906103959190610f03565b610ba6565b6040516103a993929190611102565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112c4565b610bca565b6040516103e6919061105b565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112f1565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611320565b5b6020026020010151905087878381811061049657610495611320565b5b90506020028101906104a8919061135e565b925060008360400135905080860195508360000160208101906104cb919061119e565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f29190611386565b604051610500929190611428565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106039061149e565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112f1565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611320565b5b90506020028101906106a791906114be565b92508260000160208101906106bc919061119e565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e29190611386565b6040516106f0929190611428565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611320565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c90611532565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112f1565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611320565b5b602002602001015190508686838181106108b8576108b7611320565b5b90506020028101906108ca9190611552565b92508260000160208101906108df919061119e565b73ffffffffffffffffffffffffffffffffffffffff168380604001906109059190611386565b604051610913929190611428565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112f1565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611320565b5b60200260200101519050868683818110610a9257610a91611320565b5b9050602002810190610aa491906114be565b9250826000016020810190610ab9919061119e565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf9190611386565b604051610aed929190611428565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8690611532565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d8a82610d28565b610d948185610d33565b9350610da4818560208601610d44565b610dad81610d6e565b840191505092915050565b6000604083016000830151610dd06000860182610d19565b5060208301518482036020860152610de88282610d7f565b9150508091505092915050565b6000610e018383610db8565b905092915050565b6000602082019050919050565b6000610e2182610ce1565b610e2b8185610cec565b935083602082028501610e3d85610cfd565b8060005b85811015610e795784840389528151610e5a8582610df5565b9450610e6583610e09565b925060208a01995050600181019050610e41565b50829750879550505050505092915050565b60006020820190508181036000830152610ea58184610e16565b905092915050565b60008083601f840112610ec357610ec2610c2f565b5b8235905067ffffffffffffffff811115610ee057610edf610c34565b5b602083019150836020820283011115610efc57610efb610c39565b5b9250929050565b60008060208385031215610f1a57610f19610c25565b5b600083013567ffffffffffffffff811115610f3857610f37610c2a565b5b610f4485828601610ead565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f888383610d7f565b905092915050565b6000602082019050919050565b6000610fa882610f50565b610fb28185610f5b565b935083602082028501610fc485610f6c565b8060005b858110156110005784840389528151610fe18582610f7c565b9450610fec83610f90565b925060208a01995050600181019050610fc8565b50829750879550505050505092915050565b60006040820190506110276000830185610bfb565b81810360208301526110398184610f9d565b90509392505050565b6000819050919050565b61105581611042565b82525050565b6000602082019050611070600083018461104c565b92915050565b61107f81610d0d565b811461108a57600080fd5b50565b60008135905061109c81611076565b92915050565b6000806000604084860312156110bb576110ba610c25565b5b60006110c98682870161108d565b935050602084013567ffffffffffffffff8111156110ea576110e9610c2a565b5b6110f686828701610ead565b92509250509250925092565b60006060820190506111176000830186610bfb565b611124602083018561104c565b81810360408301526111368184610e16565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061116b82611140565b9050919050565b61117b81611160565b811461118657600080fd5b50565b60008135905061119881611172565b92915050565b6000602082840312156111b4576111b3610c25565b5b60006111c284828501611189565b91505092915050565b60008083601f8401126111e1576111e0610c2f565b5b8235905067ffffffffffffffff8111156111fe576111fd610c34565b5b60208301915083602082028301111561121a57611219610c39565b5b9250929050565b6000806020838503121561123857611237610c25565b5b600083013567ffffffffffffffff81111561125657611255610c2a565b5b611262858286016111cb565b92509250509250929050565b61127781611160565b82525050565b6000602082019050611292600083018461126e565b92915050565b6112a181610bf1565b81146112ac57600080fd5b50565b6000813590506112be81611298565b92915050565b6000602082840312156112da576112d9610c25565b5b60006112e8848285016112af565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261137a5761137961134f565b5b80830191505092915050565b600080833560016020038436030381126113a3576113a261134f565b5b80840192508235915067ffffffffffffffff8211156113c5576113c4611354565b5b6020830192506001820236038313156113e1576113e0611359565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061140f83856113e9565b935061141c8385846113f4565b82840190509392505050565b6000611435828486611403565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611488601a83611441565b915061149382611452565b602082019050919050565b600060208201905081810360008301526114b78161147b565b9050919050565b6000823560016040038336030381126114da576114d961134f565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061151c601783611441565b9150611527826114e6565b602082019050919050565b6000602082019050818103600083015261154b8161150f565b9050919050565b60008235600160600383360303811261156e5761156d61134f565b5b8083019150509291505056fea264697066735822122068149f07b4d875fedcb6ee4f92858c8f972a3d30b9755d0924a14d49b171d97f64736f6c63430008110033";
var linkReferences$1 = {
};
var deployedLinkReferences$1 = {
};
var _0x911f45 = {
	_format: _format$1,
	contractName: contractName$1,
	sourceName: sourceName$1,
	abi: abi$2,
	bytecode: bytecode$2,
	deployedBytecode: deployedBytecode$1,
	linkReferences: linkReferences$1,
	deployedLinkReferences: deployedLinkReferences$1
};

var _format = "hh-sol-artifact-1";
var contractName = "RedstoneMulticall3";
var sourceName = "contracts/RedstoneMulitcall3.sol";
var abi$1 = [
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes[]",
				name: "returnData",
				type: "bytes[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bool",
						name: "allowFailure",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					},
					{
						internalType: "uint256",
						name: "gasLimit",
						type: "uint256"
					}
				],
				internalType: "struct RedstoneMulticall3.RedstoneCall3[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate3",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bool",
						name: "allowFailure",
						type: "bool"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Call3Value[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate3Value",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "blockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getBasefee",
		outputs: [
			{
				internalType: "uint256",
				name: "basefee",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getBlockNumber",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getChainId",
		outputs: [
			{
				internalType: "uint256",
				name: "chainid",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockCoinbase",
		outputs: [
			{
				internalType: "address",
				name: "coinbase",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockDifficulty",
		outputs: [
			{
				internalType: "uint256",
				name: "difficulty",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockGasLimit",
		outputs: [
			{
				internalType: "uint256",
				name: "gaslimit",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getLastBlockHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryAggregate",
		outputs: [
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "requireSuccess",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "tryBlockAndAggregate",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				internalType: "bytes32",
				name: "blockHash",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct RedstoneMulticall3.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "payable",
		type: "function"
	}
];
var bytecode$1 = "0x608060405234801561001057600080fd5b506115b6806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806386d516e8146102ca57806398679064146102f5576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c10565b60405180910390f35b61013d60048036038101906101389190610c9a565b6103f7565b60405161014a9190610e91565b60405180910390f35b61016d60048036038101906101689190610f09565b610615565b60405161017b929190611018565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611061565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c10565b60405180910390f35b6101f460048036038101906101ef91906110a8565b6107bf565b60405161020393929190611108565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c10565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c10565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a4565b6107f1565b6040516102969190610c10565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c10565b60405180910390f35b3480156102d657600080fd5b506102df61081a565b6040516102ec9190610c10565b60405180910390f35b61030f600480360381019061030a9190611227565b610822565b60405161031c9190610e91565b60405180910390f35b34801561033157600080fd5b5061033a6109f2565b6040516103479190611283565b60405180910390f35b61036a600480360381019061036591906110a8565b6109fa565b6040516103779190610e91565b60405180910390f35b61039a60048036038101906103959190610f09565b610bac565b6040516103a993929190611108565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112ca565b610bd0565b6040516103e69190611061565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112f7565b5b60405190808252806020026020018201604052801561045557816020015b610442610bdb565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611326565b5b6020026020010151905087878381811061049657610495611326565b5b90506020028101906104a89190611364565b925060008360400135905080860195508360000160208101906104cb91906111a4565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138c565b60405161050092919061142e565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a4565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112f7565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611326565b5b90506020028101906106a791906114c4565b92508260000160208101906106bc91906111a4565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138c565b6040516106f092919061142e565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611326565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c90611538565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109fa565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b606060008383905090508067ffffffffffffffff811115610846576108456112f7565b5b60405190808252806020026020018201604052801561087f57816020015b61086c610bdb565b8152602001906001900390816108645790505b5091503660005b828110156109e95760008482815181106108a3576108a2611326565b5b602002602001015190508686838181106108c0576108bf611326565b5b90506020028101906108d29190611558565b92508260000160208101906108e791906111a4565b73ffffffffffffffffffffffffffffffffffffffff168360600135848060400190610912919061138c565b60405161092092919061142e565b60006040518083038160008787f1925050503d806000811461095e576040519150601f19603f3d011682016040523d82523d6000602084013e610963565b606091505b5082600001836020018290528215151515815250505080516020840135176109dd577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b81600101915050610886565b50505092915050565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1e57610a1d6112f7565b5b604051908082528060200260200182016040528015610a5757816020015b610a44610bdb565b815260200190600190039081610a3c5790505b5091503660005b82811015610ba2576000848281518110610a7b57610a7a611326565b5b60200260200101519050868683818110610a9857610a97611326565b5b9050602002810190610aaa91906114c4565b9250826000016020810190610abf91906111a4565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610ae5919061138c565b604051610af392919061142e565b6000604051808303816000865af19150503d8060008114610b30576040519150601f19603f3d011682016040523d82523d6000602084013e610b35565b606091505b508260000183602001829052821515151581525050508715610b96578060000151610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c90611538565b60405180910390fd5b5b81600101915050610a5e565b5050509392505050565b6000806060610bbd600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0a81610bf7565b82525050565b6000602082019050610c256000830184610c01565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5a57610c59610c35565b5b8235905067ffffffffffffffff811115610c7757610c76610c3a565b5b602083019150836020820283011115610c9357610c92610c3f565b5b9250929050565b60008060208385031215610cb157610cb0610c2b565b5b600083013567ffffffffffffffff811115610ccf57610cce610c30565b5b610cdb85828601610c44565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2881610d13565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d68578082015181840152602081019050610d4d565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d9082610d2e565b610d9a8185610d39565b9350610daa818560208601610d4a565b610db381610d74565b840191505092915050565b6000604083016000830151610dd66000860182610d1f565b5060208301518482036020860152610dee8282610d85565b9150508091505092915050565b6000610e078383610dbe565b905092915050565b6000602082019050919050565b6000610e2782610ce7565b610e318185610cf2565b935083602082028501610e4385610d03565b8060005b85811015610e7f5784840389528151610e608582610dfb565b9450610e6b83610e0f565b925060208a01995050600181019050610e47565b50829750879550505050505092915050565b60006020820190508181036000830152610eab8184610e1c565b905092915050565b60008083601f840112610ec957610ec8610c35565b5b8235905067ffffffffffffffff811115610ee657610ee5610c3a565b5b602083019150836020820283011115610f0257610f01610c3f565b5b9250929050565b60008060208385031215610f2057610f1f610c2b565b5b600083013567ffffffffffffffff811115610f3e57610f3d610c30565b5b610f4a85828601610eb3565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f8e8383610d85565b905092915050565b6000602082019050919050565b6000610fae82610f56565b610fb88185610f61565b935083602082028501610fca85610f72565b8060005b858110156110065784840389528151610fe78582610f82565b9450610ff283610f96565b925060208a01995050600181019050610fce565b50829750879550505050505092915050565b600060408201905061102d6000830185610c01565b818103602083015261103f8184610fa3565b90509392505050565b6000819050919050565b61105b81611048565b82525050565b60006020820190506110766000830184611052565b92915050565b61108581610d13565b811461109057600080fd5b50565b6000813590506110a28161107c565b92915050565b6000806000604084860312156110c1576110c0610c2b565b5b60006110cf86828701611093565b935050602084013567ffffffffffffffff8111156110f0576110ef610c30565b5b6110fc86828701610eb3565b92509250509250925092565b600060608201905061111d6000830186610c01565b61112a6020830185611052565b818103604083015261113c8184610e1c565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117182611146565b9050919050565b61118181611166565b811461118c57600080fd5b50565b60008135905061119e81611178565b92915050565b6000602082840312156111ba576111b9610c2b565b5b60006111c88482850161118f565b91505092915050565b60008083601f8401126111e7576111e6610c35565b5b8235905067ffffffffffffffff81111561120457611203610c3a565b5b6020830191508360208202830111156112205761121f610c3f565b5b9250929050565b6000806020838503121561123e5761123d610c2b565b5b600083013567ffffffffffffffff81111561125c5761125b610c30565b5b611268858286016111d1565b92509250509250929050565b61127d81611166565b82525050565b60006020820190506112986000830184611274565b92915050565b6112a781610bf7565b81146112b257600080fd5b50565b6000813590506112c48161129e565b92915050565b6000602082840312156112e0576112df610c2b565b5b60006112ee848285016112b5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b6000823560016080038336030381126113805761137f611355565b5b80830191505092915050565b600080833560016020038436030381126113a9576113a8611355565b5b80840192508235915067ffffffffffffffff8211156113cb576113ca61135a565b5b6020830192506001820236038313156113e7576113e661135f565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141583856113ef565b93506114228385846113fa565b82840190509392505050565b600061143b828486611409565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b600061148e601a83611447565b915061149982611458565b602082019050919050565b600060208201905081810360008301526114bd81611481565b9050919050565b6000823560016040038336030381126114e0576114df611355565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b6000611522601783611447565b915061152d826114ec565b602082019050919050565b6000602082019050818103600083015261155181611515565b9050919050565b60008235600160800383360303811261157457611573611355565b5b8083019150509291505056fea2646970667358221220ad388e1f9a63786032ecc2f91cf239b3354e2f873d482e4bc6f5979e1535bb6b64736f6c63430008110033";
var deployedBytecode = "0x6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806386d516e8146102ca57806398679064146102f5576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c10565b60405180910390f35b61013d60048036038101906101389190610c9a565b6103f7565b60405161014a9190610e91565b60405180910390f35b61016d60048036038101906101689190610f09565b610615565b60405161017b929190611018565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611061565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c10565b60405180910390f35b6101f460048036038101906101ef91906110a8565b6107bf565b60405161020393929190611108565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c10565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c10565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a4565b6107f1565b6040516102969190610c10565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c10565b60405180910390f35b3480156102d657600080fd5b506102df61081a565b6040516102ec9190610c10565b60405180910390f35b61030f600480360381019061030a9190611227565b610822565b60405161031c9190610e91565b60405180910390f35b34801561033157600080fd5b5061033a6109f2565b6040516103479190611283565b60405180910390f35b61036a600480360381019061036591906110a8565b6109fa565b6040516103779190610e91565b60405180910390f35b61039a60048036038101906103959190610f09565b610bac565b6040516103a993929190611108565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112ca565b610bd0565b6040516103e69190611061565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112f7565b5b60405190808252806020026020018201604052801561045557816020015b610442610bdb565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611326565b5b6020026020010151905087878381811061049657610495611326565b5b90506020028101906104a89190611364565b925060008360400135905080860195508360000160208101906104cb91906111a4565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138c565b60405161050092919061142e565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a4565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112f7565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611326565b5b90506020028101906106a791906114c4565b92508260000160208101906106bc91906111a4565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138c565b6040516106f092919061142e565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611326565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c90611538565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109fa565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b606060008383905090508067ffffffffffffffff811115610846576108456112f7565b5b60405190808252806020026020018201604052801561087f57816020015b61086c610bdb565b8152602001906001900390816108645790505b5091503660005b828110156109e95760008482815181106108a3576108a2611326565b5b602002602001015190508686838181106108c0576108bf611326565b5b90506020028101906108d29190611558565b92508260000160208101906108e791906111a4565b73ffffffffffffffffffffffffffffffffffffffff168360600135848060400190610912919061138c565b60405161092092919061142e565b60006040518083038160008787f1925050503d806000811461095e576040519150601f19603f3d011682016040523d82523d6000602084013e610963565b606091505b5082600001836020018290528215151515815250505080516020840135176109dd577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b81600101915050610886565b50505092915050565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1e57610a1d6112f7565b5b604051908082528060200260200182016040528015610a5757816020015b610a44610bdb565b815260200190600190039081610a3c5790505b5091503660005b82811015610ba2576000848281518110610a7b57610a7a611326565b5b60200260200101519050868683818110610a9857610a97611326565b5b9050602002810190610aaa91906114c4565b9250826000016020810190610abf91906111a4565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610ae5919061138c565b604051610af392919061142e565b6000604051808303816000865af19150503d8060008114610b30576040519150601f19603f3d011682016040523d82523d6000602084013e610b35565b606091505b508260000183602001829052821515151581525050508715610b96578060000151610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c90611538565b60405180910390fd5b5b81600101915050610a5e565b5050509392505050565b6000806060610bbd600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0a81610bf7565b82525050565b6000602082019050610c256000830184610c01565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5a57610c59610c35565b5b8235905067ffffffffffffffff811115610c7757610c76610c3a565b5b602083019150836020820283011115610c9357610c92610c3f565b5b9250929050565b60008060208385031215610cb157610cb0610c2b565b5b600083013567ffffffffffffffff811115610ccf57610cce610c30565b5b610cdb85828601610c44565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2881610d13565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d68578082015181840152602081019050610d4d565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d9082610d2e565b610d9a8185610d39565b9350610daa818560208601610d4a565b610db381610d74565b840191505092915050565b6000604083016000830151610dd66000860182610d1f565b5060208301518482036020860152610dee8282610d85565b9150508091505092915050565b6000610e078383610dbe565b905092915050565b6000602082019050919050565b6000610e2782610ce7565b610e318185610cf2565b935083602082028501610e4385610d03565b8060005b85811015610e7f5784840389528151610e608582610dfb565b9450610e6b83610e0f565b925060208a01995050600181019050610e47565b50829750879550505050505092915050565b60006020820190508181036000830152610eab8184610e1c565b905092915050565b60008083601f840112610ec957610ec8610c35565b5b8235905067ffffffffffffffff811115610ee657610ee5610c3a565b5b602083019150836020820283011115610f0257610f01610c3f565b5b9250929050565b60008060208385031215610f2057610f1f610c2b565b5b600083013567ffffffffffffffff811115610f3e57610f3d610c30565b5b610f4a85828601610eb3565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f8e8383610d85565b905092915050565b6000602082019050919050565b6000610fae82610f56565b610fb88185610f61565b935083602082028501610fca85610f72565b8060005b858110156110065784840389528151610fe78582610f82565b9450610ff283610f96565b925060208a01995050600181019050610fce565b50829750879550505050505092915050565b600060408201905061102d6000830185610c01565b818103602083015261103f8184610fa3565b90509392505050565b6000819050919050565b61105b81611048565b82525050565b60006020820190506110766000830184611052565b92915050565b61108581610d13565b811461109057600080fd5b50565b6000813590506110a28161107c565b92915050565b6000806000604084860312156110c1576110c0610c2b565b5b60006110cf86828701611093565b935050602084013567ffffffffffffffff8111156110f0576110ef610c30565b5b6110fc86828701610eb3565b92509250509250925092565b600060608201905061111d6000830186610c01565b61112a6020830185611052565b818103604083015261113c8184610e1c565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117182611146565b9050919050565b61118181611166565b811461118c57600080fd5b50565b60008135905061119e81611178565b92915050565b6000602082840312156111ba576111b9610c2b565b5b60006111c88482850161118f565b91505092915050565b60008083601f8401126111e7576111e6610c35565b5b8235905067ffffffffffffffff81111561120457611203610c3a565b5b6020830191508360208202830111156112205761121f610c3f565b5b9250929050565b6000806020838503121561123e5761123d610c2b565b5b600083013567ffffffffffffffff81111561125c5761125b610c30565b5b611268858286016111d1565b92509250509250929050565b61127d81611166565b82525050565b60006020820190506112986000830184611274565b92915050565b6112a781610bf7565b81146112b257600080fd5b50565b6000813590506112c48161129e565b92915050565b6000602082840312156112e0576112df610c2b565b5b60006112ee848285016112b5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b6000823560016080038336030381126113805761137f611355565b5b80830191505092915050565b600080833560016020038436030381126113a9576113a8611355565b5b80840192508235915067ffffffffffffffff8211156113cb576113ca61135a565b5b6020830192506001820236038313156113e7576113e661135f565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141583856113ef565b93506114228385846113fa565b82840190509392505050565b600061143b828486611409565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b600061148e601a83611447565b915061149982611458565b602082019050919050565b600060208201905081810360008301526114bd81611481565b9050919050565b6000823560016040038336030381126114e0576114df611355565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b6000611522601783611447565b915061152d826114ec565b602082019050919050565b6000602082019050818103600083015261155181611515565b9050919050565b60008235600160800383360303811261157457611573611355565b5b8083019150509291505056fea2646970667358221220ad388e1f9a63786032ecc2f91cf239b3354e2f873d482e4bc6f5979e1535bb6b64736f6c63430008110033";
var linkReferences = {
};
var deployedLinkReferences = {
};
var _0x53e54b = {
	_format: _format,
	contractName: contractName,
	sourceName: sourceName,
	abi: abi$1,
	bytecode: bytecode$1,
	deployedBytecode: deployedBytecode,
	linkReferences: linkReferences,
	deployedLinkReferences: deployedLinkReferences
};

var __importDefault$e=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x1d9865){return _0x1d9865&&_0x1d9865['__esModule']?_0x1d9865:{'default':_0x1d9865};};Object['defineProperty'](src$7,'__esModule',{'value':!![]});src$7['RedstoneMulticall3ByteCode']=src$7['RedstoneMulticall3Abi']=src$7['Multicall3ByteCode']=src$7['Multicall3Abi']=void 0x0;const Multicall3_json_1=__importDefault$e(_0x911f45),RedstoneMulticall3_json_1=__importDefault$e(_0x53e54b);src$7['Multicall3Abi']=Multicall3_json_1['default']['abi'];src$7['Multicall3ByteCode']=Multicall3_json_1['default']['bytecode'];src$7['RedstoneMulticall3Abi']=RedstoneMulticall3_json_1['default']['abi'];src$7['RedstoneMulticall3ByteCode']=RedstoneMulticall3_json_1['default']['bytecode'];

Object['defineProperty'](helpers,'__esModule',{'value':!![]});helpers['getChainConfig']=getChainConfig;helpers['getChainConfigUnsafe']=getChainConfigUnsafe;helpers['getNetworkName']=getNetworkName;helpers['getChainConfigByNetworkId']=getChainConfigByNetworkId;helpers['getMulticall3']=getMulticall3;helpers['getChainConfigByChainId']=getChainConfigByChainId;const evm_multicall_1=src$7,utils_1$1a=requireSrc$3(),ethers_1$c=_0x3e9376;function getChainConfig(_0x4c5fe0,_0x48d785){return utils_1$1a['RedstoneCommon']['assertThenReturn'](_0x4c5fe0[_0x48d785],'Couldn\x27t\x20find\x20chain\x20config\x20for\x20'+_0x48d785);}function getChainConfigUnsafe(_0x405a94,_0x384f68){return _0x405a94[_0x384f68];}function getNetworkName(_0xa2a796,_0x82a62b){const _0x2f340d=Object['entries'](_0xa2a796)['find'](([_0x151538,_0x2d1c01])=>_0x2d1c01['networkId']===_0x82a62b)?.[0x0];return utils_1$1a['RedstoneCommon']['assert'](_0x2f340d,'Couldn\x27t\x20find\x20network\x20for\x20network\x20id='+_0x82a62b),_0x2f340d;}function getChainConfigByNetworkId(_0x77d32b,_0x4c8bd4){return utils_1$1a['RedstoneCommon']['assertThenReturn'](Object['values'](_0x77d32b)['find'](_0x27742d=>_0x27742d['networkId']===_0x4c8bd4),'Failed\x20to\x20getChainConfigByNetworkId\x20chainConfig\x20not\x20defined\x20for\x20'+_0x4c8bd4);}function getMulticall3(_0x19762d,_0xf7af9f){const {multicall3:_0x287bbd}=_0xf7af9f,_0x1011ec=_0x19762d['overrideAddress']??_0x287bbd['address'];if(_0x287bbd['type']==='Multicall3')return new ethers_1$c['Contract'](_0x1011ec,evm_multicall_1['Multicall3Abi'],_0x19762d['signerOrProvider']);else {if(_0x287bbd['type']==='RedstoneMulticall3')return new ethers_1$c['Contract'](_0x1011ec,evm_multicall_1['RedstoneMulticall3Abi'],_0x19762d['signerOrProvider']);else throw new Error('Unknown\x20multicall3.type='+String(_0x287bbd));}}function getChainConfigByChainId(_0x47b6c8,_0x1cfcdb,_0x6234ce){return utils_1$1a['RedstoneCommon']['assertThenReturn'](Object['values'](_0x47b6c8)['find'](_0x3ae5b3=>_0x3ae5b3['chainId']===_0x1cfcdb&&(0, utils_1$1a['conformsToChainType'])(_0x3ae5b3['chainType'],_0x6234ce)),'Failed\x20to\x20getChainConfigByChainId\x20chainConfig\x20not\x20defined\x20for\x20'+_0x1cfcdb+(_0x6234ce?'\x20(chainType:\x20'+_0x6234ce+')':''));}

var tokens = {};

Object['defineProperty'](tokens,'__esModule',{'value':!![]});tokens['getAllTokenSymbols']=void 0x0;tokens['getTokenInfo']=getTokenInfo;const chain_token_map_1=chainTokenMap$1;function getTokenInfo(_0x47b8f8,_0x357eb9){const _0x469beb=(0, chain_token_map_1['getChainTokenMap'])()[_0x47b8f8];if(!_0x469beb)throw new Error('Chain\x20'+_0x47b8f8+'\x20not\x20found\x20in\x20chainTokenMap');if(!Object['keys'](_0x469beb)['includes'](_0x357eb9))throw new Error('Token\x20'+_0x357eb9+'\x20not\x20found\x20on\x20'+_0x47b8f8+',\x20check\x20getTokenInfo\x20function');const _0x36a6d3=_0x469beb[_0x357eb9],_0x5a2024={'symbol':_0x357eb9,..._0x36a6d3};return _0x5a2024;}let allTokenSymbols=null;const getAllTokenSymbols=()=>allTokenSymbols??=new Set(Object['values']((0, chain_token_map_1['getChainTokenMap'])())['flatMap'](_0x23665a=>Object['keys'](_0x23665a))['map'](_0x2c73e4=>_0x2c73e4['toLowerCase']()));tokens['getAllTokenSymbols']=getAllTokenSymbols;

(function(_0x53668d){var _0x50eca4=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x32e4aa,_0x1be85c,_0x169a80,_0x1ad48c){if(_0x1ad48c===undefined)_0x1ad48c=_0x169a80;var _0x729be8=Object['getOwnPropertyDescriptor'](_0x1be85c,_0x169a80);(!_0x729be8||('get'in _0x729be8?!_0x1be85c['__esModule']:_0x729be8['writable']||_0x729be8['configurable']))&&(_0x729be8={'enumerable':!![],'get':function(){return _0x1be85c[_0x169a80];}}),Object['defineProperty'](_0x32e4aa,_0x1ad48c,_0x729be8);}:function(_0x78cf45,_0x3aa0f9,_0x3dbd8d,_0x138aba){if(_0x138aba===undefined)_0x138aba=_0x3dbd8d;_0x78cf45[_0x138aba]=_0x3aa0f9[_0x3dbd8d];}),_0x28fa6d=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x2c9440,_0x56dcee){for(var _0x21f046 in _0x2c9440)if(_0x21f046!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x56dcee,_0x21f046))_0x50eca4(_0x56dcee,_0x2c9440,_0x21f046);};Object['defineProperty'](_0x53668d,'__esModule',{'value':!![]}),_0x28fa6d(chainTokenMap$1,_0x53668d),_0x28fa6d(fetchRpcUrlsFromSsm$1,_0x53668d),_0x28fa6d(geckoTerminalConfigs,_0x53668d),_0x28fa6d(getChainConfigs,_0x53668d),_0x28fa6d(helpers,_0x53668d),_0x28fa6d(schemas,_0x53668d),_0x28fa6d(tokens,_0x53668d);}(src$9));getDefaultExportFromCjs(src$9);

Object['defineProperty'](hardhatNetworkConfigs,'__esModule',{'value':!![]});hardhatNetworkConfigs['hardhatNetworksConfig']=void 0x0;hardhatNetworkConfigs['convertHardhatNetworkNameToChainName']=convertHardhatNetworkNameToChainName;const chain_configs_1$3=src$9,utils_1$19=requireSrc$3(),ChainConfigs=(0, chain_configs_1$3['getLocalChainConfigs'])(),CHAIN_NAME_TO_HARDHAT_NETWORK_NAME={'ethereum':'mainnet','ethereum-sepolia':'sepolia','blast-sepolia':'blast-testnet','bnb-testnet':'bscTestnet'},HARDHAT_NETWORK_NAME_TO_CHAIN_NAME=Object['fromEntries'](Object['entries'](CHAIN_NAME_TO_HARDHAT_NETWORK_NAME)['map'](([_0x509c04,_0x21a43b])=>[_0x21a43b,_0x509c04])),hardhatNetworksConfig=(_0x4ad432=[],_0x3d72d7=![])=>{const _0x160e12={};for(const [_0x495279,_0x147546]of Object['entries'](ChainConfigs)){if(_0x147546['publicRpcUrls']['length']===0x0||_0x495279==='hardhat'||!(0, utils_1$19['isEvmNetworkId'])(_0x147546['networkId']))continue;const _0x542637=_0x147546['publicRpcUrls'][(_0x3d72d7?0x1:0x0)*Math['floor'](Math['random']()*_0x147546['publicRpcUrls']['length'])];_0x160e12[CHAIN_NAME_TO_HARDHAT_NETWORK_NAME[_0x495279]??_0x495279]={'name':_0x147546['name'],'chainId':_0x147546['networkId'],'url':_0x542637,'etherScanApi':_0x147546['etherScanApi'],'accounts':_0x4ad432};}return _0x160e12;};hardhatNetworkConfigs['hardhatNetworksConfig']=hardhatNetworksConfig;function convertHardhatNetworkNameToChainName(_0x2d1c90){return HARDHAT_NETWORK_NAME_TO_CHAIN_NAME[_0x2d1c90]??_0x2d1c90;}

var MegaProviderBuilder$1 = {};

var ProviderWithAgreement$1 = {};

var ProviderWithFallback = {};

var ProviderWithFallbackBase$1 = {};

Object['defineProperty'](ProviderWithFallbackBase$1,'__esModule',{'value':!![]});ProviderWithFallbackBase$1['ProviderWithFallbackBase']=void 0x0;class ProviderWithFallbackBase{['_isProvider']=!![];['sendTransaction'](..._0x2b330c){return this['executeWithFallback']('sendTransaction',..._0x2b330c);}['send'](..._0x4d9f13){return this['executeWithFallback']('send',..._0x4d9f13);}['getBlockNumber'](){return this['executeWithFallback']('getBlockNumber');}['getGasPrice'](){return this['executeWithFallback']('getGasPrice');}['getFeeData'](){return this['executeWithFallback']('getFeeData');}['getBalance'](..._0x35889d){return this['executeWithFallback']('getBalance',..._0x35889d);}['getTransactionCount'](..._0x5a6968){return this['executeWithFallback']('getTransactionCount',..._0x5a6968);}['getCode'](..._0x47cb4d){return this['executeWithFallback']('getCode',..._0x47cb4d);}['getStorageAt'](..._0x411392){return this['executeWithFallback']('getStorageAt',..._0x411392);}['call'](..._0x15b7a2){return this['executeWithFallback']('call',..._0x15b7a2);}['estimateGas'](..._0x4a7a05){return this['executeWithFallback']('estimateGas',..._0x4a7a05);}['getBlock'](..._0x5c954f){return this['executeWithFallback']('getBlock',..._0x5c954f);}['getBlockWithTransactions'](..._0x13b635){return this['executeWithFallback']('getBlockWithTransactions',..._0x13b635);}['getTransaction'](..._0x5147e5){return this['executeWithFallback']('getTransaction',..._0x5147e5);}['getTransactionReceipt'](..._0x2f0832){return this['executeWithFallback']('getTransactionReceipt',..._0x2f0832);}['getLogs'](..._0xeb3dae){return this['executeWithFallback']('getLogs',..._0xeb3dae);}['resolveName'](..._0x1ec29a){return this['executeWithFallback']('resolveName',..._0x1ec29a);}['lookupAddress'](..._0x389c0c){return this['executeWithFallback']('lookupAddress',..._0x389c0c);}}ProviderWithFallbackBase$1['ProviderWithFallbackBase']=ProviderWithFallbackBase;

(function(_0x10900e){var _0x181894=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x2a50f5){return _0x2a50f5&&_0x2a50f5['__esModule']?_0x2a50f5:{'default':_0x2a50f5};};Object['defineProperty'](_0x10900e,'__esModule',{'value':!![]}),_0x10900e['ProviderWithFallback']=_0x10900e['FALLBACK_DEFAULT_CONFIG']=void 0x0;const _0x3acfb6=_0x307f7f,_0x465e4c=src$9,_0x48c03d=requireSrc$3(),_0x5befcc=_0x181894(_0x62d7dc),_0x45319c=common,_0x33af64=ProviderWithFallbackBase$1,_0x4139c0=(0, _0x48c03d['loggerFactory'])('ProviderWithFallback');_0x10900e['FALLBACK_DEFAULT_CONFIG']={'unrecoverableErrors':[_0x3acfb6['ErrorCode']['MISSING_ARGUMENT'],_0x3acfb6['ErrorCode']['MISSING_NEW'],_0x3acfb6['ErrorCode']['NONCE_EXPIRED'],_0x3acfb6['ErrorCode']['TRANSACTION_REPLACED'],_0x3acfb6['ErrorCode']['REPLACEMENT_UNDERPRICED']],'singleProviderOperationTimeout':0x1b58,'allProvidersOperationTimeout':0x8ca0,'reportMetric':()=>{}};class _0x1bcdae extends _0x33af64['ProviderWithFallbackBase']{['providers'];['providerWithFallbackConfig'];['lastErrorTimestamp']={};['currentProvider'];['providerIndex']=0x0;['chainId'];['chainConfig'];['getCurrentProviderIndex'](){return this['providerIndex'];}['getProviderWithFallbackConfig'](){return {...this['providerWithFallbackConfig']};}['globalListeners']=[];constructor(_0x23df75,_0xa6c0a2={}){super();if(_0x23df75['length']<0x2)throw new Error('Please\x20provide\x20at\x20least\x20two\x20providers');this['currentProvider']=_0x23df75[0x0],this['providers']=Object['freeze']([..._0x23df75]),this['providerWithFallbackConfig']={..._0x10900e['FALLBACK_DEFAULT_CONFIG'],..._0xa6c0a2},this['chainId']=(0, _0x45319c['getProviderNetworkInfo'])(this['providers'][0x0])['chainId'],this['chainConfig']=_0xa6c0a2['chainConfig']??(0, _0x465e4c['getChainConfigByNetworkId'])((0, _0x465e4c['getLocalChainConfigs'])(),this['chainId']);for(let _0x2af68f=0x0;_0x2af68f<this['providers']['length'];_0x2af68f++){this['lastErrorTimestamp'][_0x2af68f]=performance['now']()-_0x2af68f;}}['getNetwork'](){return Promise['resolve']({'chainId':this['chainId'],'name':this['chainConfig']['name']});}['on'](_0x41f6b9,_0x1fc342){return this['saveGlobalListener'](_0x41f6b9,_0x1fc342),this['currentProvider']['on'](_0x41f6b9,_0x1fc342);}['once'](_0x5e51cf,_0x5f5c2e){return this['saveGlobalListener'](_0x5e51cf,_0x5f5c2e,!![]),this['currentProvider']['once'](_0x5e51cf,_0x5f5c2e);}['emit'](_0x4836b6,..._0x1f962d){return this['currentProvider']['emit'](_0x4836b6,..._0x1f962d);}['listenerCount'](_0x341db3){return this['currentProvider']['listenerCount'](_0x341db3);}['listeners'](_0x58fb40){return this['currentProvider']['listeners'](_0x58fb40);}['addListener'](_0x6ec83d,_0x50134c){return this['currentProvider']['addListener'](_0x6ec83d,_0x50134c);}['off'](_0x2dc8a4,_0x391a7b){return this['currentProvider']['off'](_0x2dc8a4,_0x391a7b),this['updateGlobalListenerAfterRemoval'](),this['currentProvider'];}['removeAllListeners'](_0xc1b3d9){return this['currentProvider']['removeAllListeners'](_0xc1b3d9),this['updateGlobalListenerAfterRemoval'](),this['currentProvider'];}['removeListener'](_0x3f4977,_0x94d578){return this['currentProvider']['removeListener'](_0x3f4977,_0x94d578),this['updateGlobalListenerAfterRemoval'](),this['currentProvider'];}['waitForTransaction'](_0x170d70,_0x4fb140,_0x271f21){return this['currentProvider']['waitForTransaction'](_0x170d70,_0x4fb140,_0x271f21);}['saveGlobalListener'](_0x270621,_0x8571f8,_0x314028=![]){this['globalListeners']['push']({'eventType':_0x270621,'listener':_0x8571f8,'once':_0x314028});}['updateGlobalListenerAfterRemoval'](){const _0x91a285=this['currentProvider']['listeners']();this['globalListeners']=this['globalListeners']['filter'](_0x1c4a8f=>_0x91a285['includes'](_0x1c4a8f['listener']));}['executeWithFallback'](_0x285c0d,..._0x79a635){return _0x48c03d['RedstoneCommon']['timeout'](this['doExecuteWithFallback'](0x0,_0x285c0d,..._0x79a635),this['providerWithFallbackConfig']['allProvidersOperationTimeout'],'executeWithFallback('+_0x285c0d+')\x20timeout\x20after\x20'+this['providerWithFallbackConfig']['allProvidersOperationTimeout']);}async['doExecuteWithFallback'](_0x47a38d,_0x16ce35,..._0xe669eb){const _0xc992b2=this['providerIndex'];try{const _0x349cde=this['extractProviderName'](this['providerIndex']);return _0x4139c0['debug']('Executing\x20'+_0x16ce35+'\x20with\x20'+JSON['stringify'](_0xe669eb)+'\x20on\x20provider:\x20'+_0x349cde+'\x20(retry\x20#'+_0x47a38d+')'),await _0x48c03d['RedstoneCommon']['timeout'](this['currentProvider'][_0x16ce35](..._0xe669eb),this['providerWithFallbackConfig']['singleProviderOperationTimeout']);}catch(_0xcec038){return this['electNewProviderOrFail'](_0xcec038,_0x47a38d,_0xc992b2),await this['doExecuteWithFallback'](_0x47a38d+0x1,_0x16ce35,..._0xe669eb);}}['useProvider'](_0x657eba){this['currentProvider']['removeAllListeners'](),this['providerIndex']=_0x657eba,this['currentProvider']=this['providers'][this['providerIndex']];for(const {listener:_0x95897e,once:_0xc1bc8b,eventType:_0x47dafb}of this['globalListeners']){_0xc1bc8b?this['currentProvider']['once'](_0x47dafb,_0x95897e):this['currentProvider']['on'](_0x47dafb,_0x95897e);}}['extractProviderName'](_0x39c5ee){return this['providerWithFallbackConfig']['providerNames']?.[_0x39c5ee]??_0x39c5ee['toString']();}['electNewProviderOrFail'](_0x77739c,_0x4a9960,_0x3fca0e){if(_0x77739c['code']&&this['providerWithFallbackConfig']['unrecoverableErrors']['includes'](_0x77739c['code'])){_0x4139c0['warn']('Unrecoverable\x20error\x20'+_0x77739c['code']+',\x20rethrowing\x20error');throw _0x77739c;}const _0x474b4a=this['extractProviderName'](_0x3fca0e);_0x4139c0['warn']('Provider\x20'+_0x474b4a+'\x20failed\x20with\x20error:\x20'+_0x77739c['code']+'\x20'+_0x77739c['message']);if(_0x4a9960===this['providers']['length']-0x1){_0x4139c0['warn']('All\x20providers\x20failed\x20to\x20execute\x20action,\x20rethrowing\x20error');throw _0x77739c;}this['lastErrorTimestamp'][_0x3fca0e]=performance['now']();const _0x368040=parseInt(_0x5befcc['default']['minBy'](Object['entries'](this['lastErrorTimestamp']),([_0x555888,_0xb0aaa])=>_0xb0aaa)[0x0]),_0x511cd7=this['extractProviderName'](_0x368040);_0x4139c0['debug']('Fallback\x20into\x20next\x20provider\x20'+_0x511cd7+'\x20('+_0x4a9960+'/'+this['providers']['length']+').'),this['useProvider'](_0x368040);}}_0x10900e['ProviderWithFallback']=_0x1bcdae;}(ProviderWithFallback));getDefaultExportFromCjs(ProviderWithFallback);

var __importDefault$d=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x61a154){return _0x61a154&&_0x61a154['__esModule']?_0x61a154:{'default':_0x61a154};};Object['defineProperty'](ProviderWithAgreement$1,'__esModule',{'value':!![]});ProviderWithAgreement$1['ProviderWithAgreement']=void 0x0;const utils_1$18=requireSrc$3(),ethers_1$b=_0x3e9376,lodash_1$8=__importDefault$d(_0x62d7dc),common_1$4=common,ProviderWithFallback_1$2=ProviderWithFallback,MAX_BLOCK_TIME_AHEAD_HOURS=0x48,MAX_BLOCK_STALENESS=utils_1$18['RedstoneCommon']['minToMs'](0x3),DEFAULT_ELECT_BLOCK_FN=_0x396775=>{_0x396775['sort']((_0x55c4a6,_0x464d04)=>_0x55c4a6-_0x464d04);const _0x5d8957=Math['floor'](_0x396775['length']/0x2);return _0x396775['length']%0x2!==0x0?_0x396775[_0x5d8957]:Math['round']((_0x396775[_0x5d8957-0x1]+_0x396775[_0x5d8957])/0x2);},defaultConfig={'ignoreAgreementOnInsufficientResponses':![],'numberOfProvidersThatHaveToAgree':0x2,'getBlockNumberTimeoutMS':0x5dc,'electBlockFn':DEFAULT_ELECT_BLOCK_FN,'enableRpcCuratedList':![],'minimalProvidersCount':0x3,'requireExplicitBlockTag':!![]};class ProviderWithAgreement extends ProviderWithFallback_1$2['ProviderWithFallback']{['agreementConfig'];['curatedRpcList'];['providersWithIdentifier'];['lastBlockNumberForProvider']={};['logger'];constructor(_0x3781f7,_0x5f2779={}){super(_0x3781f7,_0x5f2779),this['agreementConfig']={...defaultConfig,..._0x5f2779};const _0x46bb92=this['agreementConfig']['numberOfProvidersThatHaveToAgree'];this['validateProvidersCount'](_0x46bb92,_0x3781f7),this['providersWithIdentifier']=Object['freeze'](this['providers']['map']((_0x544ccd,_0x46c471)=>({'provider':_0x544ccd,'identifier':(0, common_1$4['getProviderNetworkInfo'])(_0x544ccd,{'url':_0x46c471['toString'](),'chainId':0x1})['url']}))),this['agreementConfig']['enableRpcCuratedList']&&(this['curatedRpcList']=new utils_1$18['CuratedRpcList']({'rpcIdentifiers':this['providersWithIdentifier']['map'](_0x33a9d3=>_0x33a9d3['identifier']),'minimalProvidersCount':_0x5f2779['minimalProvidersCount']??_0x46bb92+0x1},this['chainId'])),this['logger']=(0, utils_1$18['loggerFactory'])('ProviderWithAgreement-'+this['chainId']);}['validateProvidersCount'](_0x469eb4,_0x4714a7){if(_0x4714a7['length']<0x2)throw new Error('Please\x20provide\x20at\x20least\x20two\x20providers');if(_0x469eb4>this['providers']['length'])throw new Error('numberOfProvidersWhichHaveToAgree\x20should\x20be\x20greater\x20then\x20supplied\x20providers\x20count');}['getHealthyProviders'](){if(!this['curatedRpcList'])return [...this['providersWithIdentifier']];const _0x568a7d=this['curatedRpcList']['getBestProviders']();return this['providersWithIdentifier']['filter'](({identifier:_0x1183d9})=>_0x568a7d['includes'](_0x1183d9));}['updateScore'](_0x3d6bca,_0x34fedb){this['curatedRpcList']&&this['curatedRpcList']['scoreRpc'](_0x3d6bca,{'error':_0x34fedb});}async['getBlockNumber'](){const _0x1f5f2f=this['getHealthyProviders'](),_0x24a9aa=await Promise['allSettled'](_0x1f5f2f['map'](async({provider:_0x4ff99f,identifier:_0x16e41a})=>{const _0x198909=await utils_1$18['RedstoneCommon']['timeout'](withDebugLog(()=>_0x4ff99f['getBlockNumber'](),{'description':'rpc='+_0x16e41a+'\x20op=getBlockNumber','logValue':!![],'logger':this['logger']}),this['agreementConfig']['getBlockNumberTimeoutMS']);this['assertValidBlockNumber'](_0x198909,_0x16e41a),this['updateLastBlockNumber'](_0x16e41a,_0x198909);const _0x271d86=this['lastBlockNumberForProvider'][_0x16e41a];return _0x271d86&&utils_1$18['RedstoneCommon']['assert'](Date['now']()-_0x271d86['changedAt']<MAX_BLOCK_STALENESS,'provider='+_0x16e41a+'\x20hasn\x27t\x20changed\x20block\x20number\x20for\x20'+(Date['now']()-_0x271d86['changedAt'])),_0x198909;})),_0x4290b7=_0x24a9aa['filter'](_0x173297=>_0x173297['status']==='fulfilled')['map'](_0x276d71=>_0x276d71['value']);if(_0x4290b7['length']===0x0)throw new AggregateError(_0x24a9aa['map']((_0x1327de,_0x44b6f0)=>new Error(_0x1f5f2f[_0x44b6f0]['identifier']+':\x20'+String(_0x1327de['reason']))),'All\x20providers\x20failed\x20to\x20fetch\x20\x27getBlockNumber\x27');const _0x489508=this['agreementConfig']['electBlockFn'](_0x4290b7,_0x1f5f2f['length'],this['chainId']);return this['logger']['debug']('block\x20number\x20election',{'blockNumbers':_0x4290b7,'electedBlockNumber':_0x489508}),_0x489508;}['updateLastBlockNumber'](_0x308803,_0x209d0f){this['lastBlockNumberForProvider'][_0x308803]??={'blockNumber':_0x209d0f,'changedAt':Date['now']()},this['lastBlockNumberForProvider'][_0x308803]['blockNumber']!==_0x209d0f&&(this['lastBlockNumberForProvider'][_0x308803]={'blockNumber':_0x209d0f,'changedAt':Date['now']()});}async['call'](_0x20e5f1,_0xb9e393){utils_1$18['RedstoneCommon']['assert'](_0xb9e393||!this['agreementConfig']['requireExplicitBlockTag'],'When\x20using\x20providerWithAgreement,\x20blockTag\x20has\x20to\x20be\x20passed\x20explicitly'),_0xb9e393??=await this['getBlockNumber']();const _0x1e48c6=ethers_1$b['utils']['hexlify'](_0xb9e393),_0x58ecc9=utils_1$18['RedstoneCommon']['timeout'](this['executeCallWithAgreement'](_0x20e5f1,_0x1e48c6),this['providerWithFallbackConfig']['allProvidersOperationTimeout'],'Agreement\x20provider\x20after\x20'+this['providerWithFallbackConfig']['allProvidersOperationTimeout']+'\x20[ms]\x20during\x20call');return await _0x58ecc9;}async['getBalance'](_0x387ece,_0x216ed9){utils_1$18['RedstoneCommon']['assert'](_0x216ed9||!this['agreementConfig']['requireExplicitBlockTag'],'When\x20using\x20providerWithAgreement,\x20blockTag\x20has\x20to\x20be\x20passed\x20explicitly'),_0x216ed9??=await this['getBlockNumber']();const _0x4fc130=async({provider:_0x316687})=>({'result':await _0x316687['getBalance'](_0x387ece,_0x216ed9)['then'](_0x3ab4a5=>_0x3ab4a5['toString']()),'blockNumberFromProvider':Number(_0x216ed9['toString']())}),_0x5695ca=await this['executeWithAgreement'](_0x4fc130,'getBalance',(0, common_1$4['convertBlockTagToNumber'])(_0x216ed9)),_0x4dff4a=ethers_1$b['BigNumber']['from'](_0x5695ca);return _0x4dff4a;}['assertValidBlockNumber'](_0xabc6bd,_0x2bcf46){const _0x2c93af=this['lastBlockNumberForProvider'][_0x2bcf46];utils_1$18['RedstoneCommon']['assert'](_0xabc6bd>0x0,'provider='+_0x2bcf46+'\x20returned\x20block_number='+_0xabc6bd+',\x20block_number\x20must\x20be\x20>\x200');if(utils_1$18['RedstoneCommon']['isDefined'](_0x2c93af)){const {blockNumber:_0x52dd86}=_0x2c93af;utils_1$18['RedstoneCommon']['assert'](_0x52dd86<=_0xabc6bd,'provider='+_0x2bcf46+'\x20returned\x20block_number='+_0xabc6bd+'\x20previous_one='+_0x52dd86+',\x20block_number\x20can\x27t\x20be\x20<\x20previous_one'),utils_1$18['RedstoneCommon']['assert']((_0xabc6bd-_0x52dd86)*this['chainConfig']['avgBlockTimeMs']<utils_1$18['RedstoneCommon']['hourToMs'](MAX_BLOCK_TIME_AHEAD_HOURS),'provider='+_0x2bcf46+'\x20returned\x20block_number='+_0xabc6bd+'\x20previous_one='+_0x52dd86+',\x20blockNumber\x20can\x27t\x20be\x20ahead\x20more\x20than\x20'+MAX_BLOCK_TIME_AHEAD_HOURS+'\x20hours\x20from\x20previous\x20one');}}async['executeCallWithAgreement'](_0x18d8ae,_0x4fbb5f){const _0x160b93=(0, common_1$4['convertBlockTagToNumber'])(_0x4fbb5f),_0x3ac5d8=async({provider:_0x5eb33e,identifier:_0x27c3a6},_0x1e9c6b)=>{const _0x4767f0=await _0x5eb33e['getBlockNumber']();while(!_0x1e9c6b()&&_0x4767f0<_0x160b93){await utils_1$18['RedstoneCommon']['sleep'](0x1f4);}if(_0x1e9c6b())throw new Error('Provider\x20'+_0x27c3a6+'\x20failed\x20to\x20sync\x20to\x20block\x20'+_0x160b93);return {'result':await _0x5eb33e['call'](_0x18d8ae,_0x4fbb5f),'blockNumberFromProvider':_0x4767f0};},_0x3f061d=await this['executeWithAgreement'](_0x3ac5d8,'call',_0x160b93,this['agreementConfig']['pickResultIfErrorFnPerContract']?.[_0x18d8ae['to']]);return _0x3f061d;}['executeWithAgreement'](_0x4e8d41,_0xd26c33,_0x38711d,_0x3727d1){return new Promise((_0x270650,_0x5f46ed)=>{const _0x24ea8f=[],_0x1e3965=new Map(),_0x214ae1=new Map();let _0x191150=![],_0x30c742=0x0;const _0x2020ea=this['getHealthyProviders'](),_0x13d093=async _0x37ba17=>{const _0x574603=await this['executeOperation'](_0x4e8d41,_0x37ba17,()=>_0x191150,_0xd26c33),_0x227c24=_0x1e3965['get'](_0x574603['result']),_0x112749=_0x214ae1['get'](_0x574603['result']);_0x112749?_0x214ae1['set'](_0x574603['result'],Math['max'](_0x112749,_0x574603['blockNumberFromProvider'])):_0x214ae1['set'](_0x574603['result'],_0x574603['blockNumberFromProvider']),_0x227c24?(_0x1e3965['set'](_0x574603['result'],_0x227c24+0x1),_0x227c24+0x1>=this['agreementConfig']['numberOfProvidersThatHaveToAgree']&&(_0x191150=!![],_0x270650(_0x574603['result']))):_0x1e3965['set'](_0x574603['result'],0x1);},_0x47d27d=()=>{_0x30c742++;if(_0x30c742===_0x2020ea['length']){_0x191150=!![];if(this['agreementConfig']['ignoreAgreementOnInsufficientResponses']&&_0x1e3965['size']>0x0)_0x270650(pickResponseWithMostVotes(_0x1e3965));else {if(_0x3727d1){const _0x284288=_0x3727d1(_0x214ae1);if(_0x284288)return this['logger']['log']('USED\x20HYPEREVM\x20HACK\x20FOR\x20AGREEMENT\x20PROVIDER\x20-\x20picked\x20results\x20which\x20are\x20close\x20enough\x20to\x20other,\x20results:\x20'+JSON['stringify'](Object['fromEntries'](_0x1e3965))+',\x20blockNumberPerResult:\x20'+JSON['stringify'](Object['fromEntries'](_0x214ae1))+',\x20result:\x20'+_0x284288),_0x270650(_0x284288);}_0x5f46ed(this['createAgreementError'](_0x24ea8f,_0xd26c33,_0x38711d,_0x2020ea,_0x1e3965));}}},_0x91dffc=async _0x13ae64=>{try{await withDebugLog(()=>_0x13d093(_0x13ae64),{'description':'rpc='+_0x13ae64['identifier']+'\x20op='+_0xd26c33,'logger':this['logger'],'logValue':![]}),this['updateScore'](_0x13ae64['identifier'],![]);}catch(_0x2e2618){_0x24ea8f['push'](_0x2e2618),this['updateScore'](_0x13ae64['identifier'],!![]);}finally{_0x47d27d();}};_0x2020ea['forEach'](_0x91dffc);});}['createAgreementError'](_0x551a73,_0x745fcc,_0xad466,_0x491b3a,_0x2e315a){const _0x31b8ec=_0x491b3a['length']-_0x551a73['length'];let _0x2990d5='';return _0x31b8ec>=this['agreementConfig']['minimalProvidersCount']&&(_0x2990d5='Providers\x20results:\x20'+JSON['stringify'](Object['fromEntries'](_0x2e315a['entries']()))),new AggregateError(_0x551a73,'operation='+_0x745fcc+'\x20Failed\x20to\x20find\x20at\x20least\x20'+this['agreementConfig']['numberOfProvidersThatHaveToAgree']+'\x20agreeing\x20providers\x20at\x20block\x20'+_0xad466+';\x20'+_0x31b8ec+'\x20providers\x20responded\x20with\x20success;\x20'+_0x2990d5);}async['executeOperation'](_0x4bb666,_0x48e33d,_0x2f1de1,_0x44d23e){let _0x343246=![];const _0xf35b00=()=>_0x2f1de1()||_0x343246;try{return await utils_1$18['RedstoneCommon']['timeout'](_0x4bb666(_0x48e33d,_0xf35b00),this['providerWithFallbackConfig']['singleProviderOperationTimeout'],'provider='+_0x48e33d['identifier']+'\x20'+_0x44d23e+'\x20timeout\x20after\x20'+this['providerWithFallbackConfig']['singleProviderOperationTimeout']);}catch(_0x5a52ce){_0x343246=!![];throw _0x5a52ce;}}}ProviderWithAgreement$1['ProviderWithAgreement']=ProviderWithAgreement;async function withDebugLog(_0x1eaf55,_0x117561={'logValue':![],'description':'','logger':(0, utils_1$18['loggerFactory'])('defaultLogger')}){const _0x1b69f2=performance['now']();try{const _0xaf8236=await _0x1eaf55();return _0x117561['logger']['debug'](''+_0x117561['description'],{'duration':performance['now']()-_0x1b69f2,'value':_0x117561['logValue']?_0xaf8236:'hidden'}),_0xaf8236;}catch(_0x1bf03c){_0x117561['logger']['debug'](''+_0x117561['description'],{'duration':performance['now']()-_0x1b69f2,'error':utils_1$18['RedstoneCommon']['stringifyError'](_0x1bf03c)});throw _0x1bf03c;}}function pickResponseWithMostVotes(_0x5bc0a7){const _0x3ab433=lodash_1$8['default']['maxBy']([..._0x5bc0a7['entries']()],([_0x22d1b2,_0x4c8240])=>_0x4c8240);return utils_1$18['RedstoneCommon']['assertThenReturn'](_0x3ab433?.[0x0],'pickResponseWithMostVotes\x20expect\x20as\x20least\x20one\x20entry\x20in\x20map');}

Object['defineProperty'](MegaProviderBuilder$1,'__esModule',{'value':!![]});MegaProviderBuilder$1['MegaProviderBuilder']=void 0x0;const utils_1$17=requireSrc$3(),ethers_1$a=_0x3e9376,ProviderWithAgreement_1$1=ProviderWithAgreement$1,ProviderWithFallback_1$1=ProviderWithFallback;class MegaProviderBuilder{['options'];['factories'];constructor(_0x5b1ade){this['options']=_0x5b1ade,this['factories']=this['buildProvidersFactories']();}['addDecorator'](_0x1c5130,_0x11ddf8=!![]){return _0x11ddf8&&(this['factories']=this['factories']['map'](_0x1c5130)),this;}['agreement'](_0x11052e,_0x37f39d=!![]){if(_0x37f39d){const _0x307169=new ProviderWithAgreement_1$1['ProviderWithAgreement'](this['factories']['map'](_0x5999f1=>_0x5999f1()),_0x11052e);this['factories']=[()=>_0x307169];}return this;}['fallback'](_0x3c188b,_0x19d671=!![]){if(_0x19d671){const _0x15d04a=new ProviderWithFallback_1$1['ProviderWithFallback'](this['factories']['map'](_0x2c981c=>_0x2c981c()),_0x3c188b);this['factories']=[()=>_0x15d04a];}return this;}['build'](){return utils_1$17['RedstoneCommon']['assert'](this['factories']['length']===0x1,'MegaProviderBuilder\x20should\x20always\x20return\x20a\x20single\x20provider.\x20Please\x20use\x20agreement\x20or\x20fallback\x20option.\x20Options\x20used\x20'+JSON['stringify'](this['options'])),this['factories'][0x0]();}['buildProvidersFactories'](){return this['options']['rpcUrls']['map'](_0x3770fa=>()=>{const _0x5881a0=new ethers_1$a['providers']['StaticJsonRpcProvider']({'url':_0x3770fa,'timeout':this['options']['timeout'],'throttleLimit':this['options']['throttleLimit']},this['options']['network']);return this['options']['pollingInterval']&&(_0x5881a0['pollingInterval']=this['options']['pollingInterval']),_0x5881a0;});}}MegaProviderBuilder$1['MegaProviderBuilder']=MegaProviderBuilder;

var MetricDecorator = {};

Object['defineProperty'](MetricDecorator,'__esModule',{'value':!![]});MetricDecorator['CallMetricDecorator']=CallMetricDecorator;MetricDecorator['GetBlockNumberMetricDecorator']=GetBlockNumberMetricDecorator;const influxdb_client_1=_0x3d0e8d,common_1$3=common;function CallMetricDecorator(_0x25eec5,_0x1b3345){const _0x115b0a=()=>{const _0x4229f8=_0x25eec5(),{chainId:_0x53fca8,url:_0x1bf963}=(0, common_1$3['getProviderNetworkInfo'])(_0x4229f8),_0x536804=_0x4229f8['call']['bind'](_0x4229f8);return _0x4229f8['call']=async(_0x46a096,_0x3b0984)=>{const _0xabcc45=performance['now']();let _0x402683=![];try{const _0x2f9a80=await _0x536804(_0x46a096,_0x3b0984);return _0x402683=_0x2f9a80==='0x',_0x2f9a80;}catch(_0x5dbdae){_0x402683=!![];throw _0x5dbdae;}finally{const _0x21039d=performance['now'](),_0x2c666e=new influxdb_client_1['Point']('rpc_provider')['tag']('op','call')['tag']('chainId',_0x53fca8['toString']())['tag']('url',_0x1bf963)['tag']('isFailure',_0x402683['toString']())['floatField']('duration',_0x21039d-_0xabcc45)['timestamp'](Date['now']());_0x1b3345(_0x2c666e);}},_0x4229f8;};return _0x115b0a;}function GetBlockNumberMetricDecorator(_0x1a5659,_0x1550d1){const _0x11e30c=()=>{const _0x2ba59f=_0x1a5659(),{chainId:_0x49beee,url:_0x155c5e}=(0, common_1$3['getProviderNetworkInfo'])(_0x2ba59f),_0x534c18=_0x2ba59f['getBlockNumber']['bind'](_0x2ba59f);return _0x2ba59f['getBlockNumber']=async()=>{const _0xd73c6b=performance['now']();let _0x2e3f4a=![],_0x32d52e=-0x1;try{const _0x39aacf=await _0x534c18();return _0x32d52e=_0x39aacf,_0x39aacf;}catch(_0x4ab662){_0x2e3f4a=!![];throw _0x4ab662;}finally{const _0x5afe7d=performance['now'](),_0x13d7bc=new influxdb_client_1['Point']('rpc_provider')['tag']('op','getBlockNumber')['tag']('chainId',_0x49beee['toString']())['tag']('url',_0x155c5e)['tag']('isFailure',_0x2e3f4a['toString']())['floatField']('blockNumber',_0x32d52e)['floatField']('duration',_0x5afe7d-_0xd73c6b)['timestamp'](Date['now']());_0x1550d1(_0x13d7bc);}},_0x2ba59f;};return _0x11e30c;}

var Multicall3Caller = {};

Object['defineProperty'](Multicall3Caller,'__esModule',{'value':!![]});Multicall3Caller['safeExecuteMulticall3']=safeExecuteMulticall3;const chain_configs_1$2=src$9,utils_1$16=requireSrc$3();function rawMulticall3(_0x308180,_0x3934b4,_0x48639c){return _0x308180['callStatic']['aggregate3'](_0x3934b4,{'blockTag':_0x48639c});}const logger$5=(0, utils_1$16['loggerFactory'])('multicall3'),chainConfigs$1=(0, chain_configs_1$2['getLocalChainConfigs'])();async function safeExecuteMulticall3(_0x205b09,_0x1038a0,_0x4c5203,_0x3e0feb,_0x46d431){let _0x2ec284=-0x1;try{_0x2ec284=(await _0x205b09['getNetwork']())['chainId'];const _0x207fc3=(0x0,chain_configs_1$2['getMulticall3'])({'overrideAddress':_0x46d431,'signerOrProvider':_0x205b09},(0x0,chain_configs_1$2['getChainConfigByNetworkId'])(chainConfigs$1,_0x2ec284));return await rawMulticall3(_0x207fc3,_0x1038a0,_0x3e0feb);}catch(_0x564e59){if(_0x4c5203)return logger$5['error']('Whole\x20multicall3\x20chainId='+_0x2ec284+'\x20failed.\x20Will\x20fallback\x20to\x20'+_0x1038a0['length']+'\x20separate\x20calls.\x20Error:\x20'+utils_1$16['RedstoneCommon']['stringifyError'](_0x564e59)),await Promise['all'](_0x1038a0['map'](_0x4b1b62=>safeFallbackCall(_0x205b09,_0x4b1b62,_0x3e0feb)));else {const _0x46cbc5='Whole\x20multicall3\x20chainId='+_0x2ec284+'\x20failed.\x20Will\x20not\x20fallback.\x20Error:\x20'+utils_1$16['RedstoneCommon']['stringifyError'](_0x564e59);return _0x1038a0['map'](()=>({'returnData':'0x','fallbackRejectReason':new Error(_0x46cbc5),'success':![]}));}}}async function safeFallbackCall(_0xc4ff74,_0x2ecef5,_0x583f81){try{const _0x301192=await _0xc4ff74['call']({'to':_0x2ecef5['target'],'data':_0x2ecef5['callData']},_0x583f81);return logger$5['debug']('fallback\x20call\x20succeeded\x20to='+_0x2ecef5['target']+'\x20data='+_0x2ecef5['callData']+'\x20blockTag='+_0x583f81),{'returnData':_0x301192,'success':!![]};}catch(_0x1fd6f6){return logger$5['log']('fallback\x20call\x20failed\x20to='+_0x2ecef5['target']+'\x20data='+_0x2ecef5['callData']+'\x20blockTag='+_0x583f81),{'returnData':'0x','fallbackRejectReason':_0x1fd6f6,'success':![]};}}

var MulticallDecorator$1 = {};

var MulticallBuffer$1 = {};

Object['defineProperty'](MulticallBuffer$1,'__esModule',{'value':!![]});MulticallBuffer$1['MulticallBuffer']=void 0x0;const common_1$2=common,hexSizeToBytesSize=_0x58dbd9=>Math['floor'](_0x58dbd9/0x2);class MulticallBuffer{['maxCallsCount'];['maxCallDataSize'];constructor(_0x3d454d,_0x29ab9d){this['maxCallsCount']=_0x3d454d,this['maxCallDataSize']=_0x29ab9d;}['_state']=new Map();['push'](_0x471f87,_0x425f53){const _0x25c336=blockTagToBlockId(_0x471f87),_0x5f2160=this['_state']['get'](_0x25c336);_0x5f2160?_0x5f2160['push'](_0x425f53):this['_state']['set'](_0x25c336,[_0x425f53]);}['willCallDataSizeBeExceeded'](_0x33cb7e,_0x40e3f7){return this['callDataSize'](_0x33cb7e)+hexSizeToBytesSize(_0x40e3f7['callData']['length'])>this['maxCallDataSize'];}['isCallsCountFull'](_0x396703){const _0x495930=blockTagToBlockId(_0x396703);if(!this['_state']['has'](_0x495930))return ![];return this['_state']['get'](_0x495930)['length']===this['maxCallsCount'];}['callDataSize'](_0x30ad5e){const _0x5dccb3=blockTagToBlockId(_0x30ad5e),_0x46bf1e=this['_state']['get'](_0x5dccb3)?.['reduce']((_0x2d412e,_0x9086dd)=>_0x2d412e+_0x9086dd['callData']['length'],0x0)??0x0;return hexSizeToBytesSize(_0x46bf1e);}['isEmpty'](_0x79068){const _0x5655fb=blockTagToBlockId(_0x79068);return !this['_state']['has'](_0x5655fb);}['flush'](_0x2139c1){const _0x7ba30d=blockTagToBlockId(_0x2139c1),_0x3a2923=this['_state']['get'](_0x7ba30d);if(!_0x3a2923)return [];return this['reset'](_0x7ba30d),_0x3a2923;}['pickAll'](){const _0x27c934=this['_state']['entries']();return _0x27c934;}['reset'](_0x5bf2a0){this['_state']['delete'](_0x5bf2a0);}}MulticallBuffer$1['MulticallBuffer']=MulticallBuffer;function blockTagToBlockId(_0x4e3e12){switch(_0x4e3e12){case undefined:case'earliest':case'latest':case'pending':return -0x1;default:return (0, common_1$2['convertBlockTagToNumber'])(_0x4e3e12);}}

Object['defineProperty'](MulticallDecorator$1,'__esModule',{'value':!![]});MulticallDecorator$1['MulticallDecorator']=MulticallDecorator;const chain_configs_1$1=src$9,utils_1$15=requireSrc$3(),zod_1$6=_0x28081a,Multicall3Caller_1=Multicall3Caller,MulticallBuffer_1=MulticallBuffer$1,chainConfigs=(0, chain_configs_1$1['getLocalChainConfigs'])();async function prepareMulticall3Request(_0x2daab8,_0x432240){const _0x5edee7={'callData':await _0x2daab8['data'],'target':await _0x2daab8['to'],'allowFailure':!![]},_0x5d0b2=(0, chain_configs_1$1['getChainConfigByNetworkId'])(chainConfigs,_0x432240)['multicall3'];return _0x5d0b2['type']==='RedstoneMulticall3'&&(_0x5edee7['gasLimit']=_0x5d0b2['gasLimitPerCall']),_0x5edee7;}const logger$4=(0, utils_1$15['loggerFactory'])('MulticallProvider'),parseMulticallConfig=_0x507ae9=>{return {'multicallAddress':_0x507ae9['multicallAddress']??utils_1$15['RedstoneCommon']['getFromEnv']('MULTICALL_CONTRACT_ADDRESS',zod_1$6['z']['string']()['optional']()),'autoResolveInterval':_0x507ae9['autoResolveInterval']??utils_1$15['RedstoneCommon']['getFromEnv']('MULTICALL_AUTO_RESOLVE_INTERVAL',zod_1$6['z']['number']()['default'](0x64)),'maxCallsCount':_0x507ae9['maxCallsCount']??utils_1$15['RedstoneCommon']['getFromEnv']('MULTICALL_MAX_CALLS_COUNT',zod_1$6['z']['number']()['default'](0xf)),'maxCallDataSize':_0x507ae9['maxCallDataSize']??utils_1$15['RedstoneCommon']['getFromEnv']('MULTICALL_MAX_CALL_DATA_SIZE',zod_1$6['z']['number']()['default'](0xc350)),'retryBySingleCalls':_0x507ae9['retryBySingleCalls']??utils_1$15['RedstoneCommon']['getFromEnv']('MULTICALL_RETRY_BY_SINGLE_CALLS',zod_1$6['z']['boolean']()['default'](!![]))};};function MulticallDecorator(_0x3c5bee,_0x1a6c02={}){const _0x1d71c1=parseMulticallConfig(_0x1a6c02),_0x1b6f69=_0x3c5bee(),_0x1ebbde=utils_1$15['RedstoneCommon']['cloneClassInstance'](_0x1b6f69),_0x1421bf=new MulticallBuffer_1['MulticallBuffer'](_0x1d71c1['maxCallsCount'],_0x1d71c1['maxCallDataSize']);let _0x1ab24a=undefined;const _0xa0a2f1=_0x1b6f69['getNetwork']()['then'](_0x4f53b1=>_0x4f53b1['chainId']),_0x5e08dc=_0xa234f=>{const _0x41c360=_0x1421bf['callDataSize'](_0xa234f),_0x2f7c52=_0x1421bf['flush'](_0xa234f);logger$4['debug']('Executing\x20request\x20chainId='+_0x1ab24a+'\x20blockTag='+_0xa234f+'\x20callsCount='+_0x2f7c52['length']+'\x20callDataSize='+_0x41c360+'\x20[bytes]'),(0, Multicall3Caller_1['safeExecuteMulticall3'])(_0x1b6f69,_0x2f7c52,_0x1d71c1['retryBySingleCalls'],_0xa234f,_0x1d71c1['multicallAddress'])['then'](_0x21c010=>{for(let _0xdded1b=0x0;_0xdded1b<_0x21c010['length'];_0xdded1b++){_0x21c010[_0xdded1b]['fallbackRejectReason']?_0x2f7c52[_0xdded1b]['reject'](_0x21c010[_0xdded1b]['fallbackRejectReason']):_0x2f7c52[_0xdded1b]['resolve'](_0x21c010[_0xdded1b]['returnData']);}})['catch'](_0x4d6c91=>{logger$4['log']('call\x20failed\x20rejecting\x20'+_0x2f7c52['length']+'\x20bounded\x20promises');for(const _0x5e945a of _0x2f7c52){_0x5e945a['reject'](_0x4d6c91);}});},_0x15803d=async(_0x4c61f5,_0x18769e)=>{_0x1ab24a=await _0xa0a2f1;const _0x18780c=await prepareMulticall3Request(_0x4c61f5,_0x1ab24a),_0x2b73e6=await _0x18769e,{promise:_0x202248,resolve:_0x68b666,reject:_0x161bf8}=createDeferredPromise(),_0x3bedbc={..._0x18780c,'blockTag':_0x2b73e6,'resolve':_0x68b666,'reject':_0x161bf8};return _0x1421bf['willCallDataSizeBeExceeded'](_0x2b73e6,_0x3bedbc)&&_0x5e08dc(_0x2b73e6),_0x1421bf['push'](_0x2b73e6,_0x3bedbc),_0x1421bf['isCallsCountFull'](_0x2b73e6)&&_0x5e08dc(_0x2b73e6),await _0x202248;},_0x7beedd=()=>{const _0x2254c6=_0x1421bf['pickAll']();for(const [_0x23c62a,_0xad1ee4]of _0x2254c6){_0x5e08dc(_0xad1ee4[0x0]['blockTag']);}};if(_0x1d71c1['autoResolveInterval']>0x0){const _0x34ec18=setInterval(_0x7beedd,_0x1d71c1['autoResolveInterval']);_0x34ec18['unref']();}return _0x1ebbde['call']=_0x15803d,()=>_0x1ebbde;}function createDeferredPromise(){let _0x2f4c92,_0x1ea78d;const _0x3a8448=new Promise((_0x20a5b6,_0x227d34)=>{_0x2f4c92=_0x20a5b6,_0x1ea78d=_0x227d34;});return {'promise':_0x3a8448,'resolve':_0x2f4c92,'reject':_0x1ea78d};}

var providerDecorators = {};

var CacheCallDecorator = {};

Object['defineProperty'](CacheCallDecorator,'__esModule',{'value':!![]});CacheCallDecorator['CallCacheDecorator']=CallCacheDecorator;const utils_1$14=requireSrc$3();function CallCacheDecorator(_0xa7e603,_0x1c31ec){const _0x2913b7=()=>{const _0x113364=_0xa7e603(),_0x4c0984=_0x113364['call']['bind'](_0x113364),_0x443d59=utils_1$14['RedstoneCommon']['memoize']({'functionToMemoize':_0x4c0984,'ttl':_0x1c31ec['ttl'],'cacheKeyBuilder':txCacheKeyBuilder,'cleanEveryNIteration':0x3e8});return _0x113364['call']=async function(_0x3524df,_0x57ee31){return await _0x57ee31?await _0x443d59(_0x3524df,_0x57ee31):await _0x4c0984(_0x3524df,_0x57ee31);},_0x113364;};return _0x2913b7;}const txCacheKeyBuilder=async(_0x45937d,_0x27b8ad)=>[String(await _0x45937d['chainId']),String(await _0x45937d['to']),String(await _0x45937d['from']),await hashBytesLikeValue(_0x45937d['data']),String(await _0x27b8ad)]['join']('#');async function hashBytesLikeValue(_0x28682b){const _0x498ccd=await _0x28682b;if(_0x498ccd)return utils_1$14['RedstoneCrypto']['sha256ToHex'](_0x498ccd);return '';}

var Treat0xAsErrorDecorator$1 = {};

Object['defineProperty'](Treat0xAsErrorDecorator$1,'__esModule',{'value':!![]});Treat0xAsErrorDecorator$1['Treat0xAsErrorDecorator']=Treat0xAsErrorDecorator;const common_1$1=common;function Treat0xAsErrorDecorator(_0x4dcb8d){const _0x1e1883=()=>{const _0x24e76d=_0x4dcb8d(),_0x51f9cc=_0x24e76d['call']['bind'](_0x24e76d),_0x13ad27=(0, common_1$1['getProviderNetworkInfo'])(_0x24e76d);return _0x24e76d['call']=async(_0x290d41,_0x400131)=>{const _0x1ef076=await _0x51f9cc(_0x290d41,_0x400131);if(_0x1ef076==='0x')throw new Error('Provider\x20'+_0x13ad27['url']+'\x20has\x20returned\x200x\x20as\x20response');return _0x1ef076;},_0x24e76d;};return _0x1e1883;}

var TxsDumpDecorator = {};

Object['defineProperty'](TxsDumpDecorator,'__esModule',{'value':!![]});TxsDumpDecorator['TxDumpDecorator']=TxDumpDecorator;const fs_1$2=_0x1c92a7;function TxDumpDecorator(_0x5f0cbb){const _0x1249d9=()=>{const _0x34c6f3=_0x5f0cbb(),_0x472730=_0x34c6f3['call']['bind'](_0x34c6f3),_0x3bab82=_0x34c6f3['getNetwork']()['then'](_0x3e2e8c=>_0x3e2e8c['chainId']);return _0x34c6f3['call']=async(_0x2df6e2,_0x346ce8)=>{const _0x46f7ab={'to':await _0x2df6e2['to'],'callData':await _0x2df6e2['data'],'chainId':await _0x3bab82};return (0, fs_1$2['appendFileSync'])('transactions_dump.json',JSON['stringify'](_0x46f7ab)+',\x0a'),await _0x472730(_0x2df6e2,_0x346ce8);},_0x34c6f3;};return _0x1249d9;}

(function(_0x4110a5){Object['defineProperty'](_0x4110a5,'__esModule',{'value':!![]}),_0x4110a5['TxDumpDecorator']=_0x4110a5['Treat0xAsErrorDecorator']=_0x4110a5['MulticallDecorator']=_0x4110a5['GetBlockNumberMetricDecorator']=_0x4110a5['CallMetricDecorator']=_0x4110a5['CallCacheDecorator']=void 0x0;var _0x87520e=CacheCallDecorator;Object['defineProperty'](_0x4110a5,'CallCacheDecorator',{'enumerable':!![],'get':function(){return _0x87520e['CallCacheDecorator'];}});var _0x2a14f0=MetricDecorator;Object['defineProperty'](_0x4110a5,'CallMetricDecorator',{'enumerable':!![],'get':function(){return _0x2a14f0['CallMetricDecorator'];}}),Object['defineProperty'](_0x4110a5,'GetBlockNumberMetricDecorator',{'enumerable':!![],'get':function(){return _0x2a14f0['GetBlockNumberMetricDecorator'];}});var _0x1c02d8=MulticallDecorator$1;Object['defineProperty'](_0x4110a5,'MulticallDecorator',{'enumerable':!![],'get':function(){return _0x1c02d8['MulticallDecorator'];}});var _0x280f6a=Treat0xAsErrorDecorator$1;Object['defineProperty'](_0x4110a5,'Treat0xAsErrorDecorator',{'enumerable':!![],'get':function(){return _0x280f6a['Treat0xAsErrorDecorator'];}});var _0x5c3978=TxsDumpDecorator;Object['defineProperty'](_0x4110a5,'TxDumpDecorator',{'enumerable':!![],'get':function(){return _0x5c3978['TxDumpDecorator'];}});}(providerDecorators));getDefaultExportFromCjs(providerDecorators);

var SageOfChains$1 = {};

Object['defineProperty'](SageOfChains$1,'__esModule',{'value':!![]});SageOfChains$1['SageOfChains']=void 0x0;const chain_configs_1=src$9,utils_1$13=requireSrc$3(),logger$3=(0, utils_1$13['loggerFactory'])('SageOfChains');class SageOfChains{['providerFactory'];['networkIdToProviderFactory']={};['networkIdToProvider']={};constructor(_0x3a8702,_0x26f159){this['providerFactory']=_0x26f159,_0x3a8702['forEach'](_0x1a5d02=>this['fillProviderFactory'](_0x1a5d02));}['fillProviderFactory'](_0x264f5a){this['networkIdToProviderFactory'][_0x264f5a]=this['providerFactory'];}['getProvider'](_0x2289b1){const _0x534009=this['networkIdToProvider'][_0x2289b1];if(_0x534009)return _0x534009;const _0x4cc7e4=this['networkIdToProviderFactory'][_0x2289b1];if(!_0x4cc7e4)throw new Error('SageOfChains:\x20missing\x20provider\x20factory\x20for\x20'+_0x2289b1);const _0x41d5c2=SageOfChains['getChainConfig'](_0x2289b1),_0x302acc=_0x4cc7e4(_0x41d5c2);return this['networkIdToProvider'][_0x2289b1]=_0x302acc,_0x302acc;}static['getChainConfig'](_0x29ba6a){const _0x4c1c99=(0, chain_configs_1['getLocalChainConfigsByNetworkId'])(),_0x3efa15=_0x4c1c99[_0x29ba6a];if(!_0x3efa15)throw new Error('SageOfChains:\x20missing\x20local\x20chain\x20config\x20for\x20'+_0x29ba6a);return _0x3efa15;}['getProvidersForRequiredNetworkIds'](_0x1a228c){return _0x1a228c['map'](_0x4cb5ab=>{return [_0x4cb5ab,this['getProvider'](_0x4cb5ab)];});}async['getBlockNumbersPerChain'](_0x424570){const _0x3736ba=await Promise['allSettled'](Object['entries'](this['networkIdToProviderFactory'])['map'](async([_0x501204,_0x17a3de])=>{const _0x143094=SageOfChains['getChainConfig'](utils_1$13['NetworkIdSchema']['parse'](_0x501204)),_0x119ec1=_0x17a3de(_0x143094),_0x487654=await getBlockNumberWithRetries(_0x119ec1,_0x424570);return [_0x501204,_0x487654];})),_0x4e28f4=_0x3736ba['map']((_0x2bb487,_0x332535)=>{if(_0x2bb487['status']==='fulfilled')return _0x2bb487['value'];return logger$3['log']('Failed\x20to\x20fetch\x20blockNumber\x20for\x20'+Object['keys'](this['networkIdToProviderFactory'])[_0x332535]+'\x20after\x202\x20retries:\x20'+utils_1$13['RedstoneCommon']['stringifyError'](_0x2bb487['reason'])),![];})['filter'](_0xf1ffc9=>!!_0xf1ffc9);return Object['fromEntries'](_0x4e28f4);}}SageOfChains$1['SageOfChains']=SageOfChains;const getBlockNumberWithRetries=(_0x59165b,_0x26676f)=>utils_1$13['RedstoneCommon']['timeout'](utils_1$13['RedstoneCommon']['retry']({'waitBetweenMs':0x32,'maxRetries':0x2,'fn':()=>_0x59165b['getBlockNumber'](),'logger':logger$3['log']})(),_0x26676f);

var CustomGasOracles = {};

var blockscoutStatsGasOracle$1 = {};

var __importDefault$c=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x5de4e9){return _0x5de4e9&&_0x5de4e9['__esModule']?_0x5de4e9:{'default':_0x5de4e9};};Object['defineProperty'](blockscoutStatsGasOracle$1,'__esModule',{'value':!![]});blockscoutStatsGasOracle$1['blockscoutStatsGasOracle']=void 0x0;const utils_1$12=requireSrc$3(),axios_1$1=__importDefault$c(_0x1cb33a),ONE_GWEI$1=0x3b9aca00,getBlockscoutStats=utils_1$12['RedstoneCommon']['memoize']({'functionToMemoize':_0x4c4229=>axios_1$1['default']['get'](_0x4c4229+'/api/v2/stats'),'ttl':0x13ec}),blockscoutStatsGasOracle=_0x44e928=>async()=>{const {data:_0xa432db}=await getBlockscoutStats(_0x44e928),{gas_prices:_0x47b896}=_0xa432db;if(!_0x47b896||!_0x47b896['fast'])throw new Error('Failed\x20to\x20fetch\x20price\x20from\x20oracle');return {'gasPrice':Math['round'](_0x47b896['fast']*ONE_GWEI$1)};};blockscoutStatsGasOracle$1['blockscoutStatsGasOracle']=blockscoutStatsGasOracle;

var ethereum = {};

var __importDefault$b=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x4f3276){return _0x4f3276&&_0x4f3276['__esModule']?_0x4f3276:{'default':_0x4f3276};};Object['defineProperty'](ethereum,'__esModule',{'value':!![]});ethereum['getEthFeeFromGasOracle']=void 0x0;const utils_1$11=requireSrc$3(),axios_1=__importDefault$b(_0x1cb33a),ONE_GWEI=0x3b9aca00,getEthGasRequest=utils_1$11['RedstoneCommon']['memoize']({'functionToMemoize':()=>axios_1['default']['get']('https://api.etherscan.io/api?module=gastracker&action=gasoracle'),'ttl':0x13ec}),getEthFeeFromGasOracle=async()=>{const {data:_0x227231}=await getEthGasRequest(),{suggestBaseFee:_0x128cdb,FastGasPrice:_0x2ddb6f}=_0x227231['result'];if(!_0x128cdb||!_0x2ddb6f)throw new Error('Failed\x20to\x20fetch\x20price\x20from\x20oracle');return {'maxFeePerGas':Math['round'](_0x2ddb6f*ONE_GWEI),'maxPriorityFeePerGas':Math['round']((_0x2ddb6f-_0x128cdb)*ONE_GWEI)};};ethereum['getEthFeeFromGasOracle']=getEthFeeFromGasOracle;

var kava = {};

Object['defineProperty'](kava,'__esModule',{'value':!![]});kava['kavaGasOracle']=void 0x0;const ONE_MICRO_KAVA=0xe8d4a51000,kavaGasOracle=()=>Promise['resolve']({'gasPrice':0.26*ONE_MICRO_KAVA});kava['kavaGasOracle']=kavaGasOracle;

var merlin = {};

Object['defineProperty'](merlin,'__esModule',{'value':!![]});merlin['merlinGasOracle']=void 0x0;const MERLIN_EMPIRIC_MINIMUM_GAS_PRICE=0.05*0x3b9aca00,merlinGasOracle=(_0x1a6f2d,_0x525a5c)=>{if(_0x525a5c>0x1)throw new Error('Merlin\x20gas\x20oracles\x20works\x20only\x20for\x20attempt=1');return Promise['resolve']({'gasPrice':MERLIN_EMPIRIC_MINIMUM_GAS_PRICE});};merlin['merlinGasOracle']=merlinGasOracle;

Object['defineProperty'](CustomGasOracles,'__esModule',{'value':!![]});CustomGasOracles['CHAIN_ID_TO_GAS_ORACLE']=void 0x0;const blockscout_stats_gas_oracle_1=blockscoutStatsGasOracle$1,ethereum_1=ethereum,kava_1=kava,merlin_1=merlin,ETHERLINK_GHOSTNET_BLOCKSCOUT_EXPLORER_BASE_URL='https://testnet.explorer.etherlink.com';CustomGasOracles['CHAIN_ID_TO_GAS_ORACLE']={0x1:ethereum_1['getEthFeeFromGasOracle'],0x8ae:kava_1['kavaGasOracle'],0x1f47b:(0, blockscout_stats_gas_oracle_1['blockscoutStatsGasOracle'])(ETHERLINK_GHOSTNET_BLOCKSCOUT_EXPLORER_BASE_URL),0x1068:merlin_1['merlinGasOracle']};

var Eip1559GasEstimator = {};

var TxDelivery = {};

var AuctionModelGasEstimator = {};

var hasRequiredAuctionModelGasEstimator;function requireAuctionModelGasEstimator(){if(hasRequiredAuctionModelGasEstimator)return AuctionModelGasEstimator;hasRequiredAuctionModelGasEstimator=0x1,Object['defineProperty'](AuctionModelGasEstimator,'__esModule',{'value':!![]}),AuctionModelGasEstimator['AuctionModelGasEstimator']=void 0x0;const _0x525555=requireTxDelivery();class _0x134079{['opts'];constructor(_0xc51b0f){this['opts']=_0xc51b0f;}async['getFees'](_0x35dcb5){return {'gasPrice':(0, _0x525555['unsafeBnToNumber'])(await _0x35dcb5['getGasPrice']())};}['scaleFees'](_0x555d58,_0x277054){const _0x3148e5=this['opts']['multiplier']**_0x277054,_0x388602=Math['round'](_0x555d58['gasPrice']*_0x3148e5),_0x36fccb={'gasPrice':_0x388602};return _0x36fccb;}}return AuctionModelGasEstimator['AuctionModelGasEstimator']=_0x134079,AuctionModelGasEstimator;}

var GasLimitEstimator$1 = {};

Object['defineProperty'](GasLimitEstimator$1,'__esModule',{'value':!![]});GasLimitEstimator$1['GasLimitEstimator']=void 0x0;const utils_1$10=requireSrc$3();class GasLimitEstimator{['opts'];constructor(_0x23fd06){this['opts']=_0x23fd06,utils_1$10['RedstoneCommon']['assert'](!(_0x23fd06['gasLimit']&&_0x23fd06['twoDimensionalFees']),'gasLimit\x20and\x20twoDimensionalFees\x20are\x20exclusive\x20configurations.\x20Don\x27t\x20set\x20gasLimit\x20when\x20u\x20are\x20using\x20twoDimensionalFees\x20it\x20will\x20be\x20fetched');}async['getGasLimit'](_0x1aa372,_0x2ecde9){if(this['opts']['gasLimit'])return this['opts']['gasLimit'];const _0x189f75=await _0x1aa372['send']('eth_estimateGas',[_0x2ecde9,'pending']);return Math['round'](Number(_0x189f75['toString']())*this['opts']['gasLimitMultiplier']);}['scaleGasLimit'](_0x19a114,_0x2d6ade){if(!this['opts']['twoDimensionalFees'])return _0x19a114;return Math['round'](_0x19a114*this['opts']['gasLimitMultiplier']**_0x2d6ade);}}GasLimitEstimator$1['GasLimitEstimator']=GasLimitEstimator;

var hasRequiredTxDelivery;function requireTxDelivery(){if(hasRequiredTxDelivery)return TxDelivery;return hasRequiredTxDelivery=0x1,function(_0x44e372){var _0x2293f7=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x451710){return _0x451710&&_0x451710['__esModule']?_0x451710:{'default':_0x451710};};Object['defineProperty'](_0x44e372,'__esModule',{'value':!![]}),_0x44e372['TxDelivery']=_0x44e372['DEFAULT_TX_DELIVERY_OPTS']=_0x44e372['unsafeBnToNumber']=_0x44e372['NewestBlockTypeEnum']=void 0x0;const _0x125c00=_0x307f7f,_0x3c9b9c=requireSrc$3(),_0x5a79ab=_0x3e9376,_0x56f4fb=_0x2293f7(_0x62d7dc),_0x1d50a0=_0x28081a,_0x5cdd2a=common,_0x59983a=requireAuctionModelGasEstimator(),_0x2fc179=CustomGasOracles,_0xd11766=requireEip1559GasEstimator(),_0x58eab4=GasLimitEstimator$1;var _0x1db110;((function(_0x1651ae){_0x1651ae[_0x1651ae['AlreadyDelivered']=0x0]='AlreadyDelivered',_0x1651ae[_0x1651ae['Underpriced']=0x1]='Underpriced',_0x1651ae[_0x1651ae['UnknownError']=0x2]='UnknownError',_0x1651ae[_0x1651ae['InsufficientFunds']=0x3]='InsufficientFunds',_0x1651ae[_0x1651ae['AlreadyKnown']=0x4]='AlreadyKnown';})(_0x1db110||(_0x1db110={})),_0x44e372['NewestBlockTypeEnum']=_0x1d50a0['z']['enum'](['latest','pending']));const _0x517a3b=_0x54fbc7=>Number(_0x54fbc7['toString']());_0x44e372['unsafeBnToNumber']=_0x517a3b;const _0x1f5d78=(0, _0x3c9b9c['loggerFactory'])('TxDelivery');_0x44e372['DEFAULT_TX_DELIVERY_OPTS']={'isAuctionModel':![],'maxAttempts':0x8,'multiplier':1.4,'gasLimitMultiplier':1.2,'percentileOfPriorityFee':0x32,'twoDimensionalFees':![],'gasOracleTimeout':0x1388,'forceDisableCustomGasOracle':![],'enforceDecimalNumberOfBlocksForFeeHistory':![],'numberOfBlocksForFeeHistory':0x2,'newestBlockForFeeHistory':'pending','logger':_0x1f5d78['log']['bind'](_0x1f5d78)};class _0x318fb6{['signer'];['provider'];['deferredCallData'];['opts'];['feeEstimator'];['gasLimitEstimator'];['attempt']=0x1;constructor(_0x5526b5,_0x5e518c,_0x127cf7,_0x16e732){this['signer']=_0x5e518c,this['provider']=_0x127cf7,this['deferredCallData']=_0x16e732,this['opts']=_0x56f4fb['default']['merge']({..._0x44e372['DEFAULT_TX_DELIVERY_OPTS']},_0x5526b5),this['feeEstimator']=this['opts']['isAuctionModel']?new _0x59983a['AuctionModelGasEstimator'](this['opts']):new _0xd11766['Eip1559GasEstimator'](this['opts']),this['gasLimitEstimator']=new _0x58eab4['GasLimitEstimator'](this['opts']);}async['deliver'](_0x28cafc){_0x3c9b9c['RedstoneCommon']['assert'](this['attempt']===0x1,'TxDelivery.deliver\x20can\x20be\x20called\x20only\x20once\x20per\x20instance');let _0x4adb17=await this['prepareTransactionRequest'](_0x28cafc),_0x1c0060=undefined;for(this['attempt']=0x1;this['attempt']<=this['opts']['maxAttempts'];this['attempt']++){try{this['logCurrentAttempt'](_0x4adb17),_0x1c0060=await this['signAndSendTx'](_0x4adb17);}catch(_0x4545af){const _0x3c05c6=this['handleTransactionBroadcastError'](_0x4545af,_0x1c0060,_0x4adb17['nonce']);switch(_0x3c05c6){case _0x1db110['AlreadyKnown']:break;case _0x1db110['AlreadyDelivered']:return _0x1c0060;case _0x1db110['Underpriced']:_0x4adb17=await this['updateTxParamsForNextAttempt'](_0x4adb17);continue;case _0x1db110['InsufficientFunds']:this['opts']['logger']('Aborting\x20delivery\x20due\x20to\x20insufficient\x20funds.\x20error='+_0x3c9b9c['RedstoneCommon']['stringifyError'](_0x4545af));throw _0x4545af;default:this['opts']['logger']('Failed\x20to\x20delivery\x20transaction\x20with\x20unknown\x20error.\x20Aborting\x20delivery.\x20error='+_0x3c9b9c['RedstoneCommon']['stringifyError'](_0x4545af));throw _0x4545af;}}await this['waitForTxMining']();const _0x59eaf8=await this['hasNonceIncreased'](_0x4adb17);if(_0x59eaf8)return _0x1c0060;else _0x4adb17=await this['updateTxParamsForNextAttempt'](_0x4adb17);}throw new Error('Failed\x20to\x20deliver\x20transaction\x20after\x20'+this['opts']['maxAttempts']+'\x20attempts');}['logCurrentAttempt'](_0x160cdd){let _0x1a60f6;_0x160cdd['type']==0x0?_0x1a60f6='gasPrice='+_0x160cdd['gasPrice']:_0x1a60f6='maxFeePerGas='+_0x160cdd['maxFeePerGas']+'\x20maxPriorityFeePerGas='+_0x160cdd['maxPriorityFeePerGas'],this['opts']['logger']('Trying\x20to\x20delivery\x20transaction\x20attempt='+this['attempt']+'/'+this['opts']['maxAttempts']+'\x20txNonce='+_0x160cdd['nonce']+'\x20gasLimit='+_0x160cdd['gasLimit']+'\x20'+_0x1a60f6);}async['signAndSendTx'](_0x27c903){const _0x428651=await this['signer']['signTransaction'](_0x27c903),_0x201446=await this['provider']['sendTransaction'](_0x428651);return this['opts']['logger']('Transaction\x20broadcasted\x20successfully'),_0x201446;}async['hasNonceIncreased'](_0x42230c){const _0x20bb1c=await this['signer']['getAddress'](),_0x5506eb=await this['provider']['getTransactionCount'](_0x20bb1c,'latest');return _0x5506eb>_0x42230c['nonce']?(this['opts']['logger']('Transaction\x20mined,\x20nonce\x20changed:\x20'+_0x42230c['nonce']+'\x20=>\x20'+_0x5506eb),!![]):(this['opts']['logger']('Transaction\x20was\x20not\x20delivered\x20yet,\x20account_nonce='+_0x5506eb+'.\x20Trying\x20with\x20new\x20fees\x20..'),![]);}async['waitForTxMining'](){this['opts']['logger']('Waiting\x20'+this['opts']['expectedDeliveryTimeMs']+'\x20[MS]\x20for\x20mining\x20transaction'),await _0x3c9b9c['RedstoneCommon']['sleep'](this['opts']['expectedDeliveryTimeMs']);}['handleTransactionBroadcastError'](_0x3824b2,_0xbbfc9c,_0x30ff67){_0x3c9b9c['RedstoneCommon']['assert']((0, _0x5cdd2a['isEthersError'])(_0x3824b2),'Unknown\x20non\x20ethers\x20error');if(_0x318fb6['isAlreadyKnownError'](_0x3824b2))return this['opts']['logger']('Transaction\x20already\x20known'),_0x1db110['AlreadyKnown'];else {if(_0x318fb6['isNonceExpiredError'](_0x3824b2))return !_0xbbfc9c?(this['opts']['logger']('Transaction\x20with\x20same\x20nonce\x20'+_0x30ff67+'\x20was\x20delivered\x20by\x20someone\x20else\x20orginalError='+_0x3c9b9c['RedstoneCommon']['stringifyError'](_0x3824b2)),_0x1db110['AlreadyDelivered']):(this['opts']['logger']('Nonce\x20expired\x20error:\x20Transaction\x20hash='+_0xbbfc9c['hash']+'\x20nonce='+_0x30ff67+'\x20mined\x20orginalError='+_0x3c9b9c['RedstoneCommon']['stringifyError'](_0x3824b2)),_0x1db110['AlreadyDelivered']);else {if(_0x318fb6['isUnderpricedError'](_0x3824b2))return this['opts']['logger']('Underpriced\x20error\x20occurred,\x20trying\x20with\x20scaled\x20fees\x20without\x20sleep\x20orginalError='+_0x3c9b9c['RedstoneCommon']['stringifyError'](_0x3824b2)),_0x1db110['Underpriced'];else {if(_0x318fb6['isInsufficientFundsError'](_0x3824b2))return this['opts']['logger']('Insufficient\x20funds\x20error\x20occurred,\x20updater\x20doesn\x27t\x20have\x20enough\x20tokens\x20orginalError='+_0x3c9b9c['RedstoneCommon']['stringifyError'](_0x3824b2)),_0x1db110['InsufficientFunds'];}}}return _0x1db110['UnknownError'];}async['updateTxParamsForNextAttempt'](_0x4fa75e){const _0x1f0039=_0x3c9b9c['Tx']['convertToTxDeliveryCall'](_0x4fa75e),[_0x5ce112,_0x63d7c9,_0x16e36d]=await Promise['all']([this['getFees'](),this['gasLimitEstimator']['getGasLimit'](this['provider'],_0x1f0039),this['resolveTxDeliveryCallData'](_0x1f0039)]);return {..._0x4fa75e,...this['feeEstimator']['scaleFees'](_0x5ce112,this['attempt']),'gasLimit':this['gasLimitEstimator']['scaleGasLimit'](_0x63d7c9,this['attempt']),'data':_0x16e36d};}async['prepareTransactionRequest'](_0x348074){const _0x9a9f4a=await this['signer']['getAddress'](),_0x1c41ce=await this['provider']['getTransactionCount'](_0x9a9f4a),_0x22be3f=await this['getFees'](),_0x5a040a=await this['gasLimitEstimator']['getGasLimit'](this['provider'],_0x3c9b9c['Tx']['convertToTxDeliveryCall'](_0x348074)),{chainId:_0x46a45b}=await this['provider']['getNetwork'](),_0xd5c2a1={..._0x348074,'nonce':_0x1c41ce,'chainId':_0x46a45b,'gasLimit':_0x5a040a,..._0x22be3f,'type':Reflect['has'](_0x22be3f,'gasPrice')?0x0:0x2,'value':_0x348074['value']??_0x5a79ab['utils']['parseEther']('0')['toHexString']()};return _0xd5c2a1;}static['isUnderpricedError'](_0x527d1b){return (_0x527d1b['message']['includes']('maxFeePerGas')||_0x527d1b['message']['includes']('baseFeePerGas')||_0x527d1b['message']['includes']('underpriced')||_0x527d1b['code']===_0x125c00['ErrorCode']['REPLACEMENT_UNDERPRICED']||_0x527d1b['code']===_0x125c00['ErrorCode']['UNPREDICTABLE_GAS_LIMIT'])&&!_0x527d1b['message']['includes']('VM\x20Exception\x20while\x20processing\x20transaction');}static['isNonceExpiredError'](_0x5d4ac9){return _0x5d4ac9['message']['includes']('nonce\x20has\x20already\x20been\x20used')||_0x5d4ac9['message']['includes']('invalid\x20nonce')||_0x5d4ac9['message']['includes']('invalid\x20sequence')||_0x5d4ac9['code']===_0x125c00['ErrorCode']['NONCE_EXPIRED'];}static['isAlreadyKnownError'](_0x3f97fe){return _0x3f97fe['message']['includes']('already\x20known')&&_0x3f97fe['code']===_0x125c00['ErrorCode']['SERVER_ERROR'];}static['isInsufficientFundsError'](_0xa4800a){return _0xa4800a['code']===_0x125c00['ErrorCode']['INSUFFICIENT_FUNDS'];}async['getFees'](){try{return await this['getFeeFromGasOracle'](this['provider']);}catch(_0x177282){return await this['feeEstimator']['getFees'](this['provider']);}}async['getFeeFromGasOracle'](_0x52c495){const {chainId:_0x3e1587}=await _0x52c495['getNetwork'](),_0x352fa9=_0x2fc179['CHAIN_ID_TO_GAS_ORACLE'][_0x3e1587];if(!_0x352fa9)throw new Error('Gas\x20oracle\x20is\x20not\x20defined\x20for\x20'+_0x3e1587);if(this['opts']['forceDisableCustomGasOracle'])throw new Error('Gas\x20oracle\x20was\x20forcefully\x20disabled');try{return await _0x3c9b9c['RedstoneCommon']['timeout'](_0x352fa9(this['opts'],this['attempt']),this['opts']['gasOracleTimeout'],'Custom\x20gas\x20oracle\x20timeout\x20after\x20'+this['opts']['gasOracleTimeout']);}catch(_0x3b9dd3){_0x1f5d78['error']('Custom\x20gas\x20oracle\x20failed.\x20Will\x20fallback\x20to\x20feeEstimator.\x20error='+_0x3c9b9c['RedstoneCommon']['stringifyError'](_0x3b9dd3));throw _0x3b9dd3;}}async['resolveTxDeliveryCallData'](_0x262ca0){if(this['deferredCallData'])return await this['deferredCallData']();return _0x262ca0['data'];}}_0x44e372['TxDelivery']=_0x318fb6;}(TxDelivery),TxDelivery;}

var hasRequiredEip1559GasEstimator;function requireEip1559GasEstimator(){if(hasRequiredEip1559GasEstimator)return Eip1559GasEstimator;hasRequiredEip1559GasEstimator=0x1,Object['defineProperty'](Eip1559GasEstimator,'__esModule',{'value':!![]}),Eip1559GasEstimator['Eip1559GasEstimator']=void 0x0;const _0x4d8a8c=src$9,_0x696352=common,_0x2cd4ad=requireTxDelivery(),_0x4dfd95=0x2;class _0x301181{['opts'];constructor(_0x3beec9){this['opts']=_0x3beec9;}['maxPriorityFeePerGas']=0x3b9aca00;async['getFees'](_0x5a9562){const _0x453bc3=await _0x5a9562['getBlock']('latest');await this['refreshLastUsedPriorityFee'](_0x5a9562);const _0xcac360=Math['round']((0, _0x2cd4ad['unsafeBnToNumber'])(_0x453bc3['baseFeePerGas'])*_0x4dfd95),_0x5591df=_0xcac360+this['maxPriorityFeePerGas'],_0x355e43={'maxFeePerGas':_0x5591df,'maxPriorityFeePerGas':this['maxPriorityFeePerGas']};return _0x355e43;}async['refreshLastUsedPriorityFee'](_0x18c948){const _0x49bbc4=await this['estimatePriorityFee'](_0x18c948);_0x49bbc4!==0x0&&(this['maxPriorityFeePerGas']=_0x49bbc4);}async['estimatePriorityFee'](_0x362be3){const _0x5c3600=await this['getFeeHistory'](_0x362be3),_0x103096=_0x5c3600['reward']['flat']()['map'](_0x3e1478=>parseInt(_0x3e1478,0x10)),_0x1cf3c2=Math['max'](..._0x103096);this['opts']['logger']('Fetched\x20rewardsPerBlockForPercentile:\x20'+_0x103096['toString']()+',\x20having\x20max='+_0x1cf3c2);if(_0x1cf3c2!==0x0)return _0x1cf3c2;const _0x4f7ebf=await(0, _0x696352['getProviderNetworkId'])(_0x362be3),_0x72c3e0=(0, _0x4d8a8c['getChainConfigByNetworkId'])((0, _0x4d8a8c['getLocalChainConfigs'])(),_0x4f7ebf);if(_0x72c3e0['fallbackToEthMaxPriorityFeePerGas']){const _0x33948e=Number(await _0x362be3['send']('eth_maxPriorityFeePerGas',[]));return this['opts']['logger']('Fallback\x20to\x20eth_maxPriorityFeePerGas='+_0x33948e+'\x20\x20because\x20maxRewardsPerBlockForPercentile=0'),_0x33948e;}return _0x1cf3c2;}async['getFeeHistory'](_0x432a0b){return await _0x432a0b['send']('eth_feeHistory',[this['opts']['enforceDecimalNumberOfBlocksForFeeHistory']?this['opts']['numberOfBlocksForFeeHistory']:'0x'+this['opts']['numberOfBlocksForFeeHistory']['toString'](0x10),this['opts']['newestBlockForFeeHistory'],[this['opts']['percentileOfPriorityFee']]]);}['scaleFees'](_0x4264d1,_0x4adcd6){const _0x2753ea=this['opts']['multiplier']**_0x4adcd6,_0x2be567=Math['round'](_0x4264d1['maxPriorityFeePerGas']*_0x2753ea),_0x42b8c2=_0x2be567-_0x4264d1['maxPriorityFeePerGas'],_0x252efc=_0x4264d1['maxFeePerGas']+_0x42b8c2,_0x5ec008={'maxPriorityFeePerGas':_0x2be567,'maxFeePerGas':_0x252efc};return this['opts']['logger']('Scaling\x20fees\x20(multiplier='+_0x2753ea+')\x20to\x20maxFeePerGas='+_0x252efc+'\x20maxPriorityFeePerGas='+_0x2be567),_0x5ec008;}}return Eip1559GasEstimator['Eip1559GasEstimator']=_0x301181,Eip1559GasEstimator;}

var TxDeliveryMan$1 = {};

Object['defineProperty'](TxDeliveryMan$1,'__esModule',{'value':!![]});TxDeliveryMan$1['TxDeliveryMan']=void 0x0;const utils_1$$=requireSrc$3(),common_1=common,ProviderWithAgreement_1=ProviderWithAgreement$1,ProviderWithFallback_1=ProviderWithFallback,TxDelivery_1=requireTxDelivery(),logger$2=(0, utils_1$$['loggerFactory'])('TxDeliveryMan'),WAITING_FOR_CONFIRMATION_TIMEOUT=0xea60,CONFIRMATION_COUNT=0x1;class TxDeliveryMan{['signer'];['opts'];['providers'];['txDeliveriesInProgress']=new Map();constructor(_0x3f67d2,_0x56e0f3,_0x491ad9){this['signer']=_0x56e0f3,this['opts']=_0x491ad9,this['providers']=extractProviders(_0x3f67d2);}async['deliver'](_0x179cf0,_0x485387={}){const _0x431c41=this['providers']['map'](async _0x48a0d2=>{const _0x13a241=this['txDeliveriesInProgress']['get'](_0x48a0d2);if(!_0x13a241)return await this['createAndDeliverNewPackage'](_0x48a0d2,_0x179cf0,_0x485387['deferredCallData']);else {const _0x21b4c1=(0, common_1['getProviderNetworkInfo'])(_0x48a0d2)['url'],_0x96defa='RpcUrl='+_0x21b4c1+'\x20Delivery\x20in\x20progress;\x20Skipping';logger$2['log'](_0x96defa);throw new Error(_0x96defa);}});await Promise['any'](_0x431c41);const _0x46a51e=this['waitForTransaction'](_0x431c41);return this['logTxResponse'](_0x46a51e),()=>_0x46a51e;}['logTxResponse'](_0x19cfcb){_0x19cfcb['then'](_0x505ade=>logger$2['log'](getTxReceiptDesc(_0x505ade)))['catch'](_0x5238f0=>logger$2['error']('Failed\x20to\x20wait\x20for\x20transaction\x20minting\x20'+utils_1$$['RedstoneCommon']['stringifyError'](_0x5238f0)));}['createAndDeliverNewPackage'](_0x1d7665,_0x40858f,_0x5b2554){const _0x571fdc=createTxDelivery(_0x1d7665,this['signer'],this['opts'],_0x5b2554),_0x3fa4e7=_0x571fdc['deliver'](_0x40858f)['finally'](()=>this['txDeliveriesInProgress']['set'](_0x1d7665,![]));return this['txDeliveriesInProgress']['set'](_0x1d7665,!![]),_0x3fa4e7;}async['waitForTransaction'](_0x2d11c7){const _0x250ee7=(await Promise['allSettled'](_0x2d11c7['map'](async(_0x45ff64,_0x242e43)=>{const _0x24d2ed=await _0x45ff64;if(_0x24d2ed)return await this['providers'][_0x242e43]['waitForTransaction'](_0x24d2ed['hash'],CONFIRMATION_COUNT,WAITING_FOR_CONFIRMATION_TIMEOUT);return undefined;})))['filter'](_0x1da557=>_0x1da557['status']==='fulfilled')['filter'](_0x1006aa=>utils_1$$['RedstoneCommon']['isDefined'](_0x1006aa['value']))['map'](_0x80edf=>_0x80edf['value']),_0x32a45c=Array['from'](new Set(_0x250ee7['map'](_0xbd2f4e=>_0xbd2f4e['transactionHash'])));if(_0x32a45c['length']===0x0)throw new Error('Transaction\x20was\x20mined\x20but\x20reverted\x20with\x20error\x20OR\x20we\x20failed\x20to\x20fetch\x20it.\x20Possible\x20transactions:\x20'+_0x32a45c['join'](',\x20'));if(_0x32a45c['length']>0x1)throw new Error('Network\x20between\x20rpcs\x20is\x20forked\x20-\x20received\x20more\x20than\x20one\x20successful\x20receipts\x20('+_0x250ee7['length']+').\x20Possible\x20transactions:\x20'+_0x32a45c['join'](',\x20'));return _0x250ee7[0x0];}}TxDeliveryMan$1['TxDeliveryMan']=TxDeliveryMan;function extractProviders(_0x43e84f){if(_0x43e84f instanceof ProviderWithFallback_1['ProviderWithFallback']||_0x43e84f instanceof ProviderWithAgreement_1['ProviderWithAgreement'])return Object['freeze'](_0x43e84f['providers']);return Object['freeze']([_0x43e84f]);}function createTxDelivery(_0x20f6f5,_0x53fa60,_0x4cc1e2,_0x3d8045){const _0x4da606=(0, common_1['getProviderNetworkInfo'])(_0x20f6f5)['url'];return new TxDelivery_1['TxDelivery']({..._0x4cc1e2,'logger':_0x1241ce=>logger$2['log']('RpcUrl='+_0x4da606+',\x20'+_0x1241ce)},_0x53fa60,_0x20f6f5,_0x3d8045);}const getTxReceiptDesc=_0x577501=>{return 'Transaction\x20'+_0x577501['transactionHash']+'\x20mined\x20with\x20SUCCESS(status:\x20'+_0x577501['status']+')\x20in\x20block\x20#'+_0x577501['blockNumber']+'[tx\x20index:\x20'+_0x577501['transactionIndex']+'].\x20gas_used='+_0x577501['gasUsed']['toString']()+'\x20effective_gas_price='+_0x577501['effectiveGasPrice']['toString']()+'\x20confirmations='+_0x577501['confirmations'];};

(function(_0x2c9552){var _0xeb5c96=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x168505,_0x14ac38,_0x566780,_0x368d6b){if(_0x368d6b===undefined)_0x368d6b=_0x566780;var _0x3618cf=Object['getOwnPropertyDescriptor'](_0x14ac38,_0x566780);(!_0x3618cf||('get'in _0x3618cf?!_0x14ac38['__esModule']:_0x3618cf['writable']||_0x3618cf['configurable']))&&(_0x3618cf={'enumerable':!![],'get':function(){return _0x14ac38[_0x566780];}}),Object['defineProperty'](_0x168505,_0x368d6b,_0x3618cf);}:function(_0x4b7801,_0x15faac,_0x416e6b,_0x3549f3){if(_0x3549f3===undefined)_0x3549f3=_0x416e6b;_0x4b7801[_0x3549f3]=_0x15faac[_0x416e6b];}),_0x27f7a5=commonjsGlobal&&commonjsGlobal['__setModuleDefault']||(Object['create']?function(_0x39ae41,_0x40bb57){Object['defineProperty'](_0x39ae41,'default',{'enumerable':!![],'value':_0x40bb57});}:function(_0x1ac9dc,_0x5c56d8){_0x1ac9dc['default']=_0x5c56d8;}),_0x5de9a0=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x1e6f9b,_0x4dc049){for(var _0x2234e2 in _0x1e6f9b)if(_0x2234e2!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x4dc049,_0x2234e2))_0xeb5c96(_0x4dc049,_0x1e6f9b,_0x2234e2);},_0x8f44c4=commonjsGlobal&&commonjsGlobal['__importStar']||function(_0x4e3569){if(_0x4e3569&&_0x4e3569['__esModule'])return _0x4e3569;var _0x40ab9e={};if(_0x4e3569!=null){for(var _0x3b1b8d in _0x4e3569)if(_0x3b1b8d!=='default'&&Object['prototype']['hasOwnProperty']['call'](_0x4e3569,_0x3b1b8d))_0xeb5c96(_0x40ab9e,_0x4e3569,_0x3b1b8d);}return _0x27f7a5(_0x40ab9e,_0x4e3569),_0x40ab9e;};Object['defineProperty'](_0x2c9552,'__esModule',{'value':!![]}),_0x2c9552['ProviderDecorators']=_0x2c9552['Multicall3Caller']=_0x2c9552['convertToTxDeliveryCall']=void 0x0;const _0x2a9df9=requireSrc$3();_0x2c9552['convertToTxDeliveryCall']=_0x2a9df9['Tx']['convertToTxDeliveryCall'],_0x5de9a0(BackgroundBlockNumbersFetcher,_0x2c9552),_0x5de9a0(common,_0x2c9552),_0x5de9a0(hardhatNetworkConfigs,_0x2c9552),_0x5de9a0(MegaProviderBuilder$1,_0x2c9552),_0x5de9a0(MetricDecorator,_0x2c9552),_0x5de9a0(Multicall3Caller,_0x2c9552),_0x2c9552['Multicall3Caller']=_0x8f44c4(Multicall3Caller),_0x5de9a0(MulticallDecorator$1,_0x2c9552),_0x2c9552['ProviderDecorators']=_0x8f44c4(providerDecorators),_0x5de9a0(ProviderWithAgreement$1,_0x2c9552),_0x5de9a0(ProviderWithFallback,_0x2c9552),_0x5de9a0(SageOfChains$1,_0x2c9552),_0x5de9a0(CustomGasOracles,_0x2c9552),_0x5de9a0(requireEip1559GasEstimator(),_0x2c9552),_0x5de9a0(requireTxDelivery(),_0x2c9552),_0x5de9a0(TxDeliveryMan$1,_0x2c9552);}(src$c));getDefaultExportFromCjs(src$c);

var getNonEvmBlockchainService$1 = {};

var src$6 = {};

var AptosClientBuilder = {};

var networkIds$2 = {};

(function(_0x44b5e4){Object['defineProperty'](_0x44b5e4,'__esModule',{'value':!![]}),_0x44b5e4['MOVEMENT_NETWORK_IDS']=void 0x0,_0x44b5e4['getFullnodeUrl']=_0x2f80df,_0x44b5e4['chainIdtoMovementNetwork']=_0x527e35;const _0xeb395f=_0x276fe4;_0x44b5e4['MOVEMENT_NETWORK_IDS']={0xfa:_0xeb395f['Network']['TESTNET'],0x7e:_0xeb395f['Network']['MAINNET']};function _0x2f80df(_0x4ad826){switch(_0x4ad826){case _0xeb395f['Network']['MAINNET']:return 'https://mainnet.movementnetwork.xyz/v1';case _0xeb395f['Network']['TESTNET']:return 'https://aptos.testnet.bardock.movementlabs.xyz/v1';default:throw new Error('Network\x20'+_0x4ad826+'\x20not\x20supported');}}function _0x527e35(_0x1bd612){return _0x44b5e4['MOVEMENT_NETWORK_IDS'][_0x1bd612]??_0xeb395f['Network']['CUSTOM'];}}(networkIds$2));getDefaultExportFromCjs(networkIds$2);

(function(_0x11df29){Object['defineProperty'](_0x11df29,'__esModule',{'value':!![]}),_0x11df29['AptosClientBuilder']=_0x11df29['ALL_EXECUTIONS_TIMEOUT_MS']=_0x11df29['SINGLE_EXECUTION_TIMEOUT_MS']=void 0x0;const _0x10448b=_0x276fe4,_0x28bb70=requireSrc$3(),_0x3f09ac=networkIds$2;_0x11df29['SINGLE_EXECUTION_TIMEOUT_MS']=0x2ee0,_0x11df29['ALL_EXECUTIONS_TIMEOUT_MS']=0x7530;class _0x4ad435 extends _0x28bb70['MultiExecutor']['ClientBuilder']{['chainType']=_0x28bb70['ChainTypeEnum']['Enum']['movement'];['build'](){if(!this['chainId'])throw new Error('Network\x20not\x20set');return !this['urls']['length']&&this['urls']['push']((0, _0x3f09ac['getFullnodeUrl'])((0, _0x3f09ac['chainIdtoMovementNetwork'])(this['chainId']))),this['makeMultiExecutor'](_0xc7a962=>new _0x10448b['Aptos'](new _0x10448b['AptosConfig']({'network':_0x10448b['Network']['CUSTOM'],'fullnode':_0xc7a962})),{'transaction':{'signAndSubmitTransaction':_0x28bb70['MultiExecutor']['ExecutionMode']['RACE'],'waitForTransaction':_0x28bb70['MultiExecutor']['ExecutionMode']['RACE']},'getAccountInfo':_0x28bb70['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getAccountAPTAmount':_0x28bb70['MultiExecutor']['ExecutionMode']['AGREEMENT']},{'singleExecutionTimeoutMs':_0x11df29['SINGLE_EXECUTION_TIMEOUT_MS'],'allExecutionsTimeoutMs':_0x11df29['ALL_EXECUTIONS_TIMEOUT_MS']});}}_0x11df29['AptosClientBuilder']=_0x4ad435;}(AptosClientBuilder));getDefaultExportFromCjs(AptosClientBuilder);

var config$2 = {};

(function(_0xd5aae4){Object['defineProperty'](_0xd5aae4,'__esModule',{'value':!![]}),_0xd5aae4['TRANSACTION_DEFAULT_CONFIG']=_0xd5aae4['MovementNetworkSchema']=void 0x0,_0xd5aae4['movementNetworkSchemaToAptosNetwork']=_0x42ef22,_0xd5aae4['configFromOptionals']=_0x8e3bed;const _0x289b4c=_0x276fe4,_0x5b77b1=_0x28081a;_0xd5aae4['MovementNetworkSchema']=_0x5b77b1['z']['enum'](['mainnet','testnet','local','custom','devnet']);function _0x42ef22(_0x37c29f){if(_0x37c29f?.['includes']('testnet')||_0x37c29f?.['includes']('custom'))return _0x289b4c['Network']['CUSTOM'];if(_0x37c29f?.['includes']('devnet'))return _0x289b4c['Network']['DEVNET'];if(_0x37c29f?.['includes']('mainnet'))return _0x289b4c['Network']['MAINNET'];return _0x289b4c['Network']['LOCAL'];}_0xd5aae4['TRANSACTION_DEFAULT_CONFIG']={'writePriceOctasTxGasBudget':0x5f5e100,'maxTxSendAttempts':0x5};function _0x8e3bed(_0x31e27c,_0x3f82e4){const _0x13341d=_0x31e27c??_0xd5aae4['TRANSACTION_DEFAULT_CONFIG']['writePriceOctasTxGasBudget'],_0x43a88b=_0x3f82e4??_0xd5aae4['TRANSACTION_DEFAULT_CONFIG']['maxTxSendAttempts'];return {'writePriceOctasTxGasBudget':_0x13341d,'maxTxSendAttempts':_0x43a88b};}}(config$2));getDefaultExportFromCjs(config$2);

var consts = {};

(function(_0x22056a){Object['defineProperty'](_0x22056a,'__esModule',{'value':!![]}),_0x22056a['MAX_ITERATION_ATTEMPTS']=_0x22056a['DEFAULT_BROADCAST_BUCKETS']=_0x22056a['OCTAS_PER_MOVE']=_0x22056a['MOVE_DECIMALS']=void 0x0,_0x22056a['MOVE_DECIMALS']=0x8,_0x22056a['OCTAS_PER_MOVE']=0xa**_0x22056a['MOVE_DECIMALS'],_0x22056a['DEFAULT_BROADCAST_BUCKETS']=[0x0,0x96,0x12c,0x1f4,0x3e8,0xbb8,0x1388,0x2710,0x186a0,0xf4240],_0x22056a['MAX_ITERATION_ATTEMPTS']=_0x22056a['DEFAULT_BROADCAST_BUCKETS']['length']-0x1;}(consts));getDefaultExportFromCjs(consts);

var MovementContractConnector = {};

var utils$3 = {};

Object['defineProperty'](utils$3,'__esModule',{'value':!![]});utils$3['makeFeedIdBytes']=makeFeedIdBytes$2;utils$3['feedIdHexToMoveVector']=feedIdHexToMoveVector;utils$3['octasToMove']=octasToMove;utils$3['txCost']=txCost;utils$3['makeAptosAccount']=makeAptosAccount;const ts_sdk_1$3=_0x276fe4,utils_1$_=requireSrc$3(),zod_1$5=_0x28081a,consts_1$1=consts;function makeFeedIdBytes$2(_0x5d13e3){return Uint8Array['from'](Buffer['from'](_0x5d13e3['padEnd'](0x20,'\x00')));}function feedIdHexToMoveVector(_0x154754){return _0x154754['startsWith']('0x')?ts_sdk_1$3['MoveVector']['U8'](_0x154754):ts_sdk_1$3['MoveVector']['U8']('0x'+_0x154754);}function octasToMove(_0x2854bf){return _0x2854bf/0xa**consts_1$1['MOVE_DECIMALS'];}function txCost(_0x2e556b){if(_0x2e556b['type']===ts_sdk_1$3['TransactionResponseType']['Pending'])return 0x0;const _0x51645f=+_0x2e556b['gas_used'];if(!('gas_unit_price'in _0x2e556b))return octasToMove(_0x51645f);const _0x59f14c=+_0x2e556b['gas_unit_price'];return octasToMove(_0x59f14c*_0x51645f);}function makeAptosAccount(_0x2ce88b,_0x5eb2e3){_0x2ce88b??=utils_1$_['RedstoneCommon']['getFromEnv']('PRIVATE_KEY',zod_1$5['z']['string']()['optional']());if(!_0x2ce88b)throw new Error('privateKey\x20not\x20set');return _0x5eb2e3??=utils_1$_['RedstoneCommon']['getFromEnv']('PRIVATE_KEY_SCHEMA',zod_1$5['z']['nativeEnum'](ts_sdk_1$3['PrivateKeyVariants'])['optional']())??ts_sdk_1$3['PrivateKeyVariants']['Secp256k1'],ts_sdk_1$3['Account']['fromPrivateKey']({'privateKey':extractPrivateKey(_0x2ce88b,_0x5eb2e3)});}function extractPrivateKey(_0xa3a053,_0x3ea74c){switch(_0x3ea74c){case ts_sdk_1$3['PrivateKeyVariants']['Ed25519']:return new ts_sdk_1$3['Ed25519PrivateKey'](ts_sdk_1$3['PrivateKey']['formatPrivateKey'](_0xa3a053,ts_sdk_1$3['PrivateKeyVariants']['Ed25519']));case ts_sdk_1$3['PrivateKeyVariants']['Secp256k1']:return new ts_sdk_1$3['Secp256k1PrivateKey'](ts_sdk_1$3['PrivateKey']['formatPrivateKey'](_0xa3a053,ts_sdk_1$3['PrivateKeyVariants']['Secp256k1']));}}

(function(_0x6835d5){Object['defineProperty'](_0x6835d5,'__esModule',{'value':!![]}),_0x6835d5['MovementContractConnector']=_0x6835d5['TIMEOUT_IN_SEC']=void 0x0;const _0x498880=requireSrc$3(),_0xfffcc3=consts,_0x24630f=utils$3;_0x6835d5['TIMEOUT_IN_SEC']=0x14;class _0x3e042d{['client'];['logger']=(0, _0x498880['loggerFactory'])('movement-contract-connector');['account'];constructor(_0x1125f4,_0x385b54){this['client']=_0x1125f4,_0x385b54&&(this['account']=(0, _0x24630f['makeAptosAccount'])(_0x385b54['value'],_0x385b54['scheme']));}['getAdapter'](){throw new Error('getAdapter\x20is\x20not\x20implemented');}async['getBlockNumber'](){return Number((await this['client']['getLedgerInfo']())['block_height']);}async['waitForTransaction'](_0x24c2bb){try{const _0x309f6d=await this['client']['waitForTransaction']({'transactionHash':_0x24c2bb,'options':{'timeoutSecs':_0x6835d5['TIMEOUT_IN_SEC']}});return _0x309f6d['success'];}catch(_0x45d04b){this['logger']['error']('Failed\x20to\x20validate\x20transaction\x20state:\x20'+_0x498880['RedstoneCommon']['stringifyError'](_0x45d04b));}return ![];}async['getNormalizedBalance'](_0x2d7fa6){return BigInt(await this['client']['account']['getAccountAPTAmount']({'accountAddress':_0x2d7fa6}))*BigInt(0xa**0x12/_0xfffcc3['OCTAS_PER_MOVE']);}async['transfer'](_0xa5bfe,_0x43768d){if(!this['account'])throw new Error('Private\x20Key\x20was\x20not\x20provided.');_0x43768d=_0x43768d*_0xfffcc3['OCTAS_PER_MOVE'];const _0x4901e8=await this['client']['transaction']['build']['simple']({'sender':this['account']['accountAddress'],'data':{'function':'0x1::aptos_account::transfer','typeArguments':[],'functionArguments':[_0xa5bfe,_0x43768d]}});await this['client']['signAndSubmitTransaction']({'signer':this['account'],'transaction':_0x4901e8});}['getSignerAddress'](){if(!this['account'])throw new Error('Private\x20Key\x20was\x20not\x20provided.');return Promise['resolve'](this['account']['accountAddress']['toString']());}}_0x6835d5['MovementContractConnector']=_0x3e042d;}(MovementContractConnector));getDefaultExportFromCjs(MovementContractConnector);

var MovementContractViewer$1 = {};

Object['defineProperty'](MovementContractViewer$1,'__esModule',{'value':!![]});MovementContractViewer$1['MovementContractViewer']=void 0x0;class MovementContractViewer{['client'];['moduleName'];['packageAddress'];constructor(_0x7c0936,_0x2e7cb3,_0x41cab6){this['client']=_0x7c0936,this['moduleName']=_0x2e7cb3,this['packageAddress']=_0x41cab6;}async['viewOnChain'](_0x53c43a,_0x1c180d){return await this['client']['view']({'payload':{'function':this['packageAddress']+'::'+this['moduleName']+'::'+_0x53c43a,'typeArguments':[],'functionArguments':_0x1c180d?_0x1c180d:[]}});}}MovementContractViewer$1['MovementContractViewer']=MovementContractViewer;

var MovementTxDeliveryMan$1 = {};

var MovementOptionsContractUtil$1 = {};

Object['defineProperty'](MovementOptionsContractUtil$1,'__esModule',{'value':!![]});MovementOptionsContractUtil$1['MovementOptionsContractUtil']=void 0x0;const utils_1$Z=requireSrc$3(),consts_1=consts,utils_2$b=utils$3;class MovementOptionsContractUtil{static ['logger']=(0, utils_1$Z['loggerFactory'])('movement-options-contract-util');static async['prepareTransactionOptions'](_0x3b7d14,_0x415d6b,_0x25a75e=0x0,_0xf0cada){const _0x52a934=await this['computeGasPrice'](_0x3b7d14,_0x25a75e);if(!_0x52a934)throw new Error('Failed\x20to\x20compute\x20gas\x20price');const _0x4431d4=Math['floor'](_0x415d6b/_0x52a934);return this['logger']['debug']('Max\x20Gas\x20Amount:\x20'+_0x4431d4+'\x20units,\x20Max\x20Gas\x20Price:\x20'+(0, utils_2$b['octasToMove'])(_0x4431d4*_0x52a934)+'\x20Move,\x20Gas\x20Unit\x20Price:\x20'+_0x52a934+'\x20Octas'),{'maxGasAmount':_0x4431d4,'gasUnitPrice':_0x52a934,'accountSequenceNumber':_0xf0cada};}static async['computeGasPrice'](_0x50a633,_0x4fe754){const _0x27b941=Date['now'](),{gas_estimate:_0x5a95e1}=await _0x50a633['getGasPriceEstimation']();return this['logger']['debug']('Reference\x20gas\x20standard\x20price:\x20'+_0x5a95e1+'\x20Octas\x20fetched\x20in\x20'+(Date['now']()-_0x27b941)+'\x20[ms]'),_0x4fe754===0x0?_0x5a95e1:findMatchInPriorityBuckets(_0x5a95e1,_0x4fe754);}}MovementOptionsContractUtil$1['MovementOptionsContractUtil']=MovementOptionsContractUtil;function findMatchInPriorityBuckets(_0x2bf505,_0x33cef5){return consts_1['DEFAULT_BROADCAST_BUCKETS'][consts_1['DEFAULT_BROADCAST_BUCKETS']['findIndex'](_0x4f94c4=>_0x4f94c4>_0x2bf505)+_0x33cef5-0x1];}

var __importDefault$a=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x2d5719){return _0x2d5719&&_0x2d5719['__esModule']?_0x2d5719:{'default':_0x2d5719};};Object['defineProperty'](MovementTxDeliveryMan$1,'__esModule',{'value':!![]});MovementTxDeliveryMan$1['MovementTxDeliveryMan']=void 0x0;const ts_sdk_1$2=_0x276fe4,utils_1$Y=requireSrc$3(),lodash_1$7=__importDefault$a(_0x62d7dc),AptosClientBuilder_1$1=AptosClientBuilder,config_1$2=config$2,MovementOptionsContractUtil_1=MovementOptionsContractUtil$1,utils_2$a=utils$3,SEQUENCE_NUMBER_TOO_OLD_CODE='SEQUENCE_NUMBER_TOO_OLD'['toLowerCase'](),BLOCK_NUMBER_EXECUTION_TIMEOUT_MS=0x7d0;class MovementTxDeliveryMan{['client'];['account'];['config'];['logger']=(0, utils_1$Y['loggerFactory'])('movement-tx-delivery-man');['sequenceNumber']=0x0n;static ['queues']={};static['getQueue'](_0x148b43){return this['queues'][_0x148b43['accountAddress']['toString']()]??=new utils_1$Y['OperationQueue'](),this['queues'][_0x148b43['accountAddress']['toString']()];}constructor(_0x2c6c00,_0xede7b6,_0x2b1606=config_1$2['TRANSACTION_DEFAULT_CONFIG']){this['client']=_0x2c6c00,this['account']=_0xede7b6,this['config']=_0x2b1606;}static['createMultiTxDeliveryMan'](_0x31a7a1,_0x5efa5e,_0x42dc0a=config_1$2['TRANSACTION_DEFAULT_CONFIG']){return utils_1$Y['MultiExecutor']['createForSubInstances'](_0x31a7a1,_0xcd0710=>new MovementTxDeliveryMan(_0xcd0710,_0x5efa5e,_0x42dc0a),{'getSequenceNumber':new utils_1$Y['MultiExecutor']['CeilMedianConsensusExecutor'](utils_1$Y['MultiExecutor']['DEFAULT_CONFIG']['consensusQuorumRatio'],BLOCK_NUMBER_EXECUTION_TIMEOUT_MS)},{...utils_1$Y['MultiExecutor']['DEFAULT_CONFIG'],'defaultMode':utils_1$Y['MultiExecutor']['ExecutionMode']['FALLBACK'],'singleExecutionTimeoutMs':AptosClientBuilder_1$1['SINGLE_EXECUTION_TIMEOUT_MS'],'allExecutionsTimeoutMs':AptosClientBuilder_1$1['ALL_EXECUTIONS_TIMEOUT_MS']});}['getSignerAddress'](){return this['account']['accountAddress'];}async['sendBatchTransactions'](_0x4601c4){let _0x4bdca1=undefined;for(const _0x23646f of _0x4601c4){try{_0x4bdca1=await this['sendTransaction'](await _0x23646f);}catch(_0x343514){this['logger']['error']((await _0x23646f)['identifier']+'\x20failed:\x20'+utils_1$Y['RedstoneCommon']['stringifyError'](_0x343514));}}if(!_0x4bdca1)throw new Error('No\x20transaction\x20committed\x20with\x20success.');return _0x4bdca1;}async['sendTransaction'](_0x5577bc){!this['sequenceNumber']&&await this['refreshSequenceNumber']();for(let _0x49b65f=0x0;_0x49b65f<this['config']['maxTxSendAttempts'];_0x49b65f++){try{return await this['performIteration'](_0x5577bc,_0x49b65f);}catch(_0x55c8aa){await this['processTransactionError'](_0x55c8aa);}}throw new Error(_0x5577bc['identifier']+'\x20failed\x20to\x20send\x20in\x20'+this['config']['maxTxSendAttempts']+'\x20attempt'+utils_1$Y['RedstoneCommon']['getS'](this['config']['maxTxSendAttempts']));}async['performIteration'](_0xf79217,_0x2f27eb){return await new Promise((_0x48e08d,_0x485f02)=>{this['logger']['debug']('Enqueuing\x20#'+_0x2f27eb+'\x20'+_0xf79217['identifier']);const _0x155109=MovementTxDeliveryMan['getQueue'](this['account'])['enqueue'](_0xf79217['identifier'],async()=>{try{const _0x5604ad=_0xf79217['deferredDataProvider']?await _0xf79217['deferredDataProvider'](_0x2f27eb):_0xf79217;_0x48e08d(await this['tryCallFunction'](_0x5604ad,_0x2f27eb));}catch(_0x4a5b5b){_0x485f02(_0x4a5b5b);}});!_0x155109?_0x485f02(new Error('Enqueuing\x20#'+_0x2f27eb+'\x20'+_0xf79217['identifier']+'\x20FAILED\x20because\x20a\x20previous\x20transaction\x20is\x20still\x20executing')):this['logger']['debug']('Enqueued\x20#'+_0x2f27eb+'\x20'+_0xf79217['identifier']);});}async['tryCallFunction'](_0x1273aa,_0x199d25){const _0x2b1b0a=await MovementOptionsContractUtil_1['MovementOptionsContractUtil']['prepareTransactionOptions'](this['client'],this['config']['writePriceOctasTxGasBudget'],_0x199d25,_0x199d25&&this['sequenceNumber']?this['sequenceNumber']:undefined);this['logger']['info'](['Running\x20'+_0x1273aa['identifier'],_0x199d25?'Retry\x20#'+(_0x199d25+0x1):undefined,_0x2b1b0a['accountSequenceNumber']?'sequenceNumber:\x20'+_0x2b1b0a['accountSequenceNumber']:undefined]['filter'](_0xa907f3=>_0xa907f3!=undefined)['join'](';\x20'));const _0x437e34=await this['client']['transaction']['build']['simple']({'sender':this['account']['accountAddress'],'data':_0x1273aa,'options':_0x2b1b0a}),_0x89f5cf=await this['client']['transaction']['signAndSubmitTransaction']({'transaction':_0x437e34,'signer':this['account']}),_0x3e6c1c=await this['client']['transaction']['waitForTransaction']({'transactionHash':_0x89f5cf['hash']});if(!_0x3e6c1c['success'])throw new Error(_0x1273aa['identifier']+':\x20Transaction\x20'+_0x3e6c1c['hash']+'\x20failed.');return this['processCommittedTransaction'](_0x3e6c1c),_0x89f5cf['hash'];}async['refreshSequenceNumber'](){this['setSequenceNumber'](await this['getSequenceNumber'](this['account']['accountAddress']));}['setNextSequenceNumber'](_0x465297){this['setSequenceNumber'](BigInt(_0x465297)+0x1n);}['setSequenceNumber'](_0x2cc3b6){if(_0x2cc3b6===this['sequenceNumber'])return;this['logger']['info']('Setting\x20sequenceNumber:\x20'+_0x2cc3b6+';\x20Current\x20value:\x20'+utils_1$Y['RedstoneCommon']['stringify'](this['sequenceNumber'])+'\x20(+'+(_0x2cc3b6-this['sequenceNumber'])+')'),this['sequenceNumber']=_0x2cc3b6;}async['getSequenceNumber'](_0xbd0b2d){const _0x504dfe=await this['client']['getAccountInfo']({'accountAddress':_0xbd0b2d});return this['logger']['debug']('Fetched\x20sequence\x20number:\x20'+_0x504dfe['sequence_number']),BigInt(_0x504dfe['sequence_number']);}['processCommittedTransaction'](_0x5d55c6){const _0x3da623=(0, utils_2$a['txCost'])(_0x5d55c6);this['logger']['log']('Transaction\x20'+_0x5d55c6['hash']+'\x20finished,\x20status:\x20COMMITTED,\x20cost:\x20'+_0x3da623+'\x20MOVE.'),'sequence_number'in _0x5d55c6&&this['setNextSequenceNumber'](_0x5d55c6['sequence_number']);}async['processTransactionError'](_0x85f747){let _0x2c062a=![];if('transaction'in _0x85f747){const _0x2b5c23=_0x85f747;this['logger']['error'](_0x2b5c23['transaction']['vm_status'],MovementTxDeliveryMan['extractSimpleFields'](_0x2b5c23['transaction'])),_0x2c062a=!![],this['setNextSequenceNumber'](_0x2b5c23['transaction']['sequence_number']);}else MovementTxDeliveryMan['isSequenceNumberTooOldError'](_0x85f747)&&await this['refreshSequenceNumber']();if(_0x2c062a)return;this['logger']['error'](utils_1$Y['RedstoneCommon']['stringifyError'](_0x85f747));}static['isSequenceNumberTooOldError'](_0x2d9e73){return _0x2d9e73 instanceof ts_sdk_1$2['AptosApiError']&&_0x2d9e73['message']['toLowerCase']()['includes'](SEQUENCE_NUMBER_TOO_OLD_CODE);}static['extractSimpleFields'](_0x1ba428){return lodash_1$7['default']['pickBy'](_0x1ba428,_0x5dd1f9=>lodash_1$7['default']['isString'](_0x5dd1f9)||lodash_1$7['default']['isNumber'](_0x5dd1f9)||lodash_1$7['default']['isBoolean'](_0x5dd1f9)||lodash_1$7['default']['isNil'](_0x5dd1f9));}}MovementTxDeliveryMan$1['MovementTxDeliveryMan']=MovementTxDeliveryMan;

var MovementPriceAdapterContractViewer$1 = {};

Object['defineProperty'](MovementPriceAdapterContractViewer$1,'__esModule',{'value':!![]});MovementPriceAdapterContractViewer$1['MovementPriceAdapterContractViewer']=void 0x0;const ts_sdk_1$1=_0x276fe4,bytes_1$1=_0x462156,utils_1$X=requireSrc$3(),ethers_1$9=_0x3e9376,AptosClientBuilder_1=AptosClientBuilder,MovementContractViewer_1=MovementContractViewer$1,utils_2$9=utils$3;class MovementPriceAdapterContractViewer extends MovementContractViewer_1['MovementContractViewer']{['priceAdapterObjectAddress'];['logger']=(0, utils_1$X['loggerFactory'])('movement-price-adapter-contract-viewer');constructor(_0x1935a5,_0x5aae46,_0x4d5b61){super(_0x1935a5,'price_adapter',_0x5aae46),this['priceAdapterObjectAddress']=_0x4d5b61;}static['createMultiReader'](_0x4c92e3,_0x594d60,_0x2faa78){return utils_1$X['MultiExecutor']['createForSubInstances'](_0x4c92e3,_0xae8aeb=>new MovementPriceAdapterContractViewer(_0xae8aeb,_0x594d60,_0x2faa78),{},{...utils_1$X['MultiExecutor']['DEFAULT_CONFIG'],'defaultMode':utils_1$X['MultiExecutor']['ExecutionMode']['AGREEMENT'],'singleExecutionTimeoutMs':AptosClientBuilder_1['SINGLE_EXECUTION_TIMEOUT_MS'],'allExecutionsTimeoutMs':AptosClientBuilder_1['ALL_EXECUTIONS_TIMEOUT_MS']});}async['viewUniqueSignerThreshold'](){const [_0x40bb3d]=await this['viewOnChain']('signer_count_threshold');return parseInt(_0x40bb3d);}async['viewContractData'](_0x46830a){const _0x122ef6={};for(const _0x87e494 of _0x46830a){const _0x1a8d6f=await this['viewFeedContractData'](_0x87e494);if(_0x1a8d6f===undefined)continue;_0x122ef6[_0x87e494]={'lastDataPackageTimestampMS':parseInt(_0x1a8d6f['write_timestamp']),'lastBlockTimestampMS':parseInt(_0x1a8d6f['timestamp']),'lastValue':ethers_1$9['BigNumber']['from'](_0x1a8d6f['value'])};}return _0x122ef6;}async['viewFeedContractData'](_0x56438c){try{const [_0x1805d7]=await this['viewOnChain']('price_data_by_address',[ts_sdk_1$1['AccountAddress']['fromString'](this['priceAdapterObjectAddress']),ts_sdk_1$1['MoveVector']['U8']((0x0,bytes_1$1['hexlify'])((0x0,utils_2$9['makeFeedIdBytes'])(_0x56438c)))]);return _0x1805d7;}catch(_0x5158c0){this['logger']['error']('\x22Data\x20for\x20FeedId\x20'+_0x56438c+'\x20could\x20not\x20be\x20retrieved:\x20'+utils_1$X['RedstoneCommon']['stringifyError'](_0x5158c0));}return undefined;}}MovementPriceAdapterContractViewer$1['MovementPriceAdapterContractViewer']=MovementPriceAdapterContractViewer;

var MovementPriceAdapterContractWriter$1 = {};

Object['defineProperty'](MovementPriceAdapterContractWriter$1,'__esModule',{'value':!![]});MovementPriceAdapterContractWriter$1['MovementPriceAdapterContractWriter']=void 0x0;const ts_sdk_1=_0x276fe4,utils_1$W=utils$3;class MovementPriceAdapterContractWriter{['txDeliveryMan'];['priceAdapterPackageAddress'];['priceAdapterObjectAddress'];constructor(_0x2ec49e,_0x83409d,_0x1f2f22){this['txDeliveryMan']=_0x2ec49e,this['priceAdapterPackageAddress']=_0x83409d,this['priceAdapterObjectAddress']=_0x1f2f22;}['getSignerAddress'](){return this['txDeliveryMan']['getSignerAddress']();}async['writePrices'](_0x59d74a,_0x5bd227){const _0x406411=Object['entries'](_0x59d74a)['map'](async([_0x326762,_0x51b064])=>{const _0x15b1c8=await this['makeWritePriceTransactionData'](_0x326762,Promise['resolve'](_0x51b064));return _0x5bd227&&(_0x15b1c8['deferredDataProvider']=()=>this['makeWritePriceTransactionData'](_0x326762,_0x5bd227(_0x326762))),_0x15b1c8;});return await this['txDeliveryMan']['sendBatchTransactions'](_0x406411);}async['writeAllPrices'](_0x1ebfcd,_0x527469,_0x532bc3){const _0xd29626=await this['makeWritePricesTransactionData'](_0x1ebfcd,_0x527469);return _0x532bc3&&(_0xd29626['deferredDataProvider']=()=>this['makeWritePricesTransactionData'](_0x1ebfcd,_0x532bc3())),await this['txDeliveryMan']['sendBatchTransactions']([Promise['resolve'](_0xd29626)]);}async['makeWritePriceTransactionData'](_0x31daf9,_0x4abc79){const _0x438979=this['priceAdapterPackageAddress']['toString']()+'::price_adapter::write_price';return {'identifier':'Write\x20'+_0x31daf9+'\x20price:\x20'+_0x438979,'function':_0x438979,'functionArguments':[this['priceAdapterObjectAddress']['toString'](),makeFeedId$1(_0x31daf9),makePayload(await _0x4abc79)]};}async['makeWritePricesTransactionData'](_0xf90466,_0x2f87d5){const _0x365add=this['priceAdapterPackageAddress']['toString']()+'::price_adapter::write_prices';return {'identifier':'Write\x20['+[..._0xf90466]['sort']()['toString']()+']\x20price:\x20'+_0x365add,'function':_0x365add,'functionArguments':[this['priceAdapterObjectAddress']['toString'](),makeFeedIds$1(_0xf90466),makePayload(await _0x2f87d5)]};}}MovementPriceAdapterContractWriter$1['MovementPriceAdapterContractWriter']=MovementPriceAdapterContractWriter;function makeFeedId$1(_0x48de6c){const _0x5cdd76=(0, utils_1$W['makeFeedIdBytes'])(_0x48de6c);return ts_sdk_1['MoveVector']['U8'](_0x5cdd76);}function makeFeedIds$1(_0x306dde){return _0x306dde['map'](makeFeedId$1);}function makePayload(_0x997974){return ts_sdk_1['MoveVector']['U8'](_0x997974);}

var MovementPricesContractAdapter$1 = {};

Object['defineProperty'](MovementPricesContractAdapter$1,'__esModule',{'value':!![]});MovementPricesContractAdapter$1['MovementPricesContractAdapter']=void 0x0;const utils_1$V=requireSrc$3();class MovementPricesContractAdapter{['viewer'];['writer'];['logger']=(0, utils_1$V['loggerFactory'])('movement-contract-adapter');constructor(_0xfa0736,_0x2808e2){this['viewer']=_0xfa0736,this['writer']=_0x2808e2;}['getSignerAddress'](){return Promise['resolve'](this['writer']?.['getSignerAddress']()['toString']());}async['getPricesFromPayload'](_0x7f96c5){throw new Error('Pull\x20model\x20not\x20supported');}async['writePricesFromPayloadToContract'](_0x4d2d7d){if(!this['writer'])throw new Error('Adapter\x20not\x20set\x20up\x20for\x20writes');const _0x35b6eb={'withUnsignedMetadata':!![],'metadataTimestamp':Date['now']()},_0x4f12ef=_0x4d2d7d['getPayloadHex'](!![],_0x35b6eb);return await this['writer']['writeAllPrices'](_0x4d2d7d['getDataFeedIds'](),_0x4f12ef,()=>_0x4d2d7d['getPayloadHex'](!![],_0x35b6eb));}async['getUniqueSignerThreshold'](){return await this['viewer']['viewUniqueSignerThreshold']();}async['readPricesFromContract'](_0x2d47a0){const _0x205c9b=await this['readContractData'](_0x2d47a0['getDataFeedIds']());return _0x2d47a0['getDataFeedIds']()['map'](_0x1f0754=>_0x205c9b[_0x1f0754]['lastValue']);}async['readLatestUpdateBlockTimestamp'](_0x172dfe){return (await this['readAnyRoundDetails'](_0x172dfe))['lastBlockTimestampMS'];}async['readTimestampFromContract'](_0x124e3f){return (await this['readAnyRoundDetails'](_0x124e3f))['lastDataPackageTimestampMS'];}async['readContractData'](_0x3df4bc){return await this['viewer']['viewContractData'](_0x3df4bc);}async['readAnyRoundDetails'](_0x171e7c){return Object['values'](await this['readContractData']([_0x171e7c]))[0x0];}}MovementPricesContractAdapter$1['MovementPricesContractAdapter']=MovementPricesContractAdapter;

var MovementPricesContractConnector$1 = {};

Object['defineProperty'](MovementPricesContractConnector$1,'__esModule',{'value':!![]});MovementPricesContractConnector$1['MovementPricesContractConnector']=void 0x0;const MovementContractConnector_1=MovementContractConnector,MovementTxDeliveryMan_1=MovementTxDeliveryMan$1,MovementPriceAdapterContractViewer_1=MovementPriceAdapterContractViewer$1,MovementPriceAdapterContractWriter_1=MovementPriceAdapterContractWriter$1,MovementPricesContractAdapter_1=MovementPricesContractAdapter$1;class MovementPricesContractConnector extends MovementContractConnector_1['MovementContractConnector']{['adapter'];constructor(_0x37f21a,_0x42d9bf,_0x3ee444,_0x16e03b){super(_0x37f21a);const _0x213f7d=_0x3ee444?MovementTxDeliveryMan_1['MovementTxDeliveryMan']['createMultiTxDeliveryMan'](_0x37f21a,_0x3ee444,_0x16e03b):undefined;this['adapter']=new MovementPricesContractAdapter_1['MovementPricesContractAdapter'](MovementPriceAdapterContractViewer_1['MovementPriceAdapterContractViewer']['createMultiReader'](this['client'],_0x42d9bf['packageObjectAddress'],_0x42d9bf['priceAdapterObjectAddress']),_0x213f7d?new MovementPriceAdapterContractWriter_1['MovementPriceAdapterContractWriter'](_0x213f7d,_0x42d9bf['packageObjectAddress'],_0x42d9bf['priceAdapterObjectAddress']):undefined);}['getAdapter'](){return Promise['resolve'](this['adapter']);}}MovementPricesContractConnector$1['MovementPricesContractConnector']=MovementPricesContractConnector;

var PriceAdapterConfig$1 = {};

Object['defineProperty'](PriceAdapterConfig$1,'__esModule',{'value':!![]});

(function(_0x261be6){var _0x2439b7=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x36e0c0,_0xcd5f8b,_0x4338f7,_0x458bae){if(_0x458bae===undefined)_0x458bae=_0x4338f7;var _0x5a22d9=Object['getOwnPropertyDescriptor'](_0xcd5f8b,_0x4338f7);(!_0x5a22d9||('get'in _0x5a22d9?!_0xcd5f8b['__esModule']:_0x5a22d9['writable']||_0x5a22d9['configurable']))&&(_0x5a22d9={'enumerable':!![],'get':function(){return _0xcd5f8b[_0x4338f7];}}),Object['defineProperty'](_0x36e0c0,_0x458bae,_0x5a22d9);}:function(_0x3fb886,_0x48faec,_0xff0836,_0x750d55){if(_0x750d55===undefined)_0x750d55=_0xff0836;_0x3fb886[_0x750d55]=_0x48faec[_0xff0836];}),_0x172e0b=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x4fe952,_0x108840){for(var _0x5584f4 in _0x4fe952)if(_0x5584f4!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x108840,_0x5584f4))_0x2439b7(_0x108840,_0x4fe952,_0x5584f4);};Object['defineProperty'](_0x261be6,'__esModule',{'value':!![]}),_0x172e0b(AptosClientBuilder,_0x261be6),_0x172e0b(config$2,_0x261be6),_0x172e0b(consts,_0x261be6),_0x172e0b(MovementContractConnector,_0x261be6),_0x172e0b(MovementContractViewer$1,_0x261be6),_0x172e0b(MovementTxDeliveryMan$1,_0x261be6),_0x172e0b(MovementPriceAdapterContractViewer$1,_0x261be6),_0x172e0b(MovementPriceAdapterContractWriter$1,_0x261be6),_0x172e0b(MovementPricesContractAdapter$1,_0x261be6),_0x172e0b(MovementPricesContractConnector$1,_0x261be6),_0x172e0b(PriceAdapterConfig$1,_0x261be6),_0x172e0b(utils$3,_0x261be6);}(src$6));getDefaultExportFromCjs(src$6);

var src$5 = {};

var PriceAdapterRadixContractAdapter$1 = {};

var src$4 = {};

var src$3 = {};

var DataPackage = {};

var redstoneConstants = {};

(function(_0xce471a){Object['defineProperty'](_0xce471a,'__esModule',{'value':!![]}),_0xce471a['ALL_FEEDS_KEY']=_0xce471a['DATA_FEED_ID_BS']=_0xce471a['SIGNATURE_BS']=_0xce471a['REDSTONE_MARKER_BS']=_0xce471a['REDSTONE_MARKER_HEX']=_0xce471a['UNSIGNED_METADATA_BYTE_SIZE_BS']=_0xce471a['DATA_PACKAGES_COUNT_BS']=_0xce471a['DEFAULT_NUM_VALUE_DECIMALS']=_0xce471a['DEFAULT_NUM_VALUE_BS']=_0xce471a['MAX_NUM_VALUE_BS']=_0xce471a['DATA_POINT_VALUE_BYTE_SIZE_BS']=_0xce471a['DATA_POINTS_COUNT_BS']=_0xce471a['TIMESTAMP_BS']=void 0x0,_0xce471a['TIMESTAMP_BS']=0x6,_0xce471a['DATA_POINTS_COUNT_BS']=0x3,_0xce471a['DATA_POINT_VALUE_BYTE_SIZE_BS']=0x4,_0xce471a['MAX_NUM_VALUE_BS']=0x20,_0xce471a['DEFAULT_NUM_VALUE_BS']=0x20,_0xce471a['DEFAULT_NUM_VALUE_DECIMALS']=0x8,_0xce471a['DATA_PACKAGES_COUNT_BS']=0x2,_0xce471a['UNSIGNED_METADATA_BYTE_SIZE_BS']=0x3,_0xce471a['REDSTONE_MARKER_HEX']='0x000002ed57011e0000',_0xce471a['REDSTONE_MARKER_BS']=_0xce471a['REDSTONE_MARKER_HEX']['length']/0x2-0x1,_0xce471a['SIGNATURE_BS']=0x41,_0xce471a['DATA_FEED_ID_BS']=0x20,_0xce471a['ALL_FEEDS_KEY']='___ALL_FEEDS___';}(redstoneConstants));getDefaultExportFromCjs(redstoneConstants);

var Serializable$1 = {};

var utils$2 = {};

(function(_0x30e30c){var _0x4a2356=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x51822f){return _0x51822f&&_0x51822f['__esModule']?_0x51822f:{'default':_0x51822f};};Object['defineProperty'](_0x30e30c,'__esModule',{'value':!![]}),_0x30e30c['concat']=_0x30e30c['hexlifyWithout0xPrefix']=_0x30e30c['convertBytesToNumber']=_0x30e30c['convertIntegerNumberToBytes']=_0x30e30c['convertNumberToString']=_0x30e30c['convertNumberToBytes']=_0x30e30c['convertStringToBytes32']=_0x30e30c['assert']=void 0x0,_0x30e30c['useDefaultIfUndefined']=_0x29318d;const _0x25a85c=_0x4a2356(_0x51ff76),_0xae61ca=_0x3e9376,_0x29011f=_0x4eca3f,_0x281251=0x2,_0xa95f94=(_0x1bf900,_0x70e4d9)=>{if(!_0x1bf900){const _0x264a67='Assertion\x20failed'+(_0x70e4d9?':\x20'+_0x70e4d9:'');throw new Error(_0x264a67);}};_0x30e30c['assert']=_0xa95f94;const _0x4146c4=_0x252809=>{let _0x3f7b3a;return _0x252809['length']>0x1f?_0x3f7b3a=(0, _0x29011f['keccak256'])((0, _0x29011f['isHexString'])(_0x252809)?_0x252809:(0, _0x29011f['toUtf8Bytes'])(_0x252809)):_0x3f7b3a=(0, _0x29011f['formatBytes32String'])(_0x252809),(0, _0x29011f['arrayify'])(_0x3f7b3a);};_0x30e30c['convertStringToBytes32']=_0x4146c4;const _0x142544=(_0x2305b0,_0x5e280e,_0x52b0e8)=>{const _0x2e6054=(0, _0x30e30c['convertNumberToString'])(_0x2305b0,_0x5e280e),_0x4ffef4=(0, _0x29011f['parseUnits'])(_0x2e6054,_0x5e280e),_0x1e374a=(0, _0x29011f['arrayify'])(_0x4ffef4['toHexString']());if(_0x52b0e8<_0x1e374a['length'])throw new Error('Overflow:\x20'+('value:\x20'+_0x2305b0+',\x20')+('decimals:\x20'+_0x5e280e+',\x20')+('byteSize:\x20'+_0x52b0e8));else return (0, _0x29011f['zeroPad'])(_0x1e374a,_0x52b0e8);};_0x30e30c['convertNumberToBytes']=_0x142544;const _0x16bbf6=(_0x4d1ca3,_0x2770a4)=>{if(typeof _0x4d1ca3==='string'){const _0x3bdb17=new _0x25a85c['default'](_0x4d1ca3);return _0x3bdb17['toFixed'](_0x2770a4);}const _0x2f500e=Number(_0x4d1ca3)['toFixed'](_0x2770a4);if(!_0x2f500e['includes']('e'))return _0x2f500e;return Number(_0x2f500e)['toLocaleString']('fullwide',{'useGrouping':![]});};_0x30e30c['convertNumberToString']=_0x16bbf6;const _0x468530=(_0x2539ff,_0x112379)=>{(0, _0x30e30c['assert'])(Number['isInteger'](Number(_0x2539ff)),'convertIntegerNumberToBytes\x20expects\x20integer\x20as\x20input');const _0x1f694e=0x0;return (0, _0x30e30c['convertNumberToBytes'])(_0x2539ff,_0x1f694e,_0x112379);};_0x30e30c['convertIntegerNumberToBytes']=_0x468530;const _0x5f0436=_0x5f4f8c=>_0xae61ca['BigNumber']['from'](_0x5f4f8c)['toNumber']();_0x30e30c['convertBytesToNumber']=_0x5f0436;const _0x40a6ed=_0xc403f1=>{return (0, _0x29011f['hexlify'])(_0xc403f1)['slice'](_0x281251);};_0x30e30c['hexlifyWithout0xPrefix']=_0x40a6ed;function _0x29318d(_0x46615d,_0x5ddade){return _0x46615d??_0x5ddade;}const _0x120718=_0x16df71=>{const _0x9548c2=_0x16df71['reduce']((_0x4e02f6,_0x2a609c)=>_0x4e02f6+_0x2a609c['length'],0x0),_0x1bc2ee=new Uint8Array(_0x9548c2);return _0x16df71['reduce']((_0x5e6ab1,_0x3662f8)=>{return _0x1bc2ee['set'](_0x3662f8,_0x5e6ab1),_0x5e6ab1+_0x3662f8['length'];},0x0),_0x1bc2ee;};_0x30e30c['concat']=_0x120718;}(utils$2));getDefaultExportFromCjs(utils$2);

Object['defineProperty'](Serializable$1,'__esModule',{'value':!![]});Serializable$1['Serializable']=void 0x0;const ethers_1$8=_0x3e9376,utils_1$U=utils$2;class Serializable{['toBytesHex'](){const _0x4ae485=this['toBytes']();return ethers_1$8['ethers']['utils']['hexlify'](_0x4ae485);}['toBytesHexWithout0xPrefix'](){const _0xdead32=this['toBytes']();return (0, utils_1$U['hexlifyWithout0xPrefix'])(_0xdead32);}['toJSON'](){const _0x274a0b=this['toObj']();return JSON['stringify'](_0x274a0b);}}Serializable$1['Serializable']=Serializable;

var dataPointDeserializer = {};

var DataPoint$1 = {};

Object['defineProperty'](DataPoint$1,'__esModule',{'value':!![]});DataPoint$1['DataPoint']=void 0x0;const utils_1$T=_0x4eca3f,Serializable_1$1=Serializable$1,utils_2$8=utils$2;class DataPoint extends Serializable_1$1['Serializable']{['dataFeedId'];['value'];['metadata'];constructor(_0x4ab89f,_0x27b44f,_0x102100){super(),this['dataFeedId']=_0x4ab89f,this['value']=_0x27b44f,this['metadata']=_0x102100;}['serializeDataFeedId'](){return (0, utils_2$8['convertStringToBytes32'])(this['dataFeedId']);}['toObj'](){return {'dataFeedId':this['dataFeedId'],'value':utils_1$T['base64']['encode'](this['value']),'metadata':this['metadata']};}['getValueByteSize'](){return this['value']['length'];}['toBytes'](){const _0x1f0059=this['serializeDataFeedId']();return (0, utils_1$T['concat'])([_0x1f0059,this['value']]);}}DataPoint$1['DataPoint']=DataPoint;

var NumericDataPoint$1 = {};

Object['defineProperty'](NumericDataPoint$1,'__esModule',{'value':!![]});NumericDataPoint$1['NumericDataPoint']=NumericDataPoint$1['getNumericDataPointDecimals']=void 0x0;const redstone_constants_1$2=redstoneConstants,utils_1$S=utils$2,DataPoint_1$3=DataPoint$1,getNumericDataPointDecimals=_0x39ff51=>_0x39ff51['decimals']??redstone_constants_1$2['DEFAULT_NUM_VALUE_DECIMALS'];NumericDataPoint$1['getNumericDataPointDecimals']=getNumericDataPointDecimals;class NumericDataPoint extends DataPoint_1$3['DataPoint']{['numericDataPointArgs'];constructor(_0x1e6774){const _0x20d9bb=(0, utils_1$S['useDefaultIfUndefined'])(_0x1e6774['decimals'],redstone_constants_1$2['DEFAULT_NUM_VALUE_DECIMALS']),_0x1cac21=(0, utils_1$S['useDefaultIfUndefined'])(_0x1e6774['valueByteSize'],redstone_constants_1$2['DEFAULT_NUM_VALUE_BS']);(0, utils_1$S['assert'])(_0x1cac21<=redstone_constants_1$2['MAX_NUM_VALUE_BS'],'The\x20byte\x20size\x20of\x20the\x20numeric\x20value\x20cannot\x20be\x20greater\x20than\x20'+redstone_constants_1$2['MAX_NUM_VALUE_BS']);const _0x245068=(0, utils_1$S['convertNumberToBytes'])(_0x1e6774['value'],_0x20d9bb,_0x1cac21);super(_0x1e6774['dataFeedId'],_0x245068,_0x1e6774['metadata']),this['numericDataPointArgs']=_0x1e6774;}['toObj'](){return {...this['numericDataPointArgs']};}}NumericDataPoint$1['NumericDataPoint']=NumericDataPoint;

Object['defineProperty'](dataPointDeserializer,'__esModule',{'value':!![]});dataPointDeserializer['deserializeDataPointFromObj']=void 0x0;const utils_1$R=_0x4eca3f,DataPoint_1$2=DataPoint$1,NumericDataPoint_1$2=NumericDataPoint$1,deserializeDataPointFromObj=_0xc75708=>{return typeof _0xc75708['value']=='number'?new NumericDataPoint_1$2['NumericDataPoint'](_0xc75708):new DataPoint_1$2['DataPoint'](_0xc75708['dataFeedId'],utils_1$R['base64']['decode'](_0xc75708['value']),_0xc75708['metadata']);};dataPointDeserializer['deserializeDataPointFromObj']=deserializeDataPointFromObj;

var SignedDataPackage = {};

var signedPackageDeserializing = {};

var UniversalSigner$1 = {};

Object['defineProperty'](UniversalSigner$1,'__esModule',{'value':!![]});UniversalSigner$1['UniversalSigner']=void 0x0;const bytes_1=_0x462156,utils_1$Q=_0x4eca3f,secp256k1_1$1=_0x22098e,RS_SIGNATURE_LENGTH=0x40,ECDSA_N_DIV_2=BigInt('0x7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0');class UniversalSigner{static ['isSignatureVerificationSkipped']=![];static['getDigestForData'](_0xb5b7){const _0x6bff37=JSON['stringify'](_0xb5b7);return (0, utils_1$Q['keccak256'])((0, utils_1$Q['toUtf8Bytes'])(_0x6bff37));}static['signStringifiableData'](_0x6d0114,_0x112dfe){const _0x47998=UniversalSigner['getDigestForData'](_0x6d0114),_0x169f6a=new utils_1$Q['SigningKey'](_0x112dfe),_0x54a5b0=_0x169f6a['signDigest'](_0x47998);return (0, utils_1$Q['joinSignature'])(_0x54a5b0);}static['recoverSigner'](_0x38a612,_0x3b40fc){const _0x5f1707=(0, utils_1$Q['arrayify'])(UniversalSigner['getDigestForData'](_0x38a612)),_0x4c842d=UniversalSigner['recoverPublicKey'](_0x5f1707,_0x3b40fc);return (0, utils_1$Q['computeAddress'])(_0x4c842d);}static['recoverPublicKey'](_0x8817d8,_0x5748e0){const _0x3e996b=this['verifyAndSplitSignature'](_0x5748e0);return (0, secp256k1_1$1['ecdsaRecover'])((0, utils_1$Q['arrayify'])(_0x3e996b['r']+_0x3e996b['s']['substring'](0x2)),_0x3e996b['recoveryParam'],_0x8817d8,![]);}static['verifyAndSplitSignature'](_0x2e3c61){if(UniversalSigner['isSignatureVerificationSkipped'])return (0, bytes_1['splitSignature'])(_0x2e3c61);let _0x2e76ae;if((0, bytes_1['isBytesLike'])(_0x2e3c61)){const _0x10d2a5=(0, utils_1$Q['hexlify'])(_0x2e3c61)['substring'](0x2);_0x2e76ae=parseInt(_0x10d2a5['substring'](0x2*RS_SIGNATURE_LENGTH),0x10);}else _0x2e76ae=_0x2e3c61['v'];if(_0x2e76ae!==0x1b&&_0x2e76ae!==0x1c)throw new Error('Invalid\x20signature\x20\x27v\x27\x20value\x20-\x20must\x20be\x2027\x20or\x2028\x20but\x20is:\x20'+_0x2e76ae);const _0x523147=(0, bytes_1['splitSignature'])(_0x2e3c61);if(BigInt(_0x523147['s'])>ECDSA_N_DIV_2)throw new Error('Invalid\x20signature\x20\x27s\x27\x20value');return _0x523147;}static['signWithEthereumHashMessage'](_0x394fe6,_0x8f8724){return _0x394fe6['signMessage'](_0x8f8724);}static['recoverAddressFromEthereumHashMessage'](_0x2afc64,_0x541f39){return this['verifyAndSplitSignature'](_0x541f39),(0, utils_1$Q['verifyMessage'])(_0x2afc64,_0x541f39);}}UniversalSigner$1['UniversalSigner']=UniversalSigner;

var hasRequiredSignedPackageDeserializing;function requireSignedPackageDeserializing(){if(hasRequiredSignedPackageDeserializing)return signedPackageDeserializing;hasRequiredSignedPackageDeserializing=0x1,Object['defineProperty'](signedPackageDeserializing,'__esModule',{'value':!![]}),signedPackageDeserializing['deserializeSignedPackage']=_0x29ee75,signedPackageDeserializing['recoverSignerPublicKey']=_0x11a6f2,signedPackageDeserializing['recoverSignerAddress']=_0xb7d501,signedPackageDeserializing['recoverDeserializedSignerAddress']=_0x3b56b2;const _0x449a5a=_0x4eca3f,_0x902a76=UniversalSigner$1,_0x2d5302=requireDataPackage();function _0x29ee75(_0x3620e7){const _0x1d7b84=_0x3620e7['signature'];if(!_0x1d7b84)throw new Error('Signature\x20can\x20not\x20be\x20empty');const _0x124c98=_0x449a5a['base64']['decode'](_0x1d7b84),_0x52dd69=(0, _0x449a5a['splitSignature'])(_0x124c98),{signature:_0x52de72,..._0x557dbb}=_0x3620e7,_0x1ae3c1=_0x2d5302['DataPackage']['fromObj'](_0x557dbb);return {'signature':_0x52dd69,'dataPackage':_0x1ae3c1};}function _0x11a6f2(_0x10376a){return _0x902a76['UniversalSigner']['recoverPublicKey'](_0x10376a['dataPackage']['getSignableHash'](),_0x10376a['signature']);}function _0xb7d501(_0x2f598e){const _0x5df5d4=_0x11a6f2(_0x2f598e);return (0, _0x449a5a['computeAddress'])(_0x5df5d4);}function _0x3b56b2(_0x208f8c){return _0xb7d501(_0x29ee75(_0x208f8c));}return signedPackageDeserializing;}

var hasRequiredSignedDataPackage;function requireSignedDataPackage(){if(hasRequiredSignedDataPackage)return SignedDataPackage;hasRequiredSignedDataPackage=0x1,Object['defineProperty'](SignedDataPackage,'__esModule',{'value':!![]}),SignedDataPackage['SignedDataPackage']=void 0x0;const _0x14da7e=_0x4eca3f,_0x1c3f0a=Serializable$1,_0x2248ca=requireSignedPackageDeserializing();class _0x596600 extends _0x1c3f0a['Serializable']{['dataPackage'];['signature'];constructor(_0x3a96a8,_0xa24180){super(),this['dataPackage']=_0x3a96a8,typeof _0xa24180==='string'?this['signature']=(0, _0x14da7e['splitSignature'])(_0xa24180):this['signature']=_0xa24180;}['serializeSignatureToBytes'](){return (0, _0x14da7e['arrayify'])(this['serializeSignatureToHex']());}['serializeSignatureToHex'](){return (0, _0x14da7e['joinSignature'])(this['signature']);}['recoverSignerPublicKey'](){return (0, _0x2248ca['recoverSignerPublicKey'])(this);}['recoverSignerAddress'](){return (0, _0x2248ca['recoverSignerAddress'])(this);}['toBytes'](){return (0, _0x14da7e['concat'])([this['dataPackage']['toBytes'](),this['serializeSignatureToBytes']()]);}['toObj'](){const _0x5c00e9=this['serializeSignatureToHex']();return {...this['dataPackage']['toObj'](),'signature':_0x14da7e['base64']['encode'](_0x5c00e9)};}static['fromObj'](_0x3180e1){return _0x596600['fromObjLikeThis']((0, _0x2248ca['deserializeSignedPackage'])(_0x3180e1));}static['fromObjLikeThis'](_0xcbf01f){return new _0x596600(_0xcbf01f['dataPackage'],_0xcbf01f['signature']);}}return SignedDataPackage['SignedDataPackage']=_0x596600,SignedDataPackage;}

var hasRequiredDataPackage;function requireDataPackage(){if(hasRequiredDataPackage)return DataPackage;hasRequiredDataPackage=0x1,Object['defineProperty'](DataPackage,'__esModule',{'value':!![]}),DataPackage['DataPackage']=void 0x0;const _0xf8bfd8=_0x4eca3f,_0x5f0dc4=redstoneConstants,_0x2f3a54=Serializable$1,_0x4bc91d=utils$2,_0x57caf1=dataPointDeserializer,_0x456401=requireSignedDataPackage();class _0x4195c7 extends _0x2f3a54['Serializable']{['dataPoints'];['timestampMilliseconds'];['dataPackageId'];constructor(_0x73c08a,_0x4df703,_0x5e77b3){super(),this['dataPoints']=_0x73c08a,this['timestampMilliseconds']=_0x4df703,this['dataPackageId']=_0x5e77b3;if(_0x73c08a['length']===0x0)throw new Error('Can\x20not\x20create\x20a\x20data\x20package\x20with\x20no\x20data\x20points');const _0x49b643=_0x73c08a[0x0]['getValueByteSize']();for(const _0x6e9132 of _0x73c08a){(0, _0x4bc91d['assert'])(_0x6e9132['getValueByteSize']()===_0x49b643,'Values\x20of\x20all\x20data\x20points\x20in\x20a\x20DataPackage\x20must\x20have\x20the\x20same\x20number\x20of\x20bytes');}}['getEachDataPointByteSize'](){return this['dataPoints'][0x0]['getValueByteSize']();}['toBytes'](){return (0, _0xf8bfd8['concat'])([this['serializeDataPoints'](),this['serializeTimestamp'](),this['serializeDefaultDataPointByteSize'](),this['serializeDataPointsCount']()]);}['toObj'](){return {'dataPoints':this['dataPoints']['map'](_0x5b920c=>_0x5b920c['toObj']()),'timestampMilliseconds':this['timestampMilliseconds'],'dataPackageId':this['dataPackageId']};}static['fromObj'](_0x37e8eb){const _0x5bdf13=_0x37e8eb['dataPoints']['map'](_0x57caf1['deserializeDataPointFromObj']);return new _0x4195c7(_0x5bdf13,_0x37e8eb['timestampMilliseconds'],_0x37e8eb['dataPackageId']);}['getSignableHash'](){const _0x5eab4f=this['toBytes'](),_0x3d8c69=(0, _0xf8bfd8['keccak256'])(_0x5eab4f);return (0, _0xf8bfd8['arrayify'])(_0x3d8c69);}['sign'](_0x4dfde8){const _0xf0cd24=this['getSignableHash'](),_0x16b4cd=new _0xf8bfd8['SigningKey'](_0x4dfde8),_0x3806c0=_0x16b4cd['signDigest'](_0xf0cd24);return new _0x456401['SignedDataPackage'](this,_0x3806c0);}['serializeDataPoints'](){return this['dataPoints']['sort']((_0x2a0365,_0x2ff4db)=>{const _0x3a4119=(0, _0xf8bfd8['hexlify'])(_0x2a0365['serializeDataFeedId']()),_0x1d5e6c=(0, _0xf8bfd8['hexlify'])(_0x2ff4db['serializeDataFeedId']()),_0x245c7e=_0x3a4119['localeCompare'](_0x1d5e6c);return (0, _0x4bc91d['assert'])(_0x245c7e!==0x0,'Duplicated\x20dataFeedId\x20found:\x20'+_0x2a0365['dataFeedId']),_0x245c7e;}),(0, _0xf8bfd8['concat'])(this['dataPoints']['map'](_0x3e99a9=>_0x3e99a9['toBytes']()));}['serializeTimestamp'](){return (0, _0x4bc91d['convertIntegerNumberToBytes'])(this['timestampMilliseconds'],_0x5f0dc4['TIMESTAMP_BS']);}['serializeDataPointsCount'](){return (0, _0x4bc91d['convertIntegerNumberToBytes'])(this['dataPoints']['length'],_0x5f0dc4['DATA_POINTS_COUNT_BS']);}['serializeDefaultDataPointByteSize'](){return (0, _0x4bc91d['convertIntegerNumberToBytes'])(this['getEachDataPointByteSize'](),_0x5f0dc4['DATA_POINT_VALUE_BYTE_SIZE_BS']);}}return DataPackage['DataPackage']=_0x4195c7,DataPackage;}

var StringDataPoint$1 = {};

Object['defineProperty'](StringDataPoint$1,'__esModule',{'value':!![]});StringDataPoint$1['StringDataPoint']=void 0x0;const utils_1$P=_0x4eca3f,DataPoint_1$1=DataPoint$1;class StringDataPoint extends DataPoint_1$1['DataPoint']{constructor(_0x46d999){const _0x3592a5=(0, utils_1$P['toUtf8Bytes'])(_0x46d999['value']);super(_0x46d999['dataFeedId'],_0x3592a5);}}StringDataPoint$1['StringDataPoint']=StringDataPoint;

var RedstonePayload$1 = {};

var RedstonePayloadParser$1 = {};

Object['defineProperty'](RedstonePayloadParser$1,'__esModule',{'value':!![]});RedstonePayloadParser$1['convertDataPointToNumericDataPoint']=RedstonePayloadParser$1['RedstonePayloadParser']=void 0x0;const ethers_1$7=_0x3e9376,utils_1$O=_0x4eca3f,redstone_constants_1$1=redstoneConstants,utils_2$7=utils$2,DataPackage_1$1=requireDataPackage(),SignedDataPackage_1=requireSignedDataPackage(),DataPoint_1=DataPoint$1,NumericDataPoint_1$1=NumericDataPoint$1;class RedstonePayloadParser{['bytesData'];constructor(_0x24e702){this['bytesData']=_0x24e702;}['parse'](){this['assertValidRedstoneMarker']();const _0x2937dd=this['extractUnsignedMetadata']();let _0xb31cfc=_0x2937dd['length']+redstone_constants_1$1['UNSIGNED_METADATA_BYTE_SIZE_BS']+redstone_constants_1$1['REDSTONE_MARKER_BS'];const _0x3a5808=this['extractNumber']({'negativeOffset':_0xb31cfc,'length':redstone_constants_1$1['DATA_PACKAGES_COUNT_BS']});_0xb31cfc+=redstone_constants_1$1['DATA_PACKAGES_COUNT_BS'];const _0x3c80e6=[];for(let _0x4028c1=0x0;_0x4028c1<_0x3a5808;_0x4028c1++){const _0x19556e=this['extractSignedDataPackage'](_0xb31cfc);_0x3c80e6['push'](_0x19556e),_0xb31cfc+=_0x19556e['toBytes']()['length'];}const _0x245d08=this['slice']({'negativeOffset':_0xb31cfc,'length':this['bytesData']['length']-_0xb31cfc});return _0x3c80e6['reverse'](),{'signedDataPackages':_0x3c80e6,'unsignedMetadata':_0x2937dd,'remainderPrefix':_0x245d08};}['extractUnsignedMetadata'](){const _0x181102=this['extractNumber']({'negativeOffset':redstone_constants_1$1['REDSTONE_MARKER_BS'],'length':redstone_constants_1$1['UNSIGNED_METADATA_BYTE_SIZE_BS']});return this['slice']({'negativeOffset':redstone_constants_1$1['REDSTONE_MARKER_BS']+redstone_constants_1$1['UNSIGNED_METADATA_BYTE_SIZE_BS'],'length':_0x181102});}['assertValidRedstoneMarker'](){const _0x48a2e1=this['slice']({'negativeOffset':0x0,'length':redstone_constants_1$1['REDSTONE_MARKER_BS']}),_0x38471c=(0, utils_1$O['hexlify'])(_0x48a2e1);if(_0x38471c!==redstone_constants_1$1['REDSTONE_MARKER_HEX'])throw new Error('Received\x20invalid\x20redstone\x20marker:\x20'+_0x38471c);}['extractSignedDataPackage'](_0x3acf08){let _0xe551f5=_0x3acf08;const _0xb04c73=this['slice']({'negativeOffset':_0xe551f5,'length':redstone_constants_1$1['SIGNATURE_BS']});_0xe551f5+=redstone_constants_1$1['SIGNATURE_BS'];const _0x433771=this['extractNumber']({'negativeOffset':_0xe551f5,'length':redstone_constants_1$1['DATA_POINTS_COUNT_BS']});_0xe551f5+=redstone_constants_1$1['DATA_POINTS_COUNT_BS'];const _0x278b63=this['extractNumber']({'negativeOffset':_0xe551f5,'length':redstone_constants_1$1['DATA_POINT_VALUE_BYTE_SIZE_BS']});_0xe551f5+=redstone_constants_1$1['DATA_POINT_VALUE_BYTE_SIZE_BS'];const _0x47f613=this['extractNumber']({'negativeOffset':_0xe551f5,'length':redstone_constants_1$1['TIMESTAMP_BS']});_0xe551f5+=redstone_constants_1$1['TIMESTAMP_BS'];const _0x5cbe5c=[];let _0x521ee6;for(let _0x5eae65=0x0;_0x5eae65<_0x433771;_0x5eae65++){const _0xfb6a02=this['slice']({'negativeOffset':_0xe551f5,'length':_0x278b63});_0xe551f5+=_0x278b63;const _0x23940d=this['slice']({'negativeOffset':_0xe551f5,'length':redstone_constants_1$1['DATA_FEED_ID_BS']});_0xe551f5+=redstone_constants_1$1['DATA_FEED_ID_BS'];const _0x12dc0e=RedstonePayloadParser['createDataPoint'](_0x23940d,_0xfb6a02);if(!_0x521ee6)_0x521ee6=_0x12dc0e['dataFeedId'];else _0x521ee6!==_0x12dc0e['dataFeedId']&&(_0x521ee6='__MULTI_POINT__');_0x5cbe5c['unshift'](_0x12dc0e);}return !_0x521ee6&&(_0x521ee6='__EMPTY__'),new SignedDataPackage_1['SignedDataPackage'](new DataPackage_1$1['DataPackage'](_0x5cbe5c,_0x47f613,_0x521ee6),(0, utils_1$O['hexlify'])(_0xb04c73));}static['createDataPoint'](_0x4651b0,_0x5a8ce5){return new DataPoint_1['DataPoint']((0, utils_1$O['toUtf8String'])(_0x4651b0)['replaceAll']('\x00',''),_0x5a8ce5);}['extractNumber'](_0x5bf350){const _0x1599e6=this['slice'](_0x5bf350);return (0, utils_2$7['convertBytesToNumber'])(_0x1599e6);}['slice'](_0x347751){const {negativeOffset:_0x5bdff2,length:_0x180e59}=_0x347751,_0x17c32e=this['bytesData']['length']-_0x5bdff2,_0x4cd787=_0x17c32e-_0x180e59;return this['bytesData']['slice'](_0x4cd787,_0x17c32e);}}RedstonePayloadParser$1['RedstonePayloadParser']=RedstonePayloadParser;const convertDataPointToNumericDataPoint=(_0x37837b,_0x12c516)=>new NumericDataPoint_1$1['NumericDataPoint']({'value':Number((0, utils_1$O['formatUnits'])(ethers_1$7['BigNumber']['from'](_0x37837b['value']),_0x12c516??redstone_constants_1$1['DEFAULT_NUM_VALUE_DECIMALS'])),'dataFeedId':_0x37837b['dataFeedId'],'decimals':_0x12c516});RedstonePayloadParser$1['convertDataPointToNumericDataPoint']=convertDataPointToNumericDataPoint;

Object['defineProperty'](RedstonePayload$1,'__esModule',{'value':!![]});RedstonePayload$1['RedstonePayload']=void 0x0;const utils_1$N=_0x4eca3f,Serializable_1=Serializable$1,redstone_constants_1=redstoneConstants,utils_2$6=utils$2,RedstonePayloadParser_1=RedstonePayloadParser$1;class RedstonePayload extends Serializable_1['Serializable']{['signedDataPackages'];['unsignedMetadata'];constructor(_0x185350,_0x17ac47){super(),this['signedDataPackages']=_0x185350,this['unsignedMetadata']=_0x17ac47;}static['prepare'](_0x3bbc43,_0x2fe65f){return new RedstonePayload(_0x3bbc43,_0x2fe65f)['toBytesHexWithout0xPrefix']();}['toObj'](){return {'signedDataPackages':this['signedDataPackages']['map'](_0xbc2887=>_0xbc2887['toObj']()),'unsignedMetadata':this['unsignedMetadata']};}['toBytes'](){return (0, utils_1$N['concat'])([this['serializeSignedDataPackages'](),this['serializeUnsignedMetadata'](),redstone_constants_1['REDSTONE_MARKER_HEX']]);}['serializeUnsignedMetadata'](){const _0x3c2db7=(0, utils_1$N['isBytes'])(this['unsignedMetadata'])?this['unsignedMetadata']:(0, utils_1$N['toUtf8Bytes'])(this['unsignedMetadata']),_0x24a3d6=(0, utils_2$6['convertIntegerNumberToBytes'])(_0x3c2db7['length'],redstone_constants_1['UNSIGNED_METADATA_BYTE_SIZE_BS']);return (0, utils_1$N['concat'])([_0x3c2db7,_0x24a3d6]);}['serializeSignedDataPackages'](){return (0, utils_1$N['concat'])([...this['signedDataPackages']['map'](_0x20ec23=>_0x20ec23['toBytes']()),(0, utils_2$6['convertIntegerNumberToBytes'])(this['signedDataPackages']['length'],redstone_constants_1['DATA_PACKAGES_COUNT_BS'])]);}static['parse'](_0x3640b1){return new RedstonePayloadParser_1['RedstonePayloadParser'](_0x3640b1)['parse']();}}RedstonePayload$1['RedstonePayload']=RedstonePayload;

var types$4 = {};

Object['defineProperty'](types$4,'__esModule',{'value':!![]});types$4['ScoreType']=void 0x0;var ScoreType;(function(_0x4f99b8){_0x4f99b8['coinbaseKYD']='coinbase-kyd';}(ScoreType||(types$4['ScoreType']=ScoreType={})));

var onDemand = {};

var onDemandSigner = {};

Object['defineProperty'](onDemandSigner,'__esModule',{'value':!![]});onDemandSigner['prepareMessageToSign']=onDemandSigner['signOnDemandDataPackage']=void 0x0;const DataPackage_1=requireDataPackage(),NumericDataPoint_1=NumericDataPoint$1,signOnDemandDataPackage=(_0x1b4797,_0x426888,_0x426b88,_0xcfbd43)=>{const _0x4eed2e=new NumericDataPoint_1['NumericDataPoint']({'dataFeedId':_0x1b4797,'value':_0x426888,'decimals':0x0}),_0x39d198=new DataPackage_1['DataPackage']([_0x4eed2e],_0x426b88,_0x1b4797);return _0x39d198['sign'](_0xcfbd43);};onDemandSigner['signOnDemandDataPackage']=signOnDemandDataPackage;const prepareMessageToSign=_0x527a22=>{const _0x510e8f=new Date(_0x527a22)['toUTCString']();return 'Allow\x20verification\x20of\x20my\x20account\x20on\x20'+_0x510e8f;};onDemandSigner['prepareMessageToSign']=prepareMessageToSign;

(function(_0x2a095c){var _0x30e25a=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x3508fc,_0x47d324,_0x23a6af,_0xf4d936){if(_0xf4d936===undefined)_0xf4d936=_0x23a6af;var _0x1e40db=Object['getOwnPropertyDescriptor'](_0x47d324,_0x23a6af);(!_0x1e40db||('get'in _0x1e40db?!_0x47d324['__esModule']:_0x1e40db['writable']||_0x1e40db['configurable']))&&(_0x1e40db={'enumerable':!![],'get':function(){return _0x47d324[_0x23a6af];}}),Object['defineProperty'](_0x3508fc,_0xf4d936,_0x1e40db);}:function(_0x2a2279,_0x59203c,_0x1e30cc,_0x5d6c29){if(_0x5d6c29===undefined)_0x5d6c29=_0x1e30cc;_0x2a2279[_0x5d6c29]=_0x59203c[_0x1e30cc];}),_0x39c64c=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x155464,_0x542285){for(var _0x279e3d in _0x155464)if(_0x279e3d!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x542285,_0x279e3d))_0x30e25a(_0x542285,_0x155464,_0x279e3d);};Object['defineProperty'](_0x2a095c,'__esModule',{'value':!![]}),_0x39c64c(onDemandSigner,_0x2a095c);}(onDemand));getDefaultExportFromCjs(onDemand);

(function(_0x1164a2){var _0x360f96=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x5684c9,_0x511f3a,_0x33ed24,_0x1d373a){if(_0x1d373a===undefined)_0x1d373a=_0x33ed24;var _0x2d25c7=Object['getOwnPropertyDescriptor'](_0x511f3a,_0x33ed24);(!_0x2d25c7||('get'in _0x2d25c7?!_0x511f3a['__esModule']:_0x2d25c7['writable']||_0x2d25c7['configurable']))&&(_0x2d25c7={'enumerable':!![],'get':function(){return _0x511f3a[_0x33ed24];}}),Object['defineProperty'](_0x5684c9,_0x1d373a,_0x2d25c7);}:function(_0x4f2b19,_0x57c156,_0x5b9e99,_0x1c363f){if(_0x1c363f===undefined)_0x1c363f=_0x5b9e99;_0x4f2b19[_0x1c363f]=_0x57c156[_0x5b9e99];}),_0x512c14=commonjsGlobal&&commonjsGlobal['__setModuleDefault']||(Object['create']?function(_0xa00e0d,_0x3b2004){Object['defineProperty'](_0xa00e0d,'default',{'enumerable':!![],'value':_0x3b2004});}:function(_0x5678ae,_0x3de8d5){_0x5678ae['default']=_0x3de8d5;}),_0x4196d7=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x8b8584,_0x2c14ee){for(var _0x4cc3de in _0x8b8584)if(_0x4cc3de!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x2c14ee,_0x4cc3de))_0x360f96(_0x2c14ee,_0x8b8584,_0x4cc3de);},_0x2ee487=commonjsGlobal&&commonjsGlobal['__importStar']||function(_0x3832c0){if(_0x3832c0&&_0x3832c0['__esModule'])return _0x3832c0;var _0x118623={};if(_0x3832c0!=null){for(var _0x121110 in _0x3832c0)if(_0x121110!=='default'&&Object['prototype']['hasOwnProperty']['call'](_0x3832c0,_0x121110))_0x360f96(_0x118623,_0x3832c0,_0x121110);}return _0x512c14(_0x118623,_0x3832c0),_0x118623;};Object['defineProperty'](_0x1164a2,'__esModule',{'value':!![]}),_0x1164a2['utils']=_0x1164a2['consts']=_0x1164a2['Serializable']=void 0x0,_0x4196d7(requireDataPackage(),_0x1164a2),_0x4196d7(requireSignedPackageDeserializing(),_0x1164a2),_0x4196d7(requireSignedDataPackage(),_0x1164a2),_0x4196d7(DataPoint$1,_0x1164a2),_0x4196d7(NumericDataPoint$1,_0x1164a2),_0x4196d7(StringDataPoint$1,_0x1164a2),_0x4196d7(RedstonePayload$1,_0x1164a2),_0x4196d7(RedstonePayloadParser$1,_0x1164a2),_0x4196d7(UniversalSigner$1,_0x1164a2);var _0x44fd73=Serializable$1;Object['defineProperty'](_0x1164a2,'Serializable',{'enumerable':!![],'get':function(){return _0x44fd73['Serializable'];}}),_0x1164a2['consts']=_0x2ee487(redstoneConstants),_0x4196d7(types$4,_0x1164a2),_0x1164a2['utils']=_0x2ee487(utils$2),_0x4196d7(onDemand,_0x1164a2);}(src$3));getDefaultExportFromCjs(src$3);

var nodes = {
	"I-5rWUehEv-MjdK9gFw09RxfSLQX9DIHxG614Wf8qo0": {
		url: "https://redstone.finance",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "redstone",
		ipAddress: "0.0.0.0",
		dataServiceId: "redstone-main-demo",
		evmAddress: "0x0C39486f770B26F5527BBBf942726537986Cd7eb",
		description: "Main RedStone Provider with all available tokens.",
		ecdsaPublicKey: "0x04009dd87eb41d96ce8ad94aa22ea8b0ba4ac20c45e42f71726d6b180f93c3f298e333ae7591fe1c9d88234575639be9e81e35ba2fe5ad2c2260f07db49ccb9d0d",
		dateAdded: "2024-01-01"
	},
	f1Ipos2fVPbxPVO65GBygkMyW0tkAhp2hdprRPPBBN8: {
		url: "https://redstone.finance",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "redstone-avalanche-node-1",
		ipAddress: "0.0.0.0",
		dataServiceId: "redstone-avalanche-demo",
		evmAddress: "0x3a7d971De367FE15D164CDD952F64205F2D9f10c",
		description: "Most popular tokens from the Avalanche ecosystem - demo node 1",
		ecdsaPublicKey: "0x0455e7c699a153e02de0e6d3c3dcdb34d1e57a9456205b0e124e2cac29b58be83c4faa2081d39b38aa3c41fa3350f50dcf87d40ab695c9c86709040d39d5ba9be3",
		dateAdded: "2024-01-01"
	},
	"6bZ3yxPYy0LHPqo7MNqw0PHTeIM2PR-RmfTPYLltsfw": {
		url: "https://redstone.finance",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "redstone-avalanche-node-2",
		ipAddress: "0.0.0.0",
		dataServiceId: "redstone-avalanche-demo",
		evmAddress: "0x41ed5321B76C045f5439eCf9e73F96c6c25B1D75",
		description: "Most popular tokens from the Avalanche ecosystem - demo node 2",
		ecdsaPublicKey: "0x0428082ee0046157d0fba27aa9391f5651c41b9dc8b12011ed72622c05e55d56ae503039f912de7345dab28ae68d80b055082f74286b82ffc2c09c07d8b2e22378",
		dateAdded: "2024-01-01"
	},
	"OxQ-vLXcwTZdcdlCziC95duFylo8Aj9xBJ4XsC3xlGk": {
		name: "redstone-arbitrum-dev-node-1",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		description: "Data feeds from arbitrum redstone nodes - dev 1",
		dataServiceId: "redstone-arbitrum-demo",
		evmAddress: "0x16883583647260AB2e2BA63c4c38D9807Fd7296e",
		ipAddress: "0.0.0.0",
		url: "https://redstone.finance/",
		ecdsaPublicKey: "0x041aea25f013dee918d88063daca2d0113fa41a95b66440d8d8edf09a3d397045f5b9d391c1e50e6998d3b2f95918899e382f444714e64d9fd689c92d4a2535ea1",
		dateAdded: "2024-01-01"
	},
	"LtVolyIqpjhCr8fw_ue_-Y9xaH5IURpKZclyJbsu4SE": {
		name: "redstone-arbitrum-dev-node-2",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		description: "Data feeds from arbitrum redstone nodes - dev 2",
		dataServiceId: "redstone-arbitrum-demo",
		evmAddress: "0x1053d519Cc8C8cd7e53FecbFb13B6F0ffbD4c8C5",
		ipAddress: "0.0.0.0",
		url: "https://redstone.finance/",
		ecdsaPublicKey: "0x04d0f2bb463dfe89778fc6fe68ed6945bbf13f1391369942d78607cc4eac906aa63d082caf6c81c3c191daf4bbb7cfabbf5fca1ca762e02529cf700a15ac0cd828",
		dateAdded: "2024-01-01"
	},
	"tTTthGBknPG4MWH5y-zDKO2dEF3Fxo0gPbzV6PLNlNQ": {
		name: "redstone-avalanche-prod-node-1",
		description: "Most popular tokens from the Avalanche ecosystem - prod node 1",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-avalanche-prod",
		evmAddress: "0x1eA62d73EdF8AC05DfceA1A34b9796E937a29EfF",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04ea48ca25db5d352ec62c4f92e8c115068e92a327f3536479a0185ec6e0f8d26db4409bffdc8c6ea898743f908861a47fdb4a52e44d129a56418a1c08008fd425",
		dateAdded: "2024-01-01"
	},
	azkge6PQ_40JzMdcgkpj21jxhl0JaQg1o6yPSCekJ4Q: {
		name: "redstone-avalanche-prod-node-2",
		description: "Most popular tokens from the Avalanche ecosystem - prod node 2",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-avalanche-prod",
		evmAddress: "0x2c59617248994D12816EE1Fa77CE0a64eEB456BF",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04f5f035588502146774d0ccfd62ee5bf1d7f1dbb96aae33a79765c636b8ec75a36f5121931b5cc37215a7d4280c5700ca92daaaf93c32b06ca9f98b1f4ece624e",
		dateAdded: "2024-01-01"
	},
	"WMUjPDhwoYvDqw5BNAaCt6-iLs8fhzwC0L_rT4lTxFg": {
		name: "redstone-avalanche-prod-node-3",
		description: "Most popular tokens from the Avalanche ecosystem - prod node 3",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-avalanche-prod",
		evmAddress: "0x12470f7aBA85c8b81D63137DD5925D6EE114952b",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04626f2ad2cfb0b41a24276d78de8959bcf45fc5e80804416e660aab2089d15e98206526e639ee19d17c8f9ae0ce3a6ff1a8ea4ab773d0fb4214e08aad7ba978c8",
		dateAdded: "2024-01-01"
	},
	"POU2msUaCzhDq32_hSsKrCH37hHlUvbqfK0-Wjuz3Is": {
		name: "redstone-avalanche-prod-node-4",
		description: "Most popular tokens from the Avalanche ecosystem - prod node 4",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-avalanche-prod",
		evmAddress: "0x109B4a318A4F5ddcbCA6349B45f881B4137deaFB",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x047cea60b650ac5e72ca9991cd3c365c17db58cc6c0f385af0b05056a2d6068480093b603efcb47410e8092d60c5b85d27a3e43dc6ddc4077994e6eabd9a8ab9cb",
		dateAdded: "2024-01-01"
	},
	"9QvwJVg8PapGD6VaGPffcYajExbnJWG3HH5hG76-5xM": {
		name: "redstone-avalanche-prod-node-5",
		description: "Most popular tokens from the Avalanche ecosystem - prod node 5",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-avalanche-prod",
		evmAddress: "0x83cbA8c619fb629b81A65C2e67fE15cf3E3C9747",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04a66e3eb25f4110aa9f9cae8864b39b249568c094123737541e897d924253c84279bfd0f500e85f75a0943c41ca03c95fe0c3c7339e0499b5d6993a3f580aef85",
		dateAdded: "2024-01-01"
	},
	HebMpM4xI07ev3jbEWamFNmRxu2ojflQfh0b2lpjFoM: {
		name: "redstone-primary-demo-node-1",
		description: "Data feeds from primary redstone nodes - demo node 1",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-primary-demo",
		evmAddress: "0xdE13FdEE7a9B483129a81794d02FCB4021069f0C",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x041c320fdaca2d381101d85f2e0fcf9c6d6ebb88f2a3b71a20ecf229c1cd0e81b541d6960b58666fce5abba84a460590c72f4e871d87b451f0b7823f98d0c41970",
		dateAdded: "2024-01-01"
	},
	"-qrcZLkqrgS9cNhLvy0c7gzpkGlAgwbZ6C3_hk2vvJQ": {
		name: "redstone-primary-demo-node-2",
		description: "Data feeds from primary redstone nodes - demo node 2",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-primary-demo",
		evmAddress: "0xad05Ce43E0bCD11345f08a28995951DEc30D5226",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04440a1d2f497db99d7282bf6ccaf133995ed05f992c177c1eaf7b861a9e64261d1da123bcefa6bed232755197fc5082d42696e72aaf42b45771eba336d693b9b3",
		dateAdded: "2024-01-01"
	},
	"0x6e8428aEcE9c0bBF06e07c21282Df98DfdFc99dB": {
		name: "redstone-primary-demo-keyrock-1",
		description: "Data feeds from primary redstone nodes - Keyrock node 1",
		logo: "https://raw.githubusercontent.com/redstone-finance/redstone-images/main/providers/keyrock/logo.png",
		dataServiceId: "redstone-primary-demo",
		evmAddress: "0x6e8428aEcE9c0bBF06e07c21282Df98DfdFc99dB",
		url: "https://keyrock.com",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04584dfb2a92d6c3ab860b208d586e5d10464a97e0d2e07dd5c4e90aa3646f8f0108e14f2e47278971fcaa8c79bfa5a36f3adce8710f8732a621d3dc70b59fa804",
		dateAdded: "2025-05-22"
	},
	R4ih95AvybIzz3uKuEmpBee17J73CGkSk4bvzU_IZ_I: {
		name: "redstone-primary-prod-node-1",
		description: "Data feeds from primary redstone nodes - prod node 1",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0x8BB8F32Df04c8b654987DAaeD53D6B6091e3B774",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x049a0e6cada7938a0fc616578aff2b11337d90ec4e99e9fee95e57e9d8371562b31698225fb73c666ba586842b913e67ad289f374f7a46fc873342f805a8683d4e",
		dateAdded: "2024-01-01"
	},
	WM9CHZ6CKf95z47krdOFFKX6kuOusBlyIVSJmcjdrEQ: {
		name: "redstone-primary-prod-node-2",
		description: "Data feeds from primary redstone nodes - prod node 2",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0xdEB22f54738d54976C4c0fe5ce6d408E40d88499",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04683f7100d67fbaccae68db4d146f7bc3090c5cbcb1351e333efd58d42f609ceeada12b0af28a6e789d6edfe25fe784dd1e86798240d4cee9f60e56848cb55965",
		dateAdded: "2024-01-01"
	},
	"9syjTFZp0__CsqnMjKEo6sjl6_yRWYm7TQjcD0hFEN8": {
		name: "redstone-primary-prod-node-3",
		description: "Data feeds from primary redstone nodes - prod node 3",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0x51Ce04Be4b3E32572C4Ec9135221d0691Ba7d202",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04490f08821dea02d23683f170459aa6317dd65b544aac1df514f2e657f87ac00b81757edce3e78785e00dcd92e2dc8ddd9a680dc929a0c91062d87ae000a217ce",
		dateAdded: "2024-01-01"
	},
	"4dRTLZeJPaDMhGE2jUndt-3KIOQxO6Y_BCV-3KIiPhI": {
		name: "redstone-primary-prod-node-4",
		description: "Data feeds from primary redstone nodes - prod node 4",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0xDD682daEC5A90dD295d14DA4b0bec9281017b5bE",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04a221496ff2436da121796c11f888cc4e2155da7e36bd1148c9466fb54627f15e42d4cfed06b1570b7ebe0c589acf91fd314cfd95303c9894c0be43432aba619f",
		dateAdded: "2024-01-01"
	},
	wZv_gFZgozLm2xjUaMZPzvgr6E4VcUlRZMXZOILfBXw: {
		name: "redstone-primary-prod-node-5",
		description: "Data feeds from primary redstone nodes - prod node 5",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0x9c5AE89C4Af6aA32cE58588DBaF90d18a855B6de",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04f23aa199aeda6e55628e0ec88194c47713ba260898aae4483fb2f166c7e29b1664f817922059736358de71bdf374b3354db58d15f928a6fac9d1f61e284019b7",
		dateAdded: "2024-01-01"
	},
	"0xe5a346d2EEEc95f7b563b6862732b291E7F96C74": {
		name: "redstone-primary-prod-kudasaijp-1",
		description: "Data feeds from primary redstone nodes - KudasaiJP node 1",
		logo: "https://raw.githubusercontent.com/redstone-finance/redstone-images/main/providers/kudasaijp/logo_orange.svg",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0xe5a346d2EEEc95f7b563b6862732b291E7F96C74",
		url: "https://kudasai.co.jp",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04b6aae64a76ff84882ab79997b912b9d0bbdff2800309364e7f319f227a19dad0aa4711df944ee445cf8d18c2c5946a10595d25c5939e728c72a727f43ec9af40",
		dateAdded: "2025-03-28"
	},
	"0x04d938651ba3E1313c625244Cb01f0930Afa388B": {
		name: "redstone-primary-prod-teb-1",
		description: "Data feeds from primary redstone nodes - TEB node 1",
		logo: "https://raw.githubusercontent.com/redstone-finance/redstone-images/main/providers/teb/logo.png",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0x04d938651ba3E1313c625244Cb01f0930Afa388B",
		url: "https://x.com/tebplace",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x042dceb02d066a0d4628727da91a2879fa22d4ee6c96db87c08241c7e1bc3ffea857a537764ab9e30fca3696bc6920bb7a5ff49e97d0529a708706954c5fe2e226",
		dateAdded: "2025-04-23"
	},
	"0x82991bBD3b77De53f9D1ceA88F1B8021f27B557F": {
		name: "redstone-primary-prod-undefined-labs-1",
		description: "Data feeds from primary redstone nodes - Undefined Labs node 1",
		logo: "https://raw.githubusercontent.com/redstone-finance/redstone-images/main/providers/undefined_labs/logo.png",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0x82991bBD3b77De53f9D1ceA88F1B8021f27B557F",
		url: "https://undefinedlabs.xyz",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04e564132c4fba2edf868e9a09fd6fd5c44246d543536db38b06807d4de3e7a5798ac2e0b27997bd748f30edb93bcf70ece026cac67229f576a3c9b754a23642da",
		dateAdded: "2025-04-23"
	},
	"0xE6540844F0aE3eC499d365De1f594b2A7c2860E7": {
		name: "redstone-primary-prod-alchemy-1",
		description: "Data feeds from primary redstone nodes - Alchemy node 1",
		logo: "https://raw.githubusercontent.com/redstone-finance/redstone-images/main/providers/alchemy/logo.png",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0xE6540844F0aE3eC499d365De1f594b2A7c2860E7",
		url: "https://www.alchemy.com",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04e6bb9d55466da4503c12ab4a0d4c671792fa3b4b4c6b1d6e6ea816c7bfcb1cab70b32a027eabbd486ca7c335ce63d9ed7ab6309cd95c2be13a78a8e960f316d3",
		dateAdded: "2025-04-23"
	},
	"0xaB4C37FC34E814e61eC09aE9CE8652CE24EfE53f": {
		name: "redstone-primary-prod-kaiko-1",
		description: "Data feeds from primary redstone nodes - Kaiko node 1",
		logo: "https://raw.githubusercontent.com/redstone-finance/redstone-images/main/providers/kaiko/logo.png",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0xaB4C37FC34E814e61eC09aE9CE8652CE24EfE53f",
		url: "https://kaiko.com/",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04f1b0e6f15cd00f16f3cfec40bf7facdba5b49624c5ad71c4dd55b0428c03479ac6d17219fbad7f5c8b7b48a2a05de3647c6843d0044d81e6c68f6a4b0e21447d",
		dateAdded: "2025-04-23"
	},
	"0xd0C9878c72C4B8B062378713801Ca7b19117269f": {
		name: "redstone-primary-prod-auros-1",
		description: "Data feeds from primary redstone nodes - Auros node 1",
		logo: "https://raw.githubusercontent.com/redstone-finance/redstone-images/main/providers/auros/logo.png",
		dataServiceId: "redstone-primary-prod",
		evmAddress: "0xd0C9878c72C4B8B062378713801Ca7b19117269f",
		url: "https://auros.global",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x0431f5b2d7cf66b1d1fb7fdfd9333515ca508ec399872ef43f00ec63704a1ca9b7858ab86e3b6d3bb8c1571472b568054f44d13eafad959f7c25f202dedac8ff54",
		dateAdded: "2025-05-28"
	},
	ckah_Yc4ZhzQbx27Lgo1Ad1yePneQdkusER_c49KVK0: {
		name: "redstone-arbitrum-prod-node-1",
		description: "Data feeds from arbitrum redstone nodes - prod 1",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-arbitrum-prod",
		evmAddress: "0x345Efd26098e173F811e3B9Af1B0e0a11872B38b",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x0437026448b1a69e4be9bcee0789199c50e93446c75eb697efbeb732fa3b51d130f92d6597de811106511ba39f712f8cf025b82e0003a611b9f78804e66caf46d8",
		dateAdded: "2024-01-01"
	},
	"3HHevuTyFGYJJ-nBPonvDaB5oGIZbCbZtF0CAeFB13s": {
		name: "redstone-arbitrum-prod-node-2",
		description: "Data feeds from arbitrum redstone nodes - prod 2",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-arbitrum-prod",
		evmAddress: "0xbD0c5ccd85D5831B10E3e49527B8Cd67e2EFAf39",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x046ecbc2bcca15fb4a44b88e85e1433b22ad09b7960370c9dba379e09f37ebea0cbc3fb9a60f39df2c4b7cd8b885717ca1dafeac35e9edc5b550d0b61c4a7e581f",
		dateAdded: "2024-01-01"
	},
	"AkT1al4MbVqV8w9LXIvdsE-2xm_moP1ARaImUlqgDZA": {
		name: "redstone-arbitrum-prod-node-3",
		description: "Data feeds from arbitrum redstone nodes - prod 3",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-arbitrum-prod",
		evmAddress: "0x2F3E8EC88C01593d10ca9461c807660fF2D8DB28",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x047f0ac528b5b5f306b6488965bcd86cce263487320caaab7703171c8cf461eb692cd35837ff91d243d2972fc4c4598d08d8e1f5795ecbb1cb974087970a5783d8",
		dateAdded: "2024-01-01"
	},
	"k9ke_oPBAy4bt-Vu0_kwRcSx4HwcQl3Jd8h7dmomfrc": {
		name: "redstone-arbitrum-prod-node-4",
		description: "Data feeds from arbitrum redstone nodes - prod 4",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-arbitrum-prod",
		evmAddress: "0xb7f154bB5491565D215F4EB1c3fe3e84960627aF",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04e051f36116b6bc953f2a94825a4931f6fe6e3a3f218e1dab2712a2a31fff450d1e8f82dcb3cba9dce6dd382d6b0e259d2a896f8a10947a234c08e6f424d272c9",
		dateAdded: "2024-01-01"
	},
	"7zqOor2CATpcOq_DduEAsJ_8us4FJ0BTZbMjLAH4MsU": {
		name: "redstone-arbitrum-prod-node-5",
		description: "Data feeds from arbitrum redstone nodes - prod 5",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		dataServiceId: "redstone-arbitrum-prod",
		evmAddress: "0xE6b0De8F4B31F137d3c59b5a0A71e66e7D504Ef9",
		url: "https://redstone.finance",
		ipAddress: "0.0.0.0",
		ecdsaPublicKey: "0x04b41ed2eaf2b8b15232ab7d25458d1b2cc1ef02200ab50f912307cf832f619aadf89800ac17b1c3e40c4bebc7b4305bbec558ca5e60acb034dbb6c09273e29fbe",
		dateAdded: "2024-01-01"
	},
	"00HZS36ZwzP43q25-T_UV7pYlNXe9ChwDpNiM7A708c": {
		url: "https://redstone.finance",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "redstone-fast-demo",
		ipAddress: "0.0.0.0",
		dataServiceId: "redstone-fast-demo",
		description: "Very frequent updates from the fastest sources",
		evmAddress: "0x69f70Aa9828Ed876d49e83Ee006b9d333BB406d8",
		ecdsaPublicKey: "0x04d048bea3bcf01b82162703a7f59cf51d91a95a8fd3921b5a858a8ff1c1b858dd337918cb7969c695711f590779ffb9a1028d0205074f11d9fd40e905f6670d0a",
		dateAdded: "2024-01-01"
	},
	"0x4802Adedd012Ea9c3F9F4AA1e504508A2c1fafF3": {
		url: "https://redstone.finance",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "redstone-megaeth-testnet",
		ipAddress: "0.0.0.0",
		dataServiceId: "redstone-megaeth-testnet",
		description: "Very frequent updates from the fastest sources",
		evmAddress: "0x4802Adedd012Ea9c3F9F4AA1e504508A2c1fafF3",
		ecdsaPublicKey: "0x04eb36acf54f5a99a28ae56390f6ca1cac5d0a74ebd0ce19995382d4b13861fceb7a9a7c3bb42a3a4889b2de3f44607e2058c6a7dd2da28ed2380c5505f40ad9be",
		dateAdded: "2024-01-01"
	},
	"0xA4CcC693371D3270DFBE914f51E1D3a3184A2Cdc": {
		url: "https://redstone.finance",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "redstone-perun-demo-1",
		ipAddress: "0.0.0.0",
		dataServiceId: "redstone-perun-demo-1",
		description: "Most popular tokens with frequent updates",
		evmAddress: "0xA4CcC693371D3270DFBE914f51E1D3a3184A2Cdc",
		ecdsaPublicKey: "0x0414dbb123a833de852fa2166856f972fc925a8499498bb47501c3da2a716616c4e5102d8b48b785de821934d518c1d1282979f1103148e8b11526ca1fd03cd4e1",
		dateAdded: "2024-01-01"
	}
};
var evolve = null;
var canEvolve = true;
var dataServices = {
	"redstone-main-demo": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "RedStone Main Demo",
		admin: "I-5rWUehEv-MjdK9gFw09RxfSLQX9DIHxG614Wf8qo0",
		description: "Main RedStone Provider with all available tokens.",
		manifestTxId: "kXYM3AezlROPoEDCt_802-k9ZxeceAWzHtrERmR2zEg"
	},
	"redstone-avalanche-demo": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "RedStone Avalanche Demo",
		admin: "f1Ipos2fVPbxPVO65GBygkMyW0tkAhp2hdprRPPBBN8",
		description: "Most popular tokens from the Avalanche ecosystem - demo",
		manifestTxId: "erTjNqoLYB9Jw9zZXJPYxmijE5ElEhDM_52quvK83ws"
	},
	"redstone-avalanche-prod": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "RedStone Avalanche Prod",
		admin: "TEHhCDWy-vGmPSZsYJyM0aP_MM4xESgyIZdf5mVODzg",
		description: "Most popular tokens from the Avalanche ecosystem - prod",
		manifestTxId: "y7ppr6m9MuP65Fiivd9CX84qcPLoYBMifUrFK3jXw2k"
	},
	"redstone-primary-demo": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "RedStone Primary Demo",
		admin: "TEHhCDWy-vGmPSZsYJyM0aP_MM4xESgyIZdf5mVODzg",
		description: "Data feeds from primary RedStone nodes - demo",
		manifestTxId: ""
	},
	"redstone-primary-prod": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "RedStone Primary Prod",
		admin: "TEHhCDWy-vGmPSZsYJyM0aP_MM4xESgyIZdf5mVODzg",
		description: "Data feeds from primary RedStone nodes - prod",
		manifestTxId: ""
	},
	"redstone-arbitrum-demo": {
		name: "RedStone arbitrum demo",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		description: "Data feeds from dev arbitrum redstone nodes"
	},
	"redstone-arbitrum-prod": {
		name: "RedStone arbitrum prod",
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		description: "Data feeds from arbitrum prod redstone nodes"
	},
	"redstone-fast-demo": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "RedStone Fast Demo",
		admin: "00HZS36ZwzP43q25-T_UV7pYlNXe9ChwDpNiM7A708c",
		description: "Most popular tokens with fast updates",
		manifestTxId: ""
	},
	"redstone-megaeth-testnet": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "RedStone Perun running on megaETH Testnet",
		description: "Fast updates on megaETH Testnet"
	},
	"redstone-perun-demo-1": {
		logo: "https://redstone.finance/assets/img/redstone-logo-full.svg",
		name: "redstone-perun-demo-1",
		description: "RedStone Perun running dev node"
	}
};
var contractAdmins = [
	"I-5rWUehEv-MjdK9gFw09RxfSLQX9DIHxG614Wf8qo0",
	"zYqPZuALSPa_f5Agvf8g2JHv94cqMn9aBtnH7GFHbuA",
	"Yba8IVc_01bFxutKNJAZ7CmTD5AVi2GcWXf1NajPAsc",
	"33F0QHcb22W7LwWR1iRC8Az1ntZG09XQ03YWuw2ABqA",
	"BitVOfTwSSod-tUSla4nM77sUuHC4XFcT0Zlg-RZ-tI"
];
var _0xa39fc8 = {
	nodes: nodes,
	evolve: evolve,
	canEvolve: canEvolve,
	dataServices: dataServices,
	contractAdmins: contractAdmins
};

var requestDataPackages = {};

var dataServicesUrls = {};

(function(_0x1effe8){Object['defineProperty'](_0x1effe8,'__esModule',{'value':!![]}),_0x1effe8['resolveDataServiceUrls']=_0x1effe8['REDSTONE_DATA_SERVICES_URLS']=void 0x0;const _0x39e3e4=['https://oracle-gateway-1.b.redstone.vip','https://oracle-gateway-1.b.redstone.finance'],_0x2f2f77=['https://read-ext-oracle-gateway.b.redstone.finance'],_0x1544d8=['https://oracle-gateway-1.a.redstone.vip','https://oracle-gateway-1.a.redstone.finance','https://oracle-gateway-2.a.redstone.finance'],_0x2f3217=new Set(['https://oracle-gateway-1.a.redstone.vip','https://oracle-gateway-1.a.redstone.finance','https://oracle-gateway-1.b.redstone.vip','https://read-ext-oracle-gateway.b.redstone.finance']);_0x1effe8['REDSTONE_DATA_SERVICES_URLS']={'redstone-primary-prod':_0x1544d8,'redstone-avalanche-prod':_0x1544d8,'redstone-arbitrum-prod':_0x1544d8,'redstone-primary-demo':_0x39e3e4,'redstone-main-demo':_0x39e3e4,'redstone-fast-demo':_0x39e3e4,'redstone-avalanche-demo':_0x39e3e4,'redstone-arbitrum-demo':_0x39e3e4,'mock-data-service':['http://localhost:3000'],'mock-data-service-tests':['http://valid-cache.com'],'redstone-external-demo-1':_0x2f2f77,'kudasaijp-demo-1':_0x2f2f77,'teb-demo-1':_0x2f2f77,'auros-demo-1':_0x2f2f77};const _0x2aaeec=(_0x1ee8d2,_0x38ff0c=![])=>{const _0x119ef0=_0x1effe8['REDSTONE_DATA_SERVICES_URLS'][_0x1ee8d2];if(!_0x119ef0)throw new Error('Data\x20service\x20'+_0x1ee8d2+'\x20is\x20not\x20configured\x20by\x20RedStone\x20protocol');return _0x119ef0['filter'](_0x1d370e=>!_0x38ff0c||!_0x2f3217['has'](_0x1d370e));};_0x1effe8['resolveDataServiceUrls']=_0x2aaeec;}(dataServicesUrls));getDefaultExportFromCjs(dataServicesUrls);

var pickClosestToMedian = {};

var __importDefault$9=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x29151e){return _0x29151e&&_0x29151e['__esModule']?_0x29151e:{'default':_0x29151e};};Object['defineProperty'](pickClosestToMedian,'__esModule',{'value':!![]});pickClosestToMedian['pickDataFeedPackagesClosestToMedian']=void 0x0;const protocol_1=src$3,utils_1$M=requireSrc$3(),lodash_1$6=__importDefault$9(_0x62d7dc),pickDataFeedPackagesClosestToMedian=(_0x559200,_0x4fa0d1)=>{const _0xba3497=getAllValues(_0x559200),_0x2da8b4=lodash_1$6['default']['mapValues'](_0xba3497,utils_1$M['MathUtils']['getMedian']);return sortByDistanceFromMedian(_0x559200,_0x2da8b4)['map'](_0x236ae7=>protocol_1['SignedDataPackage']['fromObj'](_0x236ae7['dp']))['slice'](0x0,_0x4fa0d1);};pickClosestToMedian['pickDataFeedPackagesClosestToMedian']=pickDataFeedPackagesClosestToMedian;const getMaxDistanceFromMedian=(_0x22ab61,_0x4bf19d)=>{let _0x41c4e0=0x0;for(const _0x5a2b90 of _0x22ab61['dataPoints']){_0x41c4e0=Math['max'](_0x41c4e0,utils_1$M['SafeNumber']['createSafeNumber'](_0x5a2b90['value'])['sub'](_0x4bf19d[_0x5a2b90['dataFeedId']])['abs']()['div'](_0x4bf19d[_0x5a2b90['dataFeedId']])['unsafeToNumber']());}return _0x41c4e0;};function sortByDistanceFromMedian(_0x338548,_0x59ce6c){return _0x338548['map'](_0x4f1eda=>({'dp':_0x4f1eda,'diff':getMaxDistanceFromMedian(_0x4f1eda,_0x59ce6c)}))['sort']((_0x432421,_0x30d771)=>_0x432421['diff']-_0x30d771['diff']);}const getAllValues=_0x1a99db=>{const _0x50896f={};for(const _0x310207 of _0x1a99db){for(const _0x8d6a69 of _0x310207['dataPoints']){_0x50896f[_0x8d6a69['dataFeedId']]??=[],_0x50896f[_0x8d6a69['dataFeedId']]['push'](Number(_0x8d6a69['value']));}}return _0x50896f;};

var RequestDataPackagesLogger = {};

var hasRequiredRequestDataPackagesLogger;function requireRequestDataPackagesLogger(){if(hasRequiredRequestDataPackagesLogger)return RequestDataPackagesLogger;hasRequiredRequestDataPackagesLogger=0x1,Object['defineProperty'](RequestDataPackagesLogger,'__esModule',{'value':!![]}),RequestDataPackagesLogger['RequestDataPackagesLogger']=void 0x0;const _0x4b6564=requireSrc$3(),_0x39ce97=requireRequestDataPackages();class _0x421bee{['isHistorical'];['logger'];['initialDate'];['particularResponses'];['particularErrors'];['particularTimes'];constructor(_0x1de991,_0x4c9928,_0x1a85f1=(0, _0x4b6564['loggerFactory'])('request-data-packages')){this['isHistorical']=_0x4c9928,this['logger']=_0x1a85f1,this['initialDate']=Date['now'](),this['particularResponses']=Array['from']({'length':_0x1de991}),this['particularErrors']=Array['from']({'length':_0x1de991}),this['particularTimes']=Array['from']({'length':_0x1de991});}static['filterOutUndefined'](_0x290dd6){return _0x290dd6['filter'](_0x50180c=>_0x50180c!==undefined);}['didReceiveError'](_0x5e035f,_0x2abc88){this['particularErrors'][_0x2abc88]=_0x5e035f,this['particularTimes'][_0x2abc88]=Date['now']()-this['initialDate'];}['didReceiveResponse'](_0x11ec49,_0x44d906){this['particularResponses'][_0x44d906]=_0x11ec49,this['particularTimes'][_0x44d906]=Date['now']()-this['initialDate'];}['willCheckState'](_0x24d0dd,_0x2df480){const _0x15f832=_0x421bee['filterOutUndefined'](this['particularResponses']),_0x4c047e=this['particularTimestamps'](),_0x4466b5=_0x421bee['filterOutUndefined'](this['particularErrors']);(_0x24d0dd?this['logger']['info']:this['logger']['debug'])((_0x24d0dd?'Timed\x20out\x20with':'Checking')+'\x20'+_0x15f832['length']+'\x20response(s)\x20/\x20'+_0x4466b5['length']+'\x20error(s)\x20'+(',\x20didResolveOrReject\x20before:\x20'+_0x2df480),{'particularTimestamps':_0x4c047e,'particularTimes':this['particularTimes'],'particularErrors':this['particularErrors']['map'](_0x536515=>_0x4b6564['RedstoneCommon']['stringifyError'](_0x536515)),'collectedResponsesLength':_0x15f832['length'],'collectedErrorsLength':_0x4466b5['length']});}['willResolve'](_0x3e2214){const _0x486010=Date['now']()-(0, _0x39ce97['getResponseTimestamp'])(_0x3e2214),_0x46358b=_0x421bee['filterOutUndefined'](this['particularResponses']),_0x5119d9=this['particularTimestamps']();this['logger']['log']('Resolving\x20with\x20the\x20'+(this['isHistorical']?'historical':'newest')+'\x20package\x20timestamp:\x20'+(0, _0x39ce97['getResponseTimestamp'])(_0x3e2214)+'\x20of\x20'+_0x46358b['length']+'\x20response(s)'+(',\x20'+_0x486010/0x3e8+'\x20[s]\x20ago'),{'responseTimestamps':_0x5119d9,'timestampDelta':_0x486010,'collectedResponsesLength':_0x46358b['length'],'particularTimes':this['particularTimes']});}['willReject'](){this['logger']['error']('Rejecting...',{'particularErrors':this['particularErrors']['map'](_0x1a6932=>_0x4b6564['RedstoneCommon']['stringifyError'](_0x1a6932))});}['feedIsMissing'](_0x472da4){this['logger']['info'](_0x472da4);}['particularTimestamps'](){return this['particularResponses']['map'](_0x576667=>_0x576667?(0, _0x39ce97['getResponseTimestamp'])(_0x576667):undefined);}}return RequestDataPackagesLogger['RequestDataPackagesLogger']=_0x421bee,RequestDataPackagesLogger;}

var hasRequiredRequestDataPackages;function requireRequestDataPackages(){if(hasRequiredRequestDataPackages)return requestDataPackages;return hasRequiredRequestDataPackages=0x1,function(_0x4709c1){var _0x5858ac=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x5d947c){return _0x5d947c&&_0x5d947c['__esModule']?_0x5d947c:{'default':_0x5d947c};};Object['defineProperty'](_0x4709c1,'__esModule',{'value':!![]}),_0x4709c1['extractSignedDataPackagesForFeedId']=_0x4709c1['checkAndGetSameTimestamp']=_0x4709c1['getDataPackagesTimestamp']=_0x4709c1['getResponseTimestamp']=_0x4709c1['requestDataPackages']=_0x4709c1['calculateHistoricalPackagesTimestamp']=_0x4709c1['SignedDataPackageSchema']=_0x4709c1['DataFeedPackageError']=_0x4709c1['DataFeedPackageErrorType']=_0x4709c1['HISTORICAL_DATA_PACKAGES_DENOMINATOR_MS']=void 0x0,_0x4709c1['convertToHistoricalDataPackagesRequestParams']=_0x553dcd;const _0x38c9a9=src$3,_0x16d929=requireSrc$3(),_0x570483=_0x5858ac(_0x1cb33a),_0x16c7a0=_0x28081a,_0x3ec95c=dataServicesUrls,_0x3fdf7c=pickClosestToMedian,_0x1b2956=requireRequestDataPackagesLogger(),_0x3748fc=0x1388,_0x34f8b1=0x1f4;_0x4709c1['HISTORICAL_DATA_PACKAGES_DENOMINATOR_MS']=0x2710;var _0x4e89f5;(function(_0x7fbfb7){_0x7fbfb7['MissingDataFeed']='MissingDataFeed',_0x7fbfb7['NoDataPackages']='NoDataPackages',_0x7fbfb7['TooFewSigners']='TooFewSigners';}(_0x4e89f5||(_0x4709c1['DataFeedPackageErrorType']=_0x4e89f5={})));class _0x14ee89 extends Error{['dataFeedId'];['errorType'];constructor(_0x3b08c1,_0x4ae7dc,_0x5847df){super(_0x3b08c1),this['dataFeedId']=_0x4ae7dc,this['errorType']=_0x5847df;}}_0x4709c1['DataFeedPackageError']=_0x14ee89,_0x4709c1['SignedDataPackageSchema']=_0x16c7a0['z']['object']({'dataPoints':_0x16c7a0['z']['array'](_0x16c7a0['z']['object']({'dataFeedId':_0x16c7a0['z']['string'](),'value':_0x16c7a0['z']['number'](),'decimals':_0x16c7a0['z']['number']()['optional']()})['or'](_0x16c7a0['z']['object']({'dataFeedId':_0x16c7a0['z']['string'](),'value':_0x16c7a0['z']['string'](),'decimals':_0x16c7a0['z']['number']()['optional']()})))['min'](0x1),'timestampMilliseconds':_0x16c7a0['z']['number'](),'signature':_0x16c7a0['z']['string'](),'dataPackageId':_0x16c7a0['z']['string']()});const _0x310537=_0x16c7a0['z']['record'](_0x16c7a0['z']['string'](),_0x16c7a0['z']['array'](_0x4709c1['SignedDataPackageSchema'])),_0x48a25b=(_0x24f6ed,_0x36ebdc=Date['now'](),_0xc975be=_0x4709c1['HISTORICAL_DATA_PACKAGES_DENOMINATOR_MS'])=>{if(_0x24f6ed>0x0)return Math['floor']((_0x36ebdc-_0x24f6ed)/_0xc975be)*_0xc975be;return undefined;};_0x4709c1['calculateHistoricalPackagesTimestamp']=_0x48a25b;const _0x5bdaa0=async _0x59c078=>{if(!_0x59c078['dataPackagesIds']['length'])throw new Error('Please\x20provide\x20at\x20least\x20one\x20dataFeed');try{const _0x57daed=_0xc78cc8(_0x59c078),_0x4781d7=_0x59c078['enableEnhancedLogs']?new _0x1b2956['RequestDataPackagesLogger'](_0x57daed['length'],!!_0x59c078['historicalTimestamp']):undefined,_0x22f9cb=_0x48ba08(_0x59c078,_0x57daed,_0x4781d7);return await _0x1f2277(_0x22f9cb,_0x59c078['historicalTimestamp']?0x0:_0x59c078['waitForAllGatewaysTimeMs'],_0x4781d7);}catch(_0x1265bb){const _0x574d7f='Request\x20failed:\x20'+JSON['stringify']({'reqParams':_0x59c078})+',\x20Original\x20error:\x20'+_0x16d929['RedstoneCommon']['stringifyError'](_0x1265bb);if(_0x1265bb instanceof AggregateError){_0x1265bb['message']=_0x574d7f;throw _0x1265bb;}throw new Error(_0x574d7f);}};_0x4709c1['requestDataPackages']=_0x5bdaa0;const _0x5276b3=_0x259092=>Object['values'](_0x259092)['at'](0x0)?.['at'](0x0)?.['dataPackage']['timestampMilliseconds']??0x0;_0x4709c1['getResponseTimestamp']=_0x5276b3;const _0x1f2277=(_0x45b8a2,_0x1078b7=_0x34f8b1,_0x92064c)=>{return new Promise((_0x364e20,_0x5ddb83)=>{const _0x5ab298=[],_0xe970bf=[];let _0x103f2f=![],_0x37f73c=![],_0xc0912e;_0x1078b7?_0xc0912e=setTimeout(()=>{_0x103f2f=!![],_0x5e7aa9(!![]);},_0x1078b7):_0x103f2f=!![];const _0x5e7aa9=(_0x52c34a=![])=>{_0x92064c?.['willCheckState'](_0x52c34a,_0x37f73c);if(_0x37f73c)return;if(_0xe970bf['length']===_0x45b8a2['length'])_0x92064c?.['willReject'](),clearTimeout(_0xc0912e),_0x37f73c=!![],_0x5ddb83(new AggregateError(_0xe970bf));else {if(_0x5ab298['length']+_0xe970bf['length']===_0x45b8a2['length']||_0x103f2f&&_0x5ab298['length']!==0x0){const _0x33a700=_0x5ab298['reduce']((_0x4a6393,_0x38e1a7)=>(0, _0x4709c1['getResponseTimestamp'])(_0x38e1a7)>(0, _0x4709c1['getResponseTimestamp'])(_0x4a6393)?_0x38e1a7:_0x4a6393,{});_0x92064c?.['willResolve'](_0x33a700),clearTimeout(_0xc0912e),_0x37f73c=!![],_0x364e20(_0x33a700);}}};for(let _0x1dead9=0x0;_0x1dead9<_0x45b8a2['length'];_0x1dead9++){_0x45b8a2[_0x1dead9]['then'](_0x2392bd=>{_0x5ab298['push'](_0x2392bd),_0x92064c?.['didReceiveResponse'](_0x2392bd,_0x1dead9);})['catch'](_0xb095ac=>{_0xe970bf['push'](_0xb095ac),_0x92064c?.['didReceiveError'](_0xb095ac,_0x1dead9);})['finally'](_0x5e7aa9);}});},_0x48ba08=(_0x14d3d3,_0x5293c6,_0x3028a3)=>{if(!_0x14d3d3['authorizedSigners']['length'])throw new Error('authorizer\x20signers\x20array,\x20if\x20provided,\x20cannot\x20be\x20empty');const _0x5cc29c=['v2','data-packages',_0x14d3d3['historicalTimestamp']?'historical':'latest',_0x14d3d3['dataServiceId']];return _0x14d3d3['historicalTimestamp']&&_0x5cc29c['push'](''+_0x14d3d3['historicalTimestamp']),_0x14d3d3['hideMetadata']===![]&&_0x5cc29c['push']('show-metadata'),_0x5293c6['map'](async _0x144741=>{const _0x52bb61=await _0x4e59ab(_0x144741,_0x5cc29c);return _0x31a8bf(_0x52bb61['data'],_0x14d3d3,_0x3028a3);});};function _0x553cc5(_0xc09ce8,_0x358993,_0x201338){if(!_0xc09ce8){const _0x475192='Requested\x20data\x20feed\x20id\x20is\x20not\x20included\x20in\x20response:\x20'+_0x201338;throw new _0x14ee89(_0x475192,_0x201338,_0x4e89f5['MissingDataFeed']);}_0xc09ce8=_0xc09ce8['filter'](_0x1e5960=>{const _0x499b26=_0x194436(_0x1e5960);return _0x499b26?_0x358993['authorizedSigners']['includes'](_0x499b26):![];});if(_0xc09ce8['length']===0x0){const _0xd049df='No\x20data\x20packages\x20for\x20the\x20data\x20feed:\x20'+_0x201338;throw new _0x14ee89(_0xd049df,_0x201338,_0x4e89f5['NoDataPackages']);}else {if(_0xc09ce8['length']<_0x358993['uniqueSignersCount']){const _0x44a348='Too\x20few\x20data\x20packages\x20with\x20unique\x20signers\x20for\x20the\x20data\x20feed:\x20'+_0x201338+'.\x20'+('Expected:\x20'+_0x358993['uniqueSignersCount']+'.\x20')+('Received:\x20'+_0xc09ce8['length']);throw new _0x14ee89(_0x44a348,_0x201338,_0x4e89f5['TooFewSigners']);}}const _0x4ee442=_0xc09ce8['map'](_0x54a910=>_0x38c9a9['SignedDataPackage']['fromObj'](_0x54a910)),_0x1ae8d9=(0, _0x4709c1['checkAndGetSameTimestamp'])(_0x4ee442);if(_0x358993['maxTimestampDeviationMS']){const _0x40440c=Math['abs'](Date['now']()-_0x1ae8d9);if(_0x40440c>_0x358993['maxTimestampDeviationMS']){const _0x33dd25='Timestamp\x20deviation\x20exceeded\x20-\x20timestamp:\x20'+_0x1ae8d9+',\x20deviation:\x20'+_0x40440c+',\x20max\x20deviation:\x20'+_0x358993['maxTimestampDeviationMS'];throw new Error(_0x33dd25);}}return _0x4ee442;}const _0x31a8bf=(_0x195898,_0x2e94e8,_0xc59d9a)=>{const _0x1f3513={};_0x16d929['RedstoneCommon']['zodAssert'](_0x310537,_0x195898);const _0xa84829=_0x2e94e8['dataPackagesIds'],_0x32a03e=[];for(const _0x2c3af4 of _0xa84829){try{const _0x5e786f=_0x195898[_0x2c3af4],_0x3126b6=_0x553cc5(_0x5e786f,_0x2e94e8,_0x2c3af4);_0x1f3513[_0x2c3af4]=_0x2e94e8['disableMedianSelection']?_0x3126b6:(0x0,_0x3fdf7c['pickDataFeedPackagesClosestToMedian'])(_0x3126b6['map'](_0x4be91d=>_0x4be91d['toObj']()),_0x2e94e8['uniqueSignersCount']);}catch(_0x28066f){if(_0x2e94e8['ignoreMissingFeed'])_0xc59d9a?.['feedIsMissing'](_0x28066f['message']);else {if(_0x2e94e8['aggregateErrors'])_0x32a03e['push'](_0x28066f);else throw _0x28066f;}}}if(_0x32a03e['length']>0x0)throw new AggregateError(_0x32a03e);return _0x1f3513;},_0xc78cc8=_0x2998e2=>{return _0x2998e2['urls']??(0, _0x3ec95c['resolveDataServiceUrls'])(_0x2998e2['dataServiceId'],!!_0x2998e2['historicalTimestamp']);};function _0x4e59ab(_0x141005,_0x34a503){const _0x854f47=[_0x141005['replace'](/\/+$/,'')]['concat'](_0x34a503)['join']('/');return _0x570483['default']['get'](_0x854f47,{'timeout':_0x3748fc});}function _0x194436(_0x3940e1){try{return _0x38c9a9['SignedDataPackage']['fromObj'](_0x3940e1)['recoverSignerAddress']();}catch{return undefined;}}const _0x3d13bd=(_0x57f69d,_0x3f85c6)=>{const _0x3d8ea3=(0, _0x4709c1['extractSignedDataPackagesForFeedId'])(_0x57f69d,_0x3f85c6);return (0, _0x4709c1['checkAndGetSameTimestamp'])(_0x3d8ea3);};_0x4709c1['getDataPackagesTimestamp']=_0x3d13bd;const _0x62ce3b=_0x192a3a=>{if(!_0x192a3a['length'])throw new Error('No\x20data\x20packages\x20for\x20unique\x20timestamp\x20calculation');const _0x3f9138=_0x192a3a['map'](_0x59b24a=>_0x59b24a['dataPackage']['timestampMilliseconds']);if(new Set(_0x3f9138)['size']!==0x1)throw new Error('Timestamps\x20do\x20not\x20have\x20the\x20same\x20value:\x20'+_0x3f9138['join'](',\x20'));return _0x3f9138[0x0];};_0x4709c1['checkAndGetSameTimestamp']=_0x62ce3b;const _0x5a0431=(_0x5c1e48,_0x3c8ff8)=>{if(_0x3c8ff8&&_0x5c1e48[_0x3c8ff8])return _0x5c1e48[_0x3c8ff8];const _0x4b59db=Object['values'](_0x5c1e48)['flatMap'](_0x397997=>_0x397997);if(!_0x3c8ff8)return _0x4b59db;return _0x4b59db['filter'](_0x2804f7=>_0x2804f7['dataPackage']['dataPoints']['some'](_0x86199=>_0x86199['dataFeedId']===_0x3c8ff8));};_0x4709c1['extractSignedDataPackagesForFeedId']=_0x5a0431;function _0x553dcd(_0x1a6a76,_0x201792,_0x904e3b,_0x5eb6e5){const {fallbackOffsetInMilliseconds:_0x40e7a9,historicalPackagesGateways:_0x536320}=_0x201792;if(!_0x40e7a9||!_0x536320||!Array['isArray'](_0x536320)||!_0x536320['length'])throw new Error('Historical\x20packages\x20fetcher\x20for\x20fallback\x20deviation\x20check\x20is\x20not\x20properly\x20configured:\x20'+('offset='+_0x40e7a9+'\x20milliseconds.,\x20gateways='+JSON['stringify'](_0x536320)+',\x20isArray='+Array['isArray'](_0x536320)+'\x20'));let _0x41b5ef=(0, _0x4709c1['calculateHistoricalPackagesTimestamp'])(_0x40e7a9,_0x5eb6e5);return _0x904e3b&&_0x41b5ef>=_0x904e3b&&(_0x41b5ef=(0, _0x4709c1['calculateHistoricalPackagesTimestamp'])(Math['min'](_0x4709c1['HISTORICAL_DATA_PACKAGES_DENOMINATOR_MS'],_0x40e7a9),_0x904e3b)),{..._0x1a6a76,'historicalTimestamp':_0x41b5ef,'urls':_0x536320};}}(requestDataPackages),requestDataPackages;}

var ContractData = {};

var __importDefault$8=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x292699){return _0x292699&&_0x292699['__esModule']?_0x292699:{'default':_0x292699};};Object['defineProperty'](ContractData,'__esModule',{'value':!![]});ContractData['getLastRoundDetails']=getLastRoundDetails;const ethers_1$6=_0x3e9376,lodash_1$5=__importDefault$8(_0x62d7dc);function getLastRoundDetails(_0x4575b5,_0x13b8aa,_0x47f47f=![]){let _0x4c9408=_0x4575b5[_0x13b8aa];return lodash_1$5['default']['isEmpty'](_0x4c9408)&&(_0x4c9408={'lastBlockTimestampMS':0x0,'lastDataPackageTimestampMS':0x0,'lastValue':ethers_1$6['BigNumber']['from'](0x0)},_0x47f47f&&(_0x4575b5[_0x13b8aa]=_0x4c9408)),_0x4c9408;}

var ContractParamsProvider = {};

var name = "@redstone-finance/sdk";
var version = "0.8.0";
var main = "dist/src/index.js";
var exports$1 = "./dist/src/index.js";
var types$3 = "dist/src/index.d.ts";
var license = "MIT";
var scripts = {
	test: "yarn global:jest:cov",
	clean: "yarn global:ts-clean",
	build: "yarn global:tsc --build tsconfig.build.json",
	"build-dev": "yarn global:tsc --build tsconfig.json",
	preversion: "yarn build",
	"pack-package": "yarn build && cd dist && npm pack",
	lint: "yarn global:eslint .",
	"lint:fix": "yarn global:eslint --fix ."
};
var dependencies = {
	"@ethersproject/bytes": "^5.6.1",
	"@ethersproject/strings": "^5.7.0",
	"@redstone-finance/protocol": "workspace:*",
	"@redstone-finance/utils": "workspace:*",
	"@types/lodash": "^4.14.195",
	axios: "^1.8.4",
	ethers: "^5.7.2",
	lodash: "^4.17.21",
	zod: "^3.22.4"
};
var devDependencies = {
	msw: "^2.4.10"
};
var overrides = {
	elliptic: "^6.6.1"
};
var resolutions = {
	elliptic: "^6.6.1"
};
var files = [
	"src",
	"dist"
];
var publishConfig = {
	access: "public"
};
var _0x1b3638 = {
	name: name,
	version: version,
	main: main,
	exports: exports$1,
	types: types$3,
	license: license,
	scripts: scripts,
	dependencies: dependencies,
	devDependencies: devDependencies,
	overrides: overrides,
	resolutions: resolutions,
	files: files,
	publishConfig: publishConfig
};

var hasRequiredContractParamsProvider;function requireContractParamsProvider(){if(hasRequiredContractParamsProvider)return ContractParamsProvider;return hasRequiredContractParamsProvider=0x1,function(_0x223c5d){var _0x5e438a=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x8d88db){return _0x8d88db&&_0x8d88db['__esModule']?_0x8d88db:{'default':_0x8d88db};};Object['defineProperty'](_0x223c5d,'__esModule',{'value':!![]}),_0x223c5d['ContractParamsProvider']=_0x223c5d['DEFAULT_COMPONENT_NAME']=void 0x0;const _0x134749=_0x462156,_0x20eec4=_0xb5a280,_0x24b315=_0x3e9376,_0x56f8c8=_0x4eca3f,_0x407fe2=_0x5e438a(_0x62d7dc),_0x1c9f0e=_0x1b3638,_0x211e35=requireSrc$2();_0x223c5d['DEFAULT_COMPONENT_NAME']='data-packages-wrapper';class _0x70101c{['requestParams'];['cache'];['overrideRequestParamsPackagesIds'];constructor(_0x11f3d2,_0xcbfd35,_0x2be86e){this['requestParams']=_0x11f3d2,this['cache']=_0xcbfd35,this['overrideRequestParamsPackagesIds']=_0x2be86e;}['copyForFeedId'](_0x1290ca){return this['copyForFeedIds']([_0x1290ca]);}['copyForFeedIds'](_0x5cd0d5){return new _0x70101c(this['requestParams'],this['cache'],_0x5cd0d5);}static['hexlifyFeedIds'](_0x1b9cb9,_0xfa443,_0x31a2ca){return _0x1b9cb9['map'](_0x233d7b=>(0, _0x134749['hexlify'])((0, _0x20eec4['toUtf8Bytes'])(_0x233d7b)),{'allowMissingPrefix':_0xfa443})['map'](_0x4f8f01=>_0x31a2ca?_0x4f8f01['padEnd'](_0x31a2ca*0x2+(_0x4f8f01['startsWith']('0x')?0x2:0x0),'0'):_0x4f8f01);}static['unhexlifyFeedId'](_0xaa2355){return _0x24b315['utils']['toUtf8String'](_0xaa2355)['replace'](/\0+$/,'');}async['getPayloadHex'](_0x4973a4=!![],_0x2742b3){return (_0x4973a4?'0x':'')+await this['requestPayload'](_0x2742b3);}async['getPayloadData'](_0x334cb3){return Array['from']((0, _0x56f8c8['arrayify'])(await this['getPayloadHex'](!![],_0x334cb3)));}['getHexlifiedFeedIds'](_0x1cd312,_0x54ab60){return _0x70101c['hexlifyFeedIds'](this['getDataFeedIds'](),_0x1cd312,_0x54ab60);}['getDataFeedIds'](){return this['overrideRequestParamsPackagesIds']??this['requestParams']['dataPackagesIds'];}async['requestDataPackages'](_0x195ef1=![]){const _0x222f83=this['cache']?.['get'](this['requestParams'],!_0x195ef1);if(_0x222f83)return _0x222f83;const _0x35f038=await this['performRequestingDataPackages']();return _0x195ef1&&this['cache']?.['update'](_0x35f038,this['requestParams']),_0x35f038;}async['performRequestingDataPackages'](){return await(0, _0x211e35['requestDataPackages'])(this['requestParams']);}async['requestPayload'](_0x3601c2){return (0, _0x211e35['convertDataPackagesResponse'])(await this['requestDataPackages'](),'string',_0x70101c['getUnsignedMetadata'](_0x3601c2));}async['prepareSplitPayloads'](_0x111d31){const _0x2bd10e=await this['requestDataPackages'](),_0xae9203={};for(const _0x2b3993 of this['getDataFeedIds']()){const _0x1eec6=(0, _0x211e35['extractSignedDataPackagesForFeedId'])(_0x2bd10e,_0x2b3993);if(!_0x1eec6['length']){_0xae9203[_0x2b3993]=undefined;continue;}_0xae9203[_0x2b3993]=(0, _0x211e35['convertDataPackagesResponse'])({[_0x2b3993]:_0x1eec6},'string',_0x70101c['getUnsignedMetadata'](_0x111d31));}return _0xae9203;}static['extractMissingValues'](_0x37da4b,_0x5651d2){const _0x23aa52=_0x407fe2['default']['keys'](_0x407fe2['default']['pickBy'](_0x37da4b,_0x4ac675=>_0x4ac675===undefined)),_0x435bfe=_0x407fe2['default']['omitBy'](_0x37da4b,_0x273708=>_0x273708===undefined);return _0x23aa52['length']&&_0x5651d2?.['warn']('No\x20data\x20packages\x20found\x20for\x20['+_0x23aa52['toString']()+']'),{'missingFeedIds':_0x23aa52,'payloads':_0x435bfe};}static['getUnsignedMetadata'](_0x227945){if(!_0x227945)return;return (_0x227945['metadataTimestamp']??Date['now']())+'#'+_0x1c9f0e['version']+'#'+(_0x227945['componentName']??_0x223c5d['DEFAULT_COMPONENT_NAME']);}}_0x223c5d['ContractParamsProvider']=_0x70101c;}(ContractParamsProvider),ContractParamsProvider;}

var ContractParamsProviderMock = {};

var hasRequiredContractParamsProviderMock;function requireContractParamsProviderMock(){if(hasRequiredContractParamsProviderMock)return ContractParamsProviderMock;hasRequiredContractParamsProviderMock=0x1;var _0x736174=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x2f39a0){return _0x2f39a0&&_0x2f39a0['__esModule']?_0x2f39a0:{'default':_0x2f39a0};};Object['defineProperty'](ContractParamsProviderMock,'__esModule',{'value':!![]}),ContractParamsProviderMock['ContractParamsProviderMock']=void 0x0;const _0x24d004=src$3,_0xc50295=_0x736174(_0x62d7dc),_0x5df7ad=requireContractParamsProvider();class _0x1dd810 extends _0x5df7ad['ContractParamsProvider']{['filePath'];['fileReader'];['overriddenFeedIds'];constructor(_0x4f95fd,_0x434a7a,_0x36f906,_0x536cb1=0x0){super({'uniqueSignersCount':_0x536cb1,'dataServiceId':'','dataPackagesIds':_0x4f95fd,'authorizedSigners':[]}),this['filePath']=_0x434a7a,this['fileReader']=_0x36f906;}['copyForFeedIds'](_0x141ca1){return new _0x1dd810(_0x141ca1,this['filePath'],this['fileReader'],this['requestParams']['uniqueSignersCount']);}['requestPayload'](){return Promise['resolve'](this['fileReader'](this['filePath'])['toString']());}['getDataFeedIds'](){return this['overriddenFeedIds']??super['getDataFeedIds']();}async['requestDataPackages'](_0x352bd0){const _0x10f150=new _0x24d004['RedstonePayloadParser'](Buffer['from'](await this['requestPayload'](),'hex'))['parse']();return _0xc50295['default']['groupBy'](_0x10f150['signedDataPackages'],_0x560f9e=>_0x560f9e['dataPackage']['dataPackageId']);}}return ContractParamsProviderMock['ContractParamsProviderMock']=_0x1dd810,ContractParamsProviderMock;}

var IContractConnector = {};

Object['defineProperty'](IContractConnector,'__esModule',{'value':!![]});

var IPriceFeedContractAdapter = {};

Object['defineProperty'](IPriceFeedContractAdapter,'__esModule',{'value':!![]});

var IPricesContractAdapter = {};

Object['defineProperty'](IPricesContractAdapter,'__esModule',{'value':!![]});

var sampleRun$1 = {};

Object['defineProperty'](sampleRun$1,'__esModule',{'value':!![]});sampleRun$1['sampleRun']=sampleRun;sampleRun$1['convertValue']=convertValue;sampleRun$1['describeTimestamp']=describeTimestamp;sampleRun$1['describeContractData']=describeContractData;sampleRun$1['isExtendedPricesContractAdapter']=isExtendedPricesContractAdapter;sampleRun$1['isMultiFeedContractAdapter']=isMultiFeedContractAdapter;const utils_1$L=requireSrc$3(),ethers_1$5=_0x3e9376;async function sampleRun(_0x4c50d3,_0x2ad5f1,_0x17468c,_0xf7bfb1=async()=>{}){const _0x1de328=await _0x2ad5f1['getAdapter']();await executePullModel(_0x1de328,_0x4c50d3);const _0x5ab76f=await executePushModel(_0x1de328,_0x4c50d3,_0x2ad5f1,_0xf7bfb1);isMultiFeedContractAdapter(_0x1de328)&&await readFromMultiFeedPriceAdapter(_0x1de328,_0x4c50d3,_0x5ab76f),isExtendedPricesContractAdapter(_0x1de328)&&await readFromExtendedPriceAdapter(_0x1de328,_0x4c50d3,_0x5ab76f),_0x17468c&&await readFromEthFeed(_0x17468c),logHeader('FINISHING');}function logHeader(_0x36e793,_0x50c556=0x50){console['log'](''),console['log']('='['repeat'](_0x50c556)),console['log'](_0x36e793['toUpperCase']()),console['log']('-'['repeat'](_0x50c556));}async function executePullModel(_0x17e209,_0x4063b4){logHeader('Pulling\x20values\x20using\x20core\x20model');try{const _0x35fea2=await _0x17e209['getPricesFromPayload'](_0x4063b4);console['log']('Core\x20values:\x20'+_0x35fea2['map'](convertValue));}catch(_0x130b7b){console['error'](utils_1$L['RedstoneCommon']['stringifyError'](_0x130b7b));}}async function executePushModel(_0xe3f99d,_0x180e18,_0x4ed34d,_0x55db5d){logHeader('Pushing\x20values\x20using\x20classic\x20model');const _0x1db5c9=await _0xe3f99d['writePricesFromPayloadToContract'](_0x180e18);typeof _0x1db5c9=='string'?await _0x4ed34d['waitForTransaction'](_0x1db5c9):console['log']('Values\x20pushed\x20to\x20contract:\x20'+_0x1db5c9);await _0x55db5d();const _0x426b64=await _0x4ed34d['getBlockNumber']();console['log']('Current\x20block\x20number:\x20'+_0x426b64),logHeader('Viewing\x20values\x20from\x20contract');const _0x264ec4=await _0xe3f99d['readPricesFromContract'](_0x180e18,_0x426b64);console['log']('Values\x20read\x20from\x20contract:\x20'+_0x264ec4['map'](convertValue));const _0x53d046=await _0xe3f99d['readTimestampFromContract'](_0x180e18['getDataFeedIds']()[0x0],_0x426b64);return console['log']('Timestamp\x20read\x20from\x20contract:\x20'+_0x53d046+'\x20('+describeTimestamp(_0x53d046)+')'),_0x426b64;}async function readFromMultiFeedPriceAdapter(_0x15608b,_0x3b0d3b,_0x10f4dc){console['log']('Price\x20data:\x20\x0a'+describeContractData(await _0x15608b['readContractData'](_0x3b0d3b['getDataFeedIds'](),_0x10f4dc)));}async function readFromExtendedPriceAdapter(_0x390d76,_0x377268,_0xa545b9){const _0x48afbf=await _0x390d76['readLatestUpdateBlockTimestamp'](_0x377268['getDataFeedIds']()[0x0],_0xa545b9);console['log']('Last\x20update\x20block\x20timestamp:\x20'+_0x48afbf+'\x20('+describeTimestamp(_0x48afbf)+')');const _0x325391=await _0x390d76['getUniqueSignerThreshold'](_0xa545b9);console['log']('Unique\x20signer\x20count:\x20'+_0x325391);}async function readFromEthFeed(_0x2d886e){const _0xa76112=await _0x2d886e['getAdapter'](),_0x150f2d=_0xa76112['getDescription']?await _0xa76112['getDescription']():'ETH\x20PriceFeed';logHeader('Viewing\x20data\x20from\x20['+_0x150f2d+']');const {value:_0x1c52a6,timestamp:_0x296fd8}=await _0xa76112['getPriceAndTimestamp'](),_0x357fad=_0xa76112['getDataFeedId']?await _0xa76112['getDataFeedId']():'ETH';console['log'](_0x357fad+'\x20price:\x20$'+convertValue(_0x1c52a6)+'\x20('+describeTimestamp(_0x296fd8)+')');}function convertValue(_0x581ab2){return ethers_1$5['BigNumber']['from'](_0x581ab2)['toNumber']()/0xa**0x8;}function describeTimestamp(_0x338ff9){return (Date['now']()-_0x338ff9)/0x3e8+'\x20sec.\x20ago';}function describeContractData(_0xf1174d){return Object['entries'](_0xf1174d)['map'](([_0x4d5a26,_0x155bed])=>_0x4d5a26+':\x20'+convertValue(_0x155bed['lastValue'])+'\x20of\x20'+describeTimestamp(_0x155bed['lastDataPackageTimestampMS'])+'\x20/\x20block:\x20'+describeTimestamp(_0x155bed['lastBlockTimestampMS']))['join']('\x0a');}function isExtendedPricesContractAdapter(_0x1ee6c4){const _0x5b73a7=_0x1ee6c4;return typeof _0x5b73a7['getUniqueSignerThreshold']==='function'&&typeof _0x5b73a7['readLatestUpdateBlockTimestamp']==='function';}function isMultiFeedContractAdapter(_0x5f37c7){const _0x19f39c=_0x5f37c7;return typeof _0x19f39c['readContractData']==='function';}

var dataFeedValues = {};

(function(_0x434e7f){var _0x204792=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x23d1ec){return _0x23d1ec&&_0x23d1ec['__esModule']?_0x23d1ec:{'default':_0x23d1ec};};Object['defineProperty'](_0x434e7f,'__esModule',{'value':!![]}),_0x434e7f['aggregateValues']=_0x434e7f['getDataFeedValues']=void 0x0;const _0x3a1869=requireSrc$3(),_0x4ed8ac=_0x204792(_0x1cb33a),_0x362b9d=dataServicesUrls,_0x5c5979='redstone-main-demo',_0x9ece16='median',_0x2e2e02=async(_0x28245d={})=>{const _0x26ad08=_0x28245d['dataServiceId']??_0x5c5979,_0x6a57a5=_0x28245d['aggregationAlgorithm']??_0x9ece16,_0x18cb84=_0x28245d['gatewayUrls']??(0, _0x362b9d['resolveDataServiceUrls'])(_0x26ad08),_0x49b220=await Promise['any'](_0x18cb84['map'](_0x2462bd=>_0x3192bb(_0x2462bd,_0x26ad08))),_0xbd0c8b={};for(const [_0x47792c,_0x2dd4f1]of Object['entries'](_0x49b220)){if(_0x469721(_0x47792c))continue;const _0x1b50fd=_0x47792c,_0x118ec0=_0x2dd4f1['map'](_0x167835=>Number(_0x167835['dataPoints'][0x0]['value']));_0xbd0c8b[_0x1b50fd]=(0, _0x434e7f['aggregateValues'])(_0x118ec0,_0x6a57a5);}return _0xbd0c8b;};_0x434e7f['getDataFeedValues']=_0x2e2e02;const _0x469721=_0x3e56d8=>_0x3e56d8['startsWith']('__')&&_0x3e56d8['endsWith']('__'),_0x3192bb=async(_0x5f0ed4,_0x42c88b)=>{const _0x331e92=await _0x4ed8ac['default']['get'](_0x5f0ed4+'/v2/data-packages/latest/'+_0x42c88b);if(typeof _0x331e92['data']==='string')throw new Error('Failed\x20to\x20fetch\x20data\x20package\x20from\x20'+_0x5f0ed4+'.\x20Data\x20service\x20ID\x20responded\x20with:\x20'+String(_0x331e92['data']));return _0x331e92['data'];},_0x4777cd=(_0x43d587,_0x348da6)=>{switch(_0x348da6){case'max':return Math['max'](..._0x43d587);case'min':return Math['min'](..._0x43d587);case'median':return _0x3a1869['MathUtils']['getMedian'](_0x43d587);default:return _0x3a1869['RedstoneCommon']['throwUnsupportedParamError'](_0x348da6);}};_0x434e7f['aggregateValues']=_0x4777cd;}(dataFeedValues));getDefaultExportFromCjs(dataFeedValues);

var DataPackagesResponseCache$1 = {};

var __importDefault$7=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x194d64){return _0x194d64&&_0x194d64['__esModule']?_0x194d64:{'default':_0x194d64};};Object['defineProperty'](DataPackagesResponseCache$1,'__esModule',{'value':!![]});DataPackagesResponseCache$1['DataPackagesResponseCache']=void 0x0;DataPackagesResponseCache$1['isConforming']=isConforming;DataPackagesResponseCache$1['isSubsetOf']=isSubsetOf;const utils_1$K=requireSrc$3(),lodash_1$4=__importDefault$7(_0x62d7dc);class DataPackagesResponseCache{['logger']=(0, utils_1$K['loggerFactory'])('data-packages-response-cache');['response'];['requestParams'];['update'](_0xc28887,_0xfce2c8){return this['response']=_0xc28887,this['requestParams']=_0xfce2c8,this;}['isEmpty'](){return !this['response'];}['invalidate'](){this['response']=undefined,this['requestParams']=undefined;}['get'](_0x24dff4,_0x1d495a=!![]){if(!this['requestParams']||!this['response'])return _0x1d495a&&this['logger']['debug']('Trying\x20to\x20use\x20cache\x20when\x20there\x20doesn\x27t\x20exist\x20a\x20cached\x20value',{'requestParams':_0x24dff4,'cachedRequestParams':this['requestParams'],'cachedResponse':this['response']}),undefined;const _0xfb9825=isConforming(this['requestParams'],_0x24dff4,Object['keys'](this['response']));if(!_0xfb9825)return this['logger']['debug']('The\x20request\x20params\x20are\x20not\x20conforming\x20to\x20the\x20cached\x20value',{'requestParams':_0x24dff4,'cachedRequestParams':this['requestParams'],'cachedResponse':this['response']}),undefined;return filterDataPackages(this['response'],_0x24dff4['dataPackagesIds']);}}DataPackagesResponseCache$1['DataPackagesResponseCache']=DataPackagesResponseCache;function isConforming(_0x3cc775,_0x43202e,_0x4c441a){const _0x92ca2e=makeComparableRequestParams(_0x3cc775),_0x359fb3=makeComparableRequestParams(_0x43202e);if(!lodash_1$4['default']['isEqual'](_0x92ca2e,_0x359fb3))return ![];if(_0x43202e['ignoreMissingFeed'])return !![];return isSubsetOf(new Set(_0x4c441a),new Set(_0x43202e['dataPackagesIds']));}function makeComparableRequestParams(_0x1d73e){const {dataServiceId:_0x362864,uniqueSignersCount:_0x37998e,authorizedSigners:_0x180371,maxTimestampDeviationMS:_0x15abe7,historicalTimestamp:_0x59d5f3,ignoreMissingFeed:_0x2aa89d}=_0x1d73e;return {'dataServiceId':_0x362864,'uniqueSignersCount':_0x37998e,'authorizedSigners':_0x180371,'maxTimestampDeviationMS':_0x15abe7,'historicalTimestamp':_0x59d5f3,'ignoreMissingFeed':_0x2aa89d};}function filterDataPackages(_0x5ceebd,_0xaaeeed){if(isSubsetOf(new Set(_0xaaeeed),new Set(Object['keys'](_0x5ceebd))))return _0x5ceebd;return lodash_1$4['default']['pick'](_0x5ceebd,_0xaaeeed);}function isSubsetOf(_0x23efa9,_0x541609){for(const _0xbcfda0 of _0x541609){if(!_0x23efa9['has'](_0xbcfda0))return ![];}return !![];}

var fetchDataPackages$1 = {};

Object['defineProperty'](fetchDataPackages$1,'__esModule',{'value':!![]});fetchDataPackages$1['fetchDataPackages']=void 0x0;const utils_1$J=requireSrc$3(),data_services_urls_1=dataServicesUrls,fetchDataPackages=async({dataServiceId:_0x796e9f,gatewayUrls:_0x283acf,getMetadata:_0xd2ebd8})=>{const _0x11332b=_0x283acf??(0, data_services_urls_1['resolveDataServiceUrls'])(_0x796e9f),_0x38d991=_0x11332b['map'](_0x3b713b=>_0x3b713b+'/v2/data-packages/latest/'+_0x796e9f+(_0xd2ebd8?'/show-metadata':'')),_0x3e3999=await utils_1$J['RedstoneCommon']['fetchWithFallbacks']({'urls':_0x38d991});return _0x3e3999['data'];};fetchDataPackages$1['fetchDataPackages']=fetchDataPackages;

var oracleRegistry = {};

(function(_0x198c40){var _0x53e091=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x20d09f){return _0x20d09f&&_0x20d09f['__esModule']?_0x20d09f:{'default':_0x20d09f};};Object['defineProperty'](_0x198c40,'__esModule',{'value':!![]}),_0x198c40['getDataServiceIdForSigner']=_0x198c40['getOracleRegistryStateSync']=_0x198c40['getOracleRegistryState']=_0x198c40['EXTERNAL_SIGNERS_CUTOFF_DATE']=void 0x0,_0x198c40['getSignersForDataServiceId']=_0x375e03;const _0xa4812f=_0x53e091(_0xa39fc8);_0x198c40['EXTERNAL_SIGNERS_CUTOFF_DATE']=new Date('2024-01-02')['getTime']();const _0x420838=async()=>{return await Promise['resolve'](_0xa4812f['default']);};_0x198c40['getOracleRegistryState']=_0x420838;const _0x729d2f=()=>_0xa4812f['default'];_0x198c40['getOracleRegistryStateSync']=_0x729d2f;const _0x26dca7=(_0x5b584f,_0x30ec6b)=>{for(const _0x2e0e42 of Object['values'](_0x5b584f['nodes'])){if(_0x2e0e42['evmAddress']['toLowerCase']()===_0x30ec6b['toLowerCase']())return _0x2e0e42['dataServiceId'];}throw new Error('Data\x20service\x20not\x20found\x20for\x20'+_0x30ec6b);};_0x198c40['getDataServiceIdForSigner']=_0x26dca7;const _0x33259a=new Map();Object['keys'](_0xa4812f['default']['dataServices'])['forEach'](_0x120546=>{const _0x405191=Object['values'](_0xa4812f['default']['nodes'])['filter'](_0x20c6a8=>_0x20c6a8['dataServiceId']===_0x120546&&new Date(_0x20c6a8['dateAdded'])['getTime']()<_0x198c40['EXTERNAL_SIGNERS_CUTOFF_DATE'])['map'](_0x40abff=>_0x40abff['evmAddress']),_0x24e90a=Object['values'](_0xa4812f['default']['nodes'])['filter'](_0x17021b=>_0x17021b['dataServiceId']===_0x120546)['map'](_0x190f4b=>_0x190f4b['evmAddress']);_0x33259a['set'](_0x120546,{'internal':_0x405191,'all':_0x24e90a});});function _0x375e03(_0x528bdb,_0x384163=![]){const _0x5a56f6=_0x33259a['get'](_0x528bdb);if(!_0x5a56f6)throw new Error('No\x20signers\x20found\x20for\x20data\x20service\x20id:\x20'+_0x528bdb);const _0x5f3fa8=_0x384163?_0x5a56f6['all']:_0x5a56f6['internal'];if(_0x5f3fa8['length']===0x0)throw new Error('No\x20'+(_0x384163?'':'internal')+'\x20signers\x20found\x20for:\x20'+_0x528bdb);return _0x5f3fa8;}}(oracleRegistry));getDefaultExportFromCjs(oracleRegistry);

var hasRequiredSrc$2;function requireSrc$2(){if(hasRequiredSrc$2)return src$4;return hasRequiredSrc$2=0x1,function(_0x97304d){var _0x209933=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x514ef5,_0x147176,_0x555110,_0x84390b){if(_0x84390b===undefined)_0x84390b=_0x555110;var _0x43e9ea=Object['getOwnPropertyDescriptor'](_0x147176,_0x555110);(!_0x43e9ea||('get'in _0x43e9ea?!_0x147176['__esModule']:_0x43e9ea['writable']||_0x43e9ea['configurable']))&&(_0x43e9ea={'enumerable':!![],'get':function(){return _0x147176[_0x555110];}}),Object['defineProperty'](_0x514ef5,_0x84390b,_0x43e9ea);}:function(_0x3a57ce,_0x3c0ccf,_0x5e6b17,_0x4b1799){if(_0x4b1799===undefined)_0x4b1799=_0x5e6b17;_0x3a57ce[_0x4b1799]=_0x3c0ccf[_0x5e6b17];}),_0x3a47d2=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x36a560,_0x56e3f9){for(var _0x12cbe1 in _0x36a560)if(_0x12cbe1!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x56e3f9,_0x12cbe1))_0x209933(_0x56e3f9,_0x36a560,_0x12cbe1);},_0x37d3f7=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x19859a){return _0x19859a&&_0x19859a['__esModule']?_0x19859a:{'default':_0x19859a};};Object['defineProperty'](_0x97304d,'__esModule',{'value':!![]}),_0x97304d['redstoneOraclesInitialState']=_0x97304d['requestRedstonePayload']=_0x97304d['convertDataPackagesResponse']=_0x97304d['getDecimalsForDataFeedId']=void 0x0;const _0x4e1f5c=src$3,_0x36b799=_0x37d3f7(_0xa39fc8);Object['defineProperty'](_0x97304d,'redstoneOraclesInitialState',{'enumerable':!![],'get':function(){return _0x36b799['default'];}});const _0x265582=requireRequestDataPackages(),_0x4af737=_0x41dd1b=>{const _0x9f4f37=_0x41dd1b[0x0]['dataPoints'][0x0]['decimals'],_0x30d523=_0x41dd1b['every'](_0x2c43f3=>_0x2c43f3['dataPoints']['every'](_0x1b9e42=>_0x1b9e42['decimals']===_0x9f4f37));if(!_0x30d523)throw new Error('Decimals\x20from\x20data\x20points\x20in\x20data\x20packages\x20are\x20not\x20equal');return _0x9f4f37;};_0x97304d['getDecimalsForDataFeedId']=_0x4af737;const _0x1008c9=(_0x401bd2,_0x3400ee='hex',_0x46bed7)=>{const _0x3fe64a=Object['values'](_0x401bd2)['flat'](),_0x309450=new _0x4e1f5c['RedstonePayload'](_0x3fe64a,_0x46bed7??'');switch(_0x3400ee){case'json':return JSON['stringify'](_0x309450['toObj'](),null,0x2);case'bytes':return JSON['stringify'](Array['from'](_0x309450['toBytes']()));default:return _0x309450['toBytesHexWithout0xPrefix']();}};_0x97304d['convertDataPackagesResponse']=_0x1008c9;const _0x42a492=async(_0x182548,_0x194727='hex',_0x42400e)=>{const _0xcad13a=await(0, _0x265582['requestDataPackages'])(_0x182548);return (0, _0x97304d['convertDataPackagesResponse'])(_0xcad13a,_0x194727,_0x42400e);};_0x97304d['requestRedstonePayload']=_0x42a492,_0x3a47d2(ContractData,_0x97304d),_0x3a47d2(requireContractParamsProvider(),_0x97304d),_0x3a47d2(requireContractParamsProviderMock(),_0x97304d),_0x3a47d2(IContractConnector,_0x97304d),_0x3a47d2(IPriceFeedContractAdapter,_0x97304d),_0x3a47d2(IPricesContractAdapter,_0x97304d),_0x3a47d2(sampleRun$1,_0x97304d),_0x3a47d2(dataFeedValues,_0x97304d),_0x3a47d2(dataServicesUrls,_0x97304d),_0x3a47d2(DataPackagesResponseCache$1,_0x97304d),_0x3a47d2(fetchDataPackages$1,_0x97304d),_0x3a47d2(oracleRegistry,_0x97304d),_0x3a47d2(pickClosestToMedian,_0x97304d),_0x3a47d2(requireRequestDataPackages(),_0x97304d);}(src$4),src$4;}

var RadixClient$1 = {};

var TransferXRDRadixMethod$1 = {};

var RadixInvocation$1 = {};

Object['defineProperty'](RadixInvocation$1,'__esModule',{'value':!![]});RadixInvocation$1['RadixFunction']=RadixInvocation$1['ValueProxyRadixInvocation']=RadixInvocation$1['ValueRadixInvocation']=RadixInvocation$1['VoidRadixInvocation']=RadixInvocation$1['ProxyRadixInvocation']=RadixInvocation$1['RadixInvocation']=void 0x0;const radix_engine_toolkit_1$i=_0x6a06b2;class RadixInvocation{['subject'];['name'];constructor(_0x91804,_0x2320f4){this['subject']=_0x91804,this['name']=_0x2320f4;}['getParams'](){return [];}['appendTo'](_0x57b93d){return _0x57b93d['callMethod'](this['subject'],this['name'],this['getParams']());}['getDedicatedTransaction'](_0x3d404f,_0x4f590d,_0x16306c){throw new Error('This\x20method\x20cannot\x20by\x20called\x20directly');}}RadixInvocation$1['RadixInvocation']=RadixInvocation;class ProxyRadixInvocation extends RadixInvocation{['appendTo'](_0x160215){const _0x913f1f=[(0, radix_engine_toolkit_1$i['str'])(this['name']),(0, radix_engine_toolkit_1$i['tuple'])(...this['getParams']())];return _0x160215['callMethod'](this['subject'],'call_method',_0x913f1f);}}RadixInvocation$1['ProxyRadixInvocation']=ProxyRadixInvocation;class VoidRadixInvocation extends RadixInvocation{['interpret'](_0x33b536){return;}}RadixInvocation$1['VoidRadixInvocation']=VoidRadixInvocation;class ValueRadixInvocation extends RadixInvocation{['interpret'](_0x89c5ee){return _0x89c5ee;}}RadixInvocation$1['ValueRadixInvocation']=ValueRadixInvocation;class ValueProxyRadixInvocation extends ProxyRadixInvocation{['interpret'](_0xe2faca){return _0xe2faca;}}RadixInvocation$1['ValueProxyRadixInvocation']=ValueProxyRadixInvocation;class RadixFunction extends ValueRadixInvocation{['blueprintName'];constructor(_0x591bc0,_0xc4cb26,_0x464627){super(_0x591bc0,_0xc4cb26),this['blueprintName']=_0x464627;}['appendTo'](_0x3d05fa){return _0x3d05fa['callFunction'](this['subject'],this['blueprintName'],this['name'],this['getParams']());}}RadixInvocation$1['RadixFunction']=RadixFunction;

var RadixTransaction$1 = {};

var CreateProofOfNonFungiblesRadixMethod$1 = {};

Object['defineProperty'](CreateProofOfNonFungiblesRadixMethod$1,'__esModule',{'value':!![]});CreateProofOfNonFungiblesRadixMethod$1['CreateProofOfNonFungiblesRadixMethod']=void 0x0;const radix_engine_toolkit_1$h=_0x6a06b2,RadixInvocation_1$g=RadixInvocation$1;class CreateProofOfNonFungiblesRadixMethod extends RadixInvocation_1$g['VoidRadixInvocation']{['proof'];constructor(_0x43cab4,_0xa183f8){super(_0x43cab4,'create_proof_of_non_fungibles'),this['proof']=_0xa183f8;}['getParams'](){return [(0, radix_engine_toolkit_1$h['address'])(this['proof']['resourceAddress']),(0, radix_engine_toolkit_1$h['array'])(radix_engine_toolkit_1$h['ValueKind']['NonFungibleLocalId'],(0, radix_engine_toolkit_1$h['nonFungibleLocalId'])(this['proof']['localId']))];}}CreateProofOfNonFungiblesRadixMethod$1['CreateProofOfNonFungiblesRadixMethod']=CreateProofOfNonFungiblesRadixMethod;

var DepositBatchRadixMethod$1 = {};

Object['defineProperty'](DepositBatchRadixMethod$1,'__esModule',{'value':!![]});DepositBatchRadixMethod$1['DepositBatchRadixMethod']=void 0x0;const radix_engine_toolkit_1$g=_0x6a06b2,RadixInvocation_1$f=RadixInvocation$1;class DepositBatchRadixMethod extends RadixInvocation_1$f['VoidRadixInvocation']{constructor(_0xde78fa){super(_0xde78fa,'deposit_batch');}['getParams'](){return [(0, radix_engine_toolkit_1$g['expression'])(radix_engine_toolkit_1$g['Expression']['EntireWorktop'])];}}DepositBatchRadixMethod$1['DepositBatchRadixMethod']=DepositBatchRadixMethod;

var LockFeeRadixMethod$1 = {};

Object['defineProperty'](LockFeeRadixMethod$1,'__esModule',{'value':!![]});LockFeeRadixMethod$1['LockFeeRadixMethod']=void 0x0;const radix_engine_toolkit_1$f=_0x6a06b2,RadixInvocation_1$e=RadixInvocation$1;class LockFeeRadixMethod extends RadixInvocation_1$e['VoidRadixInvocation']{['fee'];constructor(_0x366cc4,_0x1fa386){super(_0x366cc4,'lock_fee'),this['fee']=_0x1fa386;}['getParams'](){return [(0, radix_engine_toolkit_1$f['decimal'])(this['fee'])];}}LockFeeRadixMethod$1['LockFeeRadixMethod']=LockFeeRadixMethod;

var TryDepositBatchOrAbortRadixMethod$1 = {};

Object['defineProperty'](TryDepositBatchOrAbortRadixMethod$1,'__esModule',{'value':!![]});TryDepositBatchOrAbortRadixMethod$1['TryDepositBatchOrAbortRadixMethod']=void 0x0;const radix_engine_toolkit_1$e=_0x6a06b2,RadixInvocation_1$d=RadixInvocation$1;class TryDepositBatchOrAbortRadixMethod extends RadixInvocation_1$d['VoidRadixInvocation']{constructor(_0x825427){super(_0x825427,'try_deposit_batch_or_abort');}['getParams'](){return [(0, radix_engine_toolkit_1$e['expression'])(radix_engine_toolkit_1$e['Expression']['EntireWorktop']),(0, radix_engine_toolkit_1$e['enumeration'])(0x0)];}}TryDepositBatchOrAbortRadixMethod$1['TryDepositBatchOrAbortRadixMethod']=TryDepositBatchOrAbortRadixMethod;

var RadixClientConfig = {};

Object['defineProperty'](RadixClientConfig,'__esModule',{'value':!![]});RadixClientConfig['DEFAULT_RADIX_CLIENT_CONFIG']=RadixClientConfig['TX_WAIT_POLL_DELAY_MS']=RadixClientConfig['ALLOWED_FORWARD_EPOCH_COUNT']=RadixClientConfig['MAX_TIP_PERCENTAGE']=RadixClientConfig['DEFAULT_INSTANTIATE_XRD_FEE']=RadixClientConfig['DEFAULT_TRANSACTION_XRD_FEE']=void 0x0;const utils_1$I=requireSrc$3();RadixClientConfig['DEFAULT_TRANSACTION_XRD_FEE']=0x1;RadixClientConfig['DEFAULT_INSTANTIATE_XRD_FEE']=0x64;RadixClientConfig['MAX_TIP_PERCENTAGE']=0xffff;RadixClientConfig['ALLOWED_FORWARD_EPOCH_COUNT']=0x64;RadixClientConfig['TX_WAIT_POLL_DELAY_MS']=0x1f4;RadixClientConfig['DEFAULT_RADIX_CLIENT_CONFIG']={'maxTxSendAttempts':0x5,'maxTxWaitingTimeMs':utils_1$I['RedstoneCommon']['minToMs'](0x1),'tipMultiplier':1.1};

Object['defineProperty'](RadixTransaction$1,'__esModule',{'value':!![]});RadixTransaction$1['TransferRadixTransaction']=RadixTransaction$1['ProvingRadixTransaction']=RadixTransaction$1['RadixTransaction']=void 0x0;const radix_engine_toolkit_1$d=_0x6a06b2,CreateProofOfNonFungiblesRadixMethod_1=CreateProofOfNonFungiblesRadixMethod$1,DepositBatchRadixMethod_1=DepositBatchRadixMethod$1,LockFeeRadixMethod_1=LockFeeRadixMethod$1,TryDepositBatchOrAbortRadixMethod_1=TryDepositBatchOrAbortRadixMethod$1,RadixClientConfig_1$5=RadixClientConfig;class RadixTransaction{['account'];['bodyMethods'];['fee'];constructor(_0x95cd03,_0x59b4bf,_0x286456=RadixClientConfig_1$5['DEFAULT_TRANSACTION_XRD_FEE']){this['account']=_0x95cd03,this['bodyMethods']=_0x59b4bf,this['fee']=_0x286456;}['getInitMethods'](){return [new LockFeeRadixMethod_1['LockFeeRadixMethod'](this['account'],this['fee'])];}['getFinalMethods'](){return [new DepositBatchRadixMethod_1['DepositBatchRadixMethod'](this['account'])];}['getMethods'](){return [...this['getInitMethods'](),...this['bodyMethods'],...this['getFinalMethods']()];}['getManifest'](){let _0x10c71b=new radix_engine_toolkit_1$d['ManifestBuilder']();for(const _0x540cac of this['getMethods']()){_0x10c71b=_0x540cac['appendTo'](_0x10c71b);}return _0x10c71b['build']();}['interpret'](_0x440150){const _0xb9ca7a=RadixClientConfig_1$5['DEFAULT_TRANSACTION_XRD_FEE']+this['getFinalMethods']()['length'];return this['bodyMethods'][this['bodyMethods']['length']-0x1]['interpret'](_0x440150[_0x440150['length']-_0xb9ca7a]);}}RadixTransaction$1['RadixTransaction']=RadixTransaction;class ProvingRadixTransaction extends RadixTransaction{['proofBadge'];constructor(_0xbca64b,_0x290ad9,_0x3d6a46,_0x1a9db4=RadixClientConfig_1$5['DEFAULT_TRANSACTION_XRD_FEE']){super(_0xbca64b,_0x290ad9,_0x1a9db4),this['proofBadge']=_0x3d6a46;}['getInitMethods'](){return [...super['getInitMethods'](),new CreateProofOfNonFungiblesRadixMethod_1['CreateProofOfNonFungiblesRadixMethod'](this['account'],this['proofBadge'])];}}RadixTransaction$1['ProvingRadixTransaction']=ProvingRadixTransaction;class TransferRadixTransaction extends RadixTransaction{['toAccount'];constructor(_0xed0876,_0x5d659f,_0x273a1c,_0x565498=RadixClientConfig_1$5['DEFAULT_TRANSACTION_XRD_FEE']){super(_0xed0876,_0x273a1c,_0x565498),this['toAccount']=_0x5d659f;}['getFinalMethods'](){return [new TryDepositBatchOrAbortRadixMethod_1['TryDepositBatchOrAbortRadixMethod'](this['toAccount'])];}}RadixTransaction$1['TransferRadixTransaction']=TransferRadixTransaction;

Object['defineProperty'](TransferXRDRadixMethod$1,'__esModule',{'value':!![]});TransferXRDRadixMethod$1['TransferXRDRadixMethod']=void 0x0;const radix_engine_toolkit_1$c=_0x6a06b2,RadixInvocation_1$c=RadixInvocation$1,RadixTransaction_1$d=RadixTransaction$1;class TransferXRDRadixMethod extends RadixInvocation_1$c['VoidRadixInvocation']{['toAccount'];['xrdAddress'];['amount'];constructor(_0x28f612,_0x52912e,_0x4f4517,_0x3d49b3){super(_0x28f612,'withdraw'),this['toAccount']=_0x52912e,this['xrdAddress']=_0x4f4517,this['amount']=_0x3d49b3;}['getParams'](){return [(0, radix_engine_toolkit_1$c['address'])(this['xrdAddress']),(0, radix_engine_toolkit_1$c['decimal'])(this['amount'])];}['getDedicatedTransaction'](_0x3ff444){return new RadixTransaction_1$d['TransferRadixTransaction'](_0x3ff444,this['toAccount'],[this]);}}TransferXRDRadixMethod$1['TransferXRDRadixMethod']=TransferXRDRadixMethod;

Object['defineProperty'](RadixClient$1,'__esModule',{'value':!![]});RadixClient$1['RadixClient']=void 0x0;const radix_engine_toolkit_1$b=_0x6a06b2,utils_1$H=requireSrc$3(),utils_2$5=_0x4eca3f,TransferXRDRadixMethod_1=TransferXRDRadixMethod$1,RadixClientConfig_1$4=RadixClientConfig;class RadixClient{['apiClient'];['networkId'];['signer'];['config'];['logger']=(0, utils_1$H['loggerFactory'])('RadixClient');constructor(_0x45afd0,_0x50965b=radix_engine_toolkit_1$b['NetworkId']['Stokenet'],_0x285e1e,_0x4ca357=RadixClientConfig_1$4['DEFAULT_RADIX_CLIENT_CONFIG']){this['apiClient']=_0x45afd0,this['networkId']=_0x50965b,this['signer']=_0x285e1e,this['config']=_0x4ca357;}static async['getAddressDataHex'](_0x3657f0){const _0x2e1855=await radix_engine_toolkit_1$b['RadixEngineToolkit']['Address']['decode'](_0x3657f0);return (0, utils_2$5['hexlify'])(_0x2e1855['data'])['substring'](0x2);}async['call'](_0x469c1c,_0x52c826,_0x169c5e=this['config']['maxTxSendAttempts']){return await this['callWithProvider'](()=>Promise['resolve'](_0x469c1c),_0x52c826,_0x169c5e);}async['callWithProvider'](_0x1d5730,_0x12cc3e,_0x13c677=this['config']['maxTxSendAttempts']){for(let _0xcf419a=0x0;_0xcf419a<_0x13c677;_0xcf419a++){try{const _0x317cf5=await _0x1d5730(),_0x98dae5=_0x317cf5['getDedicatedTransaction'](await this['getAccountAddress'](),this['config']['maxFeeXrd'],_0x12cc3e),_0x3d3382=await this['callTransaction'](_0x98dae5,_0xcf419a),_0x57b119=await this['waitForCommit'](_0x3d3382['id']);if(_0x57b119)return await this['interpret'](_0x3d3382['id'],_0x98dae5);this['logger']['log']('Iteration\x20#'+_0xcf419a+'\x20didn\x27t\x20finish\x20with\x20success.');}catch(_0x137cc4){this['logger']['error'](utils_1$H['RedstoneCommon']['stringifyError'](_0x137cc4));}}throw new Error('No\x20transaction\x20success\x20found\x20in\x20'+this['config']['maxTxSendAttempts']+'\x20iteration'+utils_1$H['RedstoneCommon']['getS'](this['config']['maxTxSendAttempts']));}async['interpret'](_0x4bd502,_0x249745){const _0x4f2bab=await this['apiClient']['getTransactionDetails'](_0x4bd502);return this['logger']['log']('Transaction\x20'+_0x4bd502+'\x20is\x20COMMITTED;\x20feePaid:\x20'+_0x4f2bab['feePaid']+'\x20XRD'),_0x249745['interpret'](_0x4f2bab['values']);}async['readValue'](_0x5f2267,_0x17dde0,_0x2cbe40){return (await this['apiClient']['getStateFields'](_0x5f2267,[_0x17dde0],_0x2cbe40))[_0x17dde0];}async['getCurrentEpochNumber'](){return await this['apiClient']['getCurrentEpochNumber']();}async['getCurrentStateVersion'](){return await this['apiClient']['getCurrentStateVersion']();}async['getXRDBalance'](_0x3b622f,_0x3c412a){const _0x405920=await radix_engine_toolkit_1$b['RadixEngineToolkit']['Utils']['knownAddresses'](this['networkId']);return await this['apiClient']['getFungibleBalance'](_0x3b622f,_0x405920['resourceAddresses']['xrd'],_0x3c412a);}async['getResourceBalance'](_0x528449,_0x1d7cda,_0x49ee2e){return await this['apiClient']['getNonFungibleBalance'](_0x528449,_0x1d7cda,_0x49ee2e);}async['getTransactions'](_0x10df7a,_0x23946f,_0x24c575,_0x54b046){let _0x451a46=undefined;do{const _0x4b0250=await this['apiClient']['getTransactions'](_0x10df7a,_0x23946f+0x1,_0x24c575,_0x451a46?.['next_cursor'],_0x54b046);!_0x451a46?_0x451a46=_0x4b0250:(_0x451a46['next_cursor']=_0x4b0250['next_cursor'],_0x451a46['items']['push'](..._0x4b0250['items']));}while(_0x451a46['next_cursor']);return _0x451a46;}async['waitForCommit'](_0x467a40,_0x48163f=RadixClientConfig_1$4['TX_WAIT_POLL_DELAY_MS']){try{const _0x55819b=await this['performWaitingForCommit'](_0x467a40,_0x48163f,this['config']['maxTxWaitingTimeMs']/_0x48163f);return !_0x55819b&&this['logger']['warn']('Transaction\x20'+_0x467a40+'\x20was\x20not\x20committed\x20during\x20'+this['config']['maxTxWaitingTimeMs']+'\x20[ms]'),_0x55819b;}catch(_0x4fd7cd){return this['logger']['error'](utils_1$H['RedstoneCommon']['stringifyError'](_0x4fd7cd)),![];}}async['performWaitingForCommit'](_0x23a58b,_0x4fb354,_0x50dfc5){for(let _0x574edf=0x0;_0x574edf<_0x50dfc5;_0x574edf++){const _0x4b75c6=await this['apiClient']['getTransactionStatus'](_0x23a58b),_0x370f3a='Transaction\x20'+_0x23a58b+'\x20is\x20'+_0x4b75c6['status'];switch(_0x4b75c6['status']){case'Pending':case'CommitPendingOutcomeUnknown':{this['logger']['debug'](_0x370f3a);break;}case'CommittedSuccess':{return this['logger']['debug'](_0x370f3a),!![];}case'CommittedFailure':throw new Error('Transaction\x20'+_0x23a58b+'\x20is\x20FAILED:\x20'+_0x4b75c6['errorMessage']);default:this['logger']['log'](_0x370f3a);}await utils_1$H['RedstoneCommon']['sleep'](_0x4fb354);}return ![];}async['getAccountAddress'](){return await radix_engine_toolkit_1$b['RadixEngineToolkit']['Derive']['virtualAccountAddressFromPublicKey'](await this['getPublicKey'](),this['networkId']);}['getPublicKeyHex'](){return this['signer']?.['publicKeyHex']();}async['getTrasanctionHeader'](_0x27b767=0x0){const _0x4e742b=await this['apiClient']['getCurrentEpochNumber']();return {'networkId':this['networkId'],'startEpochInclusive':_0x4e742b,'endEpochExclusive':_0x4e742b+RadixClientConfig_1$4['ALLOWED_FORWARD_EPOCH_COUNT'],'nonce':(0, radix_engine_toolkit_1$b['generateRandomNonce'])(),'notaryPublicKey':await this['getPublicKey'](),'notaryIsSignatory':!![],'tipPercentage':this['getTipPercentage'](_0x27b767)};}async['compileTransactionToIntent'](_0x1cac19,_0x31ce7d=0x0){const _0x253d97={'header':await this['getTrasanctionHeader'](_0x31ce7d),'manifest':_0x1cac19['getManifest'](),'message':{'kind':'None'}};return await radix_engine_toolkit_1$b['RadixEngineToolkit']['Intent']['compile'](_0x253d97);}['getPublicKey'](){if(!this['signer'])throw new Error('No\x20signer\x20or\x20private\x20key\x20passed');return this['signer']['publicKey']();}['getTipPercentage'](_0x3d9636=0x0){return Math['floor'](Math['min'](0x64*(this['config']['tipMultiplier']**_0x3d9636-0x1),RadixClientConfig_1$4['MAX_TIP_PERCENTAGE']));}async['callTransaction'](_0xe05648,_0x3c4f9b=0x0){const _0x1c5e15=await this['getTrasanctionHeader'](_0x3c4f9b),_0x5f9f5d=await radix_engine_toolkit_1$b['TransactionBuilder']['new']()['then'](_0x41c53a=>{const _0x237203=_0x41c53a['header'](_0x1c5e15)['manifest'](_0xe05648['getManifest']());return this['signer']['asyncSign'](_0x237203);});return await this['submitTransaction'](_0x5f9f5d);}async['submitTransaction'](_0x217bc6){await radix_engine_toolkit_1$b['RadixEngineToolkit']['NotarizedTransaction']['staticallyValidate'](_0x217bc6,(0, radix_engine_toolkit_1$b['defaultValidationConfig'])(this['networkId']))['then'](_0xa3bfd0=>{if(_0xa3bfd0['kind']==='Invalid')throw new Error('Transaction\x20is\x20invalid:\x20'+utils_1$H['RedstoneCommon']['stringifyError'](_0xa3bfd0['error']));});const _0x175848=await radix_engine_toolkit_1$b['RadixEngineToolkit']['NotarizedTransaction']['intentHash'](_0x217bc6);this['logger']['log']('Transaction\x20'+_0x175848['id']+'\x20sent.');const _0x3882c1=await radix_engine_toolkit_1$b['RadixEngineToolkit']['NotarizedTransaction']['compile'](_0x217bc6),_0xa60f6d=await this['apiClient']['submitTransaction'](_0x3882c1);return _0xa60f6d&&this['logger']['info']('Transaction\x20'+_0x175848['id']+'\x20was\x20a\x20duplicate'),_0x175848;}async['transfer'](_0x2c7f48,_0x33b3d4){const _0x27a87a=await radix_engine_toolkit_1$b['RadixEngineToolkit']['Utils']['knownAddresses'](this['networkId']),_0x347ff4=await this['getAccountAddress']();await this['call'](new TransferXRDRadixMethod_1['TransferXRDRadixMethod'](_0x347ff4,_0x2c7f48,_0x27a87a['resourceAddresses']['xrd'],_0x33b3d4),undefined,0x1);}['getNotarySigner'](){return this['signer']?.['getNotarySigner']();}}RadixClient$1['RadixClient']=RadixClient;

var RadixContractAdapter$1 = {};

Object['defineProperty'](RadixContractAdapter$1,'__esModule',{'value':!![]});RadixContractAdapter$1['RadixContractAdapter']=void 0x0;class RadixContractAdapter{['client'];['componentId'];['readMode'];constructor(_0x494829,_0x4badae,_0x20a92a='ReadFromStorage'){this['client']=_0x494829,this['componentId']=_0x4badae,this['readMode']=_0x20a92a;}}RadixContractAdapter$1['RadixContractAdapter']=RadixContractAdapter;

var GetPricesRadixMethod$1 = {};

var utils$1 = {};

Object['defineProperty'](utils$1,'__esModule',{'value':!![]});utils$1['makeSetRoleArg']=makeSetRoleArg;utils$1['makeOwnerUpdatableRole']=makeOwnerUpdatableRole;utils$1['publicKeyHash']=publicKeyHash;utils$1['edResource']=edResource;utils$1['makeEdSignatureResource']=makeEdSignatureResource;utils$1['makeMultisigAccessRule']=makeMultisigAccessRule;utils$1['makeNonFungibleGlobalId']=makeNonFungibleGlobalId;utils$1['makeOption']=makeOption;utils$1['makeBytes']=makeBytes;utils$1['makeFeedId']=makeFeedId;utils$1['makeFeedIds']=makeFeedIds;utils$1['makeSigners']=makeSigners;const utf8_1=_0xb5a280,radix_engine_toolkit_1$a=_0x6a06b2,utils_1$G=_0x4eca3f;function makeSetRoleArg(_0x3f141d,_0x35e68c){return [(0, radix_engine_toolkit_1$a['enumeration'])(0x0),(0, radix_engine_toolkit_1$a['str'])(_0x3f141d),_0x35e68c];}function makeOwnerUpdatableRole(_0x366001){return (0, radix_engine_toolkit_1$a['enumeration'])(0x2,_0x366001);}function publicKeyHash(_0x39f82c){const _0x26b0c5=(0, radix_engine_toolkit_1$a['hash'])(Buffer['from'](_0x39f82c,'hex'))['subarray'](-0x1d);return Buffer['from'](_0x26b0c5)['toString']('hex');}async function edResource(_0x52c0a3){const _0x26b748=await radix_engine_toolkit_1$a['RadixEngineToolkit']['Utils']['knownAddresses'](_0x52c0a3);return _0x26b748['resourceAddresses']['ed25519SignatureVirtualBadge'];}async function makeEdSignatureResource(_0x2269f5,_0x7435ea){return (0, radix_engine_toolkit_1$a['enumeration'])(0x0,makeNonFungibleGlobalId({'resourceAddress':await edResource(_0x7435ea),'localId':'['+_0x2269f5+']'}));}async function makeMultisigAccessRule(_0x3300f6,_0x2f6a23,_0x278aab=radix_engine_toolkit_1$a['NetworkId']['Stokenet']){const _0x3beb7f=_0x2f6a23['map'](publicKeyHash),_0x37349f=[];for(const _0x2420e5 of _0x3beb7f){_0x37349f['push'](await makeEdSignatureResource(_0x2420e5,_0x278aab));}return (0, radix_engine_toolkit_1$a['enumeration'])(0x2,(0, radix_engine_toolkit_1$a['enumeration'])(0x0,(0, radix_engine_toolkit_1$a['enumeration'])(0x2,{'kind':radix_engine_toolkit_1$a['ValueKind']['U8'],'value':_0x3300f6},(0, radix_engine_toolkit_1$a['array'])(radix_engine_toolkit_1$a['ValueKind']['Enum'],..._0x37349f))));}function makeNonFungibleGlobalId(_0x5b33eb){return (0, radix_engine_toolkit_1$a['tuple'])((0, radix_engine_toolkit_1$a['address'])(_0x5b33eb['resourceAddress']),(0, radix_engine_toolkit_1$a['nonFungibleLocalId'])(_0x5b33eb['localId']));}function makeOption(_0x285d87,_0x47300b){return (0, radix_engine_toolkit_1$a['enumeration'])(_0x47300b?0x1:0x0,..._0x47300b?[_0x285d87(_0x47300b)]:[]);}function makeBytes(_0x29f6a1){return (0, radix_engine_toolkit_1$a['array'])(radix_engine_toolkit_1$a['ValueKind']['U8'],..._0x29f6a1['map'](radix_engine_toolkit_1$a['u8']));}function makeFeedId(_0x257701){const _0x189fc7=Array['from']((0, utf8_1['toUtf8Bytes'])(_0x257701));return makeBytes(_0x189fc7);}function makeFeedIds(_0xb5ceb4){return (0, radix_engine_toolkit_1$a['array'])(radix_engine_toolkit_1$a['ValueKind']['Array'],..._0xb5ceb4['map'](makeFeedId));}function makeSigners(_0x1186f2){const _0x494bad=_0x1186f2['map'](_0x2a3d5b=>Array['from']((0, utils_1$G['arrayify'])(_0x2a3d5b)));return (0, radix_engine_toolkit_1$a['array'])(radix_engine_toolkit_1$a['ValueKind']['Array'],..._0x494bad['map'](makeBytes));}

Object['defineProperty'](GetPricesRadixMethod$1,'__esModule',{'value':!![]});GetPricesRadixMethod$1['GetPricesRadixMethod']=void 0x0;const RadixInvocation_1$b=RadixInvocation$1,RadixTransaction_1$c=RadixTransaction$1,utils_1$F=utils$1;class GetPricesRadixMethod extends RadixInvocation_1$b['RadixInvocation']{['dataFeedIds'];['payloadBytes'];['fee'];constructor(_0x5d4c1c,_0x5c920a,_0x5a391d,_0x25cb7b=_0x5c920a['length'],_0x4f2322='get_prices_raw'){super(_0x5d4c1c,_0x4f2322),this['dataFeedIds']=_0x5c920a,this['payloadBytes']=_0x5a391d,this['fee']=_0x25cb7b;}['getDedicatedTransaction'](_0x278238,_0x4ff685){return new RadixTransaction_1$c['RadixTransaction'](_0x278238,[this],_0x4ff685??this['fee']);}['getParams'](){return [(0, utils_1$F['makeFeedIds'])(this['dataFeedIds']),(0, utils_1$F['makeBytes'])(this['payloadBytes'])];}['interpret'](_0x1e0c3c){return {'timestamp':_0x1e0c3c[0x0],'values':_0x1e0c3c[0x1]};}}GetPricesRadixMethod$1['GetPricesRadixMethod']=GetPricesRadixMethod;

var ReadPriceDataRadixMethod$1 = {};

Object['defineProperty'](ReadPriceDataRadixMethod$1,'__esModule',{'value':!![]});ReadPriceDataRadixMethod$1['ReadPriceDataRadixMethod']=void 0x0;const RadixInvocation_1$a=RadixInvocation$1,RadixTransaction_1$b=RadixTransaction$1,utils_1$E=utils$1;class ReadPriceDataRadixMethod extends RadixInvocation_1$a['ValueRadixInvocation']{['dataFeedIds'];constructor(_0x549ecb,_0xfb2822){super(_0x549ecb,'read_price_data_raw'),this['dataFeedIds']=_0xfb2822;}['getDedicatedTransaction'](_0x578702){return new RadixTransaction_1$b['RadixTransaction'](_0x578702,[this]);}['getParams'](){return [(0, utils_1$E['makeFeedIds'])(this['dataFeedIds'])];}}ReadPriceDataRadixMethod$1['ReadPriceDataRadixMethod']=ReadPriceDataRadixMethod;

var ReadPricesRadixMethod$1 = {};

Object['defineProperty'](ReadPricesRadixMethod$1,'__esModule',{'value':!![]});ReadPricesRadixMethod$1['ReadPricesRadixMethod']=void 0x0;const RadixInvocation_1$9=RadixInvocation$1,RadixTransaction_1$a=RadixTransaction$1,utils_1$D=utils$1;class ReadPricesRadixMethod extends RadixInvocation_1$9['ValueRadixInvocation']{['dataFeedIds'];constructor(_0x34b87f,_0xab70c4){super(_0x34b87f,'read_prices_raw'),this['dataFeedIds']=_0xab70c4;}['getDedicatedTransaction'](_0xda05c5){return new RadixTransaction_1$a['RadixTransaction'](_0xda05c5,[this]);}['getParams'](){return [(0, utils_1$D['makeFeedIds'])(this['dataFeedIds'])];}['interpret'](_0x667053){return _0x667053;}}ReadPricesRadixMethod$1['ReadPricesRadixMethod']=ReadPricesRadixMethod;

var ReadTimestampRadixMethod$1 = {};

Object['defineProperty'](ReadTimestampRadixMethod$1,'__esModule',{'value':!![]});ReadTimestampRadixMethod$1['ReadTimestampRadixMethod']=void 0x0;const RadixInvocation_1$8=RadixInvocation$1,RadixTransaction_1$9=RadixTransaction$1,utils_1$C=utils$1;class ReadTimestampRadixMethod extends RadixInvocation_1$8['ValueRadixInvocation']{['feedId'];constructor(_0x1ecbab,_0x228015){super(_0x1ecbab,'read_timestamp'),this['feedId']=_0x228015;}['getParams'](){return this['feedId']?[(0, utils_1$C['makeFeedId'])(this['feedId'])]:super['getParams']();}['getDedicatedTransaction'](_0x122518){return new RadixTransaction_1$9['RadixTransaction'](_0x122518,[this]);}}ReadTimestampRadixMethod$1['ReadTimestampRadixMethod']=ReadTimestampRadixMethod;

var WritePricesRadixMethod$1 = {};

Object['defineProperty'](WritePricesRadixMethod$1,'__esModule',{'value':!![]});WritePricesRadixMethod$1['WritePricesRadixMethod']=void 0x0;const GetPricesRadixMethod_1$2=GetPricesRadixMethod$1;class WritePricesRadixMethod extends GetPricesRadixMethod_1$2['GetPricesRadixMethod']{constructor(_0x210d9f,_0xbfbff5,_0x22ae02,_0x4df85b=_0xbfbff5['length']*1.5){super(_0x210d9f,_0xbfbff5,_0x22ae02,_0x4df85b,'write_prices_raw');}}WritePricesRadixMethod$1['WritePricesRadixMethod']=WritePricesRadixMethod;

var WritePricesTrustedRadixMethod$1 = {};

Object['defineProperty'](WritePricesTrustedRadixMethod$1,'__esModule',{'value':!![]});WritePricesTrustedRadixMethod$1['WritePricesTrustedRadixMethod']=void 0x0;const RadixTransaction_1$8=RadixTransaction$1,GetPricesRadixMethod_1$1=GetPricesRadixMethod$1;class WritePricesTrustedRadixMethod extends GetPricesRadixMethod_1$1['GetPricesRadixMethod']{['proofBadge'];constructor(_0x274fdb,_0x6bcdd0,_0xcae115,_0x52dd4c,_0x28e1ec=_0x6bcdd0['length']*1.5){super(_0x274fdb,_0x6bcdd0,_0xcae115,_0x28e1ec,'write_prices_raw_trusted'),this['proofBadge']=_0x52dd4c;}['getDedicatedTransaction'](_0x4c99ed,_0x23eff9){return new RadixTransaction_1$8['ProvingRadixTransaction'](_0x4c99ed,[this],this['proofBadge'],_0x23eff9??this['fee']);}}WritePricesTrustedRadixMethod$1['WritePricesTrustedRadixMethod']=WritePricesTrustedRadixMethod;

var __importDefault$6=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x1292db){return _0x1292db&&_0x1292db['__esModule']?_0x1292db:{'default':_0x1292db};};Object['defineProperty'](PriceAdapterRadixContractAdapter$1,'__esModule',{'value':!![]});PriceAdapterRadixContractAdapter$1['PriceAdapterRadixContractAdapter']=void 0x0;const sdk_1$4=requireSrc$2(),ethers_1$4=_0x3e9376,lodash_1$3=__importDefault$6(_0x62d7dc),RadixClient_1$2=RadixClient$1,RadixContractAdapter_1$2=RadixContractAdapter$1,GetPricesRadixMethod_1=GetPricesRadixMethod$1,ReadPriceDataRadixMethod_1=ReadPriceDataRadixMethod$1,ReadPricesRadixMethod_1=ReadPricesRadixMethod$1,ReadTimestampRadixMethod_1=ReadTimestampRadixMethod$1,WritePricesRadixMethod_1=WritePricesRadixMethod$1,WritePricesTrustedRadixMethod_1=WritePricesTrustedRadixMethod$1;class PriceAdapterRadixContractAdapter extends RadixContractAdapter_1$2['RadixContractAdapter']{['trustedUpdaterProofBadge'];async['getSignerAddress'](){return await this['client']['getAccountAddress']();}async['getPricesFromPayload'](_0x104ac6){return (await this['client']['call'](new GetPricesRadixMethod_1['GetPricesRadixMethod'](this['componentId'],_0x104ac6['getDataFeedIds'](),await _0x104ac6['getPayloadData']())))['values'];}async['writePricesFromPayloadToContract'](_0x226945){const _0xd3b693=Date['now'](),_0x2b4a7c=async()=>await this['getWritePricesMethod'](_0x226945,_0xd3b693);return (await this['client']['callWithProvider'](_0x2b4a7c))['values'];}async['getWritePricesMethod'](_0x33cdf1,_0x293913){const _0x44b68e=await _0x33cdf1['getPayloadData']({'withUnsignedMetadata':!![],'metadataTimestamp':_0x293913}),_0x4a9256=await this['getTrustedUpdaterProofBadge']();return _0x4a9256?new WritePricesTrustedRadixMethod_1['WritePricesTrustedRadixMethod'](this['componentId'],_0x33cdf1['getDataFeedIds'](),_0x44b68e,_0x4a9256):new WritePricesRadixMethod_1['WritePricesRadixMethod'](this['componentId'],_0x33cdf1['getDataFeedIds'](),_0x44b68e);}async['getUniqueSignerThreshold'](_0x30d0b0){return Number(await this['client']['readValue'](this['componentId'],'signer_count_threshold',_0x30d0b0));}async['readPricesFromContract'](_0x5b8596,_0x240155){if(this['readMode']==='ReadFromStorage'){const _0x1db778=await this['readPriceData'](_0x240155);return _0x5b8596['getDataFeedIds']()['map'](_0x134589=>_0x1db778[_0x134589]['lastValue']);}else return await this['client']['call'](new ReadPricesRadixMethod_1['ReadPricesRadixMethod'](this['componentId'],_0x5b8596['getDataFeedIds']()));}async['readTimestampFromContract'](_0x128471,_0x1f15ed){if(this['readMode']==='ReadFromStorage'){const _0x52c931=await this['readPriceData'](_0x1f15ed);return Number(_0x52c931[_0x128471]['lastDataPackageTimestampMS']);}else return Number(await this['client']['call'](new ReadTimestampRadixMethod_1['ReadTimestampRadixMethod'](this['componentId'],_0x128471)));}async['readLatestUpdateBlockTimestamp'](_0x3b283f,_0xfda287){const _0x2dec0c=await this['readPriceData'](_0xfda287);return _0x2dec0c[_0x3b283f]['lastBlockTimestampMS'];}async['readContractData'](_0x49cd7f,_0x4879e2){if(this['readMode']==='ReadFromStorage'){const _0x513ab5=await this['readPriceData'](_0x4879e2);return lodash_1$3['default']['pick'](_0x513ab5,_0x49cd7f);}else {const _0x429a3b=await this['client']['call'](new ReadPriceDataRadixMethod_1['ReadPriceDataRadixMethod'](this['componentId'],_0x49cd7f));return Object['fromEntries'](lodash_1$3['default']['zip'](_0x49cd7f,_0x429a3b['map'](PriceAdapterRadixContractAdapter['convertRawToLastDetails'])));}}async['readPriceData'](_0x31e581){const _0x597696=await this['client']['readValue'](this['componentId'],'prices',_0x31e581);return Object['fromEntries'](Object['entries'](_0x597696)['map'](([_0x1e98f4,_0x106c6f])=>[sdk_1$4['ContractParamsProvider']['unhexlifyFeedId'](_0x1e98f4),PriceAdapterRadixContractAdapter['convertRawToLastDetails'](_0x106c6f)]));}static['convertRawToLastDetails'](_0x1342f2){return {'lastDataPackageTimestampMS':Number(_0x1342f2[0x2]),'lastBlockTimestampMS':Number(_0x1342f2[0x1]),'lastValue':ethers_1$4['BigNumber']['from'](_0x1342f2[0x0])};}async['getTrustedUpdaterResourceBadge'](_0x43a334){const _0x3a479c=await this['client']['readValue'](this['componentId'],'trusted_updater_resource');if(!_0x3a479c)return;const _0x216eb7=await RadixClient_1$2['RadixClient']['getAddressDataHex'](_0x43a334);return {'resourceAddress':_0x3a479c,'localId':'<'+_0x216eb7+'>'};}async['getTrustedUpdaterProofBadge'](){return this['trustedUpdaterProofBadge']??=await this['makeTrustedUpdaterProofBadge'](),this['trustedUpdaterProofBadge'];}async['makeTrustedUpdaterProofBadge'](){const _0x3b994b=await this['client']['getAccountAddress'](),_0x56b398=await this['getTrustedUpdaterResourceBadge'](_0x3b994b);if(!_0x56b398)return;const _0x4665dd=await this['client']['getResourceBalance'](_0x3b994b,_0x56b398['resourceAddress']);if(!_0x4665dd)return;return _0x56b398;}}PriceAdapterRadixContractAdapter$1['PriceAdapterRadixContractAdapter']=PriceAdapterRadixContractAdapter;

var PriceAdapterRadixContractConnector$1 = {};

var RadixContractConnector$1 = {};

Object['defineProperty'](RadixContractConnector$1,'__esModule',{'value':!![]});RadixContractConnector$1['RadixContractConnector']=void 0x0;const ethers_1$3=_0x3e9376;class RadixContractConnector{['client'];['componentId'];constructor(_0x1e4843,_0x390cfc){this['client']=_0x1e4843,this['componentId']=_0x390cfc;}['getAdapter'](){throw new Error('getAdapter\x20is\x20not\x20implemented');}async['getBlockNumber'](){return await this['client']['getCurrentStateVersion']();}async['waitForTransaction'](_0xd00c4c){return await this['client']['waitForCommit'](_0xd00c4c);}async['getNormalizedBalance'](_0x497798,_0x3a397d){return ethers_1$3['utils']['parseEther'](await this['client']['getXRDBalance'](_0x497798,_0x3a397d))['toBigInt']();}async['transfer'](_0xa2ba64,_0x529c21){return await this['client']['transfer'](_0xa2ba64,_0x529c21);}async['getSignerAddress'](){return await this['client']['getAccountAddress']();}}RadixContractConnector$1['RadixContractConnector']=RadixContractConnector;

Object['defineProperty'](PriceAdapterRadixContractConnector$1,'__esModule',{'value':!![]});PriceAdapterRadixContractConnector$1['PriceAdapterRadixContractConnector']=void 0x0;const RadixContractConnector_1$2=RadixContractConnector$1,PriceAdapterRadixContractAdapter_1=PriceAdapterRadixContractAdapter$1;class PriceAdapterRadixContractConnector extends RadixContractConnector_1$2['RadixContractConnector']{['adapter'];constructor(_0x49e031,_0x2f33b2){super(_0x49e031,_0x2f33b2);}async['getComponentId'](){return this['componentId'];}async['getAdapter'](){return this['adapter']??=new PriceAdapterRadixContractAdapter_1['PriceAdapterRadixContractAdapter'](this['client'],await this['getComponentId']()),this['adapter'];}}PriceAdapterRadixContractConnector$1['PriceAdapterRadixContractConnector']=PriceAdapterRadixContractConnector;

var PriceAdapterRadixContractDeployer$1 = {};

var PriceAdapterInstantiateRadixFunction$1 = {};

Object['defineProperty'](PriceAdapterInstantiateRadixFunction$1,'__esModule',{'value':!![]});PriceAdapterInstantiateRadixFunction$1['PriceAdapterInstantiateRadixFunction']=void 0x0;const radix_engine_toolkit_1$9=_0x6a06b2,RadixClientConfig_1$3=RadixClientConfig,RadixInvocation_1$7=RadixInvocation$1,RadixTransaction_1$7=RadixTransaction$1,utils_1$B=utils$1;class PriceAdapterInstantiateRadixFunction extends RadixInvocation_1$7['RadixFunction']{['signerCountThreshold'];['signers'];['fee'];constructor(_0x281bcc,_0x45bc35,_0x151af2,_0x5dba9c='PriceAdapter',_0x32cf35=RadixClientConfig_1$3['DEFAULT_INSTANTIATE_XRD_FEE'],_0x50207e='instantiate'){super(_0x281bcc,_0x50207e,_0x5dba9c),this['signerCountThreshold']=_0x45bc35,this['signers']=_0x151af2,this['fee']=_0x32cf35;}['getParams'](){return [(0, radix_engine_toolkit_1$9['u8'])(this['signerCountThreshold']),(0, utils_1$B['makeSigners'])(this['signers'])];}['getDedicatedTransaction'](_0x30f29b){return new RadixTransaction_1$7['RadixTransaction'](_0x30f29b,[this],this['fee']);}}PriceAdapterInstantiateRadixFunction$1['PriceAdapterInstantiateRadixFunction']=PriceAdapterInstantiateRadixFunction;

var PriceAdapterInstantiateWithTrustedUpdatersRadixFunction$1 = {};

Object['defineProperty'](PriceAdapterInstantiateWithTrustedUpdatersRadixFunction$1,'__esModule',{'value':!![]});PriceAdapterInstantiateWithTrustedUpdatersRadixFunction$1['PriceAdapterInstantiateWithTrustedUpdatersRadixFunction']=void 0x0;const radix_engine_toolkit_1$8=_0x6a06b2,RadixClientConfig_1$2=RadixClientConfig,PriceAdapterInstantiateRadixFunction_1$1=PriceAdapterInstantiateRadixFunction$1;class PriceAdapterInstantiateWithTrustedUpdatersRadixFunction extends PriceAdapterInstantiateRadixFunction_1$1['PriceAdapterInstantiateRadixFunction']{['trustedUpdaters'];constructor(_0x5b86b2,_0x371eb9,_0xd3c329,_0x3cc840,_0x270954='PriceAdapter',_0x58666a=RadixClientConfig_1$2['DEFAULT_INSTANTIATE_XRD_FEE']){super(_0x5b86b2,_0x371eb9,_0xd3c329,_0x270954,_0x58666a,'instantiate_with_trusted_updaters'),this['trustedUpdaters']=_0x3cc840;}['getParams'](){return [...super['getParams'](),(0, radix_engine_toolkit_1$8['array'])(radix_engine_toolkit_1$8['ValueKind']['String'],...this['trustedUpdaters']['map'](radix_engine_toolkit_1$8['str']))];}['interpret'](_0x47233a){return super['interpret'](_0x47233a[0x0]);}}PriceAdapterInstantiateWithTrustedUpdatersRadixFunction$1['PriceAdapterInstantiateWithTrustedUpdatersRadixFunction']=PriceAdapterInstantiateWithTrustedUpdatersRadixFunction;

Object['defineProperty'](PriceAdapterRadixContractDeployer$1,'__esModule',{'value':!![]});PriceAdapterRadixContractDeployer$1['PriceAdapterRadixContractDeployer']=void 0x0;const RadixClient_1$1=RadixClient$1,PriceAdapterRadixContractConnector_1$1=PriceAdapterRadixContractConnector$1,PriceAdapterInstantiateRadixFunction_1=PriceAdapterInstantiateRadixFunction$1,PriceAdapterInstantiateWithTrustedUpdatersRadixFunction_1=PriceAdapterInstantiateWithTrustedUpdatersRadixFunction$1;class PriceAdapterRadixContractDeployer extends PriceAdapterRadixContractConnector_1$1['PriceAdapterRadixContractConnector']{['packageId'];['signerCountThreshold'];['signers'];['trustedUpdaters'];constructor(_0x2477c8,_0x3c0693,_0x59c04f,_0x4ee462,_0x1c4ed1){super(_0x2477c8),this['packageId']=_0x3c0693,this['signerCountThreshold']=_0x59c04f,this['signers']=_0x4ee462,this['trustedUpdaters']=_0x1c4ed1;}async['getComponentId'](){if(this['componentId'])return this['componentId'];return this['componentId']=await this['instantiate'](),await super['getComponentId']();}async['instantiate'](){if(!this['trustedUpdaters']?.['length'])return await this['client']['call'](new PriceAdapterInstantiateRadixFunction_1['PriceAdapterInstantiateRadixFunction'](this['packageId'],this['signerCountThreshold'],this['signers']));const _0x504413=await Promise['all'](this['trustedUpdaters']['map'](async _0x24c3f5=>{return await RadixClient_1$1['RadixClient']['getAddressDataHex'](_0x24c3f5);}));return await this['client']['call'](new PriceAdapterInstantiateWithTrustedUpdatersRadixFunction_1['PriceAdapterInstantiateWithTrustedUpdatersRadixFunction'](this['packageId'],this['signerCountThreshold'],this['signers'],_0x504413));}}PriceAdapterRadixContractDeployer$1['PriceAdapterRadixContractDeployer']=PriceAdapterRadixContractDeployer;

var PriceFeedRadixContractAdapter$1 = {};

var ReadDescriptionRadixMethod$1 = {};

Object['defineProperty'](ReadDescriptionRadixMethod$1,'__esModule',{'value':!![]});ReadDescriptionRadixMethod$1['ReadDescriptionRadixMethod']=void 0x0;const RadixInvocation_1$6=RadixInvocation$1,RadixTransaction_1$6=RadixTransaction$1;class ReadDescriptionRadixMethod extends RadixInvocation_1$6['ValueProxyRadixInvocation']{constructor(_0x3fecd8){super(_0x3fecd8,'get_description');}['getDedicatedTransaction'](_0xe3e8b9){return new RadixTransaction_1$6['RadixTransaction'](_0xe3e8b9,[this]);}['interpret'](_0x6a8b61){return super['interpret'](_0x6a8b61);}}ReadDescriptionRadixMethod$1['ReadDescriptionRadixMethod']=ReadDescriptionRadixMethod;

var ReadFeedIdRadixMethod$1 = {};

Object['defineProperty'](ReadFeedIdRadixMethod$1,'__esModule',{'value':!![]});ReadFeedIdRadixMethod$1['ReadFeedIdRadixMethod']=void 0x0;const sdk_1$3=requireSrc$2(),RadixInvocation_1$5=RadixInvocation$1,RadixTransaction_1$5=RadixTransaction$1;class ReadFeedIdRadixMethod extends RadixInvocation_1$5['ValueProxyRadixInvocation']{constructor(_0x2c7a0b){super(_0x2c7a0b,'get_feed_id');}['getDedicatedTransaction'](_0x583241){return new RadixTransaction_1$5['RadixTransaction'](_0x583241,[this]);}['interpret'](_0x5dd3bf){return sdk_1$3['ContractParamsProvider']['unhexlifyFeedId'](_0x5dd3bf);}}ReadFeedIdRadixMethod$1['ReadFeedIdRadixMethod']=ReadFeedIdRadixMethod;

var ReadPriceAndTimestampRadixMethod$1 = {};

Object['defineProperty'](ReadPriceAndTimestampRadixMethod$1,'__esModule',{'value':!![]});ReadPriceAndTimestampRadixMethod$1['ReadPriceAndTimestampRadixMethod']=void 0x0;const RadixInvocation_1$4=RadixInvocation$1,RadixTransaction_1$4=RadixTransaction$1;class ReadPriceAndTimestampRadixMethod extends RadixInvocation_1$4['ValueProxyRadixInvocation']{constructor(_0x5d8ae2){super(_0x5d8ae2,'read_price_and_timestamp_raw');}['getDedicatedTransaction'](_0x2d6459){return new RadixTransaction_1$4['RadixTransaction'](_0x2d6459,[this]);}['interpret'](_0x52703c){return {'value':_0x52703c[0x0],'timestamp':Number(_0x52703c[0x1])};}}ReadPriceAndTimestampRadixMethod$1['ReadPriceAndTimestampRadixMethod']=ReadPriceAndTimestampRadixMethod;

Object['defineProperty'](PriceFeedRadixContractAdapter$1,'__esModule',{'value':!![]});PriceFeedRadixContractAdapter$1['PriceFeedRadixContractAdapter']=void 0x0;const RadixContractAdapter_1$1=RadixContractAdapter$1,ReadDescriptionRadixMethod_1=ReadDescriptionRadixMethod$1,ReadFeedIdRadixMethod_1=ReadFeedIdRadixMethod$1,ReadPriceAndTimestampRadixMethod_1=ReadPriceAndTimestampRadixMethod$1;class PriceFeedRadixContractAdapter extends RadixContractAdapter_1$1['RadixContractAdapter']{constructor(_0x29fbfe,_0x22fb2f,_0xa232ef='CallReadMethod'){super(_0x29fbfe,_0x22fb2f,_0xa232ef);}async['getPriceAndTimestamp'](){return await this['client']['call'](new ReadPriceAndTimestampRadixMethod_1['ReadPriceAndTimestampRadixMethod'](this['componentId']));}async['getDescription'](){return await this['client']['call'](new ReadDescriptionRadixMethod_1['ReadDescriptionRadixMethod'](this['componentId']));}async['getDataFeedId'](){return await this['client']['call'](new ReadFeedIdRadixMethod_1['ReadFeedIdRadixMethod'](this['componentId']));}}PriceFeedRadixContractAdapter$1['PriceFeedRadixContractAdapter']=PriceFeedRadixContractAdapter;

var PriceFeedRadixContractConnector$1 = {};

Object['defineProperty'](PriceFeedRadixContractConnector$1,'__esModule',{'value':!![]});PriceFeedRadixContractConnector$1['PriceFeedRadixContractConnector']=void 0x0;const RadixContractConnector_1$1=RadixContractConnector$1,PriceFeedRadixContractAdapter_1=PriceFeedRadixContractAdapter$1;class PriceFeedRadixContractConnector extends RadixContractConnector_1$1['RadixContractConnector']{constructor(_0x530700,_0x4e1af3){super(_0x530700,_0x4e1af3);}async['getComponentId'](){return this['componentId'];}async['getAdapter'](){return new PriceFeedRadixContractAdapter_1['PriceFeedRadixContractAdapter'](this['client'],await this['getComponentId']());}}PriceFeedRadixContractConnector$1['PriceFeedRadixContractConnector']=PriceFeedRadixContractConnector;

var PriceFeedRadixContractDeployer$1 = {};

var PriceFeedInstantiateRadixFunction$1 = {};

Object['defineProperty'](PriceFeedInstantiateRadixFunction$1,'__esModule',{'value':!![]});PriceFeedInstantiateRadixFunction$1['PriceFeedInstantiateRadixFunction']=void 0x0;const radix_engine_toolkit_1$7=_0x6a06b2,RadixClientConfig_1$1=RadixClientConfig,RadixInvocation_1$3=RadixInvocation$1,RadixTransaction_1$3=RadixTransaction$1,utils_1$A=utils$1;class PriceFeedInstantiateRadixFunction extends RadixInvocation_1$3['RadixFunction']{['adapterAddress'];['feedId'];['fee'];constructor(_0x3f9048,_0xc8d862,_0x57b9d6,_0x486108=RadixClientConfig_1$1['DEFAULT_INSTANTIATE_XRD_FEE']){super(_0x3f9048,'instantiate','PriceFeed'),this['adapterAddress']=_0xc8d862,this['feedId']=_0x57b9d6,this['fee']=_0x486108;}['getParams'](){return [(0, radix_engine_toolkit_1$7['address'])(this['adapterAddress']),(0, utils_1$A['makeFeedId'])(this['feedId'])];}['getDedicatedTransaction'](_0xd36e88){return new RadixTransaction_1$3['RadixTransaction'](_0xd36e88,[this],this['fee']);}}PriceFeedInstantiateRadixFunction$1['PriceFeedInstantiateRadixFunction']=PriceFeedInstantiateRadixFunction;

Object['defineProperty'](PriceFeedRadixContractDeployer$1,'__esModule',{'value':!![]});PriceFeedRadixContractDeployer$1['PriceFeedRadixContractDeployer']=void 0x0;const PriceAdapterRadixContractConnector_1=PriceAdapterRadixContractConnector$1,PriceFeedInstantiateRadixFunction_1=PriceFeedInstantiateRadixFunction$1;class PriceFeedRadixContractDeployer extends PriceAdapterRadixContractConnector_1['PriceAdapterRadixContractConnector']{['packageId'];['adapterAddress'];['feedId'];constructor(_0x16f40d,_0x368b44,_0x3d9aff,_0x23d14a){super(_0x16f40d),this['packageId']=_0x368b44,this['adapterAddress']=_0x3d9aff,this['feedId']=_0x23d14a;}async['getComponentId'](){if(this['componentId'])return this['componentId'];return this['componentId']=await this['instantiate'](),await super['getComponentId']();}async['instantiate'](){return await this['client']['call'](new PriceFeedInstantiateRadixFunction_1['PriceFeedInstantiateRadixFunction'](this['packageId'],this['adapterAddress'],this['feedId']));}}PriceFeedRadixContractDeployer$1['PriceFeedRadixContractDeployer']=PriceFeedRadixContractDeployer;

var ProxyRadixContractAdapter = {};

var ChangeManagerRole = {};

Object['defineProperty'](ChangeManagerRole,'__esModule',{'value':!![]});ChangeManagerRole['SetRoleRadixInvocation']=void 0x0;const RadixInvocation_1$2=RadixInvocation$1,RadixTransaction_1$2=RadixTransaction$1,utils_1$z=utils$1;class SetRoleRadixInvocation extends RadixInvocation_1$2['VoidRadixInvocation']{['newAccessRule'];constructor(_0x488213,_0x5e5b73,_0x10cbb8){super(_0x488213,_0x5e5b73),this['newAccessRule']=_0x10cbb8;}['appendTo'](_0x2c1173){return _0x2c1173['callRoleAssignmentMethod'](this['subject'],'set',(0, utils_1$z['makeSetRoleArg'])(this['name'],this['newAccessRule']));}['getDedicatedTransaction'](_0x32f45e){return new RadixTransaction_1$2['RadixTransaction'](_0x32f45e,[this]);}}ChangeManagerRole['SetRoleRadixInvocation']=SetRoleRadixInvocation;

var SetGlobalContractAddressInvocationMethod$1 = {};

Object['defineProperty'](SetGlobalContractAddressInvocationMethod$1,'__esModule',{'value':!![]});SetGlobalContractAddressInvocationMethod$1['SetGlobalContractAddressInvocationMethod']=void 0x0;const radix_engine_toolkit_1$6=_0x6a06b2,RadixInvocation_1$1=RadixInvocation$1,RadixTransaction_1$1=RadixTransaction$1;class SetGlobalContractAddressInvocationMethod extends RadixInvocation_1$1['VoidRadixInvocation']{['contractGlobalAddress'];constructor(_0x247c89,_0x3ef2b4){super(_0x247c89,'set_contract_global_address'),this['contractGlobalAddress']=_0x3ef2b4;}['getParams'](){return [(0, radix_engine_toolkit_1$6['address'])(this['contractGlobalAddress'])];}['getDedicatedTransaction'](_0x7fe7a0){return new RadixTransaction_1$1['RadixTransaction'](_0x7fe7a0,[this]);}}SetGlobalContractAddressInvocationMethod$1['SetGlobalContractAddressInvocationMethod']=SetGlobalContractAddressInvocationMethod;

Object['defineProperty'](ProxyRadixContractAdapter,'__esModule',{'value':!![]});ProxyRadixContractAdapter['ProxyFeedRadixContractAdapter']=void 0x0;const RadixContractAdapter_1=RadixContractAdapter$1,ChangeManagerRole_1=ChangeManagerRole,SetGlobalContractAddressInvocationMethod_1=SetGlobalContractAddressInvocationMethod$1;class ProxyFeedRadixContractAdapter extends RadixContractAdapter_1['RadixContractAdapter']{async['setContractGlobalAddress'](_0x23161e){await this['client']['call'](new SetGlobalContractAddressInvocationMethod_1['SetGlobalContractAddressInvocationMethod'](this['componentId'],_0x23161e));}async['changeManagerAccessRule'](_0x25db4c){await this['client']['call'](new ChangeManagerRole_1['SetRoleRadixInvocation'](this['componentId'],'proxy_man_auth',_0x25db4c));}}ProxyRadixContractAdapter['ProxyFeedRadixContractAdapter']=ProxyFeedRadixContractAdapter;

var ProxyRadixContractConnector$1 = {};

Object['defineProperty'](ProxyRadixContractConnector$1,'__esModule',{'value':!![]});ProxyRadixContractConnector$1['ProxyRadixContractConnector']=void 0x0;const RadixContractConnector_1=RadixContractConnector$1,ProxyRadixContractAdapter_1=ProxyRadixContractAdapter;class ProxyRadixContractConnector extends RadixContractConnector_1['RadixContractConnector']{async['getComponentId'](){return this['componentId'];}async['getAdapter'](){return new ProxyRadixContractAdapter_1['ProxyFeedRadixContractAdapter'](this['client'],await this['getComponentId']());}}ProxyRadixContractConnector$1['ProxyRadixContractConnector']=ProxyRadixContractConnector;

var ProxyRadixContractDeployer$1 = {};

var ProxyInstantiateRadixFunction$1 = {};

Object['defineProperty'](ProxyInstantiateRadixFunction$1,'__esModule',{'value':!![]});ProxyInstantiateRadixFunction$1['ProxyInstantiateRadixFunction']=void 0x0;const radix_engine_toolkit_1$5=_0x6a06b2,RadixInvocation_1=RadixInvocation$1,RadixTransaction_1=RadixTransaction$1,utils_1$y=utils$1;class ProxyInstantiateRadixFunction extends RadixInvocation_1['RadixFunction']{['multiSigAccessRule'];['globalContractAddress'];constructor(_0x35bfc7,_0xaffe0c,_0x12df8c){super(_0x35bfc7,'instantiate','Proxy'),this['multiSigAccessRule']=_0xaffe0c,this['globalContractAddress']=_0x12df8c;}['getParams'](){return [(0, utils_1$y['makeOwnerUpdatableRole'])(this['multiSigAccessRule']),this['multiSigAccessRule'],(0, utils_1$y['makeOption'])(radix_engine_toolkit_1$5['address'],this['globalContractAddress'])];}['getDedicatedTransaction'](_0x5f48f7){return new RadixTransaction_1['RadixTransaction'](_0x5f48f7,[this]);}}ProxyInstantiateRadixFunction$1['ProxyInstantiateRadixFunction']=ProxyInstantiateRadixFunction;

Object['defineProperty'](ProxyRadixContractDeployer$1,'__esModule',{'value':!![]});ProxyRadixContractDeployer$1['ProxyRadixContractDeployer']=void 0x0;const radix_engine_toolkit_1$4=_0x6a06b2,utils_1$x=utils$1,ProxyInstantiateRadixFunction_1=ProxyInstantiateRadixFunction$1,ProxyRadixContractConnector_1=ProxyRadixContractConnector$1;class ProxyRadixContractDeployer extends ProxyRadixContractConnector_1['ProxyRadixContractConnector']{['packageId'];['threshold'];['multisignaturePublicKeys'];['contractGlobalAddress'];['networkId'];constructor(_0x2c9347,_0x188a29,_0x306902,_0x4f33a8,_0x371218,_0x1b245e=radix_engine_toolkit_1$4['NetworkId']['Stokenet']){super(_0x2c9347),this['packageId']=_0x188a29,this['threshold']=_0x306902,this['multisignaturePublicKeys']=_0x4f33a8,this['contractGlobalAddress']=_0x371218,this['networkId']=_0x1b245e;}async['getComponentId'](){if(this['componentId'])return this['componentId'];return this['componentId']=await this['instantiate'](),this['componentId'];}async['instantiate'](){return await this['client']['call'](new ProxyInstantiateRadixFunction_1['ProxyInstantiateRadixFunction'](this['packageId'],await(0, utils_1$x['makeMultisigAccessRule'])(this['threshold'],this['multisignaturePublicKeys'],this['networkId']),this['contractGlobalAddress']));}}ProxyRadixContractDeployer$1['ProxyRadixContractDeployer']=ProxyRadixContractDeployer;

var RadixClientBuilder$1 = {};

var RadixApiClient$1 = {};

var RadixParser$1 = {};

var generated$1 = {};

var converter = {};

var generated = {};

Object['defineProperty'](generated,'__esModule',{'value':!![]});generated['SerializableManifestValueKind']=generated['SerializableExpression']=generated['SerializableCurveType']=generated['SerializableSerializationMode']=generated['SerializableInstructionsKind']=generated['SerializableOlympiaNetwork']=generated['SerializableEntityType']=void 0x0;var SerializableEntityType;(function(_0xdb48e4){_0xdb48e4['GlobalPackage']='GlobalPackage',_0xdb48e4['GlobalConsensusManager']='GlobalConsensusManager',_0xdb48e4['GlobalValidator']='GlobalValidator',_0xdb48e4['GlobalTransactionTracker']='GlobalTransactionTracker',_0xdb48e4['GlobalGenericComponent']='GlobalGenericComponent',_0xdb48e4['GlobalAccount']='GlobalAccount',_0xdb48e4['GlobalIdentity']='GlobalIdentity',_0xdb48e4['GlobalAccessController']='GlobalAccessController',_0xdb48e4['GlobalOneResourcePool']='GlobalOneResourcePool',_0xdb48e4['GlobalTwoResourcePool']='GlobalTwoResourcePool',_0xdb48e4['GlobalMultiResourcePool']='GlobalMultiResourcePool',_0xdb48e4['GlobalAccountLocker']='GlobalAccountLocker',_0xdb48e4['GlobalVirtualSecp256k1Account']='GlobalVirtualSecp256k1Account',_0xdb48e4['GlobalVirtualSecp256k1Identity']='GlobalVirtualSecp256k1Identity',_0xdb48e4['GlobalVirtualEd25519Account']='GlobalVirtualEd25519Account',_0xdb48e4['GlobalVirtualEd25519Identity']='GlobalVirtualEd25519Identity',_0xdb48e4['GlobalFungibleResourceManager']='GlobalFungibleResourceManager',_0xdb48e4['InternalFungibleVault']='InternalFungibleVault',_0xdb48e4['GlobalNonFungibleResourceManager']='GlobalNonFungibleResourceManager',_0xdb48e4['InternalNonFungibleVault']='InternalNonFungibleVault',_0xdb48e4['InternalGenericComponent']='InternalGenericComponent',_0xdb48e4['InternalKeyValueStore']='InternalKeyValueStore';}(SerializableEntityType||(generated['SerializableEntityType']=SerializableEntityType={})));var SerializableOlympiaNetwork;(function(_0x4cd2cb){_0x4cd2cb['Mainnet']='Mainnet',_0x4cd2cb['Stokenet']='Stokenet',_0x4cd2cb['Releasenet']='Releasenet',_0x4cd2cb['RCNet']='RCNet',_0x4cd2cb['Milestonenet']='Milestonenet',_0x4cd2cb['Devopsnet']='Devopsnet',_0x4cd2cb['Sandpitnet']='Sandpitnet',_0x4cd2cb['Localnet']='Localnet';}(SerializableOlympiaNetwork||(generated['SerializableOlympiaNetwork']=SerializableOlympiaNetwork={})));var SerializableInstructionsKind;(function(_0x4b5383){_0x4b5383['String']='String',_0x4b5383['Parsed']='Parsed';}(SerializableInstructionsKind||(generated['SerializableInstructionsKind']=SerializableInstructionsKind={})));var SerializableSerializationMode;(function(_0x12cc1e){_0x12cc1e['Programmatic']='Programmatic',_0x12cc1e['Model']='Model',_0x12cc1e['Natural']='Natural';}(SerializableSerializationMode||(generated['SerializableSerializationMode']=SerializableSerializationMode={})));var SerializableCurveType;(function(_0x3485fc){_0x3485fc['Ed25519']='Ed25519',_0x3485fc['Secp256k1']='Secp256k1';}(SerializableCurveType||(generated['SerializableCurveType']=SerializableCurveType={})));var SerializableExpression;(function(_0x3a9b18){_0x3a9b18['EntireWorktop']='EntireWorktop',_0x3a9b18['EntireAuthZone']='EntireAuthZone';}(SerializableExpression||(generated['SerializableExpression']=SerializableExpression={})));var SerializableManifestValueKind;(function(_0x2370a7){_0x2370a7['Bool']='Bool',_0x2370a7['I8']='I8',_0x2370a7['I16']='I16',_0x2370a7['I32']='I32',_0x2370a7['I64']='I64',_0x2370a7['I128']='I128',_0x2370a7['U8']='U8',_0x2370a7['U16']='U16',_0x2370a7['U32']='U32',_0x2370a7['U64']='U64',_0x2370a7['U128']='U128',_0x2370a7['String']='String',_0x2370a7['Enum']='Enum',_0x2370a7['Array']='Array',_0x2370a7['Tuple']='Tuple',_0x2370a7['Map']='Map',_0x2370a7['Address']='Address',_0x2370a7['Bucket']='Bucket',_0x2370a7['Proof']='Proof',_0x2370a7['Expression']='Expression',_0x2370a7['Blob']='Blob',_0x2370a7['Decimal']='Decimal',_0x2370a7['PreciseDecimal']='PreciseDecimal',_0x2370a7['NonFungibleLocalId']='NonFungibleLocalId',_0x2370a7['AddressReservation']='AddressReservation';}(SerializableManifestValueKind||(generated['SerializableManifestValueKind']=SerializableManifestValueKind={})));

Object['defineProperty'](converter,'__esModule',{'value':!![]});converter['GeneratedConverter']=void 0x0;const radix_engine_toolkit_1$3=_0x6a06b2,generated_1$1=generated;class GeneratedConverter{static ['PublicKey']=class{static['toGenerated'](value){return {'kind':value['curve'],'value':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['publicKey'])};}static['fromGenerated'](value){switch(value['kind']){case'Secp256k1':return new radix_engine_toolkit_1$3['PublicKey']['Secp256k1'](radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']));case'Ed25519':return new radix_engine_toolkit_1$3['PublicKey']['Ed25519'](radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']));}}};static ['Signature']=class{static['toGenerated'](value){return {'kind':value['curve'],'value':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['signature'])};}static['fromGenerated'](value){switch(value['kind']){case'Secp256k1':return new radix_engine_toolkit_1$3['Signature']['Secp256k1'](radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']));case'Ed25519':return new radix_engine_toolkit_1$3['Signature']['Ed25519'](radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']));}}};static ['SignatureWithPublicKey']=class{static['toGenerated'](value){switch(value['curve']){case'Ed25519':return {'kind':'Ed25519','value':{'public_key':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['publicKey']),'signature':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['signature'])}};case'Secp256k1':return {'kind':'Secp256k1','value':{'signature':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['signature'])}};}}static['fromGenerated'](value){switch(value['kind']){case'Secp256k1':return new radix_engine_toolkit_1$3['SignatureWithPublicKey']['Secp256k1'](radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']['signature']));case'Ed25519':return new radix_engine_toolkit_1$3['SignatureWithPublicKey']['Ed25519'](radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']['signature']),radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']['public_key']));}}};static ['OlympiaNetwork']=class{static['toGenerated'](value){return generated_1$1['SerializableOlympiaNetwork'][radix_engine_toolkit_1$3['OlympiaNetwork'][value]];}static['fromGenerated'](value){return radix_engine_toolkit_1$3['OlympiaNetwork'][generated_1$1['SerializableOlympiaNetwork'][value]];}};static ['SerializationMode']=class{static['toGenerated'](value){return generated_1$1['SerializableSerializationMode'][radix_engine_toolkit_1$3['SerializationMode'][value]];}static['fromGenerated'](value){return radix_engine_toolkit_1$3['SerializationMode'][generated_1$1['SerializableSerializationMode'][value]];}};static ['ManifestSborStringRepresentation']=class{static['toGenerated'](value){switch(value){case radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['ManifestString']:return {'kind':'ManifestString'};case radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['ProgrammaticJson']:return {'kind':'Json','value':generated_1$1['SerializableSerializationMode']['Programmatic']};case radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['NaturalJson']:return {'kind':'Json','value':generated_1$1['SerializableSerializationMode']['Natural']};case radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['ModelJson']:return {'kind':'Json','value':generated_1$1['SerializableSerializationMode']['Model']};}}static['fromGenerated'](value){switch(value['kind']){case'ManifestString':return radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['ManifestString'];case'Json':switch(value['value']){case generated_1$1['SerializableSerializationMode']['Programmatic']:return radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['ProgrammaticJson'];case generated_1$1['SerializableSerializationMode']['Natural']:return radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['NaturalJson'];case generated_1$1['SerializableSerializationMode']['Model']:return radix_engine_toolkit_1$3['ManifestSborStringRepresentation']['ModelJson'];}}}};static ['ManifestValueKind']=class{static['toGenerated'](value){return generated_1$1['SerializableManifestValueKind'][radix_engine_toolkit_1$3['ValueKind'][value]];}static['fromGenerated'](value){return radix_engine_toolkit_1$3['ValueKind'][generated_1$1['SerializableManifestValueKind'][value]];}};static ['Expression']=class{static['toGenerated'](value){return generated_1$1['SerializableExpression'][radix_engine_toolkit_1$3['Expression'][value]];}static['fromGenerated'](value){return radix_engine_toolkit_1$3['Expression'][generated_1$1['SerializableExpression'][value]];}};static ['ManifestAddress']=class{static['toGenerated'](value){switch(value['kind']){case'Named':return {'kind':value['kind'],'value':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['value'])};case'Static':return {'kind':value['kind'],'value':value['value']};}}static['fromGenerated'](value){switch(value['kind']){case'Named':return {'kind':value['kind'],'value':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value'])};case'Static':return {'kind':value['kind'],'value':value['value']};}}};static ['ManifestValue']=class{static['toGenerated'](value){switch(value['kind']){case radix_engine_toolkit_1$3['ValueKind']['Bool']:return {'kind':value['kind'],'value':{'value':value['value']}};case radix_engine_toolkit_1$3['ValueKind']['I8']:case radix_engine_toolkit_1$3['ValueKind']['I16']:case radix_engine_toolkit_1$3['ValueKind']['I32']:case radix_engine_toolkit_1$3['ValueKind']['U8']:case radix_engine_toolkit_1$3['ValueKind']['U16']:case radix_engine_toolkit_1$3['ValueKind']['U32']:case radix_engine_toolkit_1$3['ValueKind']['Bucket']:case radix_engine_toolkit_1$3['ValueKind']['Proof']:case radix_engine_toolkit_1$3['ValueKind']['AddressReservation']:return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':{'value':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['value'])}};case radix_engine_toolkit_1$3['ValueKind']['I64']:case radix_engine_toolkit_1$3['ValueKind']['I128']:case radix_engine_toolkit_1$3['ValueKind']['U64']:case radix_engine_toolkit_1$3['ValueKind']['U128']:return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':{'value':radix_engine_toolkit_1$3['Convert']['BigInt']['toString'](value['value'])}};case radix_engine_toolkit_1$3['ValueKind']['Blob']:return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':{'value':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['value'])}};case radix_engine_toolkit_1$3['ValueKind']['String']:case radix_engine_toolkit_1$3['ValueKind']['NonFungibleLocalId']:return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':{'value':value['value']}};case radix_engine_toolkit_1$3['ValueKind']['Decimal']:case radix_engine_toolkit_1$3['ValueKind']['PreciseDecimal']:return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':{'value':radix_engine_toolkit_1$3['Convert']['Decimal']['toString'](value['value'])}};case radix_engine_toolkit_1$3['ValueKind']['Enum']:return {'kind':value['kind'],'value':{'discriminator':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['discriminator']),'fields':value['fields']['map'](GeneratedConverter['ManifestValue']['toGenerated'])}};case radix_engine_toolkit_1$3['ValueKind']['Array']:return {'kind':value['kind'],'value':{'element_value_kind':generated_1$1['SerializableManifestValueKind'][value['elementValueKind']],'elements':value['elements']['map'](GeneratedConverter['ManifestValue']['toGenerated'])}};case radix_engine_toolkit_1$3['ValueKind']['Tuple']:return {'kind':value['kind'],'value':{'fields':value['fields']['map'](GeneratedConverter['ManifestValue']['toGenerated'])}};case radix_engine_toolkit_1$3['ValueKind']['Map']:return {'kind':value['kind'],'value':{'key_value_kind':generated_1$1['SerializableManifestValueKind'][value['keyValueKind']],'value_value_kind':generated_1$1['SerializableManifestValueKind'][value['valueValueKind']],'entries':value['entries']['map'](mapEntry=>{return {'key':GeneratedConverter['ManifestValue']['toGenerated'](mapEntry['key']),'value':GeneratedConverter['ManifestValue']['toGenerated'](mapEntry['value'])};})}};case radix_engine_toolkit_1$3['ValueKind']['Address']:return {'kind':value['kind'],'value':{'value':GeneratedConverter['ManifestAddress']['toGenerated'](value['value'])}};case radix_engine_toolkit_1$3['ValueKind']['Expression']:return {'kind':value['kind'],'value':{'value':GeneratedConverter['Expression']['toGenerated'](value['value'])}};}}static['fromGenerated'](value){switch(value['kind']){case'Bool':return {'kind':radix_engine_toolkit_1$3['ValueKind']['Bool'],'value':value['value']['value']};case'I8':case'I16':case'I32':case'U8':case'U16':case'U32':case'Bucket':case'Proof':case'AddressReservation':return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['value'])};case'I64':case'I128':case'U64':case'U128':return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':radix_engine_toolkit_1$3['Convert']['String']['toBigInt'](value['value']['value'])};case'Blob':return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']['value'])};case'String':case'NonFungibleLocalId':return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':value['value']['value']};case'Decimal':case'PreciseDecimal':return {'kind':radix_engine_toolkit_1$3['ValueKind'][value['kind']],'value':radix_engine_toolkit_1$3['Convert']['String']['toDecimal'](value['value']['value'])};case'Enum':return {'kind':radix_engine_toolkit_1$3['ValueKind']['Enum'],'discriminator':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['discriminator']),'fields':value['value']['fields']['map'](GeneratedConverter['ManifestValue']['fromGenerated'])};case'Array':return {'kind':radix_engine_toolkit_1$3['ValueKind']['Array'],'elementValueKind':radix_engine_toolkit_1$3['ValueKind'][value['value']['element_value_kind']],'elements':value['value']['elements']['map'](GeneratedConverter['ManifestValue']['fromGenerated'])};case'Tuple':return {'kind':radix_engine_toolkit_1$3['ValueKind']['Tuple'],'fields':value['value']['fields']['map'](GeneratedConverter['ManifestValue']['fromGenerated'])};case'Map':return {'kind':radix_engine_toolkit_1$3['ValueKind']['Map'],'keyValueKind':radix_engine_toolkit_1$3['ValueKind'][value['value']['key_value_kind']],'valueValueKind':radix_engine_toolkit_1$3['ValueKind'][value['value']['value_value_kind']],'entries':value['value']['entries']['map'](entry=>{return {'key':GeneratedConverter['ManifestValue']['fromGenerated'](entry['key']),'value':GeneratedConverter['ManifestValue']['fromGenerated'](entry['value'])};})};case'Address':return {'kind':radix_engine_toolkit_1$3['ValueKind']['Address'],'value':GeneratedConverter['ManifestAddress']['fromGenerated'](value['value']['value'])};case'Expression':return {'kind':radix_engine_toolkit_1$3['ValueKind']['Expression'],'value':GeneratedConverter['Expression']['fromGenerated'](value['value']['value'])};}}};static ['Instruction']=class{static['toGenerated'](value){switch(value['kind']){case'TakeAllFromWorktop':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress']}};case'TakeFromWorktop':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress'],'amount':radix_engine_toolkit_1$3['Convert']['Decimal']['toString'](value['amount'])}};case'TakeNonFungiblesFromWorktop':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress'],'ids':value['ids']}};case'ReturnToWorktop':return {'kind':value['kind'],'value':{'bucket_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['bucketId'])}};case'AssertWorktopContainsAny':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress']}};case'AssertWorktopContains':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress'],'amount':radix_engine_toolkit_1$3['Convert']['Decimal']['toString'](value['amount'])}};case'AssertWorktopContainsNonFungibles':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress'],'ids':value['ids']}};case'PopFromAuthZone':return {'kind':value['kind']};case'PushToAuthZone':return {'kind':value['kind'],'value':{'proof_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['proofId'])}};case'DropNamedProofs':case'DropAuthZoneProofs':case'DropAuthZoneRegularProofs':case'DropAuthZoneSignatureProofs':return {'kind':value['kind']};case'CreateProofFromAuthZoneOfAmount':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress'],'amount':radix_engine_toolkit_1$3['Convert']['Decimal']['toString'](value['amount'])}};case'CreateProofFromAuthZoneOfNonFungibles':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress'],'ids':value['ids']}};case'CreateProofFromAuthZoneOfAll':return {'kind':value['kind'],'value':{'resource_address':value['resourceAddress']}};case'CreateProofFromBucketOfAmount':return {'kind':value['kind'],'value':{'bucket_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['bucketId']),'amount':radix_engine_toolkit_1$3['Convert']['Decimal']['toString'](value['amount'])}};case'CreateProofFromBucketOfNonFungibles':return {'kind':value['kind'],'value':{'bucket_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['bucketId']),'ids':value['ids']}};case'CreateProofFromBucketOfAll':return {'kind':value['kind'],'value':{'bucket_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['bucketId'])}};case'BurnResource':return {'kind':value['kind'],'value':{'bucket_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['bucketId'])}};case'CloneProof':return {'kind':value['kind'],'value':{'proof_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['proofId'])}};case'DropProof':return {'kind':value['kind'],'value':{'proof_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['proofId'])}};case'CallFunction':return {'kind':value['kind'],'value':{'package_address':GeneratedConverter['ManifestAddress']['toGenerated'](value['packageAddress']),'blueprint_name':value['blueprintName'],'function_name':value['functionName'],'args':GeneratedConverter['ManifestValue']['toGenerated'](value['args'])}};case'CallMethod':case'CallRoyaltyMethod':case'CallMetadataMethod':case'CallRoleAssignmentMethod':return {'kind':value['kind'],'value':{'address':GeneratedConverter['ManifestAddress']['toGenerated'](value['address']),'method_name':value['methodName'],'args':GeneratedConverter['ManifestValue']['toGenerated'](value['args'])}};case'CallDirectVaultMethod':return {'kind':value['kind'],'value':{'address':value['address'],'method_name':value['methodName'],'args':GeneratedConverter['ManifestValue']['toGenerated'](value['args'])}};case'DropAllProofs':return {'kind':value['kind']};case'AllocateGlobalAddress':return {'kind':value['kind'],'value':{'package_address':value['packageAddress'],'blueprint_name':value['blueprintName']}};}}static['fromGenerated'](value){switch(value['kind']){case'TakeAllFromWorktop':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address']};case'TakeFromWorktop':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address'],'amount':radix_engine_toolkit_1$3['Convert']['String']['toDecimal'](value['value']['amount'])};case'TakeNonFungiblesFromWorktop':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address'],'ids':value['value']['ids']};case'ReturnToWorktop':return {'kind':value['kind'],'bucketId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['bucket_id'])};case'AssertWorktopContainsAny':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address']};case'AssertWorktopContains':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address'],'amount':radix_engine_toolkit_1$3['Convert']['String']['toDecimal'](value['value']['amount'])};case'AssertWorktopContainsNonFungibles':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address'],'ids':value['value']['ids']};case'PopFromAuthZone':return {'kind':value['kind']};case'PushToAuthZone':return {'kind':value['kind'],'proofId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['proof_id'])};case'DropNamedProofs':case'DropAuthZoneProofs':case'DropAuthZoneRegularProofs':case'DropAuthZoneSignatureProofs':return {'kind':value['kind']};case'CreateProofFromAuthZoneOfAmount':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address'],'amount':radix_engine_toolkit_1$3['Convert']['String']['toDecimal'](value['value']['amount'])};case'CreateProofFromAuthZoneOfNonFungibles':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address'],'ids':value['value']['ids']};case'CreateProofFromAuthZoneOfAll':return {'kind':value['kind'],'resourceAddress':value['value']['resource_address']};case'CreateProofFromBucketOfAmount':return {'kind':value['kind'],'bucketId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['bucket_id']),'amount':radix_engine_toolkit_1$3['Convert']['String']['toDecimal'](value['value']['amount'])};case'CreateProofFromBucketOfNonFungibles':return {'kind':value['kind'],'bucketId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['bucket_id']),'ids':value['value']['ids']};case'CreateProofFromBucketOfAll':return {'kind':value['kind'],'bucketId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['bucket_id'])};case'BurnResource':return {'kind':value['kind'],'bucketId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['bucket_id'])};case'CloneProof':return {'kind':value['kind'],'proofId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['proof_id'])};case'DropProof':return {'kind':value['kind'],'proofId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['value']['proof_id'])};case'CallFunction':return {'kind':value['kind'],'packageAddress':GeneratedConverter['ManifestAddress']['fromGenerated'](value['value']['package_address']),'blueprintName':value['value']['blueprint_name'],'functionName':value['value']['function_name'],'args':GeneratedConverter['ManifestValue']['fromGenerated'](value['value']['args'])};case'CallMethod':case'CallRoyaltyMethod':case'CallMetadataMethod':case'CallRoleAssignmentMethod':return {'kind':value['kind'],'address':GeneratedConverter['ManifestAddress']['fromGenerated'](value['value']['address']),'methodName':value['value']['method_name'],'args':GeneratedConverter['ManifestValue']['fromGenerated'](value['value']['args'])};case'CallDirectVaultMethod':return {'kind':value['kind'],'address':value['value']['address'],'methodName':value['value']['method_name'],'args':GeneratedConverter['ManifestValue']['fromGenerated'](value['value']['args'])};case'DropAllProofs':return {'kind':value['kind']};case'AllocateGlobalAddress':return {'kind':value['kind'],'packageAddress':value['value']['package_address'],'blueprintName':value['value']['blueprint_name']};}}};static ['Instructions']=class{static['toGenerated'](value){switch(value['kind']){case'String':return value;case'Parsed':return {'kind':'Parsed','value':value['value']['map'](GeneratedConverter['Instruction']['toGenerated'])};}}static['fromGenerated'](value){switch(value['kind']){case'String':return value;case'Parsed':return {'kind':'Parsed','value':value['value']['map'](GeneratedConverter['Instruction']['fromGenerated'])};}}};static ['TransactionManifest']=class{static['toGenerated'](value){return {'instructions':GeneratedConverter['Instructions']['toGenerated'](value['instructions']),'blobs':value['blobs']['map'](radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'])};}static['fromGenerated'](value){return {'instructions':GeneratedConverter['Instructions']['fromGenerated'](value['instructions']),'blobs':value['blobs']['map'](radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'])};}};static ['TransactionHeader']=class{static['toGenerated'](value){return {'network_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['networkId']),'start_epoch_inclusive':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['startEpochInclusive']),'end_epoch_exclusive':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['endEpochExclusive']),'nonce':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['nonce']),'notary_is_signatory':value['notaryIsSignatory'],'notary_public_key':GeneratedConverter['PublicKey']['toGenerated'](value['notaryPublicKey']),'tip_percentage':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['tipPercentage'])};}static['fromGenerated'](value){return {'networkId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['network_id']),'startEpochInclusive':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['start_epoch_inclusive']),'endEpochExclusive':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['end_epoch_exclusive']),'nonce':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['nonce']),'notaryPublicKey':GeneratedConverter['PublicKey']['fromGenerated'](value['notary_public_key']),'notaryIsSignatory':value['notary_is_signatory'],'tipPercentage':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['tip_percentage'])};}};static ['TransactionHash']=class{static['toGenerated'](value){return {'hash':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['hash']),'id':value['id']};}static['fromGenerated'](value){return {'hash':radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['hash']),'id':value['id']};}};static ['Intent']=class{static['toGenerated'](value){return {'header':GeneratedConverter['TransactionHeader']['toGenerated'](value['header']),'manifest':GeneratedConverter['TransactionManifest']['toGenerated'](value['manifest']),'message':GeneratedConverter['Message']['toGenerated'](value['message'])};}static['fromGenerated'](value){return {'manifest':GeneratedConverter['TransactionManifest']['fromGenerated'](value['manifest']),'header':GeneratedConverter['TransactionHeader']['fromGenerated'](value['header']),'message':GeneratedConverter['Message']['fromGenerated'](value['message'])};}};static ['SignedIntent']=class{static['toGenerated'](value){return {'intent':GeneratedConverter['Intent']['toGenerated'](value['intent']),'intent_signatures':value['intentSignatures']['map'](GeneratedConverter['SignatureWithPublicKey']['toGenerated'])};}static['fromGenerated'](value){return {'intent':GeneratedConverter['Intent']['fromGenerated'](value['intent']),'intentSignatures':value['intent_signatures']['map'](GeneratedConverter['SignatureWithPublicKey']['fromGenerated'])};}};static ['NotarizedTransaction']=class{static['toGenerated'](value){return {'signed_intent':GeneratedConverter['SignedIntent']['toGenerated'](value['signedIntent']),'notary_signature':GeneratedConverter['Signature']['toGenerated'](value['notarySignature'])};}static['fromGenerated'](value){return {'signedIntent':GeneratedConverter['SignedIntent']['fromGenerated'](value['signed_intent']),'notarySignature':GeneratedConverter['Signature']['fromGenerated'](value['notary_signature'])};}};static ['EntityType']=class{static['toGenerated'](value){return generated_1$1['SerializableEntityType'][radix_engine_toolkit_1$3['EntityType'][value]];}static['fromGenerated'](value){return radix_engine_toolkit_1$3['EntityType'][generated_1$1['SerializableEntityType'][value]];}};static ['MessageValidationConfig']=class{static['toGenerated'](value){return {'max_plaintext_message_length':radix_engine_toolkit_1$3['Convert']['BigInt']['toString'](value['maxPlaintextMessageLength']),'max_encrypted_message_length':radix_engine_toolkit_1$3['Convert']['BigInt']['toString'](value['maxEncryptedMessageLength']),'max_mime_type_length':radix_engine_toolkit_1$3['Convert']['BigInt']['toString'](value['maxMimeTypeLength']),'max_decryptors':radix_engine_toolkit_1$3['Convert']['BigInt']['toString'](value['maxDecryptors'])};}static['fromGenerated'](value){return {'maxPlaintextMessageLength':radix_engine_toolkit_1$3['Convert']['String']['toBigInt'](value['max_plaintext_message_length']),'maxEncryptedMessageLength':radix_engine_toolkit_1$3['Convert']['String']['toBigInt'](value['max_encrypted_message_length']),'maxMimeTypeLength':radix_engine_toolkit_1$3['Convert']['String']['toBigInt'](value['max_mime_type_length']),'maxDecryptors':radix_engine_toolkit_1$3['Convert']['String']['toBigInt'](value['max_decryptors'])};}};static ['ValidationConfig']=class{static['toGenerated'](value){return {'network_id':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['networkId']),'max_notarized_payload_size':radix_engine_toolkit_1$3['Convert']['BigInt']['toString'](value['maxNotarizedPayloadSize']),'min_tip_percentage':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['minTipPercentage']),'max_tip_percentage':radix_engine_toolkit_1$3['Convert']['Number']['toString'](value['maxTipPercentage']),'max_epoch_range':radix_engine_toolkit_1$3['Convert']['BigInt']['toString'](value['maxEpochRange']),'message_validation':GeneratedConverter['MessageValidationConfig']['toGenerated'](value['messageValidation'])};}static['fromGenerated'](value){return {'networkId':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['network_id']),'maxNotarizedPayloadSize':radix_engine_toolkit_1$3['Convert']['String']['toBigInt'](value['max_notarized_payload_size']),'minTipPercentage':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['min_tip_percentage']),'maxTipPercentage':radix_engine_toolkit_1$3['Convert']['String']['toNumber'](value['max_tip_percentage']),'maxEpochRange':radix_engine_toolkit_1$3['Convert']['String']['toBigInt'](value['max_epoch_range']),'messageValidation':GeneratedConverter['MessageValidationConfig']['fromGenerated'](value['message_validation'])};}};static ['Message']=class{static['toGenerated'](value){switch(value['kind']){case'None':return {'kind':value['kind']};case'PlainText':return {'kind':value['kind'],'value':GeneratedConverter['PlainTextMessage']['toGenerated'](value['value'])};case'Encrypted':return {'kind':value['kind'],'value':GeneratedConverter['EncryptedMessage']['toGenerated'](value['value'])};}}static['fromGenerated'](value){switch(value['kind']){case'None':return {'kind':value['kind']};case'PlainText':return {'kind':value['kind'],'value':GeneratedConverter['PlainTextMessage']['fromGenerated'](value['value'])};case'Encrypted':return {'kind':value['kind'],'value':GeneratedConverter['EncryptedMessage']['fromGenerated'](value['value'])};}}};static ['PlainTextMessage']=class{static['toGenerated'](value){return {'mime_type':value['mimeType'],'message':GeneratedConverter['MessageContent']['toGenerated'](value['message'])};}static['fromGenerated'](value){return {'mimeType':value['mime_type'],'message':GeneratedConverter['MessageContent']['fromGenerated'](value['message'])};}};static ['MessageContent']=class{static['toGenerated'](value){switch(value['kind']){case'Bytes':return {'kind':value['kind'],'value':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['value'])};case'String':return {'kind':value['kind'],'value':value['value']};}}static['fromGenerated'](value){switch(value['kind']){case'Bytes':return {'kind':value['kind'],'value':radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value'])};case'String':return {'kind':value['kind'],'value':value['value']};}}};static ['EncryptedMessage']=class{static['toGenerated'](value){return {'encrypted':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['encrypted']),'decryptors_by_curve':recordMap(value['decryptorsByCurve'],(key,value)=>{return [key,GeneratedConverter['DecryptorsByCurve']['toGenerated'](value)];})};}static['fromGenerated'](value){return {'encrypted':radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['encrypted']),'decryptorsByCurve':recordMap(value['decryptors_by_curve'],(key,value)=>{return [key,GeneratedConverter['DecryptorsByCurve']['fromGenerated'](value)];})};}};static ['DecryptorsByCurve']=class{static['toGenerated'](value){return {'kind':value['kind'],'value':{'dh_ephemeral_public_key':radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value['value']['dhEphemeralPublicKey']),'decryptors':value['value']['decryptors']['reduce']((obj,[key,value])=>{return obj[radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](key)]=radix_engine_toolkit_1$3['Convert']['Uint8Array']['toHexString'](value),obj;},{})}};}static['fromGenerated'](value){return {'kind':value['kind'],'value':{'dhEphemeralPublicKey':radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value['value']['dh_ephemeral_public_key']),'decryptors':Object['entries'](value['value']['decryptors'])['map'](([key,value])=>[radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](key),radix_engine_toolkit_1$3['Convert']['HexString']['toUint8Array'](value)])}};}};}converter['GeneratedConverter']=GeneratedConverter;const recordMap=(_0x291164,_0x4575c7)=>{const _0x5b0ab8={};for(const _0x163584 in _0x291164){const _0x1106cf=_0x291164[_0x163584],[_0x44c43f,_0x242396]=_0x4575c7(_0x163584,_0x1106cf);_0x5b0ab8[_0x44c43f]=_0x242396;}return _0x5b0ab8;};

(function(_0x3144b3){var _0x6a6d8e=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x25f124,_0x3a078f,_0x5ede05,_0xbddb92){if(_0xbddb92===undefined)_0xbddb92=_0x5ede05;var _0x2f133a=Object['getOwnPropertyDescriptor'](_0x3a078f,_0x5ede05);(!_0x2f133a||('get'in _0x2f133a?!_0x3a078f['__esModule']:_0x2f133a['writable']||_0x2f133a['configurable']))&&(_0x2f133a={'enumerable':!![],'get':function(){return _0x3a078f[_0x5ede05];}}),Object['defineProperty'](_0x25f124,_0xbddb92,_0x2f133a);}:function(_0x59a64e,_0x5aa28e,_0x35aa16,_0x250a8f){if(_0x250a8f===undefined)_0x250a8f=_0x35aa16;_0x59a64e[_0x250a8f]=_0x5aa28e[_0x35aa16];}),_0x5465b1=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x26a4dd,_0xd5e35){for(var _0x4a2bfe in _0x26a4dd)if(_0x4a2bfe!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0xd5e35,_0x4a2bfe))_0x6a6d8e(_0xd5e35,_0x26a4dd,_0x4a2bfe);};Object['defineProperty'](_0x3144b3,'__esModule',{'value':!![]}),_0x5465b1(converter,_0x3144b3),_0x5465b1(generated,_0x3144b3);}(generated$1));getDefaultExportFromCjs(generated$1);

Object['defineProperty'](RadixParser$1,'__esModule',{'value':!![]});RadixParser$1['RadixParser']=void 0x0;const radix_engine_toolkit_1$2=_0x6a06b2,ethers_1$2=_0x3e9376,generated_1=generated$1,U256_VALUE_SIZE=0x20;class RadixParser{static async['decodeSborHex'](_0x4ceda2,_0x3c6133=radix_engine_toolkit_1$2['NetworkId']['Stokenet']){const _0x567a53=Buffer['from'](_0x4ceda2,'hex'),_0x2d6bbe=await radix_engine_toolkit_1$2['RadixEngineToolkit']['ScryptoSbor']['decodeToString'](_0x567a53,_0x3c6133,radix_engine_toolkit_1$2['SerializationMode']['Model']);return RadixParser['makeManifestValue'](JSON['parse'](_0x2d6bbe));}static['convertValue'](_0x46ac96){return RadixParser['extractValue'](this['makeManifestValue'](_0x46ac96));}static['makeManifestValue'](_0x205f8e){return generated_1['GeneratedConverter']['ManifestValue']['fromGenerated'](RadixParser['makeSerializableManifestValue'](_0x205f8e));}static['extractValue'](_0x27c902,_0x69be21=![]){if(_0x27c902===undefined)return undefined;if(_0x27c902['kind']==radix_engine_toolkit_1$2['ValueKind']['Blob']&&_0x27c902['value']['length']===U256_VALUE_SIZE){const _0x5df8c7=ethers_1$2['BigNumber']['from'](_0x27c902['value']);return _0x69be21?_0x5df8c7['toHexString']():_0x5df8c7;}let _0x54320e=_0x27c902['value']??_0x27c902['fields']?.['map'](_0xbf43f5=>RadixParser['extractValue'](_0xbf43f5,_0x69be21));_0x27c902['kind']===radix_engine_toolkit_1$2['ValueKind']['Tuple']&&_0x27c902['fields']['length']===0x1&&Array['isArray'](_0x54320e)&&(_0x54320e=_0x54320e[0x0]);if(_0x54320e!==undefined)return _0x54320e;const _0x1aa69d=_0x27c902;if(_0x1aa69d['elements']){if(_0x1aa69d['kind']==='Array'&&_0x1aa69d['elementValueKind']==='U64'&&_0x1aa69d['elements']['length']===0x4){const _0x479ce2=RadixParser['parseU256Digits'](_0x1aa69d);return _0x69be21?_0x479ce2['toHexString']():_0x479ce2;}else return _0x1aa69d['elements']['map'](_0x91dc6f=>RadixParser['extractValue'](_0x91dc6f));}const _0x20274b=_0x27c902,_0x18cb53=_0x20274b['entries']['map'](({key:_0x18548b,value:_0x13ef73})=>{return [RadixParser['extractValue'](_0x18548b,!![]),RadixParser['extractValue'](_0x13ef73)];});return Object['fromEntries'](_0x18cb53);}static['makeSerializableManifestValue'](_0x216248){if(_0x216248['kind']=='Enum'&&'type_name'in _0x216248&&'variant_name'in _0x216248&&_0x216248['type_name']==='Option')return _0x216248['variant_name']==='Some'&&_0x216248['fields']?.['length']?RadixParser['makeSerializableManifestValue'](_0x216248['fields'][0x0]):{'kind':undefined,'value':undefined};if(_0x216248['kind']==='Array'&&!_0x216248['elements']){if(Array['isArray'](_0x216248['value']))return {'kind':'Array','value':{'element_value_kind':'U64','elements':_0x216248['value']['map'](_0x4cbfb4=>RadixParser['makeSerializableManifestValue']({'kind':'U64','value':_0x4cbfb4}))}};return RadixParser['makeSerializableManifestValue'](_0x216248['value']);}if(_0x216248['hex']&&_0x216248['element_kind']==='U8'&&(!_0x216248['kind']||_0x216248['kind']==='Bytes'))return {'kind':'Blob','value':{'value':_0x216248['hex']}};if(_0x216248['kind']==='Tuple'&&Array['isArray'](_0x216248['value']))return {'kind':'Tuple','value':{'fields':_0x216248['value']['map'](RadixParser['makeSerializableManifestValue'])}};if(!['string','undefined']['includes'](typeof _0x216248['value']))return _0x216248;return {'kind':RadixParser['normalizeKind'](_0x216248['kind']),'value':{..._0x216248,'value':_0x216248['kind']==='Bytes'?_0x216248['hex']:_0x216248['value'],'element_value_kind':RadixParser['normalizeKind'](_0x216248['element_kind']),'key_value_kind':RadixParser['normalizeKind'](_0x216248['key_kind']),'value_value_kind':RadixParser['normalizeKind'](_0x216248['value_kind']),'fields':_0x216248['fields']?.['map'](RadixParser['makeSerializableManifestValue']),'elements':_0x216248['elements']?.['map'](_0x284879=>RadixParser['makeSerializableManifestValue']({'kind':RadixParser['normalizeKind'](_0x216248['element_kind']),'value':_0x284879})),'entries':_0x216248['entries']?.['map'](({key:_0x247ebd,value:_0x7ed362})=>({'key':RadixParser['makeSerializableManifestValue'](_0x247ebd),'value':RadixParser['makeSerializableManifestValue'](_0x7ed362)}))}};}static['normalizeKind'](_0x1d6d3c){return ['Bytes','Reference']['includes'](_0x1d6d3c??'')?'String':_0x1d6d3c;}static['parseU256Digits'](_0xdbf1d3){return _0xdbf1d3['elements']['reduce']((_0x167f03,_0x1b1884,_0x206b6d)=>{const _0x361d2e=ethers_1$2['BigNumber']['from'](0x2)['pow'](_0x206b6d*0x40),_0x1b97d8=ethers_1$2['BigNumber']['from'](_0x1b1884['value'])['mul'](_0x361d2e);return _0x167f03['add'](_0x1b97d8);},ethers_1$2['BigNumber']['from'](0x0));}}RadixParser$1['RadixParser']=RadixParser;

Object['defineProperty'](RadixApiClient$1,'__esModule',{'value':!![]});RadixApiClient$1['RadixApiClient']=void 0x0;const babylon_gateway_api_sdk_1=_0x36c312,radix_engine_toolkit_1$1=_0x6a06b2,utils_1$w=requireSrc$3(),RadixParser_1=RadixParser$1,APPLICATION_NAME='RedStone\x20Radix\x20Connector';class RadixApiClient{['networkId'];['apiClient'];constructor(_0x22df3c=radix_engine_toolkit_1$1['NetworkId']['Stokenet'],_0x2d6834){this['networkId']=_0x22df3c,this['apiClient']=babylon_gateway_api_sdk_1['GatewayApiClient']['initialize']({'applicationName':APPLICATION_NAME,'networkId':_0x22df3c,'basePath':_0x2d6834});}async['getTransactionDetails'](_0x428ded){const _0x45fe22=await this['apiClient']['transaction']['innerClient']['transactionCommittedDetails']({'transactionCommittedDetailsRequest':{'intent_hash':_0x428ded,'opt_ins':{'receipt_output':!![]}}});if(_0x45fe22['transaction']['transaction_status']!=='CommittedSuccess')throw new Error(_0x45fe22['transaction']['error_message']??_0x45fe22['transaction']['transaction_status']);const _0x4aaa4d=_0x45fe22['transaction']['receipt']?.['output'];return {'values':(await Promise['all'](_0x4aaa4d['map'](_0x898180=>RadixParser_1['RadixParser']['decodeSborHex'](_0x898180['hex'],this['networkId']))))['map'](_0x576654=>RadixParser_1['RadixParser']['extractValue'](_0x576654)),'feePaid':_0x45fe22['transaction']['fee_paid']};}async['submitTransaction'](_0x5b345d){const _0x365cf9=radix_engine_toolkit_1$1['Convert']['Uint8Array']['toHexString'](_0x5b345d);return (await this['apiClient']['transaction']['innerClient']['transactionSubmit']({'transactionSubmitRequest':{'notarized_transaction_hex':_0x365cf9}}))['duplicate'];}async['getTransactionStatus'](_0x28f01a){const _0x1a9d02=await this['apiClient']['transaction']['innerClient']['transactionStatus']({'transactionStatusRequest':{'intent_hash':_0x28f01a}});return {'status':_0x1a9d02['intent_status'],'errorMessage':_0x1a9d02['error_message']};}async['getCurrentEpochNumber'](){return (await this['getCurrentLedgerState']())['epoch'];}async['getCurrentStateVersion'](){return (await this['getCurrentLedgerState']())['state_version'];}async['getCurrentLedgerState'](){return (await this['apiClient']['status']['getCurrent']())['ledger_state'];}async['getFungibleBalance'](_0x37bdc4,_0x56898e,_0x55f58a){const _0x3b57d2=await this['waitForLedgerState'](_0x55f58a),_0x27552f=await this['apiClient']['state']['innerClient']['entityFungibleResourceVaultPage']({'stateEntityFungibleResourceVaultsPageRequest':{'address':_0x37bdc4,'resource_address':_0x56898e,'at_ledger_state':_0x3b57d2}});switch(_0x27552f['items']['length']){case 0x0:return '0';case 0x1:return _0x27552f['items'][0x0]['amount'];default:throw new Error('Unexpected\x20item\x20count:\x20'+_0x27552f['items']['length']+'\x20for\x20'+_0x56898e);}}async['getNonFungibleBalance'](_0x45547b,_0x35e0af,_0x266394){const _0x112fc9=await this['waitForLedgerState'](_0x266394),_0x291cb8=await this['apiClient']['state']['innerClient']['entityNonFungibleResourceVaultPage']({'stateEntityNonFungibleResourceVaultsPageRequest':{'address':_0x45547b,'resource_address':_0x35e0af,'at_ledger_state':_0x112fc9}});switch(_0x291cb8['items']['length']){case 0x0:return 0x0;case 0x1:return _0x291cb8['items'][0x0]['total_count'];default:throw new Error('Unexpected\x20item\x20count:\x20'+_0x291cb8['items']['length']+'\x20for\x20'+_0x35e0af);}}async['getTransactions'](_0x39cfad,_0x105fcd,_0x2e0379,_0x4547c8,_0x96be2c){utils_1$w['RedstoneCommon']['assertWithLog'](_0x105fcd>=_0x39cfad,'atStateVersion\x20must\x20be\x20>=\x20fromStateVersion');const _0x1dad1e=await this['waitForLedgerState'](_0x105fcd);return await this['apiClient']['stream']['innerClient']['streamTransactions']({'streamTransactionsRequest':{'cursor':_0x4547c8,'from_ledger_state':{'state_version':_0x39cfad},'at_ledger_state':_0x1dad1e,'affected_global_entities_filter':_0x2e0379,'opt_ins':{'raw_hex':!![],'affected_global_entities':!![],'receipt_costing_parameters':!![],'receipt_fee_summary':!![]},'transaction_status_filter':_0x96be2c}});}async['getStateFields'](_0x51786a,_0x420044,_0x25b3ba){const _0x5db3cf=await this['waitForLedgerState'](_0x25b3ba,'getStateFields\x20'+_0x420044?.['toString']()+'\x20in\x20'+_0x25b3ba),_0x380bbe=await this['apiClient']['state']['getEntityDetailsVaultAggregated'](_0x51786a,undefined,_0x5db3cf),_0x2cbe9f=_0x380bbe['details']['state'],_0x4ae4a1=_0x2cbe9f['fields']['filter'](_0x415021=>_0x420044?.['includes'](_0x415021['field_name'])!==![]),_0x50aee2=_0x4ae4a1['map'](_0x37f0c1=>[_0x37f0c1['field_name'],RadixParser_1['RadixParser']['convertValue'](_0x37f0c1)]);return Object['fromEntries'](_0x50aee2);}async['waitForLedgerState'](_0x47c903,_0xf6d87d){await utils_1$w['RedstoneCommon']['waitForBlockNumber'](()=>this['getCurrentStateVersion'](),_0x47c903,_0xf6d87d);if(!_0x47c903)return undefined;return {'state_version':_0x47c903};}}RadixApiClient$1['RadixApiClient']=RadixApiClient;

var RadixSigner$1 = {};

Object['defineProperty'](RadixSigner$1,'__esModule',{'value':!![]});RadixSigner$1['RadixSigner']=void 0x0;const radix_engine_toolkit_1=_0x6a06b2,utils_1$v=requireSrc$3();class RadixSigner{['notarySigner'];['additionalSigners'];constructor(_0x329f50,_0x1d24c2){this['notarySigner']=RadixSigner['makeSigner'](_0x329f50),this['additionalSigners']=_0x1d24c2?.['map'](RadixSigner['makeSigner']);}async['asyncSign'](_0x5c3026){for(const _0x18c67b of this['additionalSigners']??[]){_0x5c3026=_0x5c3026['sign'](_0x18c67b);}return await _0x5c3026['notarize'](this['notarySigner']);}static['makeSigner'](_0x1b397a){switch(_0x1b397a['scheme']){case'ed25519':return new radix_engine_toolkit_1['PrivateKey']['Ed25519'](_0x1b397a['value']);case'secp256k1':return new radix_engine_toolkit_1['PrivateKey']['Secp256k1'](_0x1b397a['value']);default:return utils_1$v['RedstoneCommon']['throwUnsupportedParamError'](_0x1b397a['scheme']);}}['publicKeyHex'](){return Promise['resolve'](this['notarySigner']['publicKeyHex']());}['publicKey'](){return Promise['resolve'](this['notarySigner']['publicKey']());}['getNotarySigner'](){return this['notarySigner'];}}RadixSigner$1['RadixSigner']=RadixSigner;

Object['defineProperty'](RadixClientBuilder$1,'__esModule',{'value':!![]});RadixClientBuilder$1['RadixClientBuilder']=void 0x0;const utils_1$u=requireSrc$3(),RadixApiClient_1=RadixApiClient$1,RadixClient_1=RadixClient$1,RadixClientConfig_1=RadixClientConfig,RadixSigner_1=RadixSigner$1;class RadixClientBuilder extends utils_1$u['MultiExecutor']['ClientBuilder']{['chainType']=utils_1$u['ChainTypeEnum']['Enum']['radix'];['privateKey'];['clientConfig']=RadixClientConfig_1['DEFAULT_RADIX_CLIENT_CONFIG'];['withPrivateKey'](_0xfa02ee){return this['privateKey']=_0xfa02ee,this;}['withClientConfig'](_0x31f7cb){return this['clientConfig']=_0x31f7cb,this;}['build'](){if(!this['chainId'])throw new Error('NetworkId\x20not\x20set');!this['urls']['length']&&this['urls']['push'](undefined);const _0x530342=this['makeMultiExecutor'](_0x217647=>new RadixApiClient_1['RadixApiClient'](this['chainId'],_0x217647),{'getCurrentStateVersion':RadixClientBuilder['blockNumberConsensusExecutor'],'getCurrentEpochNumber':RadixClientBuilder['blockNumberConsensusExecutor'],'submitTransaction':utils_1$u['MultiExecutor']['ExecutionMode']['RACE'],'getTransactionStatus':utils_1$u['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getFungibleBalance':utils_1$u['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getNonFungibleBalance':utils_1$u['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getStateFields':utils_1$u['MultiExecutor']['ExecutionMode']['AGREEMENT']}),_0x3dc18a=this['privateKey']?new RadixSigner_1['RadixSigner'](this['privateKey']):undefined;return new RadixClient_1['RadixClient'](_0x530342,this['chainId'],_0x3dc18a,this['clientConfig']);}}RadixClientBuilder$1['RadixClientBuilder']=RadixClientBuilder;

var types$2 = {};

Object['defineProperty'](types$2,'__esModule',{'value':!![]});

(function(_0x289919){var _0x3c30fc=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x360bae,_0x56136d,_0x407393,_0x34c15c){if(_0x34c15c===undefined)_0x34c15c=_0x407393;var _0x456674=Object['getOwnPropertyDescriptor'](_0x56136d,_0x407393);(!_0x456674||('get'in _0x456674?!_0x56136d['__esModule']:_0x456674['writable']||_0x456674['configurable']))&&(_0x456674={'enumerable':!![],'get':function(){return _0x56136d[_0x407393];}}),Object['defineProperty'](_0x360bae,_0x34c15c,_0x456674);}:function(_0x33ecca,_0x338309,_0x3b2de9,_0x51bcca){if(_0x51bcca===undefined)_0x51bcca=_0x3b2de9;_0x33ecca[_0x51bcca]=_0x338309[_0x3b2de9];}),_0x5616e1=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x32f696,_0x3267d3){for(var _0x2d1188 in _0x32f696)if(_0x2d1188!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x3267d3,_0x2d1188))_0x3c30fc(_0x3267d3,_0x32f696,_0x2d1188);};Object['defineProperty'](_0x289919,'__esModule',{'value':!![]}),_0x5616e1(PriceAdapterRadixContractAdapter$1,_0x289919),_0x5616e1(PriceAdapterRadixContractConnector$1,_0x289919),_0x5616e1(PriceAdapterRadixContractDeployer$1,_0x289919),_0x5616e1(PriceFeedRadixContractAdapter$1,_0x289919),_0x5616e1(PriceFeedRadixContractConnector$1,_0x289919),_0x5616e1(PriceFeedRadixContractDeployer$1,_0x289919),_0x5616e1(ProxyRadixContractAdapter,_0x289919),_0x5616e1(ProxyRadixContractConnector$1,_0x289919),_0x5616e1(ProxyRadixContractDeployer$1,_0x289919),_0x5616e1(RadixClient$1,_0x289919),_0x5616e1(RadixClientBuilder$1,_0x289919),_0x5616e1(RadixClientConfig,_0x289919),_0x5616e1(RadixContractAdapter$1,_0x289919),_0x5616e1(RadixContractConnector$1,_0x289919),_0x5616e1(RadixSigner$1,_0x289919),_0x5616e1(types$2,_0x289919);}(src$5));getDefaultExportFromCjs(src$5);

var src$2 = {};

var AnchorReadonlyProvider$1 = {};

var getRecentBlockhash$1 = {};

var SolanaClient = {};

var SolanaConnectionBuilder$1 = {};

var networkIds$1 = {};

(function(_0x3bc09c){var _0x308978=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x24141a){return _0x24141a&&_0x24141a['__esModule']?_0x24141a:{'default':_0x24141a};};Object['defineProperty'](_0x3bc09c,'__esModule',{'value':!![]}),_0x3bc09c['CLUSTER_NAMES']=void 0x0,_0x3bc09c['getSolanaCluster']=_0x3ffd9a,_0x3bc09c['getSolanaChainId']=_0x4742d8;const _0x2d3961=_0x308978(_0x62d7dc);_0x3bc09c['CLUSTER_NAMES']={0x1:'mainnet-beta',0x2:'testnet',0x3:'devnet'};function _0x3ffd9a(_0x3d4d55){return _0x3bc09c['CLUSTER_NAMES'][_0x3d4d55];}function _0x4742d8(_0x35d818){return Number(_0x2d3961['default']['findKey'](_0x3bc09c['CLUSTER_NAMES'],_0x5e902c=>_0x5e902c===_0x35d818));}}(networkIds$1));getDefaultExportFromCjs(networkIds$1);

var utils = {};

Object['defineProperty'](utils,'__esModule',{'value':!![]});utils['makePriceSeed']=utils['makeFeedIdBytes']=void 0x0;utils['hexToU8Array']=hexToU8Array;utils['makeKeypair']=makeKeypair;utils['connectToCluster']=connectToCluster;utils['readCluster']=readCluster;const utils_1$t=requireSrc$3(),web3_js_1$5=_0x2fa597,utils_2$4=_0x4eca3f,zod_1$4=_0x28081a;function hexToU8Array(_0x4fd8d0){return Uint8Array['from'](Buffer['from'](_0x4fd8d0,'hex'));}const makeFeedIdBytes$1=_0x4d7f62=>{return Buffer['from'](_0x4d7f62['padEnd'](0x20,'\x00'));};utils['makeFeedIdBytes']=makeFeedIdBytes$1;const makePriceSeed=()=>{return Buffer['from']('price'['padEnd'](0x20,'\x00'));};utils['makePriceSeed']=makePriceSeed;const BYTE_LENGTHS={'PRIVATE_KEY':0x20,'SECRET_KEY':0x40};function makeKeypair(_0x4cae64){const _0xb86aa0=(0, utils_2$4['arrayify'])(_0x4cae64,{'allowMissingPrefix':!![]}),_0x20ec10=Buffer['from'](_0xb86aa0),_0x992f6b=_0x20ec10['length']===BYTE_LENGTHS['PRIVATE_KEY']||_0x20ec10['length']===BYTE_LENGTHS['SECRET_KEY'];if(!_0x992f6b)throw new Error('Invalid\x20private\x20key\x20length:\x20'+_0x20ec10['length']+'\x20bytes.\x20Expected\x20'+BYTE_LENGTHS['PRIVATE_KEY']+'\x20or\x20'+BYTE_LENGTHS['SECRET_KEY']+'\x20bytes.');return _0x20ec10['length']===BYTE_LENGTHS['PRIVATE_KEY']?web3_js_1$5['Keypair']['fromSeed'](_0x20ec10):web3_js_1$5['Keypair']['fromSecretKey'](_0x20ec10);}function connectToCluster(_0x5728ab){return new web3_js_1$5['Connection']((0, web3_js_1$5['clusterApiUrl'])(_0x5728ab??readCluster()),'confirmed');}function readCluster(){return utils_1$t['RedstoneCommon']['getFromEnv']('CLUSTER',zod_1$4['z']['enum'](['devnet','testnet','mainnet-beta']));}

Object['defineProperty'](SolanaConnectionBuilder$1,'__esModule',{'value':!![]});SolanaConnectionBuilder$1['SolanaConnectionBuilder']=void 0x0;const utils_1$s=requireSrc$3(),web3_js_1$4=_0x2fa597,network_ids_1$2=networkIds$1,utils_2$3=utils;class SolanaConnectionBuilder extends utils_1$s['MultiExecutor']['ClientBuilder']{['chainType']=utils_1$s['ChainTypeEnum']['Enum']['solana'];['withCluster'](_0x5c8a65){return this['withChainId']((0, network_ids_1$2['getSolanaChainId'])(_0x5c8a65));}['build'](){if(!this['chainId'])throw new Error('Network\x20not\x20set');if(!this['urls']['length'])return (0, utils_2$3['connectToCluster'])((0, network_ids_1$2['getSolanaCluster'])(this['chainId']));return this['makeMultiExecutor'](_0x4715aa=>new web3_js_1$4['Connection'](_0x4715aa,{'commitment':'confirmed','disableRetryOnRateLimit':!![]}),{'getBlockHeight':SolanaConnectionBuilder['blockNumberConsensusExecutor'],'getSlot':SolanaConnectionBuilder['blockNumberConsensusExecutor'],'getLatestBlockhash':utils_1$s['MultiExecutor']['ExecutionMode']['AGREEMENT']});}}SolanaConnectionBuilder$1['SolanaConnectionBuilder']=SolanaConnectionBuilder;

(function(_0x43164d){Object['defineProperty'](_0x43164d,'__esModule',{'value':!![]}),_0x43164d['SolanaClient']=_0x43164d['SOLANA_SLOT_TIME_INTERVAL_MS']=void 0x0;const _0x42b1c5=requireSrc$3(),_0x21845b=SolanaConnectionBuilder$1;_0x43164d['SOLANA_SLOT_TIME_INTERVAL_MS']=0x190;class _0x3e9dc7{['connection'];constructor(_0x5ab2a8){this['connection']=_0x5ab2a8;}static['createMultiClient'](_0xdec067){return _0x42b1c5['MultiExecutor']['createForSubInstances'](_0xdec067,_0x37ccf2=>new _0x3e9dc7(_0x37ccf2),{'getSlot':_0x21845b['SolanaConnectionBuilder']['blockNumberConsensusExecutor'],'viewMethod':_0x42b1c5['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getBlockhash':_0x42b1c5['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getSignatureStatus':_0x42b1c5['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getAccountInfo':_0x42b1c5['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getMultipleAccountsInfo':_0x42b1c5['MultiExecutor']['ExecutionMode']['MULTI_AGREEMENT'],'sendTransaction':_0x42b1c5['MultiExecutor']['ExecutionMode']['RACE']},{..._0x42b1c5['MultiExecutor']['DEFAULT_CONFIG'],'singleExecutionTimeoutMs':_0x42b1c5['MultiExecutor']['SINGLE_EXECUTION_TIMEOUT_MS'],'allExecutionsTimeoutMs':_0x42b1c5['MultiExecutor']['ALL_EXECUTIONS_TIMEOUT_MS'],'multiAgreementShouldResolveUnagreedToUndefined':!![]});}async['getAccountInfo'](_0x16b771,_0x3252ec,_0x3d2d66,_0x221f02){const _0x5db06c=await this['waitForSlot'](_0x3d2d66,_0x221f02),_0x4b69ab=await this['connection']['getAccountInfo'](_0x16b771,_0x5db06c);if(!_0x4b69ab)throw new Error('Could\x20not\x20fetch\x20data\x20for\x20account\x20'+_0x16b771['toBase58']());return _0x3252ec(_0x4b69ab);}async['getMultipleAccountsInfo'](_0xdc3da6,_0x4de81d,_0x30e967,_0x1ba338){const _0x1cef90=await this['waitForSlot'](_0x1ba338,_0x30e967),_0x4bb91c=await this['connection']['getMultipleAccountsInfo'](_0xdc3da6,{..._0x1cef90});return _0x4bb91c['map'](_0x2e7461=>{if(!_0x2e7461)return undefined;return _0x4de81d(_0x2e7461);});}async['getBlockhash'](_0x22e3ab,_0x39b803){if(!_0x22e3ab)return (await this['connection']['getLatestBlockhash']())['blockhash'];await this['waitForSlot'](_0x22e3ab,_0x39b803);const _0x5dc7b9=await this['connection']['getBlock'](_0x22e3ab,{'maxSupportedTransactionVersion':undefined,'rewards':![],'transactionDetails':'none'});if(!_0x5dc7b9)throw new Error('Could\x20not\x20fetch\x20data\x20for\x20block\x20'+_0x22e3ab);return _0x5dc7b9['blockhash'];}async['viewMethod'](_0x5f51a7,_0x4ed3f9,_0x2d5198){const _0x15d5da=await this['waitForSlot'](_0x4ed3f9,_0x2d5198);return await _0x5f51a7['view'](_0x15d5da);}async['getSignatureStatus'](_0x5c76dc){const _0x415ebd=await this['connection']['getSignatureStatus'](_0x5c76dc);return {'isFinished':['confirmed','finalized']['includes'](_0x415ebd['value']?.['confirmationStatus']??''),'error':_0x415ebd['value']?.['err']??undefined};}async['getSlot'](){return await this['connection']['getSlot']();}async['getRecentPrioritizationFees'](_0x58050e){return await this['connection']['getRecentPrioritizationFees'](_0x58050e);}async['sendTransaction'](_0x45d567,_0x513641){return await this['connection']['sendTransaction'](_0x45d567,_0x513641);}async['waitForSlot'](_0x4fa364,_0x2cf52d){if(!_0x4fa364)return undefined;return await _0x42b1c5['RedstoneCommon']['waitForBlockNumber'](()=>this['connection']['getSlot'](),_0x4fa364,(_0x2cf52d??'')+'\x20in\x20slot\x20'+_0x4fa364,_0x43164d['SOLANA_SLOT_TIME_INTERVAL_MS'],Math['floor'](_0x42b1c5['MultiExecutor']['SINGLE_EXECUTION_TIMEOUT_MS']/_0x43164d['SOLANA_SLOT_TIME_INTERVAL_MS'])),{'minContextSlot':_0x4fa364};}}_0x43164d['SolanaClient']=_0x3e9dc7;}(SolanaClient));getDefaultExportFromCjs(SolanaClient);

Object['defineProperty'](getRecentBlockhash$1,'__esModule',{'value':!![]});getRecentBlockhash$1['getRecentBlockhash']=getRecentBlockhash;const utils_1$r=requireSrc$3(),SolanaClient_1$2=SolanaClient,RETRY_CONFIG$1={'maxRetries':0x6,'waitBetweenMs':SolanaClient_1$2['SOLANA_SLOT_TIME_INTERVAL_MS'],'backOff':{'backOffBase':1.5}},logger$1=(0, utils_1$r['loggerFactory'])('getRecentBlockhash');async function getRecentBlockhash(_0x5903ad,_0x481598){return await utils_1$r['RedstoneCommon']['retry']({'fn':()=>getBlockhash(_0x5903ad,_0x481598),'fnName':'getRecentBlockhash','logger':_0x1a503f=>logger$1['info'](_0x1a503f),...RETRY_CONFIG$1})();}async function getBlockhash(_0x4bcc91,_0x42416c){const _0x54183e='getRecentBlockhash\x20('+_0x42416c+')';try{return await _0x4bcc91['getBlockhash'](undefined,_0x54183e);}catch(_0x47038f){logger$1['info'](_0x54183e+'\x20'+utils_1$r['RedstoneCommon']['stringifyError'](_0x47038f));const _0x15ddd6=await _0x4bcc91['getSlot']();return await _0x4bcc91['getBlockhash'](_0x15ddd6,_0x54183e);}}

Object['defineProperty'](AnchorReadonlyProvider$1,'__esModule',{'value':!![]});AnchorReadonlyProvider$1['AnchorReadonlyProvider']=void 0x0;const utils_1$q=requireSrc$3(),web3_js_1$3=_0x2fa597,get_recent_blockhash_1$1=getRecentBlockhash$1;class AnchorReadonlyProvider{['connection'];['client'];['publicKey'];constructor(_0x35d9b0,_0x4568ee,_0x3ae697){this['connection']=_0x35d9b0,this['client']=_0x4568ee,this['publicKey']=_0x3ae697;}async['simulate'](_0x3c6c6,_0x1c397c,_0x4ea61e,_0x1f9f85){const _0x393199=await this['getVersionedTransaction'](_0x3c6c6),_0x255bf5={'sigVerify':![],'replaceRecentBlockhash':!![],'commitment':_0x4ea61e},_0x7c5fbc=await this['connection']['simulateTransaction'](_0x393199,_0x255bf5);if(_0x7c5fbc['value']['err'])throw new Error('Simulation\x20failed:\x20'+utils_1$q['RedstoneCommon']['stringifyError'](_0x7c5fbc['value']['err']));return _0x7c5fbc['value'];}async['getVersionedTransaction'](_0x2808e2){if('version'in _0x2808e2)return _0x2808e2;_0x2808e2['recentBlockhash']=await(0, get_recent_blockhash_1$1['getRecentBlockhash'])(this['client'],'getVersionedTransaction'),_0x2808e2['feePayer']=await this['findSomeAccountWithSol']();const _0x3ec08e=web3_js_1$3['TransactionMessage']['decompile'](_0x2808e2['compileMessage']())['instructions'],_0x31a21c=new web3_js_1$3['TransactionMessage']({'payerKey':_0x2808e2['feePayer'],'recentBlockhash':_0x2808e2['recentBlockhash'],'instructions':_0x3ec08e})['compileToV0Message']();return new web3_js_1$3['VersionedTransaction'](_0x31a21c);}async['findSomeAccountWithSol'](){if(this['publicKey'])return this['publicKey'];const _0x816e8a=await this['connection']['getSlotLeader']();return new web3_js_1$3['PublicKey'](_0x816e8a);}}AnchorReadonlyProvider$1['AnchorReadonlyProvider']=AnchorReadonlyProvider;

var SolanaTxDeliveryMan$1 = {};

var AggressiveSolanaGasOracle$1 = {};

Object['defineProperty'](AggressiveSolanaGasOracle$1,'__esModule',{'value':!![]});AggressiveSolanaGasOracle$1['AggressiveSolanaGasOracle']=void 0x0;const utils_1$p=requireSrc$3();class AggressiveSolanaGasOracle{['config'];['logger']=(0, utils_1$p['loggerFactory'])('solana-gas-oracle');constructor(_0x4f1e55){this['config']=_0x4f1e55;}['getPriorityFeePerUnit'](_0x6eb4dc){const _0x414e5a=Math['ceil'](this['config']['basePricePerComputeUnit']*this['config']['gasMultiplier']**_0x6eb4dc),_0x3a62e2=Math['min'](_0x414e5a,this['config']['maxPricePerComputeUnit']);return this['logger']['info']('Setting\x20transaction\x20cost\x20per\x20unit\x20to\x20'+_0x3a62e2+'\x20(max\x20price\x20per\x20compute\x20unit:\x20'+this['config']['maxPricePerComputeUnit']+')'),Promise['resolve'](_0x3a62e2);}}AggressiveSolanaGasOracle$1['AggressiveSolanaGasOracle']=AggressiveSolanaGasOracle;

var RegularSolanaGasOracle$1 = {};

var __importDefault$5=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x4d95bb){return _0x4d95bb&&_0x4d95bb['__esModule']?_0x4d95bb:{'default':_0x4d95bb};};Object['defineProperty'](RegularSolanaGasOracle$1,'__esModule',{'value':!![]});RegularSolanaGasOracle$1['RegularSolanaGasOracle']=void 0x0;const utils_1$o=requireSrc$3(),lodash_1$2=__importDefault$5(_0x62d7dc),BASE_PRIORITY_FEE_PERCENTILE=0x50,PRIORITY_FEE_PERCENTILE_STEP=0x5,MIN_DEFAULT_PRIORITY_FEE=0x1;class RegularSolanaGasOracle{['client'];['config'];['logger']=(0, utils_1$o['loggerFactory'])('solana-gas-oracle');constructor(_0x19e4be,_0x159e1e){this['client']=_0x19e4be,this['config']=_0x159e1e;}async['getPriorityFeePerUnit'](_0x5c0060,_0x2674d4){const _0x29a421=await this['client']['getRecentPrioritizationFees']({'lockedWritableAccounts':_0x2674d4}),_0x393544=_0x29a421['map'](_0x13916a=>_0x13916a['prioritizationFee']),_0x423275=BASE_PRIORITY_FEE_PERCENTILE+_0x5c0060*PRIORITY_FEE_PERCENTILE_STEP;this['logPercentiles'](_0x393544,_0x423275);const _0x4cb8c5=calculatePercentile(_0x393544,_0x423275),_0x2526cd=this['config']['gasMultiplier']**_0x5c0060,_0x1f0d12=_0x4cb8c5||MIN_DEFAULT_PRIORITY_FEE,_0x8eb4de=Math['min'](Math['ceil'](_0x1f0d12*_0x2526cd),this['config']['maxPricePerComputeUnit']);return this['logger']['info'](['Priority\x20fee\x20per\x20unit:\x20'+_0x8eb4de,_0x423275+'th\x20Priority\x20Fee\x20Percentile:\x20'+_0x4cb8c5,_0x5c0060?'iterationGasMultiplier\x20in\x20iteration\x20#'+_0x5c0060+':\x20'+_0x2526cd:'']['filter'](_0x2ac8b6=>_0x2ac8b6!=='')['join'](';\x20')),_0x8eb4de;}['logPercentiles'](_0x1cf434,_0xc57e7b){const _0x47c94d=0x1,_0x1fbb2e=BASE_PRIORITY_FEE_PERCENTILE,_0x17d9e4=Array['from']({'length':0x1+Math['ceil']((0x64-_0x1fbb2e)/_0x47c94d)},(_0x3898d0,_0x2dce08)=>[_0x1fbb2e+_0x2dce08*_0x47c94d,calculatePercentile(_0x1cf434,_0x1fbb2e+_0x2dce08*_0x47c94d)]);this['logger']['log']('Current\x20prioritization\x20fee\x20percentiles:',{'percentileForUse':_0xc57e7b,'percentiles':Object['fromEntries'](_0x17d9e4)});}}RegularSolanaGasOracle$1['RegularSolanaGasOracle']=RegularSolanaGasOracle;function calculatePercentile(_0x18a76d,_0x310e46){if(_0x18a76d['length']===0x0)return undefined;const _0x1eaacf=lodash_1$2['default']['sortBy'](_0x18a76d),_0xd806d0=Math['ceil'](Math['min'](_0x310e46,0x64)/0x64*_0x18a76d['length'])-0x1;return _0x1eaacf[_0xd806d0];}

var SolanaRustSdkErrorHandler = {};

Object['defineProperty'](SolanaRustSdkErrorHandler,'__esModule',{'value':!![]});SolanaRustSdkErrorHandler['SolanaRustSdkErrroHandler']=SolanaRustSdkErrorHandler['SkippableRustSdkError']=void 0x0;const utils_1$n=requireSrc$3(),zod_1$3=_0x28081a,ConfirmationErrorScheme=zod_1$3['z']['object']({'InstructionError':zod_1$3['z']['tuple']([zod_1$3['z']['number'](),zod_1$3['z']['object']({'Custom':zod_1$3['z']['number']()})])});var SkippableRustSdkError;(function(_0x4d40de){_0x4d40de[_0x4d40de['TimestampTooOld']=0x3e8]='TimestampTooOld',_0x4d40de[_0x4d40de['TimestampTooFuture']=0x41a]='TimestampTooFuture',_0x4d40de[_0x4d40de['DataTimestampMustBeGreaterThanBefore']=0x44d]='DataTimestampMustBeGreaterThanBefore',_0x4d40de[_0x4d40de['CurrentTimestampMustBeGreaterThanLatestUpdateTimestamp']=0x44e]='CurrentTimestampMustBeGreaterThanLatestUpdateTimestamp';}(SkippableRustSdkError||(SolanaRustSdkErrorHandler['SkippableRustSdkError']=SkippableRustSdkError={})));class SolanaRustSdkErrroHandler{static ['logger']=(0, utils_1$n['loggerFactory'])('solana-rust-sdk-error-handler');static['canSkipError'](_0x543c2a){const _0x2678b4=ConfirmationErrorScheme['safeParse'](_0x543c2a);if(!_0x2678b4['success'])return ![];const _0x10b0ec=_0x2678b4['data']['InstructionError'][0x1]['Custom'],_0x40e47c=SkippableRustSdkError[_0x10b0ec];if(_0x40e47c)return SolanaRustSdkErrroHandler['logger']['info']('Transaction\x20error\x20should\x20be\x20skipped:\x20'+_0x40e47c),!![];return ![];}}SolanaRustSdkErrorHandler['SolanaRustSdkErrroHandler']=SolanaRustSdkErrroHandler;

Object['defineProperty'](SolanaTxDeliveryMan$1,'__esModule',{'value':!![]});SolanaTxDeliveryMan$1['SolanaTxDeliveryMan']=void 0x0;const utils_1$m=requireSrc$3(),web3_js_1$2=_0x2fa597,AggressiveSolanaGasOracle_1=AggressiveSolanaGasOracle$1,RegularSolanaGasOracle_1=RegularSolanaGasOracle$1,SolanaRustSdkErrorHandler_1=SolanaRustSdkErrorHandler,SolanaClient_1$1=SolanaClient,get_recent_blockhash_1=getRecentBlockhash$1;class SolanaTxDeliveryMan{['client'];['config'];['keypair'];['logger']=(0, utils_1$m['loggerFactory'])('solana-tx-delivery-man');['gasOracle'];constructor(_0x46d0cc,_0x375995,_0x46feb3){this['client']=_0x46d0cc,this['config']=_0x375995,this['keypair']=_0x46feb3,this['gasOracle']=_0x375995['useAggressiveGasOracle']?new AggressiveSolanaGasOracle_1['AggressiveSolanaGasOracle'](_0x375995):new RegularSolanaGasOracle_1['RegularSolanaGasOracle'](_0x46d0cc,_0x375995);}['getPublicKey'](){return this['keypair']['publicKey'];}async['sendTransactions'](_0x50be2a,_0x163642){return await this['sendTransactionsWithRetry'](_0x50be2a,_0x163642);}async['sendTransactionsWithRetry'](_0x31036b,_0xa49c42,_0x63f82b=0x0,_0x2d9232=[]){if(_0x63f82b>=this['config']['maxTxAttempts'])throw new Error('Max\x20attempts\x20reached:\x20'+this['config']['maxTxAttempts']+'.\x20'+utils_1$m['RedstoneCommon']['stringifyError'](new AggregateError(_0x2d9232)));this['logger']['info']('Sending\x20transaction'+utils_1$m['RedstoneCommon']['getS'](_0x31036b['length'])+'\x20for\x20['+_0x31036b['toString']()+']'+(_0x63f82b?';\x20Attempt\x20#'+(_0x63f82b+0x1)+'/'+this['config']['maxTxAttempts']:''));const _0x5b9877=[],_0x53e80f=[],_0x359c22=async(_0x34680c,_0x2077aa)=>{try{const _0xaefb86=await this['sendAndConfirm'](_0x34680c,_0x2077aa,_0x63f82b);_0x53e80f['push'](_0xaefb86);}catch(_0xfb9816){_0x2d9232['push'](_0xfb9816),_0x5b9877['push'](_0x34680c),this['logger']['error']('Failed\x20transaction\x20for\x20'+_0x34680c+',\x20'+utils_1$m['RedstoneCommon']['stringifyError'](_0xfb9816));}},_0x117ecd=await _0xa49c42(_0x31036b),_0x204f67=_0x117ecd['map'](({id:_0x99cf7,instruction:_0x533b7e})=>_0x359c22(_0x99cf7,_0x533b7e));await Promise['allSettled'](_0x204f67);if(_0x5b9877['length']!==0x0){const _0x34de54=await this['sendTransactionsWithRetry'](_0x5b9877,_0xa49c42,_0x63f82b+0x1,_0x2d9232);_0x53e80f['push'](..._0x34de54);}return _0x53e80f;}async['wrapWithGas'](_0x25c3df,_0x12a861=0x0){const _0x1701f8=this['config']['maxComputeUnits'],_0x2e30d1=_0x25c3df['keys']['filter'](_0x4e459b=>_0x4e459b['isWritable'])['map'](_0x47671c=>_0x47671c['pubkey']),_0x3a93cf=await this['gasOracle']['getPriorityFeePerUnit'](_0x12a861,[this['keypair']['publicKey'],..._0x2e30d1]),_0x39039d=web3_js_1$2['ComputeBudgetProgram']['setComputeUnitLimit']({'units':_0x1701f8}),_0xa55437=web3_js_1$2['ComputeBudgetProgram']['setComputeUnitPrice']({'microLamports':_0x3a93cf}),_0x3c5166=[_0x39039d,_0xa55437,_0x25c3df];this['logger']['debug']('Setting\x20transaction\x20compute\x20units\x20to\x20'+_0x1701f8);_0x3a93cf&&this['logger']['info']('Additional\x20cost\x20of\x20transaction:\x20'+_0x1701f8*_0x3a93cf+'\x20microLamports');const _0x206cb4=await(0, get_recent_blockhash_1['getRecentBlockhash'])(this['client'],'wrapWithGas');return new web3_js_1$2['TransactionMessage']({'payerKey':this['keypair']['publicKey'],'recentBlockhash':_0x206cb4,'instructions':_0x3c5166});}async['sendAndConfirm'](_0x221ff5,_0x3ab04c,_0x43b21f=0x0){const _0x518bee=await this['wrapWithGas'](_0x3ab04c,_0x43b21f),_0xd0285b=new web3_js_1$2['VersionedTransaction'](_0x518bee['compileToV0Message']());_0xd0285b['sign']([this['keypair']]);const _0x30031d=await this['client']['sendTransaction'](_0xd0285b,{'skipPreflight':!![]});return await this['waitForTransaction'](_0x30031d,_0x221ff5),_0x30031d;}async['waitForTransaction'](_0x1162ad,_0xcb3be7){await utils_1$m['RedstoneCommon']['waitForSuccess'](async()=>{const _0x52e810=await this['client']['getSignatureStatus'](_0x1162ad);if(_0x52e810['error']){if(SolanaRustSdkErrorHandler_1['SolanaRustSdkErrroHandler']['canSkipError'](_0x52e810['error']))return !![];throw new Error(utils_1$m['RedstoneCommon']['stringify'](_0x52e810['error']));}return _0x52e810['isFinished'];},Math['floor'](this['config']['expectedTxDeliveryTimeMs']/SolanaClient_1$1['SOLANA_SLOT_TIME_INTERVAL_MS']),'Could\x20not\x20confirm\x20transaction\x20'+_0x1162ad+'\x20for\x20'+_0xcb3be7,SolanaClient_1$1['SOLANA_SLOT_TIME_INTERVAL_MS'],'getSignatureStatus\x20'+_0x1162ad);}}SolanaTxDeliveryMan$1['SolanaTxDeliveryMan']=SolanaTxDeliveryMan;

var config$1 = {};

(function(_0x325e90){Object['defineProperty'](_0x325e90,'__esModule',{'value':!![]}),_0x325e90['DEFAULT_SOLANA_CONFIG']=void 0x0,_0x325e90['createSolanaConfig']=_0x5bf4e4,_0x325e90['DEFAULT_SOLANA_CONFIG']={'maxComputeUnits':0x1d4c0,'maxPricePerComputeUnit':0x989680,'basePricePerComputeUnit':0x186a0,'gasMultiplier':0x2,'maxTxAttempts':0x8,'expectedTxDeliveryTimeMs':0x1b58,'useAggressiveGasOracle':!![]};function _0x5bf4e4(_0x371a44){const _0x24c02e=_0x371a44['gasMultiplier']??_0x325e90['DEFAULT_SOLANA_CONFIG']['gasMultiplier'],_0x1c23e9=_0x371a44['maxTxSendAttempts']??_0x325e90['DEFAULT_SOLANA_CONFIG']['maxTxAttempts'],_0x766c61=_0x371a44['gasLimit']??_0x325e90['DEFAULT_SOLANA_CONFIG']['maxComputeUnits'],_0x1d0cb0=_0x371a44['expectedTxDeliveryTimeMs']??_0x325e90['DEFAULT_SOLANA_CONFIG']['expectedTxDeliveryTimeMs'],_0x1b2bf9=_0x371a44['useAggressiveGasOracle']??_0x325e90['DEFAULT_SOLANA_CONFIG']['useAggressiveGasOracle'],_0x45b813=_0x371a44['basePricePerComputeUnit']??_0x325e90['DEFAULT_SOLANA_CONFIG']['basePricePerComputeUnit'];return {..._0x325e90['DEFAULT_SOLANA_CONFIG'],'gasMultiplier':_0x24c02e,'maxComputeUnits':_0x766c61,'basePricePerComputeUnit':_0x45b813,'maxTxAttempts':_0x1c23e9,'expectedTxDeliveryTimeMs':_0x1d0cb0,'useAggressiveGasOracle':_0x1b2bf9};}}(config$1));getDefaultExportFromCjs(config$1);

var ISolanaGasOracle = {};

Object['defineProperty'](ISolanaGasOracle,'__esModule',{'value':!![]});

var PriceAdapterContract$1 = {};

var address = "";
var metadata = {
	name: "redstone_solana_price_adapter",
	version: "1.0.0",
	spec: "0.1.0",
	description: "RedStone Solana Price Adapter"
};
var instructions = [
	{
		name: "price",
		discriminator: [
			129,
			85,
			239,
			229,
			61,
			225,
			218,
			20
		],
		accounts: [
			{
				name: "price_account"
			}
		],
		args: [
			{
				name: "_feed_id",
				type: {
					array: [
						"u8",
						32
					]
				}
			}
		],
		returns: {
			array: [
				"u8",
				32
			]
		}
	},
	{
		name: "price_and_timestamp",
		discriminator: [
			230,
			155,
			166,
			78,
			30,
			69,
			210,
			82
		],
		accounts: [
			{
				name: "price_account"
			}
		],
		args: [
			{
				name: "_feed_id",
				type: {
					array: [
						"u8",
						32
					]
				}
			}
		]
	},
	{
		name: "timestamp",
		discriminator: [
			254,
			134,
			231,
			242,
			239,
			5,
			62,
			108
		],
		accounts: [
			{
				name: "price_account"
			}
		],
		args: [
			{
				name: "_feed_id",
				type: {
					array: [
						"u8",
						32
					]
				}
			}
		],
		returns: "u64"
	},
	{
		name: "unique_signers_count",
		discriminator: [
			101,
			24,
			86,
			157,
			116,
			46,
			226,
			31
		],
		accounts: [
		],
		args: [
		],
		returns: "u8"
	},
	{
		name: "write_price",
		discriminator: [
			16,
			186,
			120,
			224,
			118,
			178,
			161,
			152
		],
		accounts: [
			{
				name: "user",
				writable: true,
				signer: true
			},
			{
				name: "price_account",
				writable: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			}
		],
		args: [
			{
				name: "feed_id",
				type: {
					array: [
						"u8",
						32
					]
				}
			},
			{
				name: "payload",
				type: "bytes"
			}
		]
	}
];
var accounts = [
	{
		name: "PriceData",
		discriminator: [
			232,
			113,
			193,
			231,
			133,
			209,
			206,
			154
		]
	}
];
var types$1 = [
	{
		name: "PriceData",
		type: {
			kind: "struct",
			fields: [
				{
					name: "feed_id",
					type: {
						array: [
							"u8",
							32
						]
					}
				},
				{
					name: "value",
					type: {
						array: [
							"u8",
							32
						]
					}
				},
				{
					name: "timestamp",
					type: "u64"
				},
				{
					name: "write_timestamp",
					type: {
						option: "u64"
					}
				},
				{
					name: "write_slot_number",
					type: "u64"
				},
				{
					name: "decimals",
					type: "u8"
				},
				{
					name: "_reserved",
					type: {
						array: [
							"u8",
							64
						]
					}
				}
			]
		}
	}
];
var _0x138576 = {
	address: address,
	metadata: metadata,
	instructions: instructions,
	accounts: accounts,
	types: types$1
};

var __importDefault$4=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x5bf271){return _0x5bf271&&_0x5bf271['__esModule']?_0x5bf271:{'default':_0x5bf271};};Object['defineProperty'](PriceAdapterContract$1,'__esModule',{'value':!![]});PriceAdapterContract$1['PriceAdapterContract']=void 0x0;const anchor_1=_0x85fb74,redstone_solana_price_adapter_json_1=__importDefault$4(_0x138576),utils_1$l=utils;class PriceAdapterContract{['client'];['program'];constructor(_0x2ab6e5,_0x2fd40e,_0x150a1e){this['client']=_0x150a1e;const _0x5b460a={...redstone_solana_price_adapter_json_1['default'],'address':_0x2ab6e5};this['program']=new anchor_1['Program'](_0x5b460a,_0x2fd40e);}static['getPriceDataAccount'](_0x385459,_0x5b770e){return anchor_1['web3']['PublicKey']['findProgramAddressSync']([(0, utils_1$l['makePriceSeed'])(),(0, utils_1$l['makeFeedIdBytes'])(_0x5b770e)],_0x385459)[0x0];}async['getMultiplePriceData'](_0x2c420a,_0x767e8c){if(_0x2c420a['length']===0x1)return [await this['getPriceData'](_0x2c420a[0x0],_0x767e8c)];const _0x11dbbd=_0x2c420a['map'](_0x2a1e93=>PriceAdapterContract['getPriceDataAccount'](this['program']['programId'],_0x2a1e93));return await this['client']['getMultipleAccountsInfo'](_0x11dbbd,_0x2aa269=>this['parsePriceDataAccountResponse'](_0x2aa269),'getMultiplePriceData\x20for\x20['+_0x2c420a['toString']()+']',_0x767e8c);}async['getPriceData'](_0x53a53e,_0x335a72){const _0x28c548=PriceAdapterContract['getPriceDataAccount'](this['program']['programId'],_0x53a53e);return await this['client']['getAccountInfo'](_0x28c548,_0x5197dd=>this['parsePriceDataAccountResponse'](_0x5197dd),_0x335a72,'getPriceData\x20of\x20'+_0x53a53e);}['parsePriceDataAccountResponse'](_0x19033f){return this['program']['coder']['accounts']['decode']('priceData',_0x19033f['data']);}async['writePriceTx'](_0x7ccd67,_0x5329de,_0x33b098){return await this['program']['methods']['writePrice'](Array['from']((0, utils_1$l['makeFeedIdBytes'])(_0x5329de)),Buffer['from'](_0x33b098,'hex'))['accountsStrict']({'user':_0x7ccd67,'priceAccount':PriceAdapterContract['getPriceDataAccount'](this['program']['programId'],_0x5329de),'systemProgram':anchor_1['web3']['SystemProgram']['programId']})['instruction']();}async['getUniqueSignerThreshold'](_0x1a1c5b){return await this['client']['viewMethod'](this['program']['methods']['uniqueSignersCount'](),_0x1a1c5b,'getUniqueSignerThreshold');}}PriceAdapterContract$1['PriceAdapterContract']=PriceAdapterContract;

var SolanaPricesContractAdapter$1 = {};

var __importDefault$3=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x18bb31){return _0x18bb31&&_0x18bb31['__esModule']?_0x18bb31:{'default':_0x18bb31};};Object['defineProperty'](SolanaPricesContractAdapter$1,'__esModule',{'value':!![]});SolanaPricesContractAdapter$1['SolanaPricesContractAdapter']=void 0x0;SolanaPricesContractAdapter$1['toNumber']=toNumber;const sdk_1$2=requireSrc$2(),utils_1$k=requireSrc$3(),lodash_1$1=__importDefault$3(_0x62d7dc);class SolanaPricesContractAdapter{['contract'];['txDeliveryMan'];['logger']=(0, utils_1$k['loggerFactory'])('solana-price-adapter');constructor(_0x56df44,_0x567866){this['contract']=_0x56df44,this['txDeliveryMan']=_0x567866;}['getSignerAddress'](){const _0x499d6a=this['txDeliveryMan']?.['getPublicKey']();return _0x499d6a?Promise['resolve'](_0x499d6a['toString']()):Promise['reject'](new Error('Signer\x20required'));}async['getUniqueSignerThreshold'](_0x412ecc){return await this['contract']['getUniqueSignerThreshold'](_0x412ecc);}async['readLatestUpdateBlockTimestamp'](_0x3b56af,_0x2746c7){if(!_0x3b56af)return undefined;const _0x26cf4f=await this['contract']['getPriceData'](_0x3b56af,_0x2746c7);return _0x26cf4f['writeTimestamp']?.['toNumber']();}['getPricesFromPayload'](_0x2b42fb){throw new Error('Pull\x20model\x20not\x20supported');}async['writePricesFromPayloadToContract'](_0x595c82){if(!this['txDeliveryMan'])throw new Error('Can\x27t\x20write\x20prices,\x20TxDeliveryMan\x20not\x20set');const _0x3cc91f=Date['now'](),_0x1ffecc=await this['txDeliveryMan']['sendTransactions'](_0x595c82['getDataFeedIds'](),_0x35e581=>this['fetchTransactionInstructionsWithData'](_0x595c82,_0x35e581,_0x3cc91f));return this['logger']['log']('FINISHED\x20'+_0x1ffecc['length']+'\x20transaction'+utils_1$k['RedstoneCommon']['getS'](_0x1ffecc['length'])+':\x20['+_0x1ffecc['toString']()+']'),_0x1ffecc[_0x1ffecc['length']-0x1];}async['fetchTransactionInstructionsWithData'](_0x50d620,_0x524765,_0x13671d){if(!this['txDeliveryMan'])throw new Error('Can\x27t\x20write\x20prices,\x20TxDeliveryMan\x20not\x20set');this['logger']['debug']('Fetching\x20payloads\x20for\x20['+_0x524765['toString']()+'].');const _0x2083d1=_0x50d620['copyForFeedIds'](_0x524765),{payloads:_0x544ebb}=sdk_1$2['ContractParamsProvider']['extractMissingValues'](await _0x2083d1['prepareSplitPayloads']({'metadataTimestamp':_0x13671d,'withUnsignedMetadata':!![]}),this['logger']),_0x359b22=this['txDeliveryMan']['getPublicKey']();return await this['makeTransactionInstructions'](_0x544ebb,_0x359b22,_0x524765);}async['makeTransactionInstructions'](_0x1ddaf3,_0x38e116,_0x37f67c){const _0x2d2e30=Object['entries'](_0x1ddaf3),_0x313cc5=await Promise['allSettled'](_0x2d2e30['map'](([_0x5f0820,_0x540261])=>this['contract']['writePriceTx'](_0x38e116,_0x5f0820,_0x540261))),_0x11333d=lodash_1$1['default']['zip'](_0x2d2e30,_0x313cc5)['map'](([_0x180cac,_0x5bd1f3])=>_0x5bd1f3?.['status']==='fulfilled'&&_0x180cac?.['length']?{'instruction':_0x5bd1f3['value'],'id':_0x180cac[0x0]}:undefined)['filter'](_0x171b6b=>_0x171b6b!==undefined);return _0x11333d['length']!==_0x37f67c['length']&&this['logger']['error']('Failed\x20to\x20write\x20'+(_0x37f67c['length']-_0x11333d['length'])+'\x20prices\x20to\x20contract.'),_0x11333d;}async['readPricesFromContract'](_0x181c87,_0x58315f){const _0x4b91c3=_0x181c87['getDataFeedIds'](),_0x4ac5fa=await this['contract']['getMultiplePriceData'](_0x4b91c3,_0x58315f),_0x5f5c14=_0x4ac5fa['findIndex'](_0x784e32=>!utils_1$k['RedstoneCommon']['isDefined'](_0x784e32));if(_0x5f5c14>=0x0)throw new Error('Missing\x20value\x20for\x20'+_0x4b91c3[_0x5f5c14]);return _0x4ac5fa['map'](_0x1d2e3e=>BigInt(toNumber(_0x1d2e3e['value'])));}async['readTimestampFromContract'](_0x20defd,_0x5948c5){const _0x482076=await this['contract']['getPriceData'](_0x20defd,_0x5948c5);return _0x482076['timestamp']['toNumber']();}async['readContractData'](_0x4878e1,_0x57080c){const _0xb8ab5b=await this['contract']['getMultiplePriceData'](_0x4878e1,_0x57080c),_0x4acea2=_0xb8ab5b['filter'](utils_1$k['RedstoneCommon']['isDefined'])['map'](_0x5d0e58=>[sdk_1$2['ContractParamsProvider']['unhexlifyFeedId'](_0x5d0e58['feedId']),{'lastDataPackageTimestampMS':_0x5d0e58['timestamp']['toNumber'](),'lastBlockTimestampMS':_0x5d0e58['writeTimestamp']?.['toNumber']()??0x0,'lastValue':toNumber(_0x5d0e58['value'])}]);return Object['fromEntries'](_0x4acea2);}}SolanaPricesContractAdapter$1['SolanaPricesContractAdapter']=SolanaPricesContractAdapter;function toNumber(_0x28bd06){let _0x227add=0x0;for(const _0x196886 of _0x28bd06){_0x227add=_0x227add*0x100+_0x196886;}return _0x227add;}

var SolanaContractConnector$1 = {};

Object['defineProperty'](SolanaContractConnector$1,'__esModule',{'value':!![]});SolanaContractConnector$1['SolanaContractConnector']=void 0x0;const web3_js_1$1=_0x2fa597,AnchorReadonlyProvider_1=AnchorReadonlyProvider$1,SolanaClient_1=SolanaClient,SolanaTxDeliveryMan_1=SolanaTxDeliveryMan$1,config_1$1=config$1,PriceAdapterContract_1=PriceAdapterContract$1,SolanaPricesContractAdapter_1=SolanaPricesContractAdapter$1;class SolanaContractConnector{['connection'];['address'];['keypair'];['config'];['adapter'];constructor(_0x2a5112,_0x1ae523,_0x34d0ae,_0x4e080e=config_1$1['DEFAULT_SOLANA_CONFIG']){this['connection']=_0x2a5112,this['address']=_0x1ae523,this['keypair']=_0x34d0ae,this['config']=_0x4e080e;}['getAdapter'](){if(!this['address'])throw new Error('Adapter\x20address\x20not\x20set');if(!this['adapter']){const _0x1f84c5=SolanaClient_1['SolanaClient']['createMultiClient'](this['connection']),_0x30f770=new AnchorReadonlyProvider_1['AnchorReadonlyProvider'](this['connection'],_0x1f84c5,this['keypair']?.['publicKey']),_0xb6b631=new PriceAdapterContract_1['PriceAdapterContract'](this['address'],_0x30f770,_0x1f84c5),_0x1e9e14=this['keypair']?new SolanaTxDeliveryMan_1['SolanaTxDeliveryMan'](_0x1f84c5,this['config'],this['keypair']):undefined;this['adapter']=new SolanaPricesContractAdapter_1['SolanaPricesContractAdapter'](_0xb6b631,_0x1e9e14);}return Promise['resolve'](this['adapter']);}['getBlockNumber'](){return this['connection']['getSlot']('finalized');}['waitForTransaction'](_0xef7ae0){return Promise['resolve'](!![]);}async['getNormalizedBalance'](_0xfe0c7d,_0x120662){const _0x5ba6ce=await this['connection']['getBalance'](new web3_js_1$1['PublicKey'](_0xfe0c7d),{'minContextSlot':_0x120662});return BigInt(_0x5ba6ce)*(BigInt(0xa**0x12)/BigInt(web3_js_1$1['LAMPORTS_PER_SOL']));}async['transfer'](_0x1ae0d1,_0x4ff770){if(!this['keypair'])throw new Error('Private\x20Key\x20was\x20not\x20provided.');_0x4ff770*=web3_js_1$1['LAMPORTS_PER_SOL'];const _0xa3dc7f=new web3_js_1$1['Transaction']()['add'](web3_js_1$1['SystemProgram']['transfer']({'fromPubkey':this['keypair']['publicKey'],'toPubkey':new web3_js_1$1['PublicKey'](_0x1ae0d1),'lamports':_0x4ff770}));await(0, web3_js_1$1['sendAndConfirmTransaction'])(this['connection'],_0xa3dc7f,[this['keypair']]);}['getSignerAddress'](){if(!this['keypair'])throw new Error('Private\x20Key\x20was\x20not\x20provided.');return Promise['resolve'](this['keypair']['publicKey']['toBase58']());}}SolanaContractConnector$1['SolanaContractConnector']=SolanaContractConnector;

(function(_0x3659d8){var _0xe52864=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x3ec4ca,_0x5d0821,_0x5a83d0,_0x34b78f){if(_0x34b78f===undefined)_0x34b78f=_0x5a83d0;var _0x2c503c=Object['getOwnPropertyDescriptor'](_0x5d0821,_0x5a83d0);(!_0x2c503c||('get'in _0x2c503c?!_0x5d0821['__esModule']:_0x2c503c['writable']||_0x2c503c['configurable']))&&(_0x2c503c={'enumerable':!![],'get':function(){return _0x5d0821[_0x5a83d0];}}),Object['defineProperty'](_0x3ec4ca,_0x34b78f,_0x2c503c);}:function(_0x580640,_0x2e426b,_0x4bfaf5,_0xc77b4f){if(_0xc77b4f===undefined)_0xc77b4f=_0x4bfaf5;_0x580640[_0xc77b4f]=_0x2e426b[_0x4bfaf5];}),_0x28becc=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x2a8946,_0x130ef5){for(var _0x86193 in _0x2a8946)if(_0x86193!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x130ef5,_0x86193))_0xe52864(_0x130ef5,_0x2a8946,_0x86193);};Object['defineProperty'](_0x3659d8,'__esModule',{'value':!![]}),_0x28becc(AnchorReadonlyProvider$1,_0x3659d8),_0x28becc(getRecentBlockhash$1,_0x3659d8),_0x28becc(SolanaClient,_0x3659d8),_0x28becc(SolanaTxDeliveryMan$1,_0x3659d8),_0x28becc(config$1,_0x3659d8),_0x28becc(ISolanaGasOracle,_0x3659d8),_0x28becc(RegularSolanaGasOracle$1,_0x3659d8),_0x28becc(networkIds$1,_0x3659d8),_0x28becc(PriceAdapterContract$1,_0x3659d8),_0x28becc(SolanaPricesContractAdapter$1,_0x3659d8),_0x28becc(SolanaRustSdkErrorHandler,_0x3659d8),_0x28becc(SolanaConnectionBuilder$1,_0x3659d8),_0x28becc(SolanaContractConnector$1,_0x3659d8),_0x28becc(utils,_0x3659d8);}(src$2));getDefaultExportFromCjs(src$2);

var src$1 = {};

var makePriceAdapterConfig = {};

var hasRequiredMakePriceAdapterConfig;function requireMakePriceAdapterConfig(){if(hasRequiredMakePriceAdapterConfig)return makePriceAdapterConfig;hasRequiredMakePriceAdapterConfig=0x1,Object['defineProperty'](makePriceAdapterConfig,'__esModule',{'value':!![]}),makePriceAdapterConfig['makeSuiDeployConfig']=_0x1f67cf;const _0x302cb1=requireSrc$2(),_0x381a1d=requireSrc$3(),_0x5bceb4=requireSrc$1();function _0x1f67cf(_0x461c4c='redstone-primary-prod'){return {'signerCountThreshold':0x3,'maxTimestampDelayMs':_0x381a1d['RedstoneCommon']['minToMs'](0x3),'maxTimestampAheadMs':_0x381a1d['RedstoneCommon']['minToMs'](0x1),'signers':(0, _0x302cb1['getSignersForDataServiceId'])(_0x461c4c),'trustedUpdaters':['0xbd288ccf0f92df315f7b212e5481f4f2b469f6c61c0d58a16e616eb2e0341f9c','0xfcb82d9138f1aed43fd1259c94fe20890c2f48297dc673d354efd9f9572f0319','0x0b4e848b21b2a942f8bb0f4d4496462b059c206ae68d116091bed41a72408cbb'],'minIntervalBetweenUpdatesMs':_0x381a1d['RedstoneCommon']['hourToMs'](0x30),'initializeTxGasBudget':_0x5bceb4['DEFAULT_GAS_BUDGET']};}return makePriceAdapterConfig;}

var config = {};

var SuiContractUtil = {};

(function(_0x49451a){var _0x32bbff=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0xe0926){return _0xe0926&&_0xe0926['__esModule']?_0xe0926:{'default':_0xe0926};};Object['defineProperty'](_0x49451a,'__esModule',{'value':!![]}),_0x49451a['SuiContractUtil']=_0x49451a['DEFAULT_GAS_BUDGET']=void 0x0;const _0x252cb0=_0x371bce,_0x10d0c2=_0xba51df,_0x479af5=requireSrc$3(),_0x10aa74=_0x32bbff(_0x51ff76);_0x49451a['DEFAULT_GAS_BUDGET']=_0x10d0c2['MIST_PER_SUI']/0xan;class _0x551e9d{static ['logger']=(0, _0x479af5['loggerFactory'])('sui-contract-util');static async['prepareBaseTransaction'](_0x21dbfd,_0x160755,_0x30f051,_0x252ac9){if(!_0x252ac9)throw new Error('A\x20keypair\x20is\x20needed\x20to\x20write\x20prices\x20to\x20contract');const _0x3bfe79=await this['computeGasPrice'](_0x21dbfd,_0x160755),_0x4179d5=_0x30f051??_0x49451a['DEFAULT_GAS_BUDGET'],_0x263765=new _0x252cb0['Transaction']();return _0x263765['setGasPrice'](_0x3bfe79),_0x263765['setGasBudget'](_0x4179d5),_0x263765['setSender'](_0x252ac9['toSuiAddress']()),_0x263765;}static async['computeGasPrice'](_0x570182,_0x198f78=0x1){const _0x28e4b2=Date['now'](),_0x465fb4=await _0x570182['getReferenceGasPrice']();return this['logger']['info']('Reference\x20gas\x20price:\x20'+_0x465fb4+'\x20MIST\x20fetched\x20in\x20'+(Date['now']()-_0x28e4b2)+'\x20[ms]'),BigInt(new _0x10aa74['default'](_0x465fb4['toString']())['times'](_0x198f78)['floor']()['toString']());}}_0x49451a['SuiContractUtil']=_0x551e9d;}(SuiContractUtil));getDefaultExportFromCjs(SuiContractUtil);

Object['defineProperty'](config,'__esModule',{'value':!![]});config['SuiNetworkSchema']=void 0x0;config['makeSuiConfig']=makeSuiConfig;const zod_1$2=_0x28081a,SuiContractUtil_1$2=SuiContractUtil,DEFAULT_GAS_MULTIPLIER=1.4,DEFAULT_MAX_TX_SEND_ATTEMPTS=0x8,DEFAULT_EXPECTED_DELIVERY_TIME_MS=0x1770;config['SuiNetworkSchema']=zod_1$2['z']['enum'](['mainnet','testnet','localnet','devnet']);function makeSuiConfig(_0x47804d){return {'writePricesTxGasBudget':SuiContractUtil_1$2['DEFAULT_GAS_BUDGET'],'gasMultiplier':DEFAULT_GAS_MULTIPLIER,'maxTxSendAttempts':DEFAULT_MAX_TX_SEND_ATTEMPTS,'expectedTxDeliveryTimeInMs':DEFAULT_EXPECTED_DELIVERY_TIME_MS,..._0x47804d};}

var networkIds = {};

(function(_0x311ed2){var _0x1f9e31=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x1c97c5){return _0x1c97c5&&_0x1c97c5['__esModule']?_0x1c97c5:{'default':_0x1c97c5};};Object['defineProperty'](_0x311ed2,'__esModule',{'value':!![]}),_0x311ed2['SUI_NETWORK_IDS']=void 0x0,_0x311ed2['getSuiNetworkName']=_0x3de567,_0x311ed2['getSuiChainId']=_0x5d15dd;const _0x2e29ab=_0x1f9e31(_0x62d7dc);_0x311ed2['SUI_NETWORK_IDS']={0x35834a8a:'mainnet',0x4c78adac:'testnet',0x7f81d47e:'devnet'};function _0x3de567(_0x38d743){return _0x311ed2['SUI_NETWORK_IDS'][_0x38d743]??'localnet';}function _0x5d15dd(_0x279a49){return Number(_0x2e29ab['default']['findKey'](_0x311ed2['SUI_NETWORK_IDS'],_0x50feda=>_0x50feda===_0x279a49));}}(networkIds));getDefaultExportFromCjs(networkIds);

var PriceAdapterConfig = {};

Object['defineProperty'](PriceAdapterConfig,'__esModule',{'value':!![]});

var SuiClientBuilder$1 = {};

var util = {};

var __importDefault$2=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0xea7200){return _0xea7200&&_0xea7200['__esModule']?_0xea7200:{'default':_0xea7200};};Object['defineProperty'](util,'__esModule',{'value':!![]});util['getDeployDir']=getDeployDir;util['readIds']=readIds;util['saveIds']=saveIds;util['readSuiConfig']=readSuiConfig;util['makeSuiKeypair']=makeSuiKeypair;util['makeSuiClient']=makeSuiClient;util['hexToBytes']=hexToBytes;util['serialize']=serialize;util['serializeSigners']=serializeSigners;util['serializeAddresses']=serializeAddresses;util['makeFeedIdBytes']=makeFeedIdBytes;util['uint8ArrayToBcs']=uint8ArrayToBcs;const bcs_1$1=_0x3e6687,client_1$1=_0x13b1b3,secp256k1_1=_0x5ec42c,utils_1$j=requireSrc$3(),utils_2$2=_0x4eca3f,fs_1$1=__importDefault$2(_0x1c92a7),path_1$1=__importDefault$2(_0x2d3fdb),zod_1$1=_0x28081a,config_1=config,network_ids_1$1=networkIds;function getDeployDir(){return utils_1$j['RedstoneCommon']['getFromEnv']('DEPLOY_DIR',zod_1$1['z']['string']()['optional']()['default']('sui/contracts/price_adapter'));}function getIdsFilePath(_0x5a9909){return path_1$1['default']['join'](__dirname,'..',getDeployDir(),'/object_ids.'+_0x5a9909+'.json');}function readIds(_0x503601){return JSON['parse'](fs_1$1['default']['readFileSync'](getIdsFilePath(_0x503601),'utf8'));}function saveIds(_0x2384ce,_0x43e054){fs_1$1['default']['writeFileSync'](getIdsFilePath(_0x43e054),JSON['stringify'](_0x2384ce,null,0x4));}function readSuiConfig(_0x4281a7){return (0, config_1['makeSuiConfig'])(readIds(_0x4281a7));}function makeSuiKeypair(_0xc8057e){const _0x4e5f26=_0xc8057e??utils_1$j['RedstoneCommon']['getFromEnv']('PRIVATE_KEY');if(!_0x4e5f26)throw new Error('PRIVATE_KEY\x20is\x20not\x20set,\x20privateKey\x20param\x20not\x20provided');return secp256k1_1['Secp256k1Keypair']['fromSecretKey']((0, utils_2$2['isHexString'])(_0x4e5f26)||(0, utils_2$2['isHexString'])('0x'+_0x4e5f26)?(0, utils_2$2['arrayify'])(_0x4e5f26,{'allowMissingPrefix':!![]}):_0x4e5f26);}function makeSuiClient(_0x31afd9,_0x343d5b){let _0x516d91;return typeof _0x31afd9==='number'?_0x516d91=(0, network_ids_1$1['getSuiNetworkName'])(_0x31afd9):_0x516d91=_0x31afd9,new client_1$1['SuiClient']({'url':_0x343d5b??(0, client_1$1['getFullnodeUrl'])(_0x516d91)});}function hexToBytes(_0x119998){if(!_0x119998['startsWith']('0x'))throw new Error('Hex\x20string\x20must\x20start\x20with\x200x');return Uint8Array['from'](_0x119998['slice'](0x2)['match'](/.{2}/g)['map'](_0x3670c3=>parseInt(_0x3670c3,0x10)));}function serialize(_0x394f05,_0x3d71a6,_0x313734=![]){return (_0x313734?bcs_1$1['bcs']['option'](_0x394f05):_0x394f05)['serialize'](_0x3d71a6);}function serializeSigners(_0x4240d6,_0x3a941d=![]){return serialize(bcs_1$1['bcs']['vector'](bcs_1$1['bcs']['vector'](bcs_1$1['bcs']['u8']())),_0x4240d6['map'](hexToBytes),_0x3a941d);}function serializeAddresses(_0x2ce75f,_0x5a9dca=![]){return serialize(bcs_1$1['bcs']['vector'](bcs_1$1['bcs']['bytes'](0x20)),_0x2ce75f['map'](hexToBytes),_0x5a9dca);}function makeFeedIdBytes(_0x2ed747){return Uint8Array['from'](Buffer['from'](_0x2ed747['padEnd'](0x20,'\x00')));}function uint8ArrayToBcs(_0x2fb67c){return bcs_1$1['bcs']['vector'](bcs_1$1['bcs']['u8']())['serialize'](_0x2fb67c);}

Object['defineProperty'](SuiClientBuilder$1,'__esModule',{'value':!![]});SuiClientBuilder$1['SuiClientBuilder']=void 0x0;const client_1=_0x13b1b3,utils_1$i=requireSrc$3(),network_ids_1=networkIds,util_1$2=util;class SuiClientBuilder extends utils_1$i['MultiExecutor']['ClientBuilder']{['chainType']=utils_1$i['ChainTypeEnum']['Enum']['sui'];['withSuiNetwork'](_0x4e9152){return this['withChainId']((0, network_ids_1['getSuiChainId'])(_0x4e9152));}['withFullnodeUrl'](){if(!this['chainId'])throw new Error('Network\x20not\x20set');const _0x320280=(0, network_ids_1['getSuiNetworkName'])(this['chainId']);return this['withRpcUrl']((0, client_1['getFullnodeUrl'])(_0x320280));}['build'](){if(!this['chainId'])throw new Error('Network\x20not\x20set');const _0x336de4=(0, network_ids_1['getSuiNetworkName'])(this['chainId']);return !this['urls']['length']&&this['urls']['push']((0, client_1['getFullnodeUrl'])(_0x336de4)),this['makeMultiExecutor'](_0x574428=>(0, util_1$2['makeSuiClient'])(_0x336de4,_0x574428),{'getChainIdentifier':utils_1$i['MultiExecutor']['ExecutionMode']['CONSENSUS_ALL_EQUAL'],'signAndExecuteTransaction':utils_1$i['MultiExecutor']['ExecutionMode']['RACE'],'executeTransactionBlock':utils_1$i['MultiExecutor']['ExecutionMode']['RACE'],'getLatestCheckpointSequenceNumber':SuiClientBuilder['blockNumberConsensusExecutor'],'getReferenceGasPrice':utils_1$i['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getBalance':utils_1$i['MultiExecutor']['ExecutionMode']['AGREEMENT'],'waitForTransaction':utils_1$i['MultiExecutor']['ExecutionMode']['AGREEMENT'],'getTransactionBlock':utils_1$i['MultiExecutor']['ExecutionMode']['AGREEMENT']});}async['buildAndVerify'](){const _0x2789b8=this['build'](),_0x21b3ab=await _0x2789b8['getChainIdentifier']();return utils_1$i['RedstoneCommon']['assert'](Number(BigInt('0x'+_0x21b3ab))===this['chainId'],'Wrong\x20chainId'),_0x2789b8;}}SuiClientBuilder$1['SuiClientBuilder']=SuiClientBuilder;

var SuiContractConnector$1 = {};

var SuiTxDeliveryMan$1 = {};

Object['defineProperty'](SuiTxDeliveryMan$1,'__esModule',{'value':!![]});SuiTxDeliveryMan$1['SuiTxDeliveryMan']=void 0x0;const transactions_1$1=_0x371bce,utils_1$h=_0xba51df,utils_2$1=requireSrc$3(),SuiContractUtil_1$1=SuiContractUtil,MAX_PARALLEL_TRANSACTION_COUNT=0x5,SPLIT_COIN_INITIAL_BALANCE=SuiContractUtil_1$1['DEFAULT_GAS_BUDGET'];class SuiTxDeliveryMan{['client'];['keypair'];['config'];['executor'];['logger']=(0, utils_2$1['loggerFactory'])('sui-tx-delivery-man');constructor(_0x42ec20,_0x33b5cc,_0x4739a2,_0x112db2){this['client']=_0x42ec20,this['keypair']=_0x33b5cc,this['config']=_0x4739a2,this['executor']=_0x112db2;}async['sendTransaction'](_0x5e6155,_0x2f2bb8,_0x19426a=0x0){try{return (_0x19426a?this['logger']['info']:this['logger']['debug'])('Iteration\x20#'+_0x19426a+'\x20started'),await utils_2$1['RedstoneCommon']['timeout'](this['performExecutingTx'](_0x5e6155),this['config']['expectedTxDeliveryTimeInMs']);}catch(_0x410c0a){const _0x3ffa17=_0x19426a+0x1;this['logger']['error']('Iteration\x20#'+_0x19426a+'\x20FAILED:\x20'+utils_2$1['RedstoneCommon']['stringifyError'](_0x410c0a));if(_0x3ffa17>=this['config']['maxTxSendAttempts'])throw _0x410c0a;const _0x28c765=await _0x2f2bb8(_0x3ffa17);return await this['sendTransaction'](_0x28c765,_0x2f2bb8,_0x3ffa17);}}async['performExecutingTx'](_0x49c1dd){const _0x36ac1c=Date['now'](),{digest:_0x5a1e2a,data:_0x1add6f}=await this['executeTxWithExecutor'](_0x49c1dd,this['getExecutor']()),{status:_0x531579,success:_0x2d003e,error:_0x3652e8}=SuiTxDeliveryMan['getStatus'](_0x1add6f),_0x5dadd1=SuiTxDeliveryMan['getCost'](_0x1add6f);this['logger']['log']('Transaction\x20'+_0x5a1e2a+'\x20finished\x20in\x20'+(Date['now']()-_0x36ac1c)+'\x20[ms],\x20status:\x20'+_0x531579['toUpperCase']()+',\x20cost:\x20'+_0x5dadd1+'\x20SUI',{'errors':_0x1add6f['errors'],'gasUsed':_0x1add6f['effects']['gasUsed'],'gasData':_0x1add6f['transaction']['data']['gasData']});if(!_0x2d003e)throw new Error(_0x3652e8);return _0x5a1e2a;}async['executeTxWithExecutor'](_0x18ef6b,_0x292f68){try{return await _0x292f68['executeTransaction'](_0x18ef6b,{'showEffects':!![],'showBalanceChanges':!![],'showInput':!![]});}catch(_0x507018){this['logger']['warn']('Reinitializing\x20gas\x20objects...'),this['initializeExecutor']();throw _0x507018;}}['getExecutor'](){return this['executor']??this['initializeExecutor']();}['initializeExecutor'](){const _0x57aabf=new transactions_1$1['ParallelTransactionExecutor']({'client':this['client'],'signer':this['keypair'],'initialCoinBalance':SPLIT_COIN_INITIAL_BALANCE,'maxPoolSize':MAX_PARALLEL_TRANSACTION_COUNT});return this['executor']=_0x57aabf,_0x57aabf;}static['getStatus'](_0x5c1f0d){const _0xf8df27=_0x5c1f0d['effects']['status']['status'],_0x1bb897=_0x5c1f0d['effects']?.['status']['error'],_0x38d464=_0xf8df27==='success';return {'status':_0xf8df27,'success':_0x38d464,'error':_0x1bb897};}static['getCost'](_0x1e7f61){return Number(BigInt(_0x1e7f61['balanceChanges'][0x0]['amount']['replace']('-','')))/Number(utils_1$h['MIST_PER_SUI']);}}SuiTxDeliveryMan$1['SuiTxDeliveryMan']=SuiTxDeliveryMan;

Object['defineProperty'](SuiContractConnector$1,'__esModule',{'value':!![]});SuiContractConnector$1['SuiContractConnector']=void 0x0;const transactions_1=_0x371bce,utils_1$g=_0xba51df,SuiTxDeliveryMan_1=SuiTxDeliveryMan$1;class SuiContractConnector{['client'];['keypair'];static ['txDeliveryManCache']={};constructor(_0x1e4760,_0x319ad4){this['client']=_0x1e4760,this['keypair']=_0x319ad4;}['getAdapter'](){throw new Error('getAdapter\x20is\x20not\x20implemented');}async['getBlockNumber'](){return Number(await this['client']['getLatestCheckpointSequenceNumber']());}async['getNormalizedBalance'](_0x4cec54){return BigInt((await this['client']['getBalance']({'owner':_0x4cec54}))['totalBalance'])*(0xan**0x12n/utils_1$g['MIST_PER_SUI']);}async['waitForTransaction'](_0x428e7b){await this['client']['waitForTransaction']({'digest':_0x428e7b});const _0x393e5c=await this['client']['getTransactionBlock']({'digest':_0x428e7b,'options':{'showEffects':!![]}});return SuiTxDeliveryMan_1['SuiTxDeliveryMan']['getStatus'](_0x393e5c)['success'];}static['getCachedDeliveryMan'](_0xa977c0,_0x40a90d,_0x3f5b22){const _0x1eebca=_0x40a90d['getPublicKey']()['toSuiPublicKey']();return SuiContractConnector['txDeliveryManCache'][_0x1eebca]??=new SuiTxDeliveryMan_1['SuiTxDeliveryMan'](_0xa977c0,_0x40a90d,_0x3f5b22),SuiContractConnector['txDeliveryManCache'][_0x1eebca];}async['transfer'](_0x1a5e69,_0x122e76){if(!this['keypair'])throw new Error('Private\x20Key\x20was\x20not\x20provided.');_0x122e76=_0x122e76*0xa**0x9;const _0x2b19e4=new transactions_1['Transaction'](),[_0x1dc72e]=_0x2b19e4['splitCoins'](_0x2b19e4['gas'],[_0x122e76]);_0x2b19e4['transferObjects']([_0x1dc72e],_0x1a5e69),await this['client']['signAndExecuteTransaction']({'signer':this['keypair'],'transaction':_0x2b19e4});}['getSignerAddress'](){if(!this['keypair'])throw new Error('Private\x20Key\x20was\x20not\x20provided.');return Promise['resolve'](this['keypair']['getPublicKey']()['toSuiAddress']());}}SuiContractConnector$1['SuiContractConnector']=SuiContractConnector;

var SuiPricesContractAdapter$1 = {};

var SuiPricesContractReader$1 = {};

var SuiReader$1 = {};

Object['defineProperty'](SuiReader$1,'__esModule',{'value':!![]});SuiReader$1['SuiReader']=void 0x0;const utils_1$f=requireSrc$3();class SuiReader{['client'];constructor(_0x237c6e){this['client']=_0x237c6e;}async['fetchObjectDataContent'](_0x297b2d,_0x3440d6){if(_0x3440d6){let _0x7bcec4=_0x297b2d['version'];if(!_0x7bcec4){_0x7bcec4=await this['findLatestVersionAtCheckpoint'](_0x297b2d['objectId'],_0x3440d6);if(!_0x7bcec4)throw new Error('No\x20version\x20of\x20'+_0x297b2d['objectId']+'\x20found\x20for\x20'+_0x3440d6);}const _0x3f3bf3=await this['client']['tryGetPastObject']({'id':_0x297b2d['objectId'],'version':_0x7bcec4,'options':{'showContent':!![]}});if(_0x3f3bf3['status']!=='VersionFound')throw new Error('Failed\x20to\x20find\x20past\x20object:\x20'+utils_1$f['RedstoneCommon']['stringify'](_0x3f3bf3));if(!_0x3f3bf3['details']['content'])throw new Error('Object\x20details\x20not\x20found\x20or\x20have\x20no\x20content');return _0x3f3bf3['details']['content'];}const _0x22b661=await this['client']['getObject']({'id':_0x297b2d['objectId'],'options':{'showContent':!![]}});if(!_0x22b661['data']?.['content'])throw new Error('Object\x20not\x20found\x20or\x20has\x20no\x20content');return _0x22b661['data']['content'];}async['getObjectIds'](_0x55c7eb){const _0x1e4224=await this['client']['getDynamicFields']({'parentId':_0x55c7eb});if(_0x1e4224['data']['length']===0x0)throw new Error('Dynamic\x20fields\x20not\x20found');return _0x1e4224['data']['map'](_0x5111f6=>({'objectId':_0x5111f6['objectId'],'version':Number(_0x5111f6['version'])}));}async['findLatestVersionAtCheckpoint'](_0x584782,_0x23c3ef){await utils_1$f['RedstoneCommon']['waitForBlockNumber'](()=>this['client']['getLatestCheckpointSequenceNumber']()['then'](Number),_0x23c3ef,'findLatestVersion\x20'+_0x584782+'\x20at\x20'+_0x23c3ef);let _0x500a33=undefined;do{const _0x33ca89=await this['client']['queryTransactionBlocks']({'filter':{'ChangedObject':_0x584782},'options':{'showObjectChanges':!![]},'cursor':_0x500a33}),_0x424b0d=SuiReader['checkPage'](_0x33ca89,_0x23c3ef,_0x584782);if(_0x424b0d)return _0x424b0d;_0x500a33=_0x33ca89['nextCursor'];}while(_0x500a33);return undefined;}static['checkPage'](_0x3aef13,_0x199e41,_0x16d15f){for(const _0x38d2fb of _0x3aef13['data']){if(Number(_0x38d2fb['checkpoint'])<=_0x199e41){const _0x2e254c=_0x38d2fb['objectChanges']?.['find'](_0x465e88=>'objectId'in _0x465e88&&_0x465e88['objectId']===_0x16d15f);if(_0x2e254c!==undefined)return Number(_0x2e254c['version']);}}return undefined;}}SuiReader$1['SuiReader']=SuiReader;

var types = {};

Object['defineProperty'](types,'__esModule',{'value':!![]});types['PriceDataContent']=types['PriceAdapterDataContent']=void 0x0;const zod_1=_0x28081a;function flattenFields(_0x208ec3){return _0x208ec3['fields'];}const ConfigContent=zod_1['z']['object']({'fields':zod_1['z']['object']({'signer_count_threshold':zod_1['z']['number']()})})['transform'](flattenFields),PricesContent=zod_1['z']['object']({'fields':zod_1['z']['object']({'id':zod_1['z']['object']({'id':zod_1['z']['string']()})})})['transform'](flattenFields);types['PriceAdapterDataContent']=zod_1['z']['object']({'fields':zod_1['z']['object']({'prices':PricesContent,'config':ConfigContent})})['transform'](flattenFields);const PriceData=zod_1['z']['object']({'feed_id':zod_1['z']['array'](zod_1['z']['number']()),'timestamp':zod_1['z']['string'](),'value':zod_1['z']['string'](),'write_timestamp':zod_1['z']['string']()}),ValueContent=zod_1['z']['object']({'fields':PriceData})['transform'](flattenFields);types['PriceDataContent']=zod_1['z']['object']({'fields':zod_1['z']['object']({'value':ValueContent})})['transform'](flattenFields);

Object['defineProperty'](SuiPricesContractReader$1,'__esModule',{'value':!![]});SuiPricesContractReader$1['SuiPricesContractReader']=void 0x0;const sdk_1$1=requireSrc$2(),utils_1$e=requireSrc$3(),SuiReader_1=SuiReader$1,types_1=types;class SuiPricesContractReader{['suiReader'];['priceAdapterObjectId'];constructor(_0x2f40a5,_0x2a703a){this['suiReader']=_0x2f40a5,this['priceAdapterObjectId']=_0x2a703a;}static['createMultiReader'](_0x256844,_0x151d9e){return utils_1$e['MultiExecutor']['createForSubInstances'](_0x256844,_0x4c7add=>new SuiPricesContractReader(new SuiReader_1['SuiReader'](_0x4c7add),_0x151d9e),{},{...utils_1$e['MultiExecutor']['DEFAULT_CONFIG'],'defaultMode':utils_1$e['MultiExecutor']['ExecutionMode']['AGREEMENT'],'singleExecutionTimeoutMs':utils_1$e['MultiExecutor']['SINGLE_EXECUTION_TIMEOUT_MS'],'allExecutionsTimeoutMs':utils_1$e['MultiExecutor']['ALL_EXECUTIONS_TIMEOUT_MS']});}async['getPriceAdapterObjectDataContent'](_0x21b789){const _0xd7407a=await this['suiReader']['fetchObjectDataContent']({'objectId':this['priceAdapterObjectId']},_0x21b789);return types_1['PriceAdapterDataContent']['parse'](_0xd7407a);}async['getContractDataFromPricesTable'](_0x1317ac,_0x35f72d){const _0x103d0f=await this['getPriceDataContent'](_0x1317ac,_0x35f72d),_0x464b73=_0x103d0f['map'](_0x52a177=>[sdk_1$1['ContractParamsProvider']['unhexlifyFeedId'](_0x52a177['feed_id']),{'lastDataPackageTimestampMS':parseInt(_0x52a177['timestamp']),'lastBlockTimestampMS':parseInt(_0x52a177['write_timestamp']),'lastValue':BigInt(_0x52a177['value'])}]);return Object['fromEntries'](_0x464b73);}async['getPriceDataContent'](_0x38f546,_0x68c9c4){const _0x40336e=await this['suiReader']['getObjectIds'](_0x38f546),_0x4d61d5=await Promise['all'](_0x40336e['map'](_0xccb3b5=>this['suiReader']['fetchObjectDataContent'](_0xccb3b5,_0x68c9c4)));return _0x4d61d5['map'](_0x242bca=>types_1['PriceDataContent']['parse'](_0x242bca)['value']);}}SuiPricesContractReader$1['SuiPricesContractReader']=SuiPricesContractReader;

var SuiPricesContractWriter$1 = {};

Object['defineProperty'](SuiPricesContractWriter$1,'__esModule',{'value':!![]});SuiPricesContractWriter$1['SuiPricesContractWriter']=void 0x0;const utils_1$d=_0xba51df,sdk_1=requireSrc$2(),utils_2=requireSrc$3(),ethers_1$1=_0x3e9376,SuiContractUtil_1=SuiContractUtil,util_1$1=util;class SuiPricesContractWriter{['deliveryMan'];['config'];['logger']=(0, utils_2['loggerFactory'])('sui-prices-writer');constructor(_0x401642,_0x274e69){this['deliveryMan']=_0x401642,this['config']=_0x274e69;}['getSignerAddress'](){return this['deliveryMan']['keypair']['toSuiAddress']();}async['writePricesFromPayloadToContract'](_0x1fc182){const _0x45312c=Date['now'](),_0x362d3c=await this['prepareWritePricesTransaction'](_0x1fc182,_0x45312c);return await this['deliveryMan']['sendTransaction'](_0x362d3c,async _0xb32b76=>await this['prepareWritePricesTransaction'](_0x1fc182,_0x45312c,_0xb32b76));}async['prepareWritePricesTransaction'](_0x5e0d78,_0x4a0738,_0x52610a=0x0){const _0x5f1bce=await SuiContractUtil_1['SuiContractUtil']['prepareBaseTransaction'](this['deliveryMan']['client'],this['config']['gasMultiplier']**_0x52610a,this['config']['writePricesTxGasBudget'],this['deliveryMan']['keypair']),_0x42238e={'withUnsignedMetadata':!![],'metadataTimestamp':_0x4a0738},{payloads:_0x535834}=sdk_1['ContractParamsProvider']['extractMissingValues'](await _0x5e0d78['prepareSplitPayloads'](_0x42238e),this['logger']);return Object['entries'](_0x535834)['forEach'](([_0x231e5a,_0x2f2c5a])=>{this['writePrice'](_0x5f1bce,_0x231e5a,_0x2f2c5a);}),_0x5f1bce;}['writePrice'](_0x49d015,_0x158b46,_0x478a46){_0x49d015['moveCall']({'target':this['config']['packageId']+'::price_adapter::write_price','arguments':[_0x49d015['object'](this['config']['priceAdapterObjectId']),_0x49d015['pure']((0, util_1$1['uint8ArrayToBcs'])((0, util_1$1['makeFeedIdBytes'])(_0x158b46))),_0x49d015['pure']((0, util_1$1['uint8ArrayToBcs'])(ethers_1$1['utils']['arrayify']('0x'+_0x478a46))),_0x49d015['object'](utils_1$d['SUI_CLOCK_OBJECT_ID'])]});}}SuiPricesContractWriter$1['SuiPricesContractWriter']=SuiPricesContractWriter;

var __importDefault$1=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0xe6624b){return _0xe6624b&&_0xe6624b['__esModule']?_0xe6624b:{'default':_0xe6624b};};Object['defineProperty'](SuiPricesContractAdapter$1,'__esModule',{'value':!![]});SuiPricesContractAdapter$1['SuiPricesContractAdapter']=void 0x0;const bcs_1=_0x3e6687,utils_1$c=requireSrc$3(),lodash_1=__importDefault$1(_0x62d7dc),SuiPricesContractReader_1=SuiPricesContractReader$1,SuiPricesContractWriter_1=SuiPricesContractWriter$1,util_1=util;class SuiPricesContractAdapter{['reader'];['writer'];['getPriceAdapterObjectDataContentMemoized']=utils_1$c['RedstoneCommon']['memoize']({'functionToMemoize':blockNumber=>this['reader']['getPriceAdapterObjectDataContent'](blockNumber),'ttl':0x3e8});constructor(_0x38a702,_0x472607,_0x3a529f){this['reader']=SuiPricesContractReader_1['SuiPricesContractReader']['createMultiReader'](_0x38a702,_0x472607['priceAdapterObjectId']),this['writer']=_0x3a529f?new SuiPricesContractWriter_1['SuiPricesContractWriter'](_0x3a529f,_0x472607):undefined;}static['initialize'](_0x545641,_0xa42f62,_0x477016,_0x4fabbf){_0x545641['setGasBudget'](_0xa42f62['initializeTxGasBudget']),_0x545641['moveCall']({'target':_0x477016+'::main::initialize_price_adapter','arguments':[_0x545641['object'](_0x4fabbf),...this['makeConfigArgs'](_0xa42f62)['map'](_0x545641['pure'])]});}static['updateConfig'](_0x5d11a0,_0x295a5b,_0x371aed){_0x5d11a0['setGasBudget'](_0x295a5b['initializeTxGasBudget']),_0x5d11a0['moveCall']({'target':_0x295a5b['packageId']+'::price_adapter::update_config','arguments':[_0x5d11a0['object'](_0x371aed),_0x5d11a0['object'](_0x295a5b['priceAdapterObjectId']),...this['makeConfigArgs'](_0x295a5b,!![])['map'](_0x5d11a0['pure'])]});}static['makeConfigArgs'](_0x56c5d3,_0x52d83e=![]){return [(0, util_1['serializeSigners'])(_0x56c5d3['signers'],_0x52d83e),(0, util_1['serialize'])(bcs_1['bcs']['u8'](),_0x56c5d3['signerCountThreshold'],_0x52d83e),(0, util_1['serialize'])(bcs_1['bcs']['u64'](),_0x56c5d3['maxTimestampDelayMs'],_0x52d83e),(0, util_1['serialize'])(bcs_1['bcs']['u64'](),_0x56c5d3['maxTimestampAheadMs'],_0x52d83e),(0, util_1['serializeAddresses'])(_0x56c5d3['trustedUpdaters'],_0x52d83e),(0, util_1['serialize'])(bcs_1['bcs']['u64'](),_0x56c5d3['minIntervalBetweenUpdatesMs'],_0x52d83e)];}['getSignerAddress'](){return Promise['resolve'](this['writer']?.['getSignerAddress']());}async['getUniqueSignerThreshold'](_0x199e0f){const _0x3b6977=await this['getPriceAdapterObjectDataContentMemoized'](_0x199e0f);return _0x3b6977['config']['signer_count_threshold'];}async['readPricesFromContract'](_0x1ea4b8,_0x2f1067){const _0x9b5f15=await this['readContractData'](_0x1ea4b8['getDataFeedIds'](),_0x2f1067);return _0x1ea4b8['getDataFeedIds']()['map'](_0x2f4ef=>_0x9b5f15[_0x2f4ef]['lastValue']);}async['readLatestUpdateBlockTimestamp'](_0x2b5940,_0x37ff21){return (await this['readAnyRoundDetails'](_0x2b5940,_0x37ff21))['lastBlockTimestampMS'];}async['readTimestampFromContract'](_0x4ea441,_0x26e646){return (await this['readAnyRoundDetails'](_0x4ea441,_0x26e646))['lastDataPackageTimestampMS'];}async['readContractData'](_0xb1528b,_0x58d6ae){const _0x1a8063=await this['getPriceAdapterObjectDataContentMemoized'](_0x58d6ae),_0x2f2ff0=_0x1a8063['prices']['id']['id'];if(!_0x2f2ff0)throw new Error('Prices\x20table\x20ID\x20not\x20found');return lodash_1['default']['pick'](await this['reader']['getContractDataFromPricesTable'](_0x2f2ff0,_0x58d6ae),_0xb1528b);}async['readAnyRoundDetails'](_0x334d78,_0x56cd0e){return Object['values'](await this['readContractData']([_0x334d78],_0x56cd0e))[0x0];}async['writePricesFromPayloadToContract'](_0xc477db){if(!this['writer'])throw new Error('Writer\x20is\x20not\x20set');return await this['writer']['writePricesFromPayloadToContract'](_0xc477db);}async['getPricesFromPayload'](_0x781d10){throw new Error('Pull\x20model\x20not\x20supported');}}SuiPricesContractAdapter$1['SuiPricesContractAdapter']=SuiPricesContractAdapter;

var SuiPricesContractConnector$1 = {};

Object['defineProperty'](SuiPricesContractConnector$1,'__esModule',{'value':!![]});SuiPricesContractConnector$1['SuiPricesContractConnector']=void 0x0;const SuiContractConnector_1=SuiContractConnector$1,SuiPricesContractAdapter_1=SuiPricesContractAdapter$1;class SuiPricesContractConnector extends SuiContractConnector_1['SuiContractConnector']{['config'];['txDeliveryMan'];['adapter'];constructor(_0x3161af,_0x48d024,_0x1f470f,_0x3edb9e){super(_0x3161af,_0x1f470f),this['config']=_0x48d024,this['txDeliveryMan']=_0x3edb9e;}['getAdapter'](){return this['adapter']??=new SuiPricesContractAdapter_1['SuiPricesContractAdapter'](this['client'],this['config'],this['getTxDeliveryMan']()),Promise['resolve'](this['adapter']);}['getTxDeliveryMan'](){return this['txDeliveryMan']??(this['keypair']?SuiContractConnector_1['SuiContractConnector']['getCachedDeliveryMan'](this['client'],this['keypair'],this['config']):undefined);}}SuiPricesContractConnector$1['SuiPricesContractConnector']=SuiPricesContractConnector;

var hasRequiredSrc$1;function requireSrc$1(){if(hasRequiredSrc$1)return src$1;return hasRequiredSrc$1=0x1,function(_0x1fc18b){var _0x2b674d=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x506477,_0xe463e,_0x34221b,_0x3f3989){if(_0x3f3989===undefined)_0x3f3989=_0x34221b;var _0x2810d4=Object['getOwnPropertyDescriptor'](_0xe463e,_0x34221b);(!_0x2810d4||('get'in _0x2810d4?!_0xe463e['__esModule']:_0x2810d4['writable']||_0x2810d4['configurable']))&&(_0x2810d4={'enumerable':!![],'get':function(){return _0xe463e[_0x34221b];}}),Object['defineProperty'](_0x506477,_0x3f3989,_0x2810d4);}:function(_0x576dcc,_0xfc41b1,_0x20a0b3,_0x156749){if(_0x156749===undefined)_0x156749=_0x20a0b3;_0x576dcc[_0x156749]=_0xfc41b1[_0x20a0b3];}),_0x8e8db9=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x429330,_0xfbb242){for(var _0x2d5b77 in _0x429330)if(_0x2d5b77!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0xfbb242,_0x2d5b77))_0x2b674d(_0xfbb242,_0x429330,_0x2d5b77);};Object['defineProperty'](_0x1fc18b,'__esModule',{'value':!![]}),_0x8e8db9(requireMakePriceAdapterConfig(),_0x1fc18b),_0x8e8db9(config,_0x1fc18b),_0x8e8db9(networkIds,_0x1fc18b),_0x8e8db9(PriceAdapterConfig,_0x1fc18b),_0x8e8db9(SuiClientBuilder$1,_0x1fc18b),_0x8e8db9(SuiContractConnector$1,_0x1fc18b),_0x8e8db9(SuiContractUtil,_0x1fc18b),_0x8e8db9(SuiPricesContractAdapter$1,_0x1fc18b),_0x8e8db9(SuiPricesContractConnector$1,_0x1fc18b),_0x8e8db9(SuiReader$1,_0x1fc18b),_0x8e8db9(util,_0x1fc18b);}(src$1),src$1;}

var MovementBlockchainService$1 = {};

var NonEvmBlockchainService$1 = {};

Object['defineProperty'](NonEvmBlockchainService$1,'__esModule',{'value':!![]});NonEvmBlockchainService$1['NonEvmBlockchainService']=void 0x0;const ethers_1=_0x3e9376;class NonEvmBlockchainService{['connector'];constructor(_0x43851e){this['connector']=_0x43851e;}async['getBalance'](_0x523cd7,_0x43258e){if(!this['connector']['getNormalizedBalance'])throw new Error('Method\x20not\x20implemented.');return ethers_1['BigNumber']['from'](await this['connector']['getNormalizedBalance'](_0x523cd7,_0x43258e));}async['transfer'](_0x1bdc32,_0x36cec9){if(!this['connector']['transfer'])throw new Error('Method\x20not\x20implemented.');await this['connector']['transfer'](_0x1bdc32,_0x36cec9);}['getSignerAddress'](){if(!this['connector']['getSignerAddress'])throw new Error('Method\x20not\x20implemented.');return this['connector']['getSignerAddress']();}['getBlockNumber'](){return this['connector']['getBlockNumber']();}}NonEvmBlockchainService$1['NonEvmBlockchainService']=NonEvmBlockchainService;

Object['defineProperty'](MovementBlockchainService$1,'__esModule',{'value':!![]});MovementBlockchainService$1['MovementBlockchainService']=void 0x0;const movement_connector_1$4=src$6,utils_1$b=requireSrc$3(),NonEvmBlockchainService_1$3=NonEvmBlockchainService$1;class MovementBlockchainService extends NonEvmBlockchainService_1$3['NonEvmBlockchainService']{['client'];['logger']=(0, utils_1$b['loggerFactory'])('movement-blockchain-service');constructor(_0x40a12b,_0x40358a){super(new movement_connector_1$4['MovementContractConnector'](_0x40a12b,_0x40358a)),this['client']=_0x40a12b;}async['getTimeForBlock'](_0x5b8b32){const _0x54cdf5=await this['client']['getBlockByHeight']({'blockHeight':_0x5b8b32});return new Date(Math['floor'](Number(_0x54cdf5['block_timestamp'])/0x3e8));}async['tryGetBlock'](_0x352fd4){try{return await this['client']['getBlockByHeight']({'blockHeight':_0x352fd4,'options':{'withTransactions':!![]}});}catch(_0x309570){return this['logger']['error']('Error\x20while\x20fetching\x20block\x20#'+_0x352fd4+':\x20'+utils_1$b['RedstoneCommon']['stringifyError'](_0x309570)),undefined;}}}MovementBlockchainService$1['MovementBlockchainService']=MovementBlockchainService;

var RadixBlockchainService$1 = {};

Object['defineProperty'](RadixBlockchainService$1,'__esModule',{'value':!![]});RadixBlockchainService$1['RadixBlockchainService']=void 0x0;const radix_connector_1$4=src$5,NonEvmBlockchainService_1$2=NonEvmBlockchainService$1;class RadixBlockchainService extends NonEvmBlockchainService_1$2['NonEvmBlockchainService']{['client'];constructor(_0x1e76ac){super(new radix_connector_1$4['RadixContractConnector'](_0x1e76ac)),this['client']=_0x1e76ac;}['getTimeForBlock'](_0xd25d7e){return console['warn']('getTimeForBlock\x20is\x20not\x20supported\x20for\x20Radix'),Promise['resolve'](new Date(0x0));}async['getTransactions'](_0x5754ba,_0x425e59,_0x527121,_0x35179d){return await this['client']['getTransactions'](_0x5754ba,_0x425e59,_0x527121,_0x35179d);}}RadixBlockchainService$1['RadixBlockchainService']=RadixBlockchainService;

var SolanaBlockchainService$1 = {};

Object['defineProperty'](SolanaBlockchainService$1,'__esModule',{'value':!![]});SolanaBlockchainService$1['SolanaBlockchainService']=void 0x0;const solana_connector_1$4=src$2,utils_1$a=requireSrc$3(),web3_js_1=_0x2fa597,NonEvmBlockchainService_1$1=NonEvmBlockchainService$1,TRANSACTION_FETCHING_BATCH_SIZE=0x3e8;class SolanaBlockchainService extends NonEvmBlockchainService_1$1['NonEvmBlockchainService']{['connection'];['logger']=(0, utils_1$a['loggerFactory'])('solana-blockchain-service');constructor(_0x9da54,_0x4a1ee2,_0x183408){super(new solana_connector_1$4['SolanaContractConnector'](_0x9da54,_0x4a1ee2,_0x183408)),this['connection']=_0x9da54;}async['getTimeForBlock'](_0x355332){const _0x563c27=await this['connection']['getBlockTime'](_0x355332);return new Date((_0x563c27||0x0)*0x3e8);}async['getBlockWithTransactions'](_0x3c2415){return await this['connection']['getBlock'](_0x3c2415,{'maxSupportedTransactionVersion':0x0,'transactionDetails':'full'});}async['getTransactions'](_0x11ef62,_0x1c11d1,_0x532efa){let _0x2bd241,_0x4bd5a5;try{const [_0x134c46,_0x2a1349]=await Promise['all']([await this['connection']['getBlockSignatures'](_0x11ef62),await this['connection']['getBlockSignatures'](_0x1c11d1)]);_0x2bd241=_0x134c46['signatures'][0x0],_0x4bd5a5=_0x2a1349['signatures'][_0x2a1349['signatures']['length']-0x1];}catch(_0x145eb2){this['logger']['warn']('Slot\x20is\x20missing,\x20using\x20latest\x20'+TRANSACTION_FETCHING_BATCH_SIZE+'\x20signatures;\x20'+utils_1$a['RedstoneCommon']['stringifyError'](_0x145eb2));}const _0x194bdd=[];for(const _0x3b0594 of _0x532efa){_0x194bdd['push'](...await this['getAllSignatureInfos'](_0x3b0594,_0x2bd241,_0x4bd5a5));}const _0x4c5b5e=_0x194bdd['filter'](_0xbb15e4=>_0xbb15e4['slot']>=_0x11ef62&&_0xbb15e4['slot']<=_0x1c11d1),_0x53262b=_0x4c5b5e['map'](_0x3ac7e8=>this['connection']['getTransaction'](_0x3ac7e8['signature'],{'maxSupportedTransactionVersion':0x0}));return await Promise['all'](_0x53262b);}async['getAllSignatureInfos'](_0x248bb7,_0x354e84,_0x45a07c){const _0x22ead9=await this['connection']['getSignaturesForAddress'](new web3_js_1['PublicKey'](_0x248bb7),{'limit':TRANSACTION_FETCHING_BATCH_SIZE,'before':_0x45a07c,'until':_0x354e84});if(_0x22ead9['length']===TRANSACTION_FETCHING_BATCH_SIZE&&_0x354e84&&_0x45a07c){const _0x2e08be=await this['getAllSignatureInfos'](_0x248bb7,_0x354e84,_0x22ead9[0x0]['signature']);_0x22ead9['push'](..._0x2e08be);}return _0x22ead9;}}SolanaBlockchainService$1['SolanaBlockchainService']=SolanaBlockchainService;

var SuiBlockchainService$1 = {};

Object['defineProperty'](SuiBlockchainService$1,'__esModule',{'value':!![]});SuiBlockchainService$1['SuiBlockchainService']=void 0x0;const sui_connector_1$4=requireSrc$1(),utils_1$9=requireSrc$3(),NonEvmBlockchainService_1=NonEvmBlockchainService$1,RETRY_CONFIG={'maxRetries':0x6,'waitBetweenMs':0x3e8,'backOff':{'backOffBase':0x2}};class SuiBlockchainService extends NonEvmBlockchainService_1['NonEvmBlockchainService']{['client'];constructor(_0x19c8c1,_0x193389){super(new sui_connector_1$4['SuiContractConnector'](_0x19c8c1,_0x193389)),this['client']=_0x19c8c1;}async['getTimeForBlock'](_0x125cb5){const _0x1cd6b3=await this['client']['getCheckpoint']({'id':String(_0x125cb5)});return new Date(Number(_0x1cd6b3['timestampMs']));}async['queryTransactionBlocks'](_0x22b7d0,_0x22c951){return await utils_1$9['RedstoneCommon']['retry']({...RETRY_CONFIG,'fn':async()=>await this['client']['queryTransactionBlocks']({'filter':{'InputObject':_0x22b7d0},'cursor':_0x22c951,'options':{'showInput':!![],'showEffects':!![],'showEvents':![]}})})();}}SuiBlockchainService$1['SuiBlockchainService']=SuiBlockchainService;

Object['defineProperty'](getNonEvmBlockchainService$1,'__esModule',{'value':!![]});getNonEvmBlockchainService$1['getNonEvmBlockchainService']=getNonEvmBlockchainService;const movement_connector_1$3=src$6,radix_connector_1$3=src$5,solana_connector_1$3=src$2,sui_connector_1$3=requireSrc$1(),utils_1$8=requireSrc$3(),MovementBlockchainService_1=MovementBlockchainService$1,RadixBlockchainService_1=RadixBlockchainService$1,SolanaBlockchainService_1=SolanaBlockchainService$1,SuiBlockchainService_1=SuiBlockchainService$1;function getNonEvmBlockchainService(_0xf043f7,_0x2ebce2,_0x25114a){const {chainType:_0x2a30c9}=(0, utils_1$8['deconstructNetworkId'])(_0xf043f7);switch(_0x2a30c9){case'sui':{const _0x1626da=new sui_connector_1$3['SuiClientBuilder']()['withNetworkId'](_0xf043f7)['withRpcUrls'](_0x2ebce2)['build'](),_0x46b128=_0x25114a?(0, sui_connector_1$3['makeSuiKeypair'])(_0x25114a['value']):undefined;return new SuiBlockchainService_1['SuiBlockchainService'](_0x1626da,_0x46b128);}case'movement':{const _0x3a96db=new movement_connector_1$3['AptosClientBuilder']()['withNetworkId'](_0xf043f7)['withRpcUrls'](_0x2ebce2)['build']();return new MovementBlockchainService_1['MovementBlockchainService'](_0x3a96db,_0x25114a);}case'radix':{const _0x2e75d5=new radix_connector_1$3['RadixClientBuilder']()['withNetworkId'](_0xf043f7)['withRpcUrls'](_0x2ebce2)['withPrivateKey'](_0x25114a)['build']();return new RadixBlockchainService_1['RadixBlockchainService'](_0x2e75d5);}case'solana':{const _0x5078dd=new solana_connector_1$3['SolanaConnectionBuilder']()['withNetworkId'](_0xf043f7)['withRpcUrls'](_0x2ebce2)['build'](),_0x59887f=_0x25114a?(0, solana_connector_1$3['makeKeypair'])(_0x25114a['value']):undefined;return new SolanaBlockchainService_1['SolanaBlockchainService'](_0x5078dd,undefined,_0x59887f);}case'fuel':throw new Error('Not\x20supported\x20for\x20'+_0x2a30c9);case'evm':throw new Error('Evm\x20networkId\x20'+_0xf043f7+'\x20got\x20passed\x20to\x20non-evm\x20blockchain\x20service\x20builder.');default:return utils_1$8['RedstoneCommon']['throwUnsupportedParamError'](_0x2a30c9);}}

Object['defineProperty'](getBlockchainService$1,'__esModule',{'value':!![]});getBlockchainService$1['getBlockchainService']=getBlockchainService;const rpc_providers_1=src$c,utils_1$7=requireSrc$3(),EvmBlockchainService_1=EvmBlockchainService$1,get_non_evm_blockchain_service_1=getNonEvmBlockchainService$1,SINGLE_RPC_TIMEOUT_MILLISECONDS=0x2710,ALL_RPC_TIMEOUT_MILLISECONDS=0xea60;function getBlockchainService(_0x1e8ba5,_0x2bbd4b){if((0, utils_1$7['isNonEvmNetworkId'])(_0x2bbd4b['networkId']))return (0, get_non_evm_blockchain_service_1['getNonEvmBlockchainService'])(_0x2bbd4b['networkId'],_0x1e8ba5);const _0x51e2d5=new rpc_providers_1['MegaProviderBuilder']({'timeout':SINGLE_RPC_TIMEOUT_MILLISECONDS,'throttleLimit':0x1,'network':{'name':'name-'+_0x2bbd4b['chainId'],'chainId':_0x2bbd4b['chainId']},'rpcUrls':_0x1e8ba5})['fallback']({'allProvidersOperationTimeout':ALL_RPC_TIMEOUT_MILLISECONDS,'singleProviderOperationTimeout':SINGLE_RPC_TIMEOUT_MILLISECONDS,'chainConfig':_0x2bbd4b},_0x1e8ba5['length']>0x1)['build']();return new EvmBlockchainService_1['EvmBlockchainService'](_0x51e2d5);}

var IBlockchainService = {};

Object['defineProperty'](IBlockchainService,'__esModule',{'value':!![]});

var getZrodelkoPrivateKey = {};

Object['defineProperty'](getZrodelkoPrivateKey,'__esModule',{'value':!![]});getZrodelkoPrivateKey['getNonEvmZrodelkoPrivateKey']=getNonEvmZrodelkoPrivateKey;const internal_utils_1=src$8,utils_1$6=requireSrc$3(),ed25519Chains=['radix','solana','sui','movement'];async function getNonEvmZrodelkoPrivateKey(_0x2d6ac8,_0x19a67f){const {chainType:_0x483528}=(0, utils_1$6['deconstructNetworkId'])(_0x2d6ac8),_0x464efe='/'+_0x19a67f+'/'+_0x483528+'/zrodelko/private-key',_0x375f23=await(0, internal_utils_1['getSSMParameterValue'])(_0x464efe,'eu-west-1');if(!_0x375f23)throw new Error('parameter\x20'+_0x464efe+'\x20not\x20found\x20in\x20SSM');return {'scheme':ed25519Chains['includes'](_0x483528)?'ed25519':'secp256k1','value':_0x375f23};}

var getBaseNonEvmContractConnector$1 = {};

Object['defineProperty'](getBaseNonEvmContractConnector$1,'__esModule',{'value':!![]});getBaseNonEvmContractConnector$1['getBaseNonEvmContractConnector']=getBaseNonEvmContractConnector;const movement_connector_1$2=src$6,radix_connector_1$2=src$5,solana_connector_1$2=src$2,sui_connector_1$2=requireSrc$1(),utils_1$5=requireSrc$3();function getBaseNonEvmContractConnector(_0x126e78,_0x475d61){const {chainType:_0x549153}=(0, utils_1$5['deconstructNetworkId'])(_0x126e78);switch(_0x549153){case'sui':return new sui_connector_1$2['SuiContractConnector'](new sui_connector_1$2['SuiClientBuilder']()['withNetworkId'](_0x126e78)['withRpcUrls'](_0x475d61)['build']());case'movement':return new movement_connector_1$2['MovementContractConnector'](new movement_connector_1$2['AptosClientBuilder']()['withNetworkId'](_0x126e78)['withRpcUrls'](_0x475d61)['build']());case'radix':return new radix_connector_1$2['RadixContractConnector'](new radix_connector_1$2['RadixClientBuilder']()['withNetworkId'](_0x126e78)['withRpcUrls'](_0x475d61)['build']());case'solana':return new solana_connector_1$2['SolanaContractConnector'](new solana_connector_1$2['SolanaConnectionBuilder']()['withNetworkId'](_0x126e78)['withRpcUrls'](_0x475d61)['build']());case'fuel':throw new Error('Not\x20supported\x20for\x20'+_0x549153);case'evm':throw new Error('Evm\x20networkId\x20'+_0x126e78+'\x20got\x20passed\x20to\x20non-evm\x20contract\x20connector\x20builder.');default:return utils_1$5['RedstoneCommon']['throwUnsupportedParamError'](_0x549153);}}

var getRelayerMonitoringNonEvmContractConnector$1 = {};

Object['defineProperty'](getRelayerMonitoringNonEvmContractConnector$1,'__esModule',{'value':!![]});getRelayerMonitoringNonEvmContractConnector$1['getRelayerMonitoringNonEvmContractConnector']=getRelayerMonitoringNonEvmContractConnector;const movement_connector_1$1=src$6,radix_connector_1$1=src$5,solana_connector_1$1=src$2,sui_connector_1$1=requireSrc$1(),utils_1$4=requireSrc$3();function getRelayerMonitoringNonEvmContractConnector(_0x1324bb,_0x312886){const {chainType:_0x2808ee}=(0, utils_1$4['deconstructNetworkId'])(_0x1324bb['chain']['id']);switch(_0x2808ee){case'radix':return getRadixContractConnector$2(_0x312886,_0x1324bb);case'sui':return getSuiContractConnector$2(_0x312886,_0x1324bb);case'movement':return getMovementContractConnector$2(_0x312886,_0x1324bb);case'solana':return getSolanaContractConnector$2(_0x312886,_0x1324bb);case'fuel':throw new Error(_0x1324bb['adapterContractType']+'\x20is\x20not\x20supported\x20in\x20monitoring');case'evm':throw new Error('Evm\x20relayer\x20config\x20with\x20networkId:\x20'+_0x1324bb['chain']['id']+'\x20got\x20passed\x20to\x20non-evm\x20blockchain\x20service\x20builder.');default:return utils_1$4['RedstoneCommon']['throwUnsupportedParamError'](_0x2808ee);}}function getRadixContractConnector$2(_0xa6728e,_0x8e3541){const _0x2b0cce=new radix_connector_1$1['RadixClientBuilder']()['withNetworkId'](_0x8e3541['chain']['id'])['withRpcUrls'](_0xa6728e)['build']();return new radix_connector_1$1['PriceAdapterRadixContractConnector'](_0x2b0cce,_0x8e3541['adapterContract']);}function getSolanaContractConnector$2(_0x58069d,_0x289170){const _0x141ddf=new solana_connector_1$1['SolanaConnectionBuilder']()['withNetworkId'](_0x289170['chain']['id'])['withRpcUrls'](_0x58069d)['build']();return new solana_connector_1$1['SolanaContractConnector'](_0x141ddf,_0x289170['adapterContract']);}function getSuiContractConnector$2(_0xabddb,_0x2ea8f2){if(!_0x2ea8f2['adapterContractPackageId'])throw new Error('adapterContractPackageId\x20is\x20required');const _0x165fdf=new sui_connector_1$1['SuiClientBuilder']()['withNetworkId'](_0x2ea8f2['chain']['id'])['withRpcUrls'](_0xabddb)['build']();return new sui_connector_1$1['SuiPricesContractConnector'](_0x165fdf,(0, sui_connector_1$1['makeSuiConfig'])({'packageId':_0x2ea8f2['adapterContractPackageId'],'priceAdapterObjectId':_0x2ea8f2['adapterContract']}));}function getMovementContractConnector$2(_0x1edea3,_0x5ab3b6){if(!_0x5ab3b6['adapterContractPackageId'])throw new Error('adapterContractPackageId\x20is\x20required');const _0x5dd4e4=new movement_connector_1$1['AptosClientBuilder']()['withNetworkId'](_0x5ab3b6['chain']['id'])['withRpcUrls'](_0x1edea3)['build']();return new movement_connector_1$1['MovementPricesContractConnector'](_0x5dd4e4,{'packageObjectAddress':_0x5ab3b6['adapterContractPackageId'],'priceAdapterObjectAddress':_0x5ab3b6['adapterContract']});}

var getFuelContractConnector$1 = {};

var src = {};

var FuelContractConnector = {};

(function(_0x2574b1){Object['defineProperty'](_0x2574b1,'__esModule',{'value':!![]}),_0x2574b1['FuelContractConnector']=_0x2574b1['FUEL_BASE_GAS_LIMIT']=void 0x0,_0x2574b1['FUEL_BASE_GAS_LIMIT']=0xf4240;class _0x41eecd{['wallet'];['contractId'];['gasLimit'];constructor(_0x33fe46,_0x156aec,_0x2186ab=_0x2574b1['FUEL_BASE_GAS_LIMIT']){this['wallet']=_0x33fe46,this['contractId']=_0x156aec,this['gasLimit']=_0x2186ab;}['getGasLimit'](){return this['gasLimit'];}async['getBlockTimestamp'](_0x3661dd='latest'){const _0x529558=BigInt('0b100000000000000000000000000000000000000000000000000000000001010'),_0x450f8a=await this['wallet']['provider']['getBlock'](_0x3661dd);if(!_0x450f8a)throw new Error('Failed\x20to\x20fetch\x20block\x20'+_0x3661dd+'\x20info');return Number(BigInt(_0x450f8a['time'])-_0x529558)*0x3e8;}async['getBlockNumber'](){return Number(await this['wallet']['provider']['getBlockNumber']());}async['waitForTransaction'](_0x153de7){const _0x146d67=await this['wallet']['provider']['getTransactionResponse'](_0x153de7),_0xabb88=await _0x146d67['waitForResult']();return _0xabb88['isStatusSuccess'];}}_0x2574b1['FuelContractConnector']=_0x41eecd;}(FuelContractConnector));getDefaultExportFromCjs(FuelContractConnector);

var FuelPricesContractAdapter$1 = {};

Object['defineProperty'](FuelPricesContractAdapter$1,'__esModule',{'value':!![]});FuelPricesContractAdapter$1['FuelPricesContractAdapter']=void 0x0;const utils_1$3=requireSrc$3(),fuels_1$4=_0x60912f,logger=(0, utils_1$3['loggerFactory'])('fuel-connector/prices-contract-adapter');class FuelPricesContractAdapter{['contract'];['gasLimit'];constructor(_0x35b7cc,_0x257867){this['contract']=_0x35b7cc,this['gasLimit']=_0x257867;}['getSignerAddress'](){return Promise['resolve'](this['contract']['account']?.['address']['toString']());}async['getUniqueSignerThreshold'](){return (await this['contract']['functions']['get_unique_signer_threshold']()['get']())['value']['toNumber']();}async['getPricesFromPayload'](_0xd73ee9){return this['extractNumbers']((await this['callGetPrices'](_0xd73ee9))['value'][0x0]);}async['callGetPrices'](_0x263dd8){return await this['contract']['functions']['get_prices'](_0x263dd8['getHexlifiedFeedIds'](),await _0x263dd8['getPayloadData']())['get']();}async['writePricesFromPayloadToContract'](_0x22e36f){return this['extractNumbers']((await this['callWritePrices'](_0x22e36f))['value']);}async['callWritePrices'](_0x501801){return await this['call'](this['contract']['functions']['write_prices'](_0x501801['getHexlifiedFeedIds'](),await _0x501801['getPayloadData']()),this['getGasLimit'](_0x501801['getDataFeedIds']()['length'],_0x501801['requestParams']['uniqueSignersCount']));}async['readPricesFromContract'](_0x2413b7){return this['extractNumbers']((await this['callReadPrices'](_0x2413b7))['value']);}async['callReadPrices'](_0x2977ed){return await this['contract']['functions']['read_prices'](_0x2977ed['getHexlifiedFeedIds']())['get']();}async['readTimestampFromContract'](){return (await this['callReadTimestamp']())['value']['toNumber']();}async['callReadTimestamp'](){return await this['contract']['functions']['read_timestamp']()['get']();}async['readLatestUpdateBlockTimestamp'](){const _0x27f5bc=(await this['contract']['functions']['read_last_update_block_timestamp']()['get']())['value']?.['toNumber']();return _0x27f5bc?_0x27f5bc*0x3e8:undefined;}async['call'](_0x5077c8,_0x5cf605){const {waitForResult:_0x64bc97,transactionId:_0x478d99}=await _0x5077c8['txParams']({'gasLimit':_0x5cf605})['call']();logger['log']('TxId:\x20'+_0x478d99+'\x20submitted');const _0x24eb59=await _0x64bc97();return logger['log']('TxId:\x20'+_0x478d99+'\x20status:\x20'+_0x24eb59['transactionResult']['status']),logger['log']('TxId:\x20'+_0x478d99+'\x20gasUsed:\x20'+_0x24eb59['gasUsed']['toString']()+',\x20fee:\x20'+(0, fuels_1$4['formatUnits'])(_0x24eb59['transactionResult']['fee'])+'\x20ETH,\x20tip:\x20'+(0, fuels_1$4['formatUnits'])(_0x24eb59['transactionResult']['tip'])+'\x20ETH'),_0x24eb59;}['extractNumbers'](_0x5d01dc){return _0x5d01dc['map'](_0x33b65d=>_0x33b65d?BigInt(_0x33b65d['toHex']()):0x0n);}['getGasLimit'](_0xcb4b76,_0x163ddb){return this['gasLimit'];}}FuelPricesContractAdapter$1['FuelPricesContractAdapter']=FuelPricesContractAdapter;

var FuelPricesContractConnector$1 = {};

var autogenerated = {};

var Prices$1 = {};

Object['defineProperty'](Prices$1,'__esModule',{'value':!![]});Prices$1['Prices']=Prices$1['PricesInterface']=void 0x0;const fuels_1$3=_0x60912f,abi={'programType':'contract','specVersion':'1','encodingVersion':'1','concreteTypes':[{'type':'(struct\x20std::vec::Vec<u256>,\x20u64)','concreteTypeId':'e34c2f53d80f2667116e2b1d557ef6e30cf510868fad2bfd788d50d506cd44e0','metadataTypeId':0x1},{'type':'[b256;\x206]','concreteTypeId':'ba22e94e8d8f51fff1ffb0b61cd199b2386cc65867c2d2793e5c77fb4adad6db','metadataTypeId':0x7},{'type':'enum\x20common::check::RedStoneContractError','concreteTypeId':'0356b29f5ddf4c9e28556be346f1259b84e3f4a3e79b005a499a8a7e39aca851','metadataTypeId':0xa},{'type':'enum\x20redstone::core::errors::RedStoneError','concreteTypeId':'c35d5ab61b0f170d72f36b2bc3a2e791d577f09fc0f50a1983096340d59ce09a','metadataTypeId':0xb},{'type':'enum\x20std::option::Option<u256>','concreteTypeId':'d601d33973e88992430b8137fe37206cc386110534c47d966d6b54014c4f1356','metadataTypeId':0xc,'typeArguments':['1b5759d94094368cfd443019e7ca5ec4074300e544e5ea993a979f5da627261e']},{'type':'enum\x20std::option::Option<u64>','concreteTypeId':'d852149004cc9ec0bbe7dc4e37bffea1d41469b759512b6136f2e865a4c06e7d','metadataTypeId':0xc,'typeArguments':['1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0']},{'type':'struct\x20std::bytes::Bytes','concreteTypeId':'cdd87b7d12fe505416570c294c884bca819364863efe3bf539245fa18515fbbb','metadataTypeId':0xf},{'type':'struct\x20std::vec::Vec<enum\x20std::option::Option<u256>>','concreteTypeId':'c976e1cf37e7eb4e2c7ec52fb45b98828666366f0e64e99c5b8dd1683fcf4585','metadataTypeId':0x12,'typeArguments':['d601d33973e88992430b8137fe37206cc386110534c47d966d6b54014c4f1356']},{'type':'struct\x20std::vec::Vec<u256>','concreteTypeId':'742d7b76206a39cfad7eaec9b457390bbd0a92fe1da596db414daa0e4964bf82','metadataTypeId':0x12,'typeArguments':['1b5759d94094368cfd443019e7ca5ec4074300e544e5ea993a979f5da627261e']},{'type':'u256','concreteTypeId':'1b5759d94094368cfd443019e7ca5ec4074300e544e5ea993a979f5da627261e'},{'type':'u64','concreteTypeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}],'metadataTypes':[{'type':'()','metadataTypeId':0x0},{'type':'(_,\x20_)','metadataTypeId':0x1,'components':[{'name':'__tuple_element','typeId':0x12,'typeArguments':[{'name':'','typeId':'1b5759d94094368cfd443019e7ca5ec4074300e544e5ea993a979f5da627261e'}]},{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}]},{'type':'(_,\x20_)','metadataTypeId':0x2,'components':[{'name':'__tuple_element','typeId':0x8},{'name':'__tuple_element','typeId':'1b5759d94094368cfd443019e7ca5ec4074300e544e5ea993a979f5da627261e'}]},{'type':'(_,\x20_)','metadataTypeId':0x3,'components':[{'name':'__tuple_element','typeId':0x8},{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}]},{'type':'(_,\x20_)','metadataTypeId':0x4,'components':[{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'},{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}]},{'type':'(_,\x20_,\x20_)','metadataTypeId':0x5,'components':[{'name':'__tuple_element','typeId':0x9},{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'},{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}]},{'type':'(_,\x20_,\x20_)','metadataTypeId':0x6,'components':[{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'},{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'},{'name':'__tuple_element','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}]},{'type':'[_;\x206]','metadataTypeId':0x7,'components':[{'name':'__array_element','typeId':0x8}]},{'type':'b256','metadataTypeId':0x8},{'type':'bool','metadataTypeId':0x9},{'type':'enum\x20common::check::RedStoneContractError','metadataTypeId':0xa,'components':[{'name':'TimestampMustBeGreaterThanBefore','typeId':0x4},{'name':'UpdaterIsNotTrusted','typeId':0x8},{'name':'MinIntervalBetweenUpdatesHasNotPassedYet','typeId':0x6}]},{'type':'enum\x20redstone::core::errors::RedStoneError','metadataTypeId':0xb,'components':[{'name':'EmptyAllowedSigners','typeId':0x0},{'name':'EmptyFeedIds','typeId':0x0},{'name':'SignerCountThresholdToSmall','typeId':0x0},{'name':'DuplicatedSigner','typeId':0x0},{'name':'DuplicatedFeedId','typeId':0x0},{'name':'DuplicatedValueForSigner','typeId':0x2},{'name':'SignerNotRecognized','typeId':0x3},{'name':'InsufficientSignerCount','typeId':0x4},{'name':'TimestampOutOfRange','typeId':0x5},{'name':'TimestampDifferentThanOthers','typeId':0x6}]},{'type':'enum\x20std::option::Option','metadataTypeId':0xc,'components':[{'name':'None','typeId':0x0},{'name':'Some','typeId':0xd}],'typeParameters':[0xd]},{'type':'generic\x20T','metadataTypeId':0xd},{'type':'raw\x20untyped\x20ptr','metadataTypeId':0xe},{'type':'struct\x20std::bytes::Bytes','metadataTypeId':0xf,'components':[{'name':'buf','typeId':0x10},{'name':'len','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}]},{'type':'struct\x20std::bytes::RawBytes','metadataTypeId':0x10,'components':[{'name':'ptr','typeId':0xe},{'name':'cap','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}]},{'type':'struct\x20std::vec::RawVec','metadataTypeId':0x11,'components':[{'name':'ptr','typeId':0xe},{'name':'cap','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}],'typeParameters':[0xd]},{'type':'struct\x20std::vec::Vec','metadataTypeId':0x12,'components':[{'name':'buf','typeId':0x11,'typeArguments':[{'name':'','typeId':0xd}]},{'name':'len','typeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0'}],'typeParameters':[0xd]}],'functions':[{'inputs':[],'name':'get_unique_signer_threshold','output':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0','attributes':null},{'inputs':[],'name':'get_version','output':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0','attributes':null},{'inputs':[{'name':'feed_ids','concreteTypeId':'742d7b76206a39cfad7eaec9b457390bbd0a92fe1da596db414daa0e4964bf82'},{'name':'payload','concreteTypeId':'cdd87b7d12fe505416570c294c884bca819364863efe3bf539245fa18515fbbb'}],'name':'get_prices','output':'e34c2f53d80f2667116e2b1d557ef6e30cf510868fad2bfd788d50d506cd44e0','attributes':[{'name':'storage','arguments':['read']}]},{'inputs':[],'name':'read_last_update_block_timestamp','output':'d852149004cc9ec0bbe7dc4e37bffea1d41469b759512b6136f2e865a4c06e7d','attributes':[{'name':'storage','arguments':['read']}]},{'inputs':[{'name':'feed_ids','concreteTypeId':'742d7b76206a39cfad7eaec9b457390bbd0a92fe1da596db414daa0e4964bf82'}],'name':'read_prices','output':'c976e1cf37e7eb4e2c7ec52fb45b98828666366f0e64e99c5b8dd1683fcf4585','attributes':[{'name':'storage','arguments':['read']}]},{'inputs':[],'name':'read_timestamp','output':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0','attributes':[{'name':'storage','arguments':['read']}]},{'inputs':[{'name':'feed_ids','concreteTypeId':'742d7b76206a39cfad7eaec9b457390bbd0a92fe1da596db414daa0e4964bf82'},{'name':'payload','concreteTypeId':'cdd87b7d12fe505416570c294c884bca819364863efe3bf539245fa18515fbbb'}],'name':'write_prices','output':'742d7b76206a39cfad7eaec9b457390bbd0a92fe1da596db414daa0e4964bf82','attributes':[{'name':'storage','arguments':['write']}]}],'loggedTypes':[{'logId':'14077507748414560013','concreteTypeId':'c35d5ab61b0f170d72f36b2bc3a2e791d577f09fc0f50a1983096340d59ce09a'},{'logId':'240576027655359646','concreteTypeId':'0356b29f5ddf4c9e28556be346f1259b84e3f4a3e79b005a499a8a7e39aca851'}],'messagesTypes':[],'configurables':[{'name':'SIGNER_COUNT_THRESHOLD','concreteTypeId':'1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0','offset':0xa9b8},{'name':'ALLOWED_SIGNERS','concreteTypeId':'ba22e94e8d8f51fff1ffb0b61cd199b2386cc65867c2d2793e5c77fb4adad6db','offset':0xa8f8}]},storageSlots=[{'key':'f70207fd95bebb96e4a11ad8dcc79ae69597edc049c7457d7c65a8c6a07a7f76','value':'0000000000000000000000000000000000000000000000000000000000000000'}];class PricesInterface extends fuels_1$3['Interface']{constructor(){super(abi);}}Prices$1['PricesInterface']=PricesInterface;class Prices extends fuels_1$3['Contract']{static ['abi']=abi;static ['storageSlots']=storageSlots;constructor(_0x4cbe5d,_0x49b147){super(_0x4cbe5d,abi,_0x49b147);}}Prices$1['Prices']=Prices;

var PricesFactory$1 = {};

Object['defineProperty'](PricesFactory$1,'__esModule',{'value':!![]});PricesFactory$1['PricesFactory']=void 0x0;const fuels_1$2=_0x60912f,Prices_1=Prices$1,bytecode=(0, fuels_1$2['decompressBytecode'])('H4sIAAAAAAAAA+V9e5wU1ZV/zXsAgRrmwdjDoxGE1vgYEBQ1ajXTzcwwjNQIE5hI20NkwhBBxxYQX0lrXMVEs6PxQR6bjKuJmGST5j28dLJJDNnsuph182Pzc7PjRl1MHDNZo8GYxN/3nHNvdXVV9Qxm8/v8/vjN5wNd1V331L3nnnPued1zQ8P1xibDKDT4b8fJxPsDBeb77xsPGsZR+1fDhv2KMWAPWkb45AXGqvcGC+33Bos3GUXv47cB/FaO3wZyfyu+D/CM0Bs2YIzvTDQMrzejxkAo1mmkmgptM16VDr1ueuAVfyfUeMxIDlXcp55ryvPc19RzfXbjESPg9wdCLccMe9nuevot9GrYCL1c733mqwQjtdQwI0NVA4BTzteNe3C9L62vA2D/HbWzl+1clRwyP5QcCp9jN2bMVBOej89P2y2HbW7bDJgtO5uSQ8ZZKcuow+fZdsPOk/xbdBZ+Oyzvo+caD9fydbwY70NfX/W9sy/UcMzYYhXdCTx+gvCINrbdsgt9MFoAfxw+l9oNu7a64Eey8PdlRoG/TcFvAPzrXPC3AW4b4I/F51WAvz0Lf9+AC/6xUeD3CPzC7wD+Bhf8HYDbDvhhfH4E8Ptd8Add8IdHgb9K4Bf8zAP/KOB2KPx8FPCPZ+Hvl7ln+PvNUeBbAt/4LeBvdMEvB9wo4E/A5yLAl3kU+GEX/PpR4EcU/DTgX++CHwHcOOCfhs/FgL/QBd9ywe8cBb6p4BcC1m0XWoZhNxxushv3gD/Ao77nS2ro+UTcMBLNRkGi1ShMtBlFiXajOBE1SuyrDwGvFbckh2bcmhyae5vdeGgwORS9PTnUdkdyqOCTdsPe46HXOxlu6GXDA3vWqzmwo0Yh+HRH6HUffz4dWobn2uqNRHs9+lBfaF99kHjewnujeA/wfbAW723Ae2PoR9xu3Ivx0Hsxppe9YwoP+9/b3wN4mLsZEwHPtBt2D1M/qL2nL49TW7txZ7nweXEa+Bvm62gVrg+d1NeET4+MlLYt/Sf0fNEceeB/g2TKmVHTwPzfQPOfaBzuMeMmyRDi3XCkuXgg+YZxiR0NE1+H8a4BjP9oKmY0gR4sjL0veC5nfFP6njnK7UAj6O8qXFM79MXb3xnfkv4eJJrCe4m+9q4SugrE63sK/oksbg71ufEResX7jjNWS5s9ncF9Lvp7BVPwKvgezOL7YP0I+I4rfAuvB+P7So1vxQc9wf0oftBPM4cyoJktoJmbQTNbQeuAH0QzM9dx23a0bUPbDrRt2N0b0N9f+99xAHTZdh5o+/zk0BrQtJc3pheGkrQG7T+GNej3WIPeg3z4g92wb2Ho9R70Bf3x8V3Rk/yeLrxnPd6zxigMbTCMmujeAciFM+2GfqwlD0JOPg5Zc+d4u3H3YJ65+bmam37X3BzLzs0BWQsD56ZQ2rb0Ey3mmZui/8rOzYF+4OEi4GEh8HAx5umE9CkTQIfTL1f96sT766VfB7bxNfWL1/Kg8UwPqXa9eDYi7Y7U8jWPZzfxPF8nGjKTKqMGydHzcL0G1xbJVPDsBSJTd5fbUehCjUcstCFew3v7IbMexL/HC4DXQqxr3aETpJOQbPSN/VIae6IZcqDVLEjEzUL72gMLU2sBa02phfFgjmZA55h7DmjwXIwJcjOdhy8n/8Q739DHIOP2n0gO9f4xOdT3p+RQ+n2srXboBOElCEbRZC8Mc2PG2mwY92PMNyo5lVJyqtslp+Z65FTaJae6g+chfKeSsdJO5BSty3nkVPguJadoHdRyqim/nJr+gppnkR08z7tEZsnclqq5nYjrhHdu8d01duOu7uQbZmuqqejEpGhxGjx3JfSshVhTiZZJfy4BzCaMv5m/j9H3xZi3wxm+pvE37N4awBdvOjKgFXhuw3tJbnQoeZDcdTLVifaJ2UaiZee9lc1hY0uTMQd9Sgb0sxO6QR/kwm+TQ/VvJ4esdzDH5UJzpAd78VL4FR/NLd8Pvgv/Du1PAs67aB+WObOC2n/OK7+Yzhr3Q3e0f5Mc6vxv4OktyMlhobMgnaDwjoC1uR40Xgp6L4OcLQfejgXL2cKDal6J57Q8GsjKo/6m/PKoQNq29IveGSiPCr/nWStgbwTRb+GPRtaZ+oHLiukYD3TduTPsxgP4jM6CfDsT45ttN+zZll9nKvqTD3bUKAK8XsB7EPAeAozPo3+QN7uxpvr69hH/HB84llph1EbaSix75QHIhBmXAc7lgHkF+Kg29Drm+lU7YL6n+eiF+gKawZoVfhM082vQzDBgYDx5aaYgYL6hy1VgTDOKMRbw0e4862qhkvM7SUbr+Xb0Dcg3e4T5lrYt/TtGmO9GPd8evegT8t7ddvD8Fzyi6FDeL/3qyfZrX45O5Glbq/ol9lVwv2Y4OqJl1aIfVp5+3KT6EXb1g9ZE3Q9a5/L0w3hH9WNb/n4UvK/78YhhfOrRcm3jF0K/7jNCjb1GaDnWpGWDgLPT4RX/WmewDoi5x9poRO2Vu8DjO8tDr4PmfHNuJOhZyNBwZIjk6S6Trxv24Bp8j+u6WLFlxotl3W3cQ+sNvqvyfYfrwrr4rKDvi/J8X5zn+xLv96BJkjUDhPPQKtPAulBaE11La8oYjA2yYxetPfw7xlAPOAORNtiWvzVo7ajEM5E845/qmlPRKwCPruua16bN5uI02dC0BpkdnbQ+T32I5uPdemM75ucxzNOSkwbNV5meL5krzFPLoJEEH4bexhy9G9bPl6nnp2fn14ANrOYXbSCDjJRN87EAeij6RdfL9jrfm60LjGS0nnBAuGH4DxGM7Dumq3dMdL0DfKDfITTk0M8vMjk4wRjnueinAHQA2vHhbRw9g9+he8NHEzPKaT0mfKMvtS78TPSON9SIftA4id8wpkQbz2e5GY0pfEE2+cdSlItfak/P4t+7pn62SD17hWvc9d5x28vR3xXoL+Qz5GkRruGnilv4PszXy/daWF8MMx6zkugj6yAthOcwja3eNbYrvHOP98EfIP1jWTAEem3IOH1Fe9PVX00L7v7abloQHxp8D7/KnSPgv55seDUWM9JWDZnl9SEac0LLjxmVoJfKVuDUhg621JgCmqoHHZmR1hLQgNf+Mc5WcK0R4LK8dPAFPAY8U070cVbbfDv0tkXjtl1z+kHwVjAC3v6neHfJWAPPZ/EOHEFe+HBztd9vkrGhB8KHZ8O+qz8N7UzhK+gbPr+owfaQ0Lxam1dmutFuPGCQn2siydw8cmoly2lFD0yTWd5Pu3Cr5dH7rrH1BvDAVtFRqknG10aGYrAfmC5qI42QNclMaeLqTFmiMVOO78rNtmqjuj2e3rLCKCBdHG0L6zq6rNmrDCMydZMVWt0DftlkEf9iDPDN9oyBfgq8WOMAt5bhxkvot06+jlbTmlPLMkP4qtfFV+8HyK+m7PwWG7Ob8H1TD80TdJtwEX2Hz2LYByWYf4yH/MUYz1Jct+whfyreCVtHaKHJRQtaPrl5sNtDCzb3GfwCvBNsGgfZUrVYJwcSyzIlsE1N4hnMZbndapWzfGmF/teAsbNfMSY+XfIjypx1/1/gB/ecd3rGoOwMH02e76Vpr6zfbBRcH7oa/J5003aP9xnWOVKrqK8lWEOBM7pu2JsGj8B3Iu087/4+80MH+CEh/JCMW1gD7IJkvB7XnUXJeE8xaKpE4azThTNNI+4xb3WPOWAcfTRWWkPr2mIDsyEPQ3YP6MaCr7l+DGhnbGg1/DZtmwa22GRvQgbSHKs5Q39raF3A3GJt5vViFV+r9YKuzbY41gyL5Sd4OwwchCMr90IfFJ3fM/4yM9FDOkUdxrY1YGxumszREexWwyRbVtYuyF//+hAJrYTsR38wFubZgDX8bPSzPr8MD/03zw9og8ZW19ZumFHwsKw5YVkbxA7xwP1wAvoJfBhWErJO6QRu/UTTe9CazvQdsKY786yftZuNcrLpZW0zaW0rSrSGaX4LaX5ZzraHjeqOuBVK1BtbVjEeJtCcQHYZJLtIblV32Pq3MrGL4Od72TtX5pPJKGilGfOI8bj6FySrwp41HPRSRfwfDjVmDPLbKJyEXTjRcsi9JtWHlgPOSsC5GuMVPYtkieD9v3xzXu3YfsAj5J+Kk8QCbA3ARhwv2W7in1GQbA8Xht62lX7T6V1L3HSYMzZa70bQJSYTv81eKnxW3Y45kPVjTD663WwUXkVjgO4+ILKgHvTAvO/G1V9GXpa975IdLUdDSbS/GuNaiTVyOcZmWVijppw0G/cA315b0DRZB2qBDCAZAXsuFWuupWdFZmCtgQ8Y81VaE99jbYlNeAN+pJvIr5dai+fW7bPsTmvgQzHDaIhDD24Zbg2vr4L9M/8ow1C2SMqakjEbyC8CPR2+fr//YuJ4Zb+QPcw+VrTZRm2yvtXdDypf1jj0YZP4FvEd3ptaekmtuQzrI72vtTi9JUY+OvF3aTjkd03FWnbk9gv39A7dnmzGVthr1pJh/p7uo/Nd96en3e1By9v5Gv1LxRpzYCca+t8mf6HyGRbh/h3P/e9c9xNS1qROekfyjUlLNSw7btaSfMBcwC7B3DRdstBsYfuS/YagwVLY7v3JNwoe8/6WshYcU2Ngv6Jfbk78JOG8EnwGfBE9F4SifZiDw1tZ94g/nLabTVr3QRebBnBNegj6cfcA/C+PpqxYWM2PxeNfi3uihzW99RjbZ1KxhScUPhiWn/Zq/41orxrzZ7ccMTGGv00tjfTxPKyGT7f1TI6t+9f6iXelYhcbo8D+e4It7b3jnvSs+Aom9SsYhcmhM1amms46zvgjfzL7NWhN8MqbidcSP4QSGdDVxRGFX+hkDwfgt5bjejXRTTS/5Smr0pD5LYSv5ZImNVcRNY+PmBt7rNB6hmuNAvezAvdJgluAdfeMlFVvutukYjOY/2QMtA548TPpfuE3+EkcfquX8RBOow+nU00zDeqjwIBM8flnJt0mvqDdvcAZjQP++COEP+LXATtukG4J2LPAV6GtCte28MbuZYqXie7gm969Qt2PVb/x2Fy/GaEY1kZ8F4KswfdTUhZgOnzd0JTL185vEfW7Rx7hecaX/j7areae4xMpa5HIHhWfeDw+KwweKTTX95Gesw7jXJV8o+KbqVi95abDVNOsPsEZ0R3h3Yez80Te7iX5CpyRvK3vUfJWcNUUMbMwfO2vkfb7+5yYRpzlA8ZFbXPpKmXVDSi6wJzMsoDLrYRnwqHgkvwC1SfUvMO3esaRVNOHNC7AB5QvENSPCY/bid5a0OqqLN3BfvLR6uRBopFqzB/kylHg7AuppnMYRyPz2YT7Qj34fv0A8UPPKO/4oYsfwGdV3Cfw2WdTTZcyLl189qh5Y58V2shwZY7zw90pcPe4+Gyui882gc+mmlk+Ix7x8RnHx+DLlxgh097chVk+2wSamcpyOxu39M15qYpjufjsGYpHBPGZpnPNZx0ePrvGxWf0m5vP6LcgPjvq4rNuD5/p3zSfaZmv+axb8Zn6PrrNw2dq/fXwmcQQ16Usk/kUa+KYVGyuneU1xltnlk+C5FNFv/DKYYoRKl6btzCX16YN5ue1iv9U7Uk3CuC1XNqC/MzhNT89VfyVWneE3+E3Br9dmWo698To/DD+BynrAuFTpr21oL0wj4Wehz0/hmOag/j3714arHjOFY/nuHfK+rDwrYp9O/exy0T3c57DPX/fqOU32ZHO95jzWvzW6f4tBHuE+iN+7dPmpiy0ZRgLXLKSYJzBvES4x5iK2IfL/fet19925XoourrsuOq/6F76Pna57r96Dvf8/RK91vO7Ew37n8t+t2CVwr/Sf8+oF7zCBoNuIDHRILxO4pw4FWfS79N4Vf1S97HLt3v6tV2+j4dz+rVs/0+BF6UrB8W2Kq9X71yYxWPcJU/onYDJsGPl3nnBnCCXo/Sr0N3K5ZlLXHoUnvHpUTWcl0fyG+3+2nlXrJrlXrYPjSwHnD5swP0NyP+zFtpZmsXzsTO3OfKS7QDv+6p3y/j2dgNWk8C+SOiH7lnPnuXSbXztH1DtM6yXUvueih7zJuTyWbi/scpI3LzrvES0tywVKzpRFy22quNlsGtYBobDuCYcIGfhSj9s80aRB89S7Au+lrm/SS2tYrvhGtiGyaHCu+2OejPVDR2547m03RGux3VtpONC0NZ5Nuu1q1ivVfLGq9ee9o/V8RcNaC5aHz8jTPfEH4ufDQf0p5XzU5tqWIZJn+a9lFpaG5Y+wSYeKoJPD31ahT5Ff5BGzkU9rjEXC4DX84QGnfyJIF35tKeoPykr4pI9gnsP3l+TtfIV0EnJ91JLMf80Xms22zQBz18n87RP2Ro0z838rKahUDfJkbNYZ86vC1cfFZl6luZ7Xhv8dFz9DOGK5pv0BOIF9HMb4Ndn4c8Pgp+RcZEsK3rB6WOssTeH/lfh/mr4x2Bvzsa/kNWDZ0zuE+iiCLpIccqq0DKLY6v47jLY2jlyNYRJR5+UvMynl1Qr/f9Fypf9Pfqknm/WOrD0qRv31+1Lh9YyTFln88PcIjAfJpj3pZaiLc9fmPHvf/60Qpm/fsrrUvMHx457/ngdOFvJi7z45bxcFQMd78CImRH3WOwo7NAmouHvSxyzvQoxAxv6yViM/1yXfghbPTYnk5UP5OP1ybSJqu+U26Pk8blahipbfg7PSx4Z87rS6ShWq8be0psj/zoxjmv3Yfzq+9jZLt0lSM5W1xB9ViJnYktTYSk+rS1NBS/S+lOJ/PYtsYLr4LvIXYPX4h72NnCsdKx8PFL1PvU3tB6OtSh0X9AYcL0ffVN0c7b2aeTpWxXnHwJ+IXKagF/dj7O3s9xZTetmdYBvruplkU9G4ekYA/w0JGfXpbpPLye6TL5ROSMLa+5JN6xUbJrCf75crYlRkcWHOtEG+he1uUBwTPfxM6GfTR/Ir9tNvE61z+B56HbUXvoShn6cWj3PNJN74eNCfxI1GPM01hUkdzKwPyr+fmibvL8EvHOB4JfuowR/+mB+mprYqNof4/5w+3NlTaX7KI3nvHqFI9XfOcNZeEF5W9X3KpiUhyz+qmgf2SFC402X9DA8i/D3JOn656ZitYwDzM3EVBPwwe+bO5jFxWzM1TRb8Kpx4bPdfib2yqFamRvGhfgWGBc8N8pODvSxFKv2NJcYa8kA+L88iwd3v6tIhxHdiu7jszCOgoLQxmNGGLQOnyWvpbAlnoHdpWSL9pFMY90nf77ohB2CP+QPOrbbPC3D2SeJOWXdN3hOJ3B+JdqT3s34NzcjFmPNdelK5DOYFsniAnzqx+c9yv7rduFT1sUsPtP58TmB1zC0P67xCbtL9D/GKdFSg8hbpr0zBx6PFl+rbN42O9prJuK9heT/JV8r8LmY4tG0/ij70aqM7rdutozVKeuck1mfY6As+mudp1MXrxkwWZ6cq/VUxBWDfHlVdyk5glyWOcinIdqdwr664PGOvYj39iQPnkxtwHgSs4GfxWKr0X3zFkfXCQ163zUWY8CzPD8XHM3yW0mgH2SzUdoCHH0RvuZlklspn6m1kzMkm2G3vgO7NUe+wm7NOHKJdWDffI0V2XSgNyvb5rHe7JJt4fyybcJ81X4wKyvmCo+QfGXZMpXpWPoQlE84Xq9x/Vl5Nk/4JyvP2J7LQ/uVivaFxkSeib/F4eNzd3jk2bGR5VnVcgUzm+MU7c3Ksxw58DDm7xKW/1pOQL59CHbLgMi3SeDJueLn4jWHccL94zUnMEYxnvPjgdemLB/OE30wy4cun6nPhn9ete/JI9dy+ovxiM/EkWtGGWIErKdAd2x0fndk0wV9ubIpzPpn8PyMV3s+kIPs6EAR0aMUPnXeeC69l6Ukf6xwM+bT5ft7kvQu1onlfYg/+eavkv1p0LskZiJ6l9jnWb1rBHlayXov2pM81XpXjs3g3MfO4nnOr9NM4rzeRBxjDHzXaftETlXwGgs4yDE+43KsiexzSi09m20stqXYnvPacpP+lmRQaml1hp5D233JoYf2I4aykPMJmmF/NZ0v8mVEv8+YRrOrl/D965Q1jefXL1PHTFd4ibjwIv5trYvDPoUNoHTRfHripM2ii88nmb7YsSvSgPXpfsO+A7H6xgNzU03zeL2SmKzsJ/PQyPdo7KK3sh0bIr8Z5fFSXnoIdily04soPxgwCuta56fxG/YPmEb1xgvToVuQu76B242FvK6t27hnYDbFXLYi9rqxT/9WxL+t//pA5JbZ6WSUchQR34+do3mC81oD5l3tpRlm3HB+Jq9BoawPazHJaMFbIjos8f87EHjdfAzzUPTxlPUhHfdB3EvwKOu2jwY2CQ2d47Jl1gL2HNbjnDXI7+99WM2nyw/3ocEcf11stsvG8Y1R+Yj6XbHUOm8s9UblBy5R1zTnk7MxU3lexUy1r0fHTFXsRH8fYX0Qvg7ItJpA2bfZKE+brfXk0+2DTyida6/NdsmpIHut4jzlK6C8ZOUTWij6i+MTOpNt32B8VHAOH9ofd3xCVkzjU2KX6t5GRznebZ2lxpiPVyq+4YoNUGyPfb+Qy/BnfJjXAFeMdj58wy5ZSbrn7OMj657jZK1p3C/7jCQ+J/4aR75HlJ8yaMzjXlTtXfMW1XEeyNoXQYcN5e55g87XR/tElO/9CsQYdiBe86/JoZ0/9Y4JskHLEo4tZ+/rmC41/4G2tki8KRtTsBueJZ8B7dv4faqpSmwa7sNPsV/mY5+x1yN3egPGuJ70tvNF1nSTjCzNo++U/Sn7/ot0fCIP/5d9N3QzeJXnWM05YhdYL3J92L52QoNqvgtlDSz+nBtGorH/CemfN59l3LWkj0EW1kEWaF0wT/8qOJZFsiWrH1exvxM6yxcQ9+sELizCBesOdB2djbn8sOi3Fq8lSlcwuW+gySnO77THiudvio4x854rzNM2HSe6EHvy9e/C/43aR6x4B/fiu9Y+DfU97sWfoGlAxWnOlnWO57gUz83mdSW7797LW6baP7hf9ugw7MV6PWPfmXMfm8I84KK3e7zxTeD9/uzzF2s/YT76uFjwf7ZeRzA2sUlEVsOuzO3re6FP43nHL3iOxy8+R/nP0P61IJ2y4nQ1VuIJLeu1H03L+qzP3O8DfkvJepELIic0n7Oc8Muusb+QMVZrXimBfvJ3qSbQMubJbg6DrjCX8NGktk7uMW/bn07djrm7ZQ5yQAbDfN38FOWDCP01v0a6jNjkzKfBawBwW5XFUy3TDvwMY1NNeJe8N2yvB8ytgL9+TjrRcuC8miXFabWX7XTEjXvVOyCDSBZ44ZsneVwYd11zBOs2reMLRafuJp06X7/MM0XmFSAnR+w3dQ8e0v2tYJoGL10ImOL3WsW2WT4fxvckV6DkO1irXP45joG47Bzkd/p9SSkVwyC/jY6BSGwxu96xzZzHl7RUrXek2yverNa5HbzeJRp3fa0yPhlzP1nrcshznvcqYgcLlV6LvF/ECzrqaY4RzyiFbP7FGE/8QNbQEeMHpY+ZtwwCD6WUj2WLbqFjT/NzYk/wNTOeVDwwmj8eOPYhFQOjfVQ6nqn1Gx3PVLH9y7RPXMczlRxYomlfxzP5e4lnLsnx1SL3S83fAh231fFLlnejxy/HcZ4V+kt6pY5fip8kG79UfpPLJT6djRMq/3k8J96QuG7/P0DeqjVvgfgGsv1iO071q3iEfrHvHf2ifWf6fTrWpuOXykd8uY6f6uf6Vb90zpv064b9P0O/VKxhQZ+nX9xf1a/SEfrF+3bQL8nn47ZX6Fwz1S91H7tCj10/p+Z9iefd8r19I+bXwm8qt8+ET6tuM9mu813xI6ZF1rWEpqEvBPZzDNeLQD+p7oCiryu0f1DRobqPWXpe1XO4p/7QngLnneo7psE464cu3LHPMPQ68hx8PDZO+WpQ+yMbE9byQseEVT+ac+O9t5Mf7500YlsR6A7jzfVllOuo6H1+jk6UsmawDHHyLYJxovwKuwUHMi7t71Q4Ufcxi3NSXc8xD6h9uhon8h3jpFk/L79tAp/eDP12A77nWPPFOt8RY34xQGefcETpVtFK6FVi8xSeSNw2vBkyCu3nu+JuL1IO3SpXfgXir+Iv9OcBjFH21m6KB2l5pNdgLY9U/PQyzS9aHileadJ5O1oe8fdq3B5avtgViw0c56epPxzHiC1w2Z6k85+h/FP5bM+xs9VYZD8ov2++HkuePaFjS0inTlkYg/B97jxZM1m2Bq8P436n3ke2quLhJm2bKV7H+BnuhR7daqazXgTAfVnBdXzvgCMyy4E7U/n7fG15LzXakr2o3rVYy0XFT+o+dqELv9rv57PFEKN0nvfkwMxUPp3A2LvkVzbuduI3gJObX3I3cHUv/ARpjA0+mtTt+P1T0JtRT6oS/nnkKOl8QOhsr5B+Pw2/TaHfJOfY5LUCtsUE2Blsm0DH6UXOMdlgyPWtoTwnyYt1cugKbsdavoVzwGOnc0wrmw+9h/JJVXzJ/e5i2BjDN0ubJaz/sC8+DhsvFs3mTbPvZZHYC+yrL0UsouoJ1G26KnHz8Fb4YDA2tGdcRj05n4u0jfD+E9Gqe/C7nhsNV/y9Ci6eZ3mGZ58Aj2l5q2lFyctazXuAgb3RzSbhhdvDjmXfc10T4jq0v5a/r0GOGJ7h74FP1/epWKVeA5ROtkTFGbQPQu7txmc4n0jgUi4N28a8FgpM93eVHPfBPfRwekeTrId0z7hV900hsd+53TsDl5Pst9IUvyGaQNy9htc7zP2/6Dacd67hNl0quFP2I+zL05ADewz+gYMYl4oZFt6ANvRuTTc5bcDXas0WmzN7X6fXXtZ1YcNdq/r1Sdcz2h7Tz9yhcxfFXsXvjr26WPt+FZ5xzzAaNa1qO1bkTOxCl61H38/id+bhSeyp47pEJOvV81Va95R5dO811+9oukj0bMYn0d4slRcj8W3PO5ZJnGBPT/b5GuF7uo+SX8RFX9ZkeQfNbZToj3lX8daFmrf02LL2qF9mflWNjXKntCwWXcCRmbXKp1A0BXSidOhGK0tbRIO4x/c9MeM0fZ1qMsUOc3iEaUv62HQpx8NcObqVmE+dX4g1bLGOD5ZLn0xFq5Mq9W8eeZUDDzklOs+X8zKz93Vav2G7GTS1wZv/qvzXUyG7bhHZhbbc5kLJGSQ/FY95JtNccG21cRdIPG7PsSyOorLeOzhYJDmgWubFq/rwbtifqq8+GQxfknU65y7Bhp4NOcy6CublQyPLbuZ11W4SciAns9wD7743UruUdaH22QoOYzNHyGUYq9b0Pa51a4m0d+hI3cegp9L8tTzbJO9+bsDeCP8DtmVGNpZh/lEjCH5+omvYjVpvBw/QPDr3UTMOHb6p8piy9dk/lhyadBfsFCXHtczR91fodVjZ17jn72OaJphfkCc6jD4quY3fyE+x3jQTN/Q/neqZG+G8QjgQIjdOBi4GPD7vCSWhmxAH2bhfxyywd9GnO56W2nBOD+uv2Hoc2TgZvOn1H57Ge1kSiH3gGatu43MDJnyDqQ2hsGpnRTbOEfkDHSQR78MeZtNKIp6SzQGdr30niHXWYF5nKJ+Syq8JzBsu7Vd+CFrTtX0j+mrWvlH6q6V5VOvyysZfnJsnp74XvZb2IBNt4ZmAfFXxsY79phNTt2C7OHYb0eh88R1vpTGVkc2mbCThwWD7pJR1Y9hKLt+BpWWctk+U/WPpnF39nMrZXZxj8+rvld2m44Vab1T4ybW7UmnQPelrFp4Xv2SOju+nk3Gf0zkQYc5/mC+6VXbsbCeNMvaYGjv5IbSdonVibacou/4ynWum7RSlvy7W/lZtp+h9Nhh7S+5vW/Es+Q6tixVM4uNXAuyVcVwTIHwfZL3V7MrHfMWqXgTfn+xPmIr9bK69F6+QfZbNf3otKF+gVPlGd9F6pm0ZPd48tkwp5+wo3WJltj8LcvLHYY/zOhi8jpZfqt7r8l8AN/zeBZKr68zbTGVTB+kB5WeJHrBrkH2ieB4xmW6+jk5O8zpP1/E5aXsxYrNLsI966/n9jPO7Mb5by4GbQY9Mmnh26DbKM5yThk9VZNIvve8t+y/4WiXOvRVwlpQF+FrH/Q3FeBO3QMakIZNuLYMuMgfPn97H78d3kVvKJee6+RWukcJxVOw1NO8YptjJlPBnws58Yywm/L0R5esNUWw43BzG85SDf47EF2lMzTQmX19ulZguvYPiJZWs92N961pN+46azYnXIL6MNU32R2ZrsWHv5DPYx1XwY+c3px4b9pOr2BbFLCGDbpX1X+91mC/5is6egRkqP5DmMSiGWWqrfbZOjU/4V0SOcD0F8Z962pwvPF+hfbS8H4tqzNQhX9aMzuK6IJXRKk2vKi512jXobxv2uKdZbur9vJw/tYd1RrsVa9i1B85MrY30cg4p+dS7yD/e66WXfaF1oJc191hbOoPXMDyzJ9V5jsX5ruhWZE0N8JD2zlEFr2FrEKNHrcK6NY9ijaoxUp2nd6p2qF9IuYVEz3djDcO+e1rDWjGn7IufOP0h2tv8riV7n7Hn2b+nuwD7MXz1QYZljz/XsED9U6pfEJTvZCxUvqF6qR+F/RV03UD1o1C3UNWSQu28YtQSKZHaC6ijgfoYVE9A12CwV+7svritxMZcgLYyW1GLYaK9fCftd49QHSeqvUA1JVAjcCy3ja+AnYCaJcszqF1HssRXg+BuVaOG6htwrQLWnek6TrUbsrAlbyim6vsAF/76Pq594gXZWlxXA1creb95eR3ZltjfZDZjf9NSY7r6LJkun8WnJ4huqd/Y+0bPxbkewHT1WTIdn9hLn+FaT1JnBDUDqM7ITqr/TDiE3ZxBDd0geWdcIPKO9/vz/jC0Q62OIBmLuhD07DL4CtW78CzVfaFcKqorJn1optpTO3ueaC1+HL/Tmk99QE2VnT34vhff93HfWC9FrZWGTPa6BTVenH5kZM8a4hyotVSFujDVTB8dVPelk/CNWlr2SLUUcupegC64xgv+IQ5ulAG+jFlq4uSrh6VrK4xSo8EHI6g+w4g1B0SuZOPBoPtTql+k4YRQ10bXtklGw0YScPAPtRlyak74aoh5+Zf5rPlMg3Uirlfh0LSqpzXRRdPjkOeRxYWWiVI7rRC1vfdw3Zdc2VXB+1bsJPvwkd8M2Xgt00ltZA2u10F+0HUXrq/j+q+1kfW4vmHXUb7eiOsWrnlONYBA+7u6dY0dezn88U79RPAvxc3aSyhuCL2XasvsptoysEuqqbboJ6S/Be+ra+C+4DW6prx78lfj/sfqvkjdZ9R9sbp/RN2XqPsr1D3qltK9gdoNfF+m7neq+3J1f4m6H6Pu3XVrbeh49ci9FHywr2/vMb2fBD5K2ps3Jl++/mZj0o0qVkLPqfYHJfYh9ZpRD/JgLWrf0voouGzg+uv0O+q27tmefy9A4X2uvewatuzNULWgkTdBcovrNEF23OAaj+Pjxft6ZTx3Uw1a9jeMMJ6vqfHQPjXV/gDtJ9HvPI7c2ROroXegdnlEaKJaYoBcQ4rkEvQ69T1qVK1OrMwksLZcY7aaVnXbAqfeDdeBaccas4JqVK21QquoRtVa6xroRhgzaoZ2JlG3qxO1f9ZArilaJJztpn2vXMMD9RrpXAH+HnVVUFOl/yRqQ++Q95O8pPrdsifNGxPAWAdFd+E64wr2AakXAthc/wv3gEF7kvW7VW1ov14OeL9VuBMeytZhVrg7sI3zhrNzSfvdnflDrsRxrl8lObEXqLlciDYET9Wz3L9V51phLikvEjVx8s1lpdTWlNrtuj+SYypzeZTyoEGbqiYo0SafZ6Bpk/XjYNosUDmvO8knrGHLnikZ6zEej/6tBf4GGpvopy1qbGGMjWK0qvb0/iadc4t3Ez+VjjA28SU2Zna43k+xFj02nI9xoAdjo3MDZK1btm9Vll73oJYpwSa68I1N5alnpC4Zz3s/ncmg6aKY7jlnyfl9r6q9FUQXlazHo68unjwgNpfgCuM9QHjQv/Uxvhy66EcenkMXVyrcodY26tQrfw5wR3o952FgbCTzoc/mxd1XVH+ojqZ6Zz/Zkhp3nXhnBriTdVdwR3UuNe5QLywf7oxDCncu3HDNc+FXnvP+o4Ddk9VBkP+YpTnUyM5Hc8ZLqt/O3krgSnKDBY8R4NElKw+gFjNw59Bgf9hFg6g5ihxExhnV5t5DPFY8As5+5bK5ffBQw5dqYQM/PEeAva9f54Eqv3NRfthVas8h+y8EtgMPsFv6bXnPfAV7b5/AppqAu6nfqAmXF7bKw2K/kO63gsf97nb1exJgbxPYKwh2RmpnB8I937tfOwuL+0z2qO4zwe1huGR3NO7enq/uOuDKGQau/IEsLMBtOKhkBNUTP4i6spxzr2l4O/hQ1iqJ2aFGpF/HxjsmKZwQ7Si5ulty5ziHePgqrFfdiZbM+vkFxVfhfjnpCg+RHubomxOVLlzgrm93LMBOq3XZaf2sN0V1TUe2x22NF9R0HIv1EjWgMogvkA2CPdzt1flqOnJtNKpPifro2DcKRwnq8Yid0E61yFCDvKcCa+gk6PWVwOdCV43Hvjw1Ho9l9dCC/0/Gl1PPzVWTUcZHdQOzOi7lxKna4L6avFVvsR8AtXIT7U5t8ALUVkStTQs5aDZqbZpcazNfPvhmo5r3B3J9OFV/NAl/EWraFSSbycbgMaDGoq+28Yi1RNUYmkYfQ/Us3xhQhx91JaGDWTgbw0YdVHOCjIHqtfvrLwHGggA8FAIPWwEDZ83YJmBUUC3TEfCw+BTwMGI9Ure9VI26Z6g9iDqERAc5tYuDaou66sw6+IN8Ff+KZz2aSfV7oc9OBh/05K/TWMr1NNjmg0+EfHm09sJXMkbqSINmKeeZrhv2km+B90nROOVchUyY7Gods1LjR01Znx8kcPw1o4/fbXfD/5Bjd0fI7vbazVRzWp9VoWzxyEi2uLsmNOcxw4bmWGQT5DPGM0rNZZwBdmpzAp+mpeZkOuakd4Q5mZlvTmgug+pmwrc7R7f5M+esb6Q5+8vivsgtEwZy8Qe+pfqJK4EfZbtTTeNc/JRwfdIw/HgUl8Gzne5ng+qSY9y8l4D5FjUr6dwf1I0twtkpcg7EugzOPOupxtkrNfANTfb6ZPHOceSTDTejPt86khc9kBdpyAujgvzW9HxwXj35eehcBledWvhXk62oU9vaietwUbIVdWpbqU5tPeFrwPG3Ak9+f4uB2jCeda4Nfvx2ojkZu6du7VSu5dqOOqUrjCsT7aCb9hVcbyWgBmgr1epNJDpRV7ezwL6WavYSTK9f2WgIXUvnz6ThW04XVCPmuaWb18kq+GtsxI7NyPpS+Nb7vDjcGLoOus0NoL8hjHmoEznwJuwoXz8uCd2AOp4bn0RtXAt1aKvxzyK+oXdUgwdoPwZ4h/LRvbxTsoLwzTyzPIPziXqxhzCNGi02/CQ+P2+Y+JFruTdTfdZOyHAT8ry3KNmcLk4225gT5hnyyXA8FPPTk+UTrWcFyzauSbIUcOFXRwyGa5F+UJ+gvzZvyRSuK/Fn1jUP4NeJFK85xfryvnr4+WVdwW1K1lWOXOu9+IQzXzivETKukONHbYgfUV1kFTdS80D+29Fr6k9012b1yJerIV/gd1d17NlnKDWf5CyM0H949Y6Cs5l/1yj+pTOA4rSPUsmNZaR/mNA/wtA/jAn+PalFf6Q6tvQ91Qry1h8C/B/Q71SHGOvgtYAFGRRmGYS52eG2J/2xqiL2o5IvsUZ8h0tUG/GZBrfh+p/kZ6O9oqq2wCVue9sfazK4JsNqOl8BayLFslYjZkj7SM3W4oHV6DtiSUVmV6m1uqvXAG8Wm+tL06vXI3dig1FibiwdWL0RNTZ7jFLzxjJj9Y2oA4iApxkts2iucU37T0zscalFDDOMmGMktc2oT91vLJwWrx2Y1hxJT72vKj0tvtCaumSWNe2+7cbUeCQ9Dfth5Pv9afn+hxZ9PxX0kuxI419PQbLDKkx2hIsoXkB5OJqPCU9OPSzE7b3nD2DMFM/TPA+ZrOIMoK2ANcwVD/DKZLLxctcv7Cte5JLJl5BM1rXP/TWNaw6QTK5sb9e2SJXdjn290H0rO6Cfrsb8rQI9og419rQX1iU2p7km+hrIItaD0R9PvXXAmEUwk9FO1G9mO4ZqVZnBa20xZBr4sx25pF0W6l0/bOF9pdegNnYCtco5vgw+VWeljDE7SlHPH/ST6BrA7l4j0rHFCPNe6izuJTaieVavcVk548VldRvq+uHcLSX/SznGsQL7krluj9TQjaB/VJvoVPVO0K6FPdBSX9olo5Pw++eR03+pGuJjgWsrTw3xIv4Ncx1JLEAt+BFrhrvPgMEerJy62lvdss3jt/83lzxCfr1XHhW+7pJHUcBS/nK2XQdx3zsCbD4fkuBCHtH5hRHVRvm8A9vs1XX19VkjeG8tyVXXe7FuBNXlI76T95Euiue4TrqKd1JMVM6/0THR+HyOzXnkgPjMA+QAaPYk/n3YRbcnA86WybM+Ym1cNnwb9l8PZGveL7CcmufQ0f1re9GZvLarsxa8dVKwn+sNruOeq19j/fPVNnfThktfZNpQfubAubgqYC4qVLxXzwXOgvDPBfAUdc+FOxbq1598OPwfxjI99sQ6XYud696rmARiOP7z/WrovM5K8Blo9WOooW2iRiHifmz/rU5E03RmAWI3afIZy1nBzQ8H1F6oPYPycmqaZ2l5dBGeJ79x4PN47zflHGzGK+rfP+KbC8C8SPhU+7J951G0KBiYD+1f9dXQv0DqYRC9UTwKOQJ0jTNNcC3nYdM1nzsj78l9x+Q3Od8IMi3RHC5IdkFGdoXpbACqg5xvbJuojYkaD1k/+9oAnBUeoeeork4SuhXRCPtRu9bqMx+ya252jXDTtX/NBZ/RmVJ8LhPpiEMxr67oWncc2nP72HJ4Bfx7u+Jf28W/ttJnOcbs1WcxrrdI78WaSjVH8tivBThr5JgRbeX+ca6GJ3fAzSPaj3aqtriTn3+KfhC3/EJdR++5L16aMH7pPfMFvjPoq/ZkxEJJbmeUv8nS+Ak4N4bycTJuWYR7xG0C5Qqf15snxwK5SSPKvpz8Dw2D5G6Av8zk+I9rzdB2gee50oAzSYJoKedMKHq31jWy60GJRToU9D/4IyycS2nBF4Capo5vwCqi85Dca7VfDsg5OPpsJzxPMWKcncN8rfyY3jk8fcxoZ0kF660FHWrsQWdG5dWzNP2N4ttTZzQ57ZpG8C85MOU8phFpGrXQT9VmhV8p6zOlczjz2KwFnGsKOkG9CMc/tw22awV95/K/Wcr/xvUhXP435EnSnhnZo6Nk0+BIZ8P9BdbFHPyOdgYQaOR/ec4ACsGmKSffGdktdI4i7BGco8q2C8dG+GzcBGyENdD9u6DTSu7iWMRIInVr/io9uxNA1kLfXYP1Vn4r4t8SW4xIV/tAMtprJNs6iT8ohyff2XAcZ1XnCkU85wohJy/vuUJjAs4VctGOs8aMImc55y7iOYsnSK4GnU/knSff+UTIEXS9U521iHOlVE5lnjUHZ8OBbmvaNhPtUg4k8muNcTqvVtHdWYCRceVGIZZNPOA/rwh8sJ/gMT7lrKqjfI2zqsgvG3QeFdp8Rq17ET63Cue9IU+ynK/b2tOPt1WH0bdCdWbVPD7nDf5s+AHHuvuJnD7g0hc7cct031mUvIYE6NN4D2JmUn+Y6lIoH5f7fMmgsy5zdHjMNeWm5pNDlBsSpIcHyaHtpy6HSpe45NC2EXiB4+cYf8QlhzD35jj6ziWHIkoO1XvkUITPvKOcyqwc2h4ghz7I+Zmj5knmwaVzVlqe3Mk851yOisu/UbiszZ5LGchDkouM51y4RJzELKYYJccMyHc/ZMFnbXP+qD7b1eObDLv0TZxb6cOlS0cocOknahxvDd9hvjUAnXOn0bl8IIz7T6r7MN1jDANPtBmN+Bx8os2kzwHw3OATQ/FOapNYOfwps90eQEwz/M2Okmrk2YYTy4fTZptFz1nfbK+qIhuO9vuTH/2JtuJOOlcRtdfv5PPil2fST8l3ODc30/dE4x7KI3HGCf6E3uON8Za55VdAPjhyO/PKroJmJTekrh9iwOSLzHfO9WZjytc5hptADHcNYrhdZiHVLK+Jf438mCXix0/Dj9/LsViqA4Y8EFobKP5O8gvnvOuzK7wyrPRt9o2y3EPON515T9fIS0Q75LEH6USlRzmnyJF71H/kJ9J1vJ3Gcty5XplB3mAPzhpPI/7ROwNzxGeCyzhzzzdESbQLveNU5+BcnJtnXhaUk+/zodG8unIhkF+WNyd/bm5OPtYMJycfvqBTzsnPDLpy8lnfQR8oNwj8x/mgdF5pPfir1J2T7/c9T32T8ICzdAvc7SUu4OTdB/n93Hw2Ut59ed68+/9BXv1mYxyfQ+XLq1c5S55nv/X/LK/+DcqrN0fKqx9Nv3fsy1PUgYpP4dzlU7BDi+8/BTuUztg8FTt0+2h2KJ7luOIHsEPdurcrR2AEWxC6NOzAAujQyha0YQsiJtnaI7bgcq8t6MsBaFT+O+j0fP432dcmnf9Ne1lkXN42U3x4hFyCLWjBFrRhC9YrW9Arn4pfUvYy5VbntZdRu/P7SkdGfoHvjNKRfC93fXDfS9lVo/le4J95leZx0Qfzvbhp02VHZfMV5FxXPhO8mM/35TMMae8zbLxlBJtj+7A3dGw/MMdC4rXLADs4Zou6oRnXWYayTwBnCCO2zPDd8VufjZ3DU1R/cWTedY8Z8b/R+LGkJ4Afkf9mV4KGqihu4Jx5m4cfQVPLgLted/xiBL/Q50bgxx0B/OgeD2qzjzqeJwPGg7HYkJf11SQzlJ8LNueI8mX7Kfq5nNhJwHgyAePJ62tSZ/2XO2cUYwxyJjlsdXxPMsDrK8Z4P+KRHZSzqGUH/MNBsmPqlwJkhyunsH5csOwo+RXniEuMZwTZUfwvI/ib3DZhjs2mfHiB58pCHs3jPpPPyxkX+c59ttW4Ec5Md9t62oYc0TctuVzIT//zfNRu2g3Kc+106XaQ88G6HWQf70V36Xa091brdqTnnapul7m4rZ3ksqO30Z5h6LqZS+MlppozVz6rQ7MFWVkEv8ZvSe7A4JRnCvw5vSW92XN1KZazC/tlvGMq5rOIOK8Lta7FRjO/gxyKDPC8MwSfE/KnVU66/wwetF8vNWbvJpkKm3ivxIuULgQ6oHMGPi3n3g7fzTZSy27atyHnsy7bpWInFGf30trYMSr+AnuC4i/Ye0bXHHPZ5exTyG0z5iUV16H9S+AN3idEMUPR/1p2Cs80l9B+xnqu1cF6ImirAfsEVM0N2qMUVCcE9paqxcD5Hqp+1E7apyJ6ItUj0efuNe6hZ9Qejl3w+wTproUbFTzak6Xg7aV9YFxzBH2iPUZy3bKH9vIo2Lsy2fPIgAdPHQz0U++nIB2W64VAh6UzwHg/NuaU9j1xDUzsBVQ5kb4Yk+jVLTgrztF9de1Mqf3ueV7X0ZPneQ/XzhP56rZhfzTHPNU+A7VPaC/p5VwDlmgJc75Vn4MY3MeSbnNNmuy6HQ8RvTt6t8oB/5Q7l2ny9tC94IcG8MOnQW+fgqy/FfbhFtiHKeQyX4/rT+D647j+GK6vwfVHcd04/FdEtzgn+h6zOQzbpmqQ643SmnQl8tDtqpPmcviHtG+w4RBi4iLv/TJkGtfzS9ynfCKUD/WAgTgF6qWp8yRBl3ep8zEFh43PEj2oOTyAPYVBZ3oUTda1NuBjhVwy9Rl93M5vFxbVCO6fERsH+8EAG3Ztvrkq4hrPmCvRq4Se1BnnJN8rpEYF3XNdVaFND318gmBUL4IN2LJnIcZ5b2ppxQnGZS+tN6fLOuZvt5Vt2CX1yCs0sW8UsHtJhyuqgmy5V8mWbSJbQD+KVgH/28zfCq84h0Kdq6h5/GBg7Tu873bFO64acc9IXSCiy8YD8DsEnwUIeVih2rpqEVbouqlO/Y6AMcq5rYtgk8O2wT7YTVQ3Izl05z8lh258Pjm05p/9/FbCsludfXAQuLhP4eIzTK/3Dn/WvAef1w7fDx4ZsJP75CxK7BcGbn5hR3toj4yqbST1wJJDux5MDv3tQzj34fN0rlMe/Ezw11ucrOvRqFrXVbpOXGDNks3GdDlTp4n8Bmiv/Ab2ssP9nEvVSnsZvLJ9xu+ZxjGfda3Z2r3+dWPMIlmnUWdOalWAB2itOYS13X+GIcZzkn1Qy1DPkXxNeDfqCkqtJfY9LcD+p0NKfvvavqvaUr61alsjtdlU20vjxZNQa1/VmSTao73Hh8BrQbgtqlO4deqZgQ5QF+rlY8mhF15IDn33J35cwt/NuKzSZxTzGsHrY8CZMOhzA/bH0T6ecGRRFfmW3mB5o+pYQN7QXkYtb44Hy5tiVR9st/hyuDaIKTXUGd9yBrOvDc9LldS6U/LNmcf/9OF2Y/IuxOjuRDz3Tqsw9A7vif9+4rHhB8xH7YHE54c/Zz4Ev2zDkR2sc2As2DOGeVL5Pz7ePE2dd7bLqZ8G3MpZBcLXgeeqwL/0G273JeyTJ5x9gfxnNbouIHC4FjL/yEDyzRn9yaG2A8mh6EE672WEflyh+kFru+6H9En6AXsqqB+nqfOJeJ+iqtEzWdePVPrCPvlt0Qri8Z9BH4mkHsb9kmbLfoz3wYUjj9D64NR1lHluOBRYswL0yOfO452yTsgaLfUyF60VfQep/pHm06neeE6tSNorHwyzmM+hAExXrbUaXW9XjeOwyCrGx2HWW4PlbUWZ4hdXva9qfaaQqg+FeuFco5KfYZjQ0T8OHX2d1JdBm17o4ktiaR0bTvWizecPGBcvaTb5t8WIaSAnJ9VbcZS+T20HnIc6pCbta167bsZM1Kjjej7g/V45Q6QgBfn810o+9/JatYz3M0JmsDz+Ls48dcnjSaqGO8kL2md6EP7zIJqQfStYb5xatKjx6YyT9knnx13JYdWW8p2VHJ+kzygZYa0qXu3k2fnGPp7rP2E96gAsfX6nHoPS4XxjUDW94Z926KEqp3Y25KXSUX1tO7jtY4h/EC8+wrypaycSH5APKVyHdZXyvOksSPtLe7fDb7sbtebrk29az/GZACSLlqxA7asqdVaS6Jx4L/Rsf31EvLdB7YWmveNK/lVI/TG6XwxYSyu2s25D/Nd6FvK5DsJmya5ZoX/3ydQfKR2L5k/4clEn7XFW9fOrpca7hXPSF69VtaD2dIJ27nd+U2eoQ77TPnFbaH3XN3LjhfsHpeZoTU49Qch956wayH3IryC5X7JT1VVwzheH3JeamnnlPtrI2Q1SC9mxDQ47tcgC6jfAT8i4oPx9JSOP0LqkZGS/qtXgfdd4ps3c+vA1UoPPkS3PyL7iRWRTPUM5fcqmOpD3HDfEk3S9Bed8D8hayhP4MXRZyQvks9bDlF9Kv1MtEKFJPqsk82jumfaZ32fPtM+czD3Tnn/znmkPf2XmXcis9yqxt1bV+KT9yw8qmfKQ6L/7ul367wu5+q/CQ2yS1Pvj+aJ5OAhcBs715WqunTUeNq1c0/iiqBms4iCob6p1XK4nC1zmsZ9LpT5c40637Nf1GZXsq1Z15xz5D99bPhk2SZ0XynVUtPyXWstZ+S/1G+UZLf8XQ0Zz7caL4sUG9Ag6Jwt72Q8E6Koz2bfIPhLkq7PNRrk62EOAPS2FvLelS+WBXbd/uz4HCHvM71W14T6K972l5vtcuuYzcpFTkVuvZv928KUJmoQeXoGaTXO/C13i70HrFHtCfJ5syiDanFXHsU7k8ydaZV+uvfzI1qw9eqQX5xbtArzdgLsH8BDDJR9XED4nsv7p9gdx7ov0DTJjsq6xKGtN4+FB6Dxfhn3yN7BTvoL9/E0So5P9QJ5+xgP66dpjfgT7zWY8hX5iL2HF04C9bYR+8t4dTz/PRF2S7ahljZo8h4/CdvpCcujBLyaHCr6E+gH1UpfAv8cQ/eJzvXmPIc0v+zaPkH8OsVKKYx/BHqUZ30K//g6wvg3dJG9NNvTry95+2cuexX7Hil8DxjDa/wa6VuA5+eiH8ocgVzpbE4Z0RF27oBv8/xvQ1X/n1i6AX+PdYfF7wN9Bfg/332f73zp3eOlnu5rv/dm3//Wy6zof/MV+oCr79/Nd56+46YEVj21YOvHV5zdan7OO3/0F9+9tzxc/03L5vJXnXPmjyqtmHFtf99RPCt2//3v3ud/+wdPjf/LIC61PZp75UcScvPcZ9+9f/uiJLy955xvznl+16oGD746v3dG+7+fu3393z9Nj/rXj7Z//50vrSo+/umNy5IkvggP5r2Bd16bk5uvX37i5K3nT+nXXd6WSm7pTXTd137ABB4Tjj37f0pW6af0N1zv3Pan113bdJABSXWvWJjesuQlQetau2dSV/NiGG669Lrlp/caumzat2djzu8KyPz7yzKFHX3k8dPylH37xtUceGxpo/mH8jtu7djzXd+untnT2/dPhE09/9ubfbb1jTc8n57/y1bLXLtt35u+bq8vv/t6652/Yy/BdL+R7B7ph3Jxaj5dmH/hH/jNy8Cd/H19zXZe75Z/1p+EOqc+VGo/qc9oHhFcAcsr5S6y8/qaVT9pT/+P18xd314X7QH70N5b/H3+oT57Cpif6e19BOWoY30t8dF/dxMnj1e+jjuMP76d+utb43z/5Rs2Wjo9feDjdNbl9zOzu9Rs/UnN08mBi77Y3392RbKv+eSR5z75b2x8punnjttd+HP7hu/Wz/3jXpF/enwx98uL6B8ace2jbH772xCOv/NOEL27avW7DlPu+8KdDJ1b8c+vDP7Gef/PGp375SP+xoeLQI4fmfX3xnbfNHvPG5h/84pfDW+Mv/EPdxKKP7Ppq4j+WfkW68zQyCOlvx3z5fAorEX8+rD6xQtPf1+G5p78n1fdPfks+v4rMJvrrE7wY99+vPiPyueYl+Uya8nnNH9Snel9Hv3y2HZfPesXh5y6UzzO+rz73yOdMYQ5jJiIO/HmOfNYdls+aevUJa4f+KhTcimH5nFSlPlW7CkgW/gzL50T9qd4/Hjt/+FP1axwyivgzLZ+lL6rPN/4PU1bQDZCtAAA=');class PricesFactory extends fuels_1$2['ContractFactory']{static ['bytecode']=bytecode;constructor(_0xacda5b){super(bytecode,Prices_1['Prices']['abi'],_0xacda5b);}['deploy'](_0x1d75f4){return super['deploy']({'storageSlots':Prices_1['Prices']['storageSlots'],..._0x1d75f4});}static async['deploy'](_0x2e05a2,_0x292f14={}){const _0x3e9425=new PricesFactory(_0x2e05a2);return await _0x3e9425['deploy'](_0x292f14);}}PricesFactory$1['PricesFactory']=PricesFactory;

(function(_0x505dd1){Object['defineProperty'](_0x505dd1,'__esModule',{'value':!![]}),_0x505dd1['PricesFactory']=_0x505dd1['Prices']=void 0x0;var _0x34b493=Prices$1;Object['defineProperty'](_0x505dd1,'Prices',{'enumerable':!![],'get':function(){return _0x34b493['Prices'];}});var _0x3eb60d=PricesFactory$1;Object['defineProperty'](_0x505dd1,'PricesFactory',{'enumerable':!![],'get':function(){return _0x3eb60d['PricesFactory'];}});}(autogenerated));getDefaultExportFromCjs(autogenerated);

Object['defineProperty'](FuelPricesContractConnector$1,'__esModule',{'value':!![]});FuelPricesContractConnector$1['FuelPricesContractConnector']=void 0x0;const autogenerated_1$1=autogenerated,FuelContractConnector_1=FuelContractConnector,FuelPricesContractAdapter_1=FuelPricesContractAdapter$1;class FuelPricesContractConnector extends FuelContractConnector_1['FuelContractConnector']{async['getContract'](){return await Promise['resolve'](new autogenerated_1$1['Prices'](this['contractId'],this['wallet']));}async['getAdapter'](){return await Promise['resolve'](new FuelPricesContractAdapter_1['FuelPricesContractAdapter'](await this['getContract'](),this['getGasLimit']()));}}FuelPricesContractConnector$1['FuelPricesContractConnector']=FuelPricesContractConnector;

var FuelPricesContractDeployer$1 = {};

var __importDefault=commonjsGlobal&&commonjsGlobal['__importDefault']||function(_0x281ba0){return _0x281ba0&&_0x281ba0['__esModule']?_0x281ba0:{'default':_0x281ba0};};Object['defineProperty'](FuelPricesContractDeployer$1,'__esModule',{'value':!![]});FuelPricesContractDeployer$1['FuelPricesContractDeployer']=void 0x0;const utils_1$2=_0x4eca3f,fs_1=_0x1c92a7,fuels_1$1=_0x60912f,path_1=__importDefault(_0x2d3fdb),autogenerated_1=autogenerated,FuelPricesContractConnector_1=FuelPricesContractConnector$1,PRICES_CONTRACT_BINARY='../autogenerated/prices.bin';class FuelPricesContractDeployer extends FuelPricesContractConnector_1['FuelPricesContractConnector']{['parameters'];['contract'];constructor(_0x74e761,_0x2e7c94){super(_0x74e761,(0, utils_1$2['hexZeroPad'])('0x00',0x20)),this['parameters']=_0x2e7c94;}async['getContract'](){if(this['contract'])return this['contract'];return this['contract']=await this['deployPricesContract'](),this['contractId']=this['contract']['id']['toString'](),this['contract'];}async['deployPricesContract'](){let _0x137e7e=await this['parameters']['contractBinary'];if(!_0x137e7e){const _0xebe9da=path_1['default']['join'](__dirname,PRICES_CONTRACT_BINARY);_0x137e7e=(0, fs_1['readFileSync'])(_0xebe9da);}const _0x135355=new fuels_1$1['ContractFactory'](_0x137e7e,autogenerated_1['Prices']['abi'],this['wallet']),_0x19ffd7={'SIGNER_COUNT_THRESHOLD':this['parameters']['signerCountThreshold'],'ALLOWED_SIGNERS':this['makeAllowedSigners']()},_0x4b9baa={'storageSlots':this['getStorageSlots'](),'configurableConstants':_0x19ffd7};this['parameters']['salt']&&(_0x4b9baa['salt']=this['parameters']['salt']);const _0x167eca=await _0x135355['deploy'](_0x4b9baa),{contract:_0x4e70e0}=await _0x167eca['waitForResult']();return _0x4e70e0;}['makeAllowedSigners'](){const _0x48187b='0x00';return [...this['parameters']['allowedSigners']['slice'](0x0,0x6),_0x48187b,_0x48187b,_0x48187b,_0x48187b,_0x48187b,_0x48187b]['slice'](0x0,0x6)['map'](_0x2bc380=>(0, utils_1$2['hexZeroPad'])(_0x2bc380,0x20));}['getStorageSlots'](){const _0x58b21b='0x66616b655f74696d657374616d70',_0x454f7d=[];return this['parameters']['fakeTimestamp']!=null&&_0x454f7d['push']({'key':_0x58b21b,'value':(0, utils_1$2['hexlify'])(this['parameters']['fakeTimestamp'])}),autogenerated_1['Prices']['storageSlots']['concat'](_0x454f7d['map'](({key:_0x2e6ac3,value:_0x5f4e46})=>{return {'key':(0, utils_1$2['hexZeroPad'])(_0x2e6ac3,0x20),'value':(0, utils_1$2['hexZeroPad'])(_0x5f4e46,0x20)};}));}}FuelPricesContractDeployer$1['FuelPricesContractDeployer']=FuelPricesContractDeployer;

(function(_0x3d20f0){var _0x222a81=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x1a1765,_0x5b071b,_0x549e35,_0x1d7a56){if(_0x1d7a56===undefined)_0x1d7a56=_0x549e35;var _0x4c7a34=Object['getOwnPropertyDescriptor'](_0x5b071b,_0x549e35);(!_0x4c7a34||('get'in _0x4c7a34?!_0x5b071b['__esModule']:_0x4c7a34['writable']||_0x4c7a34['configurable']))&&(_0x4c7a34={'enumerable':!![],'get':function(){return _0x5b071b[_0x549e35];}}),Object['defineProperty'](_0x1a1765,_0x1d7a56,_0x4c7a34);}:function(_0x322f84,_0x2e2d0f,_0x28d77b,_0x4ab117){if(_0x4ab117===undefined)_0x4ab117=_0x28d77b;_0x322f84[_0x4ab117]=_0x2e2d0f[_0x28d77b];}),_0x5288a9=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x49746e,_0x505e9e){for(var _0x19e325 in _0x49746e)if(_0x19e325!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x505e9e,_0x19e325))_0x222a81(_0x505e9e,_0x49746e,_0x19e325);};Object['defineProperty'](_0x3d20f0,'__esModule',{'value':!![]}),_0x5288a9(FuelContractConnector,_0x3d20f0),_0x5288a9(FuelPricesContractAdapter$1,_0x3d20f0),_0x5288a9(FuelPricesContractConnector$1,_0x3d20f0),_0x5288a9(FuelPricesContractDeployer$1,_0x3d20f0);}(src));getDefaultExportFromCjs(src);

Object['defineProperty'](getFuelContractConnector$1,'__esModule',{'value':!![]});getFuelContractConnector$1['getFuelContractConnector']=void 0x0;const fuel_connector_1=src,utils_1$1=requireSrc$3(),fuels_1=_0x60912f,getFuelContractConnector=async _0x339119=>{const {privateKey:_0x2b747e,adapterContractAddress:_0x11c343,rpcUrls:_0x1111f2,gasLimit:_0x1ca42a,networkId:_0x240fa2}=_0x339119,{chainType:_0x4d480c,chainId:_0x279d0d}=(0, utils_1$1['deconstructNetworkId'])(_0x240fa2);if(_0x4d480c!==utils_1$1['ChainTypeEnum']['Enum']['fuel'])throw new Error('NetworkId\x20'+_0x240fa2+'\x20is\x20not\x20a\x20fuel\x20type');if(_0x1111f2['length']!==0x1)throw new Error('Only\x20single\x20rpc\x20url\x20is\x20supported');const _0x5a5807=fuels_1['Wallet']['fromPrivateKey'](_0x2b747e,await fuels_1['Provider']['create'](_0x1111f2[0x0]));return utils_1$1['RedstoneCommon']['assert'](_0x279d0d===_0x5a5807['provider']['getChainId'](),'The\x20chainId\x20from\x20manifest:\x20'+_0x279d0d+'\x20is\x20different\x20than\x20fetched\x20from\x20provider:\x20'+_0x5a5807['provider']['getChainId']()),new fuel_connector_1['FuelPricesContractConnector'](_0x5a5807,_0x11c343,_0x1ca42a);};getFuelContractConnector$1['getFuelContractConnector']=getFuelContractConnector;

var getMovementContractConnector$1 = {};

Object['defineProperty'](getMovementContractConnector$1,'__esModule',{'value':!![]});getMovementContractConnector$1['getMovementContractConnector']=void 0x0;const movement_connector_1=src$6,getMovementContractConnector=_0x3993d8=>{const {privateKey:_0x5d2ade,rpcUrls:_0x564e2c,adapterContractAddress:_0x503937,networkId:_0x20bee6,adapterContractPackageId:_0x4233f2,gasLimit:_0xa0486c,maxTxSendAttempts:_0xc7ca76}=_0x3993d8;if(!_0x4233f2)throw new Error('adapterContractPackageId\x20is\x20required');const _0x3556dc=new movement_connector_1['AptosClientBuilder']()['withNetworkId'](_0x20bee6)['withRpcUrls'](_0x564e2c)['withQuarantineEnabled']()['build'](),_0x418050=(0, movement_connector_1['makeAptosAccount'])(_0x5d2ade);return new movement_connector_1['MovementPricesContractConnector'](_0x3556dc,{'packageObjectAddress':_0x4233f2,'priceAdapterObjectAddress':_0x503937},_0x418050,(0, movement_connector_1['configFromOptionals'])(_0xa0486c,_0xc7ca76));};getMovementContractConnector$1['getMovementContractConnector']=getMovementContractConnector;

var getRadixContractConnector$1 = {};

Object['defineProperty'](getRadixContractConnector$1,'__esModule',{'value':!![]});getRadixContractConnector$1['getRadixContractConnector']=void 0x0;const radix_connector_1=src$5,getRadixContractConnector=_0x104143=>{const {privateKey:_0x38f587,adapterContractAddress:_0x1c29e8,networkId:_0x3a5127,rpcUrls:_0x21e998,gasLimit:_0x3f57c2,gasMultiplier:_0x385553,maxTxSendAttempts:_0x329b95,expectedTxDeliveryTimeInMS:_0x3fa722}=_0x104143,_0x451b8b={...radix_connector_1['DEFAULT_RADIX_CLIENT_CONFIG'],'tipMultiplier':_0x385553??radix_connector_1['DEFAULT_RADIX_CLIENT_CONFIG']['tipMultiplier'],'maxFeeXrd':_0x3f57c2??radix_connector_1['DEFAULT_RADIX_CLIENT_CONFIG']['maxFeeXrd'],'maxTxSendAttempts':_0x329b95??radix_connector_1['DEFAULT_RADIX_CLIENT_CONFIG']['maxTxSendAttempts'],'maxTxWaitingTimeMs':_0x3fa722??radix_connector_1['DEFAULT_RADIX_CLIENT_CONFIG']['maxTxWaitingTimeMs']},_0x343c6a=new radix_connector_1['RadixClientBuilder']()['withNetworkId'](_0x3a5127)['withRpcUrls'](_0x21e998)['withClientConfig'](_0x451b8b)['withPrivateKey']({'scheme':'secp256k1','value':_0x38f587})['withQuarantineEnabled']()['build']();return new radix_connector_1['PriceAdapterRadixContractConnector'](_0x343c6a,_0x1c29e8);};getRadixContractConnector$1['getRadixContractConnector']=getRadixContractConnector;

var getSuiContractConnector$1 = {};

Object['defineProperty'](getSuiContractConnector$1,'__esModule',{'value':!![]});getSuiContractConnector$1['getSuiContractConnector']=void 0x0;const sui_connector_1=requireSrc$1(),getSuiContractConnector=_0x52299c=>{const {privateKey:_0x52fb7d,rpcUrls:_0x36fe46,adapterContractAddress:_0x2296dc,networkId:_0x45c60f,gasLimit:_0x440a3b,adapterContractPackageId:_0x4df725,gasMultiplier:_0x15902,maxTxSendAttempts:_0x5e4567,expectedTxDeliveryTimeInMS:_0x44a79e}=_0x52299c;if(!_0x4df725)throw new Error('adapterContractPackageId\x20is\x20required');const _0x39843f=new sui_connector_1['SuiClientBuilder']()['withNetworkId'](_0x45c60f)['withRpcUrls'](_0x36fe46)['withQuarantineEnabled']()['build'](),_0x190f54=(0, sui_connector_1['makeSuiConfig'])({'packageId':_0x4df725,'priceAdapterObjectId':_0x2296dc,'writePricesTxGasBudget':_0x440a3b?BigInt(_0x440a3b):undefined,'gasMultiplier':_0x15902,'maxTxSendAttempts':_0x5e4567,'expectedTxDeliveryTimeInMs':_0x44a79e});return new sui_connector_1['SuiPricesContractConnector'](_0x39843f,_0x190f54,(0, sui_connector_1['makeSuiKeypair'])(_0x52fb7d));};getSuiContractConnector$1['getSuiContractConnector']=getSuiContractConnector;

var getWritableNonEvmContractConnector$1 = {};

var getSolanaContractConnector$1 = {};

Object['defineProperty'](getSolanaContractConnector$1,'__esModule',{'value':!![]});getSolanaContractConnector$1['getSolanaContractConnector']=void 0x0;const solana_connector_1=src$2,getSolanaContractConnector=_0x5d1054=>{const {privateKey:_0x25d62a,adapterContractAddress:_0x58b1c3,networkId:_0x4bfad2,rpcUrls:_0x3ff090,gasLimit:_0xdc07f3,gasMultiplier:_0x412a33,maxTxSendAttempts:_0x1998b7,expectedTxDeliveryTimeInMS:_0x3b3f12}=_0x5d1054,_0x5dc6f2=(0, solana_connector_1['createSolanaConfig'])({'gasLimit':_0xdc07f3,'gasMultiplier':_0x412a33,'maxTxSendAttempts':_0x1998b7,'expectedTxDeliveryTimeMs':_0x3b3f12}),_0x379545=(0, solana_connector_1['makeKeypair'])(_0x25d62a),_0x1fa74b=new solana_connector_1['SolanaConnectionBuilder']()['withNetworkId'](_0x4bfad2)['withRpcUrls'](_0x3ff090)['withQuarantineEnabled']()['build']();return new solana_connector_1['SolanaContractConnector'](_0x1fa74b,_0x58b1c3,_0x379545,_0x5dc6f2);};getSolanaContractConnector$1['getSolanaContractConnector']=getSolanaContractConnector;

Object['defineProperty'](getWritableNonEvmContractConnector$1,'__esModule',{'value':!![]});getWritableNonEvmContractConnector$1['getWritableNonEvmContractConnector']=getWritableNonEvmContractConnector;const utils_1=requireSrc$3(),get_fuel_contract_connector_1=getFuelContractConnector$1,get_movement_contract_connector_1=getMovementContractConnector$1,get_radix_contract_connector_1=getRadixContractConnector$1,get_solana_contract_connector_1=getSolanaContractConnector$1,get_sui_contract_connector_1=getSuiContractConnector$1;async function getWritableNonEvmContractConnector(_0x2ebf87){const {chainType:_0x2c6a3b}=(0, utils_1['deconstructNetworkId'])(_0x2ebf87['networkId']);switch(_0x2c6a3b){case'fuel':return await(0, get_fuel_contract_connector_1['getFuelContractConnector'])(_0x2ebf87);case'radix':return (0, get_radix_contract_connector_1['getRadixContractConnector'])(_0x2ebf87);case'sui':return (0, get_sui_contract_connector_1['getSuiContractConnector'])(_0x2ebf87);case'movement':return (0, get_movement_contract_connector_1['getMovementContractConnector'])(_0x2ebf87);case'solana':return (0, get_solana_contract_connector_1['getSolanaContractConnector'])(_0x2ebf87);case'evm':throw new Error('Evm\x20relayer\x20config\x20with\x20networkId:\x20'+_0x2ebf87['networkId']+'\x20got\x20passed\x20to\x20non-evm\x20blockchain\x20service\x20builder.');default:return utils_1['RedstoneCommon']['throwUnsupportedParamError'](_0x2c6a3b);}}

var balanceProvider = {};

var getProvider = {};

(function(_0x71348c){Object['defineProperty'](_0x71348c,'__esModule',{'value':!![]}),_0x71348c['getProviderMemoized']=_0x71348c['getProviderWithRpcUrls']=_0x71348c['getProvider']=void 0x0;const _0x1f1dc3=src$9,_0x50e49f=src$c,_0xe2bcbc=requireSrc$3(),_0x14844d={'allProvidersOperationTimeout':0x7530,'singleProviderOperationTimeout':0x1388},_0x3528cf=async(_0x4256c5,_0x1fb3f4,_0x3ac0d4=_0x14844d)=>{return await(0, _0x71348c['getProviderWithRpcUrls'])(_0x4256c5,await(0, _0x1f1dc3['fetchParsedRpcUrlsFromSsmByNetworkId'])(_0x4256c5,_0x1fb3f4),_0x3ac0d4);};_0x71348c['getProvider']=_0x3528cf;const _0x767bea=async(_0x3a48a4,_0x1f8cef,_0x1c86d7=_0x14844d)=>{const _0x5704de=(0, _0x1f1dc3['getChainConfigByNetworkId'])(await(0, _0x1f1dc3['fetchChainConfigs'])(),_0x3a48a4);if(!(0, _0xe2bcbc['isEvmNetworkId'])(_0x3a48a4))throw new Error('Non-evm\x20networkId\x20passed\x20to\x20evm\x20provider\x20builder.');return new _0x50e49f['MegaProviderBuilder']({'rpcUrls':_0x1f8cef,'network':{'chainId':_0x3a48a4,'name':'network-'+_0x3a48a4},'throttleLimit':0x1,'timeout':_0x1c86d7['singleProviderOperationTimeout']})['agreement']({'ignoreAgreementOnInsufficientResponses':!![],'minimalProvidersCount':0x2,'requireExplicitBlockTag':![],'chainConfig':_0x5704de,..._0x1c86d7},_0x1f8cef['length']!==0x1)['build']();};_0x71348c['getProviderWithRpcUrls']=_0x767bea,_0x71348c['getProviderMemoized']=_0xe2bcbc['RedstoneCommon']['memoize']({'functionToMemoize':_0x71348c['getProvider'],'ttl':0xea60});}(getProvider));getDefaultExportFromCjs(getProvider);

var hasRequiredBalanceProvider;function requireBalanceProvider(){if(hasRequiredBalanceProvider)return balanceProvider;hasRequiredBalanceProvider=0x1,Object['defineProperty'](balanceProvider,'__esModule',{'value':!![]}),balanceProvider['getBalanceProvider']=void 0x0,balanceProvider['getBalanceProviderWithRpcUrls']=_0x3d8dc7;const _0x5e93ed=src$9,_0x4fa8c8=requireSrc$3(),_0x27797d=requireSrc(),_0x4428a9=getProvider,_0x5f1760=0x2710,_0x373e0d=0x9c40,_0x287cd0=async(_0x350574,_0x1933fd)=>{if((0, _0x4fa8c8['isNonEvmNetworkId'])(_0x350574)){const _0x159b5c=await(0, _0x5e93ed['fetchParsedRpcUrlsFromSsmByNetworkId'])(_0x350574,_0x1933fd,'main');return await _0x3d8dc7(_0x350574,_0x159b5c);}else return await(0, _0x4428a9['getProviderMemoized'])(_0x350574,_0x1933fd);};balanceProvider['getBalanceProvider']=_0x287cd0;async function _0x3d8dc7(_0x24c211,_0x1b6404){if(!_0x1b6404['length'])return;return (0, _0x4fa8c8['isNonEvmNetworkId'])(_0x24c211)?(0, _0x27797d['getNonEvmBlockchainService'])(_0x24c211,_0x1b6404):new _0x27797d['EvmBlockchainService'](await(0, _0x27797d['getProviderWithRpcUrls'])(_0x24c211,_0x1b6404,{'singleProviderOperationTimeout':_0x5f1760,'allProvidersOperationTimeout':_0x373e0d}));}return balanceProvider;}

var hasRequiredSrc;function requireSrc(){if(hasRequiredSrc)return src$d;return hasRequiredSrc=0x1,function(_0x3c102b){var _0x5a7a75=commonjsGlobal&&commonjsGlobal['__createBinding']||(Object['create']?function(_0x1d095f,_0x13549c,_0x4cc08e,_0x182f4c){if(_0x182f4c===undefined)_0x182f4c=_0x4cc08e;var _0x558a20=Object['getOwnPropertyDescriptor'](_0x13549c,_0x4cc08e);(!_0x558a20||('get'in _0x558a20?!_0x13549c['__esModule']:_0x558a20['writable']||_0x558a20['configurable']))&&(_0x558a20={'enumerable':!![],'get':function(){return _0x13549c[_0x4cc08e];}}),Object['defineProperty'](_0x1d095f,_0x182f4c,_0x558a20);}:function(_0x55ee73,_0x46e0bf,_0x25f6ca,_0x9f524c){if(_0x9f524c===undefined)_0x9f524c=_0x25f6ca;_0x55ee73[_0x9f524c]=_0x46e0bf[_0x25f6ca];}),_0x1c08ab=commonjsGlobal&&commonjsGlobal['__exportStar']||function(_0x5e51d4,_0x10135f){for(var _0x513083 in _0x5e51d4)if(_0x513083!=='default'&&!Object['prototype']['hasOwnProperty']['call'](_0x10135f,_0x513083))_0x5a7a75(_0x10135f,_0x5e51d4,_0x513083);};Object['defineProperty'](_0x3c102b,'__esModule',{'value':!![]}),_0x1c08ab(EvmBlockchainService$1,_0x3c102b),_0x1c08ab(getBlockchainService$1,_0x3c102b),_0x1c08ab(getNonEvmBlockchainService$1,_0x3c102b),_0x1c08ab(IBlockchainService,_0x3c102b),_0x1c08ab(MovementBlockchainService$1,_0x3c102b),_0x1c08ab(NonEvmBlockchainService$1,_0x3c102b),_0x1c08ab(RadixBlockchainService$1,_0x3c102b),_0x1c08ab(SolanaBlockchainService$1,_0x3c102b),_0x1c08ab(SuiBlockchainService$1,_0x3c102b),_0x1c08ab(getZrodelkoPrivateKey,_0x3c102b),_0x1c08ab(getBaseNonEvmContractConnector$1,_0x3c102b),_0x1c08ab(getRelayerMonitoringNonEvmContractConnector$1,_0x3c102b),_0x1c08ab(getFuelContractConnector$1,_0x3c102b),_0x1c08ab(getMovementContractConnector$1,_0x3c102b),_0x1c08ab(getRadixContractConnector$1,_0x3c102b),_0x1c08ab(getSuiContractConnector$1,_0x3c102b),_0x1c08ab(getWritableNonEvmContractConnector$1,_0x3c102b),_0x1c08ab(requireBalanceProvider(),_0x3c102b),_0x1c08ab(getProvider,_0x3c102b);}(src$d),src$d;}

var srcExports$1 = requireSrc();

var srcExports = requireSrc$3();

process['env']['OVERRIDE_REMOTE_MANIFEST_WITH_LOCAL']='true',process['env']['REDSTONE_FINANCE_LOG_LEVEL']='4';const stats=[];process['on']('SIGINT',()=>{console['log']('EXIT'),_0x1c92a7['writeFileSync']('heap_stats.json',JSON['stringify'](stats)),process['exit'](0x0);});let counter=0x0;async function test(){const _0x4e316b=await srcExports$1.getProviderWithRpcUrls(0x1f47b,['https://128123.rpc.thirdweb.com','https://node.ghostnet.etherlink.com'],{'allProvidersOperationTimeout':0x7530,'singleProviderOperationTimeout':0x1e});_0x33a081['writeHeapSnapshot'](),setInterval(()=>{counter++;try{_0x33a081['writeHeapSnapshot']();}catch(_0x256062){console['error'](_0x256062);}finally{counter>0xfa&&process['exit'](0x0);}},0x3e8*0x3c*0xa);while(!![]){const _0x346975=[];for(let _0x1057ff=0x0;_0x1057ff<0x64;_0x1057ff++){_0x346975['push'](_0x4e316b['getBlockNumber']()),_0x346975['push'](_0x4e316b['getBalance']('0x3C69fb1dB1d057d940F7211ef6346F697e44feF8',0x133b26d)),_0x346975['push'](_0x4e316b['call']({'to':'0xcA11bde05977b3631167028862bE2a173976CA11','data':'0x86d516e8'},0x133b26d));}await Promise['allSettled'](_0x346975);const {used_heap_size:_0x46ca76,heap_size_limit:_0x58fc34}=_0x33a081['getHeapStatistics']();console['log']('V8\x20heap\x20stats',{'usedHeapSize':formatMemoryUsage(_0x46ca76),'heapSizeLimit':formatMemoryUsage(_0x58fc34)}),await srcExports.RedstoneCommon['sleep'](0x64);}}const formatMemoryUsage=_0x26dd49=>Math['round'](_0x26dd49/(0x400*0x400)*0x64)/0x64+'\x20MB';test()['catch'](console['error']);
