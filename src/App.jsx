import React, { useState } from "react";
import Gift from "./gift";
import Confetti from "./confetti";
import {motion} from 'framer-motion';
import yash from './WhatsApp Image 2022-10-15 at 23.07.43.jpeg'

const menuVariants = {
  opened: {
    top: 0,
    transition: {
      type: "spring",
      stiffness: 190,
      when: "beforeChildren",
      staggerChildren: 0.7,
       duration : 3
    },
   
  },
  closed: {
    top: "-150vh",
  },
};

const giftVariants = {
  opened: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 190,
      when: "beforeChildren",
      staggerChildren: 0.7,
       duration : 3
    },
   
  },
  closed: {
    y: "100vh",
  },
};

function App() {
  const [party, setParty] = useState(false);
  const [open,setOpen] = useState(false)

  return (
    <>
          <motion.div variants={menuVariants} animate={open ? "opened" : "closed"} className="content"><div class="container py-4">
		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={yash} alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue">Happiest Birthday Saloni!</h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Yeah I know this is the most nerdy way to wish someone but I do not have any materialistic thing for you.Just a small effort to the most kindest person(chipkali🥲) ever I met and wishing you to be the happiest one and the person whome I can share about anything  . So last but not the least Wishing you the Happiest Birthday of your life(iske baad toh shadi ho jani h 😂) to you. I hope you will enjoy your day(keep this as a secret sabke liye itna hoga😂).</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Your Party will still be pending 🥲</li>
				</ul>
			</div>  
		</article>
	</div>
          </motion.div>
      {<Confetti party={party} setParty={setParty} />}
      <motion.div variants={giftVariants} animate={!open ? "opened" : "closed"}  className="App">
        <Gift  party={party} setParty={setParty} setOpen={setOpen} open={open} />

      </motion.div>
    </>
  );
}

export default App;
