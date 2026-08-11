// ======================================================
// CYBER ATTACK DATABASE
// ======================================================

const attacks = {

    "1988": {
        title: "Morris Worm",
        date: "November 2, 1988",
        type: "Computer Worm",
        threat: "HIGH",
        category: "Malware",
        target: "Unix Computers / Internet",
        attack: "The Morris Worm was one of the first major Internet worms. It spread automatically between connected Unix computers.",
        impact: "Thousands of computers were affected and many systems became extremely slow or unusable.",
        rescue: "Administrators disconnected infected systems and removed the worm using security patches and cleanup tools.",
        prevention: "Keep systems patched, disable unnecessary services, use firewalls and monitor unusual network activity.",
        loss: "Estimated millions of dollars in damage and recovery costs.",
        famous: "It is considered one of the first major Internet worms."
    },

    "1999": {
        title: "Melissa Virus",
        date: "March 26, 1999",
        type: "Email Virus",
        threat: "HIGH",
        category: "Malware",
        target: "Microsoft Word / Email Users",
        attack: "Melissa spread through infected Microsoft Word documents sent by email.",
        impact: "It overloaded email systems and caused major disruption to organizations.",
        rescue: "Organizations blocked infected emails and disabled affected accounts.",
        prevention: "Do not open unknown attachments and use email filtering and updated antivirus software.",
        loss: "Millions of dollars in cleanup and downtime.",
        famous: "Melissa became one of the most famous email-based malware outbreaks."
    },

    "2000": {
        title: "ILOVEYOU Virus",
        date: "May 4, 2000",
        type: "Email Worm",
        threat: "CRITICAL",
        category: "Malware",
        target: "Email Users Worldwide",
        attack: "The ILOVEYOU worm spread through email using a malicious attachment named LOVE-LETTER-FOR-YOU.",
        impact: "Millions of computers were infected and files were overwritten or damaged.",
        rescue: "Email filters were updated and infected systems were cleaned or restored.",
        prevention: "Avoid suspicious attachments and use endpoint protection and email security.",
        loss: "Billions of dollars in global damage and recovery costs.",
        famous: "It became one of the fastest-spreading computer worms in history."
    },

    "2001": {
        title: "Code Red Worm",
        date: "July 2001",
        type: "Web Server Worm",
        threat: "CRITICAL",
        category: "Malware",
        target: "Microsoft IIS Web Servers",
        attack: "Code Red exploited a vulnerability in Microsoft IIS web servers and automatically spread across networks.",
        impact: "Thousands of servers were infected and websites experienced disruption.",
        rescue: "Microsoft released patches and administrators cleaned infected servers.",
        prevention: "Apply security patches quickly and monitor exposed web servers.",
        loss: "Hundreds of millions of dollars in estimated damage.",
        famous: "Code Red demonstrated how quickly server vulnerabilities can spread across the Internet."
    },

    "2003": {
        title: "SQL Slammer",
        date: "January 25, 2003",
        type: "Network Worm",
        threat: "CRITICAL",
        category: "Malware",
        target: "Microsoft SQL Servers",
        attack: "SQL Slammer exploited a vulnerability in Microsoft SQL Server and spread extremely rapidly.",
        impact: "Internet traffic increased dramatically and many networks experienced outages.",
        rescue: "Administrators blocked malicious traffic and patched vulnerable SQL servers.",
        prevention: "Apply database security patches and restrict unnecessary network exposure.",
        loss: "Estimated billions of dollars in economic impact.",
        famous: "It was famous for spreading across the Internet at extraordinary speed."
    },

    "2007": {
        title: "Estonia Cyber Attacks",
        date: "April-May 2007",
        type: "DDoS Attack",
        threat: "HIGH",
        category: "Critical Infrastructure",
        target: "Government, Banks and Media",
        attack: "Large-scale distributed denial-of-service attacks targeted Estonian websites and online services.",
        impact: "Government websites, banks and media services experienced disruption.",
        rescue: "Network filtering, traffic blocking and international cybersecurity assistance were used.",
        prevention: "Use DDoS protection, traffic filtering, redundancy and incident response plans.",
        loss: "Significant operational and economic disruption.",
        famous: "It was one of the first major cyber attacks against an entire country's online infrastructure."
    },

    "2010": {
        title: "Stuxnet",
        date: "2010",
        type: "Industrial Control System Malware",
        threat: "CRITICAL",
        category: "Critical Infrastructure",
        target: "Industrial Control Systems",
        attack: "Stuxnet was highly sophisticated malware designed to interfere with industrial control systems.",
        impact: "It demonstrated that malware could cause physical effects in industrial environments.",
        rescue: "Affected systems were isolated, analyzed and cleaned, while security controls were strengthened.",
        prevention: "Segment industrial networks, restrict removable media and monitor industrial control systems.",
        loss: "Exact financial loss is difficult to determine, but the technical impact was significant.",
        famous: "Stuxnet became famous as a landmark example of cyber warfare and industrial malware."
    },

    "2013": {
        title: "Target Data Breach",
        date: "November-December 2013",
        type: "Data Breach",
        threat: "CRITICAL",
        category: "Data Breach",
        target: "Retail Customers and Payment Systems",
        attack: "Attackers gained access to Target's network and stole payment card information.",
        impact: "Millions of customer records and payment card details were compromised.",
        rescue: "Target removed the attackers, improved security controls and replaced affected payment systems.",
        prevention: "Use strong network segmentation, MFA, monitoring and secure third-party access.",
        loss: "Hundreds of millions of dollars in costs and settlements.",
        famous: "It became one of the most significant retail data breaches of its time."
    },

    "2014": {
        title: "Sony Pictures Hack",
        date: "November 2014",
        type: "Data Destruction / Cyber Attack",
        threat: "CRITICAL",
        category: "Data Breach",
        target: "Sony Pictures Entertainment",
        attack: "Attackers compromised Sony Pictures systems and stole and destroyed sensitive information.",
        impact: "Employee data, internal documents and unreleased information were exposed.",
        rescue: "Sony isolated affected systems, investigated the intrusion and rebuilt parts of its infrastructure.",
        prevention: "Use strong authentication, network segmentation, endpoint protection and continuous monitoring.",
        loss: "Tens of millions of dollars in direct and indirect costs.",
        famous: "The incident became one of the most publicized corporate cyber attacks."
    },

    "2015": {
        title: "Ukraine Power Grid Attack",
        date: "December 23, 2015",
        type: "Cyber-Physical Attack",
        threat: "CRITICAL",
        category: "Critical Infrastructure",
        target: "Electric Power Grid",
        attack: "Attackers gained access to power utility systems and disrupted electricity distribution.",
        impact: "Thousands of customers temporarily lost electricity.",
        rescue: "Operators manually restored systems and electricity services.",
        prevention: "Segment operational networks, use MFA, monitor industrial systems and maintain manual recovery procedures.",
        loss: "Significant operational disruption and recovery costs.",
        famous: "It was a major example of a cyber attack causing real-world infrastructure disruption."
    },

    "2016": {
        title: "Mirai Botnet",
        date: "2016",
        type: "IoT Botnet / DDoS",
        threat: "HIGH",
        category: "DDoS",
        target: "IoT Devices and Internet Services",
        attack: "Mirai infected vulnerable IoT devices and used them as a botnet to launch large-scale DDoS attacks.",
        impact: "Major Internet services became unavailable during large attacks.",
        rescue: "Infected devices were rebooted or secured and malicious traffic was filtered.",
        prevention: "Change default passwords, update IoT firmware and disable unnecessary services.",
        loss: "Large-scale service disruption and economic losses.",
        famous: "Mirai showed the danger of insecure Internet-connected devices."
    },

    "2017": {
        title: "WannaCry Ransomware",
        date: "May 12, 2017",
        type: "Ransomware",
        threat: "CRITICAL",
        category: "Ransomware",
        target: "Windows Computers Worldwide",
        attack: "WannaCry encrypted files and demanded ransom while spreading between vulnerable Windows systems.",
        impact: "Hospitals, businesses and organizations worldwide experienced major disruption.",
        rescue: "Security patches were applied and infected systems were isolated and restored.",
        prevention: "Keep operating systems patched, maintain backups and use endpoint security.",
        loss: "Billions of dollars in estimated global economic impact.",
        famous: "It became one of the world's most famous ransomware outbreaks."
    },

    "2018": {
        title: "VPNFilter Malware",
        date: "2018",
        type: "Router Malware",
        threat: "HIGH",
        category: "Malware",
        target: "Network Routers",
        attack: "VPNFilter infected network devices and could monitor or manipulate network traffic.",
        impact: "Large numbers of routers were potentially compromised.",
        rescue: "Affected devices were rebooted and firmware was updated.",
        prevention: "Update router firmware, change default credentials and disable unnecessary services.",
        loss: "Potentially significant network and infrastructure impact.",
        famous: "It highlighted the security risks of consumer and enterprise routers."
    },

    "2020": {
        title: "SolarWinds Supply Chain Attack",
        date: "2020",
        type: "Supply Chain Attack",
        threat: "CRITICAL",
        category: "Supply Chain",
        target: "Government Agencies and Organizations",
        attack: "Attackers compromised a software update process and used trusted software to reach victim organizations.",
        impact: "Government agencies and major organizations were compromised.",
        rescue: "Organizations removed compromised software, rotated credentials and investigated affected systems.",
        prevention: "Secure software supply chains, monitor updates and use zero-trust security controls.",
        loss: "Extensive financial, operational and national-security impact.",
        famous: "It became a landmark example of a sophisticated supply-chain compromise."
    },

    "2021": {
        title: "Colonial Pipeline Ransomware",
        date: "May 2021",
        type: "Ransomware",
        threat: "CRITICAL",
        category: "Ransomware",
        target: "Fuel Pipeline Infrastructure",
        attack: "A ransomware attack disrupted Colonial Pipeline's business systems and led to temporary shutdown of pipeline operations.",
        impact: "Fuel distribution was disrupted and panic buying occurred in some areas.",
        rescue: "Colonial Pipeline shut down affected operations and restored systems after investigation and recovery efforts.",
        prevention: "Use MFA, network segmentation, offline backups and strong incident response procedures.",
        loss: "Major operational and economic disruption.",
        famous: "It demonstrated how ransomware can affect critical infrastructure and daily life."
    },

    "2022": {
        title: "Okta Data Breach",
        date: "2022",
        type: "Identity / Data Breach",
        threat: "HIGH",
        category: "Data Breach",
        target: "Identity Management Systems",
        attack: "Attackers gained unauthorized access to systems associated with identity management services.",
        impact: "Customer and authentication-related information was potentially exposed.",
        rescue: "Affected accounts and access paths were investigated and security controls were strengthened.",
        prevention: "Use MFA, phishing-resistant authentication, least privilege and continuous monitoring.",
        loss: "Significant security and operational impact.",
        famous: "The incident highlighted the importance of protecting identity infrastructure."
    },

    "2023": {
        title: "MOVEit Transfer Attacks",
        date: "2023",
        type: "Web Application Exploitation",
        threat: "CRITICAL",
        category: "Data Breach",
        target: "Organizations Using MOVEit",
        attack: "Attackers exploited a vulnerability in MOVEit Transfer to steal sensitive information from organizations.",
        impact: "Large numbers of organizations and individuals were affected through exposed data.",
        rescue: "Organizations patched affected systems and investigated stolen data.",
        prevention: "Patch internet-facing applications quickly and monitor unusual data access.",
        loss: "Large-scale financial and privacy impact.",
        famous: "It became one of the major mass data-theft campaigns of 2023."
    },

    "2024": {
        title: "Change Healthcare Cyber Attack",
        date: "February 2024",
        type: "Ransomware",
        threat: "CRITICAL",
        category: "Ransomware",
        target: "Healthcare Payment Infrastructure",
        attack: "A ransomware attack disrupted Change Healthcare systems and healthcare payment processing.",
        impact: "Healthcare organizations experienced major disruption to claims and payment operations.",
        rescue: "Systems were isolated and restored through a large-scale recovery process.",
        prevention: "Use MFA, segmentation, offline backups, continuous monitoring and tested recovery plans.",
        loss: "Billions of dollars in financial and operational impact.",
        famous: "It demonstrated how a cyber attack against healthcare infrastructure can affect a large part of the healthcare system."
    },

    "2025": {
        title: "Modern Cyber Threat Landscape",
        date: "2025",
        type: "Multiple Attack Techniques",
        threat: "HIGH",
        category: "Cybersecurity",
        target: "Organizations and Individuals",
        attack: "Cyber threats continued to evolve through ransomware, phishing, supply-chain attacks, identity attacks and AI-assisted techniques.",
        impact: "Organizations faced increasing risks involving data theft, financial loss and service disruption.",
        rescue: "Organizations strengthened zero-trust security, monitoring, endpoint protection and incident response.",
        prevention: "Use MFA, strong passwords, patching, backups, employee awareness and continuous monitoring.",
        loss: "Global cybercrime continues to cause significant financial losses.",
        famous: "2025 represents the continued evolution of modern cyber threats."
    }

};


// ======================================================
// YEAR BUTTONS
// ======================================================

function loadYearButtons() {

    const buttonsContainer =
        document.getElementById("yearButtons");

    if (!buttonsContainer) {
        return;
    }

    buttonsContainer.innerHTML = "";

    Object.keys(attacks).forEach(function (year) {

        const button =
            document.createElement("button");

        button.textContent = year;

        button.addEventListener("click", function () {

            stopAutoTimeline();

            showAttack(year);

            document
                .querySelectorAll("#yearButtons button")
                .forEach(function (btn) {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

        });

        buttonsContainer.appendChild(button);

    });

}


// ======================================================
// SHOW ATTACK
// ======================================================

function showAttack(year, manualSelection = false) {

    const data = attacks[year];

    const attackInfo =
        document.getElementById("attackInfo");

    if (!attackInfo) {
        return;
    }

    if (!data) {

        attackInfo.innerHTML = `
            <div class="attack-card">
                <h2>🚧 No Data Found</h2>
                <p>We don't have information for this year yet.</p>
            </div>
        `;

        return;
    }

    stopVoice();

    const threat =
        data.threat || "MEDIUM";

    const threatClass =
        threat.toLowerCase();

    attackInfo.innerHTML = `

        <div class="attack-card">

            <h2>${data.title}</h2>

            <img
                src="${data.image}"
                alt="${data.title}"
                class="attack-image"
                onerror="this.style.display='none';"
            >

            <div class="attack-grid">

                <div>
                    <h3>📅 Date</h3>
                    <p>${data.date}</p>
                </div>

                <div>
                    <h3>⚔️ Attack Type</h3>
                    <p>${data.type}</p>
                </div>

                <div>
                    <h3>🚨 Threat Level</h3>
                    <p class="threat-level ${threatClass}">
                        ${threat}
                    </p>
                </div>

                <div>
                    <h3>📂 Category</h3>
                    <p>${data.category}</p>
                </div>

                <div>
                    <h3>🎯 Target</h3>
                    <p>${data.target}</p>
                </div>

                <div>
                    <h3>🦠 What Happened?</h3>
                    <p>${data.attack}</p>
                </div>

                <div>
                    <h3>📉 Impact</h3>
                    <p>${data.impact}</p>
                </div>

                <div>
                    <h3>🚑 How Was It Stopped?</h3>
                    <p>${data.rescue}</p>
                </div>

                <div>
                    <h3>🛡️ How To Prevent It</h3>
                    <p>${data.prevention}</p>
                </div>

                <div>
                    <h3>💸 Estimated Loss / Impact</h3>
                    <p>${data.loss}</p>
                </div>

                <div>
                    <h3>📚 Why Is It Famous?</h3>
                    <p>${data.famous}</p>
                </div>

            </div>

        </div>

    `;

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            "Currently exploring: " +
            year +
            " — " +
            cleanAttackName(data.title);

    }

    updateProgress(year);

    if (manualSelection) {
        speakAttackDetails(year);
    }

}


// ======================================================
// SEARCH
// ======================================================

function searchAttack() {

    const input =
        document.getElementById("searchYear");

    if (!input) {
        return;
    }

    const searchValue =
        input.value.trim().toLowerCase();

    if (searchValue === "") {
        alert("Please enter a year or attack name.");
        return;
    }

    if (attacks[searchValue]) {

        stopAutoTimeline();

        showAttack(searchValue, true);

        return;
    }

    const foundYear =
        Object.keys(attacks).find(function (year) {

            const data = attacks[year];

            return (
                data.title.toLowerCase().includes(searchValue) ||
                data.type.toLowerCase().includes(searchValue) ||
                data.category.toLowerCase().includes(searchValue)
            );

        });

    if (foundYear) {

        stopAutoTimeline();

        showAttack(foundYear, true);

    } else {

        stopVoice();

        const attackInfo =
            document.getElementById("attackInfo");

        if (attackInfo) {

            attackInfo.innerHTML = `

                <div class="attack-card">

                    <h2>🔍 No Attack Found</h2>

                    <p>
                        No cyber attack matched:
                        <strong>${searchValue}</strong>
                    </p>

                </div>

            `;

        }

    }

}


// ======================================================
// PROGRESS BAR
// ======================================================

function updateProgress(year) {

    const progressBar =
        document.getElementById("progressBar");

    if (!progressBar) {
        return;
    }

    const years =
        Object.keys(attacks);

    const index =
        years.indexOf(year);

    if (index === -1) {
        return;
    }

    const progress =
        ((index + 1) / years.length) * 100;

    progressBar.style.width =
        progress + "%";

}


// ======================================================
// AUTO TIMELINE
// ======================================================

let autoTimelineInterval = null;

let autoTimelineIndex = 0;

const timelineYears =
    Object.keys(attacks);


// ======================================================
// START AUTO TIMELINE
// ======================================================

function startAutoTimeline() {

    stopAutoTimeline();

    stopVoice();

    autoTimelineIndex = 0;

    if (timelineYears.length === 0) {
        return;
    }

    showAttack(
        timelineYears[autoTimelineIndex],
        false
    );

    speakAttackName(
        timelineYears[autoTimelineIndex]
    );

    autoTimelineInterval =
        setInterval(function () {

            autoTimelineIndex++;

            if (
                autoTimelineIndex >=
                timelineYears.length
            ) {

                stopAutoTimeline();

                return;
            }

            const year =
                timelineYears[autoTimelineIndex];

            showAttack(
                year,
                false
            );

            speakAttackName(year);

        }, 3000);

}


// ======================================================
// STOP AUTO TIMELINE
// ======================================================

function stopAutoTimeline() {

    if (autoTimelineInterval !== null) {

        clearInterval(
            autoTimelineInterval
        );

        autoTimelineInterval = null;

    }

    stopVoice();

}


// ======================================================
// CLEAN ATTACK NAME
// ======================================================

function cleanAttackName(title) {

    if (!title) {
        return "";
    }

    return title
        .replace(/[^\p{L}\p{N}\s&-]/gu, "")
        .replace(/\s+/g, " ")
        .trim();

}


// ======================================================
// FEMALE VOICE SELECTION
// ======================================================

function getFemaleVoice() {

    if (!("speechSynthesis" in window)) {
        return null;
    }

    const voices =
        window.speechSynthesis.getVoices();

    if (!voices || voices.length === 0) {
        return null;
    }

    const preferredNames = [
        "Microsoft Zira",
        "Zira",
        "Samantha",
        "Karen",
        "Google UK English Female",
        "Google US English Female",
        "Female"
    ];

    for (const preferred of preferredNames) {

        const voice =
            voices.find(function (v) {

                return v.name
                    .toLowerCase()
                    .includes(
                        preferred.toLowerCase()
                    );

            });

        if (voice) {
            return voice;
        }

    }

    const femaleVoice =
        voices.find(function (voice) {

            return voice.name
                .toLowerCase()
                .includes("female");

        });

    return femaleVoice || null;

}


// ======================================================
// SPEAK ONLY ATTACK NAME
// ======================================================

function speakAttackName(year) {

    const data =
        attacks[year];

    if (!data) {
        return;
    }

    if (!("speechSynthesis" in window)) {
        return;
    }

    window.speechSynthesis.cancel();

    const attackName =
        cleanAttackName(data.title);

    const speech =
        new SpeechSynthesisUtterance(
            attackName
        );

    speech.rate = 0.95;
    speech.pitch = 1;
    speech.volume = 1;

    const femaleVoice =
        getFemaleVoice();

    if (femaleVoice) {
        speech.voice = femaleVoice;
    }

    window.speechSynthesis.speak(
        speech
    );

}


// ======================================================
// SPEAK FULL DETAILS
// ======================================================

function speakAttackDetails(year) {

    const data =
        attacks[year];

    if (!data) {
        return;
    }

    if (!("speechSynthesis" in window)) {
        return;
    }

    window.speechSynthesis.cancel();

    const attackName =
        cleanAttackName(data.title);

    const narration =
        attackName +
        ". " +
        data.attack +
        " " +
        data.impact +
        " " +
        data.rescue;

    const speech =
        new SpeechSynthesisUtterance(
            narration
        );

    speech.rate = 0.95;
    speech.pitch = 1;
    speech.volume = 1;

    const femaleVoice =
        getFemaleVoice();

    if (femaleVoice) {
        speech.voice = femaleVoice;
    }

    window.speechSynthesis.speak(
        speech
    );

}


// ======================================================
// STOP VOICE
// ======================================================

function stopVoice() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

}


// ======================================================
// LOAD AVAILABLE VOICES
// ======================================================

if ("speechSynthesis" in window) {

    window.speechSynthesis.onvoiceschanged =
        function () {

            window.speechSynthesis.getVoices();

        };

}


// ======================================================
// ENTER KEY SEARCH
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById(
                "searchYear"
            );

        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Enter") {
                        searchAttack();
                    }

                }
            );

        }

    }
);


// ======================================================
// CYBER ATTACK STATISTICS
// ======================================================

function updateStatistics() {

    const years =
        Object.keys(attacks);

    let total =
        years.length;

    let critical = 0;
    let high = 0;
    let malware = 0;
    let ransomware = 0;
    let ddos = 0;
    let socialEngineering = 0;
    let infrastructure = 0;

    years.forEach(function (year) {

        const data =
            attacks[year];

        if (!data) {
            return;
        }

        if (data.threat === "CRITICAL") {
            critical++;
        }

        if (data.threat === "HIGH") {
            high++;
        }

        const category =
            (data.category || "")
                .toLowerCase();

        const type =
            (data.type || "")
                .toLowerCase();

        if (
            category.includes("malware") ||
            type.includes("malware") ||
            type.includes("worm") ||
            type.includes("virus")
        ) {
            malware++;
        }

        if (
            category.includes("ransomware") ||
            type.includes("ransomware")
        ) {
            ransomware++;
        }

        if (
            category.includes("ddos") ||
            type.includes("ddos")
        ) {
            ddos++;
        }

        if (
            category.includes("social engineering") ||
            type.includes("social engineering") ||
            category.includes("phishing") ||
            type.includes("phishing")
        ) {
            socialEngineering++;
        }

        if (
            category.includes("critical infrastructure") ||
            type.includes("critical infrastructure")
        ) {
            infrastructure++;
        }

    });

    const totalElement =
        document.getElementById("totalAttacks");

    const criticalElement =
        document.getElementById("criticalAttacks");

    const highElement =
        document.getElementById("highAttacks");

    const malwareElement =
        document.getElementById("malwareAttacks");

    const ransomwareElement =
        document.getElementById("ransomwareAttacks");

    const ddosElement =
        document.getElementById("ddosAttacks");

    const socialElement =
        document.getElementById("socialAttacks");

    const infrastructureElement =
        document.getElementById("infrastructureAttacks");

    if (totalElement) {
        totalElement.textContent = total;
    }

    if (criticalElement) {
        criticalElement.textContent = critical;
    }

    if (highElement) {
        highElement.textContent = high;
    }

    if (malwareElement) {
        malwareElement.textContent = malware;
    }

    if (ransomwareElement) {
        ransomwareElement.textContent = ransomware;
    }

    if (ddosElement) {
        ddosElement.textContent = ddos;
    }

    if (socialElement) {
        socialElement.textContent =
            socialEngineering;
    }

    if (infrastructureElement) {
        infrastructureElement.textContent =
            infrastructure;
    }

}


// ======================================================
// ATTACK CATEGORY BAR CHART
// ======================================================

function updateCategoryChart() {

    const total =
        Object.keys(attacks).length;

    if (total === 0) {
        return;
    }

    const malwareValue =
        Number(
            document.getElementById(
                "malwareAttacks"
            )?.textContent || 0
        );

    const socialValue =
        Number(
            document.getElementById(
                "socialAttacks"
            )?.textContent || 0
        );

    const infrastructureValue =
        Number(
            document.getElementById(
                "infrastructureAttacks"
            )?.textContent || 0
        );

    const ransomwareValue =
        Number(
            document.getElementById(
                "ransomwareAttacks"
            )?.textContent || 0
        );

    const ddosValue =
        Number(
            document.getElementById(
                "ddosAttacks"
            )?.textContent || 0
        );

    function percentage(value) {

        return (
            (value / total) * 100
        ).toFixed(1);

    }

    const malwareBar =
        document.getElementById("malwareBar");

    const socialBar =
        document.getElementById("socialBar");

    const infrastructureBar =
        document.getElementById("infrastructureBar");

    const ransomwareBar =
        document.getElementById("ransomwareBar");

    const ddosBar =
        document.getElementById("ddosBar");

    if (malwareBar) {
        malwareBar.style.width =
            percentage(malwareValue) + "%";
    }

    if (socialBar) {
        socialBar.style.width =
            percentage(socialValue) + "%";
    }

    if (infrastructureBar) {
        infrastructureBar.style.width =
            percentage(infrastructureValue) + "%";
    }

    if (ransomwareBar) {
        ransomwareBar.style.width =
            percentage(ransomwareValue) + "%";
    }

    if (ddosBar) {
        ddosBar.style.width =
            percentage(ddosValue) + "%";
    }

    const malwareCount =
        document.getElementById("malwareCount");

    const socialCount =
        document.getElementById("socialCount");

    const infrastructureCount =
        document.getElementById("infrastructureCount");

    const ransomwareCount =
        document.getElementById("ransomwareCount");

    const ddosCount =
        document.getElementById("ddosCount");

    if (malwareCount) {
        malwareCount.textContent =
            malwareValue +
            " (" +
            percentage(malwareValue) +
            "%)";
    }

    if (socialCount) {
        socialCount.textContent =
            socialValue +
            " (" +
            percentage(socialValue) +
            "%)";
    }

    if (infrastructureCount) {
        infrastructureCount.textContent =
            infrastructureValue +
            " (" +
            percentage(infrastructureValue) +
            "%)";
    }

    if (ransomwareCount) {
        ransomwareCount.textContent =
            ransomwareValue +
            " (" +
            percentage(ransomwareValue) +
            "%)";
    }

    if (ddosCount) {
        ddosCount.textContent =
            ddosValue +
            " (" +
            percentage(ddosValue) +
            "%)";
    }

}


// ======================================================
// COMPARE CYBER ATTACKS
// ======================================================

function compareAttacks() {

    const comparisonContainer =
        document.querySelector(
            "#attackComparison, " +
            "#compareAttacks, " +
            ".attack-comparison, " +
            ".compare-section"
        );

    let selects = [];

    if (comparisonContainer) {

        selects =
            Array.from(
                comparisonContainer.querySelectorAll(
                    "select"
                )
            );

    }

    if (selects.length < 2) {

        selects =
            Array.from(
                document.querySelectorAll("select")
            );

    }

    if (selects.length < 2) {

        alert(
            "Comparison dropdowns were not found."
        );

        return;
    }

    const firstYear =
        selects[0].value;

    const secondYear =
        selects[1].value;

    if (!firstYear || !secondYear) {

        alert(
            "Please select two cyber attacks."
        );

        return;
    }

    if (firstYear === secondYear) {

        alert(
            "Please select two different attacks."
        );

        return;
    }

    const firstAttack =
        attacks[firstYear];

    const secondAttack =
        attacks[secondYear];

    if (!firstAttack || !secondAttack) {

        alert(
            "Attack data not found."
        );

        return;
    }

    let result =
        document.getElementById(
            "comparisonResult"
        );

    if (!result) {

        result =
            document.getElementById(
                "compareResult"
            );

    }

    if (!result) {

        result =
            document.querySelector(
                ".comparison-result"
            );

    }

    if (!result) {

        result =
            document.createElement("div");

        result.id =
            "comparisonResult";

        result.className =
            "comparison-result";

        if (comparisonContainer) {

            comparisonContainer.appendChild(
                result
            );

        } else {

            document.body.appendChild(
                result
            );

        }

    }

    result.innerHTML = `

        <div class="comparison-card">

            <h2>⚔️ Attack Comparison</h2>

            <div class="comparison-grid">

                <div class="comparison-column">

                    <h3>
                        ${firstAttack.title}
                    </h3>

                    <p>
                        <strong>📅 Year:</strong>
                        ${firstYear}
                    </p>

                    <p>
                        <strong>⚔️ Type:</strong>
                        ${firstAttack.type}
                    </p>

                    <p>
                        <strong>📂 Category:</strong>
                        ${firstAttack.category}
                    </p>

                    <p>
                        <strong>🚨 Threat:</strong>
                        ${firstAttack.threat}
                    </p>

                    <p>
                        <strong>🎯 Target:</strong>
                        ${firstAttack.target}
                    </p>

                    <p>
                        <strong>📉 Impact:</strong>
                        ${firstAttack.impact}
                    </p>

                    <p>
                        <strong>🛡️ Prevention:</strong>
                        ${firstAttack.prevention}
                    </p>

                </div>

                <div class="comparison-column">

                    <h3>
                        ${secondAttack.title}
                    </h3>

                    <p>
                        <strong>📅 Year:</strong>
                        ${secondYear}
                    </p>

                    <p>
                        <strong>⚔️ Type:</strong>
                        ${secondAttack.type}
                    </p>

                    <p>
                        <strong>📂 Category:</strong>
                        ${secondAttack.category}
                    </p>

                    <p>
                        <strong>🚨 Threat:</strong>
                        ${secondAttack.threat}
                    </p>

                    <p>
                        <strong>🎯 Target:</strong>
                        ${secondAttack.target}
                    </p>

                    <p>
                        <strong>📉 Impact:</strong>
                        ${secondAttack.impact}
                    </p>

                    <p>
                        <strong>🛡️ Prevention:</strong>
                        ${secondAttack.prevention}
                    </p>

                </div>

            </div>

        </div>

    `;

    result.style.display =
        "block";

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ======================================================
// AUTOMATICALLY CONNECT COMPARE BUTTON
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const buttons =
            Array.from(
                document.querySelectorAll("button")
            );

        buttons.forEach(function (button) {

            const text =
                button.textContent
                    .trim()
                    .toLowerCase();

            if (
                text.includes(
                    "compare attacks"
                )
            ) {

                button.addEventListener(
                    "click",
                    compareAttacks
                );

            }

        });

    }
);


// ======================================================
// PAGE INITIALIZATION
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // CREATE YEAR BUTTONS
        loadYearButtons();

        // LOAD FIRST YEAR AUTOMATICALLY
        const years =
            Object.keys(attacks);

        if (years.length > 0) {

            showAttack(
                years[0],
                false
            );

        }

        // LOAD STATISTICS
        updateStatistics();

        // LOAD CATEGORY CHART
        updateCategoryChart();

    }
);
// ======================================================
// START EXPLORING
// ======================================================

function showTimeline() {

    const timeline =
        document.getElementById("timeline");

    if (!timeline) {
        return;
    }

    timeline.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // Highlight timeline briefly
    timeline.classList.add("timeline-focused");

    setTimeout(function () {
        timeline.classList.remove("timeline-focused");
    }, 1200);

}


// ======================================================
// PAGE CLOSE
// ======================================================

window.addEventListener(
    "beforeunload",
    function () {

        stopVoice();

        stopAutoTimeline();

    }
);
// ======================================================
// LOGIN / SESSION MANAGEMENT
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const loginScreen =
        document.getElementById("loginScreen");

    const app =
        document.getElementById("app");

    const loginForm =
        document.getElementById("loginForm");

    const usernameInput =
        document.getElementById("loginUsername");

    const passwordInput =
        document.getElementById("loginPassword");

    const rememberMe =
        document.getElementById("rememberMe");

    const loginMessage =
        document.getElementById("loginMessage");

    const togglePassword =
        document.getElementById("togglePassword");


    // --------------------------------------------------
    // DEMO LOGIN CREDENTIALS
    // --------------------------------------------------

    const DEMO_USERNAME = "admin";
    const DEMO_PASSWORD = "Cyber@123";


    // --------------------------------------------------
    // CHECK EXISTING SESSION
    // --------------------------------------------------

    const loggedIn =
        localStorage.getItem("cyberTimeMachineLoggedIn");

    const sessionUser =
        localStorage.getItem("cyberTimeMachineUser");


    if (loggedIn === "true") {

        showCyberDashboard(sessionUser);

    } else {

        showLoginScreen();

    }


    // --------------------------------------------------
    // LOGIN FORM
    // --------------------------------------------------

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const username =
                    usernameInput.value.trim();

                const password =
                    passwordInput.value;


                // Clear old message

                loginMessage.textContent = "";

                loginMessage.className =
                    "login-message";


                // Validation

                if (!username || !password) {

                    showLoginError(
                        "Please enter your username and password."
                    );

                    return;

                }


                // Check credentials

                if (
                    username === DEMO_USERNAME &&
                    password === DEMO_PASSWORD
                ) {

                    localStorage.setItem(
                        "cyberTimeMachineLoggedIn",
                        "true"
                    );

                    localStorage.setItem(
                        "cyberTimeMachineUser",
                        username
                    );


                    if (rememberMe.checked) {

                        localStorage.setItem(
                            "cyberTimeMachineRemember",
                            "true"
                        );

                    }


                    showLoginSuccess();

                    setTimeout(function () {

                        showCyberDashboard(username);

                    }, 600);


                } else {

                    showLoginError(
                        "Invalid username or password."
                    );

                }

            }
        );

    }


    // --------------------------------------------------
    // SHOW / HIDE PASSWORD
    // --------------------------------------------------

    if (togglePassword) {

        togglePassword.addEventListener(
            "click",
            function () {

                if (
                    passwordInput.type ===
                    "password"
                ) {

                    passwordInput.type =
                        "text";

                    togglePassword.textContent =
                        "🙈";

                    togglePassword.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    passwordInput.type =
                        "password";

                    togglePassword.textContent =
                        "👁️";

                    togglePassword.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );

    }


    // --------------------------------------------------
    // LOGIN SCREEN
    // --------------------------------------------------

    function showLoginScreen() {

        if (loginScreen) {

            loginScreen.style.display =
                "flex";

        }

        if (app) {

            app.style.display =
                "none";

        }

        document.body.style.overflow =
            "hidden";

    }


    // --------------------------------------------------
    // DASHBOARD
    // --------------------------------------------------

    function showCyberDashboard(username) {

        if (loginScreen) {

            loginScreen.style.display =
                "none";

        }

        if (app) {

            app.style.display =
                "block";

        }

        document.body.style.overflow =
            "";

        console.log(
            "Cyber Attack Time Machine session started for:",
            username || "User"
        );

    }


    // --------------------------------------------------
    // LOGIN SUCCESS
    // --------------------------------------------------

    function showLoginSuccess() {

        loginMessage.textContent =
            "✓ Authentication successful. Opening dashboard...";

        loginMessage.className =
            "login-message success";

    }


    // --------------------------------------------------
    // LOGIN ERROR
    // --------------------------------------------------

    function showLoginError(message) {

        loginMessage.textContent =
            "⚠ " + message;

        loginMessage.className =
            "login-message error";

        passwordInput.value = "";

        passwordInput.focus();

    }

});
// ======================================================
// ATTACK FILTER SYSTEM
// ======================================================

function applyAttackFilters() {

    const categoryFilter =
        document.getElementById("categoryFilter");

    const threatFilter =
        document.getElementById("threatFilter");

    const filterResults =
        document.getElementById("filterResults");

    const filteredAttackCards =
        document.getElementById("filteredAttackCards");

    const filterResultCount =
        document.getElementById("filterResultCount");


    if (
        !categoryFilter ||
        !threatFilter ||
        !filterResults ||
        !filteredAttackCards
    ) {
        return;
    }


    const selectedCategory =
        categoryFilter.value.toLowerCase();

    const selectedThreat =
        threatFilter.value.toLowerCase();


    const results =
        Object.keys(attacks)
            .filter(function (year) {

                const data =
                    attacks[year];

                const category =
                    (data.category || "")
                        .toLowerCase();

                const type =
                    (data.type || "")
                        .toLowerCase();

                const threat =
                    (data.threat || "")
                        .toLowerCase();


                // Category matching

                const categoryMatch =
                    selectedCategory === "all" ||
                    category.includes(selectedCategory) ||
                    type.includes(selectedCategory);


                // Threat matching

                const threatMatch =
                    selectedThreat === "all" ||
                    threat === selectedThreat;


                return (
                    categoryMatch &&
                    threatMatch
                );

            });


    // Show results section

    filterResults.style.display =
        "block";


    // Update count

    if (filterResultCount) {

        filterResultCount.textContent =
            results.length +
            (
                results.length === 1
                    ? " result"
                    : " results"
            );

    }


    // No results

    if (results.length === 0) {

        filteredAttackCards.innerHTML = `

            <div class="no-filter-results">

                <div class="no-result-icon">
                    🔍
                </div>

                <h3>
                    No Matching Attacks
                </h3>

                <p>
                    No historical attacks match
                    the selected category and
                    threat level.
                </p>

                <button
                    onclick="resetAttackFilters()"
                    class="reset-results-btn"
                >
                    🔄 Clear Filters
                </button>

            </div>

        `;

        return;

    }


    // Create attack cards

    filteredAttackCards.innerHTML =
        results.map(function (year) {

            const data =
                attacks[year];

            const threat =
                data.threat || "MEDIUM";

            const threatClass =
                threat.toLowerCase();


            return `

                <article
                    class="filtered-attack-card"
                >

                    <div
                        class="filtered-card-top"
                    >

                        <span
                            class="filtered-year"
                        >
                            ${year}
                        </span>

                        <span
                            class="filtered-threat ${threatClass}"
                        >
                            ${threat}
                        </span>

                    </div>


                    <h3>
                        ${data.title}
                    </h3>


                    <div
                        class="filtered-meta"
                    >

                        <span>
                            ⚔️ ${data.type}
                        </span>

                        <span>
                            📂 ${data.category}
                        </span>

                    </div>


                    <div
                        class="filtered-summary"
                    >

                        <p>
                            ${data.attack}
                        </p>

                    </div>


                    <div
                        class="filtered-card-actions"
                    >

                        <button
                            onclick="showFilteredAttack('${year}')"
                        >
                            📖 View Full Analysis
                        </button>

                    </div>

                </article>

            `;

        }).join("");


    // Scroll to results

    filterResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
// ======================================================
// VIEW FILTERED ATTACK
// ======================================================

function showFilteredAttack(year) {

    stopAutoTimeline();

    showAttack(
        year,
        true
    );

    const attackInfo =
        document.getElementById("attackInfo");

    if (attackInfo) {

        setTimeout(function () {

            attackInfo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 200);

    }

}
// ======================================================
// RESET FILTERS
// ======================================================

function resetAttackFilters() {

    const categoryFilter =
        document.getElementById("categoryFilter");

    const threatFilter =
        document.getElementById("threatFilter");

    const filterResults =
        document.getElementById("filterResults");

    const filteredAttackCards =
        document.getElementById("filteredAttackCards");


    if (categoryFilter) {

        categoryFilter.value =
            "all";

    }


    if (threatFilter) {

        threatFilter.value =
            "all";

    }


    if (filterResults) {

        filterResults.style.display =
            "none";

    }


    if (filteredAttackCards) {

        filteredAttackCards.innerHTML =
            "";

    }


    // Restore all years

    loadYearButtons();

}
// ======================================================
// FILTER BUTTON EVENTS
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const applyButton =
            document.getElementById(
                "applyFilters"
            );

        const resetButton =
            document.getElementById(
                "resetFilters"
            );


        if (applyButton) {

            applyButton.addEventListener(
                "click",
                applyAttackFilters
            );

        }


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                resetAttackFilters
            );

        }

    }
);
// ======================================================
// MULTI-ATTACK YEAR VIEW
// ======================================================

function showYearAttacks(year) {

    const attackInfo =
        document.getElementById("attackInfo");

    if (!attackInfo) {
        return;
    }


    const data =
        attacks[year];


    if (!data) {

        attackInfo.innerHTML = `

            <div class="attack-card">

                <h2>
                    🚧 No Data Found
                </h2>

                <p>
                    No major cyber attack
                    data is available for ${year}.
                </p>

            </div>

        `;

        return;

    }


    attackInfo.innerHTML = `

        <div class="year-analysis">

            <div class="year-analysis-header">

                <span class="section-label">
                    HISTORICAL INTELLIGENCE
                </span>

                <h2>
                    🌐 Major Cyber Attacks — ${year}
                </h2>

                <p>
                    Explore the major cybersecurity
                    incident recorded for this period.
                </p>

            </div>


            <div class="attack-card">

                <div class="attack-card-header">

                    <div>

                        <span class="attack-year">
                            ${year}
                        </span>

                        <h2>
                            ${data.title}
                        </h2>

                    </div>

                    <span
                        class="filtered-threat ${(
                            data.threat || "medium"
                        ).toLowerCase()}"
                    >
                        ${data.threat || "MEDIUM"}
                    </span>

                </div>


                <div class="attack-grid">


                    <div>

                        <h3>
                            📅 When?
                        </h3>

                        <p>
                            ${data.date}
                        </p>

                    </div>


                    <div>

                        <h3>
                            ⚔️ Attack Type
                        </h3>

                        <p>
                            ${data.type}
                        </p>

                    </div>


                    <div>

                        <h3>
                            📂 Category
                        </h3>

                        <p>
                            ${data.category}
                        </p>

                    </div>


                    <div>

                        <h3>
                            🎯 Target
                        </h3>

                        <p>
                            ${data.target}
                        </p>

                    </div>


                    <div>

                        <h3>
                            🔥 What Was The Attack?
                        </h3>

                        <p>
                            ${data.attack}
                        </p>

                    </div>


                    <div>

                        <h3>
                            ❓ Why Was It Done?
                        </h3>

                        <p>
                            ${data.why ||
                            "The exact motivation is not clearly established in the available project data."}
                        </p>

                    </div>


                    <div>

                        <h3>
                            📉 What Was The Loss?
                        </h3>

                        <p>
                            ${data.loss}
                        </p>

                    </div>


                    <div>

                        <h3>
                            💥 Impact
                        </h3>

                        <p>
                            ${data.impact}
                        </p>

                    </div>


                    <div>

                        <h3>
                            🚑 How Was It Stopped?
                        </h3>

                        <p>
                            ${data.rescue}
                        </p>

                    </div>


                    <div>

                        <h3>
                            🛡️ How Can We Prevent It?
                        </h3>

                        <p>
                            ${data.prevention}
                        </p>

                    </div>


                </div>


                <!-- ATTACK STATISTICS -->

                <div class="attack-statistics">

                    <h3>
                        📊 Attack Statistics
                    </h3>

                    <div
                        class="attack-stat-grid"
                    >

                        <div
                            class="attack-stat"
                        >

                            <span>
                                Threat Level
                            </span>

                            <strong>
                                ${data.threat}
                            </strong>

                        </div>


                        <div
                            class="attack-stat"
                        >

                            <span>
                                Category
                            </span>

                            <strong>
                                ${data.category}
                            </strong>

                        </div>


                        <div
                            class="attack-stat"
                        >

                            <span>
                                Target
                            </span>

                            <strong>
                                ${data.target}
                            </strong>

                        </div>


                        <div
                            class="attack-stat"
                        >

                            <span>
                                Estimated Loss
                            </span>

                            <strong>
                                ${data.loss}
                            </strong>

                        </div>

                    </div>

                </div>


            </div>

        </div>

    `;


    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            "Currently exploring: " +
            year +
            " — " +
            data.title;

    }


    updateProgress(year);

}
