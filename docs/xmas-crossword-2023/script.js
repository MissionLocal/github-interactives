

// This file was generated by xml2mlxword.py which converts a Crossword Compiler xml output file to
// the MissionLocal crossword format found in
// https://missionlocal.github.io/interactives/halloween-crossword-2023/

// The source for xml2mlxword.py can be found in https://github.com/MissionLocal/ml-xword


var pymChild = new pym.Child();

//set variables
const crosswordContainer = document.querySelector('.crossword-container');

const crosswordGrid = [
    ["B", "R", "E", "R", "S", "", "P", "H", "A", "S", "E", "", "M", "O", "B", ],
    ["C", "A", "R", "A", "T", "", "E", "A", "T", "E", "N", "", "A", "K", "A", ],
    ["C", "H", "A", "S", "E", "C", "E", "N", "T", "E", "R", "", "C", "A", "L", ],
    ["", "", "", "C", "E", "L", "L", "S", "", "P", "O", "L", "Y", "P", "S", ],
    ["", "S", "T", "A", "L", "E", "", "", "S", "I", "L", "E", "S", "I", "A", ],
    ["M", "A", "H", "L", "E", "R", "", "R", "U", "N", "L", "O", "W", "", "", ],
    ["I", "V", "E", "", "D", "I", "G", "U", "P", "", "S", "N", "I", "P", "", ],
    ["L", "O", "F", "T", "", "C", "R", "E", "E", "P", "", "S", "N", "O", "T", ],
    ["", "R", "A", "H", "M", "", "I", "R", "R", "E", "G", "", "D", "U", "O", ],
    ["", "", "I", "R", "I", "S", "E", "S", "", "R", "E", "B", "O", "R", "E", ],
    ["C", "O", "R", "O", "N", "E", "R", "", "", "S", "T", "E", "W", "S", "", ],
    ["L", "A", "M", "B", "D", "A", "", "L", "U", "I", "S", "A", "", "", "", ],
    ["O", "R", "O", "", "M", "A", "R", "I", "N", "A", "G", "R", "E", "E", "N", ],
    ["S", "E", "N", "", "A", "I", "O", "L", "I", "", "A", "I", "S", "L", "E", ],
    ["E", "D", "T", "", "P", "R", "E", "Y", "S", "", "S", "T", "O", "K", "E", ],
];

const wordStarts = [
    { row: 0, col: 0, number: 1 },
    { row: 0, col: 1, number: 2 },
    { row: 0, col: 2, number: 3 },
    { row: 0, col: 3, number: 4 },
    { row: 0, col: 4, number: 5 },
    { row: 0, col: 6, number: 6 },
    { row: 0, col: 7, number: 7 },
    { row: 0, col: 8, number: 8 },
    { row: 0, col: 9, number: 9 },
    { row: 0, col: 10, number: 10 },
    { row: 0, col: 12, number: 11 },
    { row: 0, col: 13, number: 12 },
    { row: 0, col: 14, number: 13 },
    { row: 1, col: 0, number: 14 },
    { row: 1, col: 6, number: 15 },
    { row: 1, col: 12, number: 16 },
    { row: 2, col: 0, number: 17 },
    { row: 2, col: 5, number: 18 },
    { row: 2, col: 12, number: 19 },
    { row: 3, col: 3, number: 20 },
    { row: 3, col: 9, number: 21 },
    { row: 3, col: 11, number: 22 },
    { row: 4, col: 1, number: 23 },
    { row: 4, col: 2, number: 24 },
    { row: 4, col: 8, number: 25 },
    { row: 5, col: 0, number: 26 },
    { row: 5, col: 7, number: 27 },
    { row: 6, col: 0, number: 28 },
    { row: 6, col: 4, number: 29 },
    { row: 6, col: 6, number: 30 },
    { row: 6, col: 10, number: 31 },
    { row: 6, col: 13, number: 32 },
    { row: 7, col: 0, number: 33 },
    { row: 7, col: 3, number: 34 },
    { row: 7, col: 5, number: 35 },
    { row: 7, col: 9, number: 36 },
    { row: 7, col: 11, number: 37 },
    { row: 7, col: 14, number: 38 },
    { row: 8, col: 1, number: 39 },
    { row: 8, col: 4, number: 40 },
    { row: 8, col: 6, number: 41 },
    { row: 8, col: 10, number: 42 },
    { row: 8, col: 12, number: 43 },
    { row: 9, col: 2, number: 44 },
    { row: 9, col: 5, number: 45 },
    { row: 9, col: 9, number: 46 },
    { row: 9, col: 11, number: 47 },
    { row: 10, col: 0, number: 48 },
    { row: 10, col: 1, number: 49 },
    { row: 10, col: 9, number: 50 },
    { row: 11, col: 0, number: 51 },
    { row: 11, col: 7, number: 52 },
    { row: 11, col: 8, number: 53 },
    { row: 12, col: 0, number: 54 },
    { row: 12, col: 4, number: 55 },
    { row: 12, col: 6, number: 56 },
    { row: 12, col: 12, number: 57 },
    { row: 12, col: 13, number: 58 },
    { row: 12, col: 14, number: 59 },
    { row: 13, col: 0, number: 60 },
    { row: 13, col: 4, number: 61 },
    { row: 13, col: 10, number: 62 },
    { row: 14, col: 0, number: 63 },
    { row: 14, col: 4, number: 64 },
    { row: 14, col: 10, number: 65 },
];

var answers = [
    {
        "index": 0,
        "number": "1",
        "direction": "across",
        "word": "BRERS",
        "cells": ["0-0", "0-1", "0-2", "0-3", "0-4", ],
        "clue": 'Fox and Rabbit from folk tales'
    },
    {
        "index": 1,
        "number": "6",
        "direction": "across",
        "word": "PHASE",
        "cells": ["0-6", "0-7", "0-8", "0-9", "0-10", ],
        "clue": 'New moon, e.g.'
    },
    {
        "index": 2,
        "number": "11",
        "direction": "across",
        "word": "MOB",
        "cells": ["0-12", "0-13", "0-14", ],
        "clue": 'Kind of rule'
    },
    {
        "index": 3,
        "number": "14",
        "direction": "across",
        "word": "CARAT",
        "cells": ["1-0", "1-1", "1-2", "1-3", "1-4", ],
        "clue": '200 milligrams'
    },
    {
        "index": 4,
        "number": "15",
        "direction": "across",
        "word": "EATEN",
        "cells": ["1-6", "1-7", "1-8", "1-9", "1-10", ],
        "clue": 'Consumed'
    },
    {
        "index": 5,
        "number": "16",
        "direction": "across",
        "word": "AKA",
        "cells": ["1-12", "1-13", "1-14", ],
        "clue": 'Alias in an A.P.B.'
    },
    {
        "index": 6,
        "number": "17",
        "direction": "across",
        "word": "CHASECENTER",
        "cells": ["2-0", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7", "2-8", "2-9", "2-10", ],
        "clue": 'Where the Warriors were last Christmas but not this Christmas'
    },
    {
        "index": 7,
        "number": "19",
        "direction": "across",
        "word": "CAL",
        "cells": ["2-12", "2-13", "2-14", ],
        "clue": 'Bears\' home'
    },
    {
        "index": 8,
        "number": "20",
        "direction": "across",
        "word": "CELLS",
        "cells": ["3-3", "3-4", "3-5", "3-6", "3-7", ],
        "clue": 'Prison contents'
    },
    {
        "index": 9,
        "number": "21",
        "direction": "across",
        "word": "POLYPS",
        "cells": ["3-9", "3-10", "3-11", "3-12", "3-13", "3-14", ],
        "clue": 'Medusa\'s ancestors'
    },
    {
        "index": 10,
        "number": "23",
        "direction": "across",
        "word": "STALE",
        "cells": ["4-1", "4-2", "4-3", "4-4", "4-5", ],
        "clue": 'Like a dated joke'
    },
    {
        "index": 11,
        "number": "25",
        "direction": "across",
        "word": "SILESIA",
        "cells": ["4-8", "4-9", "4-10", "4-11", "4-12", "4-13", "4-14", ],
        "clue": 'Coal-rich region of central Europe'
    },
    {
        "index": 12,
        "number": "26",
        "direction": "across",
        "word": "MAHLER",
        "cells": ["5-0", "5-1", "5-2", "5-3", "5-4", "5-5", ],
        "clue": '"Song of the Earth" composer'
    },
    {
        "index": 13,
        "number": "27",
        "direction": "across",
        "word": "RUNLOW",
        "cells": ["5-7", "5-8", "5-9", "5-10", "5-11", "5-12", ],
        "clue": 'Be almost out'
    },
    {
        "index": 14,
        "number": "28",
        "direction": "across",
        "word": "IVE",
        "cells": ["6-0", "6-1", "6-2", ],
        "clue": '"___ fallen and I can\'t get up"'
    },
    {
        "index": 15,
        "number": "29",
        "direction": "across",
        "word": "DIGUP",
        "cells": ["6-4", "6-5", "6-6", "6-7", "6-8", ],
        "clue": 'Disinter'
    },
    {
        "index": 16,
        "number": "31",
        "direction": "across",
        "word": "SNIP",
        "cells": ["6-10", "6-11", "6-12", "6-13", ],
        "clue": 'Barber\'s action'
    },
    {
        "index": 17,
        "number": "33",
        "direction": "across",
        "word": "LOFT",
        "cells": ["7-0", "7-1", "7-2", "7-3", ],
        "clue": 'Versatile living space'
    },
    {
        "index": 18,
        "number": "35",
        "direction": "across",
        "word": "CREEP",
        "cells": ["7-5", "7-6", "7-7", "7-8", "7-9", ],
        "clue": 'Tiptoe, e.g.'
    },
    {
        "index": 19,
        "number": "37",
        "direction": "across",
        "word": "SNOT",
        "cells": ["7-11", "7-12", "7-13", "7-14", ],
        "clue": '___ rocket'
    },
    {
        "index": 20,
        "number": "39",
        "direction": "across",
        "word": "RAHM",
        "cells": ["8-1", "8-2", "8-3", "8-4", ],
        "clue": 'Chicago\'s Emanuel'
    },
    {
        "index": 21,
        "number": "41",
        "direction": "across",
        "word": "IRREG",
        "cells": ["8-6", "8-7", "8-8", "8-9", "8-10", ],
        "clue": 'Like some vbs.'
    },
    {
        "index": 22,
        "number": "43",
        "direction": "across",
        "word": "DUO",
        "cells": ["8-12", "8-13", "8-14", ],
        "clue": 'Sonny and Cher (in the beginning)'
    },
    {
        "index": 23,
        "number": "44",
        "direction": "across",
        "word": "IRISES",
        "cells": ["9-2", "9-3", "9-4", "9-5", "9-6", "9-7", ],
        "clue": 'Expensive van Gogh'
    },
    {
        "index": 24,
        "number": "46",
        "direction": "across",
        "word": "REBORE",
        "cells": ["9-9", "9-10", "9-11", "9-12", "9-13", "9-14", ],
        "clue": 'Drill again'
    },
    {
        "index": 25,
        "number": "48",
        "direction": "across",
        "word": "CORONER",
        "cells": ["10-0", "10-1", "10-2", "10-3", "10-4", "10-5", "10-6", ],
        "clue": 'One who administers final exams?'
    },
    {
        "index": 26,
        "number": "50",
        "direction": "across",
        "word": "STEWS",
        "cells": ["10-9", "10-10", "10-11", "10-12", "10-13", ],
        "clue": 'Simmers'
    },
    {
        "index": 27,
        "number": "51",
        "direction": "across",
        "word": "LAMBDA",
        "cells": ["11-0", "11-1", "11-2", "11-3", "11-4", "11-5", ],
        "clue": 'Sorority letter'
    },
    {
        "index": 28,
        "number": "52",
        "direction": "across",
        "word": "LUISA",
        "cells": ["11-7", "11-8", "11-9", "11-10", "11-11", ],
        "clue": 'Middle sister in "Encanto"'
    },
    {
        "index": 29,
        "number": "54",
        "direction": "across",
        "word": "ORO",
        "cells": ["12-0", "12-1", "12-2", ],
        "clue": '"___ y Plata" (Montana\'s motto)'
    },
    {
        "index": 30,
        "number": "55",
        "direction": "across",
        "word": "MARINAGREEN",
        "cells": ["12-4", "12-5", "12-6", "12-7", "12-8", "12-9", "12-10", "12-11", "12-12", "12-13", "12-14", ],
        "clue": 'Where to watch the Holiday Boat Parade of Lights on 12/15'
    },
    {
        "index": 31,
        "number": "60",
        "direction": "across",
        "word": "SEN",
        "cells": ["13-0", "13-1", "13-2", ],
        "clue": 'One in 100: Abbr.'
    },
    {
        "index": 32,
        "number": "61",
        "direction": "across",
        "word": "AIOLI",
        "cells": ["13-4", "13-5", "13-6", "13-7", "13-8", ],
        "clue": 'Garlicky mayonnaise'
    },
    {
        "index": 33,
        "number": "62",
        "direction": "across",
        "word": "AISLE",
        "cells": ["13-10", "13-11", "13-12", "13-13", "13-14", ],
        "clue": 'Bridal path'
    },
    {
        "index": 34,
        "number": "63",
        "direction": "across",
        "word": "EDT",
        "cells": ["14-0", "14-1", "14-2", ],
        "clue": 'Buffalo\'s summer hrs.'
    },
    {
        "index": 35,
        "number": "64",
        "direction": "across",
        "word": "PREYS",
        "cells": ["14-4", "14-5", "14-6", "14-7", "14-8", ],
        "clue": 'Emulates raptors'
    },
    {
        "index": 36,
        "number": "65",
        "direction": "across",
        "word": "STOKE",
        "cells": ["14-10", "14-11", "14-12", "14-13", "14-14", ],
        "clue": 'Feed, as a fire'
    },
    {
        "index": 37,
        "number": "1",
        "direction": "down",
        "word": "BCC",
        "cells": ["0-0", "1-0", "2-0", ],
        "clue": 'Covertly add to an email'
    },
    {
        "index": 38,
        "number": "2",
        "direction": "down",
        "word": "RAH",
        "cells": ["0-1", "1-1", "2-1", ],
        "clue": '"Go team!"'
    },
    {
        "index": 39,
        "number": "3",
        "direction": "down",
        "word": "ERA",
        "cells": ["0-2", "1-2", "2-2", ],
        "clue": 'Constitutional expansion in process for the past 100 years, abbr.'
    },
    {
        "index": 40,
        "number": "4",
        "direction": "down",
        "word": "RASCAL",
        "cells": ["0-3", "1-3", "2-3", "3-3", "4-3", "5-3", ],
        "clue": 'Imp'
    },
    {
        "index": 41,
        "number": "5",
        "direction": "down",
        "word": "STEELED",
        "cells": ["0-4", "1-4", "2-4", "3-4", "4-4", "5-4", "6-4", ],
        "clue": 'Ready'
    },
    {
        "index": 42,
        "number": "6",
        "direction": "down",
        "word": "PEEL",
        "cells": ["0-6", "1-6", "2-6", "3-6", ],
        "clue": 'Leave in a hurry, with "out"'
    },
    {
        "index": 43,
        "number": "7",
        "direction": "down",
        "word": "HANS",
        "cells": ["0-7", "1-7", "2-7", "3-7", ],
        "clue": '___ Christian Andersen'
    },
    {
        "index": 44,
        "number": "8",
        "direction": "down",
        "word": "ATT",
        "cells": ["0-8", "1-8", "2-8", ],
        "clue": 'Telecom giant, abbr.'
    },
    {
        "index": 45,
        "number": "9",
        "direction": "down",
        "word": "SEEPIN",
        "cells": ["0-9", "1-9", "2-9", "3-9", "4-9", "5-9", ],
        "clue": 'Ooze'
    },
    {
        "index": 46,
        "number": "10",
        "direction": "down",
        "word": "ENROLLS",
        "cells": ["0-10", "1-10", "2-10", "3-10", "4-10", "5-10", "6-10", ],
        "clue": 'Matriculates'
    },
    {
        "index": 47,
        "number": "11",
        "direction": "down",
        "word": "MACYSWINDOW",
        "cells": ["0-12", "1-12", "2-12", "3-12", "4-12", "5-12", "6-12", "7-12", "8-12", "9-12", "10-12", ],
        "clue": 'Where to see a puppy from Nov 17 to Dec 31 (Thurs-Sun, noon-5)'
    },
    {
        "index": 48,
        "number": "12",
        "direction": "down",
        "word": "OKAPI",
        "cells": ["0-13", "1-13", "2-13", "3-13", "4-13", ],
        "clue": 'Only living relative of the giraffe'
    },
    {
        "index": 49,
        "number": "13",
        "direction": "down",
        "word": "BALSA",
        "cells": ["0-14", "1-14", "2-14", "3-14", "4-14", ],
        "clue": 'Model airplane wood'
    },
    {
        "index": 50,
        "number": "18",
        "direction": "down",
        "word": "CLERIC",
        "cells": ["2-5", "3-5", "4-5", "5-5", "6-5", "7-5", ],
        "clue": 'Religious Dungeons and Dragons character'
    },
    {
        "index": 51,
        "number": "22",
        "direction": "down",
        "word": "LEONS",
        "cells": ["3-11", "4-11", "5-11", "6-11", "7-11", ],
        "clue": 'Like the guitar of Mr. Redbone'
    },
    {
        "index": 52,
        "number": "23",
        "direction": "down",
        "word": "SAVOR",
        "cells": ["4-1", "5-1", "6-1", "7-1", "8-1", ],
        "clue": 'Enjoy'
    },
    {
        "index": 53,
        "number": "24",
        "direction": "down",
        "word": "THEFAIRMONT",
        "cells": ["4-2", "5-2", "6-2", "7-2", "8-2", "9-2", "10-2", "11-2", "12-2", "13-2", "14-2", ],
        "clue": 'Where to see a two-story gingerbread house from Nov 25 to Jan 1'
    },
    {
        "index": 54,
        "number": "25",
        "direction": "down",
        "word": "SUPER",
        "cells": ["4-8", "5-8", "6-8", "7-8", "8-8", ],
        "clue": 'Apartment manager, for short'
    },
    {
        "index": 55,
        "number": "26",
        "direction": "down",
        "word": "MIL",
        "cells": ["5-0", "6-0", "7-0", ],
        "clue": '0.001"'
    },
    {
        "index": 56,
        "number": "27",
        "direction": "down",
        "word": "RUERS",
        "cells": ["5-7", "6-7", "7-7", "8-7", "9-7", ],
        "clue": 'Regretful ones'
    },
    {
        "index": 57,
        "number": "30",
        "direction": "down",
        "word": "GRIER",
        "cells": ["6-6", "7-6", "8-6", "9-6", "10-6", ],
        "clue": '"Jackie Brown" star Pam'
    },
    {
        "index": 58,
        "number": "32",
        "direction": "down",
        "word": "POURS",
        "cells": ["6-13", "7-13", "8-13", "9-13", "10-13", ],
        "clue": 'Decants'
    },
    {
        "index": 59,
        "number": "34",
        "direction": "down",
        "word": "THROB",
        "cells": ["7-3", "8-3", "9-3", "10-3", "11-3", ],
        "clue": 'Beat'
    },
    {
        "index": 60,
        "number": "36",
        "direction": "down",
        "word": "PERSIA",
        "cells": ["7-9", "8-9", "9-9", "10-9", "11-9", "12-9", ],
        "clue": 'Home of the Achaemenid, the Parthian, and the Sasanian dynasties'
    },
    {
        "index": 61,
        "number": "38",
        "direction": "down",
        "word": "TOE",
        "cells": ["7-14", "8-14", "9-14", ],
        "clue": 'Low digit?'
    },
    {
        "index": 62,
        "number": "40",
        "direction": "down",
        "word": "MINDMAP",
        "cells": ["8-4", "9-4", "10-4", "11-4", "12-4", "13-4", "14-4", ],
        "clue": 'Graphical tool for organizing ideas'
    },
    {
        "index": 63,
        "number": "42",
        "direction": "down",
        "word": "GETSGAS",
        "cells": ["8-10", "9-10", "10-10", "11-10", "12-10", "13-10", "14-10", ],
        "clue": 'Fuels up'
    },
    {
        "index": 64,
        "number": "45",
        "direction": "down",
        "word": "SEAAIR",
        "cells": ["9-5", "10-5", "11-5", "12-5", "13-5", "14-5", ],
        "clue": 'Atmosphere that may smell salty'
    },
    {
        "index": 65,
        "number": "47",
        "direction": "down",
        "word": "BEARIT",
        "cells": ["9-11", "10-11", "11-11", "12-11", "13-11", "14-11", ],
        "clue": 'Grin and _____'
    },
    {
        "index": 66,
        "number": "48",
        "direction": "down",
        "word": "CLOSE",
        "cells": ["10-0", "11-0", "12-0", "13-0", "14-0", ],
        "clue": 'Intimate'
    },
    {
        "index": 67,
        "number": "49",
        "direction": "down",
        "word": "OARED",
        "cells": ["10-1", "11-1", "12-1", "13-1", "14-1", ],
        "clue": 'Propelled a boat'
    },
    {
        "index": 68,
        "number": "52",
        "direction": "down",
        "word": "LILY",
        "cells": ["11-7", "12-7", "13-7", "14-7", ],
        "clue": 'Easter flower'
    },
    {
        "index": 69,
        "number": "53",
        "direction": "down",
        "word": "UNIS",
        "cells": ["11-8", "12-8", "13-8", "14-8", ],
        "clue": 'Cambridge and Oxford, casually'
    },
    {
        "index": 70,
        "number": "56",
        "direction": "down",
        "word": "ROE",
        "cells": ["12-6", "13-6", "14-6", ],
        "clue": 'Best part of a sturgeon'
    },
    {
        "index": 71,
        "number": "57",
        "direction": "down",
        "word": "ESO",
        "cells": ["12-12", "13-12", "14-12", ],
        "clue": '"___ Beso" (1962 hit)'
    },
    {
        "index": 72,
        "number": "58",
        "direction": "down",
        "word": "ELK",
        "cells": ["12-13", "13-13", "14-13", ],
        "clue": 'It\'s bigger than a deer, but smaller than a moose'
    },
    {
        "index": 73,
        "number": "59",
        "direction": "down",
        "word": "NEE",
        "cells": ["12-14", "13-14", "14-14", ],
        "clue": 'Born in France'
    },
]



let selectedCell = null;
let currentRow = 0;
let currentCol = 0;
let focusDirection = "across";
let cluesColumnHighlight = "";

//create crossword
for (let row = 0; row < crosswordGrid.length; row++) {
    const rowElement = document.createElement('div');
    rowElement.className = 'crossword-row';

    for (let col = 0; col < crosswordGrid[row].length; col++) {
        var letter = crosswordGrid[row][col];

        const cellElement = document.createElement('input');
        cellElement.className = 'crossword-cell';
        cellElement.inputMode = 'search';
        cellElement.id = 'cell-' + row + '-' + col;
        cellElement.tabIndex = 0;

        //make black squares
        if (letter == "") {
            cellElement.classList.add('empty');
            cellElement.classList.remove('crossword-cell');
        }

        //select squares
        if (letter != "") {
            cellElement.addEventListener('click', () => {
                //figure out if clicking already selected square
                previousSelection = document.getElementsByClassName('selected')[0];
                if (previousSelection != null) {
                    if (previousSelection.id == cellElement.id) {
                        focusDirection = (focusDirection == "across") ? "down" : "across";
                    }
                }
                currentRow = cellElement.id.split('-')[1];
                currentCol = cellElement.id.split('-')[2];
                updateSelected(row, col);
            });
        }

        //add in letters on keydown
        cellElement.addEventListener('input', handleInput);
        cellElement.addEventListener('keydown', handleInput);
        cellElement.addEventListener('paste', (event) => {
            event.preventDefault();
        });

        function handleInput(event) {
            //figure out cells next door
            cellToTheLeft = parseInt(currentCol) - 1
            cellToTheRight = parseInt(currentCol) + 1
            cellBelow = parseInt(currentRow) + 1
            cellAbove = parseInt(currentRow) - 1

            //LETTERS
            if (event.inputType === 'insertText') {
                const input = event.data.toUpperCase();
                if (/^[A-Z]$/.test(input)) {
                    selectedCell.value = "";
                    selectedCell.value = input;

                    if (focusDirection == "across" && currentCol < crosswordGrid[currentCol].length - 1 && crosswordGrid[currentRow][cellToTheRight] != "") {
                        //selectedCell.blur();
                        currentCol++;
                    }

                    if (focusDirection == "down" && currentRow < crosswordGrid[currentRow].length - 1 && crosswordGrid[cellBelow][currentCol] != "") {
                        //selectedCell.blur();
                        currentRow++;
                    }
                    updateSelected(currentRow, currentCol);
                } else {
                  selectedCell.value = "";
                }

            }

            //BACKSPACE
            else if (event.key === 'Backspace') {
                if (selectedCell.value == "") {
                    if (focusDirection == "across" && currentCol > 0 && crosswordGrid[currentRow][cellToTheLeft] != "") {
                        selectedCell.blur();
                        currentCol--;
                        updateSelected(currentRow, currentCol);
                    }
                    if (focusDirection == "down" && currentRow > 0 && crosswordGrid[cellAbove][currentCol] != "") {
                        selectedCell.blur();
                        currentRow--;
                        updateSelected(currentRow, currentCol);
                    }
                }
                selectedCell.value = "";
                answerValidation();
            }

            //ARROWS
            else if (event.key === 'ArrowUp' && currentRow > 0 && crosswordGrid[cellAbove][currentCol] != "") {
                event.preventDefault();
                currentRow--;
                updateSelected(currentRow, currentCol);
            } else if ((event.key === 'ArrowDown' && currentRow < crosswordGrid.length - 1 && crosswordGrid[cellBelow][currentCol] != "")) {
                event.preventDefault();
                currentRow++;
                updateSelected(currentRow, currentCol);
            } else if (event.key === 'ArrowLeft' && currentCol > 0 && crosswordGrid[currentRow][cellToTheLeft] != "") {
                event.preventDefault();
                currentCol--;
                updateSelected(currentRow, currentCol);
            } else if ((event.key === 'ArrowRight' && currentCol < crosswordGrid[currentRow].length - 1 && crosswordGrid[currentRow][cellToTheRight] != "")) {
                event.preventDefault();
                currentCol++;
                updateSelected(currentRow, currentCol);
            }

            //ENTER
            else if (event.key === 'Enter' && currentRow < crosswordGrid.length) {
                event.preventDefault();
                focusDirection = (focusDirection == "across") ? "down" : "across";
                updateSelected(currentRow, currentCol);
            }

            //TAB
            else if (event.key === 'Tab' || event.key === 'Next') {
                event.preventDefault();

                // Find the current index of the selected answer
                let currentIndex = -1;
                for (let i = 0; i < answers.length; i++) {
                    const answer = answers[i];
                    for (const cell of answer.cells) {
                        const cellElement = document.getElementById("cell-" + cell);
                        if (cellElement === selectedCell && answer.direction === focusDirection) {
                            currentIndex = i;
                            break;
                        }
                    }
                    if (currentIndex !== -1) {
                        break;
                    }
                }

                // Calculate the index of the next answer
                let nextIndex = currentIndex + 1;
                if (nextIndex >= answers.length) {
                    nextIndex = 0; // Loop back to the first index
                }

                // Update currentRow, currentCol, and focusDirection based on the next answer
                currentRow = answers[nextIndex].cells[0].split('-')[0];
                currentCol = answers[nextIndex].cells[0].split('-')[1];
                focusDirection = answers[nextIndex].direction;

                // Call updateSelected to update the UI
                updateSelected(currentRow, currentCol);
            }

        }
        rowElement.appendChild(cellElement);
    }
    crosswordContainer.appendChild(rowElement);
}

//update selected cell
function updateSelected(row, col) {
    if (selectedCell) {
        selectedCell.classList.remove('selected');
    }
    const cellElement = document.getElementById('cell-' + row + '-' + col);
    selectedCell = cellElement;
    selectedCell.classList.add('selected');
    selectedCell.focus();
    highlightAnswerCells();
    pymChild.sendHeight();
}

function highlightAnswerCells() {
    document.getElementById('highlight-clue-text').innerHTML = "";

    //highlight answer cells
    let selectedWords = []
    for (var answer of answers) {
        for (var cell of answer.cells) {
            let cellElement = document.getElementById("cell-" + cell);
            if (cellElement === selectedCell) {
                selectedWords.push(answer.word)
            }
            cellElement.classList.remove('blue_highlight');
        }
    }

    for (var answer of answers) {
        if (selectedWords.includes(answer.word)) {
            for (var cell of answer.cells) {
                if (answer.direction == focusDirection) {
                    let cellElement = document.getElementById("cell-" + cell);
                    cellElement.classList.add('blue_highlight');
                }
            }
        }
    }

    //put current clues at the top of the page
    for (var answer of answers) {
        if (selectedWords.includes(answer.word)) {
            if (answer.direction == 'across' && focusDirection == 'across') {
                var clueLabel = "<strong>" + answer.number + " Across</strong> "
                var clue = answer.clue;
                var currentAnswer = answer;
            }
            if (answer.direction == 'down' && focusDirection == 'down') {
                var clueLabel = "<strong>" + answer.number + " Down</strong> "
                var clue = answer.clue;
                var currentAnswer = answer;
            }
            document.getElementById('highlight-clue-label').innerHTML = clueLabel;
            document.getElementById('highlight-clue-text').innerHTML = clue;
        }
    }

    //highlight clue in clues column
    if (cluesColumnHighlight) {
      cluesColumnHighlight.classList.remove('clues-list-highlight')
    }

    cluesColumnHighlight = document.getElementById(currentAnswer.number + "-" + currentAnswer.direction)
    cluesColumnHighlight.classList.add('clues-list-highlight');

    setGridElementSize();
}

//change size depending on screen size
const container = document.querySelector('.container');
const gridElements = document.querySelectorAll('.crossword-cell, .empty');
var clueHighlight = document.querySelector('.clue-highlight');

function setGridElementSize() {
    const containerWidth = container.offsetWidth;
    const gridSize = 15;
    const newSize = containerWidth / gridSize;

    gridElements.forEach((element) => {
        if (newSize < 35) {
            element.style.width = newSize + 'px';
            element.style.height = newSize + 'px';
        } else {
            element.style.width = '35px';
            element.style.height = '35px';
        }
    });

    //add superscript numbers over the top of the grid container
    const superscriptContainer = document.querySelector('.superscript-container');
    superscriptContainer.innerHTML = '';

    const containerRect = container.getBoundingClientRect();
    var clueBoxRect = clueHighlight.getBoundingClientRect();

    for (const word of wordStarts) {
        const supElement = document.createElement('sup');
        supElement.textContent = word.number;

        //calculate the left and top positions relative to the container
        if (newSize < 35) {
            supElement.style.left = (word.col * newSize + 4 + containerRect.left + clueBoxRect.left) + 'px';
            supElement.style.top = (word.row * newSize + 6 + clueBoxRect.height) + 'px';
        } else {
            supElement.style.left = (word.col * 35 + 4 + containerRect.left + clueBoxRect.left) + 'px';
            supElement.style.top = (word.row * 35 + 6 + clueBoxRect.height) + 'px';
        }

        supElement.classList.add('superscript');
        superscriptContainer.appendChild(supElement);
    }
}

function answerValidation() {
    //remove correct if not correct
    crosswordCells = document.getElementsByClassName('crossword-cell');
    for (var i = 0; i < crosswordCells.length; i++) {
        var cell = crosswordCells[i];
        if (cell.classList.contains('correct')) {
            cell.classList.remove('correct');
        }
    }

    //see if the user values grid matches the answer grid
    newGrid = [];
    for (let row = 0; row < crosswordGrid.length; row++) {
        newRow = [];
        for (let col = 0; col < crosswordGrid[row].length; col++) {
            const cellElement = document.getElementById('cell-' + row + '-' + col);
            newRow.push(cellElement.value)
        }
        newGrid.push(newRow)
    }
    var flattenedNewGrid = [].concat(...newGrid).join('-');
    var flattenedCrosswordGrid = [].concat(...crosswordGrid).join('-');

    if (flattenedNewGrid == flattenedCrosswordGrid) {
        for (var i = 0; i < crosswordCells.length; i++) {
            var cell = crosswordCells[i];
            cell.classList.add('correct');
        }
    }
}

//create clue list
var allAcrossClues = [];
var allDownClues = [];
acrossClues = document.getElementById('across-clues');
downClues = document.getElementById('down-clues');

allAcrossClues.push("<ol class='custom-list'>")
allDownClues.push("<ol class='custom-list'>")

for (var answer of answers) {
    if (answer.direction == 'across') {
        allAcrossClues.push("<li class='clue-list' id='" + answer.number + "-" + answer.direction + "'><span class='clue-label'>" + answer.number + "</span><span class='clue-text'>" + answer.clue + "</span></li>");
    }
    if (answer.direction == 'down') {
        allDownClues.push("<li class='clue-list' id='" + answer.number + "-" + answer.direction + "'><span class='clue-label'>" + answer.number + "</span><span class='clue-text'>" + answer.clue + "</span></li>");
    }
}

allAcrossClues.push("</ol>")
allDownClues.push("</ol>")

acrossClues.innerHTML = allAcrossClues.join('');
downClues.innerHTML = allDownClues.join('');

//call answerValidation whenever user inputs change
gridElements.forEach((element) => {
    element.addEventListener('input', answerValidation);
});

//create everything
setGridElementSize();
window.addEventListener('resize', setGridElementSize);
pymChild.sendHeight();
