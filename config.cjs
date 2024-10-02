// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undeeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUw4Ty9UVEphZVJ2WVN2WFBDZ01ZdXNoVlVNTmx6bTRDcXlvL0dJOEUyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTZ1aXUxWUJNVmt0TXQvaWRyVllDaStYejc5TXpNZTdwVUJsQnYrcGdTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ1U2UjZET28vRy9taFExUE1pOFkrbWVSN1poZlhTbk4vUElKL1lMakVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmaEJZU3o3ZXpmOCtpMlVEZ1pKdnIzVW01Rk52QzJEc3UwaDdKbTM0d0RFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBK0p3MFVsRXFHWGo5NjZOQTR3dmx4QTJ0ZGEyVWdsSWFUcDZUT05MR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF4UXF2VlRoWlFVR3M2aW5wVGdSSkhUYnZoK2JhWXJEUVB2WmNkQUxjWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdIYmhXZjdFa2VHRVNlT3oxbm9FWURDWGFSTlBJZ0xlK1l2Zms5TGNIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiellraW5PMjMvMzkrTXZHOC9iNnNkZnpLbkhwVlFsNFJHSXZzWGNLWWhDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJZenY0b0l0K254THZBVGlvSXd4RFZkNzF1T0VGSlpocE8yTDZFbUxkR0VwWWtvQnZNV3dOTFd4bzc3YThSRW5yVEpwZEgwMHZXZXlla1NqSGZWWkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IkRRWjVHR3VET1A5bEk5dk9Tck04dFpORnFCNk1XNTRSUVE1aGUyT3o2S2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJmWjBsVFNkUXZTZkx0aFVWazdWekEiLCJwaG9uZUlkIjoiNmYyZjE2YmMtZjBhYy00MWJiLWI1NDctZWMxYmQ0MjcyODM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA4eXA1eDBwR05LYW1iQVdPd1hwOGcwVkp3az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzdndsb0pYeFY2aGFKL2U5ZzJ2WVV1WDdOR2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1dMVExWNE0iLCJtZSI6eyJpZCI6IjI1NDc5MjU0NDUyNzo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNTHJwd2dRNXB2MHR3WVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTRFBHQkhSK21QVGRBWnIzdXZtMWc5bU1QdFA0TGw0RkFWQmxyd0kySkYwPSIsImFjY291bnRTaWduYXR1cmUiOiJMczQwZnVvNFYrYTlEa0lqN001d0NsZW5uOS90LzJpSm1oVENZNFdlMUxWSXN3ZURqM1dsb2lPZCt3YWQzYmIxV215L1lYdmRxMlpWWVZyVlo5c2NDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibGkrYjFXREdJYTZxQi9TWkRKVDlYM2FITDZpS2FQQUhva2J1UGxFbzgzT3R5KytBSmloSlQ2b25mQjVCNWw1Vllobk5razBHRHh3cWpTNHVBcG1iQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTI1NDQ1Mjc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVZ3p4Z1IwZnBqMDNRR2E5N3I1dFlQWmpEN1QrQzVlQlFGUVphOENOaVJkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3ODYwMjExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlhZyJ9fined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©Baraka Bega",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255762190568",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
