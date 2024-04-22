import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import logo from "./Logo/Color logo - no background.png";
import { useState } from "react";
import { useDataStore } from "./Store";
import useGenerator from "./useGenerator";
import { FaRegHeart, FaHeart, FaBackward } from "react-icons/fa";
function StarterPage() {
  const [advice, setAdvice] = useState(false);
  const [joke, setJoke] = useState(false);
  const [reload, setReload] = useState(false);
  const [forward, setFoward] = useState(false);
  const { data } = useDataStore();
  const [like, setLike] = useState(false);
  const handleAdvices = () => {
    setAdvice(true);
    setJoke(false);
    setFoward(true);
  };
  const handleJokes = () => {
    setJoke(true);
    setAdvice(false);
    setFoward(true);
  };
  const handleBackward = () => {
    setFoward(false);
  };
  useGenerator(reload, joke, advice);
  //Creating some animations
  const AnimatButton = motion(Button);
  const AnimatFlex = motion(Flex);
  const AnimatImage = motion(Image);
  const AnimatHeading = motion(Heading);
  const AnimatIconButton = motion(IconButton);
  return (
    <AnimatFlex
      h={"100vh"}
      bg={"blue.200"}
      flexDir={"column"}
      alignItems={"center"}
      fontFamily={"cursive"}
      boxShadow={"0 0 20px rgba(0, 0, 0, 0.1)"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatFlex
        flexDir={"column"}
        alignItems={"center"}
        borderTop={"solid 5px black"}
        borderTopRadius={"3rem"}
        borderBottomRadius={"1.5rem"}
        mt={"5rem"}
        pb={"0.2rem"}
        backgroundImage={"linear(to-r, teal.500, green.500)"}
        boxShadow={
          "10px 10px 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)"
        }
        initial={{ y: -200 }}
        animate={{ y: 12 }}
        transition={{ duration: 2 }}
      >
        <AnimatImage
          src={logo}
          alt="Logo"
          h={"8rem"}
          w={"8rem"}
          mt={"-5rem"}
          backgroundColor={"black"}
          borderRadius={"50%"}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 3 }}
        />
        <Box>
          <AnimatHeading
            p={"3rem"}
            fontFamily={"cursive"}
            display={forward ? "none" : "block"}
            initial={{ fontSize: "1px", opacity: 0 }}
            animate={{ fontSize: "3rem", opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Which one do you need?
          </AnimatHeading>
          <Heading
            fontSize={"1.2rem"}
            fontFamily={"cursive"}
            display={forward ? "block" : "none"}
            p={"3rem 3rem"}
          >
            {advice
              ? "Adivce enhances understanding and inspires gruwth?"
              : "Laughter boosts mood and reduces stress!"}
          </Heading>
          <AnimatIconButton
            aria-label="Backward"
            colorScheme="none"
            icon={<FaBackward color={"green"} size={"1.5rem"} />}
            onClick={handleBackward}
            borderRadius={"50%"}
            display={forward ? "block" : "none"}
            initial={{ x: -50 }}
            animate={{ x: 20 }}
            whileHover={{ scale: 1.5 }}
          />
          <Flex
            ml={"1rem"}
            flexDir={"column"}
            w={"5rem"}
            display={forward ? "none" : "block"}
          >
            <AnimatButton
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 50 }}
              transition={{
                delay: 2.5,
              }}
              whileHover={{ scale: 1.5 }}
              fontSize={"2rem"}
              colorScheme="none"
              color={"blue.800"}
              _hover={{
                "::before": {
                  content: "'->'",
                  marginRight: "0.1rem",
                  color: "red",
                  fontSize: "1.5rem",
                },
              }}
              onClick={handleAdvices}
            >
              Advice
            </AnimatButton>
            <AnimatButton
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 50 }}
              transition={{ duration: 1, delay: 2.7 }}
              whileHover={{ scale: 1.5 }}
              mb={"2rem"}
              fontSize={"2rem"}
              colorScheme="none"
              color={"blue.800"}
              _hover={{
                "::before": {
                  content: "'->'",
                  marginRight: "0.1rem",
                  color: "red",
                  fontSize: "1.5rem",
                },
              }}
              onClick={handleJokes}
            >
              Joke
            </AnimatButton>
          </Flex>
        </Box>
        <Flex
          justifyContent={"center"}
          borderTopRadius={"20px"}
          borderTop={"5px solid black"}
          maxW={"25rem"}
          flexDir={"column"}
          display={forward ? "block" : "none"}
          mt={"2rem"}
        >
          <Flex flexDir={"column"} pt={"2rem"} p={"1.5rem"}>
            <Heading
              fontSize={"1.5rem"}
              fontFamily={"cursive"}
              color={"orange.500"}
            >
              {advice ? "Advice:" : "Joke:"}
            </Heading>
            <Text mt={"2rem"} pl={"0.7rem"} textColor={"blue.600"}>
              {data ? data : "Loading..."}
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} p={"5px"}>
            <AnimatIconButton
              onClick={() => setReload(!reload)}
              aria-label="reload"
              icon={<RepeatIcon fontSize={"1.5rem"} />}
              colorScheme="blue"
              borderRadius={"50%"}
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.5 }}
            />
            <AnimatIconButton
              aria-label="blank heart"
              borderRadius={"50%"}
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.5 }}
              icon={
                like ? (
                  <FaHeart color="red" size={"1.7rem"} />
                ) : (
                  <FaRegHeart size={"1.5rem"} />
                )
              }
              onClick={() => setLike(!like)}
            />
          </Flex>
        </Flex>
      </AnimatFlex>
    </AnimatFlex>
  );
}

export default StarterPage;
