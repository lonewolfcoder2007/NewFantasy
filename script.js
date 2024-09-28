var totalscore = 0;
const ranks = ["F", "E", "D", "C", "B", "A", "S", "SS", "SSS"];

const guilds = [
    "Neon Crucible", "TechnoForge", "Void Seraphs", "Shadow Nexus", "CryoPhalanx", "Data Syndicate", "Ironclad Union", "Quantum Corsairs", "Cybernova", "Gravitas Collective", "Plasma Vanguard", 
    "Nano Legion", "AI Consortium", "Synth Reapers", "Cybernet Collective", "Stellar Cartel", "BioHacker Coalition", "Mecha Blades", "Photon Raiders", "Digital Dominion", 
    "Circuitbreakers", "Fusion Covenant", "Voidwalkers", "Neural Ascendants", "Graviton Order"
];

const roles = [
    "Cybernetician", "Synth-Jacker", "Techno-Nomad", "Data Runner", "Quantum Hacker", "Neuro-Splicer", "Drone Pilot", "Exo-Soldier", "Gravity Shifter", "Bio-Engineer", "Nano-Surgeon", "Cyber Ronin", 
    "Energy Manipulator", "Void Skimmer", "AI Whisperer", "Psi-Warrior", "Gene Splicer", "Code Phantom", "Grid Enforcer", "Weapon Specialist", "Cyber Gladiator", "Stasis Operative", "Quantum Enforcer", 
    "Tech Shaman", "Cyber Police Officer", "Corporate Agent", "Street Samurai", "Mind Runner", "Quantum Mechanic", "Nanotech Assassin", "Astro-Navigator", "Reality Bender", "Void Harvester",
    "Cryo-Tactician", "Cyber-Mercenary", "Virtual Reality Architect"
];

const races = [
    "Cybernetic Human", "Synthoid", "Voidborn", "Mecha-Beast", "Gene-Tweaked Human", "Bio-Android", "Digital Spirit", "Nano-Born", "Quantum Entity",  "Techno-Alien", "AI Construct", "Psi-Enhanced Human", 
    "Void Dweller", "Gravity Bender", "Robotic Hybrid", "Cloned Soul", "Chrono-Mutant", "Plasma Being", "Void Shadow", "Photon Being", "Hive Mind Collective", "Bio-Assimilator", "Quantum Phantom", 
    "Nano-Swarm Being", "Cryo-Mutant", "Digital Entity", "Hybrid Human", "Galactic Nomad", "Astral Entity", "Neuro-Borg", "Stellar Construct", "Dimensional Wanderer", "Hyper-Evolved Primate", 
    "Solar Ascendant", "Telekinetic Humanoid", "Cyber-Serpent", "Nano-Dragon"
];

const regions = [
    "Neonspire City", "Technocrypt Nexus", "Steelhaven", "Quantum Rift", "Voidfront", "Synthfall District", "Mecha-Wastes", "Cybersteel Enclave", "Voidreach Station", "Stellar Forge", "Data Vortex", 
    "Neural Nexus", "Graviton Slums", "Cryo-Citadel", "AI Core Sanctuary", "Neurogrid Expanse", "Holo-Realm", "Nano-Wastes", "Digital Abyss", "Plasma Verge", "Shattered Grid", 
    "Quantum Abyss", "Bio-Dome Alpha", "Virtual Utopia", "Fusion Fields", "Voidsea Outpost", "Cryo-Vault", "Eclipse Bastion", "Radiant Shard", "Cybernetic Frontier", "Dimensionless Drift"
];

const roleSkills = {
    "Cybernetician": [
        "Cybernetics Engineering", "Neural Interface Design", "Augmentation Synthesis", "Advanced AI Control", "Bio-Mechanical Integration", "Enhanced Reflex Programming", "Cyborg Anatomy Knowledge",
        "Drone Command", "Robotic Surgery", "Quantum Processor Overclocking", "Exo-Suit Customization", "Nano-Repair Protocols", "Sensory Enhancement Programming", "Mechanical Limbs Calibration",
        "Cyber Eye Augmentation", "Energy Shield Optimization", "Cyber-Security Bypass", "Implant Design", "Precision Tool Operation", "Cyber Neural Mapping", "Brain-Computer Interface Mastery", 
        "Digital Consciousness Transfer", "Advanced Neuroplasticity Control", "Machine Learning Algorithms", "Cognitive Processor Control"
    ],
    "Synth-Jacker": [
        "Synth Manipulation", "Neural Hacking", "Augmentation Hijacking", "Data Interception", "Augmented Strength Boost", "Neural Override", "Memory Extraction",
        "Cyber Implant Corruption", "Synth-Cloaking", "Perception Hijack", "Hostile AI Manipulation", "Synthetic Biology Knowledge", "Virtual Body Control", "Augmented Reflex Hacking",
        "Neural Interface Jamming", "Augmentation Disruption", "Infiltration Programming", "Advanced Neural Decryption", "Combat Synth Overload", "Virtual Combat Expertise", "Augmented Armor Sabotage",
        "Synth Weapon Overclocking", "Cognitive Reprogramming", "Mind-Wave Interference", "Data Stream Hijack", "Combat Reflex Enhancement"
    ],
    "Techno-Nomad": [
        "Mobile Tech Command", "Portable Power Systems", "Energy Shield Deployment", "Holographic Decoy Mastery", "Exo-Skeleton Control", "Environmental Adaptation", "Quantum Signal Control",
        "Stealth Field Generation", "Nomadic Navigation", "Survival Hacking", "Drone Companion Control", "Adaptive Weapon Tuning", "Kinetic Energy Storage", "Portable EMP Generator",
        "Mobile Data Encryption", "Cyber-Camouflage", "Digital Tactics", "Terrain Hacking", "Resource Optimization", "Portable AI Assistant", "Data Mapping Expertise", "Digital Trail Concealment",
        "Augmentation Battery Mastery", "Quantum Tracking", "Adaptive Armor Integration"
    ],
    "Data Runner": [
        "Data Encryption Mastery", "Packet Sniffing", "Quantum Decryption", "Firewall Breaching", "Neural Net Navigation", "Data Burst Transmission", "Zero-Latency Communication",
        "Data Integrity Protection", "Quantum Encryption Breaker", "Data Leak Containment", "Trace Erasure", "Compression Algorithms", "Firewall Penetration", "Network Relay Manipulation",
        "Quantum Routing", "Data Stream Control", "Advanced Code Injection", "Signal Manipulation", "Data Packet Reconstruction", "Time-Lock Encryption", "Signal Jamming", "Cyber Footprint Eradication",
        "Data Extraction", "Stealth Data Transfer", "Malware Deployment", "Reverse Engineering"
    ],
    "Quantum Hacker": [
        "Quantum Encryption Bypass", "Phase Hacking", "Dimensional Firewall Penetration", "Quantum Code Injection", "Time Loop Exploit", "Reality Alteration", "Quantum Key Distribution Mastery",
        "Parallel Network Manipulation", "Multi-Reality Access", "Quantum Processor Manipulation", "Quantum AI Control", "Phase Shift Hacking", "Quantum Data Manipulation", "Chrono Hacking",
        "Temporal Network Control", "Multi-Dimensional Analysis", "Quantum Feedback Looping", "Dimensional AI Reprogramming", "Quantum Firewalls", "Quantum Cloaking Protocols", "Reality Distortion Manipulation",
        "Quantum Phase Encryption", "Dimensional Vulnerability Exploitation", "Time Dilation Hacking", "Quantum Bit Management"
    ],
    "Neuro-Splicer": [
        "Neural Pathway Alteration", "Synapse Hacking", "Brainwave Interference", "Memory Splicing", "Consciousness Hacking", "Cognitive Override", "Neuro-Plasticity Mastery",
        "Neural Implant Integration", "Thought Pattern Encryption", "Cerebral Command", "Mental Pathway Reconstruction", "Mind-Control Protocols", "Neuro-Sensitivity Tuning", "Brainwave Manipulation",
        "Psychological Warfare Programming", "Consciousness Mapping", "Neuro-Security Bypass", "Cerebral System Hijacking", "Memory Reconstruction", "Cognitive Reflex Enhancement", "Artificial Emotion Implantation",
        "Mind Shackle", "Neural Override Mastery", "Brain-Machine Interface", "Subconscious Implantation"
    ],
    "Drone Pilot": [
        "Drone Combat Control", "Aerial Recon Mastery", "Remote Weapon Control", "Advanced Drone Swarm Management", "AI Pilot Control", "Drone Reflex Tuning", "Weaponized Drones",
        "Recon Data Analysis", "Multi-Drone Synchronization", "Advanced Flight Maneuvering", "Stealth Drone Deployment", "Aerial Attack Coordination", "Payload Delivery", "EMP Resistant Drones",
        "Drone Shielding Systems", "Environmental Drone Adaptation", "Drone Repair Mastery", "Combat AI Co-Pilot", "Drone Sentry Deployment", "Autonomous Recon Programming", "Energy Efficient Flight",
        "Heavy Duty Payload Management", "Anti-Air Drone Countermeasures", "Real-Time Drone Hacking", "Drone Stealth Tactics"
    ],
    "Exo-Soldier": [
        "Exo-Suit Mastery", "Heavy Exo Armor Use", "Energy Shield Manipulation", "Augmented Strength Control", "Advanced Target Acquisition", "Power Armor Combat", "Exo-Suit Mobility",
        "Exo Weapon Integration", "Combat Reflex Augmentation", "Power Armor Maintenance", "Exo-Combat Tactics", "Combat AI Interface", "Tactical HUD Mastery", "Exo Shield Deployment",
        "Advanced Suit Repairs", "Heavy Weapon Handling", "Augmented Mobility Mastery", "Exo-Stealth Technology", "Energy Weapon Mastery", "Nanite Repair Protocols", "EMP Defense", "Energy Core Overload",
        "Precision Targeting Systems", "Combat Maneuvering in Exo-Suit", "Survivability Enhancement"
    ],
    "Gravity Shifter": [
        "Gravity Manipulation", "Anti-Gravity Field Creation", "Gravitational Distortion", "Mass Alteration", "Gravity Well Deployment", "Field Levitation", "Gravitational Force Shielding",
        "Gravity Beam Control", "Tactical Gravity Shifting", "Gravitational Crush", "Mass Field Absorption", "Atmospheric Gravity Control", "Gravity Bomb Deployment", "Anti-Mass Armor",
        "Gravitational Energy Weaponry", "Gravity Compression", "Kinetic Energy Redirection", "Field Suppression", "Gravitational Field Detection", "Tactical Weight Manipulation", 
        "Zero-G Combat", "Gravity Distortion Shield", "Mass Displacement", "Space-Time Distortion", "Repulsion Field"
    ],
    "Bio-Engineer": [
        "Gene Editing", "Tissue Regeneration", "Bio-Augmentation", "Genetic Enhancement", "Biological Weapon Design", "Nanotech Bio Integration", "Immune System Hacking",
        "Synthetic Biology Mastery", "Bio-Interface Design", "Adaptive Physiology", "Virus Engineering", "Neuro-Bio Link Creation", "Advanced Cloning Techniques", "Stem Cell Manipulation",
        "Bio-Sensor Integration", "Toxin Resistance Enhancement", "Regenerative Nanites", "Bio-Chemical Knowledge", "Biological Computing", "Cognitive Gene Therapy", "Bio-Armor Synthesis",
        "Combat Gene Engineering", "Bio-Electronic Integration", "Organ Replacement", "Synthetic Organism Creation"
    ],
    "Nano-Surgeon": [
        "Nanobot Control", "Cellular Reconstruction", "Tissue Repair", "Nanite Immune Response", "Advanced Nano Programming", "Invasive Surgery with Nanites", "Nano-Drone Command",
        "Neural Nano-Stimulation", "Combat Field Medicine", "Nanite Adaptation", "Nano-Targeting Precision", "Micro-Surgery Mastery", "Infection Elimination", "Nanite Bone Reconstruction",
        "Neural Repair Protocols", "Nano-Tech Healing", "Cellular Regeneration", "Nanobot Combat Deployment", "Nano-Antidote Synthesis", "AI-Assisted Surgery", "Tissue Augmentation",
        "Nano-Implant Design", "Bio-Nano Fusion", "Internal Diagnostics", "Regenerative Therapy"
    ],
    "Cyber Ronin": [
        "Cyber Katana Mastery", "Augmented Reflexes", "Cybernetic Stealth", "Combat Augmentation", "Cyber Agility", "Neural Combat Programming", "Energy Blade Manipulation",
        "Combat Cloaking", "Augmented Martial Arts", "Drone Countermeasures", "AI Target Prediction", "Cybernetic Armor Use", "Stealth Maneuvering", "Combat Enhancement Hacking",
        "Energy Weapon Defense", "Precision Combat AI", "Enhanced Speed Protocols", "Combat Infiltration", "Exo-Suit Stealth", "Cybernetic Mobility Mastery", "Nanite Blade Edge",
        "Combat Neural Reflexes", "Energy Defense Maneuvers", "Augmented Strength Combat", "Precision Cyber Combat"
    ],
    "Energy Manipulator": [
        "Energy Field Manipulation", "Plasma Generation", "Force Field Deployment", "Electromagnetic Pulse Control", "Energy Weapon Mastery", "Thermal Energy Manipulation", "Kinetic Energy Absorption",
        "Plasma Blade Control", "Energy Shielding", "Energy Conversion Mastery", "Quantum Energy Manipulation", "Electromagnetic Storm", "Energy Core Overcharge", "Solar Energy Absorption",
        "Energy Discharge Control", "Energy Barrier Creation", "Thermal Dynamics Control", "Anti-Matter Energy Utilization", "Charged Particle Manipulation", "Power Field Mastery", "Photon Blast",
        "Energy Wave Emission", "Plasma Blast Control", "Energy Amplification", "Magnetic Field Mastery"
    ],
    "Void Skimmer": [
        "Dimensional Shift", "Void Navigation", "Space-Time Rift Control", "Void Energy Manipulation", "Dimensional Travel", "Anti-Gravity Control", "Void Cloaking",
        "Spatial Awareness Enhancement", "Quantum Rift Generation", "Void Energy Shield", "Reality Phase Shifting", "Dimensional Breaching", "Space-Time Anchor Deployment", "Quantum Slipstreaming",
        "Void Teleportation", "Dimensional Rift Mapping", "Void Energy Weaponry", "Quantum Warp Mastery", "Void Rift Stabilization", "Phase Shift Cloak", "Zero-Point Energy Control", 
        "Anti-Matter Weaponry", "Reality Folding", "Dimensional Rift Combat", "Void Surge Control"
    ],
    "AI Whisperer": [
        "AI Control Protocols", "Advanced AI Programming", "AI Sentience Design", "Neural Network Mastery", "Artificial Consciousness Creation", "AI Personality Programming", "Autonomous Weapon System Control",
        "AI Communication", "Digital Mind Programming", "AI Subconscious Manipulation", "Machine Learning Optimization", "AI Behavior Algorithms", "Neural Net Adaptation", "AI Conflict Resolution",
        "Advanced Cognitive AI Systems", "AI Empathy Programming", "AI Defensive Protocols", "Self-Aware AI Tuning", "Advanced Machine Learning Models", "Quantum AI Control", "AI Ethics Design",
        "Neural Net Algorithm Mastery", "Multi-AI Synchronization", "AI Intelligence Augmentation", "Digital Sentience Command"
    ],
    "Psi-Warrior": [
        "Telekinetic Force Mastery", "Mind Over Matter", "Telepathic Communication", "Psionic Shielding", "Mental Assault", "Psi-Blade Control", "Psychic Reflexes",
        "Telekinetic Flight", "Mind Control Resistance", "Psi-Enhanced Strength", "Psychic Stealth", "Psionic Weaponry", "Mental Projection", "Energy Manipulation through Thought",
        "Telekinetic Combat", "Mind Pulse Generation", "Psionic Barrier Deployment", "Empathic Healing", "Cognitive Suppression", "Mental Disruption", "Telepathic Overload", 
        "Psi Field Generation", "Mental Shield Reinforcement", "Psychic Infiltration", "Mind Warp"
    ],
    "Gene Splicer": [
        "Genetic Sequencing", "DNA Reconstruction", "Mutagenic Manipulation", "Gene Therapy Mastery", "Bio-Weapon Synthesis", "Hybrid Species Engineering", "Bio-Augmented Reflexes",
        "Neuro-DNA Enhancement", "Genetic Code Rewriting", "Genetic Shielding", "Combat Genetic Enhancement", "Toxin Resistance Engineering", "Mutation Control", "Rapid Evolution Design",
        "DNA Combat Mastery", "Genetic Stealth", "Bio-Toxin Synthesis", "Adaptive Gene Engineering", "Bio-Regeneration Acceleration", "Gene Manipulation Tactics", "Enhanced Strength Gene Splicing",
        "Genetic Disease Immunity", "Hybrid Weaponry Design", "Organism Modification", "Synthetic Genome Programming"
    ],
    "Code Phantom": [
        "Code Obfuscation", "Data Encryption Mastery", "Stealth Code Injection", "Digital Camouflage", "Firewall Circumvention", "Quantum Code Cracking", "Malware Creation",
        "Data Signature Hiding", "AI Countermeasures", "Digital Invisibility", "Code Manipulation", "Zero-Trace Hacking", "Ghost Protocol Activation", "Remote Device Control",
        "Signal Decryption", "Stealth Data Mining", "Quantum Firewall Breach", "Network Disappearance", "System Erasure", "Phantom Protocol Deployment", "Security Backdoor Creation",
        "Digital Identity Masking", "Intrusion Detection Avoidance", "Black Box Penetration", "Subterranean Hacking"
    ],
    "Grid Enforcer": [
        "Firewall Breaching", "Network Defense Mastery", "Grid Security Overhaul", "Digital Surveillance", "Intrusion Detection", "AI Defense Protocols", "Digital Takedown",
        "Malware Neutralization", "Quantum Grid Management", "Cyber Threat Intelligence", "Network Stability Control", "Grid Vulnerability Scanning", "Encryption Key Management", "Digital Forensics",
        "Grid Lockdown Protocols", "Security Breach Prevention", "Automated Defense Systems", "Quantum Intrusion Detection", "Network Intrusion Recovery", "System Integrity Restoration", "Threat Neutralization",
        "Hostile AI Containment", "Digital Grid Fortification", "Real-Time Network Control", "Malware Eradication"
    ],
    "Weapon Specialist": [
        "Energy Weapon Mastery", "Ballistics Expertise", "Weapon Calibration", "Heavy Firearms Handling", "Advanced Targeting Systems", "Kinetic Weapon Engineering", "Explosive Weaponry",
        "Tactical Reloading", "Sniper Rifle Precision", "Energy Core Overclocking", "Plasma Weapon Control", "Railgun Expertise", "Heavy Artillery Operation", "Portable EMP Launcher",
        "Laser Weapon Calibration", "Target Lock Systems", "Thermal Weaponry", "Shockwave Weaponry", "Stealth Weaponry", "Combat Projectile Mastery", "Gatling Gun Operation", 
        "Quantum Energy Rounds", "Weapon Crafting", "Tactical Ammunition Supply", "Auto-Turret Operation"
    ],
    "Cyber Gladiator": [
        "Cybernetic Weapon Mastery", "Combat Implants", "Enhanced Reflexes", "Augmented Strength", "Energy Shield Deployment", "Cyber Armor Use", "Cybernetic Endurance",
        "Combat AI Synchronization", "Cybernetic Martial Arts", "Energy Weaponry", "Advanced Hand-to-Hand Combat", "Battlefield Tactics", "Combat Implant Repair", "Adaptive Armor Systems",
        "Tactical Neural Enhancements", "Plasma Blade Proficiency", "Combat Programming", "Augmented Mobility", "Cybernetic Healing Systems", "EMP Resistance", "Combat Neural Interface",
        "Bio-Mechanical Repair", "Cybernetic Durability", "Combat Sensory Enhancement", "Energy Weapon Calibration"
    ],
    "Stasis Operative": [
        "Temporal Field Creation", "Time Freeze Manipulation", "Temporal Anomaly Detection", "Quantum Time Lock", "Chrono Combat Tactics", "Temporal Rift Navigation", "Time-Lock Weaponry",
        "Chrono-Disruption Field", "Temporal Stealth", "Time Loop Creation", "Dimensional Time Shift", "Temporal Barrier Deployment", "Time Field Stabilization", "Quantum Stasis Field",
        "Temporal Infiltration", "Combat Time Perception", "Chrono Energy Manipulation", "Time Warp Tactics", "Chrono Burst Weaponry", "Time-Lock Hacking", "Temporal Projection",
        "Chrono Stabilization Mastery", "Time-Lock Armor", "Temporal Reflex Enhancement", "Stasis Weapon Calibration"
    ],
    "Quantum Enforcer": [
        "Quantum Field Control", "Reality Stabilization", "Quantum Rift Detection", "Dimensional Policing", "Quantum Weapon Deployment", "Time-Space Monitoring", "Quantum Barrier Creation",
        "Reality Enforcement Protocols", "Multi-Dimensional Awareness", "Quantum Combat Tactics", "Reality Disruption Control", "Quantum Hacking Defense", "Dimensional Rift Combat", "Quantum Target Locking",
        "Time-Space Collapse Prevention", "Quantum Core Stabilization", "Dimensional Tracking", "Reality Breach Containment", "Quantum Cloaking Detection", "Anti-Phase Weaponry", "Time-Space Realignment",
        "Quantum Tether Deployment", "Chrono Combat Maneuvering", "Phase Shift Countermeasures", "Dimensional Lockdown"
    ],
    "Tech Shaman": [
        "Cyber Rituals", "Neural Enhancement Spells", "Machine Spirit Communication", "Tech Totem Creation", "Energy Field Harmonization", "Quantum Spellcasting", "Digital Healing Rituals",
        "Data Stream Divination", "Augmented Tech Blessings", "AI Spirit Summoning", "Quantum Field Invocation", "Nanite Enchantment", "Cyber Ward Creation", "Augmentation Infusion",
        "Tech Summoning Rituals", "Data Flow Alteration", "Circuit Augmentation", "Virtual Reality Projection", "Tech Entity Binding", "Machine Invocation", "Techno-Sorcery Mastery",
        "Digital Hexing", "Cybernetic Shielding Spells", "Nanite Repair Rites", "Quantum Ward Deployment"
    ],
    "Cyber Police Officer": [
        "Surveillance Network Mastery", "AI Crime Detection", "Grid Patrolling", "Cybercrime Investigation", "Intrusion Detection", "Digital Footprint Analysis", "Network Security",
        "Firewall Bypassing", "Suspect Neural Scanning", "Cybernetic Restraint Systems", "Cybercrime Intelligence Gathering", "Digital Pursuit Tactics", "Grid Violation Response", "AI-Enhanced Interrogation",
        "Hacker Takedown", "Digital Evidence Recovery", "Security Breach Containment", "Malware Detection", "Cybercrime Prevention", "Network Traffic Monitoring", "Suspect Profile Analysis",
        "Intrusion Alarm Systems", "Surveillance AI Deployment", "Data Breach Investigation", "Suspect Identification Systems"
    ],
    "Corporate Agent": [
        "Corporate Espionage", "Digital Asset Protection", "Hostile Takeover Tactics", "Cyber Economic Warfare", "Quantum Financial Systems", "Corporate Security Breach Countermeasures", "AI-Driven Market Analysis",
        "Data Interception", "Corporate Influence Operations", "Hostile AI Manipulation", "Executive Asset Protection", "Quantum Trading Manipulation", "Corporate Surveillance Tactics", "Security Audit Counterintelligence",
        "Corporate Data Encryption", "Digital Asset Recovery", "AI-Powered Negotiation Tactics", "Market Disruption", "Corporate Intelligence Gathering", "Competitive AI Sabotage", "Financial Data Hacking",
        "Quantum Currency Control", "Asset Tracing", "High-Level Executive Manipulation", "Corporate Blackmail"
    ],
    "Street Samurai": [
        "Augmented Blade Mastery", "Neural Combat Reflexes", "Cybernetic Agility", "Martial Arts Augmentation", "Energy Katana Mastery", "Combat Stealth", "Cyber Armor Mastery",
        "Augmented Speed Enhancement", "Combat Implant Optimization", "Stealth Movement Enhancement", "Tactical Blade Maneuvers", "Combat Reflex Programming", "Cybernetic Defense Mastery", "Augmented Strength Boost",
        "AI Combat Prediction", "Neural Infiltration Tactics", "Energy Blade Calibration", "Combat Cloaking Devices", "Cyber Limb Precision", "Neural Combat Optimization", "Plasma Blade Proficiency",
        "Neural Reflex Augmentation", "Combat Awareness Programming", "Cyber Martial Arts", "Cybernetically Enhanced Perception"
    ],
    "Mind Runner": [
        "Mind-Machine Interface Mastery", "Cognitive Data Transfer", "Thought Encryption", "Neural Command Hacking", "Brainwave Scanning", "Consciousness Hacking", "Mind Control Resistance",
        "Mental Firewall Deployment", "Neural Hacking Defense", "Cognitive Synchronization", "Memory Hacking", "Digital Thought Projection", "Mental Network Navigation", "Mind-Cloud Synchronization",
        "Subconscious Data Retrieval", "Mental Energy Shielding", "Consciousness Transfer", "Neural Network Communication", "Memory Erasure Protocols", "Digital Dream Manipulation", "Subconscious Hacking",
        "Psychic Infiltration", "Neural Feedback Loop Creation", "Cognitive Combat Reflexes", "Mindwave Manipulation"
    ],
    "Quantum Mechanic": [
        "Quantum Entanglement Manipulation", "Reality Repair Protocols", "Dimensional Stabilization", "Quantum Rift Sealing", "Space-Time Fabrication", "Quantum Device Calibration", "Quantum Power Systems",
        "Multi-Dimensional Engineering", "Quantum Circuit Repair", "Temporal Anomaly Detection", "Quantum Computing Mastery", "Phase Shift Engineering", "Dimensional Tuning", "Quantum Drive Engineering",
        "Anti-Matter Containment", "Reality Warp Prevention", "Quantum Processor Synchronization", "Phase Modulation", "Quantum Fusion Reactor Maintenance", "Temporal Field Calibration", "Quantum Energy Conversion",
        "Dimensional Flux Stabilization", "Phase Shift Weapon Calibration", "Quantum Rift Mapping", "Quantum Core Repair"
    ],
    "Nanotech Assassin": [
        "Nanobot Infiltration", "Molecular Deconstruction", "Nano-Stealth Deployment", "Nanite Poisoning", "Nano-Warfare Tactics", "Neural Nanite Hacking", "Nanobot Disguise",
        "Micro-Tech Espionage", "Nanite Weaponry", "Bio-Nanite Targeting", "Nanobot Assassination Protocols", "Nano-Armor Penetration", "Molecular Disruption", "Nanite Cloaking",
        "Nanobot Combat Deployment", "Bio-Toxin Nanites", "Micro-Drones for Surveillance", "Nano Explosive Charges", "Nanobot Precision Attack", "Cognitive Nanite Implants", "Nanotech Virus Deployment",
        "Stealth Nanite Sabotage", "Nanite Healing Interruption", "Biological System Overload", "Nano-Wave Disruption"
    ],
    "Astro-Navigator": [
        "Star Chart Navigation", "Quantum Drive Operation", "Astro-Coordinate Mapping", "Wormhole Navigation", "Gravitational Field Mapping", "Spatial Awareness Enhancement", "Quantum Rift Detection",
        "Exoplanet Surveying", "Astro-Distortion Calibration", "Dimensional Warp Navigation", "Celestial Event Prediction", "Quantum Jump Calculation", "Space-Time Continuum Monitoring", "Asteroid Field Evasion",
        "Black Hole Trajectory Calculation", "Starship Navigation Systems", "Wormhole Stabilization", "Gravity Well Avoidance", "Quantum Jump Execution", "Astro-Navigation AI Integration", "Interstellar Mapping",
        "Quantum Energy Detection", "Space-Time Travel Mastery", "Supernova Prediction", "Solar Flare Detection"
    ],
    "Reality Bender": [
        "Reality Warp Manipulation", "Dimensional Distortion", "Matter Reshaping", "Temporal Shift Control", "Quantum Probability Control", "Reality Anchor Creation", "Reality Breach Detection",
        "Phase Shift Manipulation", "Time-Space Distortion", "Energy Matrix Alteration", "Quantum Realignment", "Phase Reality Stabilization", "Matter-Phase Conversion", "Dimensional Warp Projection",
        "Quantum Flux Management", "Alternate Timeline Creation", "Matter Displacement", "Dimensional Folding", "Reality Shielding", "Quantum Paradox Control", "Energy to Matter Conversion",
        "Reality Tear Prevention", "Quantum Fabric Reinforcement", "Phase Shift Awareness", "Dimensional Space Expansion"
    ],
    "Void Harvester": [
        "Void Energy Extraction", "Dark Matter Manipulation", "Void Rift Control", "Gravitational Well Creation", "Dimensional Tear Harvesting", "Anti-Matter Containment", "Quantum Void Mapping",
        "Void Rift Navigation", "Dark Energy Weaponry", "Void Resonance Tuning", "Quantum Vacuum Energy Harnessing", "Matter Extraction from Void", "Dimensional Collapse Prevention", "Void Entity Communication",
        "Quantum Rift Harvesting", "Gravitational Collapse Control", "Void Energy Shielding", "Energy Drain from Void", "Void Rift Sealing", "Quantum Energy Conversion", "Void Surge Harnessing",
        "Quantum Void Resonance", "Dimensional Void Engineering", "Void Anomaly Detection", "Black Hole Energy Harvesting"
    ],
    "Cryo-Tactician": [
        "Cryogenic Field Generation", "Thermal Energy Manipulation", "Cryo Weapon Mastery", "Cryo Barrier Deployment", "Cryo Combat Tactics", "Cold Resistance Enhancement", "Liquid Nitrogen Deployment",
        "Cryo-Damage Amplification", "Thermal Energy Drain", "Ice Shield Creation", "Cryogenic Breach Tactics", "Cryo-Freezing Explosives", "Sub-Zero Temperature Manipulation", "Cryo-Armor Engineering",
        "Frozen Terrain Creation", "Cryo Energy Conduction", "Combat Cryostasis", "Cryo Field Expansion", "Cryogenic Disruption", "Frost Blade Mastery", "Temperature Manipulation Tactics", "Cryo-Grenade Deployment",
        "Cryo-Field Stabilization", "Combat Frostbite Generation", "Thermal Energy Neutralization"
    ],
    "Cyber-Mercenary": [
        "Combat Drone Command", "Energy Weaponry", "Cybernetic Strength Enhancement", "Stealth Field Operation", "Combat AI Synchronization", "Augmented Reflexes", "Tactical Deployment Systems",
        "Energy Shield Mastery", "Cyber Armor Usage", "Targeting System Hacking", "Augmented Combat Tactics", "Tactical EMP Deployment", "Plasma Blade Mastery", "Combat Cloaking",
        "Exo-Suit Mastery", "Energy Surge Weaponry", "Kinetic Armor Systems", "Advanced Hand-to-Hand Combat", "Cyber Limb Precision", "Neural Combat Programming", "Combat Drone Deployment",
        "Augmented Mobility", "Energy Surge Control", "Cybernetic Field Maintenance", "Combat Neural Interface"
    ],
    "Virtual Reality Architect": [
        "VR World Building", "Quantum Simulation Creation", "Reality Rendering Control", "AI-Driven Simulation Tuning", "Neural Interface Design", "Sensory Augmentation", "Virtual Landscape Manipulation",
        "VR Combat Arena Creation", "Mind Mapping Interface", "Sensory Feedback Optimization", "Quantum VR Network Management", "Neural Sync Calibration", "Advanced VR Physics", "AI-Supported World Creation",
        "VR Weapon Design", "Augmented Reality Fusion", "Reality Simulation Stabilization", "Neural Interface Synchronization", "VR Reality Tuning", "Multi-Sensory Immersion", "VR Security System Design",
        "Simulation Continuum Stabilization", "Advanced Avatar Creation", "Augmented Reality Holograms", "Neural Immersive Interaction"
    ]
};

const titles = {
    "Cybernetician": [
        "Master of Circuits", "Cyber Architect", "Data Sculptor", "Code Crafter", "Circuit Sage", 
        "Neural Engineer", "System Synthesizer", "Machine Binder", "Digital Artisan", "AI Conductor", 
        "Robotic Maestro", "Code Breaker", "Circuit Weaver", "Quantum Programmer", "Cyber Mechanic"
    ],
    
    "Synth-Jacker": [
        "Synth Raider", "Mind Pirate", "Soul Hijacker", "Code Marauder", "Data Seizer", 
        "Tech Bandit", "Synthetic Saboteur", "Neuro Thief", "Memory Plunderer", "Mind Snatcher", 
        "Neural Infiltrator", "Body Hijacker", "Synth Marauder", "Virtual Bandit", "Digital Raider"
    ],
    
    "Techno-Nomad": [
        "Wanderer of the Grid", "Circuit Vagabond", "Tech Traveler", "Cyber Pilgrim", "Digital Drifter", 
        "Data Wanderer", "Code Exile", "Neon Wayfarer", "Grid Outlander", "Quantum Nomad", 
        "Hyperlaner", "Net Strider", "Data Gypsy", "Rogue Coder", "Cosmic Wanderer"
    ],
    
    "Data Runner": [
        "Packet Sprinter", "Bit Courier", "Cipher Runner", "Quantum Messenger", "Code Courier", 
        "Neural Sprinter", "Packet Smuggler", "Info Whisperer", "Cyber Courier", "Digital Runner", 
        "Grid Racer", "Cipher Sprinter", "Quantum Sprinter", "Data Harrier", "Info Drifter"
    ],
    
    "Quantum Hacker": [
        "Reality Cracker", "Code Warper", "Dimensional Breaker", "Data Anomaly", "Quantum Cipher", 
        "Hyper-Slicer", "Entanglement Manipulator", "Schrodinger's Coder", "Virtual Breaker", "Bit Entangler", 
        "Subspace Hacker", "Quantum Disruptor", "Dimensional Codebreaker", "Time-Twister", "Reality Slicer"
    ],
    
    "Neuro-Splicer": [
        "Mind Weaver", "Thought Surgeon", "Synapse Splicer", "Neural Sculptor", "Cognitive Crafter", 
        "Neuro Hacker", "Mind Binder", "Memory Engineer", "Dream Shaper", "Neuron Twister", 
        "Cerebral Crafter", "Mind-Meld Operative", "Neuro Artisan", "Synaptic Engineer", "Thought Hacker"
    ],
    
    "Drone Pilot": [
        "Sky Navigator", "Remote Operator", "Rogue Pilot", "Drone Commander", "Skybound Agent", 
        "Wingmaster", "Cyber Swarm Leader", "Mech-Swarm Pilot", "Void Flyer", "Drone Squadron Leader", 
        "Autonomous Aviator", "Mech-Fleet Commander", "Sky-Pathfinder", "Swarm Master", "Digital Pilot"
    ],
    
    "Exo-Soldier": [
        "Mech Warrior", "Armored Veteran", "Exo Enforcer", "Battleframe Operator", "Steel Vanguard", 
        "Cyber Knight", "Heavy Armor Specialist", "Exo Operative", "Steel Battalion", "Titan Walker", 
        "Exo Sentinel", "Cyber Juggernaut", "Warframe Operator", "Mech Mercenary", "Exo Legionnaire"
    ],
    
    "Gravity Shifter": [
        "Void Manipulator", "Graviton Shaper", "Force Bender", "Graviton Architect", "Quantum Grav Handler", 
        "Space Warper", "Singularity Weaver", "Mass Disruptor", "Void Shaper", "Gravity Sculptor", 
        "Force Master", "Dimensional Gravity Shifter", "Void Bender", "Black Hole Tamer", "Gravity Twister"
    ],
    
    "Bio-Engineer": [
        "Genetic Shaper", "Life Architect", "DNA Weaver", "Biotech Innovator", "Genome Crafter", 
        "Cell Sculptor", "Biotic Engineer", "Neon Biologist", "Life Synthesizer", "Gene Designer", 
        "Bio Hacker", "Bio Architect", "Cell Crafter", "Synthetic Biologist", "Evolution Designer"
    ],
    
    "Nano-Surgeon": [
        "Nano Healer", "Molecular Doctor", "Atomic Surgeon", "Nano Architect", "Cellular Weaver", 
        "Microscopic Medic", "Nano-Cell Sculptor", "Quantum Healer", "Micro Surgeon", "Nano Crafter", 
        "Nanite Specialist", "Bio-Nano Healer", "Nano Medic", "Nano-Therapist", "Molecular Sculptor"
    ],
    
    "Cyber Ronin": [
        "Digital Wanderer", "Code Ronin", "Data Samurai", "Cyber Exile", "Neon Blade", 
        "Cyber Warrior", "Rogue Hacker", "Ronin of the Grid", "Digital Mercenary", "Circuit Nomad", 
        "Blade of the Grid", "Cyber Sword", "Grid Samurai", "Cyber Outlaw", "Shadow Blade"
        ],
        
    "Energy Manipulator": [
        "Force Shaper", "Plasma Crafter", "Light Weaver", "Energy Sculptor", "Quantum Energy Master", 
        "Plasma Shaper", "Energy Conductor", "Power Architect", "Electro Crafter", "Volt Sculptor", 
        "Neon Force Bender", "Lightning Crafter", "Quantum Charger", "Plasma Weaver", "Volt Bender"
        ],
        
    "Void Skimmer": [
        "Edge of Reality", "Void Navigator", "Space Diver", "Dimensional Voyager", "Quantum Void Pilot", 
        "Void Whisperer", "Dimensional Traveler", "Voidcraft Operator", "Event Horizon Skimmer", "Voidwalker", 
        "Stellar Skipper", "Subspace Drifter", "Void Surfer", "Quantum Voyager", "Graviton Diver"
        ],
        
    "AI Whisperer": [
        "Sentient Shaper", "Code Oracle", "AI Architect", "Cognizant Binder", "Machine Speaker", 
        "Digital Sage", "Synthetic Sage", "AI Engineer", "Code Whisperer", "Machine Interpreter", 
        "AI Keeper", "Algorithm Weaver", "Sentient Designer", "Code Mediator", "Cyber Speaker"
    ],
    "Psi-Warrior": [
        "Mindblade", "Psychic Enforcer", "Mental Vanguard", "Telepathic Knight", "Psionic Crusader", 
        "Thoughtblade", "Psi-Warden", "Mindforce Adept", "Cerebral Sentinel", "Mental Combatant", 
        "Telekinetic Warlord", "Psionic Shadow", "Thought Enforcer", "Psychic Guardian", "Psi-Samurai"
    ],
    
    "Gene Splicer": [
        "Genetic Alchemist", "DNA Crafter", "Genome Weaver", "Biomorph Artisan", "Evolution Designer", 
        "Gene Sculptor", "Genetic Architect", "Bio-Slicer", "Life Code Manipulator", "Biotech Artisan", 
        "Mutation Crafter", "Bio-Crafter", "Genome Innovator", "Gene Binder", "Biomorph Shaper"
    ],
    
    "Code Phantom": [
        "Digital Ghost", "Cyber Specter", "Shadow Coder", "Neon Phantom", "Code Wraith", 
        "Invisible Hacker", "Binary Shade", "Quantum Ghost", "Cipher Shade", "Virtual Apparition", 
        "Spectral Coder", "Data Shade", "Neural Wraith", "Grid Phantom", "Quantum Specter"
    ],
    
    "Grid Enforcer": [
        "Network Guardian", "Cyber Sentinel", "Protocol Enforcer", "System Enforcer", "Code Sheriff", 
        "Grid Sentinel", "Neon Watcher", "Firewall Warden", "Digital Lawkeeper", "Network Marshal", 
        "Cyber Vanguard", "Grid Arbiter", "Net Enforcer", "Digital Lawbringer", "Protocol Defender"
    ],
    
    "Weapon Specialist": [
        "Armory Master", "Firepower Expert", "Tech Blademaster", "Munitions Architect", "Arsenal Crafter", 
        "Firepower Savant", "Cyber Armorer", "Blade Engineer", "Tactical Weaponist", "Neon Armamentist", 
        "Heavy Weapon Artist", "Ballistics Expert", "Weapon Tactician", "Plasma Gunner", "Arsenal Engineer"
    ],
    
    "Cyber Gladiator": [
        "Arena Brawler", "Steel Duelist", "Neon Fighter", "Battleframe Gladiator", "Cyber Pit Fighter", 
        "Digital Warrior", "Steel Arena Champion", "Neon Bruiser", "Circuit Gladiator", "Titan Brawler", 
        "Cyber Arena Champion", "Digital Combatant", "Neon Duelist", "Steel Battler", "Cyber Pit Champion"
    ],
    
    "Stasis Operative": [
        "Timekeeper", "Temporal Enforcer", "Chrono Operator", "Quantum Sleeper", "Stasis Guardian", 
        "Time Warden", "Frozen Sentinel", "Temporal Sentinel", "Stasis Soldier", "Chrono Agent", 
        "Stasis Keeper", "Temporal Strategist", "Chrono Guardian", "Frozen Enforcer", "Timebound Soldier"
    ],
    
    "Quantum Enforcer": [
        "Reality Guardian", "Quantum Regulator", "Dimensional Enforcer", "Time-Warp Officer", "Chrono Keeper", 
        "Space-Time Arbiter", "Quantum Sentinel", "Reality Keeper", "Dimensional Warden", "Quantum Overseer", 
        "Chrono Enforcer", "Dimensional Guardian", "Time-Bender Enforcer", "Reality Shifter", "Quantum Protector"
    ],
    
    "Tech Shaman": [
        "Circuit Mystic", "Neon Shaman", "Digital Seer", "Grid Mystic", "Tech Oracle", 
        "Machine Prophet", "Code Shaman", "Cyber Spirit", "Quantum Mystic", "AI Sage", 
        "Digital Guide", "Data Shaman", "Machine Whisperer", "Cyber Seer", "Virtual Mystic"
    ],
    
    "Cyber Police Officer": [
        "Cyber Beat Cop", "Grid Officer", "Digital Enforcer", "Tech Patrolman", "Neon Lawkeeper", 
        "Cyber Detective", "Network Enforcer", "Digital Constable", "Neural Patrol Officer", "Cyber Marshal", 
        "Circuit Enforcer", "Data Patrol Officer", "Grid Inspector", "Protocol Officer", "Cyber Lawman"
    ],
    
    "Corporate Agent": [
        "Corporate Operator", "Neon Agent", "Cyber Diplomat", "Corporate Fixer", "Tech Operative", 
        "Corporate Spy", "Neural Agent", "Grid Operative", "Digital Fixer", "Tech Negotiator", 
        "Corporate Strategist", "Corporate Executive", "Corporate Handler", "Neon Diplomat", "Data Broker"
    ],
    
    "Street Samurai": [
        "Blade Runner", "Neon Ronin", "Cyber Swordmaster", "Street Ronin", "Cyber Warrior", 
        "Blade Dancer", "Street Ronin", "Tech Katana Master", "Neon Swordsman", "Urban Samurai", 
        "Steel Blade", "Cyber Katana Wielder", "Street Blademaster", "Neon Warrior", "Urban Ronin"
    ],
    
    "Mind Runner": [
        "Memory Seeker", "Neural Navigator", "Thought Harvester", "Cognitive Runner", "Neon Dreamcatcher", 
        "Neuro Runner", "Mind Sprinter", "Mental Strider", "Thought Racer", "Memory Diver", 
        "Neural Pathfinder", "Dream Weaver", "Cognition Runner", "Neural Seeker", "Memory Runner"
    ],
    
    "Quantum Mechanic": [
        "Reality Engineer", "Dimensional Mechanic", "Space-Time Fixer", "Quantum Craftsman", "Dimensional Engineer", 
        "Chrono Mechanic", "Time-Warp Technician", "Quantum Tinkerer", "Space-Time Artisan", "Quantum Engineer", 
        "Dimensional Technician", "Temporal Fixer", "Reality Craftsman", "Quantum Technician", "Chrono Engineer"
    ],
    
    "Nanotech Assassin": [
        "Nano Blade", "Micro Killer", "Molecular Executioner", "Nano Ghost", "Neural Slicer", 
        "Nano Saboteur", "Atom Assassin", "Molecular Slayer", "Quantum Killer", "Nano Operative", 
        "Micro Hunter", "Nanite Assassin", "Nano Reaper", "Molecular Ghost", "Nano Predator"
    ],
    
    "Astro-Navigator": [
        "Starship Pathfinder", "Stellar Navigator", "Void Pilot", "Quantum Voyager", "Astro Scout", 
        "Starship Pilot", "Void Wayfinder", "Stellar Guide", "Quantum Pilot", "Voidcraft Navigator", 
        "Spacefarer", "Starbound Navigator", "Astro Pilot", "Galactic Navigator", "Void Scout"
    ],
    
    "Reality Bender": [
        "Dimension Shifter", "Space-Time Bender", "Quantum Reality Shaper", "Chrono Crafter", "Reality Twister", 
        "Dimensional Weaver", "Quantum Shaper", "Reality Architect", "Space-Time Sculptor", "Dimensional Warper", 
        "Quantum Weaver", "Chrono Shifter", "Reality Warper", "Time-Twister", "Quantum Architect"
    ],
    
    "Void Harvester": [
        "Stellar Reaper", "Quantum Extractor", "Void Collector", "Event Horizon Harvester", "Black Hole Tamer", 
        "Cosmic Harvester", "Neon Reaper", "Space Gatherer", "Quantum Collector", "Stellar Extractor", 
        "Void Gatherer", "Cosmic Collector", "Space Reaper", "Neon Harvester", "Void Extractor"
    ],
    
    "Cryo-Tactician": [
        "Frozen Strategist", "Cold-Warrior", "Cryo Commander", "Ice Mastermind", "Frost Tactician", 
        "Cryo Strategist", "Glacier Commander", "Cold Vanguard", "Frozen Planner", "Cryo Operative", 
        "Glacial Strategist", "Frost Commander", "Cryo Planner", "Chill Vanguard", "Frozen Tactician"
    ],
    
    "Cyber-Mercenary": [
        "Tech Merc", "Digital Gun-for-Hire", "Neon Mercenary", "Cyber Gunman", "Code Soldier", 
        "Circuit Merc", "Digital Enforcer", "Grid Mercenary", "Neural Gun-for-Hire", "Cyber Freelancer", 
        "Tech Contractor", "Cyber Hired Gun", "Grid Freelancer", "Digital Bounty Hunter", "Neon Freelancer"
    ],
    
    "Virtual Reality Architect": [
        "Simulation Builder", "VR Designer", "Reality Sculptor", "Dream Architect", "Virtual World Crafter", 
        "Neon Reality Builder", "VR Shaper", "Digital Dimension Architect", "Neural Designer", "Virtual Sculptor", 
        "Dream Engineer", "Sim Crafter", "Neon VR Architect", "Virtual Crafter", "Simulation Engineer"
    ],
    "Cybernetician": [
        "Master of Circuits", "Cyber Architect", "Data Sculptor", "Code Crafter", "Circuit Sage", 
        "Neural Engineer", "System Synthesizer", "Machine Binder", "Digital Artisan", "AI Conductor", 
        "Robotic Maestro", "Code Breaker", "Circuit Weaver", "Quantum Programmer", "Cyber Mechanic"
    ],
    
    "Synth-Jacker": [
        "Synth Raider", "Mind Pirate", "Soul Hijacker", "Code Marauder", "Data Seizer", 
        "Tech Bandit", "Synthetic Saboteur", "Neuro Thief", "Memory Plunderer", "Mind Snatcher", 
        "Neural Infiltrator", "Body Hijacker", "Synth Marauder", "Virtual Bandit", "Digital Raider"
    ],
    
    "Techno-Nomad": [
        "Wanderer of the Grid", "Circuit Vagabond", "Tech Traveler", "Cyber Pilgrim", "Digital Drifter", 
        "Data Wanderer", "Code Exile", "Neon Wayfarer", "Grid Outlander", "Quantum Nomad", 
        "Hyperlaner", "Net Strider", "Data Gypsy", "Rogue Coder", "Cosmic Wanderer"
    ],
    
    "Data Runner": [
        "Packet Sprinter", "Bit Courier", "Cipher Runner", "Quantum Messenger", "Code Courier", 
        "Neural Sprinter", "Packet Smuggler", "Info Whisperer", "Cyber Courier", "Digital Runner", 
        "Grid Racer", "Cipher Sprinter", "Quantum Sprinter", "Data Harrier", "Info Drifter"
    ],
    
    "Quantum Hacker": [
        "Reality Cracker", "Code Warper", "Dimensional Breaker", "Data Anomaly", "Quantum Cipher", 
        "Hyper-Slicer", "Entanglement Manipulator", "Schrodinger's Coder", "Virtual Breaker", "Bit Entangler", 
        "Subspace Hacker", "Quantum Disruptor", "Dimensional Codebreaker", "Time-Twister", "Reality Slicer"
    ],
    
    "Neuro-Splicer": [
        "Mind Weaver", "Thought Surgeon", "Synapse Splicer", "Neural Sculptor", "Cognitive Crafter", 
        "Neuro Hacker", "Mind Binder", "Memory Engineer", "Dream Shaper", "Neuron Twister", 
        "Cerebral Crafter", "Mind-Meld Operative", "Neuro Artisan", "Synaptic Engineer", "Thought Hacker"
    ],
    
    "Drone Pilot": [
        "Sky Navigator", "Remote Operator", "Rogue Pilot", "Drone Commander", "Skybound Agent", 
        "Wingmaster", "Cyber Swarm Leader", "Mech-Swarm Pilot", "Void Flyer", "Drone Squadron Leader", 
        "Autonomous Aviator", "Mech-Fleet Commander", "Sky-Pathfinder", "Swarm Master", "Digital Pilot"
    ],
    
    "Exo-Soldier": [
        "Mech Warrior", "Armored Veteran", "Exo Enforcer", "Battleframe Operator", "Steel Vanguard", 
        "Cyber Knight", "Heavy Armor Specialist", "Exo Operative", "Steel Battalion", "Titan Walker", 
        "Exo Sentinel", "Cyber Juggernaut", "Warframe Operator", "Mech Mercenary", "Exo Legionnaire"
    ],
    
    "Gravity Shifter": [
        "Void Manipulator", "Graviton Shaper", "Force Bender", "Graviton Architect", "Quantum Grav Handler", 
        "Space Warper", "Singularity Weaver", "Mass Disruptor", "Void Shaper", "Gravity Sculptor", 
        "Force Master", "Dimensional Gravity Shifter", "Void Bender", "Black Hole Tamer", "Gravity Twister"
    ],
    
    "Bio-Engineer": [
        "Genetic Shaper", "Life Architect", "DNA Weaver", "Biotech Innovator", "Genome Crafter", 
        "Cell Sculptor", "Biotic Engineer", "Neon Biologist", "Life Synthesizer", "Gene Designer", 
        "Bio Hacker", "Bio Architect", "Cell Crafter", "Synthetic Biologist", "Evolution Designer"
    ],
    
    "Nano-Surgeon": [
        "Nano Healer", "Molecular Doctor", "Atomic Surgeon", "Nano Architect", "Cellular Weaver", 
        "Microscopic Medic", "Nano-Cell Sculptor", "Quantum Healer", "Micro Surgeon", "Nano Crafter", 
        "Nanite Specialist", "Bio-Nano Healer", "Nano Medic", "Nano-Therapist", "Molecular Sculptor"
    ],
    
    "Cyber Ronin": [
        "Digital Wanderer", "Code Ronin", "Data Samurai", "Cyber Exile", "Neon Blade", 
        "Cyber Warrior", "Rogue Hacker", "Ronin of the Grid", "Digital Mercenary", "Circuit Nomad", 
        "Blade of the Grid", "Cyber Sword", "Grid Samurai", "Cyber Outlaw", "Shadow Blade"
    ],
    
    "Energy Manipulator": [
        "Force Shaper", "Plasma Crafter", "Light Weaver", "Energy Sculptor", "Quantum Energy Master", 
        "Plasma Shaper", "Energy Conductor", "Power Architect", "Electro Crafter", "Volt Sculptor", 
        "Neon Force Bender", "Lightning Crafter", "Quantum Charger", "Plasma Weaver", "Volt Bender"
    ],
    
    "Void Skimmer": [
        "Edge of Reality", "Void Navigator", "Space Diver", "Dimensional Voyager", "Quantum Void Pilot", 
        "Void Whisperer", "Dimensional Traveler", "Voidcraft Operator", "Event Horizon Skimmer", "Voidwalker", 
        "Stellar Skipper", "Subspace Drifter", "Void Surfer", "Quantum Voyager", "Graviton Diver"
    ],
    
    "AI Whisperer": [
        "Sentient Shaper", "Code Oracle", "AI Architect", "Cognizant Binder", "Machine Speaker", 
        "Digital Sage", "Synthetic Sage", "AI Engineer", "Code Whisperer", "Machine Interpreter", 
        "AI Keeper", "Algorithm Weaver", "Sentient Designer", "Code Mediator", "Cyber Speaker"
    ],
    
    "Psi-Warrior": [
        "Mindblade", "Psychic Enforcer", "Mental Vanguard", "Telepathic Knight", "Psionic Crusader", 
        "Thoughtblade", "Psi-Warden", "Mindforce Adept", "Cerebral Sentinel", "Mental Combatant", 
        "Telekinetic Warlord", "Psionic Shadow", "Thought Enforcer", "Psychic Guardian", "Psi-Samurai"
    ],
    
    "Gene Splicer": [
        "Genetic Alchemist", "DNA Crafter", "Genome Weaver", "Biomorph Artisan", "Evolution Designer", 
        "Gene Sculptor", "Genetic Architect", "Bio-Slicer", "Life Code Manipulator", "Biotech Artisan", 
        "Mutation Crafter", "Bio-Crafter", "Genome Innovator", "Gene Binder", "Biomorph Shaper"
    ],
    
    "Code Phantom": [
        "Digital Ghost", "Cyber Specter", "Shadow Coder", "Neon Phantom", "Code Wraith", 
        "Invisible Hacker", "Binary Shade", "Quantum Ghost", "Cipher Shade", "Virtual Apparition", 
        "Spectral Coder", "Data Shade", "Neural Wraith", "Grid Phantom", "Quantum Specter"
    ],
    
    "Grid Enforcer": [
        "Network Guardian", "Cyber Sentinel", "Protocol Enforcer", "System Enforcer", "Code Sheriff", 
        "Grid Sentinel", "Neon Watcher", "Firewall Warden", "Digital Lawkeeper", "Network Marshal", 
        "Cyber Vanguard", "Grid Arbiter", "Net Enforcer", "Digital Lawbringer", "Protocol Defender"
    ],
    
    "Weapon Specialist": [
        "Armory Master", "Firepower Expert", "Tech Blademaster", "Munitions Architect", "Arsenal Crafter", 
        "Firepower Savant", "Cyber Armorer", "Blade Engineer", "Tactical Weaponist", "Neon Armamentist", 
        "Heavy Weapon Artist", "Ballistics Expert", "Weapon Tactician", "Plasma Gunner", "Arsenal Engineer"
    ],
    
    "Cyber Gladiator": [
        "Arena Brawler", "Steel Duelist", "Neon Fighter", "Battleframe Gladiator", "Cyber Pit Fighter", 
        "Digital Warrior", "Steel Arena Champion", "Neon Bruiser", "Circuit Gladiator", "Titan Brawler", 
        "Cyber Arena Champion", "Digital Combatant", "Neon Duelist", "Steel Battler", "Cyber Pit Champion"
    ],
    
    "Stasis Operative": [
        "Timekeeper", "Temporal Enforcer", "Chrono Operator", "Quantum Sleeper", "Stasis Guardian", 
        "Time Warden", "Frozen Sentinel", "Temporal Sentinel", "Stasis Soldier", "Chrono Agent", 
        "Stasis Keeper", "Temporal Strategist", "Chrono Guardian", "Frozen Enforcer", "Timebound Soldier"
    ],
    
    "Quantum Enforcer": [
        "Reality Guardian", "Quantum Regulator", "Dimensional Enforcer", "Time-Warp Officer", "Chrono Keeper", 
        "Space-Time Arbiter", "Quantum Sentinel", "Reality Keeper", "Dimensional Warden", "Quantum Overseer", 
        "Chrono Enforcer", "Dimensional Guardian", "Time-Bender Enforcer", "Reality Shifter", "Quantum Protector"
    ],
    
    "Tech Shaman": [
        "Circuit Mystic", "Neon Shaman", "Digital Seer", "Grid Mystic", "Tech Oracle", 
        "Machine Prophet", "Code Shaman", "Cyber Spirit", "Quantum Mystic", "AI Sage", 
        "Digital Guide", "Data Shaman", "Machine Whisperer", "Cyber Seer", "Virtual Mystic"
    ],
    
    "Cyber Police Officer": [
        "Cyber Beat Cop", "Grid Officer", "Digital Enforcer", "Tech Patrolman", "Neon Lawkeeper", 
        "Cyber Detective", "Network Enforcer", "Digital Constable", "Neural Patrol Officer", "Cyber Marshal", 
        "Circuit Enforcer", "Data Patrol Officer", "Grid Inspector", "Protocol Officer", "Cyber Lawman"
    ],
    
    "Corporate Agent": [
        "Corporate Operator", "Neon Agent", "Cyber Diplomat", "Corporate Fixer", "Tech Operative", 
        "Corporate Spy", "Neural Agent", "Grid Operative", "Digital Fixer", "Tech Negotiator", 
        "Corporate Strategist", "Corporate Executive", "Corporate Handler", "Neon Diplomat", "Data Broker"
    ],
    
    "Street Samurai": [
        "Blade Runner", "Neon Ronin", "Cyber Swordmaster", "Street Ronin", "Cyber Warrior", 
        "Blade Dancer", "Street Ronin", "Tech Katana Master", "Neon Swordsman", "Urban Samurai", 
        "Steel Blade", "Cyber Katana Wielder", "Street Blademaster", "Neon Warrior", "Urban Ronin"
    ],
    
    "Mind Runner": [
        "Memory Seeker", "Neural Navigator", "Thought Harvester", "Cognitive Runner", "Neon Dreamcatcher", 
        "Neuro Runner", "Mind Sprinter", "Mental Strider", "Thought Racer", "Memory Diver", 
        "Neural Pathfinder", "Dream Weaver", "Cognition Runner", "Neural Seeker", "Memory Runner"
    ],
    
    "Quantum Mechanic": [
        "Reality Engineer", "Dimensional Mechanic", "Space-Time Fixer", "Quantum Craftsman", "Dimensional Engineer", 
        "Chrono Mechanic", "Time-Warp Technician", "Quantum Tinkerer", "Space-Time Artisan", "Quantum Engineer", 
        "Dimensional Technician", "Temporal Fixer", "Reality Craftsman", "Quantum Technician", "Chrono Engineer"
    ],
    
    "Nanotech Assassin": [
        "Nano Blade", "Micro Killer", "Molecular Executioner", "Nano Ghost", "Neural Slicer", 
        "Nano Saboteur", "Atom Assassin", "Molecular Slayer", "Quantum Killer", "Nano Operative", 
        "Micro Hunter", "Nanite Assassin", "Nano Reaper", "Molecular Ghost", "Nano Predator"
    ],
    
    "Astro-Navigator": [
        "Starship Pathfinder", "Stellar Navigator", "Void Pilot", "Quantum Voyager", "Astro Scout", 
        "Starship Pilot", "Void Wayfinder", "Stellar Guide", "Quantum Pilot", "Voidcraft Navigator", 
        "Spacefarer", "Starbound Navigator", "Astro Pilot", "Galactic Navigator", "Void Scout"
    ],
    
    "Reality Bender": [
        "Dimension Shifter", "Space-Time Bender", "Quantum Reality Shaper", "Chrono Crafter", "Reality Twister", 
        "Dimensional Weaver", "Quantum Shaper", "Reality Architect", "Space-Time Sculptor", "Dimensional Warper", 
        "Quantum Weaver", "Chrono Shifter", "Reality Warper", "Time-Twister", "Quantum Architect"
    ],
    
    "Void Harvester": [
        "Stellar Reaper", "Quantum Extractor", "Void Collector", "Event Horizon Harvester", "Black Hole Tamer", 
        "Cosmic Harvester", "Neon Reaper", "Space Gatherer", "Quantum Collector", "Stellar Extractor", 
        "Void Gatherer", "Cosmic Collector", "Space Reaper", "Neon Harvester", "Void Extractor"
    ],
    
    "Cryo-Tactician": [
        "Frozen Strategist", "Cold-Warrior", "Cryo Commander", "Ice Mastermind", "Frost Tactician", 
        "Cryo Strategist", "Glacier Commander", "Cold Vanguard", "Frozen Planner", "Cryo Operative", 
        "Glacial Strategist", "Frost Commander", "Cryo Planner", "Chill Vanguard", "Frozen Tactician"
    ],
    
    "Cyber-Mercenary": [
        "Tech Merc", "Digital Gun-for-Hire", "Neon Mercenary", "Cyber Gunman", "Code Soldier", 
        "Circuit Merc", "Digital Enforcer", "Grid Mercenary", "Neural Gun-for-Hire", "Cyber Freelancer", 
        "Tech Contractor", "Cyber Hired Gun", "Grid Freelancer", "Digital Bounty Hunter", "Neon Freelancer"
    ],
    
    "Virtual Reality Architect": [
        "Simulation Builder", "VR Designer", "Reality Sculptor", "Dream Architect", "Virtual World Crafter", 
        "Neon Reality Builder", "VR Shaper", "Digital Dimension Architect", "Neural Designer", "Virtual Sculptor", 
        "Dream Engineer", "Sim Crafter", "Neon VR Architect", "Virtual Crafter", "Simulation Engineer"
    ]
};

const roleWeapon = {
    "Cybernetician": [
        "Circuit Breaker Baton", "Neural Disruptor", "Code Splicer Rifle", "Cyber Flux Caster", "System Overload Blaster", "Quantum Pulse Cannon", "Data Torrent Gun",
        "Circuitry Blades", "Machinewave Staff", "AI-Controlled Drone Swarm", "Digital Nova Grenade", "Neural Feedback Gauntlets", "Hyperlink Shotgun", "Synapse Surge Blade",
        "Processing Spike", "Memory Wipe Bomb", "Robotic Tendril Launcher", "Holo-Blade", "Network Javelin", "Digital Storm Rifle", "Code-Eater Rifle",
        "Firewall Fuser", "Bitstream Flail", "Data Spike Pistol", "Logic Grid Thrower", "AI Barrage Turret", "Mind Meld Carbine", "CPU Crusher Hammer",
        "Server Slice Blade", "Neural Override Pistol"
    ],
    "Synth-Jacker": [
        "Mind Jack Spike", "Neuro Sabre", "Cortex Hijacker", "Synth Razor Whip", "Memory Dagger", "Mental Subjugator Pistol", "Cognitive Disruptor Rifle",
        "Data Drain Spear", "Neuro Scrambler Gauntlets", "Brainwave Injector", "Holo-Neural Katana", "Subconscious Breaker Blaster", "Synthe-Skull Mace", "Memory Swipe Grenade",
        "Soul Rift Hammer", "Tech-Harpoon", "Data Thief Carbine", "Synthetic Spine Ripper", "Nerve Hijacker Bow", "Psy-Net Launcher", "Virtual Scythe",
        "Cyber Synapse Drill", "Cortex Reaver Blade", "Neural Virus Gun", "Synthwave Saber", "Cyber Core Hammer", "Mind Hack Blaster", "Synthetic Pulse Rifle",
        "Neural Overload Axe", "Mindchain Whip"
    ],
    "Techno-Nomad": [
        "Nomad's Pulse Rifle", "Gridwalker Spear", "Datawave Scythe", "Signal Breaker Knife", "Cyber Sling", "Neon Pulse Gun", "Wireless Cutter Blade",
        "Holo-Chakram", "Network Lance", "Quantum Tether Dagger", "Digital Traveler's Crossbow", "Nomad's Circuit Blade", "Gyro-Katana", "Data Staff",
        "Techno-Tribal Bow", "Field Emitter Sword", "Neon Dart Gun", "Energy Net Launcher", "Quantum Beacon Hammer", "Codeflare Blade", "Circuit Arc Pistol",
        "Neural Slinger", "Data Javelin", "Techno-Crippler Blade", "Pulse Shuriken", "Gyro-Blaster", "Quantum Net Grenade", "Nomad's Signal Breaker",
        "Datawave Axe", "Plasma Traveler's Whip"
    ],
    "Data Runner": [
        "Info Surge Gun", "Packet Cutter Blade", "Cipherbreaker Knife", "Data Whip", "Packet Pulse Rifle", "Bitstream Grenade", "Quantum Data Bow",
        "Packet Pierce Spear", "Cipher Striker Blade", "Data Seeker's Crossbow", "Quantum Flux Cannon", "Neon Courier's Rifle", "Holo-Dagger", "Info Shredder Katana",
        "Code Jumper Carbine", "Data Trail Gun", "Data Runner's Machete", "Bit Harpoon", "Quantum Info Scythe", "Neural Courier Spear", "Data Spike Javelin",
        "Packet Grenade Launcher", "Cipher Blaster", "Bitstream Crossbow", "Dataflux Blade", "Packet Shuriken", "Quantum Jumper Knife", "Grid Pierce Rifle",
        "Data-Wave Gauntlet", "Cipher Pulse Staff"
    ],
    "Quantum Hacker": [
        "Reality Breaker Rifle", "Quantum Hack Knife", "Dimensional Flux Bow", "Quantum Code Blade", "Time-Warp Pistol", "Entanglement Harpoon", "Subspace Slicer",
        "Quantum Glitch Rifle", "Reality Flux Gun", "Quantum Shift Sword", "Dimensional Breaker Spear", "Quantum Keyblade", "Subspace Anomaly Grenade", "Glitchwave Axe",
        "Schrodinger's Gun", "Quantum Flare Dagger", "Reality Hacker's Sword", "Time Shifter Carbine", "Dimensional Sabre", "Space-Time Disruptor Blade", "Entanglement Hammer",
        "Quantum Tear Launcher", "Subspace Pulse Cannon", "Reality Hacker's Gauntlets", "Quantum Lock Grenade", "Dimensional Wrecker Scythe", "Quantum Flux Blade", "Timebreaker Spear",
        "Reality-Hack Shotgun", "Quantum Cascade Rifle"
    ],
    "Neuro-Splicer": [
        "Neuro Scalpel", "Mindwave Cutter", "Synapse Razor", "Cognitive Injector Gun", "Synaptic Feedback Blade", "Neuron Surge Staff", "Mindspike Rifle",
        "Cortex Splitter Katana", "Neural Razor Whip", "Dreamblade Dagger", "Synapse Reaper Gun", "Memory Shatter Knife", "Mindmeld Spear", "Neural Feedback Cannon",
        "Dream Surge Blaster", "Neuron Blade", "Cortex Jumper Shotgun", "Neuro Lash", "Mind-Shatter Rifle", "Thoughtweaver Sabre", "Synapse Surge Spear",
        "Mind Chain Mace", "Neuron Injector Gun", "Cortex Razor Pistol", "Mind-Wave Blade", "Neuro Scrambler Gun", "Synaptic Surge Rifle", "Neuron Flux Gun",
        "Mind Surge Axe", "Memory Lance"
    ],
    "Drone Pilot": [
        "Swarm Command Rifle", "Drone Spike Gun", "Aerial Harpoon", "Droneblade", "Wingmaster's Bow", "Auto-Swarm Dagger", "Drone Commander Carbine",
        "Voidflyer Spear", "Dronewave Axe", "Pilot's Pulse Gun", "Mech-Swarm Launcher", "Drone Pilot's Blade", "Automated Fighter Rifle", "Swarm Control Rod",
        "Neon Swarm Sabre", "Dronepath Harpoon", "Auto-Flyer Crossbow", "Swarm Grenade", "Wingmaster's Staff", "Dronewave Cutter", "Autopilot's Pistol",
        "Mech-Flight Katana", "Swarm Spear", "Dronebolt Rifle", "Neon Drone Gun", "Aerial Scout's Rifle", "Drone Pilot's Edge", "Auto-Dagger", "Swarmbreaker Blade",
        "Drone Command Baton"
    ],
    "Exo-Soldier": [
        "Mech-Blade", "Titan's Hammer", "Exo-Flare Gun", "Warframe Rifle", "Steel Vanguard Spear", "Exo-Sabre", "Mech-Strike Sword",
        "Cyber Exo-Hammer", "Steel Titan's Lance", "Warpath Crossbow", "Exo Warblade", "Mech-Force Gun", "Exo-Titan's Halberd", "Warframe Axe",
        "Cyber Fortress Cannon", "Mech-War Mace", "Titan's Plasma Launcher", "Warframe Scythe", "Steel Juggernaut Shotgun", "Exo-Breaker Blade", "Warframe Railgun",
        "Mech-Force Edge", "Exo-Warden Sword", "Titan's Maul", "Steel Vanguard Blaster", "Exo Battle Rifle", "Mech-Flare Pistol", "Steel Titan's Hammer", "Warpath Pulse Rifle",
        "Titan Lance"
    ],
    "Gravity Shifter": [
        "Graviton Pulse Gun", "Gravity Shift Blade", "Void Collapse Hammer", "Gravity Well Rifle", "Mass Bender Lance", "Graviton Crusher Mace", "Black Hole Blaster",
        "Forcewave Sabre", "Gravity Rip Harpoon", "Singularity Gun", "Void Breaker Axe", "Graviton Surge Blade", "Gravity Hammer", "Force Collapse Gun",
        "Singularity Flare Cannon", "Gravity Well Spear", "Force Manipulator Rifle", "Graviton Lash", "Gravity Spike Dagger", "Void Collapse Scythe", "Graviton Striker Gun",
        "Gravity Well Whip", "Mass Shifter's Blade", "Forcewave Gauntlets", "Black Hole Spear", "Void Pulse Rifle", "Graviton Breaker Axe", "Force Twister Staff",
        "Gravity Rip Rifle", "Void Collapse Gauntlets"
    ],
    "Bio-Engineer": [
        "Gene Splicer Rifle", "DNA Harpoon", "Bio-Plasma Gun", "Evolutionary Blade", "Biotech Flare Gun", "Genome Reaper Sword", "Bio-Morph Axe",
        "Cellular Injector Rifle", "Plasma Genome Grenade", "Bio Surge Mace", "Gene Wrecker Blade", "Bio-Toxin Dart Gun", "Cellular Blaster", "Genome Splitter Scythe",
        "Plasma Harpoon", "Bio Flux Rifle", "Biotech Surge Sabre", "Gene Weaver Staff", "Bio Splice Knife", "Cell Shaper Gun", "Genome Edge",
        "Bio-Plasma Axe", "Toxin Injector Gun", "Bio-Lasher", "Gene Weaver's Spear", "Plasma Splicer Blade", "Cellular Disruptor Gun", "Genome Sabre", "Bio-Morph Dagger",
        "Evolution Surge Gun"
    ],
    "Nano-Surgeon": [
        "Nano Injector Gun", "Molecular Sabre", "Atom Blade", "Nano Surge Rifle", "Molecular Disruptor Gun", "Nano Scalpel", "Cellular Shredder Knife",
        "Atomic Hammer", "Nano Flux Rifle", "Molecular Injector Blade", "Nano Surge Staff", "Atomic Razor Gun", "Nano Surgeon’s Katana", "Molecular Scythe",
        "Nano Shatter Gun", "Atomic Cutter", "Nano Reaper Rifle", "Molecular Surge Saber", "Nano Harpoon", "Nano Sculptor Gun", "Molecular Spike Dagger",
        "Atomic Splitter Blade", "Nano Surgeon’s Rifle", "Cellular Injector Gun", "Nano Disruptor Blade", "Atomic Grenade", "Nano Edge", "Molecular Injector Rifle",
        "Nano Splitter Gun", "Atomic Scalpel"
    ],
    "Cyber Ronin": [
        "Digital Katana", "Neon Tanto", "Cyber Naginata", "Circuit Blade", "Holo-Katana", "Binary Sabre", "Cyber Ronin’s Scythe",
        "Neon Blade", "Data Edge Sword", "Rogue Code Dagger", "Virtual Wakizashi", "Cyber Ronin’s Hammer", "Circuit Katana", "Binary Tanto",
        "Neon Ronin’s Edge", "Cyber Yari", "Neon Shuriken", "Data Slasher Blade", "Ronin’s Pulse Gun", "Cybertech Sword", "Holo-Ronin’s Spear",
        "Binary Ronin’s Bow", "Neon Longsword", "Data Samurai’s Edge", "Cyber Wave Scythe", "Cyber Ronin’s Razor", "Neon Ninja Star", "Code Ronin’s Dagger",
        "Binary Polearm", "Virtual Ronin’s Staff"
    ],
    "Energy Manipulator": [
        "Plasma Saber", "Electro-Whip", "Energy Conductor Spear", "Photon Blaster", "Plasma Pulse Rifle", "Lightning Lance", "Voltage Harpoon",
        "Plasma Arc Gun", "Electro Surge Knife", "Photon Striker Sword", "Plasmawave Rifle", "Lightning Edge Axe", "Energy Manipulator’s Staff", "Photonblade",
        "Plasma Emitter Gun", "Plasma Charge Bow", "Electro Spike Spear", "Energy Lash", "Photon Sabre", "Volt Disruptor Gun", "Plasma Volt Dagger",
        "Lightning Field Gun", "Photon Charge Rifle", "Plasma Storm Blade", "Energy Manipulator’s Axe", "Plasma Shock Harpoon", "Photoncaster", "Lightning Whip",
        "Energy Spear", "Plasmawave Blade"
    ],
    "Void Skimmer": [
        "Void Breaker Blade", "Dimensional Rifle", "Gravity Flux Spear", "Subspace Sabre", "Voidfield Shotgun", "Quantum Cutlass", "Dimensional Harpoon",
        "Voidstream Gun", "Subspace Axe", "Quantum Bow", "Voidwave Dagger", "Subspace Pulse Rifle", "Dimensional Scythe", "Quantum Rip Blade",
        "Voidcaster Gun", "Subspace Razor", "Quantumfield Spear", "Void Tether Gun", "Dimensional Shift Blade", "Void Lance", "Subspace Shuriken",
        "Quantumflare Rifle", "Dimensional Warp Gun", "Void Harpoon", "Subspace Edge", "Quantumfield Axe", "Void Tear Pistol", "Dimensional Flare Blade",
        "Void Stream Gun", "Quantum Edge Spear"
    ],
    "AI Whisperer": [
        "Algorithm Blade", "Code Infusion Rifle", "Cognitive Sabre", "Digital Whisper Gun", "AI Core Spear", "Neural Flux Knife", "Cognition Manipulator",
        "Data Surge Axe", "Sentient Pulse Gun", "Digital Wave Dagger", "Neuralwave Rifle", "AI Conductor Blade", "Code-Breaker Gun", "Cognitive Injector Spear",
        "Digital Caster Staff", "Sentient Spear", "Neural Edge Blade", "Cognition Surge Gun", "Data Flux Rifle", "AI Controller Hammer", "Neural Flux Sabre",
        "Digital Infusion Scythe", "Cognitive Razor", "Sentient Shifter Spear", "AI Surge Pistol", "Data Manipulator Dagger", "Neuralwave Sword", "Cognitive Edge Spear",
        "Sentient Infusion Rifle", "Neural Shredder Blade"
    ],
    "Psi-Warrior": [
        "Psionic Blade", "Mindwarp Gun", "Thought Sabre", "Neuroforce Spear", "Telekinetic Whip", "Mind Spike Dagger", "Psionic Feedback Rifle",
        "Mental Surge Scythe", "Psychic Lash", "Telepathic Bow", "Thoughtweaver Sword", "Cognitive Crusher Hammer", "Neuralwave Katana", "Psi-Breaker Axe",
        "Mindforce Sabre", "Telekinetic Striker Blade", "Psychic Edge Gun", "Cerebral Shredder Knife", "Mindblast Rifle", "Neuralwave Edge", "Psiwave Dagger",
        "Psychic Sabre", "Telepathic Scythe", "Thoughtspike Blade", "Psionicfield Rifle", "Mental Disruptor Gun", "Neuralforce Hammer", "Telekinetic Edge Sword",
        "Psi-Breaker Gun", "Mindslash Blade"
    ],
    "Gene Splicer": [
        "Genome Cutter", "Bio-Wave Gun", "DNA Injector Rifle", "Gene Sabre", "Splicer’s Scalpel", "Genetic Reaper Spear", "Biofield Sword",
        "Genome Wave Blade", "DNA Harpoon", "Bio-Lash", "Genome Reaver Axe", "Splicer’s Plasma Gun", "Gene Surge Sabre", "Bio-Injector Knife",
        "Genome Harpoon Gun", "Gene Tether Rifle", "Biotech Splitter Scythe", "Genomefield Edge", "Splice Surge Sword", "Genome Pulse Gun", "Bioflux Staff",
        "DNA Spike Gun", "Genome Lash Dagger", "Bio-Morph Hammer", "Gene-Crafter Blade", "Genomewave Bow", "Biotech Surge Blade", "Splicer’s Edge Rifle",
        "Bio-Plasma Spear", "Genome Injector Gun"
    ],
    "Code Phantom": [
        "Ghost Circuit Blade", "Binary Wraith Rifle", "Quantum Shade Sabre", "Cyber-Phantom Edge", "Data Ghost Dagger", "Spectral Code Gun", "Neural Apparition Sword",
        "Cipher Shade Spear", "Quantum Ghost Katana", "Phantom Spike Gun", "Digital Haunter Bow", "Circuit Shade Blade", "Cyber Specter Rifle", "Virtual Wraith Spear",
        "Phantom Flux Gun", "Binary Ghost Axe", "Digital Phantom Dagger", "Neural Ghost Rifle", "Spectral Wave Gun", "Quantum Shade Axe", "Phantomwave Sword",
        "Virtual Ghost Scythe", "Cipher Wraith Bow", "Neuralshade Blade", "Quantum Flux Dagger", "Digital Ghost Gun", "Spectral Spike Gun", "Binary Shade Spear",
        "Virtual Phantom Rifle", "Cipher Ghost Sabre"
    ],
    "Grid Enforcer": [
        "Protocol Enforcer Blade", "System Regulator Rifle", "Gridwatch Sabre", "Firewall Spear", "Network Protector Gun", "Cyber-Law Enforcer", "Protocol Sabre",
        "Gridguard Sword", "Firewall Breaker Rifle", "Neural Enforcement Gun", "Digital Circuit Spear", "Grid Vanguard Sword", "System Warden Blade", "Protocol Striker Gun",
        "Gridlock Axe", "Firewall Sabre", "Network Enforcer Rifle", "Systemguard Dagger", "Gridshield Spear", "Protocol Blade Gun", "Neural Sentinel Gun",
        "Firewall Edge Blade", "Gridwar Rifle", "Protocol Spear", "Networkbreaker Gun", "Gridguard Hammer", "Firewall Crusher", "Protocol Edge Sabre", "System Surge Rifle",
        "Gridwarrior Sabre"
    ],
    "Weapon Specialist": [
        "Arsenal Blade", "Munitions Rifle", "Tech Blade Launcher", "Firepower Sabre", "Heavy Plasma Gun", "Tech Blaster Gun", "Armory Breaker Spear",
        "Weapon Surge Blade", "Explosive Launcher", "Energyblade Dagger", "Plasma Cannon", "Munitions Shredder Gun", "Arsenal Spike Gun", "Tech Cutter Rifle",
        "Pulse Grenade Launcher", "Firepower Edge Spear", "Heavy Armory Sword", "Plasma Blaster", "Munitionwave Axe", "Techblade Launcher", "Energy Edge Blade",
        "Arsenal Railgun", "Munitions Striker Sabre", "Plasma Breaker Cannon", "Firepower Bow", "Tech Sabre", "Pulse Surge Gun", "Weapon Breaker Axe",
        "Heavy Plasma Rifle", "Firepower Blade"
    ],
    "Cyber Gladiator": [
        "Arena Circuit Blade", "Steel Champion’s Axe", "Cyber Duelist Sabre", "Gladiator Scythe", "Titan Breaker Gun", "Neon Edge Sword", "Circuit Flare Gun",
        "Gladiator’s Plasma Spear", "Steel Arena Hammer", "Cyber-Champion Rifle", "Duelist's Katana", "Titan Pulse Rifle", "Gladiator's Surge Axe", "Neon Crusher Blade",
        "Arena Breaker Gun", "Steel Gladiator's Spear", "Circuit Gladiator Gun", "Champion Edge Sabre", "Titan Spike Dagger", "Neon Blaster Gun", "Gladiator's Energy Scythe",
        "Steel Duelist's Sabre", "Circuit Gladiator Sword", "Neon Razor Edge", "Arena Breaker Spear", "Titan Blade", "Cyber-Gladiator Sword", "Neon Scythe",
        "Circuit Breaker Hammer", "Gladiator Edge Rifle"
    ],
    "Stasis Operative": [
        "Timebreaker Sabre", "Chrono Edge Rifle", "Stasis Cutter Blade", "Temporal Spear", "Quantumwave Gun", "Time-Tether Dagger", "Stasis Sabre",
        "Temporal Edge Axe", "Timeblade Gun", "Chrono-Lock Rifle", "Quantum Cutter Sabre", "Temporal Flux Spear", "Stasis Striker Axe", "Chrono-Pulse Rifle",
        "Time Lock Gun", "Stasisfield Blade", "Chrono Spear", "Quantum Striker Rifle", "Temporal Surge Gun", "Stasis Razor Edge", "Chrono Crusher Blade",
        "Quantumwave Spear", "Time-Lock Gun", "Stasis Pulse Gun", "Chrono Surge Rifle", "Temporal Sabre", "Stasis Edge Blade", "Time-Warp Rifle",
        "Chrono-Spike Gun", "Stasis Lock Sword"
    ],
    "Quantum Enforcer": [
        "Reality Shaper Sabre", "Dimensional Flux Rifle", "Quantum Breaker Gun", "Chrono Enforcer Blade", "Time-Warp Spear", "Dimensional Crusher Gun",
        "Quantum Shift Rifle", "Reality Pierce Sword", "Chrono Razor Spear", "Timeflux Sabre", "Quantumfield Blade", "Dimensional Scythe", "Time Shifter Rifle",
        "Quantum Sabre", "Chrono Surge Gun", "Reality Crusher Blade", "Quantum Pierce Gun", "Dimensional Harpoon", "Reality-Lock Sabre", "Time-Breaker Scythe",
        "Chrono Razor Blade", "Quantum Wave Spear", "Dimensional Breaker Gun", "Reality Shift Sword", "Timeflux Gun", "Quantum Strike Rifle", "Dimensional Flux Blade",
        "Reality Razor Spear", "Quantum Surge Gun", "Chrono Scythe"
    ],
    "Tech Shaman": [
        "Circuit Totem Staff", "Tech Spirit Blade", "Digital Surge Gun", "Neon Mystic Scythe", "Code Spirit Staff", "Circuitwave Sabre", "Gridcaller Rifle",
        "Dataflow Totem", "Techno-Mystic Bow", "Energy Spirit Spear", "Code Surge Blade", "Gridcaller Gun", "Neon Totem Staff", "Digital Spirit Gun",
        "Data Surge Axe", "Code Totem Spear", "Tech Spirit Sabre", "Circuit Caller Rifle", "Energy Totem Blade", "Dataflow Bow", "Code Surge Spear",
        "Techno-Mystic Edge", "Neon Spirit Sabre", "Digital Totem Blade", "Dataflow Edge Rifle", "Grid Surge Spear", "Neoncaller Rifle", "Circuit Totem Blade",
        "Techno-Spirit Gun", "Digital Spirit Axe"
    ],
    "Cyber Police Officer": [
        "Protocol Gun", "Cyber Beat Sabre", "Gridshot Rifle", "Neural Enforcer Baton", "Codebreaker Blaster", "Cyber Constable Edge", "Firewall Breaker Gun",
        "Neon Patrol Rifle", "Protocol Baton", "Circuit Enforcer Sabre", "Gridguard Gun", "Neural Beat Blade", "Protocol Enforcer Rifle", "Neon Sabre",
        "Cyber Lawkeeper Gun", "Firewall Edge Sword", "Neon Baton", "Gridbreaker Rifle", "Cyber Constable Blade", "Protocol Patrol Spear", "Neon Edge Gun",
        "Firewall Shotgun", "Cyber Constable Baton", "Neural Enforcer Gun", "Codebreaker Sabre", "Cyber Patrol Rifle", "Firewall Edge Blade", "Neural Enforcer Axe",
        "Protocol Sabre", "Gridshot Edge"
    ],
    "Corporate Agent": [
        "Data Broker Rifle", "Neon Diplomat Gun", "Techno-Blade", "Corporate Sabre", "Cyber Negotiator Dagger", "Tech Fixer Gun", "Neon Diplomat Sabre",
        "Grid Broker Spear", "Corporate Edge Blade", "Digital Spy Rifle", "Corporate Razor Blade", "Tech Handler Spear", "Neural Spy Gun", "Cyber Sabre",
        "Grid Operator Rifle", "Neon Fixer Blade", "Tech Broker Dagger", "Corporate Flare Gun", "Spycraft Sabre", "Neon Handler Spear", "Cyber Agent Edge",
        "Corporate Razor Gun", "Neural Fixer Sabre", "Spyflare Gun", "Neon Operator Sabre", "Techno-Edge Dagger", "Corporate Spy Rifle", "Digital Broker Sabre",
        "Corporate Spear", "Grid Razor Gun"
    ],
    "Street Samurai": [
        "Neon Katana", "Techno-Tanto", "Cyber Longsword", "Street Ronin Blade", "Neon Edge Dagger", "Street Katana", "Cyber Ninja Star",
        "Techno-Katana", "Ronin Edge Sabre", "Street Ninja Blade", "Cyber Ronin Gun", "Neon Tanto", "Street Warrior Sabre", "Ronin Edge Gun",
        "Cyber Samurai Rifle", "Neon Razor Katana", "Street Ronin Scythe", "Cyber Tanto", "Techno-Longsword", "Street Razor Blade", "Ronin Plasma Gun",
        "Neon Edge Blade", "Street Ronin Katana", "Cyber Samurai Scythe", "Neon Edge Scythe", "Ronin Razor Dagger", "Street Warrior Blade", "Cyber Katana",
        "Street Samurai Gun", "Neon Ronin Rifle"
    ],
    "Mind Runner": [
        "Neural Runner Dagger", "Memory Spike Rifle", "Cognitive Sabre", "Neon Runner Blade", "Mindwarp Spear", "Thought-Edge Gun", "Neuro Surge Sabre",
        "Dreamweaver Rifle", "Memory Lash Blade", "Neural Flux Gun", "Thoughtslicer Sabre", "Neon Runner Gun", "Mind Surge Spear", "Neuralwave Blade",
        "Memoryfield Rifle", "Neon Lash Gun", "Dreamrunner Dagger", "Mindshredder Spear", "Neural Spike Gun", "Thought-Edge Rifle", "Memory Jumper Blade",
        "Neural Striker Sabre", "Dreamweaver Gun", "Neon Flux Rifle", "Mind Lash Gun", "Memory Blade", "Neuralwave Edge", "Neon Jumper Sabre",
        "Cognitive Strike Spear", "Memory Runner Gun"
    ],
    "Quantum Mechanic": [
        "Reality Shifter Wrench", "Dimensional Pliers", "Time-Warp Spanner", "Quantum Ratchet Gun", "Chrono Cutter Sabre", "Dimensional Manipulator Rifle", "Quantumfield Wrench",
        "Time Shifter Sawblade", "Reality Flux Wrench", "Chrono Pulse Cutter", "Dimensional Claw Hammer", "Quantum Breaker Gun", "Reality-Lock Wrench", "Timeflux Blade",
        "Dimensional Pierce Dagger", "Quantum Tether Spear", "Reality Shift Spanner", "Chrono Ratchet Blade", "Quantum Shredder Gun", "Dimensional Cutter", "Quantum Manipulator Sabre",
        "Reality Wrench Spear", "Chrono Breaker Gun", "Quantumfield Hammer", "Time-Warp Cutter", "Dimensional Spike Gun", "Reality-Lock Ratchet", "Quantum Flux Cutter",
        "Chrono Cutter Rifle", "Quantum Shifter Wrench"
    ],
    "Nanotech Assassin": [
        "Nano Spike Blade", "Molecular Razor Gun", "Atomic Injector Dagger", "Nano Surge Rifle", "Molecular Harpoon", "Nanite Sabre", "Cellular Shredder Knife",
        "Nano-Edge Sword", "Molecular Pulse Rifle", "Atomcutter Gun", "Nano Scythe", "Cellular Flux Gun", "Molecular Injector Sabre", "Atomic Scalpel",
        "Nano Pulse Gun", "Nanite Razor Blade", "Atomic Injector Knife", "Nano Scythe Gun", "Molecular Surge Rifle", "Atom-Blade", "Nano Shredder Gun",
        "Nanite Flux Blade", "Atomic Disruptor Sabre", "Cellular Injector Gun", "Nano Breaker Rifle", "Nanite Razor Dagger", "Molecular Spike Gun",
        "Atomic Flux Rifle", "Nano Injector Blade", "Molecular Sabre"
    ],
    "Astro-Navigator": [
        "Starfinder Spear", "Void Navigator Sabre", "Astro-Cutter Gun", "Void Spike Rifle", "Quantum Navigator Bow", "Starship Edge Blade", "Galactic Harpoon",
        "Void Surge Gun", "Astro Navigator Sabre", "Quantum Flare Rifle", "Starbreaker Spear", "Voidfield Dagger", "Galactic Shredder Rifle", "Astro Pulse Gun",
        "Void Flare Spear", "Starship Navigator Edge", "Galactic Edge Gun", "Void Shifter Blade", "Astrofield Rifle", "Quantum Navigator Scythe", "Starfinder Bow",
        "Void Navigator Gun", "Astro Harpoon", "Starship Shredder Rifle", "Void Razor Gun", "Galactic Surge Gun", "Voidfield Edge", "Astro Navigator Spear",
        "Quantum Breaker Blade", "Starship Pulse Rifle"
    ],
    "Reality Bender": [
        "Dimensional Flux Blade", "Space-Time Shifter Gun", "Reality Flux Sabre", "Quantum Breaker Scythe", "Time Surge Rifle", "Dimensional Razor Blade", "Reality Spike Gun",
        "Space-Warp Sabre", "Quantum Shifter Rifle", "Time-Bender Scythe", "Reality-Lock Blade", "Dimensional Razor Sabre", "Quantum Flare Gun", "Reality Shift Sabre",
        "Time-Warp Gun", "Space-Time Surge Rifle", "Reality-Breaker Axe", "Dimensional Shredder Gun", "Quantum Razor Scythe", "Time-Lock Rifle", "Reality Warp Gun",
        "Dimensional Spear", "Quantum Spike Rifle", "Time-Breaker Blade", "Space-Warp Cutter", "Reality Flux Gun", "Dimensional Edge Sabre", "Time-Bender Gun",
        "Quantum Breaker Blade", "Reality Shifter Rifle"
    ],
    "Void Harvester": [
        "Voidbreaker Scythe", "Quantum Harvester Spear", "Black Hole Cutter", "Event Horizon Blade", "Voidfield Rifle", "Cosmic Razor Gun", "Stellar Reaper Axe",
        "Void Tether Spear", "Black Hole Crusher Gun", "Event Horizon Scythe", "Cosmic Shredder Blade", "Void Harpoon", "Stellar Edge Rifle", "Quantumfield Gun",
        "Void Harvester Sabre", "Event Horizon Dagger", "Void Collector Rifle", "Black Hole Edge", "Quantum Shredder Gun", "Cosmic Spike Gun", "Voidfield Blade",
        "Stellar Scythe", "Black Hole Razor", "Void Harvester Gun", "Event Horizon Spear", "Cosmic Cutter Rifle", "Stellar Pulse Gun", "Void Harpoon Blade",
        "Quantum Harvester Rifle", "Cosmic Edge Sabre"
    ],
    "Cryo-Tactician": [
        "Frozen Sabre", "Cryo Spike Gun", "Icefield Spear", "Cold War Gun", "Glacier Razor Edge", "Frozenblade", "Cryo Pulse Rifle",
        "Glacier Sabre", "Cold-Lock Gun", "Frostfield Edge Spear", "Cryo Surge Blade", "Frozen Shredder Rifle", "Cold-Tether Gun", "Cryo Edge Blade",
        "Glacier Scythe", "Frost Sabre", "Frozen Cutter Gun", "Cryofield Rifle", "Cold-War Spear", "Glacier Spike Sabre", "Frost Shredder Blade",
        "Frozen Surge Rifle", "Cryo Razor Sabre", "Coldfield Gun", "Frozen Scythe", "Cryo Breaker Gun", "Frostfield Rifle", "Glacier Surge Sabre",
        "Cryo Edge Spear", "Frozen Cutter Rifle"
    ],
    "Cyber-Mercenary": [
        "Tech Merc's Gun", "Neon Edge Blade", "Digital Sabre", "Cyber Razor Dagger", "Mercenary's Pulse Rifle", "Neon Harpoon Gun", "Grid Merc's Sabre",
        "Tech Razor Gun", "Neon Mercenary Spear", "Cyber Edge Gun", "Mercenary's Blaster Rifle", "Tech Merc's Spear", "Grid Razor Blade", "Cybermerc's Sabre",
        "Neon Striker Gun", "Mercenary's Plasma Rifle", "Techno-Edge Blade", "Neon Mercenary's Gun", "Digital Razor Rifle", "Grid Merc's Scythe", "Neon Razor Rifle",
        "Mercenary's Laser Edge", "Tech Merc's Pulse Gun", "Neon Cutter Gun", "Grid Merc's Axe", "Cyber Razor Spear", "Tech Merc's Edge Gun", "Neon Sabre",
        "Mercenary's Breaker Gun", "Neon Pulse Gun"
    ],
    "Virtual Reality Architect": [
        "Sim-Weaver Blade", "Virtual Edge Gun", "Reality Sculptor's Sabre", "Dream Architect Dagger", "Neon VR Rifle", "Reality Flux Gun", "Virtual Razor Sabre",
        "Sim-Crafter Rifle", "Neural Architect Edge", "VR Architect's Scythe", "Virtual Sabre", "Sim-Weaver's Gun", "Reality Sculptor's Blade", "Virtual Sculptor Spear",
        "Dream Architect Gun", "Neon Blade", "Virtual Flux Rifle", "Sim-Weaver Sabre", "VR Architect Gun", "Dreamweaver Blade", "Sim-Crafter Gun",
        "Virtual Reality Axe", "Neural Sculptor Rifle", "Sim-Weaver Dagger", "Reality Flux Sabre", "Virtual Sabre", "Sim Architect Gun", "Reality Weaver Blade",
        "Neon Architect Gun", "Sim-Crafter Sabre"
    ]
};
// Helper function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Helper function to get a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Check if a role is invalid for a given race
function isInvalidRoleForRace(race, role) {
    return (
        // Example rules (adjust based on the role-race logic you need)
        (["Photon Being", "Quantum Entity", "Voidborn", "Astral Entity"].includes(race) && 
            ["Synth-Jacker", "Cyber Gladiator", "Street Samurai"].includes(role)) ||

        (["Digital Spirit", "AI Construct", "Digital Entity"].includes(race) && 
            ["Street Samurai", "Exo-Soldier"].includes(role)) ||

        (["Mecha-Beast", "Synthoid"].includes(race) && 
            ["Psi-Warrior", "Gene Splicer"].includes(role)) ||

        (["Void Dweller", "Astral Entity", "Void Shadow"].includes(race) && 
            ["Cyber Police Officer", "Corporate Agent"].includes(role)) ||

        (["Neuro-Borg", "Bio-Android"].includes(race) && 
            ["Void Skimmer", "Reality Bender"].includes(role))
    );
}
function submitName() {
    const name = document.getElementById("nameInput").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    if (name) {
        const race = getRandomElement(races);

        const roleSelectionChance = Math.random() * 100;
        let role;

        if (roleSelectionChance < 1) {
            role = "Void Harvester";
        } else if (roleSelectionChance > 98) {
            role = "Reality Bender";
        } else {
            do {
                role = getRandomElement(roles);
            } while (isInvalidRoleForRace(race, role));
        }

        document.getElementById("inputForm").style.display = "none";

        const strength = getRandomNumber(25, 100);
        const health = getRandomNumber(25, 100);
        const agi = getRandomNumber(1, 100);
        const lev = getRandomNumber(1, 100);
        const guild = getRandomElement(guilds);
        const region = getRandomElement(regions);
        const characterSkills = [];
        const numberOfSkills = getRandomNumber(3, 5);
        const age = getRandomNumber(22, 60);
        const skillList = document.getElementById("charSkill");
        const dex = getRandomNumber(20, 100);
        const luck = getRandomNumber(1, 100);
        const endurance = getRandomNumber(Math.floor((strength * 0.5) + 9), strength);
        let ra = "";
        totalscore = totalscore + lev*5;

        //Band score for ability and title
        const F_score = 1;
        const E_score = 5;
        const D_score = 10;
        const C_score = 25;
        const B_score = 50;
        const A_score = 150;
        const S_score = 300;
        const SS_score = 500;
        const SSS_score = 1000;
        //End of band score

        //Random score if rank = ???
        var random_score = [];
        random_score.push(F_score, E_score, D_score, C_score, B_score, A_score, S_score, SS_score, SSS_score);

        //Total band score for overall ranking
        const F_overall = 10;
        const E_overall = 50;
        const D_overall = 100;
        const C_overall = 300;
        const B_overall = 700
        const A_overall = 1250;
        const S_overall = 2000;
        const SS_overall = 3000;
        const SSS_overall = 4500;
        //End of total band score

        skillList.innerHTML = "";
        const availableSkill = roleSkills[role];

        for (let i = 0; i < numberOfSkills; i++) {
            var skill = getRandomElement(availableSkill);
            var rank = getRandomElement(ranks);
            if(rank == "F"){
                totalscore = totalscore + F_score;
            }
            else if(rank == "E"){
                totalscore = totalscore + E_score;
            }
            else if(rank == "D"){
                totalscore = totalscore + D_score;
            }
            else if(rank == "C"){
                totalscore = totalscore + C_score;
            }
            else if(rank == "B"){
                totalscore = totalscore + B_score;
            }
            else if(rank == "A"){
                totalscore = totalscore + A_score;
            }
            else if(rank == "S"){
                totalscore = totalscore + S_score;
            }
            else if(rank == "SS"){
                totalscore = totalscore + SS_score;
            }
            else{
                totalscore = totalscore + SSS_score;
            }
            if (!characterSkills.includes(skill)) {
                characterSkills.push({
                    skill: skill,
                    rank: rank
                })
            }
            const listItem = document.createElement("li");
            listItem.textContent = `${skill} (${rank})`;
            skillList.appendChild(listItem);
        }
        const titlesCount = getRandomNumber(1, 2);
        const titleList = document.getElementById("charTitle");
        titleList.innerHTML = "";

        const availableTitles = titles[role];


        for (let i = 0; i < titlesCount; i++) {
            var title = getRandomElement(availableTitles);
            var titleRank = getRandomElement(ranks);
            if(titleRank == "F"){
                totalscore = totalscore + F_score;
            }
            else if(titleRank == "E"){
                totalscore = totalscore + E_score;
            }
            else if(titleRank == "D"){
                totalscore = totalscore + D_score;
            }
            else if(titleRank == "C"){
                totalscore = totalscore + C_score;
            }
            else if(titleRank == "B"){
                totalscore = totalscore + B_score;
            }
            else if(titleRank == "A"){
                totalscore = totalscore + A_score;
            }
            else if(titleRank == "S"){
                totalscore = totalscore + S_score;
            }
            else if(titleRank == "SS"){
                totalscore = totalscore + SS_score;
            }
            else{
                totalscore = totalscore + SSS_score
            }
            const listItem = document.createElement("li");
            listItem.textContent = `${title} (${titleRank})`;
            titleList.appendChild(listItem);
        }

        var availableWeapons = roleWeapon[role];
        const characterWeapon = [];
        const WeaponNumber = 1;

        for (let i = 0; i <WeaponNumber; i++){
            const weapon = getRandomElement(availableWeapons);
            var rank = getRandomElement(ranks);
            if(rank == "F"){
                totalscore = totalscore + F_score;
            }
            else if(rank == "E"){
                totalscore = totalscore + E_score;
            }
            else if(rank == "D"){
                totalscore = totalscore + D_score;
            }
            else if(rank == "C"){
                totalscore = totalscore + C_score;
            }
            else if(rank == "B"){
                totalscore = totalscore + B_score;
            }
            else if(rank == "A"){
                totalscore = totalscore + A_score;
            }
            else if(rank == "S"){
                totalscore = totalscore + S_score;
            }
            else if(rank == "SS"){
                totalscore = totalscore + SS_score;
            }
            else{
                totalscore = totalscore + SSS_score;
            }
            if(!characterWeapon.includes(weapon)){
                characterWeapon.push(`${weapon} (${rank})`);
            }
        }
        if(totalscore < F_overall){
            ra = "N/A";
        }
        else if (totalscore >= F_overall && totalscore < E_overall){
            ra = "F";
        }
        else if(totalscore >= E_overall && totalscore < D_overall){
            ra = "E";
        }
        else if(totalscore >= D_overall && totalscore < C_overall){
            ra = "D";
        }
        else if(totalscore >= C_overall && totalscore < B_overall){
            ra = "C";
        }
        else if(totalscore >= B_overall && totalscore < A_overall){
            ra = "B";
        }
        else if(totalscore >= A_overall && totalscore < S_overall){
            ra = "A";
        }
        else if(totalscore >= S_overall && totalscore < SS_overall){
            ra = "S";
        }
        else if(totalscore >= SS_overall && totalscore < SSS_overall){
            ra = "SS";
        }
        else{
            ra = "SSS"
        }

        document.getElementById("charName").textContent = name;
        document.getElementById("charAgi").textContent = agi;
        document.getElementById("charLev").textContent = lev;
        document.getElementById("charRole").textContent = role;
        document.getElementById("charRace").textContent = race;
        document.getElementById("charStrength").textContent = strength;
        document.getElementById("charHealth").textContent = health;
        document.getElementById("charRank").textContent = ra;
        document.getElementById("charGuild").textContent = guild;
        document.getElementById("charRegion").textContent = region;
        document.getElementById("charAge").textContent = age;
        document.getElementById("charWeapon").textContent = characterWeapon;
        document.getElementById("charDexterity").textContent = dex;
        document.getElementById("charLuck").textContent = luck;
        document.getElementById("charEndurance").textContent = endurance;
        document.getElementById("charGender").textContent = gender;
        document.getElementById("characterDisplay").style.display = "block";
    }   
    else{
        alert("Please fill in required field.");
    }
    console.log(totalscore);
}