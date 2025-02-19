import * as React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { SEO } from 'components/seo/seo'

import { FallInPlace } from 'components/motion/fall-in-place'
import { Link, Br } from '@saas-ui/react'
import { Em } from 'components/typography'
import { NextjsLogo, ChakraLogo } from 'components/logos'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { BackgroundGradient } from 'components/gradients/background-gradient'

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from 'components/highlights'

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Ainsider AI Hub"
        description="Comprehensive and Filterable Generative AI Tools and ChatGPT with other AI LLM models and AI image generation Prompt Library"
      />
      <Box>
        <HighlightsSection />
      </Box>
    </Box>
  )
}


const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  const categoryLinks = [
    {
      category: 'All',
      link: 'https://ainsider.tools/',
    },
    {
      category: 'AI Agents',
      link: 'https://ainsider.tools/agents-hub/',
    },
    {
      category: 'LLMs',
      link: 'https://ainsider.tools/tools/llms/',
    },
    {
      category: 'Assistants',
      link: 'https://ainsider.tools/tools/assistants/',
    },
    {
      category: 'Coding',
      link: 'https://ainsider.tools/tools/code/',
    },
    {
      category: 'Creative AI',
      link: 'https://ainsider.tools/creativehub/',
    },
    {
      category: 'Images',
      link: 'https://ainsider.tools/tools/image-generation/',
    },
    {
      category: 'Video',
      link: 'https://ainsider.tools/tools/video/',
    },
    {
      category: 'Social Media',
      link: 'https://ainsider.tools/tools/social-media/',
    },
    {
      category: 'Productivity',
      link: 'https://ainsider.tools/tools/productivity/',
    },
    {
      category: 'Music',
      link: 'https://ainsider.tools/tools/music/',
    },
    {
      category: 'Voice/speech',
      link: 'https://ainsider.tools/tools/voice/',
    },
    {
      category: 'Explore Ainsider.tools',
      link: 'https://ainsider.tools/',
    },
  ];

  const midCategoryLinks = [    
    {
      category: 'Behance',
      link: 'https://www.behance.net/macaistudio',
    },
    {
      category: 'Instagram',
      link: 'https://www.instagram.com/piotr.macai/',
    },
    {
      category: 'Artstation',
      link: 'https://www.artstation.com/piotrmacai',
    },
    {
      category: 'DeviantArt',
      link: 'https://www.deviantart.com/piotrmacai',
    },
  ];

  const storeCategoryLinks = [  
    {
      category: 'AI Resources & Guides',
      link: 'https://store.ainsider.co/',
    },  
    {
      category: 'AI Agents Docs',
      link: 'https://store.ainsider.co/docs/',
    },
    {
      category: 'ChatGPT & LLMs',
      link: 'https://store.ainsider.co/shop/',
    },
    {
      category: 'Midjourney & AI Art',
      link: 'https://store.ainsider.co/shop/',
    },
    {
      category: 'AI Newsletter',
      link: 'https://ainsider.beehiiv.com/',
    },
    {
      category: 'Narzędzia AI Po Polsku',
      link: 'https://tools.ainsider.pl',
    },
    {
      category: 'AI Newsletter PL',
      link: 'https://ainsider.pl',
    },
  ];

  return (
    <Highlights>

<HighlightsTestimonialItem
        name="Ainsider AI Company"
        description="by Piotr Macai"
        avatar="/static/images/macai.jpg"
        gradient={['pink.200', 'purple.500']}
      >
         <Link href="https://ainsider.co" isExternal>
         <Heading as='h2' size='xl' mt="-1rem" mb="1rem">
            Ainsider AI
            </Heading>
            </Link>
       AI | LLMs | Agents | Tools | Automations | For Business
       <Link href="https://ainsider.co" isExternal>
       <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            mt="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              AI Automation For Business: Ainsider.agency
              </Text>
            </Box>
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          </Flex>
          </Link>
      </HighlightsTestimonialItem>

 <HighlightsItem colSpan={[1, null, 2]}>
      <VStack flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start" spacing="2">
          <Link href="https://ainsider.tools" isExternal>
            <Heading as='h2' size='lg'>
            AI Tools Directory
            </Heading>
            </Link>
          <Link href="https://ainsider.tools" isExternal>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            ml={{ base: 0, md: 4 }}
            mb="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              ainsider.tools
              </Text>
            </Box>
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          </Flex>
          </Link>
        </VStack>

        <VStack alignItems="flex-start" spacing="1">
          <Text color="muted" fontSize="xl">
           Comprehensive and filterable <Em>by all the most important Generative AI categories </Em>
           Free AI Tools and Models Directory
          </Text>
          <Wrap mt="8">
           {categoryLinks.map((item) => (
              <Tag
                key={item.category}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                <Link href={item.link} isExternal>
                  {item.category}
                </Link>
              </Tag>
            ))}
        </Wrap>
        </VStack>
      </HighlightsItem>



      <HighlightsItem
        colSpan={[1, null, 2]}
        // title="Midjourney Prompt Library"
      >
            <VStack flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start" spacing="2">
            <Link href="https://store.ainsider.co/" isExternal>
            <Heading as='h2' size='lg'>
            AI Knowledge Hub
            </Heading>
            </Link>
          <Link href="https://store.ainsider.co/" isExternal>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            ml={{ base: 0, md: 4 }}
            mb="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              <Link href="https://store.ainsider.co/" isExternal>
              store.ainsider.co
              </Link>
              </Text>
            </Box>
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          </Flex>
          </Link>
        </VStack>
        <Text color="muted" fontSize="lg">
          AI Implementations | Automations | AI Agents | Documentation | AI Templates
        </Text>
        <Wrap mt="8">
           {storeCategoryLinks.map((item) => (
              <Tag
                key={item.category}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                <Link href={item.link} isExternal>
                  {item.category}
                </Link>
              </Tag>
            ))}
        </Wrap>
      </HighlightsItem>

     
      <HighlightsItem
      >
      <Link href="https://ainsider.beehiiv.com/" isExternal>
      <Heading as='h2' size='lg' mb="4">
            Ainsider AI Newsletter
            </Heading>
        </Link>
        <Text color="muted" fontSize="lg">
        AI Insights | News | Tools | Guides
        </Text>
        <Link href="https://ainsider.beehiiv.com/" isExternal>
        <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            mt="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              <Link href="https://ainsider.beehiiv.com/" isExternal> ainsider.beehiiv.com</Link>
              </Text>
            </Box>
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          </Flex>
          </Link>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Piotr Macai"
        description="Founder"
        avatar="/static/images/macai.jpg"
        gradient={['pink.200', 'purple.500']}
      >
         <Link href="https://macai.studio" isExternal>
         <Heading as='h2' size='lg' mt="-1rem" mb="1rem">
            Piotr Macai
            </Heading>
            </Link>
       Founder of Ainsider | Full stack dev | Designer
       <Link href="https://aitoolslibrary.super.site/ai-insider" isExternal>
       <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            mt="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              Macai.studio
              </Text>
            </Box>
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          </Flex>
          </Link>
      </HighlightsTestimonialItem>

{/* <HighlightsItem title="AI Prompt Frameworks">
        <Text color="muted" fontSize="lg">
        High quality Prompt Frameworks - step by step tutorials with examples to build prompts
        </Text>
        <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="2"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              aitoolslibrary.super.site
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
  </HighlightsItem> */}


      <HighlightsItem
        colSpan={[1, null, 2]}
        // title="Midjourney Prompt Library"
      >
            <VStack flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start" spacing="2">
            <Link href="https://macai.studio/design" isExternal>
            <Heading as='h2' size='lg'>
            Creative AI Resources
            </Heading>
            </Link>
          <Link href="https://macai.studio/design" isExternal>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="4"
            pe="4"
            ml={{ base: 0, md: 4 }}
            mb="4"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              {' '}
              <Text color="cyan.300" display="inline">
              <Link href="https://macai.studio/design" isExternal>
              Design studio 
              </Link>
              </Text>
            </Box>
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          </Flex>
          </Link>
        </VStack>
        <Text color="muted" fontSize="lg">
          Midjourney | AI Art Resources | AI Video | Creative AI
        </Text>
        <Wrap mt="8">
           {midCategoryLinks.map((item) => (
              <Tag
                key={item.category}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                <Link href={item.link} isExternal>
                  {item.category}
                </Link>
              </Tag>
            ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}



export default Home

export async function getStaticProps() {
  return {
    props: {
      // announcement: {
      //   title: 'Get 50% off Saas UI Pro while in beta.',
      //   href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order',
      // },
    },
  }
}
