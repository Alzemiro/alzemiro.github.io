import {Card, Flex, Avatar, Box, Text, Badge, Link} from '@radix-ui/themes'
import {Fade} from "../../components/fadein.componet.jsx";
import {useTranslation} from "react-i18next";

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
                                <Avatar
                                    size="7"
                                    src="https://scontent.fpoa13-1.fna.fbcdn.net/v/t39.30808-6/399565841_6785281861555027_7736682493382493443_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHVhgz1Nwsec906fo6YtSfYxK--sQP8bUPEr76xA_xtQ8jTUvb_4IHMGH1qN8eKPIhQ9rfmqsHadtNTWAoDlMM-&_nc_ohc=uP_FvVZEtRMAX-TNaWF&_nc_ht=scontent.fpoa13-1.fna&oh=00_AfCuf7AF2-PdOgCEMt_X8-jIEeY5TAUnpeIA_v9Pst_lZw&oe=65DC61B0"
                                    fallback="T"
                                />
                                <Box>
                                    <Text as="div" size="6" weight="bold" className="text-[var(--dracula-fg)] text-2xl">
                                        Alzemiro Iago de M. Thomaz
                                    </Text>
                                    <Text as="div" size="4" className="text-[var(--dracula-fg)]">
                                        Full Stack Developer
                                    </Text>
                                    <Flex gap="2" wrap={"wrap"}>
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
                                        {t('pages.aboutme.part-1')}
                                    </Text>
                                    <Text as="p" size="2" className="text-[var(--dracula-fg)]">
                                        {t('pages.aboutme.part-2')}...
                                    </Text>
                                    <Box className="float-righ">
                                        <Link className="float-right">{t('generic.knowmore')}</Link>
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