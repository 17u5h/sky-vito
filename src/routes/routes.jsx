import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import { motion, AnimatePresence } from 'framer-motion';
import {backdrop} from "../constants/animationModal";
import {Login} from "../components/LoginRegistration/Login";
import UiModal from "../components/UI/UiModal/UiModal";


const AppRoutes = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const showLoginFormHandle = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  return (
    <Routes>
      <Route path="/" element={<AnimatePresence>
        {showLoginForm && (
          <UiModal>
            <motion.div variants={backdrop} initial="hidden" animate="visible" exit="exit">
              <Login closeModal={showLoginFormHandle} />
            </motion.div>
          </UiModal>
        )}
      </AnimatePresence>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
