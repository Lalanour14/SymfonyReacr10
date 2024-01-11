

import React from 'react';

import { createRoot } from 'react-dom/client';

import Produit from '../composant/produit';



let root = document.querySelector("#produit");

createRoot(root).render(<Produit/>);