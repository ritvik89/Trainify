import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import hero from "../assets/hero.jpg"
import menbody from "../assets/menbody.jpg"
import womenbody from "../assets/womenbody.jpg"
import musculermen from "../assets/musculermen.jpg"
import fatlossmen from "../assets/fatlossmen.jpg"
import incresestrength from "../assets/incresestrength.jpg"
import absworkouts from "../assets/absworkouts.jpg"
import fullbody from "../assets/fullbody.jpg"
import sportsperformance from "../assets/sportsperformance.jpg"
import bodyweight from "../assets/bodyweight.jpg"
import beginner from "../assets/beginner.jpg"
import athome from "../assets/athome.jpg"
import cardio from "../assets/cardio.jpg"
import chestworkouts from "../assets/chestworkouts.jpg"
import backworkouts from "../assets/backworkouts.jpg"
import bicepworkouts from "../assets/bicepworkouts.jpg"
import legsworkouts from "../assets/legsworkouts.jpg"



import './Home.css'
import { Link } from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate();

  // Function to handle card click
  const handleCardClick = (videoUrl) => {


    const expirationTime = localStorage.getItem('expirationTime');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentTime = new Date().getTime();

    if (isLoggedIn && expirationTime && currentTime > parseInt(expirationTime)) {
      // Expired
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('expirationTime');
      navigate('/login');
      return;
    }


    if (isLoggedIn) {
      window.open(videoUrl, '_blank'); // Open video in new tab
    } else {
      navigate('/login'); // Redirect to login
    }
  };

  return (
    <>

      <div className='homemain-container'>
        <Navigation />
        <div className='home-container'>

          <div className='image-container'>
            <img src={hero} alt='Gym Background' className='hero-image' />
            <div className='overlay-text'>
              <h1 className='heading'>Best Workout Plans</h1>
              <p className='para'>The most comprehensive database of  workout routines anywhere! Download workout plans any goal or experience level.</p>
            </div>
          </div>

          <div className='views-container'>
            <div>
              <h1>2000+</h1>
              <p>WORKOUTS</p>
            </div>
            <div>
              <h1>500M</h1>
              <p>DOWNLOADS</p>
            </div>
            <div>
              <h1>350+</h1>
              <p>CONTRIBUTERS</p>
            </div>
          </div>
        </div>

        <div className='card-container'>
          <div className='crardcontainer-content'>
            <h1>Workout Categories</h1><br />
            <p>Choose a category that best suits the workout you're searching for. Once in the category, use the sort<br /> and filter options to find the right workout for your experience and goals.</p>
          </div>

          <div className='category-list'>
            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=PY6DrbX4W4o&t=3s')}>
              <img src={menbody} className='card-image' alt="Workout for Men" />
              <div className='category-name'>Workout For Men</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=dv1nvAihmtY')}>
              <img src={womenbody} className='card-image' alt="Workout for Women" />
              <div className='category-name'>Workout For Women</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=VqXLFffiU2I')}>
              <img src={musculermen} className='card-image' alt="Muscle Building" />
              <div className='category-name'>Muscle Building</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=w9R_KuW6uTM')}>
              <img src={fatlossmen} className='card-image' alt="Fat Loss" />
              <div className='category-name'>Fat Loss</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=sEL2UhiNEY4')}>
              <img src={incresestrength} className='card-image' alt="Increase Strength" />
              <div className='category-name'>Increase Strength</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=OUctE0Gv5Pk')}>
              <img src={absworkouts} className='card-image' alt="Abs Workout" />
              <div className='category-name'>Abs Workout</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=BvFu4iWNsN4')}>
              <img src={fullbody} className='card-image' alt="Full Body" />
              <div className='category-name'>Full Body</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=htWyIeJwEYY')}>
              <img src={sportsperformance} className='card-image' alt="Sports Performance" />
              <div className='category-name'>Sports Performance</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=LhL5SNZfnQs')}>
              <img src={bodyweight} className='card-image' alt="Body Weight" />
              <div className='category-name'>Body Weight</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=3PMrt-1WDaI')}>
              <img src={beginner} className='card-image' alt="Beginner" />
              <div className='category-name'>Beginner</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=_NhuJDuHNZY')}>
              <img src={athome} className='card-image' alt="At Home" />
              <div className='category-name'>At Home</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=yWnacRo2VbA')}>
              <img src={cardio} className='card-image' alt="Cardio" />
              <div className='category-name'>Cardio</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=lvk2PMsuS88&t=213s')}>
              <img src={chestworkouts} className='card-image' alt="Chest Workouts" />
              <div className='category-name'>Chest Workouts</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=wpHO3DZpE4w')}>
              <img src={backworkouts} className='card-image' alt="Back Workouts" />
              <div className='category-name'>Back Workouts</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=20-YGOXNs30')}>
              <img src={bicepworkouts} className='card-image' alt="Bicep Workouts" />
              <div className='category-name'>Bicep Workouts</div>
            </div>

            <div className='cell' onClick={() => handleCardClick('https://www.youtube.com/watch?v=IBp9TOCGIJI')}>
              <img src={legsworkouts} className='card-image' alt="Legs Workouts" />
              <div className='category-name'>Legs Workouts</div>
            </div>
          </div>


          <hr />
          <div className='tips-container'><br />

            <h1 className='tipsheading'>WORKOUT TIPS & ADVICE</h1>
            <div className='tips-info'>
              <h2>Workouts F.A.Q.</h2>
              <h4>1. What is the best routine for the gym?</h4>
              <p>The best routine for the gym is one that is flexible with your schedule and you actually enjoy. These two factors will contribute greatly to your ability to be consistent with your workouts. Consistency with your workouts and progressing as you perform them is what will lead to results.</p><br />
              <p>That being said, there are plenty of great workout program styles one can do to build muscle, lose fat, or build strength. The body composition goals (building muscle and losing fat) will be accomplished through similar style workouts combined with differing nutritional principles, while those looking for strength gains may need to focus on programs that are centered on the idea of specificity.</p><br />
              <p>To sum that statement up, if you want to change your body composition, you’ll want to train with volume. If you want to build strength, you’ll want a program that is strength specific for the lifts you want to improve such as the bench press, squat and deadlift.</p><br />

              <h4>2. What body parts to work on what days?</h4>
              <p>The answer to this question would assume that the person asking is referring to body part splits. In this case, the way you split your days likely won’t matter too much, as long as you work every body part throughout the week.</p><br />
              <p>There may be some benefit into ensuring you don’t hit chest and shoulders or legs and back on consecutive days, but if you do, it probably won’t be that big of an issue depending on your overall strength levels.</p><br />
              <p>However, if you are looking to optimize your training by incorporating a higher training frequency (hitting each muscle group more often throughout the week), you may want to look into pairing certain muscle groups on certain workout days.</p><br />


              <h4>3. What should a beginner do at the gym?</h4>
              <p>The best thing a beginner can do at the gym is seek out the help of a trained professional to assist them with learning the proper form of each exercise. Practicing the basics and establishing a solid foundation in terms of form will help a beginner lifter remain injury free throughout their life.</p><br />
              <p>If you are not in the position to hire a trained professional, you may want to proceed working out with some level of caution. The same recommendation of practicing the fundamentals still applies. Start off with light weight (the bar on barbell exercises) and record yourself performing exercises.</p><br />
              <p>With the exercise recordings, compare your form with examples of proper form. Evaluate how you are moving and progress from there by either working on your form, or after you’ve mastered your form, adding weight.</p><br />


              <h4>4. What is the best workout routine for beginners?</h4>
              <p>The best workout routine for true beginners is rather subjective to what the beginner is comfortable doing and their understanding of how to perform exercises.</p><br />
              <p>Generally speaking though, beginners can start off performing anywhere between 2-4 workouts per week. These workouts can be either full body workouts or upper/lower workouts.</p><br />
              <p>The workouts should focus on learning ideal movement patterns of fundamental lifts such as horizontal presses, vertical presses, horizontal pulls, vertical pulls, squats, hip hinges, and loaded carries.</p><br />


              <h4>5. What is the best workout schedule to build muscle?</h4>
              <p>The best workout schedule to build muscle is a workout schedule that you enjoy and can be consistent with.</p><br />
              <p>In addition to consistency, it would be beneficial to have a higher training frequency if the goal is to build lean muscle mass. You’ll want to hit each muscle group either directly or indirectly 2-3 times weekly to maximize muscle growth.</p><br />
              <p>Some great splits to look into would be full body workouts, upper/lower workouts, push/pull workouts and push/pull/legs workouts.</p><br />


              <h4>6. How do I schedule my workout at the gym?</h4>
              <p>This all boils down to setting up and selecting workout programs that are both flexible and enjoyable. There is no perfect one way to set up training. It’s very subjective from person to person.</p><br />
              <p>If you only have 2 days where you’re able to make it to the gym, a full body workout makes sense. 3 days? Full body makes sense, push/pull/legs can work as well if that is what you enjoy. The more days you have available, the more split and scheduling options you’ll have.</p><br />
              <p>Start off by figuring out how many and what days you can make it to the gym regularly. Then, look to schedule your training on those days. Find a workout that doesn’t require any more than that total training frequency. Then, look for something where if you miss a training day, you’re able to make it up throughout the week or already train that muscle more than once per week.</p><br />

              <h4>7. Can you gain 10 pounds of muscle in a month?</h4>
              <p>You can gain 10 pounds in a month. You can’t gain 10 pounds of pure muscle in a month naturally.</p><br />
              <p>10 pounds in a month is likely during a lean bulking phase, especially for beginners. The muscle will grow fairly quickly, and if you’re coming off a fat loss phase, early weight gain will be from glycogen replenishing and being stored in the body.</p><br />
              <p>If your goal is to gain muscle, it’s better to take a slower approach. This will limit fat gain during your muscle building phases.</p><br />


              <h4>8. What is a good gym routine?</h4>
              <p>A good gym routine is one that you enjoy, works your muscles with the appropriate frequency and volume for your experience level, and that you can be consistent with.</p><br />
              <p>Exercise selection for a good gym routine will train fundamental movement patterns (push, pull, lunge, hip hinge, squat, and carry) in a way that you are comfortable performing them. There is a pain-free variation for nearly every body type who can healthily perform these movements.</p><br />
              <p>A good gym routine also focuses on progression. This means making the workouts more challenging in some way from week to week, or training phase to training phase as you get more advanced.</p><br />


            </div>

          </div>











        </div>
        <Footer />
      </div>


    </>
  )
}
