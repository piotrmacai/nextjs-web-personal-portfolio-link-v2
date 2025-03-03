import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  
  logo: Logo,
  seo: {
    title: 'AInsider AI',
    description: 'All in one AI Library. Comprehensive and filterable AI Library with the best AI tools and ChatGPT & Midjourney Prompts Library. Created by Aiware.me',
    openGraph: {
      type: 'website',
      url: 'https://aisider.co',
      title: 'AI Tools & Prompts Library',
      description: 'All in one AI Library. Comprehensive and filterable Artificial Intelligence Library with the best AI tools and ChatGPT & Midjourney Prompts Library',
      site_name: 'Aiware AI Library',
    },
    twitter: {
      handle: '@piotrmacai',
      site: '@piotrmacai',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      { name: 'author', content: 'Piotr Macai' },
      { name: 'keywords', content: 'ai, ai tools, chatgpt prompts, midjourney prompts, ai library' },
      { property: 'og:title', content: 'AI Tools & Prompts Library' },
      { property: 'og:description', content: 'All in one AI Library. Comprehensive and filterable AI Library with the best AI tools and ChatGPT & Midjourney Prompts Library.' },
    ],
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [  
      {
        id: 'tools',
        label: 'AI Tools Directory',
        href: 'https://tools.ainsider.pl',
        target: '_blank',
      },
      {
        id: 'prompts',
        label: 'AI Automation Studio',
        href: 'https://ainsider.agency',
        target: '_blank',
      },
      {
        id: 'pl',
        label: 'PL',
        href: 'https://ainsider.pl',
        target: '_blank',
      },
      {
        id: 'twitter',
        href: 'https://twitter.com/piotrmacai',
        style: { paddingTop: '0.6rem' },
        label: <FaTwitter size="14" />,
        target: '_blank',
      },
      {
        id: 'linkedin',
        label: <FaLinkedin size="14" />,
        style: { paddingTop: '0.6rem' },
        href: 'https://www.linkedin.com/in/piotrmac0/',
        target: '_blank',
      },
      {
        id: 'github',
        href: 'https://github.com/piotrmacai',
        style: { paddingTop: '0.6rem' },
        label: <FaGithub size="14" />,
        target: '_blank',
      },
    
      // {
      //   label: 'Login',
      //   href: '/login',
      // },
      {
        label: 'Newsletter',
        href: 'https://ainsider.beehiiv.com',
        variant: 'primary',
        target: '_blank',
     },
      // {
      //   label: 'Sign Up',
      //   href: '/signup',
      //   variant: 'primary',
      // },
    ],
  },
  footer: {
    // copyright: (
    //   <>
    //     Built by{' '}
    //     <Link href="https://aiware.me">Aiware.me</Link>
    //   </>
    // ),
    links: [
      {
        id: 'twitter',
        href: 'https://twitter.com/piotrmacai',
        label: <FaTwitter size="14" />,
        target: '_blank',
      },
      {
        id: 'linkedin',
        label: <FaLinkedin size="14" />,
        style: { paddingTop: '0.6rem' },
        href: 'https://www.linkedin.com/in/piotrmac0/',
        target: '_blank',
      },
      {
        id: 'facebook',
        label: <FaFacebook size="14" />,
        style: { paddingTop: '0.6rem' },
        href: 'https://www.facebook.com/profile.php?id=100093134271073',
        target: '_blank',
      },
      {
        id: 'github',
        href: 'https://github.com/piotrmacai',
        label: <FaGithub size="14" />,
        target: '_blank',
      },
      {
        href: 'mailto:piotr@ainsider.co',
        label: 'Email',
      },
    ],
  },
  signup: {
    title: 'AI Resources Hub',
  },
}

export default siteConfig
