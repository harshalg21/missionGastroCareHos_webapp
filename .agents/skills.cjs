#!/usr/bin/env node
/**
 * Gastrocare / Antigravity Skills Manager
 * Manages skills from:
 * 1. benjaminasterA/antigravity-awesome-skills
 * 2. sickn33/agentic-awesome-skills (v20.7.0, 2,964+ skills)
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const AGENTS_DIR = path.join(ROOT_DIR, '.agents');
const ACTIVE_SKILLS_DIR = path.join(AGENTS_DIR, 'skills');
const AWESOME_SKILLS_DIR = path.join(AGENTS_DIR, 'awesome-skills');
const CATALOG_SKILLS_DIR = path.join(AWESOME_SKILLS_DIR, 'skills');
const INDEX_FILE = path.join(AWESOME_SKILLS_DIR, 'skills_index.json');

// Ensure active skills directory exists
if (!fs.existsSync(ACTIVE_SKILLS_DIR)) {
  fs.mkdirSync(ACTIVE_SKILLS_DIR, { recursive: true });
}

// Pre-configured curated bundles
const BUNDLES = {
  'essentials': [
    'brainstorming',
    'concise-planning',
    'lint-and-validate',
    'git-pushing',
    'systematic-debugging'
  ],
  'web-wizard': [
    'frontend-design',
    'react-best-practices',
    'react-patterns',
    'tailwind-patterns',
    'ui-ux-pro-max',
    'mobile-design',
    'seo-audit'
  ],
  'fullstack': [
    'senior-fullstack',
    'frontend-developer',
    'backend-dev-guidelines',
    'api-patterns',
    'database-design',
    'postgresql',
    'database-migrations-sql-migrations'
  ],
  'security': [
    'api-security-best-practices',
    'auth-implementation-patterns',
    'frontend-security-coder',
    'backend-security-coder',
    'cc-skill-security-review',
    '007'
  ],
  'seo': [
    'seo-audit',
    'seo-fundamentals',
    'seo-keyword-strategist',
    'seo-meta-optimizer',
    'programmatic-seo',
    'seo-structure-architect'
  ],
  'testing': [
    'playwright-skill',
    'systematic-debugging',
    'error-debugging-error-analysis'
  ],
  'docs-and-media': [
    'docx-official',
    'pdf-official',
    'xlsx-official',
    'pptx-official'
  ],
  'gastrocare': [
    'brainstorming',
    'concise-planning',
    'lint-and-validate',
    'systematic-debugging',
    'git-pushing',
    'frontend-design',
    'react-best-practices',
    'react-patterns',
    'tailwind-patterns',
    'ui-ux-pro-max',
    'seo-audit',
    'seo-fundamentals',
    'senior-fullstack',
    'backend-dev-guidelines',
    'database-design',
    'postgresql',
    'database-migrations-sql-migrations',
    'api-security-best-practices',
    'auth-implementation-patterns',
    'frontend-security-coder',
    'playwright-skill'
  ]
};

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return false;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  return true;
}

function loadCatalogIndex() {
  if (!fs.existsSync(INDEX_FILE)) {
    console.error(`❌ Catalog index not found at ${INDEX_FILE}`);
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8'));
  } catch (err) {
    console.error(`❌ Error parsing catalog index:`, err.message);
    return [];
  }
}

function listActiveSkills() {
  const entries = fs.readdirSync(ACTIVE_SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.'))
    .map(d => d.name);

  console.log(`\n🟢 Active Skills in Antigravity (${entries.length}):\n`);
  if (entries.length === 0) {
    console.log(`  (None active yet. Run "npm run skill bundle essentials" to start!)`);
  } else {
    for (const name of entries) {
      const skillMd = path.join(ACTIVE_SKILLS_DIR, name, 'SKILL.md');
      const hasSkillMd = fs.existsSync(skillMd);
      console.log(`  • ${name} ${hasSkillMd ? '✓' : '(missing SKILL.md)'}`);
    }
  }
  console.log(`\n💡 To invoke any active skill, type in chat: "Use @<skill-name> to ..."`);
}

function searchSkills(query) {
  if (!query) {
    console.log('Usage: npm run skill:search <query>');
    return;
  }
  const index = loadCatalogIndex();
  const q = query.toLowerCase();
  const results = index.filter(item => {
    const inName = (item.name && item.name.toLowerCase().includes(q)) || 
                   (item.id && item.id.toLowerCase().includes(q));
    const inDesc = item.description && item.description.toLowerCase().includes(q);
    const inCategory = item.category && item.category.toLowerCase().includes(q);
    const inTags = Array.isArray(item.tags) && item.tags.some(t => t.toLowerCase().includes(q));
    return inName || inDesc || inCategory || inTags;
  });

  console.log(`\n🔍 Found ${results.length} skills matching "${query}" (out of ${index.length} catalog skills):\n`);
  for (const s of results.slice(0, 25)) {
    const skillId = s.id || s.name;
    const isActive = fs.existsSync(path.join(ACTIVE_SKILLS_DIR, skillId));
    const status = isActive ? '🟢 [ACTIVE]' : '⚪ [AVAILABLE]';
    const cat = s.category ? `[${s.category}]` : '';
    console.log(`${status} ${skillId} ${cat}`);
    console.log(`   ${(s.description || 'No description').slice(0, 110)}...`);
  }
  if (results.length > 25) {
    console.log(`\n... and ${results.length - 25} more matches.`);
  }
  console.log(`\n💡 To activate any skill: npm run skill enable <skill-name>`);
}

function enableSkill(skillName) {
  const resolvedActive = path.resolve(ACTIVE_SKILLS_DIR);
  const dest = path.resolve(ACTIVE_SKILLS_DIR, skillName);
  if (!dest.startsWith(resolvedActive + path.sep)) {
    console.error(`❌ Security Error: Invalid skill destination path "${skillName}".`);
    process.exitCode = 1;
    return false;
  }
  const src = path.join(CATALOG_SKILLS_DIR, skillName);

  if (!fs.existsSync(src)) {
    console.error(`❌ Skill "${skillName}" not found in catalog.`);
    process.exitCode = 1;
    return false;
  }
  if (fs.existsSync(dest)) {
    console.log(`ℹ️  Skill "${skillName}" is already active.`);
    return true;
  }
  try {
    copyDirRecursive(src, dest);
    console.log(`✅ Activated: ${skillName}`);
    return true;
  } catch (err) {
    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { recursive: true, force: true });
    }
    console.error(`❌ Failed to activate ${skillName}:`, err.message);
    process.exitCode = 1;
    return false;
  }
}

function disableSkill(skillName) {
  const resolvedActive = path.resolve(ACTIVE_SKILLS_DIR);
  const dest = path.resolve(ACTIVE_SKILLS_DIR, skillName);
  if (!dest.startsWith(resolvedActive + path.sep)) {
    console.error(`❌ Security Error: Invalid skill destination path "${skillName}".`);
    process.exitCode = 1;
    return false;
  }
  if (!fs.existsSync(dest)) {
    console.warn(`⚠️  Skill "${skillName}" is not currently active.`);
    process.exitCode = 1;
    return false;
  }
  fs.rmSync(dest, { recursive: true, force: true });
  console.log(`🗑️  Deactivated: ${skillName}`);
  return true;
}

function enableBundle(bundleName) {
  const bundle = BUNDLES[bundleName.toLowerCase()];
  if (!bundle) {
    console.error(`❌ Unknown bundle "${bundleName}". Available bundles: ${Object.keys(BUNDLES).join(', ')}`);
    return;
  }
  console.log(`\n📦 Activating bundle: "${bundleName}" (${bundle.length} skills)...`);
  let count = 0;
  for (const name of bundle) {
    if (enableSkill(name)) count++;
  }
  console.log(`\n✨ Successfully enabled ${count} skills from bundle "${bundleName}"!`);
}

function listBundles() {
  console.log(`\n📦 Curated Skill Bundles:\n`);
  for (const [name, skills] of Object.entries(BUNDLES)) {
    console.log(`  • ${name.padEnd(16)}: ${skills.length} skills (${skills.slice(0, 3).join(', ')}...)`);
  }
  console.log(`\n💡 To activate a bundle: npm run skill bundle <bundle-name>`);
}

function showStats() {
  const totalDirs = fs.existsSync(CATALOG_SKILLS_DIR) 
    ? fs.readdirSync(CATALOG_SKILLS_DIR, { withFileTypes: true }).filter(d => d.isDirectory()).length 
    : 0;
  const index = loadCatalogIndex();
  const activeCount = fs.existsSync(ACTIVE_SKILLS_DIR)
    ? fs.readdirSync(ACTIVE_SKILLS_DIR, { withFileTypes: true }).filter(d => d.isDirectory()).length
    : 0;

  console.log(`
📊 Antigravity Skills Library Statistics:
------------------------------------------
• Repositories: benjaminasterA/antigravity-awesome-skills + sickn33/agentic-awesome-skills
• Total Catalog Skills (indexed): ${index.length}
• Total Skill Directories on disk: ${totalDirs}
• Currently Active Skills: ${activeCount}
• Target Customization Path: .agents/skills/
• Catalog Path: .agents/awesome-skills/skills/
`);
}

function printUsage() {
  console.log(`
Antigravity Awesome Skills CLI
------------------------------
Usage:
  npm run skill:list                   List all currently active skills
  npm run skill:bundles                List available curated bundles
  npm run skill:search <keyword>       Search through all 2,964+ catalog skills
  npm run skill stats                  Show library statistics & counts
  npm run skill enable <skill-name>    Activate a single skill
  npm run skill disable <skill-name>   Deactivate a skill
  npm run skill bundle <bundle-name>   Enable all skills in a bundle (e.g. gastrocare, web-wizard, essentials)
  npm run skill clean                  Disable all active skills
`);
}

// Main execution
const [,, command, ...args] = process.argv;

switch ((command || '').toLowerCase()) {
  case 'list':
    listActiveSkills();
    break;
  case 'search':
    searchSkills(args.join(' '));
    break;
  case 'enable':
    if (args.length === 0) {
      console.log('Specify skill name(s) to enable.');
      process.exitCode = 1;
    } else {
      for (const s of args) {
        if (!enableSkill(s)) process.exitCode = 1;
      }
    }
    break;
  case 'disable':
    if (args.length === 0) {
      console.log('Specify skill name(s) to disable.');
      process.exitCode = 1;
    } else {
      for (const s of args) {
        if (!disableSkill(s)) process.exitCode = 1;
      }
    }
    break;
  case 'bundle':
    if (!args[0]) listBundles();
    else enableBundle(args[0]);
    break;
  case 'bundles':
    listBundles();
    break;
  case 'stats':
    showStats();
    break;
  case 'clean':
    fs.readdirSync(ACTIVE_SKILLS_DIR, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .forEach(d => fs.rmSync(path.join(ACTIVE_SKILLS_DIR, d.name), { recursive: true, force: true }));
    console.log('🧹 Cleaned all active skills from .agents/skills/.');
    break;
  default:
    printUsage();
    break;
}
