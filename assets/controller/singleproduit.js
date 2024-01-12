import React from 'react';

import { createRoot } from 'react-dom/client';

import SingleProduit from '../composant/singleproduit';



let root = document.querySelector("#SingleProduit");

createRoot(root).render(<SingleProduit/>);