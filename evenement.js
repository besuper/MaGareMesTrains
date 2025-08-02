function evenement() {
    compteur_evenement++;

    if (compteur_evenement == 90) {
        const dice = getRandomIntRange(1, 8);

        switch (dice) {
            case 1:
                travaux1 = true;
                compteur_travaux_1 = 1;
                break;
            case 2:
                eclair_bol = true;
                eclair = 1;
                break;
            case 3:
                la_mousse = true;
                animation_mousse = 1;
                break;
            case 4:
                les_ballons = true;
                animation_marion = 1;
                break;
            case 5:
                le_ampli = true;
                animation_ampli = 1;
                break;
            case 6:
                animation_neige_bol = true;
                animation_neige = 1;
                break;
            case 7:
                incendie_intervention = true;
                intervention = -2000;
                break;
            case 8:
                noel_bol = true;
                animation_noel = 1;
                break;
        }
    }

    if (compteur_evenement > 500) {
        compteur_evenement = 1;
    }
}
