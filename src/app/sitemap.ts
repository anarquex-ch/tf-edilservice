import { MetadataRoute } from 'next'
import { zonesData } from '@/data/zonesData'
import { servicesData } from '@/data/servicesData'
import { subServicesData } from '@/data/subServicesData'
import { utilitaData } from '@/data/utilitaData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tfedilservice.ch'
  
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/utilita`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chi-siamo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/referenze`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ticino`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grigioni`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]

  // Add Utilità Items
  Object.keys(utilitaData).forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/utilita/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add programmatic SEO routes
  for (const cityKey in zonesData) {
    const zone = zonesData[cityKey]
    const cantonPath = zone.canton.toLowerCase()
    
    // City Hub
    sitemapEntries.push({
      url: `${baseUrl}/${cantonPath}/${cityKey}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })

    // Service Hubs for City
    for (const serviceKey in servicesData) {
      sitemapEntries.push({
        url: `${baseUrl}/${cantonPath}/${cityKey}/${serviceKey}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      })

      // SubService Hubs for City
      const subServices = subServicesData[serviceKey]
      if (subServices) {
        for (const subServiceKey in subServices) {
          sitemapEntries.push({
            url: `${baseUrl}/${cantonPath}/${cityKey}/${serviceKey}/${subServiceKey}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
          })
        }
      }
    }
  }

  return sitemapEntries
}
