# SEO ACTION PLAN — cctvdubai.me
**Business:** Mideatek Information Technology LLC — CCTV Dubai  
**Generated:** July 2026  
**Overall Health Score:** 60/100 → Target: 82/100 in 12 months

---

## PRIORITY LEGEND
- 🔴 **CRITICAL** — Blocks rankings or causes penalties. Fix immediately.
- 🟠 **HIGH** — Significantly impacts rankings. Fix within 1 week.
- 🟡 **MEDIUM** — Optimization opportunity. Fix within 1 month.
- 🟢 **LOW** — Nice to have. Address in backlog.

---

## 30-DAY ACTION PLAN (July 2026)
*Goal: Fix all blocking technical issues, close quick-win schema gaps, submit all pages for indexing*

---

### WEEK 1: TECHNICAL FIXES (Stop the bleeding)

#### 🔴 Task 1.1 — Fix WordPress Legacy URL Contamination
**Impact:** Critical — wastes crawl budget, confuses Google's entity model  
**Effort:** 30 minutes  
**File:** `next.config.mjs`

Add redirects and security headers:
```js
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/', has: [{ type: 'query', key: 'feed' }], permanent: true },
      { source: '/wp-content/:path*', destination: '/not-found', permanent: false },
      { source: '/wp-admin/:path*', destination: '/not-found', permanent: false },
      { source: '/wp-login.php', destination: '/not-found', permanent: false },
      { source: '/xmlrpc.php', destination: '/not-found', permanent: false },
    ]
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }]
  },
  images: { /* existing */ }
}
```

#### 🔴 Task 1.2 — Submit Sitemap + Request Indexing
**Impact:** Critical — resolves 87% indexation failure  
**Effort:** 1 hour  
**Steps:**
1. Log in to Google Search Console (search.google.com/search-console)
2. Add property: `https://www.cctvdubai.me` (verify via DNS or HTML tag)
3. Go to Sitemaps → Submit `https://www.cctvdubai.me/sitemap.xml`
4. Use URL Inspection → Request Indexing for these priority pages:
   - `https://www.cctvdubai.me/`
   - `https://www.cctvdubai.me/services/cctv-installation-dubai`
   - `https://www.cctvdubai.me/commercial-cctv-dubai`
   - `https://www.cctvdubai.me/home-cctv-dubai`
   - All 7 service pages
   - Top 10 location pages (Dubai Marina, Downtown, Business Bay, JVC, Palm Jumeirah, JLT, Al Barsha, Mirdif, DIFC, JBR)
5. Also submit sitemap to Bing Webmaster Tools

#### 🔴 Task 1.3 — Add New Pages to Sitemap
**Impact:** Critical — landing pages invisible to search engines  
**Effort:** 10 minutes  
**File:** `app/sitemap.ts`

Add to bottom of sitemap array:
```ts
{ url: `${BASE}/commercial-cctv-dubai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
{ url: `${BASE}/home-cctv-dubai`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
```

Also make blog entries dynamic (replace hardcoded blog URLs):
```ts
import { blogPosts } from '@/lib/blog'
// Replace hardcoded blog entries with:
...blogPosts.map((post) => ({
  url: `${BASE}/blog/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'monthly' as const,
  priority: 0.85,
})),
```

#### 🔴 Task 1.4 — Create llms.txt
**Impact:** High — AI search discoverability  
**Effort:** 20 minutes  
**File:** `public/llms.txt`

The GEO specialist has created this file. Verify it exists at `public/llms.txt` and is accessible at `https://www.cctvdubai.me/llms.txt`. If not present, create it with these contents:

```
# CCTV Dubai — by Mideatek
# AI-readable site guide (llms.txt standard)

## About
Mideatek Information Technology LLC (brand name: CCTV Dubai) is a SIRA-approved CCTV 
installation company in Dubai, UAE. Founded 2014. Headquartered at Karama, Dubai.
50+ certified engineers. 500+ annual projects. 5,000+ cameras installed.
Phone: +971 54 556 6456 | Email: info@mideatek.com

## Certifications
- SIRA Approved Installer (Dubai Police — Security Industry Regulatory Agency)
- TRA Licensed Cabling Contractor
- ISO 9001:2015 Certified
- DCD (Dubai Civil Defence) Certified
- Etisalat / du Approved

## Services
- CCTV Camera Installation (Hikvision, Dahua, Axis, Bosch, Uniview)
- SIRA Compliance Certification (48–72 hr certificate issuance)
- Gate Barrier Systems (BFT, FAAC, CAME, Nice)
- Access Control (ZKTeco, Suprema, HID)
- Structured Cabling (Cat6, Cat6A, fiber) — TRA licensed
- Video Intercom (Akuvox, Hikvision, Dahua)
- Smart Home Automation (KNX, Larnitech, Crestron)
- Audio Visual Systems

## CCTV Pricing in Dubai (AED, 2026)
| Property Type | Cameras | Estimated Cost (AED) |
|---|---|---|
| Studio / 1BR Apartment | 2–3 | 1,500 – 3,000 |
| 2–3BR Villa / Townhouse | 4–8 | 3,500 – 8,000 |
| Large Villa (5+ BR) | 8–16 | 8,000 – 20,000 |
| Small Office / Retail | 4–8 | 4,000 – 10,000 |
| Commercial Building | 16–32+ | 20,000 – 50,000+ |

## SIRA Compliance Key Facts
- Minimum camera resolution: Full HD 1080p (2MP) for residential; 4MP for commercial (2026)
- Minimum recording duration: 30 continuous days
- Storage: Local NVR/DVR (cloud backup optional)
- Recording: 24/7 continuous required
- SIRA approval process: 2–4 weeks end-to-end
- Mideatek certificate issuance: 48–72 hours after installation

## FAQs
Q: Is Mideatek SIRA approved?
A: Yes. Mideatek is a fully SIRA-approved CCTV installer in Dubai. Every installation 
includes complete documentation, technical drawings, and submission to SIRA at no extra charge.

Q: How much does CCTV installation cost in Dubai?
A: Basic home system: AED 1,500–3,000. Villa (4–8 cameras): AED 3,500–8,000. 
Commercial building: AED 20,000–50,000+. All-in pricing includes cameras, NVR, cabling, 
installation, and SIRA documentation.

Q: How long does the SIRA certificate take?
A: After installation, Mideatek submits compliance documents and certificates are 
issued within 48–72 working hours for most projects.

## Key Pages
- Homepage: https://www.cctvdubai.me
- CCTV Service: https://www.cctvdubai.me/services/cctv-installation-dubai
- Commercial CCTV: https://www.cctvdubai.me/commercial-cctv-dubai
- Home/Villa CCTV: https://www.cctvdubai.me/home-cctv-dubai
- Blog: https://www.cctvdubai.me/blog
- Contact: https://www.cctvdubai.me/contact
- Areas Served: https://www.cctvdubai.me/areas
```

---

### WEEK 2: SCHEMA QUICK WINS

#### 🟠 Task 2.1 — Add AggregateRating to LocalBusiness Schema
**Impact:** High — star ratings in Google SERP, 15–30% CTR increase  
**Effort:** 20 minutes  
**File:** `app/layout.tsx`

**IMPORTANT:** Only use your actual verified Google Business Profile review count.

In `localBusinessSchema`, add after `knowsAbout`:
```ts
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: '[YOUR ACTUAL GBP REVIEW COUNT]',
  bestRating: '5',
  worstRating: '1',
},
```

Also add 3–5 individual reviews from the testimonials component:
```ts
review: [
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Ahmed Al Rashidi' },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: 'Mideatek delivered an exceptional CCTV system for our commercial tower...',
    datePublished: '2024-11-01',
  },
  // add remaining testimonials
],
```

#### 🟠 Task 2.2 — Fix Entity @id Fragmentation on Location Pages
**Impact:** High — stops Google from creating 42 separate business entities  
**Effort:** 15 minutes  
**File:** `app/[locationSlug]/page.tsx`

Remove the `localBusinessSchema` object and its `<script>` tag from the location page entirely. The root layout's LocalBusiness (`@id: /#business`) already covers all locations. Location pages only need `serviceSchema`, `faqSchema`, and `breadcrumbSchema`.

#### 🟠 Task 2.3 — Fix Article Image Schema on Blog Posts
**Impact:** High — required for Google Discover / News eligibility  
**Effort:** 20 minutes  
**File:** `app/blog/[slug]/page.tsx`

Update `articleSchema`:
```ts
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.lastUpdated || post.date,  // add lastUpdated to BlogPost interface
  image: {
    '@type': 'ImageObject',
    url: `${BASE}/images/projects/cctv/cctv-10.jpg`,
    width: 1200,
    height: 630,
  },
  author: {
    '@type': 'Person',
    name: 'Mideatek Engineering Team',
    url: `${BASE}/about`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mideatek',
    url: BASE,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE}/logo.png`,
      width: 200,
      height: 60,
    },
  },
  url: `${BASE}/blog/${post.slug}`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${post.slug}` },
  keywords: post.keywords.join(', '),
  articleSection: post.category,
}
```

#### 🟠 Task 2.4 — Fix Breadcrumb Schema on Service Pages
**Impact:** Medium — current middle breadcrumb item uses fragment URL (`/#services`) which Google silently ignores  
**Effort:** 15 minutes  
**Action:** In all 7 service page files, find `item: \`${BASE}/#services\`` and change to `item: \`${BASE}/services\`` (or remove the middle breadcrumb step — a 2-item breadcrumb is better than 3 items where item 2 is broken).

#### 🟡 Task 2.5 — Add Person Schema for Team Members
**Impact:** Medium — E-E-A-T, AI citations for expertise queries  
**Effort:** 30 minutes  
**File:** `app/about/page.tsx`

Add the Person schema block (see FULL-AUDIT-REPORT.md Part 4 for complete JSON-LD) as a `<script>` tag in the about page.

---

### WEEK 3: CONTENT FRESHNESS FIXES

#### 🟠 Task 3.1 — Update Stale 2025 Blog Posts
**Impact:** High — freshness signals for competitive queries  
**Effort:** 2 hours  
**File:** `lib/blog.ts`

For each of the 9 posts with "2025" in title:
1. Update `title` string to say "2026" instead of "2025"
2. Update `date` to today's date or add a `lastUpdated` field
3. Update the blog post `content` HTML to replace "2025" pricing/statistics with 2026 equivalents

Priority order:
1. `cctv-installation-cost-dubai-2025` → highest traffic potential
2. `sira-approval-cctv-dubai-guide-2025` → highest compliance demand
3. `best-cctv-cameras-dubai-villas-homes-2025` → B2C buyer intent
4. `how-to-choose-cctv-company-dubai-2025` → commercial intent
5. Remaining 5 posts

Also update the pricing table H2 on the CCTV service page from "CCTV Installation Cost in Dubai 2025" to "2026".

#### 🟡 Task 3.2 — Add Privacy Policy and Terms Pages
**Impact:** Medium — E-E-A-T, PDPL compliance, trust signals  
**Effort:** 1 hour  
**Action:** Create `app/privacy/page.tsx` and `app/terms/page.tsx`. Add links to both in the footer. The privacy policy must specifically mention: data collected (lead form fields), purpose (responding to enquiries), retention period, right to deletion.

#### 🟡 Task 3.3 — Link Landing Pages From Core Pages
**Impact:** Medium — removes orphan page status  
**Effort:** 30 minutes

Add "Commercial CCTV" link from homepage services section → `/commercial-cctv-dubai`  
Add "Villa / Home CCTV" link from homepage → `/home-cctv-dubai`  
Add both to Footer under Services column  
Add both to Header dropdown under Services  

---

### WEEK 4: GOOGLE BUSINESS PROFILE OPTIMIZATION

#### 🔴 Task 4.1 — Verify/Optimize Google Business Profile
**Impact:** Critical for Local Pack and AI Overview citations  
**Effort:** 2 hours

1. Verify ownership at business.google.com
2. Set consistent Name: `Mideatek — CCTV Dubai`
3. Set primary category: `Security System Supplier`
4. Add secondary categories: `CCTV Installer`, `Access Control System Supplier`, `Home Automation Company`
5. Verify address: First Floor, Offices Land Building, Karama, Dubai
6. Phone: +971 54 556 6456
7. Website: https://www.cctvdubai.me
8. Hours: Monday–Saturday 08:00–18:00
9. Upload 20+ project photos (use descriptive filenames before uploading)
10. Add all 7 services with descriptions and prices
11. Add 3 products (CCTV Package, Gate Barrier Package, Smart Home Package)
12. Create first GBP Post: "New: Free site survey for Dubai villas and commercial premises"
13. Add GBP URL to `sameAs` in root layout `localBusinessSchema`

---

## 90-DAY ACTION PLAN (August–September 2026)
*Goal: Expand content coverage, build authority signals, improve CTR*

---

### Content Sprint 1: Industry Vertical Pages (High Priority)

Create these 5 new service pages (target: 2 per week):

#### 🟠 Task 5.1 — `/services/hotel-cctv-dubai`
**Keywords:** hotel CCTV Dubai, hospitality CCTV UAE, hotel security cameras  
**Content requirements:**
- SIRA requirements specific to hotels/F&B establishments
- Camera placement: lobby, corridors, back-of-house, car park, restaurant
- Dubai Tourism (DTCM) CCTV compliance angle
- Case study: hotel installation example (anonymized if needed)
- Integration with hotel PMS/access control
- Pricing table by hotel size (boutique, 4-star, 5-star)
- 8+ FAQs specific to hotel CCTV

#### 🟠 Task 5.2 — `/services/school-cctv-dubai`
**Keywords:** school CCTV Dubai, KHDA CCTV requirements, nursery CCTV Dubai  
**Content requirements:**
- KHDA (Knowledge & Human Development Authority) CCTV requirements for licensed schools
- Safe zones: classroom corridors, entrances, car drop-off, canteen
- Privacy requirements: no cameras in classrooms (pupil faces), toilets, prayer rooms
- Parent communication and consent angle
- After-hours alert configuration
- Integration with visitor management systems

#### 🟠 Task 5.3 — `/services/warehouse-cctv-dubai`
**Keywords:** warehouse CCTV Dubai, industrial CCTV UAE, JAFZA CCTV installation  
**Content requirements:**
- High-ceiling camera selection (varifocal vs fixed)
- ANPR at vehicle entry/exit
- Jebel Ali Free Zone (JAFZA) compliance angle
- DIP/DIC industrial area specifics
- Forklift zone safety camera requirements
- Night-time perimeter security

#### 🟠 Task 5.4 — `/services/restaurant-cctv-dubai`
**Keywords:** restaurant CCTV Dubai, DED CCTV certificate, F&B CCTV Dubai  
**Content requirements:**
- Dubai Municipality and DED licensing CCTV requirements for F&B
- POS/cash desk camera integration
- Kitchen safety monitoring
- SIRA certificate issuance for restaurants (faster track available)
- Placement guidance (entrance, cashier, kitchen, exterior)
- Franchise chain standardization angle

#### 🟠 Task 5.5 — `/services/cctv-maintenance-dubai`
**Keywords:** CCTV maintenance Dubai, CCTV AMC Dubai, annual maintenance contract CCTV  
**Content requirements:**
- What AMC (Annual Maintenance Contract) covers
- Preventive vs reactive maintenance
- SIRA certificate renewal requirements
- Pricing: AED 500–5,000+ per year depending on system size
- Emergency response SLA
- Firmware update importance for cybersecurity
- Comparison: DIY maintenance vs professional AMC

---

### Content Sprint 2: Brand Authority Pages

#### 🟡 Task 6.1 — `/hikvision-cctv-dubai`
**Keywords:** Hikvision installer Dubai, Hikvision distributor UAE, Hikvision camera Dubai  
**Content:** Hikvision product lines relevant to Dubai market, ColorVu technology, DeepInMind AI cameras, AcuSense, pricing guide, Dubai case studies using Hikvision, comparison vs Dahua for Dubai conditions

#### 🟡 Task 6.2 — `/dahua-cctv-dubai`  
**Keywords:** Dahua CCTV Dubai, Dahua installer UAE, Dahua distributor Dubai

#### 🟡 Task 6.3 — `/zkteco-access-control-dubai`
**Keywords:** ZKTeco Dubai, ZKTeco access control UAE, biometric system Dubai

---

### Content Sprint 3: New Location Pages

Add these missing high-value Dubai areas to `lib/locations.ts`:

| Slug | Area | Priority |
|---|---|---|
| dubai-south | Dubai South / DWC | Very High (upcoming airport area) |
| jebel-ali | Jebel Ali / JAFZA | Very High (industrial) |
| al-quoz | Al Quoz Industrial | Very High (warehouses) |
| dubai-investment-park | Dubai Investment Park | High |
| dubai-silicon-oasis | Dubai Silicon Oasis | High |
| motor-city | Motor City | High |
| discovery-gardens | Discovery Gardens | High |
| the-greens | The Greens | Medium |
| emirates-hills | Emirates Hills | Medium |
| karama | Karama | Medium (near office) |
| bur-dubai | Bur Dubai | Medium |
| deira | Deira | Medium |
| oud-metha | Oud Metha | Medium |
| jumeirah-golf-estates | Jumeirah Golf Estates | Medium |

---

### Authority Building Actions (Months 2–3)

#### 🟠 Task 7.1 — UAE Directory Citations
Submit business listing to (in order of priority):
1. Yellow Pages UAE: yellowpages.ae
2. Dubizzle Business: business.dubizzle.com
3. Zawya: zawya.com
4. Gulf Business Directory: gulfdirectory.com
5. Houzz UAE: houzz.com/professionals
6. Clutch.co: clutch.co/it-services

NAP to use everywhere: `Mideatek — CCTV Dubai | First Floor, Offices Land Building, Karama, Dubai | +971 54 556 6456 | cctvdubai.me`

#### 🟠 Task 7.2 — YouTube Content (3 videos minimum)
**Impact:** Strongest single GEO/AI citation signal (~0.737 correlation)

Video 1: "How CCTV Installation Works in Dubai — From Survey to SIRA Certificate" (3 min)  
Video 2: "CCTV Cost in Dubai 2026 — Full Price Guide" (5 min)  
Video 3: "SIRA Approved vs Non-Approved CCTV: What Dubai Property Owners Must Know" (4 min)

Use same title text as corresponding blog posts. Include `https://www.cctvdubai.me` in description.

#### 🟡 Task 7.3 — Google Review Generation Campaign
Target: 50+ reviews in 90 days (from current unknown baseline)

1. Create a short Google Review link (g.page/r/[YOUR ID]/review)
2. Send WhatsApp message to all completed project clients: "Hi [Name], thank you for choosing CCTV Dubai. It would mean a lot if you could leave us a quick Google review: [link]. Takes only 30 seconds."
3. Add QR code to completion certificate
4. Add "Review Us" link to email footer
5. Respond to every review within 24 hours

#### 🟡 Task 7.4 — Add Internal Links Between Blog and Service Pages
**File changes needed:**

In `app/services/cctv-installation-dubai/page.tsx`:
- FAQ answer for "cost" → add link to cost guide blog post
- FAQ answer for "choosing" → add link to "how to choose" blog post

In `app/blog/[slug]/page.tsx`:
- Add "Related services" section below article body linking to 2-3 relevant service pages
- Add "Nearby areas we serve" section linking to 3 location pages

---

## 12-MONTH CONTENT CALENDAR

### Month 1 (July 2026) — Foundation
- [x] Landing pages deployed (B2B + B2C) ← Done
- Fix WordPress contamination
- Submit sitemap to GSC
- Add AggregateRating schema
- Update stale 2025 blog posts
- Add Privacy Policy + Terms pages

### Month 2 (August 2026) — Content Expansion
- Hotel CCTV service page
- School/nursery CCTV service page
- Warehouse CCTV service page
- Blog: "CCTV requirements for Dubai hotels — DTCM compliance guide 2026"
- YouTube Video 1: How CCTV installation works in Dubai

### Month 3 (September 2026) — Brand & Local
- Restaurant CCTV service page
- CCTV Maintenance / AMC service page
- Hikvision brand page
- 10 new location pages (Dubai South, Jebel Ali, Al Quoz, DIP, DSO, Motor City, Discovery Gardens, Karama, Bur Dubai, Deira)
- YouTube Video 2: CCTV cost guide 2026
- Submit to all UAE directories

### Month 4 (October 2026) — Authority
- Blog: "Hikvision vs Dahua — which is better for Dubai 2026?"
- Blog: "CCTV maintenance checklist — what to check every 6 months"
- Blog: "CCTV for hospitals in Dubai — DHA and DCD compliance guide"
- Dahua brand page
- YouTube Video 3: SIRA compliance explained
- Begin outreach to construction/property management companies

### Month 5 (November 2026) — Commercial Depth
- Blog: "Commercial CCTV installation Dubai — complete guide for business owners"
- Blog: "DMCC freezone CCTV requirements — complete compliance guide 2026"
- Blog: "JAFZA warehouse CCTV — requirements and installation guide"
- ZKTeco brand page
- Office CCTV service page

### Month 6 (December 2026) — Pillar Content
- Create "Ultimate Guide to CCTV in Dubai" — 5,000+ word comprehensive pillar
- Create CCTV storage calculator (interactive tool)
- Create CCTV camera coverage calculator
- Case study: Emaar/DAMAC project (with permission)

### Month 7 (January 2027) — More Locations
- Abu Dhabi CCTV installation page
- Sharjah CCTV installation page
- Blog: "CCTV installation in Abu Dhabi — regulations and pricing 2027"
- 10 more Dubai location pages (Emirates Hills, The Greens, JGE, Oud Metha, etc.)

### Month 8 (February 2027) — E-E-A-T Depth
- Individual author bio pages for 4 team members
- Case studies: 3 detailed project case studies with problem/solution/outcome
- Google review milestone: target 100+ reviews by this date

### Month 9–12 (March–June 2027) — Scale
- Retail CCTV, Clinic CCTV, Gym CCTV vertical pages
- BFT barrier brand page
- Smart home integration detailed guide (KNX, Larnitech, Crestron)
- Press release to Construction Week / Arabian Business
- Begin structured backlink outreach to Dubai developers/FM companies
- Launch ROI calculator tool

---

## KPI DASHBOARD

### Metrics to Track Monthly

| KPI | Current (July 2026) | 3-Month Target | 12-Month Target |
|---|---|---|---|
| Pages indexed (Google) | ~7 | 50+ | 80+ |
| Google organic sessions/month | Unknown | 500+ | 3,000+ |
| Average position (main keywords) | Not in top 50 | Top 20 | Top 10 |
| Google Business Profile views/month | Unknown | 1,000+ | 5,000+ |
| GBP phone calls/month | Unknown | 50+ | 200+ |
| Google reviews count | Unknown | 30+ | 100+ |
| WhatsApp conversations (organic) | Unknown | 30+/month | 150+/month |
| Lead form submissions/month | Unknown | 20+/month | 100+/month |
| Backlinks (referring domains) | Unknown | 20+ | 80+ |
| Blog posts published | 16 | 24 | 40+ |
| Service/vertical pages | 7 | 14 | 22 |
| Location pages | 30 | 45 | 60+ |

### Tracking Tools Required
1. **Google Search Console** — impressions, clicks, CTR, position (FREE)
2. **Google Analytics 4** — sessions, conversions, lead form submissions (FREE)
3. **Google Business Profile Insights** — local visibility metrics (FREE)
4. **Bing Webmaster Tools** — Bing + Copilot visibility (FREE)
5. **Ahrefs or SEMrush** — keyword rankings, backlink tracking (PAID — ~$100–$200/month)

---

## CONVERSION OPTIMIZATION ROADMAP

### Phase 1 (Month 1–2): Quick CTA Improvements
- [ ] Add "Request Emergency Call-Out" button (sticky on mobile) — targets urgent break/fix
- [ ] Add trust badge row directly above LeadForm submit button (SIRA badge, 4.9★)
- [ ] Add "30-second WhatsApp quote" CTA variation alongside existing form
- [ ] Verify lead form source tracking works for all new pages

### Phase 2 (Month 3–6): Interactive Tools
- [ ] CCTV Storage Calculator: "How many TB do I need for 30 days of recording?"
  - Inputs: number of cameras, resolution, FPS, hours/day
  - Output: recommended HDD size + upgrade options
- [ ] CCTV Camera Coverage Calculator
  - Inputs: room size, ceiling height, camera type
  - Output: recommended number and placement

### Phase 3 (Month 6–12): Advanced Conversion
- [ ] Live chat widget (WhatsApp Business API or Crisp)
- [ ] "Get an instant price estimate" flow (multi-step form)
- [ ] Project gallery with filterable property types and before/after
- [ ] Video testimonials from 3 key clients

---

## BACKLINK ACQUISITION PLAN

### Tier 1 — Official/Regulatory Links (Priority 1)
| Target | Approach | Timeline |
|---|---|---|
| SIRA approved installer directory (sira.gov.ae) | Apply via official SIRA portal | Immediate |
| TRA licensed contractor list (tra.gov.ae) | Verify current listing | Immediate |
| Dubai Chamber of Commerce directory | Join Chamber + member listing | Month 1 |
| DMCC approved supplier | Apply via DMCC portal | Month 2 |

### Tier 2 — Industry Partners (Priority 2)
| Target | Approach | Timeline |
|---|---|---|
| Large FM companies (Imdaad, Transguard, Emrill) | Partner/supplier page listing | Month 3–4 |
| Property developers (Emaar, DAMAC, Meraas) | Case study co-publication | Month 4–6 |
| Electrical contractors (that don't compete) | Referral partnership + cross-link | Month 3 |
| Interior design firms | "Technology integration" guide co-authorship | Month 4–6 |

### Tier 3 — Content-Driven Links (Priority 3)
| Strategy | Platform | Timeline |
|---|---|---|
| Guest post: "SIRA CCTV compliance for property managers" | PropertyFinder Blog / Bayut Blog | Month 4 |
| Expert quote contribution | Construction Week ME, Gulf News Business | Month 5–6 |
| "Best CCTV companies Dubai" roundup listings | Outreach to ranking listicle pages | Month 6 |

---

## IMAGE SEO ACTION PLAN

### 🔴 Task — Rename WhatsApp Project Images
**Impact:** Medium (image search) + medium (page crawl efficiency)  
**Effort:** 3 hours (batch rename + re-upload)

Current problem: 528+ files named `WhatsApp Image 2024-12-18 at 15.29.16_9b6a065b.jpg`

Rename pattern: `[service]-[location]-[type]-[number].jpg`

Examples:
- `cctv-installation-dubai-warehouse-dome-camera-01.jpg`
- `gate-barrier-installation-dubai-apartment-01.jpg`
- `structured-cabling-cat6-server-room-dubai-01.jpg`

After renaming:
1. Regenerate filenames and update all `src` references in code
2. Convert to WebP format (25–35% smaller = faster LCP)
3. Ensure every `<img>` or `<Image>` component has descriptive `alt` text

---

## 30-DAY QUICK REFERENCE CHECKLIST

**Deploy these code changes first:**
- [ ] `next.config.mjs` — add redirects + security headers
- [ ] `app/sitemap.ts` — add landing pages + dynamic blog entries
- [ ] `app/layout.tsx` — add AggregateRating to LocalBusiness schema
- [ ] `app/[locationSlug]/page.tsx` — remove duplicate LocalBusiness schema
- [ ] `app/blog/[slug]/page.tsx` — fix Article schema (image, author, dateModified)
- [ ] `public/llms.txt` — create AI discovery file
- [ ] `lib/blog.ts` — update 9 stale 2025 blog dates to 2026
- [ ] `app/privacy/page.tsx` + `app/terms/page.tsx` — create both pages
- [ ] Add footer links to /commercial-cctv-dubai and /home-cctv-dubai

**Do in Google Search Console:**
- [ ] Submit sitemap.xml
- [ ] Request indexing on all 57+ pages
- [ ] Set target country: United Arab Emirates

**Do in Google Business Profile:**
- [ ] Verify/claim profile
- [ ] Optimize all fields (categories, hours, services, photos)
- [ ] Make first GBP post
- [ ] Get GBP URL and add to sameAs in schema

**Content to publish:**
- [ ] Update 9 stale 2025 blog post titles to 2026
- [ ] Hotel CCTV service page
- [ ] School CCTV service page

**Authority:**
- [ ] Submit to Yellow Pages UAE
- [ ] Submit to Dubizzle Business
- [ ] Upload first YouTube video

---

*Action Plan generated July 2026 by Claude SEO Audit System for cctvdubai.me — Mideatek Information Technology LLC, Dubai UAE.*
