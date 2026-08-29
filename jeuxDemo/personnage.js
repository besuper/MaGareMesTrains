const characters = [
    // Quai 1
    { id: "p1001", at_time: 1, min_seconds: 0, src: "image/personnage/2001.png", left: 400, top: 280, width: 70, height: 170 },
    { id: "p1002", at_time: 2, min_seconds: 0, src: "image/personnage/2002.png", left: 700, top: 280, width: 70, height: 170 },
    { id: "p1003", at_time: 3, min_seconds: 0, src: "image/personnage/2003.png", left: 900, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 4, min_seconds: 0, src: "image/personnage/2004.png", left: 1100, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 5, min_seconds: 0, src: "image/personnage/2005.png", left: 1150, top: 280, width: 70, height: 170 },
    { id: "p1005", at_time: 6, min_seconds: 0, src: "image/personnage/2006.png", left: 200, top: 280, width: 70, height: 170 },
    { id: "p1001", at_time: 11, min_seconds: 0, src: "image/personnage/2001.png", left: 400, top: 280, width: 70, height: 170 },
    { id: "p1002", at_time: 12, min_seconds: 0, src: "image/personnage/2002.png", left: 700, top: 280, width: 70, height: 170 },
    { id: "p1003", at_time: 13, min_seconds: 0, src: "image/personnage/2003.png", left: 900, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 14, min_seconds: 0, src: "image/personnage/2004.png", left: 1100, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 15, min_seconds: 0, src: "image/personnage/2005.png", left: 1150, top: 280, width: 70, height: 170 },
    { id: "p1005", at_time: 16, min_seconds: 0, src: "image/personnage/2006.png", left: 200, top: 280, width: 70, height: 170 },
    { id: "p1001", at_time: 21, min_seconds: 0, src: "image/personnage/2001.png", left: 400, top: 280, width: 70, height: 170 },
    { id: "p1002", at_time: 22, min_seconds: 0, src: "image/personnage/2002.png", left: 700, top: 280, width: 70, height: 170 },
    { id: "p1003", at_time: 23, min_seconds: 0, src: "image/personnage/2003.png", left: 900, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 24, min_seconds: 0, src: "image/personnage/2004.png", left: 1100, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 25, min_seconds: 0, src: "image/personnage/2005.png", left: 1150, top: 280, width: 70, height: 170 },
    { id: "p1005", at_time: 26, min_seconds: 0, src: "image/personnage/2006.png", left: 200, top: 280, width: 70, height: 170 },
    { id: "p1001", at_time: 31, min_seconds: 0, src: "image/personnage/2001.png", left: 400, top: 280, width: 70, height: 170 },
    { id: "p1002", at_time: 32, min_seconds: 0, src: "image/personnage/2002.png", left: 700, top: 280, width: 70, height: 170 },
    { id: "p1003", at_time: 33, min_seconds: 0, src: "image/personnage/2003.png", left: 900, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 34, min_seconds: 0, src: "image/personnage/2004.png", left: 1100, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 35, min_seconds: 0, src: "image/personnage/2005.png", left: 1150, top: 280, width: 70, height: 170 },
    { id: "p1005", at_time: 36, min_seconds: 0, src: "image/personnage/2006.png", left: 200, top: 280, width: 70, height: 170 },
    { id: "p1001", at_time: 41, min_seconds: 0, src: "image/personnage/2001.png", left: 400, top: 280, width: 70, height: 170 },
    { id: "p1002", at_time: 42, min_seconds: 0, src: "image/personnage/2002.png", left: 700, top: 280, width: 70, height: 170 },
    { id: "p1003", at_time: 43, min_seconds: 0, src: "image/personnage/2003.png", left: 900, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 44, min_seconds: 0, src: "image/personnage/2004.png", left: 1100, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 45, min_seconds: 0, src: "image/personnage/2005.png", left: 1150, top: 280, width: 70, height: 170 },
    { id: "p1005", at_time: 46, min_seconds: 0, src: "image/personnage/2006.png", left: 200, top: 280, width: 70, height: 170 },
    { id: "p1001", at_time: 51, min_seconds: 0, src: "image/personnage/2001.png", left: 400, top: 280, width: 70, height: 170 },
    { id: "p1002", at_time: 52, min_seconds: 0, src: "image/personnage/2002.png", left: 700, top: 280, width: 70, height: 170 },
    { id: "p1003", at_time: 53, min_seconds: 0, src: "image/personnage/2003.png", left: 900, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 54, min_seconds: 0, src: "image/personnage/2004.png", left: 1100, top: 280, width: 70, height: 170 },
    { id: "p1004", at_time: 55, min_seconds: 0, src: "image/personnage/2005.png", left: 1150, top: 280, width: 70, height: 170 },
    { id: "p1005", at_time: 56, min_seconds: 0, src: "image/personnage/2006.png", left: 200, top: 280, width: 70, height: 170 },

    // Quai 2
    { id: "p2001", at_time: 1, min_seconds: 30, src: "image/personnage/1001.png", left: 170, top: 275, width: 50, height: 90 },
    { id: "p2002", at_time: 2, min_seconds: 30, src: "image/personnage/1002.png", left: 310, top: 275, width: 50, height: 90 },
    { id: "p2003", at_time: 3, min_seconds: 30, src: "image/personnage/1003.png", left: 450, top: 275, width: 50, height: 90 },
    { id: "p2004", at_time: 4, min_seconds: 30, src: "image/personnage/1004.png", left: 600, top: 275, width: 50, height: 90 },
    { id: "p2005", at_time: 5, min_seconds: 30, src: "image/personnage/1005.png", left: 720, top: 275, width: 50, height: 90 },
    { id: "p2006", at_time: 6, min_seconds: 30, src: "image/personnage/1006.png", left: 800, top: 275, width: 50, height: 90 },
    { id: "p2007", at_time: 7, min_seconds: 30, src: "image/personnage/1007.png", left: 950, top: 275, width: 50, height: 90 },
    { id: "p2008", at_time: 8, min_seconds: 30, src: "image/personnage/1008.png", left: 1150, top: 275, width: 50, height: 90 },
    { id: "p2001", at_time: 11, min_seconds: 30, src: "image/personnage/1001.png", left: 170, top: 275, width: 50, height: 90 },
    { id: "p2002", at_time: 12, min_seconds: 30, src: "image/personnage/1002.png", left: 310, top: 275, width: 50, height: 90 },
    { id: "p2003", at_time: 13, min_seconds: 30, src: "image/personnage/1003.png", left: 450, top: 275, width: 50, height: 90 },
    { id: "p2004", at_time: 14, min_seconds: 30, src: "image/personnage/1004.png", left: 600, top: 275, width: 50, height: 90 },
    { id: "p2005", at_time: 15, min_seconds: 30, src: "image/personnage/1005.png", left: 720, top: 275, width: 50, height: 90 },
    { id: "p2006", at_time: 16, min_seconds: 30, src: "image/personnage/1006.png", left: 800, top: 275, width: 50, height: 90 },
    { id: "p2007", at_time: 17, min_seconds: 30, src: "image/personnage/1007.png", left: 950, top: 275, width: 50, height: 90 },
    { id: "p2008", at_time: 18, min_seconds: 30, src: "image/personnage/1008.png", left: 1150, top: 275, width: 50, height: 90 },
    { id: "p2001", at_time: 21, min_seconds: 30, src: "image/personnage/1001.png", left: 170, top: 275, width: 50, height: 90 },
    { id: "p2002", at_time: 22, min_seconds: 30, src: "image/personnage/1002.png", left: 310, top: 275, width: 50, height: 90 },
    { id: "p2003", at_time: 23, min_seconds: 30, src: "image/personnage/1003.png", left: 450, top: 275, width: 50, height: 90 },
    { id: "p2004", at_time: 24, min_seconds: 30, src: "image/personnage/1004.png", left: 600, top: 275, width: 50, height: 90 },
    { id: "p2005", at_time: 25, min_seconds: 30, src: "image/personnage/1005.png", left: 720, top: 275, width: 50, height: 90 },
    { id: "p2006", at_time: 26, min_seconds: 30, src: "image/personnage/1006.png", left: 800, top: 275, width: 50, height: 90 },
    { id: "p2007", at_time: 27, min_seconds: 30, src: "image/personnage/1007.png", left: 950, top: 275, width: 50, height: 90 },
    { id: "p2008", at_time: 28, min_seconds: 30, src: "image/personnage/1008.png", left: 1150, top: 275, width: 50, height: 90 },
    { id: "p2001", at_time: 31, min_seconds: 30, src: "image/personnage/1001.png", left: 170, top: 275, width: 50, height: 90 },
    { id: "p2002", at_time: 32, min_seconds: 30, src: "image/personnage/1002.png", left: 310, top: 275, width: 50, height: 90 },
    { id: "p2003", at_time: 33, min_seconds: 30, src: "image/personnage/1003.png", left: 450, top: 275, width: 50, height: 90 },
    { id: "p2004", at_time: 34, min_seconds: 30, src: "image/personnage/1004.png", left: 600, top: 275, width: 50, height: 90 },
    { id: "p2005", at_time: 35, min_seconds: 30, src: "image/personnage/1005.png", left: 720, top: 275, width: 50, height: 90 },
    { id: "p2006", at_time: 36, min_seconds: 30, src: "image/personnage/1006.png", left: 800, top: 275, width: 50, height: 90 },
    { id: "p2007", at_time: 37, min_seconds: 30, src: "image/personnage/1007.png", left: 950, top: 275, width: 50, height: 90 },
    { id: "p2008", at_time: 38, min_seconds: 30, src: "image/personnage/1008.png", left: 1150, top: 275, width: 50, height: 90 },
    { id: "p2001", at_time: 41, min_seconds: 30, src: "image/personnage/1001.png", left: 170, top: 275, width: 50, height: 90 },
    { id: "p2002", at_time: 42, min_seconds: 30, src: "image/personnage/1002.png", left: 310, top: 275, width: 50, height: 90 },
    { id: "p2003", at_time: 43, min_seconds: 30, src: "image/personnage/1003.png", left: 450, top: 275, width: 50, height: 90 },
    { id: "p2004", at_time: 44, min_seconds: 30, src: "image/personnage/1004.png", left: 600, top: 275, width: 50, height: 90 },
    { id: "p2005", at_time: 45, min_seconds: 30, src: "image/personnage/1005.png", left: 720, top: 275, width: 50, height: 90 },
    { id: "p2006", at_time: 46, min_seconds: 30, src: "image/personnage/1006.png", left: 800, top: 275, width: 50, height: 90 },
    { id: "p2007", at_time: 47, min_seconds: 30, src: "image/personnage/1007.png", left: 950, top: 275, width: 50, height: 90 },
    { id: "p2008", at_time: 48, min_seconds: 30, src: "image/personnage/1008.png", left: 1150, top: 275, width: 50, height: 90 },
    { id: "p2001", at_time: 51, min_seconds: 30, src: "image/personnage/1001.png", left: 170, top: 275, width: 50, height: 90 },
    { id: "p2002", at_time: 52, min_seconds: 30, src: "image/personnage/1002.png", left: 310, top: 275, width: 50, height: 90 },
    { id: "p2003", at_time: 53, min_seconds: 30, src: "image/personnage/1003.png", left: 450, top: 275, width: 50, height: 90 },
    { id: "p2004", at_time: 54, min_seconds: 30, src: "image/personnage/1004.png", left: 600, top: 275, width: 50, height: 90 },
    { id: "p2005", at_time: 55, min_seconds: 30, src: "image/personnage/1005.png", left: 720, top: 275, width: 50, height: 90 },
    { id: "p2006", at_time: 56, min_seconds: 30, src: "image/personnage/1006.png", left: 800, top: 275, width: 50, height: 90 },
    { id: "p2007", at_time: 57, min_seconds: 30, src: "image/personnage/1007.png", left: 950, top: 275, width: 50, height: 90 },
    { id: "p2008", at_time: 58, min_seconds: 30, src: "image/personnage/1008.png", left: 1150, top: 275, width: 50, height: 90 },

    // Quai 3
    { id: "p3001", at_time: 0, min_seconds: 15, src: "image/personnage/1009.png", left: 190, top: 279, width: 50, height: 65 },
    { id: "p3002", at_time: 1, min_seconds: 15, src: "image/personnage/1010.png", left: 430, top: 279, width: 50, height: 65 },
    { id: "p3003", at_time: 2, min_seconds: 15, src: "image/personnage/1011.png", left: 580, top: 279, width: 50, height: 65 },
    { id: "p3004", at_time: 3, min_seconds: 15, src: "image/personnage/1012.png", left: 630, top: 279, width: 50, height: 65 },
    { id: "p3005", at_time: 4, min_seconds: 15, src: "image/personnage/1013.png", left: 750, top: 279, width: 50, height: 65 },
    { id: "p3006", at_time: 5, min_seconds: 15, src: "image/personnage/1014.png", left: 830, top: 279, width: 50, height: 65 },
    { id: "p3007", at_time: 6, min_seconds: 15, src: "image/personnage/1015.png", left: 980, top: 279, width: 50, height: 65 },
    { id: "p3008", at_time: 7, min_seconds: 15, src: "image/personnage/1006.png", left: 1180, top: 279, width: 50, height: 65 },
    { id: "p3001", at_time: 10, min_seconds: 15, src: "image/personnage/1009.png", left: 190, top: 279, width: 50, height: 65 },
    { id: "p3002", at_time: 11, min_seconds: 15, src: "image/personnage/1010.png", left: 430, top: 279, width: 50, height: 65 },
    { id: "p3003", at_time: 12, min_seconds: 15, src: "image/personnage/1011.png", left: 580, top: 279, width: 50, height: 65 },
    { id: "p3004", at_time: 13, min_seconds: 15, src: "image/personnage/1012.png", left: 630, top: 279, width: 50, height: 65 },
    { id: "p3005", at_time: 14, min_seconds: 15, src: "image/personnage/1013.png", left: 750, top: 279, width: 50, height: 65 },
    { id: "p3006", at_time: 15, min_seconds: 15, src: "image/personnage/1014.png", left: 830, top: 279, width: 50, height: 65 },
    { id: "p3007", at_time: 16, min_seconds: 15, src: "image/personnage/1015.png", left: 980, top: 279, width: 50, height: 65 },
    { id: "p3008", at_time: 17, min_seconds: 15, src: "image/personnage/1006.png", left: 1180, top: 279, width: 50, height: 65 },
    { id: "p3001", at_time: 20, min_seconds: 15, src: "image/personnage/1009.png", left: 190, top: 275, width: 50, height: 65 },
    { id: "p3002", at_time: 21, min_seconds: 15, src: "image/personnage/1010.png", left: 430, top: 279, width: 50, height: 65 },
    { id: "p3003", at_time: 22, min_seconds: 15, src: "image/personnage/1011.png", left: 580, top: 279, width: 50, height: 65 },
    { id: "p3004", at_time: 23, min_seconds: 15, src: "image/personnage/1012.png", left: 630, top: 279, width: 50, height: 65 },
    { id: "p3005", at_time: 24, min_seconds: 15, src: "image/personnage/1013.png", left: 750, top: 279, width: 50, height: 65 },
    { id: "p3006", at_time: 25, min_seconds: 15, src: "image/personnage/1014.png", left: 830, top: 279, width: 50, height: 65 },
    { id: "p3007", at_time: 26, min_seconds: 15, src: "image/personnage/1015.png", left: 980, top: 279, width: 50, height: 65 },
    { id: "p3008", at_time: 27, min_seconds: 15, src: "image/personnage/1006.png", left: 1180, top: 279, width: 50, height: 65 },
    { id: "p3001", at_time: 30, min_seconds: 15, src: "image/personnage/1009.png", left: 190, top: 275, width: 50, height: 65 },
    { id: "p3002", at_time: 31, min_seconds: 15, src: "image/personnage/1010.png", left: 430, top: 279, width: 50, height: 65 },
    { id: "p3003", at_time: 32, min_seconds: 15, src: "image/personnage/1011.png", left: 580, top: 279, width: 50, height: 65 },
    { id: "p3004", at_time: 33, min_seconds: 15, src: "image/personnage/1012.png", left: 630, top: 279, width: 50, height: 65 },
    { id: "p3005", at_time: 34, min_seconds: 15, src: "image/personnage/1013.png", left: 750, top: 279, width: 50, height: 65 },
    { id: "p3006", at_time: 35, min_seconds: 15, src: "image/personnage/1014.png", left: 830, top: 279, width: 50, height: 65 },
    { id: "p3007", at_time: 36, min_seconds: 15, src: "image/personnage/1015.png", left: 980, top: 279, width: 50, height: 65 },
    { id: "p3008", at_time: 37, min_seconds: 15, src: "image/personnage/1006.png", left: 1180, top: 279, width: 50, height: 65 },
    { id: "p3001", at_time: 40, min_seconds: 15, src: "image/personnage/1009.png", left: 190, top: 275, width: 50, height: 65 },
    { id: "p3002", at_time: 41, min_seconds: 15, src: "image/personnage/1010.png", left: 430, top: 279, width: 50, height: 65 },
    { id: "p3003", at_time: 42, min_seconds: 15, src: "image/personnage/1011.png", left: 580, top: 279, width: 50, height: 65 },
    { id: "p3004", at_time: 43, min_seconds: 15, src: "image/personnage/1012.png", left: 630, top: 279, width: 50, height: 65 },
    { id: "p3005", at_time: 44, min_seconds: 15, src: "image/personnage/1013.png", left: 750, top: 279, width: 50, height: 65 },
    { id: "p3006", at_time: 45, min_seconds: 15, src: "image/personnage/1014.png", left: 830, top: 279, width: 50, height: 65 },
    { id: "p3007", at_time: 46, min_seconds: 15, src: "image/personnage/1015.png", left: 980, top: 279, width: 50, height: 65 },
    { id: "p3008", at_time: 47, min_seconds: 15, src: "image/personnage/1006.png", left: 1180, top: 279, width: 50, height: 65 },
    { id: "p3001", at_time: 50, min_seconds: 15, src: "image/personnage/1009.png", left: 190, top: 275, width: 50, height: 65 },
    { id: "p3002", at_time: 51, min_seconds: 15, src: "image/personnage/1010.png", left: 430, top: 279, width: 50, height: 65 },
    { id: "p3003", at_time: 52, min_seconds: 15, src: "image/personnage/1011.png", left: 580, top: 279, width: 50, height: 65 },
    { id: "p3004", at_time: 53, min_seconds: 15, src: "image/personnage/1012.png", left: 630, top: 279, width: 50, height: 65 },
    { id: "p3005", at_time: 54, min_seconds: 15, src: "image/personnage/1013.png", left: 750, top: 279, width: 50, height: 65 },
    { id: "p3006", at_time: 55, min_seconds: 15, src: "image/personnage/1014.png", left: 830, top: 279, width: 50, height: 65 },
    { id: "p3007", at_time: 56, min_seconds: 15, src: "image/personnage/1015.png", left: 980, top: 279, width: 50, height: 65 },
    { id: "p3008", at_time: 57, min_seconds: 15, src: "image/personnage/1006.png", left: 1180, top: 279, width: 50, height: 65 },
];

function personnage() {
    characters.forEach(perso => {
        if (les_minutes === perso.at_time && les_secondes > perso.min_seconds) {
            var newImage = new Image();
            newImage.onload = function () { document.getElementById(perso.id).src = newImage.src; }
            newImage.src = perso.src;
            document.getElementById(perso.id).style.cssText = `position: absolute; left: ${perso.left}px; top: ${perso.top}px; width: ${perso.width}px; height: ${perso.height}px;`;
        }
    });

    if (uzz == 1) {
        document.getElementById('p1001').style.cssText = 'position: absolute; left: 400px; top:-230px; width: 70px; height: 170px;';
        document.getElementById('p1002').style.cssText = 'position: absolute; left: 400px; top:-230px; width: 70px; height: 170px;';
        document.getElementById('p1003').style.cssText = 'position: absolute; left: 400px; top:-230px; width: 70px; height: 170px;';
        document.getElementById('p1004').style.cssText = 'position: absolute; left: 400px; top:-230px; width: 70px; height: 170px;';
        document.getElementById('p1005').style.cssText = 'position: absolute; left: 400px; top:-230px; width: 70px; height: 170px;';
    }

    if (uzz == 2) {
        document.getElementById('p2001').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
        document.getElementById('p2002').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
        document.getElementById('p2003').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
        document.getElementById('p2004').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
        document.getElementById('p2005').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
        document.getElementById('p2006').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
        document.getElementById('p2007').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
        document.getElementById('p2008').style.cssText = 'position: absolute; left: 1150px; top:-225px; width: 50px; height: 90px;';
    }

    if (uzz == 3) {
        document.getElementById('p3001').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
        document.getElementById('p3002').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
        document.getElementById('p3003').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
        document.getElementById('p3004').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
        document.getElementById('p3005').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
        document.getElementById('p3006').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
        document.getElementById('p3007').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
        document.getElementById('p3008').style.cssText = 'position: absolute; left: 1180px; top:-230px; width: 50px; height: 65px;';
    }
}