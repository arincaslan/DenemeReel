import headImage from "../blogImage.jpg";
import blogImage1 from "../blogImage1.jpg"
import blogImage2 from "../blogImage2.jpg"
import blogImage3 from "../blogImage3.jpg"
import classes from "./Blog.module.css";
import AnimatedText from "react-animated-text-content";
import { Text } from "@chakra-ui/react";
import { useSpring, animated } from '@react-spring/web';
import CitizenDirect from "./CitizenDirect";
import Search from "./Search";


const Blog = () => {
    const [springs, api] = useSpring(() => ({
        from: {
            x: 0,
            rotateX: 0,
            rotateY: 0,
            zoom: 0,
            scale: 1,
            config: { mass: 5, tension: 350, friction: 40 },
        },
    }))

    const handleTouchLeft = () => {
        api({ rotateX: -10, rotateY: 10, scale: 1.1 })
    }
    const handleTouchOutLeft = () => {
        api({ rotateX: 0, rotateY: 0, scale: 1 })
    }

    const handleTouchRight = () => {
        api({ rotateX: 10, rotateY: 10, scale: 1.1 })
    }
    const handleTouchOutRight = () => {
        api({ rotateX: 0, rotateY: 0, scale: 1 })
    }

    return (
        <section className="blog">
            <div className={classes.pageTopBlog}>
                <div className={classes.headContainer}>
                    <img className={classes.blogHeadImage} src={headImage}></img>
                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: "200px",
                            y: "-20px",
                            scale: 1.1,
                            ease: "ease-in-out",
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={1.5}
                        tag="h1"
                        className={classes.headText}
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        TURKISH CITIZENSHIP APPLICATION
                    </AnimatedText>
                </div>
                <div style={{ "marginTop": "10px" }}>
                    <Search />
                </div>
            </div>
            <div className={classes.pageContent}>
                <div className="container">
                    <div
                        style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "100px" }}
                        className="row">
                        <AnimatedText
                            type="chars" // animate words or chars
                            animation={{
                                x: "200px",
                                y: "-20px",
                                scale: 1.1,
                                ease: "ease-in-out",
                            }}
                            animationType="float"
                            interval={0.06}
                            duration={1.5}
                            tag="h1"
                            className={classes.infoTags}
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                        >
                            REQUIREMENTS FOR START
                        </AnimatedText>
                        <animated.div onMouseEnter={handleTouchLeft} onMouseLeave={handleTouchOutLeft} style={{ ...springs }} className="col-md-6">
                            <img style={{
                                "padding": "40px",
                                "border": "1px transparent",
                                "border-radius": "50px"
                            }} src={blogImage1}></img>
                        </animated.div>
                        <div className="col-md-6">
                            <Text style={{ "fontSize": "1.1rem" }}>
                                <bold style={{ "fontWeight": "700" }}>Get a Tax Registration Number</bold> - Tax Registration number can be obtained from any tax office in Turkey.
                                Original Passport and Photos are required.
                                <br></br>
                                <bold style={{ "fontWeight": "700" }}>Open a Turkish Bank Account</bold> -
                                Documentation of transactions during the buying stage will be necessary. Original Passport and Tax Registration Number are required. An Official Document (such as Public Utility Bill) that shows your current address is required to open a bank account.
                            </Text>
                        </div>
                    </div>
                    <div
                        style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "100px" }}
                        className="row">
                        <AnimatedText
                            type="chars" // animate words or chars
                            animation={{
                                x: "200px",
                                y: "-20px",
                                scale: 1.1,
                                ease: "ease-in-out",
                            }}
                            animationType="float"
                            interval={0.06}
                            duration={1.5}
                            tag="h1"
                            className={classes.infoTags}
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                        >
                            INVEST BY APPLICATION
                        </AnimatedText>
                        <div className="col-md-6">
                            <Text>
                                <bold style={{ "fontWeight": "700" }}>Find the Property</bold> -
                                Needs to be a Total Value of $400,000 USD or equivalent in Turkish Lira (can be single or multiple units). Properties must be Completed, or Close to Completion with Habitation License granted and Construction Servitude or Title Deed ready. Must be suitable for an Official Valuation Survey.
                                <br></br>
                                <bold style={{ "fontWeight": "700" }}>Buy the Property </bold> -
                                Use a Bank Transfer and document the transaction by receipt.
                                Get the Title Deed Registry and/or Notarised Sales Contract annotated with “Not To Be Sold For 3 Years” as part of the requirement.
                                After three years, you can sell your property investment in Turkey as your citizenship is guaranteed forever.
                            </Text>
                        </div>

                        <animated.div onMouseEnter={handleTouchRight} onMouseLeave={handleTouchOutRight} style={{ ...springs }} className="col-md-6">
                            <img style={{
                                "padding": "40px",
                                "border": "1px transparent",
                                "border-radius": "50px"
                            }} src={blogImage2}></img>
                        </animated.div>
                    </div>

                    <div
                        style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "100px" }}
                        className="row">
                        <AnimatedText
                            type="chars" // animate words or chars
                            animation={{
                                x: "200px",
                                y: "-20px",
                                scale: 1.1,
                                ease: "ease-in-out",
                            }}
                            animationType="float"
                            interval={0.06}
                            duration={1.5}
                            tag="h1"
                            className={classes.infoTags}
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                        >
                            GET YOUR TR PASSPORT
                        </AnimatedText>
                        <animated.div onMouseEnter={handleTouchLeft} onMouseLeave={handleTouchOutLeft} style={{ ...springs }} className="col-md-6">
                            <img style={{
                                "padding": "40px",
                                "border": "1px transparent",
                                "border-radius": "50px"
                            }} src={blogImage3}></img>
                        </animated.div>
                        <div className="col-md-6">

                            <Text>
                                <bold style={{ "fontWeight": "700" }}>Obtain the Certificate of Conformity</bold> -
                                Provide the Official Valuation Survey and submit the Bank Transfer Receipt. Apply to Ministry of Environment and Urbanisation.
                                <br></br>
                                <bold style={{ "fontWeight": "700" }}>Apply for Turkish Residency</bold> -
                                Gather the required Documents before applying for your residence permit. Apply to Directorate General of Migration Management. The residence permit is an important step to receiving your citizenship and eventual passport.
                                <br></br>
                                <bold style={{ "fontWeight": "700" }}>Apply for Turkish Citizenship by Investment</bold> -
                                Gather the required Documents before applying for Citizenship. Apply to Directorate General of Migration Management.
                                <br></br>
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            <CitizenDirect />
        </section>
    )
}

export default Blog