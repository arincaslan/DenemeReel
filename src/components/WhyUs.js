import { Box, Flex, Text } from "@chakra-ui/react";
import classes from "./WhyUs.module.css";
import AnimatedText from "react-animated-text-content";

const WhyUs = () => {
  return (
    <div className={classes.container}>
      <div className="col-md-12 mt-5 mt-md-0 mb-3">
        <div className={classes.headContainer}>
          <div className="col-md-12">
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
              className={classes.ml15}
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Why Us ?
            </AnimatedText>
          </div>
        </div>
        <div className={classes.pContainer}>
          <div className="col-md-12">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="wave"
              interval={0.06}
              duration={0.3}
              tag="p"
              className={classes.pWord}
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
                Since 2001, IG - REEL ESTATE has helped clients
                from all over the world buy Turkish properties
                in all regions of Turkey. From lifestyle buyers wishing to
                buy a property in Turkey for sale, to
                discerning investors seeking to buy property in Turkey, our
                range of luxury villas, sea view penthouse apartments, Turkey
                houses, and unique hotels for sale ensure a range of lifestyle
                and investment opportunities to suit any requirement. Trusted
                for over 20 years, our portfolio of
                houses for sale in Turkey is the widest
                available with offices throughout the country constantly
                sourcing new and exciting opportunities.
            </AnimatedText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
