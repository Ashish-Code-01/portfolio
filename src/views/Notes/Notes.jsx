import React, { useEffect } from "react";
import {
    Box,
    SimpleGrid,
    Flex,
    Text,
} from "@chakra-ui/react";
import NotesCard from "../../components/NotesCard/NotesCard";
import CPlusPlus from "../../assets/notes/C++.png";
import ReactJS from "../../assets/notes/ReactJS.png";
import CSSimg from "../../assets/notes/CSS.png";
import HtmlIMG from "../../assets/notes/HTML.png";
import JavaScript from "../../assets/notes/JS.png";
import MongoDB from "../../assets/notes/mongoDB.png";
import Nodejs from "../../assets/notes/nodeJS.png";

import CPlusPlusNotes from "../../assets/pdf/CPlusPlus.pdf"
import ReactJSNotes from "../../assets/pdf/ReactJS.pdf"
import CSSNotes from "../../assets/pdf/CSS.pdf"
import HTMLNotes from "../../assets/pdf/HTML.pdf"
import JavascriptNotes from "../../assets/pdf/JavaScript.pdf"
import MongoDBNotes from "../../assets/pdf/MongoDB.pdf"
import NodeJSNotes from "../../assets/pdf/NodeJS.pdf"

export default function Notes() {
    return (
        <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
            <Flex
                direction="row"
                justifyContent="center"
                alignItems="center"
                mb="40px"
            >
                <Text fontSize="2xl" fontWeight="bold">Notes</Text>
            </Flex>
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                gap="25px"
                alignItems="center"
                justifyContent="center"
            >
                <NotesCard title="C++" description="These are the notes where I learned C++" ImageURL={CPlusPlus} filePath={CPlusPlusNotes} downloadFilename="C++.pdf" ViewNotes={CPlusPlusNotes} />
                <NotesCard title="React JS" description="These are the notes where I learned ReactJS" ImageURL={ReactJS} filePath={ReactJSNotes} downloadFilename="ReactJS.pdf" ViewNotes={ReactJSNotes} />
                <NotesCard title="CSS" description="These are the notes where I learned CSS" ImageURL={CSSimg} filePath={CSSNotes} downloadFilename="CSS.pdf" ViewNotes={CSSNotes} />
                <NotesCard title="HTML" description="These are the notes where I learned HTML" ImageURL={HtmlIMG} filePath={HTMLNotes} downloadFilename="HTML.pdf" ViewNotes={HTMLNotes} />
                <NotesCard title="JavaScript" description="These are the notes where I learned JavaScript" ImageURL={JavaScript} filePath={JavascriptNotes} downloadFilename="Javascript.pdf" ViewNotes={JavascriptNotes} />
                <NotesCard title="MongoDB" description="These are the notes where I learned MongoDB" ImageURL={MongoDB} filePath={MongoDBNotes} downloadFilename="Mongo DB.pdf" ViewNotes={MongoDBNotes} />
                <NotesCard title="Node.js" description="These are the notes where I learned Node.js" ImageURL={Nodejs} filePath={NodeJSNotes} downloadFilename="Node js.pdf" ViewNotes={NodeJSNotes} />
            </SimpleGrid>
        </Box>
    );
}
