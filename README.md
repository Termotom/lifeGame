# lifeGame
Jeu de la vie

Par défaut la grille du jeu de la vie est de 100 sur 100.

La fonction de setup met en place la grille de départ avec les cellules vivantes (1) de départ.
Ces cellules sont passées dans une matrice (matLife) en paramètre.

La position de la matrice représentant en fait le modèle de départ est passée par les paramètres xPos et yPos.

Deux modèles sont à disposition dans le code source, un planeur, et une matrice dans laquelle les cellules
vivantes représentent le mot Polytech. Le troisième modèle, celui par défaut est la génération aléatoire
de cellules vivantes sur la grille.

Une fois que Setup a chargé le modèle (les cellules vivantes), la fonction Evolution permet de simuler les 
différentes itérations dans un maximum de iteMax itérations.
 