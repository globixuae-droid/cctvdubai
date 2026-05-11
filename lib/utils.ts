export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-AE', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

export const SERVICES = [
  { label: 'CCTV Installation', value: 'cctv' },
  { label: 'Structured Cabling', value: 'cabling' },
  { label: 'Access Control', value: 'access-control' },
  { label: 'Audio Visual Systems', value: 'av-systems' },
  { label: 'Smart Home Automation', value: 'smart-home' },
  { label: 'Parking & Gate Barriers', value: 'parking-barriers' },
  { label: 'Other', value: 'other' },
]

export const COMPANY_INFO = {
  phone: '+971 50 820 7931',
  email: 'info@mideatek.com',
  whatsapp: '+971508207931',
  address: 'Office 1204, Damac Smart Heights, Barsha Heights, Dubai, UAE',
}
