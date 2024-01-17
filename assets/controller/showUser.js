import React from 'react';

import { createRoot } from 'react-dom/client';

import { ShowUser } from '../composant/ShowUser';



let root = document.querySelector("#showuser");

createRoot(root).render(<ShowUser/>);