import {Card, Flex,  Box, Text, Badge} from '@radix-ui/themes'
import {Fade} from "../../components/fadein.componet.jsx";
import {useTranslation} from "react-i18next";
import ButtonPortifolio from '../../components/shared/buttonportifolio.component.jsx';

export function HomePage() {
    const badges = ["JAVA", "JS", "SPRING BOOT", "NODE", "REACT", "VUE"]
    const {t} = useTranslation();

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 container m-auto">
                <Fade isActive direction="left">
                    <div className="flex items-center justify-center h-auto mb-4 rounded ">
                        <Card size="4" className="w-full !backdrop-blur-sm !bg-white/10">
                            <Flex gap="3" align="center">

                                <Box >
                                    <Text as="div" size="6" weight="bold" className="text-[var(--dracula-fg)] text-2xl">
                                        Alzemiro Iago de M. Thomaz
                                    </Text>
                                    <Text as="div" size="4" className="text-[var(--dracula-fg)] py-2">
                                        Full Stack Developer
                                    </Text>
                                    <Flex gap="2" wrap={"wrap"} >
                                        {badges.map((item, index) =><Badge color="indigo" variant="surface" key={`'${index + item}'`}>{item}</Badge>)}
                                    </Flex>
                                </Box>
                            </Flex>
                        </Card>
                    </div>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Fade isActive direction="right">
                        <div className="flex items-center h-auto mb-4 rounded ">
                            <Card size="4" className="!backdrop-blur-sm !bg-white/30">
                                <Flex gap="3" direction="column" className="max-w-">
                                    <Text align="left" as="p" size="4" className="text-[var(--dracula-fg)]">
                                        <strong>{t('pages.aboutme.title')}</strong>
                                    </Text>
                                    <Text as="p" size="2" className="text-[var(--dracula-fg)]">
                                        {t('pages.aboutme.part-1')}...
                                    </Text>                                   
                                    <Box className="float-right">
                                        <ButtonPortifolio className='float-right' to='/about-me' text={t('generic.knowmore')} />                                       
                                    </Box>

                                </Flex>
                            </Card>
                        </div>
                    </Fade>
                    <Fade isActive direction="left">
                        <div className="flex items-center justify-center h-auto mb-4 rounded ">
                            <Card size="4" className="w-full !backdrop-blur-sm !bg-white/30">
                                <Flex gap="3" align="center">
                                    <Box>

                                    </Box>
                                </Flex>
                            </Card>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}