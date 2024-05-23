import {Fade} from "../../components/fadein.componet";
import {Card, Flex, Box, Text} from "@radix-ui/themes"
import {useTranslation} from "react-i18next";

export function AboutMe() {

    const {t} = useTranslation();

    return (<div className=" sm:ml-64">
            <div className="p-2 container mx-auto ">
                <Fade isActive direction="left">
                    <div className="overflow-hidden mt-8 mb-4 rounded w-full !backdrop-blur-sm !bg-white/10">
                        <div className="max-w-7xl mx-auto grid grid-cols-2 ">
                            <Box
                                className="pb-8 lg:col-span-1 col-span-2 lg:order-1 order-2">
                                <main
                                    className="mx-auto my-auto text-[var(--dracula-fg)] max-w-7xl sm:mt-12 sm:px-6  lg:my-auto lg:px-8 xl:mt-10">
                                    <div className="sm:text-center lg:text-left py-10">
                                        <h2 className="mb-6 text-2xl tracking-tight font-extrabold text-[var(--dracula-fg)] sm:text-3xl md:text-4xl">
                                            {t('pages.aboutme.title')}
                                        </h2>

                                        <div className={""}>
                                            <Text as={"p"}>
                                                {t('pages.aboutme.part-1')}
                                            </Text>

                                            <Text as={"p"} className="py-2">
                                                {t('pages.aboutme.part-2')}
                                            </Text>

                                            <Text as={"p"}>
                                                {t('pages.aboutme.part-3')}
                                            </Text>
                                        </div>
                                    </div>
                                </main>
                            </Box>
                            <Box className="max-w-80 mt-8 lg:mt-auto  my-auto mx-auto lg:col-span-1 col-span-2 lg:order-2 order-1 ">
                                <img
                                    className="mt-4 md:mt-0 grayscale-[80%] object-scale-down  drop-shadow-md m-auto rounded-full border-t-2"
                                    src="https://utfs.io/f/6396db83-f922-45a9-bf23-c0453e8e5370-yc8s9j.png"/>
                            </Box>
                        </div>

                    </div>
                </Fade>
            </div>
        </div>
    )
}