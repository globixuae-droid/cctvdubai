import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Admin user
  const hashedPassword = await bcrypt.hash('Admin@Mideatek2024', 12)
  await prisma.user.upsert({
    where: { email: 'admin@mideatek.com' },
    update: {},
    create: {
      email: 'admin@mideatek.com',
      password: hashedPassword,
      name: 'Mideatek Admin',
      role: 'admin',
    },
  })

  // Services
  const services = [
    {
      title: 'CCTV Installation Dubai',
      slug: 'cctv-installation-dubai',
      description: 'SIRA-approved CCTV surveillance systems for commercial and residential properties across Dubai and the UAE.',
      icon: 'Camera',
      order: 1,
    },
    {
      title: 'Structured Cabling UAE',
      slug: 'structured-cabling-uae',
      description: 'Enterprise-grade structured cabling solutions ensuring reliable, high-speed network infrastructure.',
      icon: 'Cable',
      order: 2,
    },
    {
      title: 'Access Control Systems',
      slug: 'access-control-systems',
      description: 'Advanced access control and time attendance systems to secure your premises.',
      icon: 'Lock',
      order: 3,
    },
    {
      title: 'Audio Visual Systems',
      slug: 'audio-visual-systems',
      description: 'Premium AV and background music systems for offices, hotels, retail, and hospitality.',
      icon: 'Speaker',
      order: 4,
    },
    {
      title: 'Smart Home Automation',
      slug: 'smart-home-automation',
      description: 'Complete smart home solutions — lighting, climate, security, and entertainment control.',
      icon: 'Home',
      order: 5,
    },
    {
      title: 'Parking & Gate Barriers',
      slug: 'parking-gate-barrier',
      description: 'Automated parking management and gate barrier systems for residential and commercial use.',
      icon: 'Car',
      order: 6,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: { ...service, content: service.description, published: true },
    })
  }

  // Testimonials
  const testimonials = [
    {
      name: 'Ahmed Al Rashidi',
      company: 'Al Rashidi Real Estate',
      role: 'General Manager',
      content: 'Mideatek delivered an exceptional CCTV and access control system for our entire commercial tower. Professional, punctual, and highly skilled team.',
      rating: 5,
    },
    {
      name: 'Sarah Thompson',
      company: 'The Luxury Villa, Palm Jumeirah',
      role: 'Homeowner',
      content: 'Our smart home is absolutely incredible. Every device works seamlessly, and the team was patient throughout the entire process. Highly recommend Mideatek.',
      rating: 5,
    },
    {
      name: 'Mohammed Khalid',
      company: 'Khalid Group of Hotels',
      role: 'Operations Director',
      content: 'The AV and background music system Mideatek installed across all our properties is outstanding. The quality of work is world-class.',
      rating: 5,
    },
    {
      name: 'Priya Nair',
      company: 'Nair Tech Solutions',
      role: 'IT Manager',
      content: 'Mideatek handled our entire structured cabling project flawlessly. Our network infrastructure is now rock solid. Great team!',
      rating: 5,
    },
  ]

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: { ...t, published: true } }).catch(() => {})
  }

  // Sample projects
  const projects = [
    {
      title: 'Luxury Villa – Palm Jumeirah',
      slug: 'luxury-villa-palm-jumeirah',
      description: 'Complete smart home automation, CCTV, and AV system installation for a 6-bedroom luxury villa.',
      category: 'smart-home',
      location: 'Palm Jumeirah, Dubai',
      images: JSON.stringify(['/images/projects/project-1.jpg']),
      featured: true,
    },
    {
      title: 'Commercial Tower – DIFC',
      slug: 'commercial-tower-difc',
      description: '48-camera CCTV system with SIRA-compliant DVR/NVR, structured cabling, and access control across 28 floors.',
      category: 'cctv',
      location: 'DIFC, Dubai',
      images: JSON.stringify(['/images/projects/project-2.jpg']),
      featured: true,
    },
    {
      title: 'Luxury Hotel – Downtown Dubai',
      slug: 'luxury-hotel-downtown',
      description: 'Complete AV solution including background music, digital signage, conference room AV, and lobby entertainment.',
      category: 'av-systems',
      location: 'Downtown Dubai',
      images: JSON.stringify(['/images/projects/project-3.jpg']),
      featured: true,
    },
  ]

  for (const p of projects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: { ...p, published: true },
    })
  }

  // Settings
  const settings = [
    { key: 'site_name', value: 'Mideatek' },
    { key: 'site_tagline', value: "Dubai's Leading ELV & AV Solutions Company" },
    { key: 'phone', value: '+971 50 820 7931' },
    { key: 'email', value: 'info@mideatek.com' },
    { key: 'address', value: 'Office 1204, Damac Smart Heights, Barsha Heights, Dubai, UAE' },
    { key: 'whatsapp', value: '+971508207931' },
    { key: 'facebook', value: 'https://facebook.com/mideatek' },
    { key: 'instagram', value: 'https://instagram.com/mideatek' },
    { key: 'linkedin', value: 'https://linkedin.com/company/mideatek' },
  ]

  for (const s of settings) {
    await prisma.setting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    })
  }

  console.log('✅ Database seeded successfully')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
