
import React from 'react';
import { createRoot } from 'react-dom/client';
import Test from '../composant/test';



let root = document.querySelector("#test");

createRoot(root).render(<Test/>);