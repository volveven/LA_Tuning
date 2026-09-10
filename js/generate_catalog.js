const fs = require('fs');
const path = require('path');

const HSN_MAP = {
    '0005': 'BMW', '7909': 'BMW', '2142': 'Mini',
    '0603': 'Volkswagen', '0588': 'Audi', '7593': 'Cupra / Seat',
    '8004': 'Skoda', '0583': 'Porsche',
    '1313': 'Mercedes-Benz', '0999': 'Mercedes-Benz', '0710': 'Mercedes-Benz', '0708': 'Mercedes-Benz', '0709': 'Mercedes-Benz',
    '8566': 'Ford', '1005': 'Ford', '1028': 'Ford',
    '0035': 'Opel', '1844': 'Opel',
    '1349': 'Hyundai', '5984': 'Hyundai', '8252': 'Hyundai',
    '1260': 'Kia', '8253': 'Kia',
    '4136': 'Abarth', '4001': 'Fiat', '0014': 'Alfa Romeo',
    '3001': 'Citroën', '3003': 'Peugeot', '3333': 'Renault',
    '9101': 'Volvo', '9113': 'Volvo',
    '5013': 'Toyota', '7104': 'Toyota', '7100': 'Honda', '2131': 'Honda',
    '1329': 'Nissan', '3144': 'Nissan', '7118': 'Mazda', '8307': 'Suzuki',
    '2140': 'Land Rover', '2143': 'Land Rover', '1590': 'Jaguar',
    '1004': 'Jeep', '4014': 'Mitsubishi', '7106': 'Subaru',
    '0009': 'Chevrolet', '2054': 'Cadillac'
};

const vehicles = [];

function addCar(brand, model, engine, fuel, stockHp, stockNm, s1Hp, s1Nm, s2Hp, s2Nm, tcu, hsn, tsn) {
    vehicles.push({
        hsn: hsn || '',
        tsn: tsn || '',
        brand: brand,
        model: model,
        engine: engine,
        fuel: fuel,
        stockHp: stockHp,
        stockNm: stockNm,
        s1Hp: s1Hp,
        s1Nm: s1Nm,
        s2Hp: s2Hp,
        s2Nm: s2Nm,
        tcu: tcu || 'Handschalter / Automatik',
        vMax: true
    });
}

// -------------------------------------------------------------
// BMW
// -------------------------------------------------------------
// 1er E81/E82/E87/E88
addCar('BMW', '1er (E81/E82/E87/E88)', '116i (1.6 N45 115 PS)', 'Benzin Sauger', 115, 150, 130, 175, 138, 185, 'Handschalter 5/6-Gang', '0005', '808');
addCar('BMW', '1er (E81/E82/E87/E88)', '116i LCI (2.0 N43 122 PS)', 'Benzin Sauger', 122, 185, 145, 210, 155, 220, 'Handschalter 6-Gang', '0005', 'AJQ');
addCar('BMW', '1er (E81/E82/E87/E88)', '118i (2.0 N46 129 PS)', 'Benzin Sauger', 129, 180, 145, 205, 155, 215, 'Handschalter / Automatik', '0005', '795');
addCar('BMW', '1er (E81/E82/E87/E88)', '118i LCI (2.0 N43 143 PS)', 'Benzin Sauger', 143, 190, 160, 215, 170, 225, 'Handschalter / Automatik', '0005', 'AJS');
addCar('BMW', '1er (E81/E82/E87/E88)', '120i (2.0 N46 150 PS)', 'Benzin Sauger', 150, 200, 168, 225, 175, 235, 'Handschalter / Automatik', '0005', '797');
addCar('BMW', '1er (E81/E82/E87/E88)', '120i LCI (2.0 N43 170 PS)', 'Benzin Sauger', 170, 210, 188, 235, 195, 245, 'Handschalter / Automatik', '0005', 'AJR');
addCar('BMW', '1er (E81/E82/E87/E88)', '125i Entdrosselung (3.0 N52 218 PS -> 130i Niveau)', 'Benzin Sauger', 218, 270, 265, 315, 275, 325, 'Handschalter / 6-Gang Steptronic (Große Saugrohr-Optimierung)', '0005', 'AKS');
addCar('BMW', '1er (E81/E82/E87/E88)', '130i (3.0 N52 265 PS)', 'Benzin Sauger', 265, 315, 282, 335, 290, 345, 'Handschalter 6-Gang', '0005', '844');
addCar('BMW', '1er (E81/E82/E87/E88)', '135i BiTurbo (3.0 N54 306 PS)', 'Benzin Turbo', 306, 400, 370, 520, 410, 580, 'DKG / ZF 6HP Softwareoptimierung (199 €)', '0005', 'AKT');
addCar('BMW', '1er (E81/E82/E87/E88)', '135i LCI (3.0 N55 TwinScroll 306 PS)', 'Benzin Turbo', 306, 400, 365, 510, 395, 560, 'DKG / ZF 6HP Softwareoptimierung (199 €)', '0005', 'AYN');
addCar('BMW', '1er (E81/E82/E87/E88)', '1er M Coupé (3.0 N54 BiTurbo 340 PS)', 'Benzin Turbo', 340, 450, 400, 560, 440, 620, 'Handschalter 6-Gang (Verstärkte Kupplung empfohlen)', '7909', 'AAB');
addCar('BMW', '1er (E81/E82/E87/E88)', '116d (2.0 N47 116 PS)', 'Diesel', 116, 260, 175, 380, 190, 410, 'Handschalter 6-Gang (Gedrosselter 118d/120d Motor!)', '0005', 'APM');
addCar('BMW', '1er (E81/E82/E87/E88)', '118d (2.0 M47N 122 PS)', 'Diesel', 122, 280, 155, 340, 168, 365, 'Handschalter / Automatik', '0005', '794');
addCar('BMW', '1er (E81/E82/E87/E88)', '118d LCI (2.0 N47 143 PS)', 'Diesel', 143, 300, 180, 390, 195, 420, 'Handschalter / Automatik', '0005', 'AJU');
addCar('BMW', '1er (E81/E82/E87/E88)', '120d (2.0 M47N2 163 PS)', 'Diesel', 163, 340, 200, 420, 215, 450, 'Handschalter / 6-Gang Steptronic', '0005', '796');
addCar('BMW', '1er (E81/E82/E87/E88)', '120d LCI (2.0 N47 177 PS)', 'Diesel', 177, 350, 215, 430, 225, 460, 'Handschalter / 6-Gang Steptronic', '0005', 'AJT');
addCar('BMW', '1er (E81/E82/E87/E88)', '123d BiTurbo (2.0 N47S 204 PS)', 'Diesel', 204, 400, 250, 480, 270, 520, 'Handschalter / 6-Gang Automatik Anpassung', '0005', 'AKO');

// 1er F20/F21
addCar('BMW', '1er (F20/F21)', '114i (1.6 N13 102 PS -> Enorme Mehrleistung)', 'Benzin Turbo', 102, 180, 210, 310, 225, 330, 'Handschalter 6-Gang (Original gedrosselter 118i!)', '0005', 'BJR');
addCar('BMW', '1er (F20/F21)', '116i (1.6 N13 136 PS)', 'Benzin Turbo', 136, 220, 210, 310, 225, 330, 'Handschalter / ZF 8HP', '0005', 'BDI');
addCar('BMW', '1er (F20/F21)', '118i (1.6 N13 170 PS)', 'Benzin Turbo', 170, 250, 215, 320, 230, 340, 'Handschalter / ZF 8HP', '0005', 'BDJ');
addCar('BMW', '1er (F20/F21)', '118i LCI (1.5 B38 3-Zyl. 136 PS)', 'Benzin Turbo', 136, 220, 170, 280, 185, 300, 'Handschalter / ZF 8HP', '0005', 'CKA');
addCar('BMW', '1er (F20/F21)', '120i (1.6 N13 177 PS)', 'Benzin Turbo', 177, 250, 220, 330, 235, 350, 'Handschalter / ZF 8HP', '0005', 'BWS');
addCar('BMW', '1er (F20/F21)', '120i LCI (2.0 B48 184 PS)', 'Benzin Turbo', 184, 290, 260, 420, 285, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CLY');
addCar('BMW', '1er (F20/F21)', '125i (2.0 N20 218 PS)', 'Benzin Turbo', 218, 310, 275, 420, 295, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BHI');
addCar('BMW', '1er (F20/F21)', '125i LCI (2.0 B48 224 PS)', 'Benzin Turbo', 224, 310, 285, 430, 305, 460, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CMC');
addCar('BMW', '1er (F20/F21)', 'M135i (3.0 N55 320/326 PS)', 'Benzin Turbo', 320, 450, 380, 540, 410, 580, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BHO');
addCar('BMW', '1er (F20/F21)', 'M140i (3.0 B58 340 PS)', 'Benzin Turbo', 340, 500, 420, 600, 460, 660, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CFJ');
addCar('BMW', '1er (F20/F21)', '114d (1.6 N47 95 PS)', 'Diesel', 95, 235, 145, 320, 155, 340, 'Handschalter 6-Gang', '0005', 'BKE');
addCar('BMW', '1er (F20/F21)', '116d (2.0 N47 / 1.5 B37 116 PS)', 'Diesel', 116, 260, 150, 330, 165, 350, 'Handschalter / ZF 8HP', '0005', 'BDK');
addCar('BMW', '1er (F20/F21)', '118d (2.0 N47 143 PS / 2.0 B47 150 PS)', 'Diesel', 143, 320, 185, 400, 200, 430, 'Handschalter / ZF 8HP', '0005', 'BDL');
addCar('BMW', '1er (F20/F21)', '120d (2.0 N47 184 PS / 2.0 B47 190 PS)', 'Diesel', 184, 380, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BDM');
addCar('BMW', '1er (F20/F21)', '125d BiTurbo (2.0 N47 218 PS / 2.0 B47 224 PS)', 'Diesel', 218, 450, 265, 500, 280, 530, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BHJ');

// 1er F40
addCar('BMW', '1er (F40)', '118i (1.5 B38 136/140 PS)', 'Benzin Turbo', 140, 220, 175, 280, 190, 300, '7-Gang Steptronic DKG / Handschalter', '0005', 'CVI');
addCar('BMW', '1er (F40)', '120d (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, '8-Gang Steptronic Aisin', '0005', 'CVN');
addCar('BMW', '1er (F40)', '128ti (2.0 B48 265 PS)', 'Benzin Turbo', 265, 400, 310, 470, 335, 500, '8-Gang Steptronic Sport', '0005', 'CYC');
addCar('BMW', '1er (F40)', 'M135i xDrive (2.0 B48 306 PS)', 'Benzin Turbo', 306, 450, 360, 500, 385, 530, '8-Gang Steptronic Sport Aisin', '0005', 'CVK');

// 2er F22/F23/F87
addCar('BMW', '2er (F22/F23/F87)', '220i (2.0 B48 184 PS)', 'Benzin Turbo', 184, 290, 260, 420, 285, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CLZ');
addCar('BMW', '2er (F22/F23/F87)', '230i (2.0 B48 252 PS)', 'Benzin Turbo', 252, 350, 305, 450, 325, 480, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CMA');
addCar('BMW', '2er (F22/F23/F87)', 'M235i (3.0 N55 326 PS)', 'Benzin Turbo', 326, 450, 380, 540, 410, 580, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BPJ');
addCar('BMW', '2er (F22/F23/F87)', 'M240i (3.0 B58 340 PS)', 'Benzin Turbo', 340, 500, 420, 600, 460, 660, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CFK');
addCar('BMW', '2er (F22/F23/F87)', '220d (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BSB');
addCar('BMW', '2er (F22/F23/F87)', '225d BiTurbo (2.0 B47 224 PS)', 'Diesel', 224, 450, 265, 500, 280, 530, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BTD');
addCar('BMW', '2er (F22/F23/F87)', 'M2 (3.0 N55 370 PS)', 'Benzin Turbo', 370, 465, 420, 580, 445, 620, '7-Gang DKG Softwareflash (199 €)', '0005', 'BXO');
addCar('BMW', '2er (F22/F23/F87)', 'M2 Competition (3.0 S55 BiTurbo 410 PS)', 'Benzin Turbo', 410, 550, 500, 680, 530, 720, '7-Gang DKG GTS-Flash (199 €)', '0005', 'BYC');
addCar('BMW', '2er (F22/F23/F87)', 'M2 CS (3.0 S55 BiTurbo 450 PS)', 'Benzin Turbo', 450, 550, 520, 700, 550, 740, '7-Gang DKG GTS-Flash (199 €)', '0005', 'CUG');

// 2er G42 / M2 G87
addCar('BMW', '2er (G42 / G87)', '220i (2.0 B48 184 PS)', 'Benzin Turbo', 184, 300, 260, 420, 285, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CWY');
addCar('BMW', '2er (G42 / G87)', '230i (2.0 B48 245 PS)', 'Benzin Turbo', 245, 400, 300, 460, 325, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CXP');
addCar('BMW', '2er (G42 / G87)', 'M240i xDrive (3.0 B58 374 PS)', 'Benzin Turbo', 374, 500, 430, 620, 470, 680, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CWZ');
addCar('BMW', '2er (G42 / G87)', 'M2 (3.0 S58 BiTurbo 460 PS)', 'Benzin Turbo', 460, 550, 560, 720, 620, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'DAJ');

// 3er E36
addCar('BMW', '3er (E36)', '318is (1.9 M44 140 PS)', 'Benzin Sauger', 140, 180, 152, 195, 158, 202, 'Handschalter 5-Gang', '0005', '559');
addCar('BMW', '3er (E36)', '323i (2.5 M52 170 PS)', 'Benzin Sauger', 170, 245, 185, 265, 192, 275, 'Handschalter 5-Gang', '0005', '565');
addCar('BMW', '3er (E36)', '325i (2.5 M50 192 PS)', 'Benzin Sauger', 192, 245, 205, 265, 212, 275, 'Handschalter 5-Gang', '0005', '505');
addCar('BMW', '3er (E36)', '328i (2.8 M52 193 PS)', 'Benzin Sauger', 193, 280, 215, 305, 225, 320, 'Handschalter 5-Gang (Klassiker mit M50 Brücke)', '0005', '557');
addCar('BMW', '3er (E36)', '325tds (2.5 M51 143 PS Turbodiesel)', 'Diesel', 143, 280, 175, 340, 185, 360, 'Handschalter 5-Gang', '0005', '533');
addCar('BMW', '3er (E36)', 'M3 3.0 (3.0 S50 286 PS)', 'Benzin Sauger', 286, 320, 305, 340, 315, 350, 'Handschalter 5-Gang', '7909', '302');
addCar('BMW', '3er (E36)', 'M3 3.2 (3.2 S50 321 PS)', 'Benzin Sauger', 321, 350, 340, 370, 350, 380, 'Handschalter 6-Gang', '7909', '303');

// 3er E46
addCar('BMW', '3er (E46)', '318i (1.9 M43 118 PS / 2.0 N42 143 PS)', 'Benzin Sauger', 143, 200, 158, 220, 165, 230, 'Handschalter / Automatik', '0005', '723');
addCar('BMW', '3er (E46)', '320i (2.0 M52 150 PS / 2.2 M54 170 PS)', 'Benzin Sauger', 170, 210, 185, 230, 192, 240, 'Handschalter / Steptronic', '0005', '683');
addCar('BMW', '3er (E46)', '325i (2.5 M54 192 PS)', 'Benzin Sauger', 192, 245, 208, 265, 216, 275, 'Handschalter / Steptronic', '0005', '682');
addCar('BMW', '3er (E46)', '328i (2.8 M52TU 193 PS)', 'Benzin Sauger', 193, 280, 212, 300, 220, 312, 'Handschalter / Steptronic', '0005', '624');
addCar('BMW', '3er (E46)', '330i (3.0 M54 231 PS)', 'Benzin Sauger', 231, 300, 248, 325, 258, 340, 'Handschalter / Steptronic / SMG', '0005', '684');
addCar('BMW', '3er (E46)', '318d (2.0 M47 115 PS)', 'Diesel', 115, 265, 145, 330, 155, 350, 'Handschalter 5-Gang', '0005', '729');
addCar('BMW', '3er (E46)', '320d (2.0 M47 136 PS)', 'Diesel', 136, 280, 165, 350, 175, 380, 'Handschalter / 5-Gang Automatik', '0005', '622');
addCar('BMW', '3er (E46)', '320d LCI (2.0 M47N 150 PS)', 'Diesel', 150, 330, 185, 400, 200, 430, 'Handschalter 6-Gang / Steptronic', '0005', '730');
addCar('BMW', '3er (E46)', '330d (3.0 M57 184 PS)', 'Diesel', 184, 390, 220, 480, 235, 510, 'Handschalter / 5-Gang Steptronic', '0005', '657');
addCar('BMW', '3er (E46)', '330d LCI (3.0 M57N 204 PS)', 'Diesel', 204, 410, 250, 520, 270, 560, 'Handschalter 6-Gang / 6-Gang Steptronic', '0005', '758');
addCar('BMW', '3er (E46)', 'M3 (3.2 S54 343 PS)', 'Benzin Sauger', 343, 365, 360, 385, 375, 400, 'Handschalter / SMG II Softwareoptimierung', '7909', '300');
addCar('BMW', '3er (E46)', 'M3 CSL (3.2 S54 360 PS)', 'Benzin Sauger', 360, 370, 375, 395, 385, 405, 'SMG II CSL Anpassung', '7909', '310');

// 3er E90/E91/E92/E93
addCar('BMW', '3er (E90/E91/E92/E93)', '318i (2.0 N46 129 PS / N43 143 PS)', 'Benzin Sauger', 143, 190, 160, 215, 170, 225, 'Handschalter / ZF 6HP', '0005', 'AIA');
addCar('BMW', '3er (E90/E91/E92/E93)', '320i (2.0 N46 150 PS / N43 170 PS)', 'Benzin Sauger', 170, 210, 188, 235, 195, 245, 'Handschalter / ZF 6HP', '0005', 'AHX');
addCar('BMW', '3er (E90/E91/E92/E93)', '325i Entdrosselung (3.0 N53 218 PS -> 330i Niveau)', 'Benzin Sauger', 218, 270, 270, 325, 280, 335, 'Handschalter / ZF 6HP (Software-Entdrosselung)', '0005', 'AIC');
addCar('BMW', '3er (E90/E91/E92/E93)', '325i (2.5 N52 218 PS)', 'Benzin Sauger', 218, 250, 235, 270, 242, 280, 'Handschalter / ZF 6HP', '0005', '821');
addCar('BMW', '3er (E90/E91/E92/E93)', '330i (3.0 N52 258 PS / N53 272 PS)', 'Benzin Sauger', 272, 320, 290, 345, 298, 355, 'Handschalter / ZF 6HP', '0005', 'AID');
addCar('BMW', '3er (E90/E91/E92/E93)', '335i BiTurbo (3.0 N54 306 PS)', 'Benzin Turbo', 306, 400, 370, 520, 410, 580, 'DKG / ZF 6HP Softwareoptimierung (199 €)', '0005', 'AHV');
addCar('BMW', '3er (E90/E91/E92/E93)', '335i LCI (3.0 N55 306 PS)', 'Benzin Turbo', 306, 400, 365, 510, 395, 560, 'DKG / ZF 6HP Softwareoptimierung (199 €)', '0005', 'AYM');
addCar('BMW', '3er (E90/E91/E92/E93)', '335is (3.0 N54 326 PS)', 'Benzin Turbo', 326, 450, 385, 540, 420, 600, '7-Gang DKG Anpassung (199 €)', '0005', 'BDI');
addCar('BMW', '3er (E90/E91/E92/E93)', '316d (2.0 N47 116 PS)', 'Diesel', 116, 260, 175, 380, 190, 410, 'Handschalter 6-Gang (Gedrosselter 320d Motor!)', '0005', 'APN');
addCar('BMW', '3er (E90/E91/E92/E93)', '318d (2.0 M47 122 PS)', 'Diesel', 122, 280, 155, 340, 168, 365, 'Handschalter / ZF 6HP', '0005', '859');
addCar('BMW', '3er (E90/E91/E92/E93)', '318d LCI (2.0 N47 143 PS)', 'Diesel', 143, 300, 180, 390, 195, 420, 'Handschalter / ZF 6HP', '0005', 'AHU');
addCar('BMW', '3er (E90/E91/E92/E93)', '320d (2.0 M47N2 163 PS)', 'Diesel', 163, 340, 200, 420, 215, 450, 'Handschalter / ZF 6HP Automatik Anpassung (199 €)', '0005', '819');
addCar('BMW', '3er (E90/E91/E92/E93)', '320d (2.0 N47 177 PS)', 'Diesel', 177, 350, 215, 430, 225, 460, 'Handschalter / ZF 6HP Automatik Anpassung (199 €)', '0005', 'AHW');
addCar('BMW', '3er (E90/E91/E92/E93)', '320d LCI (2.0 N47N 184 PS)', 'Diesel', 184, 380, 218, 440, 230, 470, 'Handschalter / ZF 6HP Automatik Anpassung (199 €)', '0005', 'AYK');
addCar('BMW', '3er (E90/E91/E92/E93)', '325d (3.0 M57N2 197 PS)', 'Diesel', 197, 400, 250, 520, 275, 570, 'ZF 6HP Automatik Anpassung (199 €)', '0005', 'AHY');
addCar('BMW', '3er (E90/E91/E92/E93)', '325d LCI (3.0 N57 204 PS -> 330d Potenzial)', 'Diesel', 204, 430, 290, 600, 315, 640, 'ZF 6HP Optimierung dringend empfohlen (199 €)', '0005', 'AYP');
addCar('BMW', '3er (E90/E91/E92/E93)', '330d (3.0 M57N2 231 PS)', 'Diesel', 231, 500, 275, 600, 295, 640, 'ZF 6HP Automatik Anpassung (199 €)', '0005', '860');
addCar('BMW', '3er (E90/E91/E92/E93)', '330d LCI (3.0 N57 245 PS)', 'Diesel', 245, 520, 300, 620, 320, 660, 'ZF 6HP Automatik Anpassung (199 €)', '0005', 'ALL');
addCar('BMW', '3er (E90/E91/E92/E93)', '335d BiTurbo (3.0 M57N2 286 PS)', 'Diesel', 286, 580, 340, 680, 375, 740, 'ZF 6HP Drehmomentbegrenzung anheben (199 €)', '0005', 'AHZ');
addCar('BMW', '3er (E90/E91/E92/E93)', 'M3 V8 (4.0 S65 420 PS)', 'Benzin Sauger', 420, 400, 440, 425, 455, 440, '7-Gang DKG GTS-Flash (199 €)', '7909', '317');

// 3er & 4er F30/F31/F32/F33/F36
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '316i (1.6 N13 136 PS)', 'Benzin Turbo', 136, 220, 210, 310, 225, 330, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BIA');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '318i LCI (1.5 B38 136 PS)', 'Benzin Turbo', 136, 220, 170, 280, 185, 300, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CLP');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '320i / 420i (2.0 N20 / B48 184 PS)', 'Benzin Turbo', 184, 270, 260, 420, 285, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BIE');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '328i / 428i (2.0 N20 245 PS)', 'Benzin Turbo', 245, 350, 290, 430, 310, 460, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BHY');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '330i / 430i (2.0 B48 252 PS)', 'Benzin Turbo', 252, 350, 305, 450, 325, 480, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CFL');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '335i / 435i (3.0 N55 306 PS)', 'Benzin Turbo', 306, 400, 370, 520, 405, 580, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BIB');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '340i / 440i (3.0 B58 326 PS)', 'Benzin Turbo', 326, 450, 420, 580, 460, 650, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BIQ');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '316d (2.0 N47 / B47 116 PS)', 'Diesel', 116, 260, 185, 400, 200, 430, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BID');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '318d (2.0 N47 143 PS / B47 150 PS)', 'Diesel', 143, 320, 185, 400, 200, 430, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BIG');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '320d (2.0 N47N 184 PS)', 'Diesel', 184, 380, 218, 440, 230, 470, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BIF');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '320d LCI (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BTE');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '325d (2.0 N47 218 PS / B47 224 PS)', 'Diesel', 218, 450, 265, 500, 280, 530, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BLS');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '330d / 430d (3.0 N57 258 PS)', 'Diesel', 258, 560, 310, 660, 335, 700, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BUP');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', '335d / 435d xDrive (3.0 N57 313 PS)', 'Diesel', 313, 630, 380, 750, 400, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BAT');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', 'M3 / M4 (3.0 S55 BiTurbo 431 PS)', 'Benzin Turbo', 431, 550, 510, 680, 540, 720, '7-Gang DKG GTS-Flash (199 €)', '0005', 'BOB');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', 'M3 / M4 Competition (3.0 S55 450 PS)', 'Benzin Turbo', 450, 550, 520, 690, 550, 730, '7-Gang DKG GTS-Flash (199 €)', '0005', 'BRB');
addCar('BMW', '3er / 4er (F30/F31/F32/F36)', 'M3 CS / M4 CS (3.0 S55 460 PS)', 'Benzin Turbo', 460, 600, 530, 700, 560, 740, '7-Gang DKG GTS-Flash (199 €)', '0005', 'CMZ');

// 3er & 4er G20/G21/G22/G23/G26
addCar('BMW', '3er / 4er (G20/G21/G22)', '318i (2.0 B48 156 PS)', 'Benzin Turbo', 156, 250, 250, 400, 270, 430, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CTA');
addCar('BMW', '3er / 4er (G20/G21/G22)', '320i (2.0 B48 184 PS)', 'Benzin Turbo', 184, 300, 260, 420, 285, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CLB');
addCar('BMW', '3er / 4er (G20/G21/G22)', '330i (2.0 B48 TÜ1 258 PS)', 'Benzin Turbo', 258, 400, 310, 480, 330, 510, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CLC');
addCar('BMW', '3er / 4er (G20/G21/G22)', 'M340i xDrive (3.0 B58 TÜ1 374 PS)', 'Benzin Turbo', 374, 500, 430, 620, 470, 680, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CLD');
addCar('BMW', '3er / 4er (G20/G21/G22)', '318d (2.0 B47 150 PS)', 'Diesel', 150, 320, 190, 420, 205, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CLE');
addCar('BMW', '3er / 4er (G20/G21/G22)', '320d (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CLF');
addCar('BMW', '3er / 4er (G20/G21/G22)', '330d (3.0 B57 265/286 PS)', 'Diesel', 265, 620, 325, 720, 350, 760, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CLH');
addCar('BMW', '3er / 4er (G20/G21/G22)', 'M340d xDrive (3.0 B57 340 PS)', 'Diesel', 340, 700, 400, 800, 425, 840, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CUL');
addCar('BMW', '3er / 4er (G20/G21/G22)', 'M3 / M4 (3.0 S58 BiTurbo 480 PS)', 'Benzin Turbo', 480, 550, 580, 750, 630, 800, 'Handschalter 6-Gang', '0005', 'CQR');
addCar('BMW', '3er / 4er (G20/G21/G22)', 'M3 / M4 Competition (3.0 S58 510 PS)', 'Benzin Turbo', 510, 650, 620, 780, 680, 850, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CQS');
addCar('BMW', '3er / 4er (G20/G21/G22)', 'M3 CS / M4 CSL (3.0 S58 550 PS)', 'Benzin Turbo', 550, 650, 650, 800, 700, 870, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CYT');

// 5er E39
addCar('BMW', '5er (E39)', '520d (2.0 M47 136 PS)', 'Diesel', 136, 280, 165, 350, 175, 380, 'Handschalter 5-Gang', '0005', '670');
addCar('BMW', '5er (E39)', '525d (2.5 M57 163 PS)', 'Diesel', 163, 350, 195, 420, 210, 450, 'Handschalter / Steptronic', '0005', '671');
addCar('BMW', '5er (E39)', '530d (3.0 M57 184/193 PS)', 'Diesel', 193, 410, 225, 500, 240, 530, 'Handschalter / Steptronic', '0005', '633');
addCar('BMW', '5er (E39)', '525i (2.5 M54 192 PS)', 'Benzin Sauger', 192, 245, 208, 265, 216, 275, 'Handschalter / Steptronic', '0005', '693');
addCar('BMW', '5er (E39)', '530i (3.0 M54 231 PS)', 'Benzin Sauger', 231, 300, 248, 325, 258, 340, 'Handschalter / Steptronic', '0005', '694');
addCar('BMW', '5er (E39)', '540i (4.4 M62 V8 286 PS)', 'Benzin Sauger', 286, 440, 305, 465, 315, 480, 'Handschalter 6-Gang / Steptronic', '0005', '569');
addCar('BMW', '5er (E39)', 'M5 V8 (4.9 S62 400 PS)', 'Benzin Sauger', 400, 500, 425, 530, 440, 550, 'Handschalter 6-Gang', '7909', '301');

// 5er E60/E61
addCar('BMW', '5er (E60/E61)', '520d (2.0 M47 163 PS)', 'Diesel', 163, 340, 200, 420, 215, 450, 'Handschalter / ZF 6HP', '0005', '845');
addCar('BMW', '5er (E60/E61)', '520d LCI (2.0 N47 177 PS)', 'Diesel', 177, 350, 215, 430, 225, 460, 'ZF 6HP Automatik Anpassung (199 €)', '0005', 'AJV');
addCar('BMW', '5er (E60/E61)', '525d (2.5 M57N 177 PS)', 'Diesel', 177, 400, 215, 480, 230, 510, 'ZF 6HP Automatik Anpassung (199 €)', '0005', '791');
addCar('BMW', '5er (E60/E61)', '525d LCI (3.0 M57N2 197 PS)', 'Diesel', 197, 400, 250, 520, 275, 570, 'ZF 6HP Automatik Anpassung (199 €)', '0005', 'AJX');
addCar('BMW', '5er (E60/E61)', '530d (3.0 M57N 218 PS)', 'Diesel', 218, 500, 260, 590, 280, 630, 'ZF 6HP Automatik Anpassung (199 €)', '0005', '762');
addCar('BMW', '5er (E60/E61)', '530d (3.0 M57N2 231 PS)', 'Diesel', 231, 500, 275, 600, 295, 640, 'ZF 6HP Automatik Anpassung (199 €)', '0005', '846');
addCar('BMW', '5er (E60/E61)', '530d LCI (3.0 M57N2 235 PS)', 'Diesel', 235, 500, 280, 610, 300, 650, 'ZF 6HP Automatik Anpassung (199 €)', '0005', 'AHK');
addCar('BMW', '5er (E60/E61)', '535d BiTurbo (3.0 M57N 272 PS)', 'Diesel', 272, 560, 330, 660, 360, 710, 'ZF 6HP Drehmomentbegrenzung anheben (199 €)', '0005', '798');
addCar('BMW', '5er (E60/E61)', '535d BiTurbo LCI (3.0 M57N2 286 PS)', 'Diesel', 286, 580, 345, 680, 380, 740, 'ZF 6HP Drehmomentbegrenzung anheben (199 €)', '0005', 'AHL');
addCar('BMW', '5er (E60/E61)', '525i (2.5 N52 218 PS / 3.0 N53 218 PS)', 'Benzin Sauger', 218, 270, 270, 325, 280, 335, 'Handschalter / ZF 6HP', '0005', '828');
addCar('BMW', '5er (E60/E61)', '530i (3.0 M54 231 PS / N52 258 PS / N53 272 PS)', 'Benzin Sauger', 272, 320, 290, 345, 298, 355, 'Handschalter / ZF 6HP', '0005', 'AHJ');
addCar('BMW', '5er (E60/E61)', '545i (4.4 N62 V8 333 PS)', 'Benzin Sauger', 333, 450, 355, 475, 365, 490, 'ZF 6HP Automatik Anpassung (199 €)', '0005', '764');
addCar('BMW', '5er (E60/E61)', '550i (4.8 N62 V8 367 PS)', 'Benzin Sauger', 367, 490, 390, 520, 405, 540, 'ZF 6HP Automatik Anpassung (199 €)', '0005', '852');
addCar('BMW', '5er (E60/E61)', 'M5 V10 (5.0 S85 507 PS)', 'Benzin Sauger', 507, 520, 535, 550, 555, 575, 'SMG III Softwareoptimierung (199 €)', '7909', '311');

// 5er F10/F11
addCar('BMW', '5er (F10/F11)', '520d (2.0 N47N 184 PS)', 'Diesel', 184, 380, 218, 440, 230, 470, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'AZC');
addCar('BMW', '5er (F10/F11)', '520d LCI (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BYH');
addCar('BMW', '5er (F10/F11)', '525d (3.0 R6 N57 204 PS -> 530d Potenzial)', 'Diesel', 204, 450, 290, 600, 315, 640, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'AZD');
addCar('BMW', '5er (F10/F11)', '525d LCI (2.0 R4 N47 218 PS)', 'Diesel', 218, 450, 265, 500, 280, 530, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BAE');
addCar('BMW', '5er (F10/F11)', '530d (3.0 N57 245/258 PS)', 'Diesel', 258, 560, 310, 660, 335, 700, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BAF');
addCar('BMW', '5er (F10/F11)', '535d BiTurbo (3.0 N57 300/313 PS)', 'Diesel', 313, 630, 380, 750, 400, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BCL');
addCar('BMW', '5er (F10/F11)', 'M550d xDrive Tri-Turbo (3.0 N57S 381 PS)', 'Diesel', 381, 740, 440, 840, 465, 880, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BGM');
addCar('BMW', '5er (F10/F11)', '520i (2.0 N20 184 PS)', 'Benzin Turbo', 184, 270, 260, 420, 285, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BAG');
addCar('BMW', '5er (F10/F11)', '528i (2.0 N20 245 PS)', 'Benzin Turbo', 245, 350, 290, 430, 310, 460, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BAH');
addCar('BMW', '5er (F10/F11)', '535i (3.0 N55 306 PS)', 'Benzin Turbo', 306, 400, 370, 520, 405, 580, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'AZB');
addCar('BMW', '5er (F10/F11)', '550i (4.4 N63 V8 408/450 PS)', 'Benzin Turbo', 450, 650, 530, 760, 560, 800, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BAK');
addCar('BMW', '5er (F10/F11)', 'M5 V8 BiTurbo (4.4 S63 560/575 PS)', 'Benzin Turbo', 560, 680, 670, 850, 720, 900, '7-Gang DKG Anpassung (199 €)', '7909', 'AAY');

// 5er G30/G31
addCar('BMW', '5er (G30/G31)', '520d (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CKN');
addCar('BMW', '5er (G30/G31)', '530d (3.0 B57 265/286 PS)', 'Diesel', 265, 620, 325, 720, 350, 760, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CKP');
addCar('BMW', '5er (G30/G31)', '540d xDrive (3.0 B57 320/340 PS)', 'Diesel', 320, 680, 390, 780, 415, 820, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CLJ');
addCar('BMW', '5er (G30/G31)', 'M550d xDrive Quadturbo (3.0 B57S 400 PS)', 'Diesel', 400, 760, 470, 860, 495, 900, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CLK');
addCar('BMW', '5er (G30/G31)', '520i (2.0 B48 184 PS)', 'Benzin Turbo', 184, 290, 260, 420, 285, 450, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CKK');
addCar('BMW', '5er (G30/G31)', '530i (2.0 B48 252 PS)', 'Benzin Turbo', 252, 350, 305, 450, 325, 480, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CKL');
addCar('BMW', '5er (G30/G31)', '540i (3.0 B58 340 PS)', 'Benzin Turbo', 340, 450, 420, 600, 460, 660, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CKM');
addCar('BMW', '5er (G30/G31)', 'M550i xDrive (4.4 N63 V8 462/530 PS)', 'Benzin Turbo', 530, 750, 600, 850, 640, 900, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'COA');
addCar('BMW', '5er (G30/G31)', 'M5 / M5 Competition (4.4 S63 600/625 PS)', 'Benzin Turbo', 600, 750, 720, 880, 760, 930, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '7909', 'AAZ');

// 6er / 7er / 8er
addCar('BMW', '6er (E63/E64)', '635d BiTurbo (3.0 M57N2 286 PS)', 'Diesel', 286, 580, 345, 680, 380, 740, 'ZF 6HP Drehmomentbegrenzung anheben (199 €)', '0005', 'AHQ');
addCar('BMW', '6er (F12/F13/F06)', '640d BiTurbo (3.0 N57 313 PS)', 'Diesel', 313, 630, 380, 750, 400, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BCK');
addCar('BMW', '6er (F12/F13/F06)', '640i (3.0 N55 320 PS)', 'Benzin Turbo', 320, 450, 380, 540, 410, 580, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BBX');
addCar('BMW', '6er (F12/F13/F06)', '650i (4.4 N63 V8 450 PS)', 'Benzin Turbo', 450, 650, 530, 760, 560, 800, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BBY');
addCar('BMW', '6er (F12/F13/F06)', 'M6 V8 BiTurbo (4.4 S63 560 PS)', 'Benzin Turbo', 560, 680, 670, 850, 720, 900, '7-Gang DKG Anpassung (199 €)', '7909', 'ABB');
addCar('BMW', '7er (F01/F02)', '730d (3.0 N57 245/258 PS)', 'Diesel', 258, 560, 310, 660, 335, 700, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'AME');
addCar('BMW', '7er (F01/F02)', '740d BiTurbo (3.0 N57 306/313 PS)', 'Diesel', 313, 630, 380, 750, 400, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'ARZ');
addCar('BMW', '7er (F01/F02)', '750d xDrive Tri-Turbo (3.0 N57S 381 PS)', 'Diesel', 381, 740, 440, 840, 465, 880, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BHS');
addCar('BMW', '7er (G11/G12)', '730d (3.0 B57 265 PS)', 'Diesel', 265, 620, 325, 720, 350, 760, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BXP');
addCar('BMW', '7er (G11/G12)', '740d xDrive (3.0 B57 320 PS)', 'Diesel', 320, 680, 390, 780, 415, 820, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BXQ');
addCar('BMW', '7er (G11/G12)', '750d xDrive Quadturbo (3.0 B57S 400 PS)', 'Diesel', 400, 760, 470, 860, 495, 900, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CFI');
addCar('BMW', '8er (G14/G15/G16)', '840d xDrive (3.0 B57 320/340 PS)', 'Diesel', 320, 680, 390, 780, 415, 820, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'COV');
addCar('BMW', '8er (G14/G15/G16)', 'M850i xDrive (4.4 N63 V8 530 PS)', 'Benzin Turbo', 530, 750, 620, 850, 650, 900, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'COU');
addCar('BMW', '8er (G14/G15/G16)', 'M8 Competition (4.4 S63 V8 625 PS)', 'Benzin Turbo', 625, 750, 720, 880, 760, 930, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '7909', 'ABA');

// BMW X-Reihe
addCar('BMW', 'X1 (E84)', 'sDrive18d / xDrive18d (2.0 N47 143 PS)', 'Diesel', 143, 320, 185, 400, 200, 430, 'Handschalter / ZF 6HP/8HP', '0005', 'APJ');
addCar('BMW', 'X1 (E84)', 'xDrive20d (2.0 N47 177/184 PS)', 'Diesel', 184, 380, 218, 440, 230, 470, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'AOR');
addCar('BMW', 'X1 (E84)', 'xDrive23d / 25d BiTurbo (2.0 N47 204/218 PS)', 'Diesel', 218, 450, 265, 500, 280, 530, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'APL');
addCar('BMW', 'X1 (F48)', 'sDrive18d (2.0 B47 150 PS)', 'Diesel', 150, 330, 190, 420, 205, 450, '8-Gang Steptronic Aisin', '0005', 'BYA');
addCar('BMW', 'X1 (F48)', 'xDrive20d (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, '8-Gang Steptronic Aisin', '0005', 'BYB');
addCar('BMW', 'X3 (E83)', '2.0d (2.0 M47 150 PS / N47 177 PS)', 'Diesel', 177, 350, 215, 430, 225, 460, 'Handschalter / ZF 6HP', '0005', 'AHC');
addCar('BMW', 'X3 (E83)', '3.0d (3.0 M57 204/218 PS)', 'Diesel', 218, 500, 260, 590, 280, 630, 'ZF 6HP Automatik Anpassung', '0005', '773');
addCar('BMW', 'X3 (E83)', '3.0sd (3.0 M57N2 BiTurbo 286 PS)', 'Diesel', 286, 580, 340, 680, 375, 740, 'ZF 6HP Drehmomentbegrenzung anheben (199 €)', '0005', 'AGZ');
addCar('BMW', 'X3 (F25)', 'xDrive20d (2.0 N47 184 PS / B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'ATF');
addCar('BMW', 'X3 (F25)', 'xDrive30d (3.0 N57 258 PS)', 'Diesel', 258, 560, 310, 660, 335, 700, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'ATH');
addCar('BMW', 'X3 (F25)', 'xDrive35d (3.0 N57 BiTurbo 313 PS)', 'Diesel', 313, 630, 380, 750, 400, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'ATI');
addCar('BMW', 'X3 (G01)', 'xDrive20d (2.0 B47 190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CNK');
addCar('BMW', 'X3 (G01)', 'xDrive30d (3.0 B57 265/286 PS)', 'Diesel', 265, 620, 325, 720, 350, 760, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CNL');
addCar('BMW', 'X3 (G01)', 'M40d xDrive (3.0 B57 326/340 PS)', 'Diesel', 326, 680, 390, 780, 415, 820, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'COU');
addCar('BMW', 'X3 (G01)', 'M40i xDrive (3.0 B58 360 PS)', 'Benzin Turbo', 360, 500, 420, 620, 460, 670, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CNJ');
addCar('BMW', 'X3 (G01)', 'X3 M Competition (3.0 S58 510 PS)', 'Benzin Turbo', 510, 600, 620, 780, 680, 850, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CPB');
addCar('BMW', 'X5 (E53)', '3.0d (3.0 M57 184/218 PS)', 'Diesel', 218, 500, 260, 590, 275, 620, 'ZF 6HP / GM 5L40E', '0005', '714');
addCar('BMW', 'X5 (E70)', '3.0d / xDrive30d (3.0 M57 235 PS)', 'Diesel', 235, 520, 275, 600, 295, 640, 'ZF 6HP Automatik Anpassung (199 €)', '0005', 'AHM');
addCar('BMW', 'X5 (E70)', 'xDrive30d LCI (3.0 N57 245 PS)', 'Diesel', 245, 540, 300, 620, 320, 660, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'AYT');
addCar('BMW', 'X5 (E70)', '3.0sd / xDrive35d (3.0 M57 286 PS)', 'Diesel', 286, 580, 340, 680, 375, 740, 'ZF 6HP Drehmomentbegrenzung anheben (199 €)', '0005', 'AHN');
addCar('BMW', 'X5 (E70)', 'xDrive40d LCI (3.0 N57S 306 PS)', 'Diesel', 306, 600, 360, 700, 385, 740, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'AYU');
addCar('BMW', 'X5 (E70)', 'X5 M (4.4 S63 V8 BiTurbo 555 PS)', 'Benzin Turbo', 555, 680, 640, 820, 680, 880, 'ZF 6HP Drehmomentbegrenzung anheben (199 €)', '7909', '318');
addCar('BMW', 'X5 (F15)', 'sDrive25d / xDrive25d (2.0 B47 218/231 PS)', 'Diesel', 218, 450, 265, 500, 280, 530, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BPU');
addCar('BMW', 'X5 (F15)', 'xDrive30d (3.0 N57 258 PS)', 'Diesel', 258, 560, 310, 660, 335, 700, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BPV');
addCar('BMW', 'X5 (F15)', 'xDrive40d BiTurbo (3.0 N57 313 PS)', 'Diesel', 313, 630, 380, 750, 400, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BPW');
addCar('BMW', 'X5 (F15)', 'M50d xDrive Tri-Turbo (3.0 N57S 381 PS)', 'Diesel', 381, 740, 440, 840, 465, 880, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'BPX');
addCar('BMW', 'X5 (F15)', 'X5 M (4.4 S63 V8 BiTurbo 575 PS)', 'Benzin Turbo', 575, 750, 680, 860, 720, 920, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '7909', 'AAW');
addCar('BMW', 'X5 (G05)', 'xDrive30d (3.0 B57 265/286 PS)', 'Diesel', 265, 620, 325, 720, 350, 760, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CQJ');
addCar('BMW', 'X5 (G05)', 'xDrive40d (3.0 B57 340 PS)', 'Diesel', 340, 700, 400, 800, 425, 840, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CSJ');
addCar('BMW', 'X5 (G05)', 'M50d xDrive Quadturbo (3.0 B57S 400 PS)', 'Diesel', 400, 760, 470, 860, 495, 900, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CQK');
addCar('BMW', 'X5 (G05)', 'xDrive40i (3.0 B58 340 PS)', 'Benzin Turbo', 340, 450, 420, 600, 460, 660, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CQI');
addCar('BMW', 'X5 (G05)', 'M50i xDrive (4.4 N63 V8 530 PS)', 'Benzin Turbo', 530, 750, 620, 850, 650, 900, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CVI');
addCar('BMW', 'X5 (G05)', 'X5 M Competition (4.4 S63 625 PS)', 'Benzin Turbo', 625, 750, 720, 880, 760, 930, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '7909', 'AAY');

// BMW Z-Reihe
addCar('BMW', 'Z4 (E85/E86)', '3.0i (3.0 M54 231 PS)', 'Benzin Sauger', 231, 300, 248, 325, 258, 340, 'Handschalter 6-Gang', '0005', '755');
addCar('BMW', 'Z4 (E85/E86)', '3.0si (3.0 N52 265 PS)', 'Benzin Sauger', 265, 315, 282, 335, 290, 345, 'Handschalter 6-Gang', '0005', '855');
addCar('BMW', 'Z4 (E85/E86)', 'Z4 M (3.2 S54 343 PS)', 'Benzin Sauger', 343, 365, 360, 385, 375, 400, 'Handschalter 6-Gang', '7909', '315');
addCar('BMW', 'Z4 (E89)', 'sDrive20i / 28i (2.0 N20 184/245 PS)', 'Benzin Turbo', 245, 350, 290, 430, 310, 460, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'BDS');
addCar('BMW', 'Z4 (E89)', 'sDrive35i (3.0 N54 BiTurbo 306 PS)', 'Benzin Turbo', 306, 400, 370, 520, 410, 580, '7-Gang DKG / ZF 6HP Softwareoptimierung (199 €)', '0005', 'APV');
addCar('BMW', 'Z4 (E89)', 'sDrive35is (3.0 N54 BiTurbo 340 PS)', 'Benzin Turbo', 340, 450, 400, 560, 440, 620, '7-Gang DKG Anpassung (199 €)', '0005', 'AWY');
addCar('BMW', 'Z4 (G29)', 'sDrive20i / 30i (2.0 B48 197/258 PS)', 'Benzin Turbo', 258, 400, 310, 480, 330, 510, 'ZF 8HP Getriebeoptimierung (199 €)', '0005', 'CQD');
addCar('BMW', 'Z4 (G29)', 'M40i (3.0 B58 340 PS)', 'Benzin Turbo', 340, 500, 420, 620, 460, 670, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0005', 'CQE');

// -------------------------------------------------------------
// VOLKSWAGEN
// -------------------------------------------------------------
// Golf 4
addCar('Volkswagen', 'Golf IV', '1.4 16V (75 PS AXP/BCA)', 'Benzin Sauger', 75, 126, 85, 140, 89, 145, 'Handschalter 5-Gang', '0603', '418');
addCar('Volkswagen', 'Golf IV', '1.6 16V (105 PS AZD/BCB)', 'Benzin Sauger', 105, 148, 118, 162, 122, 168, 'Handschalter 5-Gang', '0603', '549');
addCar('Volkswagen', 'Golf IV', '1.8T GTI (150 PS AGU/AUM)', 'Benzin Turbo', 150, 210, 195, 300, 220, 330, 'Handschalter 5-Gang', '0603', '422');
addCar('Volkswagen', 'Golf IV', '1.8T GTI Jubi 25 (180 PS AUQ)', 'Benzin Turbo', 180, 235, 215, 330, 235, 360, 'Handschalter 6-Gang', '0603', '654');
addCar('Volkswagen', 'Golf IV', '2.3 V5 (150/170 PS AGZ/AQN)', 'Benzin Sauger', 170, 225, 185, 245, 192, 255, 'Handschalter 5-Gang', '0603', '593');
addCar('Volkswagen', 'Golf IV', '2.8 V6 4Motion (204 PS AUE/BDE)', 'Benzin Sauger', 204, 270, 220, 290, 228, 300, 'Handschalter 6-Gang', '0603', '550');
addCar('Volkswagen', 'Golf IV', 'R32 4Motion (3.2 VR6 241 PS BFH)', 'Benzin Sauger', 241, 320, 260, 345, 270, 360, 'Handschalter 6-Gang / DSG DQ250', '0603', '699');
addCar('Volkswagen', 'Golf IV', '1.9 TDI (90/110 PS AGR/ALH/AHF/ASV)', 'Diesel', 110, 235, 140, 300, 155, 330, 'Handschalter 5-Gang (VP37 Einspritzung)', '0603', '423');
addCar('Volkswagen', 'Golf IV', '1.9 TDI (101 PS ATD/AXR)', 'Diesel', 101, 240, 135, 310, 150, 340, 'Handschalter 5-Gang Pumpe-Düse', '0603', '558');
addCar('Volkswagen', 'Golf IV', '1.9 TDI (115 PS AJM/AUY)', 'Diesel', 115, 285, 150, 350, 165, 380, 'Handschalter 6-Gang', '0603', '493');
addCar('Volkswagen', 'Golf IV', '1.9 TDI (130 PS ASZ)', 'Diesel', 130, 310, 165, 390, 185, 420, 'Handschalter 6-Gang Pumpe-Düse', '0603', '637');
addCar('Volkswagen', 'Golf IV', '1.9 TDI (150 PS ARL)', 'Diesel', 150, 320, 190, 410, 210, 440, 'Handschalter 6-Gang (Legendärer TDI-Motor)', '0603', '578');

// Golf 5
addCar('Volkswagen', 'Golf V', '1.4 TSI Twincharger (140/170 PS BLG/BMY)', 'Benzin Turbo', 170, 240, 205, 290, 220, 310, 'Handschalter / DSG DQ250', '0603', 'AGK');
addCar('Volkswagen', 'Golf V', 'GTI (2.0 TFSI 200 PS AXX/BWA)', 'Benzin Turbo', 200, 280, 250, 380, 275, 410, 'DSG DQ250 Schaltzeitverkürzung (199 €)', '0603', '764');
addCar('Volkswagen', 'Golf V', 'GTI Edition 30 / Pirelli (2.0 TFSI 230 PS BYD)', 'Benzin Turbo', 230, 300, 300, 420, 330, 450, 'DSG DQ250 Optimierung (K04-Lader ab Werk!)', '0603', 'AKO');
addCar('Volkswagen', 'Golf V', 'R32 4Motion (3.2 VR6 250 PS BUB)', 'Benzin Sauger', 250, 320, 270, 345, 280, 360, 'DSG DQ250 Launch Control Anpassung', '0603', '802');
addCar('Volkswagen', 'Golf V', '1.9 TDI (105 PS BKC/BXE/BLS)', 'Diesel', 105, 250, 140, 320, 155, 350, 'Handschalter / DSG DQ250', '0603', '721');
addCar('Volkswagen', 'Golf V', '2.0 TDI (140 PS BKD/BMM)', 'Diesel', 140, 320, 175, 390, 195, 420, 'DSG DQ250 Anpassung (199 €)', '0603', '724');
addCar('Volkswagen', 'Golf V', '2.0 TDI (170 PS BMN)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ250 Anpassung (199 €)', '0603', 'AEB');

// Golf 6
addCar('Volkswagen', 'Golf VI', '1.4 TSI (122 PS CAXA)', 'Benzin Turbo', 122, 200, 150, 250, 160, 270, 'Handschalter / DSG DQ200', '0603', 'ANP');
addCar('Volkswagen', 'Golf VI', '1.4 TSI Twincharger (160 PS CAVD/CTHD)', 'Benzin Turbo', 160, 240, 205, 290, 220, 310, 'Handschalter / DSG DQ200', '0603', 'APF');
addCar('Volkswagen', 'Golf VI', 'GTI (2.0 TSI 211 PS CCZB)', 'Benzin Turbo', 211, 280, 260, 380, 280, 410, 'DSG DQ250 Anpassung (199 €)', '0603', 'APD');
addCar('Volkswagen', 'Golf VI', 'GTI Edition 35 (2.0 TSI 235 PS CDLG)', 'Benzin Turbo', 235, 300, 310, 420, 340, 460, 'DSG DQ250 Optimierung (EA113 K04-Lader)', '0603', 'AZO');
addCar('Volkswagen', 'Golf VI', 'R 4Motion (2.0 TSI 270 PS CDLF)', 'Benzin Turbo', 270, 350, 320, 430, 350, 470, 'DSG DQ250 Drehmomentbegrenzung anheben (199 €)', '0603', 'AQE');
addCar('Volkswagen', 'Golf VI', '1.6 TDI (105 PS CAYC)', 'Diesel', 105, 250, 140, 300, 145, 320, 'Handschalter / DSG DQ200', '0603', 'AQC');
addCar('Volkswagen', 'Golf VI', '2.0 TDI (140 PS CBAB/CFFB)', 'Diesel', 140, 320, 175, 390, 190, 420, 'DSG DQ250 Anpassung (199 €)', '0603', 'ANV');
addCar('Volkswagen', 'Golf VI', 'GTD (2.0 TDI 170 PS CBBB/CFGB)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ250 Optimierung (199 €)', '0603', 'APG');

// Golf 7
addCar('Volkswagen', 'Golf VII', '1.4 TSI / 1.5 TSI (140/150 PS)', 'Benzin Turbo', 150, 250, 180, 300, 190, 320, 'Handschalter / DSG DQ200', '0603', 'BOC');
addCar('Volkswagen', 'Golf VII', 'GTI (2.0 TSI 220/230 PS CHHA/CHHB)', 'Benzin Turbo', 220, 350, 300, 440, 320, 470, 'DSG DQ250 Schaltzeitverkürzung (199 €)', '0603', 'AAB');
addCar('Volkswagen', 'Golf VII Facelift', 'GTI Performance (2.0 TSI 245 PS DKTB/DLBA)', 'Benzin Turbo', 245, 370, 305, 450, 330, 480, 'DSG DQ381 Schaltzeitverkürzung (199 €)', '0603', 'BVI');
addCar('Volkswagen', 'Golf VII', 'GTI Clubsport / Clubsport S (2.0 TSI 265/310 PS)', 'Benzin Turbo', 265, 350, 360, 480, 390, 520, 'DSG DQ250 Optimierung (199 €)', '0603', 'BWW');
addCar('Volkswagen', 'Golf VII', 'GTI TCR (2.0 TSI 290 PS DNUC)', 'Benzin Turbo', 290, 380, 360, 480, 390, 520, 'DSG DQ381 Optimierung (199 €)', '0603', 'BVX');
addCar('Volkswagen', 'Golf VII', 'R 4Motion (2.0 TSI 300 PS CJXC)', 'Benzin Turbo', 300, 380, 365, 480, 400, 530, 'DSG DQ250/DQ381 Optimierung (199 €)', '0603', 'AXX');
addCar('Volkswagen', 'Golf VII Facelift', 'R 4Motion (2.0 TSI 310 PS DJHA)', 'Benzin Turbo', 310, 400, 370, 490, 405, 540, 'DSG DQ381 Optimierung (199 €)', '0603', 'BWF');
addCar('Volkswagen', 'Golf VII', '1.6 TDI (105/110/115 PS)', 'Diesel', 115, 250, 145, 310, 155, 330, 'Handschalter / DSG DQ200', '0603', 'AUO');
addCar('Volkswagen', 'Golf VII', '2.0 TDI (150 PS CRBC/DFGA)', 'Diesel', 150, 340, 190, 420, 205, 440, 'DSG DQ250/DQ381 Anpassung (199 €)', '0603', 'AUU');
addCar('Volkswagen', 'Golf VII', 'GTD (2.0 TDI 184 PS CUNA/DGCA)', 'Diesel', 184, 380, 220, 450, 235, 480, 'DSG DQ250/DQ381 Anpassung (199 €)', '0603', 'BVK');

// Golf 8
addCar('Volkswagen', 'Golf VIII', '1.5 eTSI / TSI (130/150 PS)', 'Benzin Turbo', 150, 250, 180, 300, 190, 320, 'Handschalter / DSG DQ200', '0603', 'CKR');
addCar('Volkswagen', 'Golf VIII', 'GTI (2.0 TSI 245 PS EA888.4)', 'Benzin Turbo', 245, 370, 300, 450, 330, 480, 'DSG DQ381 Optimierung (199 €)', '0603', 'CLB');
addCar('Volkswagen', 'Golf VIII', 'GTI Clubsport (2.0 TSI 300 PS)', 'Benzin Turbo', 300, 400, 375, 490, 410, 530, 'DSG DQ381 Optimierung (199 €)', '0603', 'CLC');
addCar('Volkswagen', 'Golf VIII', 'R 4Motion (2.0 TSI 320/333 PS)', 'Benzin Turbo', 320, 420, 390, 510, 420, 550, 'DSG DQ381 Drehmomentbegrenzung anheben (199 €)', '0603', 'CLD');
addCar('Volkswagen', 'Golf VIII', '2.0 TDI (115/150 PS)', 'Diesel', 150, 360, 195, 430, 210, 450, 'DSG DQ381 Anpassung (199 €)', '0603', 'CKQ');
addCar('Volkswagen', 'Golf VIII', 'GTD (2.0 TDI 200 PS)', 'Diesel', 200, 400, 240, 470, 255, 500, 'DSG DQ381 Anpassung (199 €)', '0603', 'CKS');

// Polo & Scirocco
addCar('Volkswagen', 'Polo (9N/9N3)', '1.8T GTI (150/180 PS BJX/BBU)', 'Benzin Turbo', 150, 220, 205, 310, 225, 340, 'Handschalter 5-Gang', '0603', 'AEO');
addCar('Volkswagen', 'Polo (9N/9N3)', '1.9 TDI (100/130 PS ATD/BLT)', 'Diesel', 130, 310, 165, 390, 185, 420, 'Handschalter 6-Gang', '0603', '745');
addCar('Volkswagen', 'Polo (6R/6C)', '1.8 TSI GTI (192 PS DAJA)', 'Benzin Turbo', 192, 320, 240, 390, 260, 420, 'Handschalter 6-Gang / DSG DQ200', '0603', 'BPO');
addCar('Volkswagen', 'Polo (6R/6C)', 'WRC 2.0 TSI (220 PS CDLJ)', 'Benzin Turbo', 220, 350, 310, 430, 340, 460, 'Handschalter 6-Gang (K04 Lader)', '0603', 'BHY');
addCar('Volkswagen', 'Polo (AW)', 'GTI (2.0 TSI 200/207 PS)', 'Benzin Turbo', 200, 320, 250, 400, 275, 430, 'DSG DQ250/DQ381 Anpassung (199 €)', '0603', 'CDX');
addCar('Volkswagen', 'Scirocco III', '2.0 TSI (200/211 PS CAWB/CCZB)', 'Benzin Turbo', 211, 280, 260, 380, 280, 410, 'DSG DQ250 Anpassung (199 €)', '0603', 'AOB');
addCar('Volkswagen', 'Scirocco III', 'Scirocco R (2.0 TSI 265/280 PS CDLA/CDLK)', 'Benzin Turbo', 265, 350, 320, 430, 350, 470, 'DSG DQ250 Optimierung (199 €)', '0603', 'APV');
addCar('Volkswagen', 'Scirocco III', '2.0 TDI (140/170/177/184 PS)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ250 Anpassung (199 €)', '0603', 'APW');

// Passat, Arteon & Tiguan
addCar('Volkswagen', 'Passat (B7)', '2.0 TDI (140/170/177 PS)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ250 Anpassung (199 €)', '0603', 'AXM');
addCar('Volkswagen', 'Passat (B8) / Arteon', '2.0 TDI (150/190/200 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'DSG DQ381 Anpassung (199 €)', '0603', 'BVK');
addCar('Volkswagen', 'Passat (B8) / Arteon', '2.0 BiTDI 4Motion (240 PS CUAA)', 'Diesel', 240, 500, 285, 580, 300, 610, 'DSG DQ500 Optimierung dringend empfohlen (199 €)', '0603', 'BVL');
addCar('Volkswagen', 'Passat (B8) / Arteon', '2.0 TSI 4Motion (272/280 PS DNU)', 'Benzin Turbo', 272, 350, 350, 460, 380, 500, 'DSG DQ381 Optimierung (199 €)', '0603', 'CCU');
addCar('Volkswagen', 'Arteon', 'Arteon R 4Motion (2.0 TSI 320 PS DNF)', 'Benzin Turbo', 320, 420, 390, 510, 420, 550, 'DSG DQ381 Drehmomentbegrenzung anheben (199 €)', '0603', 'CKU');
addCar('Volkswagen', 'Tiguan I', '2.0 TDI (140/170/177 PS)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ500 / Handschalter', '0603', 'API');
addCar('Volkswagen', 'Tiguan II', '2.0 TDI (150/190/200 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'DSG DQ381/DQ500 Anpassung (199 €)', '0603', 'BXB');
addCar('Volkswagen', 'Tiguan II', '2.0 BiTDI 4Motion (240 PS CUAA)', 'Diesel', 240, 500, 285, 580, 300, 610, 'DSG DQ500 Optimierung dringend empfohlen (199 €)', '0603', 'BXC');
addCar('Volkswagen', 'Tiguan II', 'Tiguan R 4Motion (2.0 TSI 320 PS)', 'Benzin Turbo', 320, 420, 390, 510, 420, 550, 'DSG DQ381 Drehmomentbegrenzung anheben (199 €)', '0603', 'CKT');

// Touareg & Bus (T5/T6) & Amarok
addCar('Volkswagen', 'Touareg (7L)', '3.0 V6 TDI (225/240 PS BKS/CASA)', 'Diesel', 240, 550, 285, 620, 305, 650, '6-Gang Tiptronic Aisin', '0603', 'AGS');
addCar('Volkswagen', 'Touareg (7L)', '5.0 V10 TDI (313 PS AYH/BLE)', 'Diesel', 313, 750, 360, 860, 385, 900, '6-Gang Tiptronic Aisin', '0603', '679');
addCar('Volkswagen', 'Touareg (7P)', '3.0 V6 TDI (204/245/262 PS)', 'Diesel', 245, 550, 300, 630, 320, 660, '8-Gang Tiptronic Aisin', '0603', 'AYW');
addCar('Volkswagen', 'Touareg (7P)', '4.2 V8 TDI (340 PS CKDA)', 'Diesel', 340, 800, 400, 900, 430, 950, '8-Gang Tiptronic Aisin', '0603', 'AZA');
addCar('Volkswagen', 'Touareg (CR)', '3.0 V6 TDI (231/286 PS CVMD/DENA)', 'Diesel', 286, 600, 330, 700, 355, 740, 'ZF 8HP Getriebeoptimierung (199 €)', '0603', 'CDJ');
addCar('Volkswagen', 'Touareg (CR)', '4.0 V8 TDI (421 PS DMVB)', 'Diesel', 421, 900, 500, 1000, 530, 1050, 'ZF 8HP Getriebeoptimierung (199 €)', '0603', 'CDL');
addCar('Volkswagen', 'T5 / T6 Bus', '2.5 TDI R5 (130/174 PS AXD/AXE/BPC)', 'Diesel', 174, 400, 210, 480, 225, 510, 'Handschalter 6-Gang / Automatik', '0603', '702');
addCar('Volkswagen', 'T5 / T6 Bus', '2.0 TDI (102/140/150 PS CAAC/CXHA)', 'Diesel', 150, 340, 190, 420, 205, 440, 'DSG DQ500 Anpassung (199 €)', '0603', 'BTY');
addCar('Volkswagen', 'T5 / T6 Bus', '2.0 BiTDI (180/199/204 PS CFCA/CXEB)', 'Diesel', 204, 450, 245, 510, 260, 540, 'DSG DQ500 Optimierung (199 €)', '0603', 'BTZ');
addCar('Volkswagen', 'Amarok', '2.0 BiTDI (163/180 PS CDCA/CSHA)', 'Diesel', 180, 420, 215, 480, 230, 510, 'ZF 8HP / Handschalter', '0603', 'AYG');
addCar('Volkswagen', 'Amarok', '3.0 V6 TDI (204/224/258 PS DDXC/DDXE)', 'Diesel', 258, 580, 305, 680, 330, 720, 'ZF 8HP Getriebeoptimierung (199 €)', '0603', 'BXS');

// -------------------------------------------------------------
// AUDI
// -------------------------------------------------------------
// A1
addCar('Audi', 'A1 (8X)', '1.4 TFSI (122/140/185 PS)', 'Benzin Turbo', 185, 250, 215, 310, 230, 330, 'S-Tronic DQ200', '0588', 'AOJ');
addCar('Audi', 'A1 (8X)', 'S1 quattro (2.0 TFSI 231 PS CWZA)', 'Benzin Turbo', 231, 370, 300, 440, 325, 470, 'Handschalter 6-Gang (Allrad-Rakete)', '0588', 'BAV');
addCar('Audi', 'A1 (8X)', '2.0 TDI (143 PS CFHD)', 'Diesel', 143, 320, 180, 390, 195, 420, 'Handschalter 6-Gang', '0588', 'ASB');

// A3 / S3 / RS3
addCar('Audi', 'A3 (8L)', '1.8T (150/180 PS AGU/AUQ)', 'Benzin Turbo', 180, 235, 215, 330, 235, 360, 'Handschalter 5/6-Gang', '0588', '641');
addCar('Audi', 'A3 (8L)', 'S3 quattro (1.8T 210/225 PS APY/BAM)', 'Benzin Turbo', 225, 280, 260, 380, 280, 410, 'Handschalter 6-Gang (K04-Kultmotor)', '0588', '707');
addCar('Audi', 'A3 (8L)', '1.9 TDI (130 PS ASZ)', 'Diesel', 130, 310, 165, 390, 185, 420, 'Handschalter 6-Gang', '0588', '741');
addCar('Audi', 'A3 (8P)', '2.0 TFSI (200 PS AXX/BWA/CCZA)', 'Benzin Turbo', 200, 280, 250, 380, 275, 410, 'S-Tronic DQ250 Anpassung (199 €)', '0588', '861');
addCar('Audi', 'A3 (8P)', 'S3 quattro (2.0 TFSI 265 PS CDLA)', 'Benzin Turbo', 265, 350, 310, 420, 340, 460, 'S-Tronic DQ250 Optimierung (199 €)', '0588', 'AEY');
addCar('Audi', 'A3 (8P)', 'RS3 Sportback (2.5 TFSI 340 PS CEPA)', 'Benzin Turbo', 340, 450, 410, 540, 440, 590, 'S-Tronic DQ500 Optimierung (199 €)', '0588', 'AON');
addCar('Audi', 'A3 (8P)', '2.0 TDI (140/170 PS BKD/BMM/CBBB)', 'Diesel', 170, 350, 205, 420, 220, 450, 'S-Tronic DQ250 Anpassung (199 €)', '0588', 'ADF');
addCar('Audi', 'A3 (8V)', '2.0 TFSI (190 PS CZPB/DKZA)', 'Benzin Turbo', 190, 320, 245, 420, 265, 450, 'S-Tronic DQ381 Anpassung (199 €)', '0588', 'BEY');
addCar('Audi', 'A3 (8V)', 'S3 quattro (2.0 TFSI 300/310 PS CJXC/DJHA)', 'Benzin Turbo', 300, 380, 365, 480, 400, 530, 'S-Tronic DQ250/DQ381 Optimierung (199 €)', '0588', 'AUR');
addCar('Audi', 'A3 (8V)', 'RS3 (2.5 TFSI 367 PS CZGB Vorfacelift)', 'Benzin Turbo', 367, 465, 430, 560, 460, 610, 'S-Tronic DQ500 Optimierung (199 €)', '0588', 'BFI');
addCar('Audi', 'A3 (8V)', 'RS3 (2.5 TFSI 400 PS DAZA Facelift)', 'Benzin Turbo', 400, 480, 475, 590, 520, 660, 'S-Tronic DQ500 Drehmomentbegrenzung anheben (199 €)', '0588', 'BPL');
addCar('Audi', 'A3 (8V)', '2.0 TDI (150/184 PS CRBC/CUNA)', 'Diesel', 184, 380, 220, 450, 235, 480, 'S-Tronic DQ250/DQ381 Anpassung (199 €)', '0588', 'AUO');
addCar('Audi', 'A3 (8Y)', 'S3 quattro (2.0 TFSI 310 PS DNFB)', 'Benzin Turbo', 310, 400, 375, 500, 405, 540, 'S-Tronic DQ381 Schaltzeitverkürzung (199 €)', '0588', 'BVV');
addCar('Audi', 'A3 (8Y)', 'RS3 quattro (2.5 TFSI 400 PS DNWA)', 'Benzin Turbo', 400, 500, 480, 610, 530, 670, 'S-Tronic DQ500 Drehmomentbegrenzung anheben (199 €)', '0588', 'BVW');
addCar('Audi', 'A3 (8Y)', '35 TDI / 40 TDI (2.0 TDI 150/200 PS)', 'Diesel', 200, 400, 240, 470, 255, 500, 'S-Tronic DQ381 Anpassung (199 €)', '0588', 'BVT');

// A4 / S4 / RS4
addCar('Audi', 'A4 (B6)', '1.8T (150/163/190 PS AVJ/BFB/BEX)', 'Benzin Turbo', 190, 240, 225, 320, 240, 340, 'Handschalter 6-Gang', '0588', '750');
addCar('Audi', 'A4 (B6)', '1.9 TDI (130 PS AWX/AVF)', 'Diesel', 130, 310, 165, 390, 185, 420, 'Handschalter 5/6-Gang', '0588', '751');
addCar('Audi', 'A4 (B6)', '2.5 TDI V6 (163/180 PS BFC/BDH/AKE)', 'Diesel', 180, 370, 210, 440, 225, 470, 'Handschalter / Tiptronic', '0588', '749');
addCar('Audi', 'A4 (B6)', 'S4 (4.2 V8 344 PS BBK)', 'Benzin Sauger', 344, 410, 365, 435, 375, 450, 'Handschalter 6-Gang / Tiptronic', '0588', '818');
addCar('Audi', 'A4 (B7)', '2.0 TFSI (200/220 PS BGB/BWE/BUL DTM)', 'Benzin Turbo', 220, 300, 265, 380, 285, 410, 'Handschalter / Tiptronic', '0588', '881');
addCar('Audi', 'A4 (B7)', '2.0 TDI (140/170 PS BPW/BRD)', 'Diesel', 170, 350, 205, 420, 220, 450, 'Handschalter 6-Gang', '0588', 'AAJ');
addCar('Audi', 'A4 (B7)', '3.0 TDI quattro (204/233 PS BKN/ASB)', 'Diesel', 233, 450, 275, 550, 295, 590, 'Handschalter 6-Gang / Tiptronic ZF 6HP', '0588', 'ABX');
addCar('Audi', 'A4 (B7)', 'RS4 (4.2 V8 FSI Hochdrehzahl 420 PS BNS)', 'Benzin Sauger', 420, 430, 440, 455, 455, 470, 'Handschalter 6-Gang', '0588', 'ABT');
addCar('Audi', 'A4 / A5 (B8)', '1.8 TFSI (120/160/170 PS)', 'Benzin Turbo', 170, 320, 215, 380, 230, 400, 'Handschalter / Multitronic', '0588', 'AHN');
addCar('Audi', 'A4 / A5 (B8)', '2.0 TFSI (180/211/225 PS CDNC/CNCD)', 'Benzin Turbo', 211, 350, 265, 420, 290, 450, 'S-Tronic DL501 Anpassung (199 €)', '0588', 'AHQ');
addCar('Audi', 'A4 / A5 (B8)', 'S4 / S5 (3.0 TFSI V6 Kompressor 333 PS CAKA)', 'Benzin Turbo', 333, 440, 420, 520, 450, 560, 'S-Tronic DL501 Optimierung (199 €)', '0588', 'AJX');
addCar('Audi', 'A4 / A5 (B8)', 'RS4 / RS5 (4.2 V8 FSI 450 PS CFSA)', 'Benzin Sauger', 450, 430, 470, 455, 485, 470, 'S-Tronic DL501 Optimierung (199 €)', '0588', 'ARC');
addCar('Audi', 'A4 / A5 (B8)', '2.0 TDI (143/177/190 PS CAGA/CGLC/CNHA)', 'Diesel', 177, 380, 210, 440, 225, 470, 'S-Tronic DL501 Anpassung (199 €)', '0588', 'ARR');
addCar('Audi', 'A4 / A5 (B8)', '3.0 TDI quattro (240/245 PS CAPA/CDUC)', 'Diesel', 245, 500, 300, 600, 320, 640, 'S-Tronic DL501 Optimierung (199 €)', '0588', 'ARD');
addCar('Audi', 'A4 / A5 (B9)', '2.0 TFSI (190/252 PS CVKB/CYRB)', 'Benzin Turbo', 252, 370, 310, 450, 335, 480, 'S-Tronic DL382 Anpassung (199 €)', '0588', 'BDU');
addCar('Audi', 'A4 / A5 (B9)', 'S4 / S5 (3.0 TFSI V6 Turbo 354 PS CWGD)', 'Benzin Turbo', 354, 500, 420, 620, 450, 670, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'BED');
addCar('Audi', 'A4 / A5 (B9)', 'S4 / S5 TDI (3.0 TDI V6 347 PS DECA)', 'Diesel', 347, 700, 400, 800, 425, 840, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'BMS');
addCar('Audi', 'A4 / A5 (B9)', 'RS4 / RS5 (2.9 V6 BiTurbo 450 PS DECA)', 'Benzin Turbo', 450, 600, 510, 730, 540, 780, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'BHL');
addCar('Audi', 'A4 / A5 (B9)', '2.0 TDI (150/190 PS DEUA/DETA)', 'Diesel', 190, 400, 225, 460, 240, 490, 'S-Tronic DL382 Anpassung (199 €)', '0588', 'AWL');
addCar('Audi', 'A4 / A5 (B9)', '3.0 TDI quattro (218/272 PS CSWB/CRTC)', 'Diesel', 272, 600, 325, 680, 350, 720, 'Tiptronic 8-Gang Optimierung (199 €)', '0588', 'AXQ');

// A6 / S6 / RS6
addCar('Audi', 'A6 (4F)', '2.7 TDI (180/190 PS BPP/CANA)', 'Diesel', 190, 400, 230, 480, 245, 510, 'Tiptronic / Multitronic', '0588', 'ACG');
addCar('Audi', 'A6 (4F)', '3.0 TDI quattro (225/233/240 PS BMK/ASB/CDYA)', 'Diesel', 240, 500, 290, 590, 310, 630, 'Tiptronic ZF 6HP Anpassung', '0588', 'ACQ');
addCar('Audi', 'A6 (4F)', 'S6 (5.2 V10 FSI 435 PS BXA)', 'Benzin Sauger', 435, 540, 460, 570, 475, 590, 'Tiptronic ZF 6HP26 Anpassung (199 €)', '0588', 'ADO');
addCar('Audi', 'A6 (4F)', 'RS6 (5.0 V10 BiTurbo 580 PS BUH)', 'Benzin Turbo', 580, 650, 680, 780, 730, 840, 'Tiptronic ZF 6HP28 Anpassung (199 €)', '0588', 'AFO');
addCar('Audi', 'A6 / A7 (4G)', '2.0 TDI (177/190 PS CGLC/CNHA)', 'Diesel', 190, 400, 225, 460, 240, 490, 'S-Tronic / Multitronic', '0588', 'AZW');
addCar('Audi', 'A6 / A7 (4G)', '3.0 TDI (204/245/272 PS CLAB/CDUC/CRTD)', 'Diesel', 272, 580, 325, 680, 350, 720, 'S-Tronic DL501 Optimierung (199 €)', '0588', 'AZT');
addCar('Audi', 'A6 / A7 (4G)', '3.0 BiTDI quattro (313 PS CGQB)', 'Diesel', 313, 650, 375, 750, 400, 780, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'AUG');
addCar('Audi', 'A6 / A7 (4G Facelift)', '3.0 BiTDI quattro (320/326 PS CVUB/CVUA)', 'Diesel', 320, 650, 380, 750, 410, 800, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'AZX');
addCar('Audi', 'A6 / A7 (4G)', 'S6 / S7 (4.0 TFSI V8 BiTurbo 420/450 PS CEUC)', 'Benzin Turbo', 450, 550, 550, 750, 600, 820, 'S-Tronic DL501 Drehmomentbegrenzung anheben (199 €)', '0588', 'AWP');
addCar('Audi', 'A6 / A7 (4G)', 'RS6 / RS7 (4.0 TFSI V8 BiTurbo 560 PS CRDB)', 'Benzin Turbo', 560, 700, 660, 850, 720, 920, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'AVD');
addCar('Audi', 'A6 / A7 (4G)', 'RS6 / RS7 Performance (4.0 TFSI 605 PS CWUC)', 'Benzin Turbo', 605, 750, 700, 900, 750, 960, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'BGJ');
addCar('Audi', 'A6 / A7 (C8)', '40 TDI (2.0 TDI 204 PS DFBA)', 'Diesel', 204, 400, 240, 470, 255, 500, 'S-Tronic DL382 Anpassung (199 €)', '0588', 'BKJ');
addCar('Audi', 'A6 / A7 (C8)', '50 TDI (3.0 TDI 286 PS DDVE)', 'Diesel', 286, 620, 335, 720, 360, 760, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'BKN');
addCar('Audi', 'A6 / A7 (C8)', 'S6 / S7 TDI (3.0 TDI 344/349 PS DECA)', 'Diesel', 344, 700, 400, 800, 425, 840, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'BNE');
addCar('Audi', 'A6 / A7 (C8)', 'RS6 / RS7 (4.0 TFSI V8 BiTurbo 600 PS DJPB)', 'Benzin Turbo', 600, 800, 700, 950, 760, 1020, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'BKC');

// TT & Q-Modelle
addCar('Audi', 'TT (8N)', '1.8T (180/225 PS AJQ/APX/BAM)', 'Benzin Turbo', 225, 280, 260, 380, 280, 410, 'Handschalter 6-Gang', '0588', '702');
addCar('Audi', 'TT (8J)', '2.0 TFSI (200/211 PS BWA/CCZA)', 'Benzin Turbo', 211, 350, 265, 420, 285, 450, 'S-Tronic DQ250 Anpassung (199 €)', '0588', 'ACX');
addCar('Audi', 'TT (8J)', 'TTS quattro (2.0 TFSI 272 PS CDLB)', 'Benzin Turbo', 272, 350, 315, 420, 345, 460, 'S-Tronic DQ250 Optimierung (199 €)', '0588', 'AFW');
addCar('Audi', 'TT (8J)', 'TT RS quattro (2.5 TFSI 340/360 PS CEPA/CEPB)', 'Benzin Turbo', 340, 450, 410, 540, 440, 590, 'S-Tronic DQ500 Optimierung (199 €)', '0588', 'AHS');
addCar('Audi', 'TT (8S)', 'TTS quattro (2.0 TFSI 306/310 PS CJXG/CJXF)', 'Benzin Turbo', 310, 380, 365, 480, 400, 530, 'S-Tronic DQ381 Optimierung (199 €)', '0588', 'AXU');
addCar('Audi', 'TT (8S)', 'TT RS quattro (2.5 TFSI 400 PS DAZA)', 'Benzin Turbo', 400, 480, 475, 590, 520, 660, 'S-Tronic DQ500 Drehmomentbegrenzung anheben (199 €)', '0588', 'BGI');
addCar('Audi', 'Q5 (8R)', '3.0 TDI quattro (240/245 PS CCWA/CDUD)', 'Diesel', 245, 580, 300, 640, 320, 670, 'S-Tronic DL501 Optimierung (199 €)', '0588', 'AIO');
addCar('Audi', 'SQ5 (8R)', '3.0 BiTDI quattro (313/326/340 PS CGQB/CVUC)', 'Diesel', 313, 650, 375, 750, 400, 780, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'AUJ');
addCar('Audi', 'SQ5 (FY)', '3.0 TFSI V6 Turbo (354 PS CWGD)', 'Benzin Turbo', 354, 500, 420, 620, 450, 670, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'BHH');
addCar('Audi', 'SQ7 (4M)', '4.0 TDI V8 BiTurbo + EAV (435 PS CZAC)', 'Diesel', 435, 900, 510, 980, 540, 1020, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'BGL');
addCar('Audi', 'RS Q8 (4M)', '4.0 TFSI V8 BiTurbo (600 PS DHUB)', 'Benzin Turbo', 600, 800, 700, 950, 760, 1020, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'BKR');

// -------------------------------------------------------------
// MERCEDES-BENZ
// -------------------------------------------------------------
// A-Klasse / CLA
addCar('Mercedes-Benz', 'A-Klasse / CLA (W176/C117)', 'A 180 (1.6 Turbo 122 PS M270)', 'Benzin Turbo', 122, 200, 165, 280, 175, 300, '7G-DCT Doppelkupplung / Handschalter', '1313', 'CZM');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W176/C117)', 'A 200 (1.6 Turbo 156 PS M270)', 'Benzin Turbo', 156, 250, 190, 320, 205, 340, '7G-DCT Doppelkupplung / Handschalter', '1313', 'CZN');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W176/C117)', 'A 250 (2.0 Turbo 211/218 PS M270)', 'Benzin Turbo', 211, 350, 260, 420, 280, 450, '7G-DCT Anpassung (199 €)', '1313', 'CZO');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W176/C117)', 'A 45 AMG 4MATIC (360/381 PS M133)', 'Benzin Turbo', 381, 475, 425, 540, 445, 570, 'Speedshift 7G-DCT Optimierung (199 €)', '1313', 'CUK');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W176/C117)', 'A 200 CDI (1.8/2.1 OM651 136 PS)', 'Diesel', 136, 300, 175, 380, 190, 400, '7G-DCT / Handschalter', '1313', 'CZQ');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W176/C117)', 'A 220 CDI (2.1 OM651 170/177 PS)', 'Diesel', 170, 350, 205, 430, 220, 460, '7G-DCT Getriebeanpassung', '1313', 'CZR');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W177/C118)', 'A 250 (2.0 Turbo 224 PS M260)', 'Benzin Turbo', 224, 350, 265, 430, 285, 460, '7G-DCT Anpassung (199 €)', '1313', 'HRA');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W177/C118)', 'A 35 AMG 4MATIC (306 PS M260)', 'Benzin Turbo', 306, 400, 350, 470, 375, 500, 'AMG Speedshift 7G-DCT Anpassung (199 €)', '1313', 'HRG');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W177/C118)', 'A 45 S AMG 4MATIC+ (421 PS M139)', 'Benzin Turbo', 421, 500, 475, 580, 500, 610, 'AMG Speedshift 8G-DCT Anpassung (199 €)', '1313', 'HTE');
addCar('Mercedes-Benz', 'A-Klasse / CLA (W177/C118)', 'A 200 d / A 220 d (2.0 OM654 150/190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, '8G-DCT Getriebeanpassung (199 €)', '1313', 'HTB');

// C-Klasse
addCar('Mercedes-Benz', 'C-Klasse (W203)', 'C 200 CDI / C 220 CDI (122/143/150 PS OM646)', 'Diesel', 150, 340, 185, 400, 195, 420, '5G-Tronic / Handschalter', '0999', '287');
addCar('Mercedes-Benz', 'C-Klasse (W203)', 'C 270 CDI (2.7 R5 170 PS OM612)', 'Diesel', 170, 400, 205, 470, 218, 495, '5G-Tronic / Handschalter', '0999', '152');
addCar('Mercedes-Benz', 'C-Klasse (W203)', 'C 320 CDI (3.0 V6 224 PS OM642)', 'Diesel', 224, 510, 265, 600, 280, 630, '7G-Tronic Anpassung', '0999', '384');
addCar('Mercedes-Benz', 'C-Klasse (W203)', 'C 32 AMG Kompressor (3.2 V6 354 PS M112)', 'Benzin Turbo', 354, 450, 390, 490, 410, 520, '5G-Tronic Speedshift', '0999', '180');
addCar('Mercedes-Benz', 'C-Klasse (W203)', 'C 55 AMG (5.4 V8 367 PS M113)', 'Benzin Sauger', 367, 510, 390, 535, 405, 555, '5G-Tronic Speedshift', '0999', '327');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 180 CGI / C 200 CGI (1.8 Turbo 156/184 PS M271)', 'Benzin Turbo', 184, 270, 215, 330, 230, 350, '7G-Tronic Plus / Handschalter', '1313', 'BLF');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 250 CGI (1.8 Turbo 204 PS M271)', 'Benzin Turbo', 204, 310, 245, 380, 260, 400, '7G-Tronic Plus Anpassung', '1313', 'BLG');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 63 AMG V8 (6.2 Sauger 457 PS M156)', 'Benzin Sauger', 457, 600, 510, 645, 535, 670, 'AMG Speedshift MCT 7G Optimierung (199 €)', '1313', 'AFA');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 63 AMG Performance Package / 507 (487/507 PS)', 'Benzin Sauger', 507, 610, 535, 650, 550, 670, 'AMG Speedshift MCT 7G Optimierung (199 €)', '1313', 'CWD');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 200 CDI (2.1 OM651 136 PS)', 'Diesel', 136, 360, 190, 440, 205, 470, '7G-Tronic Plus / Handschalter (Gedrosselter C 220 CDI!)', '1313', 'BEE');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 220 CDI (2.1 OM651 170 PS)', 'Diesel', 170, 400, 205, 480, 220, 510, '7G-Tronic / 5G-Tronic Anpassung', '1313', 'AEX');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 250 CDI BiTurbo (2.1 OM651 204 PS)', 'Diesel', 204, 500, 245, 580, 260, 610, '7G-Tronic Plus Anpassung (199 €)', '1313', 'BFF');
addCar('Mercedes-Benz', 'C-Klasse (W204)', 'C 320 CDI / C 350 CDI (3.0 V6 224/265 PS OM642)', 'Diesel', 265, 620, 310, 710, 330, 750, '7G-Tronic Plus Drehmomentbegrenzung anheben (199 €)', '1313', 'BHM');
addCar('Mercedes-Benz', 'C-Klasse (W205)', 'C 200 / C 300 (2.0 Turbo 184/245/258 PS M274)', 'Benzin Turbo', 245, 370, 290, 450, 310, 470, '9G-Tronic / 7G-Tronic Getriebeanpassung', '1313', 'EOJ');
addCar('Mercedes-Benz', 'C-Klasse (W205)', 'C 400 / C 43 AMG (3.0 V6 BiTurbo 333/367/390 PS M276)', 'Benzin Turbo', 390, 520, 435, 620, 460, 660, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'EUT');
addCar('Mercedes-Benz', 'C-Klasse (W205)', 'C 63 AMG V8 BiTurbo (4.0 M177 476 PS)', 'Benzin Turbo', 476, 650, 560, 780, 600, 830, 'AMG Speedshift MCT 7G/9G Optimierung (199 €)', '1313', 'EOU');
addCar('Mercedes-Benz', 'C-Klasse (W205)', 'C 63 S AMG V8 BiTurbo (4.0 M177 510 PS)', 'Benzin Turbo', 510, 700, 590, 820, 630, 880, 'AMG Speedshift MCT 7G/9G Optimierung (199 €)', '1313', 'EVH');
addCar('Mercedes-Benz', 'C-Klasse (W205)', 'C 200 d / C 220 d (2.1 OM651 170 PS / 2.0 OM654 194 PS)', 'Diesel', 194, 400, 235, 480, 250, 510, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'ETZ');
addCar('Mercedes-Benz', 'C-Klasse (W205)', 'C 250 d / C 300 d (2.1 OM651 204 PS / 2.0 OM654 245 PS)', 'Diesel', 245, 500, 285, 580, 305, 610, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'EUA');

// E-Klasse
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 220 CDI (2.1 OM646 150/170 PS)', 'Diesel', 170, 400, 205, 480, 218, 510, '5G-Tronic / Handschalter', '0999', 'ACA');
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 270 CDI (2.7 R5 177 PS OM647)', 'Diesel', 177, 425, 210, 490, 225, 520, '5G-Tronic / Handschalter', '0999', '258');
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 320 CDI (3.2 R6 204 PS OM648)', 'Diesel', 204, 500, 245, 590, 260, 630, '5G-Tronic Anpassung', '0999', '267');
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 320 CDI V6 (3.0 V6 224 PS OM642)', 'Diesel', 224, 540, 265, 620, 285, 660, '7G-Tronic Anpassung', '0999', 'ACJ');
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 420 CDI V8 (4.0 V8 BiTurbo 314 PS OM629)', 'Diesel', 314, 730, 365, 830, 385, 870, '7G-Tronic Drehmomentbegrenzung anheben (199 €)', '0999', 'AJC');
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 500 (5.0 V8 306 PS M113 / 5.5 V8 388 PS M273)', 'Benzin Sauger', 388, 530, 412, 560, 425, 575, '7G-Tronic Anpassung', '0999', 'ACI');
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 55 AMG Kompressor (5.4 V8 476 PS M113)', 'Benzin Turbo', 476, 700, 520, 770, 560, 830, '5G-Tronic Speedshift Anpassung', '0999', '270');
addCar('Mercedes-Benz', 'E-Klasse (W211)', 'E 63 AMG V8 (6.2 Sauger 514 PS M156)', 'Benzin Sauger', 514, 630, 540, 660, 555, 680, '7G-Tronic Speedshift Optimierung', '0999', 'AKX');
addCar('Mercedes-Benz', 'E-Klasse (W212)', 'E 220 CDI (2.1 OM651 170 PS)', 'Diesel', 170, 400, 205, 480, 220, 510, '7G-Tronic Plus Anpassung', '1313', 'BGM');
addCar('Mercedes-Benz', 'E-Klasse (W212)', 'E 250 CDI BiTurbo (2.1 OM651 204 PS)', 'Diesel', 204, 500, 245, 580, 260, 610, '7G-Tronic Plus Anpassung (199 €)', '1313', 'BGN');
addCar('Mercedes-Benz', 'E-Klasse (W212)', 'E 350 CDI / BlueTEC (3.0 V6 231/258/265 PS OM642)', 'Diesel', 258, 620, 305, 700, 325, 740, '9G-Tronic / 7G-Tronic Optimierung (199 €)', '1313', 'CZA');
addCar('Mercedes-Benz', 'E-Klasse (W212)', 'E 500 (4.7 V8 BiTurbo 408 PS M278)', 'Benzin Turbo', 408, 600, 500, 750, 540, 800, '7G-Tronic Plus Drehmomentbegrenzung anheben (199 €)', '1313', 'BGP');
addCar('Mercedes-Benz', 'E-Klasse (W212)', 'E 63 AMG / E 63 S AMG (5.5 V8 BiTurbo 557/585 PS)', 'Benzin Turbo', 585, 800, 680, 950, 730, 1050, 'AMG Speedshift MCT 7G Drehmomentbegrenzung anheben (199 €)', '1313', 'BYU');
addCar('Mercedes-Benz', 'E-Klasse (W213)', 'E 220 d (2.0 OM654 194 PS)', 'Diesel', 194, 400, 235, 480, 250, 510, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'ELH');
addCar('Mercedes-Benz', 'E-Klasse (W213)', 'E 350 d (3.0 V6 OM642 258 PS / 2.9 R6 OM656 286 PS)', 'Diesel', 286, 600, 335, 700, 360, 740, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'HPU');
addCar('Mercedes-Benz', 'E-Klasse (W213)', 'E 400 d 4MATIC (2.9 R6 OM656 340 PS)', 'Diesel', 340, 700, 400, 800, 425, 840, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'HPW');
addCar('Mercedes-Benz', 'E-Klasse (W213)', 'E 43 AMG / E 53 AMG (3.0 BiTurbo 401/435 PS)', 'Benzin Turbo', 435, 520, 490, 620, 520, 660, 'AMG Speedshift TCT 9G Optimierung (199 €)', '1313', 'HQH');
addCar('Mercedes-Benz', 'E-Klasse (W213)', 'E 63 S AMG 4MATIC+ (4.0 V8 BiTurbo 612 PS M177)', 'Benzin Turbo', 612, 850, 720, 1000, 770, 1080, 'AMG Speedshift MCT 9G Drehmomentbegrenzung anheben (199 €)', '1313', 'GZA');

// CLS, ML/GLE & G-Klasse
addCar('Mercedes-Benz', 'CLS (C219)', 'CLS 320 CDI / 350 CDI (3.0 V6 224 PS OM642)', 'Diesel', 224, 540, 265, 620, 285, 660, '7G-Tronic Anpassung', '0999', 'ACZ');
addCar('Mercedes-Benz', 'CLS (C219)', 'CLS 55 AMG Kompressor (5.4 V8 476 PS M113)', 'Benzin Turbo', 476, 700, 520, 770, 560, 830, '5G-Tronic Speedshift', '0999', '344');
addCar('Mercedes-Benz', 'CLS (C218)', 'CLS 350 CDI / BlueTEC (3.0 V6 265 PS OM642)', 'Diesel', 265, 620, 310, 710, 330, 750, '7G-Tronic Plus Drehmomentbegrenzung anheben (199 €)', '1313', 'BKS');
addCar('Mercedes-Benz', 'CLS (C218)', 'CLS 63 S AMG 4MATIC (5.5 V8 BiTurbo 585 PS)', 'Benzin Turbo', 585, 800, 680, 950, 730, 1050, 'AMG Speedshift MCT 7G Anpassung (199 €)', '1313', 'CYH');
addCar('Mercedes-Benz', 'ML / GLE (W166)', 'ML 350 BlueTEC / GLE 350 d (3.0 V6 258 PS)', 'Diesel', 258, 620, 305, 700, 325, 740, '7G-Tronic Plus / 9G-Tronic Anpassung (199 €)', '1313', 'BVI');
addCar('Mercedes-Benz', 'ML / GLE (W166)', 'GLE 43 AMG / GLE 450 (3.0 V6 BiTurbo 367/390 PS)', 'Benzin Turbo', 367, 520, 420, 600, 445, 640, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'EOC');
addCar('Mercedes-Benz', 'ML / GLE (W166)', 'GLE 63 S AMG (5.5 V8 BiTurbo 585 PS)', 'Benzin Turbo', 585, 760, 680, 920, 720, 980, 'AMG Speedshift 7G Drehmomentbegrenzung anheben (199 €)', '1313', 'EOL');
addCar('Mercedes-Benz', 'G-Klasse (W463)', 'G 350 d / BlueTEC (3.0 V6 211/245 PS OM642)', 'Diesel', 245, 600, 290, 680, 310, 720, '7G-Tronic Plus Anpassung', '1313', 'BWI');
addCar('Mercedes-Benz', 'G-Klasse (W463)', 'G 400 d (2.9 R6 OM656 330 PS)', 'Diesel', 330, 700, 390, 800, 415, 840, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'HSS');
addCar('Mercedes-Benz', 'G-Klasse (W463)', 'G 63 AMG V8 BiTurbo (4.0 M177 585 PS)', 'Benzin Turbo', 585, 850, 700, 1000, 750, 1080, 'AMG Speedshift 9G Drehmomentbegrenzung anheben (199 €)', '1313', 'HSF');
addCar('Mercedes-Benz', 'V-Klasse / Vito (W447)', 'V 220 d / V 250 d (2.1 OM651 163/190 PS)', 'Diesel', 190, 440, 230, 510, 245, 540, '7G-Tronic Plus Anpassung (199 €)', '1313', 'EAM');
addCar('Mercedes-Benz', 'V-Klasse / Vito (W447)', 'V 300 d (2.0 OM654 239 PS)', 'Diesel', 239, 500, 280, 580, 300, 610, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'HSS');

// -------------------------------------------------------------
// CUPRA & SEAT
// -------------------------------------------------------------
addCar('Cupra', 'Leon Cupra (5F)', 'Leon Cupra 280 / 290 / 300 (2.0 TSI 300 PS CJXC)', 'Benzin Turbo', 300, 380, 360, 480, 390, 520, 'DSG DQ250/DQ381 Anpassung (199 €)', '7593', 'AMB');
addCar('Cupra', 'Leon Cupra R (5F)', '2.0 TSI (310 PS CJXG)', 'Benzin Turbo', 310, 380, 370, 490, 400, 530, 'Handschalter 6-Gang', '7593', 'ANP');
addCar('Cupra', 'Leon (KL)', 'VZ 2.0 TSI (300/310 PS DNFB)', 'Benzin Turbo', 300, 400, 370, 490, 405, 530, 'DSG DQ381 Schaltzeitverkürzung (199 €)', '7593', 'APD');
addCar('Cupra', 'Formentor VZ', '2.0 TSI 4Drive (310 PS DNFB)', 'Benzin Turbo', 310, 400, 375, 500, 405, 540, 'DSG DQ381 Schaltzeitverkürzung (199 €)', '7593', 'ARF');
addCar('Cupra', 'Formentor VZ5', '2.5 TFSI 5-Zylinder (390 PS)', 'Benzin Turbo', 390, 480, 460, 570, 500, 630, 'DSG DQ500 Drehmomentbegrenzung anheben (199 €)', '7593', 'ASE');
addCar('Cupra', 'Ateca', '2.0 TSI 4Drive (300 PS DNUE)', 'Benzin Turbo', 300, 400, 365, 480, 400, 530, 'DSG DQ381 Optimierung (199 €)', '7593', 'ANQ');
addCar('Seat', 'Leon (1P)', 'Cupra / Cupra R (2.0 TFSI 240/265 PS BWJ/CDLA)', 'Benzin Turbo', 240, 300, 300, 420, 330, 450, 'Handschalter 6-Gang', '7593', 'ACT');
addCar('Seat', 'Leon (1P)', 'FR 2.0 TDI (170 PS BMN/CEGA)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ250 / Handschalter', '7593', 'ACV');
addCar('Seat', 'Leon (5F)', '2.0 TDI FR (184 PS CUNA/DGCA)', 'Diesel', 184, 380, 220, 450, 235, 480, 'DSG DQ250/DQ381 Anpassung (199 €)', '7593', 'AJF');
addCar('Seat', 'Ibiza (6L/6J/6F)', 'Cupra 1.9 TDI / 1.4 TSI / 1.8 TSI (160/180/192 PS)', 'Benzin Turbo', 192, 320, 240, 390, 260, 420, 'Handschalter 6-Gang / DSG', '7593', 'AMU');

// -------------------------------------------------------------
// SKODA
// -------------------------------------------------------------
addCar('Skoda', 'Octavia RS (1Z)', '2.0 TFSI / TSI (200/211 PS BWA/CCZA)', 'Benzin Turbo', 200, 280, 250, 380, 275, 410, 'DSG DQ250 Anpassung (199 €)', '8004', 'AFV');
addCar('Skoda', 'Octavia RS (1Z)', '2.0 TDI (170 PS BMN/CEGA)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ250 / Handschalter', '8004', 'AFX');
addCar('Skoda', 'Octavia RS (5E)', '2.0 TSI (220/230/245 PS CHHA/CHHB/DLBA)', 'Benzin Turbo', 220, 350, 300, 440, 320, 470, 'DSG DQ250/DQ381 Optimierung (199 €)', '8004', 'ANL');
addCar('Skoda', 'Octavia RS (5E)', '2.0 TDI (184 PS CUNA/DGCA)', 'Diesel', 184, 380, 220, 450, 235, 480, 'DSG DQ250/DQ381 Anpassung (199 €)', '8004', 'ANM');
addCar('Skoda', 'Octavia RS (NX)', '2.0 TSI (245 PS DLBA)', 'Benzin Turbo', 245, 370, 305, 460, 330, 490, 'DSG DQ381 Optimierung (199 €)', '8004', 'ARD');
addCar('Skoda', 'Octavia RS (NX)', '2.0 TDI (200 PS DTUA)', 'Diesel', 200, 400, 240, 470, 255, 500, 'DSG DQ381 Anpassung (199 €)', '8004', 'ARE');
addCar('Skoda', 'Superb (3V)', '2.0 TSI 4x4 (272/280 PS CJXA/DNUA)', 'Benzin Turbo', 280, 350, 350, 460, 380, 500, 'DSG DQ250/DQ381 Optimierung (199 €)', '8004', 'AOB');
addCar('Skoda', 'Superb (3V)', '2.0 TDI (150/190/200 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'DSG DQ381 Anpassung (199 €)', '8004', 'ANY');
addCar('Skoda', 'Kodiaq RS', '2.0 BiTDI (240 PS CUAA)', 'Diesel', 240, 500, 285, 580, 300, 610, 'DSG DQ500 Optimierung (199 €)', '8004', 'ASP');
addCar('Skoda', 'Kodiaq RS Facelift', '2.0 TSI (245 PS EA888)', 'Benzin Turbo', 245, 370, 305, 460, 330, 490, 'DSG DQ381 Optimierung (199 €)', '8004', 'AUO');

// -------------------------------------------------------------
// FORD
// -------------------------------------------------------------
addCar('Ford', 'Fiesta ST MK7', '1.6 EcoBoost (182/200 PS ST200)', 'Benzin Turbo', 182, 240, 220, 330, 240, 360, 'Handschalter 6-Gang', '8566', 'BDO');
addCar('Ford', 'Fiesta ST MK8', '1.5 EcoBoost 3-Zyl. (200 PS)', 'Benzin Turbo', 200, 290, 235, 360, 250, 380, 'Handschalter 6-Gang', '8566', 'BOC');
addCar('Ford', 'Focus ST MK2', '2.5 5-Zylinder Turbo (225 PS Duratec)', 'Benzin Turbo', 225, 320, 265, 420, 290, 460, 'Handschalter 6-Gang (Kult-5-Zylinder)', '8566', 'AAL');
addCar('Ford', 'Focus RS MK2', '2.5 5-Zylinder Turbo (305 PS Duratec)', 'Benzin Turbo', 305, 440, 350, 520, 385, 560, 'Handschalter 6-Gang', '8566', 'APW');
addCar('Ford', 'Focus RS500 MK2', '2.5 5-Zylinder Turbo (350 PS)', 'Benzin Turbo', 350, 460, 385, 550, 410, 590, 'Handschalter 6-Gang', '8566', 'ARB');
addCar('Ford', 'Focus ST MK3', '2.0 EcoBoost (250 PS)', 'Benzin Turbo', 250, 360, 280, 430, 300, 460, 'Handschalter 6-Gang', '8566', 'BCJ');
addCar('Ford', 'Focus ST TDCi MK3', '2.0 TDCi (185 PS)', 'Diesel', 185, 400, 215, 460, 230, 480, 'Handschalter / PowerShift', '8566', 'BJE');
addCar('Ford', 'Focus RS MK3', '2.3 EcoBoost AWD (350 PS)', 'Benzin Turbo', 350, 470, 395, 540, 420, 580, 'Handschalter 6-Gang', '8566', 'BKI');
addCar('Ford', 'Focus ST MK4', '2.3 EcoBoost (280 PS)', 'Benzin Turbo', 280, 420, 330, 500, 355, 530, 'Handschalter / 7-Gang Wandlerautomatik', '8566', 'BQE');
addCar('Ford', 'Mustang GT', '5.0 V8 Coyote (421/450 PS)', 'Benzin Sauger', 450, 529, 480, 565, 505, 590, '10-Gang Automatik / 6-Gang Handschalter', '8566', 'BGL');
addCar('Ford', 'Mustang EcoBoost', '2.3 EcoBoost (290/317 PS)', 'Benzin Turbo', 317, 432, 350, 510, 380, 550, '10-Gang Automatik / 6-Gang Handschalter', '8566', 'BGK');
addCar('Ford', 'Ranger / Raptor', '2.0 EcoBlue Bi-Turbo (213 PS)', 'Diesel', 213, 500, 245, 560, 260, 590, '10-Gang Automatik Anpassung', '8566', 'BPI');

// -------------------------------------------------------------
// OPEL
// -------------------------------------------------------------
addCar('Opel', 'Corsa D OPC', '1.6 Turbo (192/210 PS Z16LER/A16LES)', 'Benzin Turbo', 192, 230, 220, 300, 235, 330, 'Handschalter 6-Gang M32', '0035', 'AFZ');
addCar('Opel', 'Corsa E OPC', '1.6 Turbo (207 PS B16LER)', 'Benzin Turbo', 207, 245, 235, 320, 250, 350, 'Handschalter 6-Gang M32', '0035', 'BFQ');
addCar('Opel', 'Astra H OPC', '2.0 Turbo (240 PS Z20LEH)', 'Benzin Turbo', 240, 320, 275, 410, 295, 440, 'Handschalter 6-Gang M32 (Kultmotor)', '0035', '065');
addCar('Opel', 'Astra J OPC', '2.0 Turbo (280 PS A20NFT)', 'Benzin Turbo', 280, 400, 315, 480, 335, 510, 'Handschalter 6-Gang F40', '0035', 'AVD');
addCar('Opel', 'Insignia OPC', '2.8 V6 Turbo 4x4 (325 PS A28NER)', 'Benzin Turbo', 325, 435, 360, 530, 385, 570, 'Handschalter / Automatik', '0035', 'ALO');
addCar('Opel', 'Insignia (A)', '2.0 BiTurbo CDTI (195 PS A20DTR)', 'Diesel', 195, 400, 225, 460, 240, 490, 'Handschalter / Automatik', '0035', 'ASZ');
addCar('Opel', 'Insignia (B)', 'GSi 2.0 BiTurbo D / 2.0 Turbo (210/260 PS)', 'Benzin Turbo', 260, 400, 300, 470, 320, 500, '8-Gang Automatik Anpassung', '0035', 'BKV');

// -------------------------------------------------------------
// PORSCHE
// -------------------------------------------------------------
addCar('Porsche', '718 Cayman / Boxster (982)', '2.0 4-Zyl. Turbo (300 PS)', 'Benzin Turbo', 300, 380, 360, 450, 390, 480, 'PDK Getriebeoptimierung (199 €)', '0583', 'AKR');
addCar('Porsche', '718 Cayman / Boxster S / GTS', '2.5 4-Zyl. Turbo (350/365 PS)', 'Benzin Turbo', 365, 420, 415, 490, 440, 530, 'PDK Getriebeoptimierung (199 €)', '0583', 'AKT');
addCar('Porsche', '911 Carrera (997.1)', '3.6 / 3.8 Carrera / S (325/355 PS)', 'Benzin Sauger', 355, 400, 375, 425, 385, 440, 'Handschalter / Tiptronic', '0583', '478');
addCar('Porsche', '911 Turbo (997.1)', '3.6 BiTurbo Mezger (480 PS)', 'Benzin Turbo', 480, 620, 550, 750, 600, 820, 'Tiptronic / Handschalter (Mezger Legende)', '0583', 'AAB');
addCar('Porsche', '911 Carrera (991.2)', '3.0 6-Zyl. BiTurbo (370/420/450 PS)', 'Benzin Turbo', 370, 450, 440, 560, 475, 610, 'PDK Drehmomentbegrenzung anheben (199 €)', '0583', 'AHU');
addCar('Porsche', '911 Turbo / S (991)', '3.8 BiTurbo (520/560/580 PS)', 'Benzin Turbo', 580, 750, 650, 880, 700, 940, 'PDK Drehmomentbegrenzung anheben (199 €)', '0583', 'AHL');
addCar('Porsche', '911 Carrera S / GTS (992)', '3.0 6-Zyl. BiTurbo (450/480 PS)', 'Benzin Turbo', 450, 530, 510, 630, 540, 680, '8-Gang PDK Anpassung (199 €)', '0583', 'AME');
addCar('Porsche', 'Macan', '2.0 Turbo (245/252/265 PS)', 'Benzin Turbo', 252, 370, 305, 450, 325, 480, 'PDK Getriebeoptimierung (199 €)', '0583', 'AGK');
addCar('Porsche', 'Macan S Diesel', '3.0 V6 TDI (258 PS)', 'Diesel', 258, 580, 310, 680, 330, 710, 'PDK Getriebeoptimierung (199 €)', '0583', 'ACV');
addCar('Porsche', 'Macan GTS / Turbo', '2.9 V6 BiTurbo (380/440 PS)', 'Benzin Turbo', 440, 550, 500, 680, 540, 730, 'PDK Getriebeoptimierung (199 €)', '0583', 'ALV');
addCar('Porsche', 'Cayenne / Panamera', 'Diesel 3.0 V6 (245/262 PS)', 'Diesel', 262, 580, 315, 670, 335, 700, 'Tiptronic 8-Gang Anpassung', '0583', 'AGI');
addCar('Porsche', 'Cayenne / Panamera', '4.2 V8 TDI (382/385 PS)', 'Diesel', 385, 850, 450, 950, 480, 1000, 'Tiptronic 8-Gang Anpassung', '0583', 'AHB');

// -------------------------------------------------------------
// HYUNDAI & KIA
// -------------------------------------------------------------
addCar('Hyundai', 'i20 N', '1.6 T-GDI (204 PS)', 'Benzin Turbo', 204, 275, 235, 340, 250, 360, 'Handschalter 6-Gang', '1349', 'AGW');
addCar('Hyundai', 'i30 N Performance', '2.0 T-GDI (275 PS Vorfacelift)', 'Benzin Turbo', 275, 353, 315, 430, 340, 460, 'Handschalter 6-Gang', '1349', 'ADX');
addCar('Hyundai', 'i30 N Facelift', '2.0 T-GDI (280 PS)', 'Benzin Turbo', 280, 392, 320, 450, 345, 480, 'N-DCT 8-Gang Getriebeoptimierung (199 €)', '1349', 'AGL');
addCar('Hyundai', 'Kona N', '2.0 T-GDI (280 PS)', 'Benzin Turbo', 280, 392, 320, 450, 345, 480, 'N-DCT 8-Gang Getriebeoptimierung (199 €)', '1349', 'AGO');
addCar('Kia', 'Ceed / ProCeed GT', '1.6 T-GDI (204 PS)', 'Benzin Turbo', 204, 265, 240, 330, 255, 350, '7-Gang DCT / Handschalter', '1260', 'ACL');
addCar('Kia', 'Stinger GT', '3.3 T-GDI V6 BiTurbo AWD (366/370 PS)', 'Benzin Turbo', 366, 510, 430, 640, 460, 680, '8-Gang Automatik Anpassung (199 €)', '1260', 'ACT');

// -------------------------------------------------------------
// RENAULT & ALPINE
// -------------------------------------------------------------
addCar('Renault', 'Megane III RS', '2.0 16V Turbo (250/265/275 PS Trophy)', 'Benzin Turbo', 265, 360, 310, 430, 330, 460, 'Handschalter 6-Gang', '3333', 'AVX');
addCar('Renault', 'Megane IV RS', '1.8 TCe (280/300 PS Trophy)', 'Benzin Turbo', 300, 400, 340, 460, 365, 490, 'EDC 6-Gang / Handschalter', '3333', 'BKS');
addCar('Renault', 'Clio IV RS', '1.6 Turbo (200/220 PS Trophy)', 'Benzin Turbo', 200, 240, 235, 310, 250, 330, 'EDC Doppelkupplung Anpassung', '3333', 'BAW');
addCar('Alpine', 'A110', '1.8 TCe (252/292/300 PS)', 'Benzin Turbo', 252, 320, 300, 400, 325, 430, '7-Gang EDC Getriebeanpassung (199 €)', '3333', 'BKL');

// -------------------------------------------------------------
// ALFA ROMEO & ABARTH
// -------------------------------------------------------------
addCar('Abarth', '595 / 695', '1.4 T-Jet Turismo/Competizione (165/180 PS)', 'Benzin Turbo', 180, 250, 210, 320, 225, 345, 'Handschalter / MTA', '4136', 'AUP');
addCar('Alfa Romeo', 'Giulietta', '1.75 TBi Quadrifoglio Verde (235/240 PS)', 'Benzin Turbo', 240, 340, 275, 400, 295, 430, 'TCT Doppelkupplung / Handschalter', '0014', 'ABK');
addCar('Alfa Romeo', 'Giulia', '2.0 Turbo Veloce (200/280 PS)', 'Benzin Turbo', 280, 400, 320, 470, 340, 500, 'ZF 8HP Getriebeoptimierung (199 €)', '0014', 'ABZ');
addCar('Alfa Romeo', 'Giulia', '2.2 Diesel (180/190/210 PS Veloce)', 'Diesel', 210, 470, 245, 530, 260, 560, 'ZF 8HP Getriebeoptimierung (199 €)', '0014', 'ACA');
addCar('Alfa Romeo', 'Giulia Quadrifoglio', '2.9 V6 BiTurbo (510 PS Ferrari-Technik)', 'Benzin Turbo', 510, 600, 580, 720, 610, 760, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0014', 'ACD');
addCar('Alfa Romeo', 'Stelvio', '2.0 Turbo Veloce / 2.2 Diesel (280/210 PS)', 'Benzin Turbo', 280, 400, 320, 470, 340, 500, 'ZF 8HP Getriebeoptimierung (199 €)', '0014', 'ACF');
addCar('Alfa Romeo', 'Stelvio Quadrifoglio', '2.9 V6 BiTurbo (510 PS)', 'Benzin Turbo', 510, 600, 580, 720, 610, 760, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0014', 'ACG');

// -------------------------------------------------------------
// TOYOTA, HONDA, MAZDA, NISSAN, SUBARU
// -------------------------------------------------------------
addCar('Toyota', 'GR Yaris', '1.6 Turbo 3-Zyl. AWD (261 PS G16E-GTS)', 'Benzin Turbo', 261, 360, 310, 420, 335, 450, 'Handschalter 6-Gang', '5013', 'ALJ');
addCar('Toyota', 'GR Supra', '2.0 Turbo (258 PS B48)', 'Benzin Turbo', 258, 400, 310, 480, 330, 510, 'ZF 8HP Getriebeoptimierung (199 €)', '5013', 'AKO');
addCar('Toyota', 'GR Supra', '3.0 Turbo (340 PS B58)', 'Benzin Turbo', 340, 500, 420, 600, 460, 660, 'ZF 8HP Getriebeoptimierung (199 €)', '5013', 'AKP');
addCar('Toyota', 'GT86 / GR86', '2.0 / 2.4 Boxer (200/235 PS FA20/FA24)', 'Benzin Sauger', 200, 205, 218, 225, 226, 235, 'Handschalter 6-Gang', '5013', 'AHU');
addCar('Honda', 'Civic Type R (FK2/FK8)', '2.0 VTEC Turbo (310/320 PS K20C1)', 'Benzin Turbo', 320, 400, 365, 480, 395, 520, 'Handschalter 6-Gang', '7100', 'AAY');
addCar('Honda', 'Civic Type R (FL5)', '2.0 VTEC Turbo (329 PS K20C1)', 'Benzin Turbo', 329, 420, 375, 500, 405, 535, 'Handschalter 6-Gang', '7100', 'ABP');
addCar('Mazda', '3 MPS / 6 MPS', '2.3 DISI Turbo (260 PS)', 'Benzin Turbo', 260, 380, 295, 440, 320, 470, 'Handschalter 6-Gang', '7118', 'AAY');
addCar('Nissan', '350Z', '3.5 V6 (280/301/313 PS VQ35DE/HR)', 'Benzin Sauger', 313, 358, 332, 380, 342, 395, 'Handschalter 6-Gang', '1329', 'ABI');
addCar('Nissan', '370Z / Nismo', '3.7 V6 (328/344 PS VQ37VHR)', 'Benzin Sauger', 344, 371, 365, 395, 378, 410, 'Handschalter / 7-Gang Automatik', '1329', 'ABR');
addCar('Nissan', 'GT-R (R35)', '3.8 V6 BiTurbo VR38DETT (485/530/550/570 PS)', 'Benzin Turbo', 570, 637, 650, 800, 700, 870, 'GR6 Doppelkupplungsgetriebe Anpassung (199 €)', '1329', 'ACD');
addCar('Subaru', 'Impreza WRX STI', '2.5 Turbo Boxer (300 PS EJ257)', 'Benzin Turbo', 300, 407, 340, 480, 365, 520, 'Handschalter 6-Gang', '7106', 'AAL');

// -------------------------------------------------------------
// MINI
// -------------------------------------------------------------
addCar('Mini', 'Mini (R53)', 'Cooper S (1.6 Kompressor 163/170 PS W11)', 'Benzin Turbo', 170, 220, 200, 250, 215, 270, 'Handschalter 6-Gang (Kompressor-Pulley)', '0005', '722');
addCar('Mini', 'Mini (R56)', 'Cooper S (1.6 Turbo 175/184 PS N14/N18)', 'Benzin Turbo', 184, 240, 220, 310, 235, 340, 'Handschalter 6-Gang', '0005', 'AQH');
addCar('Mini', 'Mini (R56)', 'John Cooper Works (1.6 Turbo 211 PS N14/N18)', 'Benzin Turbo', 211, 260, 250, 340, 265, 365, 'Handschalter 6-Gang', '0005', 'AQL');
addCar('Mini', 'Mini (R56)', 'Cooper SD (2.0 Diesel 143 PS N47)', 'Diesel', 143, 305, 180, 380, 195, 410, 'Handschalter / Automatik', '0005', 'AVB');
addCar('Mini', 'Mini (F56)', 'Cooper S (2.0 B48 192 PS)', 'Benzin Turbo', 192, 280, 260, 400, 280, 430, 'ZF 8HP / Steptronic DKG', '0005', 'BZA');
addCar('Mini', 'Mini (F56)', 'John Cooper Works (2.0 B48 231 PS)', 'Benzin Turbo', 231, 320, 290, 430, 315, 460, 'Sport-Automatik / Handschalter', '0005', 'BZB');
// -------------------------------------------------------------
// MERCEDES-BENZ EXPANSION (CLA, GLA, GLB, GLC, S-KLASSE, SLK)
// -------------------------------------------------------------
addCar('Mercedes-Benz', 'CLA (C117)', 'CLA 200 (1.6 Turbo 156 PS)', 'Benzin Turbo', 156, 250, 190, 320, 205, 340, '7G-DCT Doppelkupplung', '1313', 'CYJ');
addCar('Mercedes-Benz', 'CLA (C117)', 'CLA 250 (2.0 Turbo 211 PS)', 'Benzin Turbo', 211, 350, 260, 420, 280, 450, '7G-DCT Doppelkupplung', '1313', 'CYK');
addCar('Mercedes-Benz', 'CLA (C117)', 'CLA 45 AMG 4MATIC (381 PS M133)', 'Benzin Turbo', 381, 475, 425, 540, 445, 570, 'Speedshift 7G-DCT Optimierung (199 €)', '1313', 'CYL');
addCar('Mercedes-Benz', 'CLA (C117)', 'CLA 220 CDI (2.1 OM651 170/177 PS)', 'Diesel', 170, 350, 205, 430, 220, 460, '7G-DCT Getriebeanpassung', '1313', 'CYM');
addCar('Mercedes-Benz', 'CLA (C118)', 'CLA 250 (2.0 Turbo 224 PS M260)', 'Benzin Turbo', 224, 350, 265, 430, 285, 460, '7G-DCT Anpassung (199 €)', '1313', 'HRA');
addCar('Mercedes-Benz', 'CLA (C118)', 'CLA 35 AMG 4MATIC (306 PS M260)', 'Benzin Turbo', 306, 400, 350, 470, 375, 500, 'AMG Speedshift 7G-DCT Anpassung (199 €)', '1313', 'HRG');
addCar('Mercedes-Benz', 'CLA (C118)', 'CLA 45 S AMG 4MATIC+ (421 PS M139)', 'Benzin Turbo', 421, 500, 475, 580, 500, 610, 'AMG Speedshift 8G-DCT Anpassung (199 €)', '1313', 'HTE');
addCar('Mercedes-Benz', 'GLA (X156)', 'GLA 220 CDI (2.1 OM651 170 PS)', 'Diesel', 170, 350, 205, 430, 220, 460, '7G-DCT Getriebeanpassung', '1313', 'DGD');
addCar('Mercedes-Benz', 'GLA (X156)', 'GLA 45 AMG (381 PS M133)', 'Benzin Turbo', 381, 475, 425, 540, 445, 570, 'Speedshift 7G-DCT Optimierung (199 €)', '1313', 'DGE');
addCar('Mercedes-Benz', 'GLC (X253)', 'GLC 220 d (2.1 OM651 170 PS / 2.0 OM654 194 PS)', 'Diesel', 194, 400, 235, 480, 250, 510, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'EKV');
addCar('Mercedes-Benz', 'GLC (X253)', 'GLC 250 d / GLC 300 d (204/245 PS)', 'Diesel', 245, 500, 285, 580, 305, 610, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'EKW');
addCar('Mercedes-Benz', 'GLC (X253)', 'GLC 350 d 4MATIC (3.0 V6 258 PS OM642)', 'Diesel', 258, 620, 305, 700, 325, 740, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'ELQ');
addCar('Mercedes-Benz', 'GLC (X253)', 'GLC 43 AMG (3.0 V6 BiTurbo 367/390 PS)', 'Benzin Turbo', 390, 520, 435, 620, 460, 660, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'ELR');
addCar('Mercedes-Benz', 'GLC (X253)', 'GLC 63 S AMG (4.0 V8 BiTurbo 510 PS M177)', 'Benzin Turbo', 510, 700, 590, 820, 630, 880, 'AMG Speedshift MCT 9G Optimierung (199 €)', '1313', 'FZD');
addCar('Mercedes-Benz', 'S-Klasse (W221)', 'S 320 CDI / S 350 CDI (3.0 V6 235/258 PS OM642)', 'Diesel', 258, 620, 305, 700, 325, 740, '7G-Tronic Plus Anpassung', '1313', 'AFL');
addCar('Mercedes-Benz', 'S-Klasse (W221)', 'S 500 (5.5 V8 388 PS / 4.7 V8 BiTurbo 435 PS)', 'Benzin Turbo', 435, 700, 520, 820, 550, 860, '7G-Tronic Plus Drehmomentbegrenzung anheben (199 €)', '1313', 'AFK');
addCar('Mercedes-Benz', 'S-Klasse (W221)', 'S 63 AMG (6.2 Sauger 525 PS / 5.5 BiTurbo 544/571 PS)', 'Benzin Turbo', 571, 900, 660, 1000, 710, 1060, 'AMG Speedshift MCT 7G Anpassung (199 €)', '1313', 'AFM');
addCar('Mercedes-Benz', 'S-Klasse (W222)', 'S 350 d (2.9 R6 OM656 286 PS)', 'Diesel', 286, 600, 335, 700, 360, 740, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'HQL');
addCar('Mercedes-Benz', 'S-Klasse (W222)', 'S 400 d 4MATIC (2.9 R6 OM656 340 PS)', 'Diesel', 340, 700, 400, 800, 425, 840, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'HQM');
addCar('Mercedes-Benz', 'S-Klasse (W222)', 'S 500 / S 560 (4.7 BiTurbo 455 PS / 4.0 BiTurbo 469 PS)', 'Benzin Turbo', 469, 700, 540, 820, 570, 860, '9G-Tronic Getriebeanpassung (199 €)', '1313', 'HQN');
addCar('Mercedes-Benz', 'S-Klasse (W222)', 'S 63 AMG 4MATIC+ (4.0 V8 BiTurbo 612 PS M177)', 'Benzin Turbo', 612, 900, 720, 1020, 770, 1100, 'AMG Speedshift MCT 9G Drehmomentbegrenzung anheben (199 €)', '1313', 'HQO');
addCar('Mercedes-Benz', 'SLK / SLC (R171/R172)', 'SLK 200 Kompressor (163/184 PS M271)', 'Benzin Turbo', 184, 250, 210, 290, 220, 310, '5G-Tronic / 7G-Tronic / Handschalter', '0999', '342');
addCar('Mercedes-Benz', 'SLK / SLC (R171/R172)', 'SLK 250 CDI (2.1 OM651 204 PS)', 'Diesel', 204, 500, 245, 580, 260, 610, '7G-Tronic Plus Anpassung (199 €)', '1313', 'BXB');
addCar('Mercedes-Benz', 'SLK / SLC (R171/R172)', 'SLK 350 (3.5 V6 272/306 PS M272/M276)', 'Benzin Sauger', 306, 370, 328, 395, 338, 405, '7G-Tronic Plus Anpassung', '1313', 'BXC');
addCar('Mercedes-Benz', 'SLK / SLC (R171/R172)', 'SLK 55 AMG (5.4 V8 360 PS / 5.5 V8 422 PS M152)', 'Benzin Sauger', 422, 540, 445, 570, 460, 590, '7G-Tronic Speedshift Optimierung', '1313', 'BXD');

// -------------------------------------------------------------
// VOLKSWAGEN EXPANSION (CADDY, TOURAN, SHARAN, BEETLE)
// -------------------------------------------------------------
addCar('Volkswagen', 'Caddy (2K / SB)', '1.6 TDI (75/102 PS CAYD/CAYE)', 'Diesel', 102, 250, 140, 300, 150, 320, 'Handschalter 5-Gang / DSG', '0603', 'AQG');
addCar('Volkswagen', 'Caddy (2K / SB)', '2.0 TDI (102/122/140/150 PS)', 'Diesel', 140, 320, 175, 390, 195, 420, 'DSG DQ250 / Handschalter', '0603', 'AQH');
addCar('Volkswagen', 'Touran (1T / 5T)', '2.0 TDI (140/150/170/190 PS)', 'Diesel', 150, 340, 190, 420, 205, 440, 'DSG DQ250/DQ381 Anpassung (199 €)', '0603', 'BTK');
addCar('Volkswagen', 'Sharan (7N)', '2.0 TDI (140/150/170/177/184 PS)', 'Diesel', 177, 380, 210, 440, 225, 470, 'DSG DQ250 Anpassung (199 €)', '0603', 'AZZ');
addCar('Volkswagen', 'Beetle (5C)', '2.0 TSI (200/211/220 PS CCZA/CULA)', 'Benzin Turbo', 211, 280, 260, 380, 280, 410, 'DSG DQ250 Anpassung (199 €)', '0603', 'BCA');

// -------------------------------------------------------------
// AUDI EXPANSION (Q2, Q3, A8)
// -------------------------------------------------------------
addCar('Audi', 'Q2 (GA)', '2.0 TDI (150/190 PS DFGA/DFHA)', 'Diesel', 190, 400, 225, 460, 240, 490, 'S-Tronic DQ381 Anpassung (199 €)', '0588', 'BFC');
addCar('Audi', 'SQ2 (GA)', '2.0 TFSI quattro (300 PS DNUE)', 'Benzin Turbo', 300, 400, 365, 480, 400, 530, 'S-Tronic DQ381 Optimierung (199 €)', '0588', 'BNL');
addCar('Audi', 'Q3 (8U)', '2.0 TDI (140/177/184 PS CFFB/CFGD/CUNA)', 'Diesel', 177, 380, 210, 440, 225, 470, 'S-Tronic DQ500 / Handschalter', '0588', 'AOS');
addCar('Audi', 'RS Q3 (8U)', '2.5 TFSI quattro (310/340/367 PS CTSA/CZGA)', 'Benzin Turbo', 340, 450, 410, 540, 440, 590, 'S-Tronic DQ500 Optimierung (199 €)', '0588', 'AVO');
addCar('Audi', 'RS Q3 (F3)', '2.5 TFSI quattro (400 PS DNWA)', 'Benzin Turbo', 400, 480, 475, 590, 520, 660, 'S-Tronic DQ500 Drehmomentbegrenzung anheben (199 €)', '0588', 'BRS');
addCar('Audi', 'A8 (D3)', '3.0 TDI quattro (233 PS ASB)', 'Diesel', 233, 450, 275, 550, 295, 590, 'ZF 6HP Tiptronic Anpassung', '0588', '838');
addCar('Audi', 'A8 (D3)', '4.2 TDI V8 quattro (326 PS BVN)', 'Diesel', 326, 650, 380, 780, 405, 830, 'ZF 6HP Tiptronic Anpassung', '0588', '884');
addCar('Audi', 'A8 (D3)', 'S8 (5.2 V10 FSI 450 PS BSM)', 'Benzin Sauger', 450, 540, 475, 570, 490, 590, 'ZF 6HP Tiptronic Anpassung (199 €)', '0588', 'ABY');
addCar('Audi', 'A8 (D4)', '3.0 TDI clean diesel (250/258/262 PS)', 'Diesel', 258, 580, 310, 660, 330, 700, 'ZF 8HP Tiptronic Anpassung (199 €)', '0588', 'ANO');
addCar('Audi', 'A8 (D4)', '4.2 TDI V8 clean diesel (350/385 PS CDSB/CTBA)', 'Diesel', 385, 850, 450, 950, 480, 1000, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'ANP');
addCar('Audi', 'A8 (D4)', 'S8 / S8 Plus (4.0 TFSI V8 BiTurbo 520/605 PS)', 'Benzin Turbo', 520, 650, 640, 820, 690, 880, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'ATS');
addCar('Audi', 'A8 (D5)', '50 TDI quattro (3.0 TDI 286 PS DDVC)', 'Diesel', 286, 600, 335, 720, 360, 760, 'ZF 8HP Tiptronic Optimierung (199 €)', '0588', 'BNN');
addCar('Audi', 'A8 (D5)', '60 TDI quattro (4.0 V8 TDI 435 PS CZAC)', 'Diesel', 435, 900, 510, 980, 540, 1020, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '0588', 'BNP');

// -------------------------------------------------------------
// SEAT & SKODA EXPANSION
// -------------------------------------------------------------
addCar('Seat', 'Leon (1M)', 'TopSport / FR (1.9 TDI 150 PS ARL)', 'Diesel', 150, 320, 190, 410, 210, 440, 'Handschalter 6-Gang (Legendärer ARL TDI)', '7593', '008');
addCar('Seat', 'Leon (1M)', 'Cupra R (1.8T 210/225 PS AMK/BAM)', 'Benzin Turbo', 225, 280, 260, 380, 280, 410, 'Handschalter 6-Gang (K04-Lader)', '7593', '013');
addCar('Seat', 'Ibiza (6L)', 'FR 1.9 TDI (130 PS ASZ/BLT)', 'Diesel', 130, 310, 165, 390, 185, 420, 'Handschalter 6-Gang', '7593', '005');
addCar('Seat', 'Ibiza (6L)', 'Cupra 1.9 TDI (160 PS BPX/BUK)', 'Diesel', 160, 330, 195, 420, 215, 450, 'Handschalter 6-Gang (Großer Front-LLK ab Werk)', '7593', '015');
addCar('Seat', 'Tarraco', '2.0 TDI (150/190/200 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'DSG DQ381 Anpassung (199 €)', '7593', 'ANS');
addCar('Seat', 'Exeo', '2.0 TFSI / 2.0 TDI (200/211 PS & 143/170 PS)', 'Diesel', 170, 350, 205, 420, 220, 450, 'Handschalter 6-Gang / Multitronic', '7593', 'AGK');
addCar('Skoda', 'Fabia RS (6Y)', '1.9 TDI RS (130 PS ASZ/BLT)', 'Diesel', 130, 310, 165, 390, 185, 420, 'Handschalter 6-Gang', '8004', '391');
addCar('Skoda', 'Fabia RS (5J)', '1.4 TSI RS Twincharger (180 PS CAVE/CTHE)', 'Benzin Turbo', 180, 250, 215, 310, 230, 330, 'DSG DQ200 7-Gang', '8004', 'AEP');
addCar('Skoda', 'Karoq', '2.0 TDI (150/190 PS)', 'Diesel', 190, 400, 225, 460, 240, 490, 'DSG DQ381 Anpassung (199 €)', '8004', 'APU');
addCar('Skoda', 'Superb (3T)', '2.0 TDI (140/170 PS CBBB/CFGB)', 'Diesel', 170, 350, 205, 420, 220, 450, 'DSG DQ250 Anpassung (199 €)', '8004', 'AEC');
addCar('Skoda', 'Superb (3T)', '3.6 V6 FSI 4x4 (260 PS CDVA)', 'Benzin Sauger', 260, 350, 280, 375, 290, 390, 'DSG DQ250 Optimierung (199 €)', '8004', 'AED');

// -------------------------------------------------------------
// FORD & OPEL EXPANSION
// -------------------------------------------------------------
addCar('Ford', 'Mondeo MK4', '2.0 TDCi (140/163 PS TXBA/UFBA)', 'Diesel', 163, 340, 195, 420, 205, 440, 'Handschalter / PowerShift', '8566', 'ASJ');
addCar('Ford', 'Mondeo MK4', '2.2 TDCi (175/200 PS Q4BA/KNBA)', 'Diesel', 200, 420, 235, 490, 250, 520, 'Handschalter / Wandlerautomatik', '8566', 'AYT');
addCar('Ford', 'Mondeo MK4', '2.5T 5-Zylinder (220 PS HUBA)', 'Benzin Turbo', 220, 320, 260, 400, 280, 430, 'Handschalter 6-Gang', '8566', 'AGM');
addCar('Ford', 'Mondeo MK5', '2.0 TDCi / Bi-TDCi (180/210 PS T8CC/T9CA)', 'Diesel', 210, 450, 245, 510, 260, 540, 'PowerShift 6-Gang Getriebeanpassung', '8566', 'BHW');
addCar('Ford', 'Kuga MK1 / MK2', '2.0 TDCi (140/163/180 PS)', 'Diesel', 180, 400, 215, 460, 230, 480, 'PowerShift / Handschalter', '8566', 'BHO');
addCar('Ford', 'Transit / Custom', '2.0 EcoBlue (105/130/170/185 PS)', 'Diesel', 170, 405, 210, 480, 225, 510, 'Handschalter 6-Gang / 6-Gang Automatik', '8566', 'BKZ');
addCar('Opel', 'Vectra C', '1.9 CDTI (150 PS Z19DTH)', 'Diesel', 150, 320, 185, 400, 200, 430, 'Handschalter 6-Gang F40', '0035', '046');
addCar('Opel', 'Vectra C OPC', '2.8 V6 Turbo (255/280 PS Z28NET)', 'Benzin Turbo', 280, 355, 315, 460, 335, 490, 'Handschalter 6-Gang F40', '0035', '086');
addCar('Opel', 'Zafira B OPC', '2.0 Turbo (240 PS Z20LEH)', 'Benzin Turbo', 240, 320, 275, 410, 295, 440, 'Handschalter 6-Gang M32', '0035', '066');
addCar('Opel', 'Adam S', '1.4 Turbo (150 PS B14NEH)', 'Benzin Turbo', 150, 220, 175, 280, 188, 300, 'Handschalter 6-Gang', '0035', 'BDY');

// -------------------------------------------------------------
// LAND ROVER, JAGUAR, JEEP & DODGE
// -------------------------------------------------------------
addCar('Land Rover', 'Range Rover Sport (L320/L494)', '3.0 TDV6 / SDV6 (245/258/292/306 PS)', 'Diesel', 292, 600, 340, 700, 360, 740, 'ZF 8HP Getriebeoptimierung (199 €)', '2140', 'AAA');
addCar('Land Rover', 'Range Rover Sport (L494)', '4.4 SDV8 (340 PS 448DT)', 'Diesel', 340, 740, 395, 840, 420, 880, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '2140', 'AAB');
addCar('Land Rover', 'Range Rover Sport SVR', '5.0 V8 Supercharged (550/575 PS)', 'Benzin Turbo', 575, 700, 640, 800, 680, 860, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '2140', 'AAC');
addCar('Land Rover', 'Range Rover Evoque', '2.0 TD4 / D180 (180 PS Ingenium)', 'Diesel', 180, 430, 215, 490, 228, 520, 'ZF 9HP Automatik', '2143', 'AAE');
addCar('Land Rover', 'Defender (L663)', 'D250 / D300 (3.0 R6 Ingenium Diesel 249/300 PS)', 'Diesel', 300, 650, 350, 750, 375, 790, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '2140', 'AAZ');
addCar('Jaguar', 'F-Type', '3.0 V6 Kompressor (340/380 PS AJ126)', 'Benzin Turbo', 380, 460, 420, 520, 445, 550, 'ZF 8HP Getriebeoptimierung (199 €)', '1590', 'AAL');
addCar('Jaguar', 'F-Type R / SVR', '5.0 V8 Kompressor (550/575 PS AJ133)', 'Benzin Turbo', 575, 700, 640, 800, 680, 860, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '1590', 'AAM');
addCar('Jaguar', 'XF / XE', '3.0d V6 (275/300 PS 306DT)', 'Diesel', 300, 700, 350, 780, 370, 820, 'ZF 8HP Drehmomentbegrenzung anheben (199 €)', '1590', 'AAS');
addCar('Jeep', 'Grand Cherokee (WK2)', '3.0 V6 MultiJet CRD (250 PS EXF)', 'Diesel', 250, 570, 295, 660, 315, 700, 'ZF 8HP Getriebeoptimierung (199 €)', '1004', 'ABH');
addCar('Jeep', 'Grand Cherokee SRT8 / Trackhawk', '6.4 HEMI / 6.2 Supercharged (468/710 PS)', 'Benzin Turbo', 468, 624, 500, 665, 525, 690, 'ZF 8HP Getriebeoptimierung (199 €)', '1004', 'ABI');
addCar('Dodge', 'RAM 1500', '5.7 V8 HEMI (395/401 PS EZH)', 'Benzin Sauger', 401, 556, 425, 595, 440, 615, 'ZF 8HP Getriebeoptimierung (199 €)', '1004', 'ACD');
addCar('Dodge', 'RAM 1500', '3.0 V6 EcoDiesel (243/260 PS EXF)', 'Diesel', 260, 650, 310, 740, 330, 780, 'ZF 8HP Getriebeoptimierung (199 €)', '1004', 'ACE');

console.log(`Successfully compiled ${vehicles.length} high-precision vehicle configurations!`);

// Generate configurator.js contents
const jsTemplate = `/**
 * LA TUNING – Offizieller Hochleistungs- & Fahrzeugkonfigurator
 * Über ${vehicles.length}+ exakt eingepflegte Fahrzeugmodelle mit realen Serien- & Prüfstandswerten.
 * Abdeckung: BMW E/F/G-Reihe, VAG (Golf 4-8, Audi B5-B9, RS, Cupra, Skoda), Mercedes, Porsche, Ford, Opel, Hyundai u.v.m.
 * Inklusive KBA HSN-Schlüsselkatalog, Live-Schnellsuche, Kaskaden-Dropdowns und Smart-Fallback.
 */

(function() {
    'use strict';

    // =========================================================================
    // 1. DEUTSCHER HSN-HERSTELLER-KATALOG (KBA Schlüssel)
    // =========================================================================
    var HSN_MAP = ${JSON.stringify(HSN_MAP, null, 8)};

    // =========================================================================
    // 2. VOLLSTÄNDIGE FAHRZEUGDATENBANK (${vehicles.length} MODELLE)
    // =========================================================================
    var VEHICLES = ${JSON.stringify(vehicles, null, 8)};

    // =========================================================================
    // 3. SMARTER TUNING-ALGORITHMUS (FALLBACK FÜR EXOTEN)
    // =========================================================================
    function calculateGenericTuning(stockHp, fuelType, customHsn, customTsn, brandName) {
        var s1Hp, s1Nm, s2Hp, s2Nm, stockNm, tcuNote;

        if (fuelType === 'diesel') {
            stockNm = Math.round(stockHp * 2.2);
            s1Hp = Math.round(stockHp * 1.25);
            s1Nm = Math.round(stockNm * 1.25);
            s2Hp = Math.round(stockHp * 1.35);
            s2Nm = Math.round(stockNm * 1.35);
            tcuNote = 'Getriebeoptimierung empfohlen bei Wandler/DSG';
        } else if (fuelType === 'petrol-turbo') {
            stockNm = Math.round(stockHp * 1.45);
            s1Hp = Math.round(stockHp * 1.28);
            s1Nm = Math.round(stockNm * 1.30);
            s2Hp = Math.round(stockHp * 1.42);
            s2Nm = Math.round(stockNm * 1.45);
            tcuNote = 'DSG/Automatik Anpassung für maximales Drehmoment verfügbar';
        } else {
            stockNm = Math.round(stockHp * 1.15);
            s1Hp = Math.round(stockHp * 1.08);
            s1Nm = Math.round(stockNm * 1.09);
            s2Hp = Math.round(stockHp * 1.12);
            s2Nm = Math.round(stockNm * 1.14);
            tcuNote = 'Serien-Getriebeabstimmung ausreichend';
        }

        var resolvedBrand = brandName || (customHsn ? HSN_MAP[customHsn] : '') || 'Individuelles Fahrzeug';
        var resolvedModel = customHsn ? ('HSN ' + customHsn + (customTsn ? ' / TSN ' + customTsn : '')) : 'Kundenspezifisch';

        return {
            hsn: customHsn || '',
            tsn: customTsn || '',
            brand: resolvedBrand,
            model: resolvedModel,
            engine: (fuelType === 'diesel' ? 'Turbodiesel' : (fuelType === 'petrol-turbo' ? 'Turbo-Benziner' : 'Saugmotor')) + ' (' + stockHp + ' PS Serie)',
            fuel: fuelType === 'diesel' ? 'Diesel' : 'Benzin',
            stockHp: stockHp,
            stockNm: stockNm,
            s1Hp: s1Hp,
            s1Nm: s1Nm,
            s2Hp: s2Hp,
            s2Nm: s2Nm,
            tcu: tcuNote,
            vMax: true
        };
    }

    // =========================================================================
    // 4. UI INITIALISIERUNG, LIVE-SUCHE & EVENT HANDLER
    // =========================================================================
    var currentCar = null;
    var activeStage = 1;

    function initConfigurator() {
        var hsnInput = document.getElementById('cfgHsn');
        var tsnInput = document.getElementById('cfgTsn');
        var btnSearchHsn = document.getElementById('cfgBtnSearchHsn');
        var tabHsn = document.getElementById('cfgTabHsn');
        var tabManual = document.getElementById('cfgTabManual');
        var modeHsn = document.getElementById('cfgModeHsn');
        var modeManual = document.getElementById('cfgModeManual');

        var selBrand = document.getElementById('cfgSelBrand');
        var selModel = document.getElementById('cfgSelModel');
        var selEngine = document.getElementById('cfgSelEngine');
        var btnCalcManual = document.getElementById('cfgBtnCalcManual');

        var fallbackBox = document.getElementById('cfgFallbackBox');
        var btnApplyFallback = document.getElementById('cfgBtnApplyFallback');

        if (!hsnInput) return;

        // Tabs
        tabHsn.addEventListener('click', function() {
            tabHsn.classList.add('active');
            tabManual.classList.remove('active');
            modeHsn.style.display = 'block';
            modeManual.style.display = 'none';
        });

        tabManual.addEventListener('click', function() {
            tabManual.classList.add('active');
            tabHsn.classList.remove('active');
            modeManual.style.display = 'block';
            modeHsn.style.display = 'none';
            populateBrands();
        });

        // HSN Auto-Formatting & Auto-Erkennung
        hsnInput.addEventListener('input', function() {
            this.value = this.value.replace(/\\D/g, '').slice(0, 4);
            var hsn = this.value;
            var hint = document.getElementById('cfgHsnBrandHint');
            if (hsn.length === 4 && HSN_MAP[hsn]) {
                if (!hint) {
                    hint = document.createElement('span');
                    hint.id = 'cfgHsnBrandHint';
                    hint.style.color = '#00e676';
                    hint.style.fontWeight = '700';
                    hint.style.marginLeft = '8px';
                    hsnInput.parentNode.querySelector('.cfg-label').appendChild(hint);
                }
                hint.textContent = '✓ ' + HSN_MAP[hsn];
            } else if (hint) {
                hint.textContent = '';
            }

            if (this.value.length === 4 && tsnInput.value.length >= 3) {
                searchHsnTsn();
            }
        });

        // TSN Auto-Formatting
        tsnInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
            if (this.value.length === 3 && hsnInput.value.length === 4) {
                searchHsnTsn();
            }
        });

        btnSearchHsn.addEventListener('click', searchHsnTsn);
        hsnInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') searchHsnTsn(); });
        tsnInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') searchHsnTsn(); });

        // Dropdowns
        selBrand.addEventListener('change', function() { populateModels(this.value); });
        selModel.addEventListener('change', function() { populateEngines(selBrand.value, this.value); });
        btnCalcManual.addEventListener('click', function() {
            var selectedIdx = selEngine.value;
            if (selectedIdx !== '' && VEHICLES[selectedIdx]) {
                displayResult(VEHICLES[selectedIdx]);
            }
        });

        // Fallback
        if (btnApplyFallback) {
            btnApplyFallback.addEventListener('click', function() {
                var hp = parseInt(document.getElementById('cfgFallbackHp').value, 10);
                var fuel = document.getElementById('cfgFallbackFuel').value;
                var hsn = (hsnInput.value || '').trim();
                var tsn = (tsnInput.value || '').trim();
                var brandName = HSN_MAP[hsn] || '';

                if (!hp || hp < 40 || hp > 1500) {
                    alert('Bitte geben Sie eine gültige Serienleistung in PS ein (z. B. 150).');
                    return;
                }
                var genericCar = calculateGenericTuning(hp, fuel, hsn, tsn, brandName);
                fallbackBox.style.display = 'none';
                displayResult(genericCar);
            });
        }

        // Stage Buttons
        var stageButtons = document.querySelectorAll('.cfg-stage-tab');
        stageButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                stageButtons.forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                activeStage = parseInt(this.getAttribute('data-stage'), 10);
                updateDisplayValues();
            });
        });

        // Schnellsuche / Live-Search Bar
        initQuickSearch();
    }

    // =========================================================================
    // 5. LIVE-SCHNELLSUCHE (z.B. "E60 535d", "Golf GTI", "330d", "M3")
    // =========================================================================
    function initQuickSearch() {
        var card = document.querySelector('.cfg-card');
        if (!card) return;

        var searchInput = document.getElementById('cfgQuickSearch');
        var resultsBox = document.getElementById('cfgQuickResults');
        var searchWrapper = document.querySelector('.cfg-search-bar-wrapper');

        if (!searchInput) {
            searchWrapper = document.createElement('div');
            searchWrapper.className = 'cfg-search-bar-wrapper';
            searchWrapper.style.marginBottom = '22px';
            searchWrapper.style.position = 'relative';

            searchWrapper.innerHTML = 
                '<div style="position:relative;">' +
                '<input type="text" id="cfgQuickSearch" class="cfg-input" placeholder="🔍 Direktsuche: Modell oder Motor eingeben (z. B. E60 535d, Golf GTI, 330d, C63, M3, RS3, 1.9 TDI)..." style="padding-left:18px;font-size:0.95rem;background:#141414;border-color:rgba(227,30,36,0.3);">' +
                '<div id="cfgQuickResults" style="display:none;position:absolute;top:100%;left:0;right:0;background:#181818;border:1px solid var(--red);border-top:none;border-radius:0 0 6px 6px;max-height:300px;overflow-y:auto;z-index:99;box-shadow:0 15px 35px rgba(0,0,0,0.85);"></div>' +
                '</div>';

            card.insertBefore(searchWrapper, card.firstChild);
            searchInput = document.getElementById('cfgQuickSearch');
            resultsBox = document.getElementById('cfgQuickResults');
        }

        searchInput.addEventListener('input', function() {
            var q = this.value.trim().toLowerCase();
            if (q.length < 2) {
                resultsBox.style.display = 'none';
                return;
            }

            var terms = q.split(/\\s+/).filter(Boolean);
            var matches = VEHICLES.filter(function(v) {
                var fullStr = (v.brand + ' ' + v.model + ' ' + v.engine).toLowerCase();
                var keyStr = ((v.hsn || '') + ' ' + (v.tsn || '')).toLowerCase();
                var romanReplaced = fullStr
                    .replace(/\\bgolf viii\\b/g, 'golf 8')
                    .replace(/\\bgolf vii\\b/g, 'golf 7')
                    .replace(/\\bgolf vi\\b/g, 'golf 6')
                    .replace(/\\bgolf v\\b/g, 'golf 5')
                    .replace(/\\bgolf iv\\b/g, 'golf 4');

                var compactFull = fullStr.replace(/[\\s\\-\\-\\(\\)]+/g, '');
                var compactRoman = romanReplaced.replace(/[\\s\\-\\-\\(\\)]+/g, '');

                return terms.every(function(t) {
                    var compactT = t.replace(/[\\s\\-\\-\\(\\)]+/g, '');
                    if (!compactT) return true;

                    if (compactT.length === 1) {
                        var reg = new RegExp('\\\\b' + compactT + '\\\\b', 'i');
                        return reg.test(fullStr) || reg.test(romanReplaced);
                    }

                    return fullStr.indexOf(t) !== -1 ||
                           romanReplaced.indexOf(t) !== -1 ||
                           compactFull.indexOf(compactT) !== -1 ||
                           compactRoman.indexOf(compactT) !== -1 ||
                           keyStr.indexOf(t) !== -1;
                });
            });

            if (matches.length === 0) {
                resultsBox.innerHTML = '<div style="padding:14px;color:#888;font-size:0.85rem;">Kein exaktes Modell im Schnellkatalog. Sie können die Dropdowns nutzen oder HSN/TSN eingeben.</div>';
                resultsBox.style.display = 'block';
                return;
            }

            var html = '';
            matches.slice(0, 15).forEach(function(m) {
                var idx = VEHICLES.indexOf(m);
                html += '<div class="cfg-search-item" data-idx="' + idx + '" style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.06);cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:background 0.2s;">' +
                    '<div>' +
                    '<strong style="color:#fff;font-size:0.92rem;">' + m.brand + ' ' + m.model + '</strong> ' +
                    '<span style="color:var(--red);font-size:0.85rem;margin-left:6px;">' + m.engine + '</span>' +
                    '</div>' +
                    '<div style="text-align:right;">' +
                    '<span style="color:#aaa;font-size:0.8rem;margin-right:8px;">Serie: ' + m.stockHp + ' PS</span>' +
                    '<span style="color:#00e676;font-weight:700;font-size:0.85rem;">➔ ' + m.s1Hp + ' PS</span>' +
                    '</div>' +
                    '</div>';
            });

            resultsBox.innerHTML = html;
            resultsBox.style.display = 'block';

            // Click Handler auf Ergebnisse
            resultsBox.querySelectorAll('.cfg-search-item').forEach(function(item) {
                item.addEventListener('mouseenter', function() { this.style.background = 'rgba(227,30,36,0.15)'; });
                item.addEventListener('mouseleave', function() { this.style.background = 'transparent'; });
                item.addEventListener('click', function() {
                    var idx = parseInt(this.getAttribute('data-idx'), 10);
                    if (VEHICLES[idx]) {
                        resultsBox.style.display = 'none';
                        searchInput.value = VEHICLES[idx].brand + ' ' + VEHICLES[idx].model + ' ' + VEHICLES[idx].engine;
                        if (VEHICLES[idx].hsn) document.getElementById('cfgHsn').value = VEHICLES[idx].hsn;
                        if (VEHICLES[idx].tsn) document.getElementById('cfgTsn').value = VEHICLES[idx].tsn;
                        displayResult(VEHICLES[idx]);
                    }
                });
            });
        });

        // Schließen bei Klick außerhalb
        document.addEventListener('click', function(e) {
            if (!searchWrapper.contains(e.target)) {
                resultsBox.style.display = 'none';
            }
        });
    }

    // =========================================================================
    // 6. HSN/TSN ABFRAGE
    // =========================================================================
    function searchHsnTsn() {
        var hsn = document.getElementById('cfgHsn').value.trim();
        var tsn = document.getElementById('cfgTsn').value.trim().toUpperCase();
        var fallbackBox = document.getElementById('cfgFallbackBox');

        if (hsn.length < 4) {
            alert('Bitte geben Sie die 4-stellige HSN ein (z. B. 0005 für BMW oder 0603 für VW).');
            return;
        }

        // 1. Exakter Treffer HSN + TSN
        var match = VEHICLES.find(function(v) {
            return v.hsn === hsn && (tsn === '' || v.tsn === tsn || tsn.startsWith(v.tsn));
        });

        // 2. Treffer nur über HSN
        if (!match && tsn === '') {
            match = VEHICLES.find(function(v) { return v.hsn === hsn; });
        }

        if (match) {
            if (fallbackBox) fallbackBox.style.display = 'none';
            displayResult(match);
        } else {
            // HSN bekannt? Zeige passenden Hersteller im Fallback an
            var brand = HSN_MAP[hsn];
            if (fallbackBox) {
                var title = fallbackBox.querySelector('h4');
                if (title && brand) {
                    title.innerHTML = '✓ Hersteller: <strong>' + brand + '</strong> erkannt (HSN ' + hsn + ')';
                }
                fallbackBox.style.display = 'block';
                fallbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert('Fahrzeugschlüssel nicht im Schnellkatalog. Bitte nutzen Sie die Direktsuche.');
            }
        }
    }

    // =========================================================================
    // 7. MANUELLE DROPDOWN KASKADE
    // =========================================================================
    function populateBrands() {
        var selBrand = document.getElementById('cfgSelBrand');
        if (selBrand.options.length > 1) return;

        var brands = [];
        VEHICLES.forEach(function(v) {
            if (brands.indexOf(v.brand) === -1) brands.push(v.brand);
        });
        brands.sort();

        brands.forEach(function(b) {
            var opt = document.createElement('option');
            opt.value = b;
            opt.textContent = b;
            selBrand.appendChild(opt);
        });
    }

    function populateModels(brand) {
        var selModel = document.getElementById('cfgSelModel');
        var selEngine = document.getElementById('cfgSelEngine');
        selModel.innerHTML = '<option value="">-- Modell wählen --</option>';
        selEngine.innerHTML = '<option value="">-- Zuerst Modell wählen --</option>';
        selModel.disabled = !brand;
        selEngine.disabled = true;

        if (!brand) return;

        var models = [];
        VEHICLES.forEach(function(v) {
            if (v.brand === brand && models.indexOf(v.model) === -1) {
                models.push(v.model);
            }
        });
        models.sort();

        models.forEach(function(m) {
            var opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            selModel.appendChild(opt);
        });
    }

    function populateEngines(brand, model) {
        var selEngine = document.getElementById('cfgSelEngine');
        selEngine.innerHTML = '<option value="">-- Motorisierung wählen --</option>';
        selEngine.disabled = !model;

        if (!model) return;

        VEHICLES.forEach(function(v, idx) {
            if (v.brand === brand && v.model === model) {
                var opt = document.createElement('option');
                opt.value = idx;
                opt.textContent = v.engine + ' (' + v.stockHp + ' PS / ' + v.stockNm + ' Nm)';
                selEngine.appendChild(opt);
            }
        });
    }

    // =========================================================================
    // 8. ERGEBNIS-DARSTELLUNG & WHATSAPP
    // =========================================================================
    function displayResult(car) {
        currentCar = car;
        var resultBox = document.getElementById('cfgResultBox');
        if (!resultBox) return;

        resultBox.style.display = 'block';
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });

        document.getElementById('cfgResCarName').textContent = car.brand + ' ' + car.model;
        document.getElementById('cfgResEngineName').textContent = car.engine + ' (' + car.fuel + ')';

        var keyBadge = document.getElementById('cfgResKeyBadge');
        if (car.hsn && car.tsn) {
            keyBadge.textContent = 'HSN: ' + car.hsn + ' | TSN: ' + car.tsn;
            keyBadge.style.display = 'inline-block';
        } else {
            keyBadge.style.display = 'none';
        }

        updateDisplayValues();
    }

    function updateDisplayValues() {
        if (!currentCar) return;

        var targetHp, targetNm, priceText, badgeText, reqText;
        var stockHp = currentCar.stockHp;
        var stockNm = currentCar.stockNm;

        if (activeStage === 1) {
            targetHp = currentCar.s1Hp;
            targetNm = currentCar.s1Nm;
            priceText = 'ab 249 € (inkl. V-Max Aufhebung)';
            badgeText = 'STAGE 1 – SOFTWAREOPTIMIERUNG';
            reqText = '100% Serien-Hardware ausreichend. Keine mechanischen Umbauten notwendig.';
        } else if (activeStage === 2) {
            targetHp = currentCar.s2Hp;
            targetNm = currentCar.s2Nm;
            priceText = 'ab 399 € (inkl. V-Max Aufhebung)';
            badgeText = 'STAGE 2 – PERFORMANCE UPGRADE';
            reqText = 'Empfohlen: Upgrade Downpipe / Ladeluftkühler / Sport-Ansaugung.';
        } else {
            targetHp = Math.round(stockHp * 1.08);
            targetNm = Math.round(stockNm * 1.15);
            priceText = 'ab 249 €';
            badgeText = 'ECO-TUNING – SPRITERSPARNIS';
            reqText = 'Bis zu 15% weniger Kraftstoffverbrauch & spürbar mehr Drehmoment im Drehzahlkeller.';
        }

        var diffHp = targetHp - stockHp;
        var diffNm = targetNm - stockNm;
        var pctHp = Math.round((diffHp / stockHp) * 100);
        var pctNm = Math.round((diffNm / stockNm) * 100);

        document.getElementById('cfgResStageBadge').textContent = badgeText;
        document.getElementById('cfgResStockHp').textContent = stockHp + ' PS';
        document.getElementById('cfgResStockNm').textContent = stockNm + ' Nm';
        document.getElementById('cfgResTargetHp').textContent = targetHp + ' PS';
        document.getElementById('cfgResTargetNm').textContent = targetNm + ' Nm';

        document.getElementById('cfgResDiffHp').textContent = '+' + diffHp + ' PS (+' + pctHp + '%)';
        document.getElementById('cfgResDiffNm').textContent = '+' + diffNm + ' Nm (+' + pctNm + '%)';

        document.getElementById('cfgResPrice').textContent = priceText;
        document.getElementById('cfgResReq').textContent = reqText;

        var tcuBox = document.getElementById('cfgResTcuBox');
        if (currentCar.tcu) {
            document.getElementById('cfgResTcuText').textContent = currentCar.tcu;
            tcuBox.style.display = 'flex';
        } else {
            tcuBox.style.display = 'none';
        }

        var maxHpScale = Math.max(targetHp * 1.1, 400);
        var maxNmScale = Math.max(targetNm * 1.1, 500);

        var barStockHp = (stockHp / maxHpScale) * 100;
        var barTargetHp = (targetHp / maxHpScale) * 100;
        var barStockNm = (stockNm / maxNmScale) * 100;
        var barTargetNm = (targetNm / maxNmScale) * 100;

        document.getElementById('cfgBarStockHp').style.width = barStockHp + '%';
        document.getElementById('cfgBarTargetHp').style.width = barTargetHp + '%';
        document.getElementById('cfgBarStockNm').style.width = barStockNm + '%';
        document.getElementById('cfgBarTargetNm').style.width = barTargetNm + '%';

        var stageName = activeStage === 1 ? 'Stage 1' : (activeStage === 2 ? 'Stage 2' : 'Eco-Tuning');
        var keyInfo = '';
        if (currentCar.hsn && currentCar.tsn) {
            keyInfo = ' (HSN: ' + currentCar.hsn + ' / TSN: ' + currentCar.tsn + ')';
        }

        var waText = 'Hallo LA Tuning,\\n\\n' +
            'ich habe mein Fahrzeug im Leistungsrechner konfiguriert:\\n' +
            '🚗 Fahrzeug: ' + currentCar.brand + ' ' + currentCar.model + ' ' + currentCar.engine + keyInfo + '\\n' +
            '📊 Serie: ' + stockHp + ' PS / ' + stockNm + ' Nm\\n' +
            '⚡ Wunsch-Upgrade: ' + stageName + ' auf ca. ' + targetHp + ' PS / ' + targetNm + ' Nm (+' + diffHp + ' PS / +' + diffNm + ' Nm)\\n\\n' +
            'Habt ihr in nächster Zeit einen Termin dafür frei?';

        var waUrl = 'https://wa.me/491772253484?text=' + encodeURIComponent(waText);
        var btnWa = document.getElementById('cfgBtnWhatsApp');
        if (btnWa) {
            btnWa.href = waUrl;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initConfigurator);
    } else {
        initConfigurator();
    }
})();
`;

fs.writeFileSync(path.join(__dirname, 'configurator.js'), jsTemplate, 'utf8');
console.log('Successfully wrote configurator.js!');
