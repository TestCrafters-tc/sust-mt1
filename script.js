const questions = [
    {
        "id": 1,
        "text": "দুইটি সরল ছন্দিত কণার গতির সমীকরণ x = asin(ωt+π) এবং x = acos{ωt+(π/3)} হলে কণা দুইটির দশা পার্থক্য কত? / What is the phase difference between two simple harmonic particles whose equations of motion are x = asin(ωt+π) and x = acos(ωt+(π/3))?",
        "options": ["π/3", "2π/3", "π/6", "0", "π/4"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 2,
        "text": "একটি নাইলনের দড়িতে 70kg ভরের একজন পর্বতারোহী ঝুললে দড়ির দৈর্ঘ্য 1.5m বৃদ্ধি পায়। দড়ির মূল দৈর্ঘ্য 60m এবং ব্যাস 9mm হলে উহার ইয়ং এর গুনাঙ্ক কত Pa? / A 70 kg climber hanging from a nylon rope causes an increase of 1.5m in the rope's length. The original length of the rope is 60m, and its diameter is 9mm. What is the Young's modulus of the rope? ",
        "options": ["6.4 × 10⁷", "8.31 × 10⁸", "4.31 × 10⁸", "4.4 × 10⁹", "1.35 × 10⁶"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 3,
        "text": "কোন স্থানে ভূপৃষ্ঠের নিকটে উর্ধ্বমুখী তড়িৎ প্রাবল্যের মান 4.9 × 10^5 N.C^-1। ঐ স্থানের 1 g ভরের একটি বস্তুকে শূন্যে স্থির রাখতে হলে এর আধান কত কুলম্ব হবে? / At a place near the Earth's surface, if the electric field is 4.9 × 10^5 N.C^-1, what is the charge on an object of mass 1 g required to keep it stationary?",
        "options": ["2 × 10^-6", "2 × 10^-7", "2 × 10^-8", "4 × 10^-7", "6 × 10^-10"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 4,
        "text": "150 m ব্যাসার্ধবিশিষ্ট একটি বাঁকা পথে 70 km.h^-1 বেগে একটি গাড়ি নিরাপদে চালাতে হলে পথটিকে কত ডিগ্রি কোণে আনত রাখতে হবে? / To drive a car at a speed of 70 km/h along a curved path with a radius of 150 m, what angle should the path be tilted at?",
        "options": ["10.43°", "14.42°", "12.42°", "8.42°", "11.42°"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 5,
        "text": "একটি কণার অবস্থান ভেক্টর 5î + 3ĵ + 1k̂ m। তার উপর −3î + 7ĵ N বল প্রযুক্ত হলে টর্কের মান কত N.m? / A particle's position vector is 5î + 3ĵ + 1k̂ m. What is the torque when a force of −3î + 7ĵ N is applied?",
        "options": ["44.65", "40.65", "24.65", "34.65", "54.65"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 6,
        "text": "কত eV শক্তির তড়িৎ চৌম্বকীয় রশ্মি দ্বারা আলোক ক্রিয়া সম্ভব? / What is the energy (in eV) of the electromagnetic radiation capable of inducing the photoelectric effect?",
        "options": ["0.1", "0.5", "1.0", "1.25", "2.5"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 7,
        "text": "2 mm² সুষম প্রস্থচ্ছেদের ক্ষেত্রফল বিশিষ্ট একটি পরিবাহকের মধ্য দিয়ে 1 মিনিটে 600 C চার্জ প্রবাহিত হলে ইলেকট্রনের তাড়ন বেগ কত mm.s^-1? (প্রতি ঘনমিটারে মুক্ত ইলেকট্রনের সংখ্যা 10²⁸) / If a conductor with a cross-sectional area of 2 mm² carries a charge of 600 C in 1 minute, what is the drift velocity of the electrons (in mm/s)? (The number of free electrons per cubic meter is 10²⁸)",
        "options": ["7.512", "6.753", "3.125", "2.142", "0.625"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 8,
        "text": "50 kg ভরের কোন বস্তুকে h উচ্চতা থেকে ফেললে ভূমি স্পর্শকালে এর গতিশক্তি 25 kmh^-1 বেগে চলমান 2000 kg ট্রাকের গতিশক্তির সমান। h এর মান কত m? / What is the height (h) from which a 50 kg object must be dropped so that its kinetic energy upon hitting the ground equals the kinetic energy of a 2000 kg truck moving at 25 km/h?",
        "options": ["9.8", "29.5", "98.5", "109.2", "189.6"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 9,
        "text": "1.8 × 10^8 eV গতিশক্তিসম্পন্ন প্রোটনের ভর কত?( স্থির অবস্থায় প্রোটনের ভর 1.673 ×10^-27 kg) / What is the mass of a proton with a kinetic energy of 1.8 × 10^8 eV? (The rest mass of the proton is 1.673 × 10^-27 kg)",
        "options": ["1.0 × 10^-27", "1.993 × 10^-27", "15.09× 10^-27", "30 × 10²⁷", "31.115 × 10^-27"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 10,
        "text": "1.5 kg ভরের একটি বল সোজা নিচের দিকে পড়ছে। বাতাসের বাধা 7.5 N হলে, বলটির ত্বরণ কত ms^-2? / A ball of mass 1.5 kg is falling straight downward. If the air resistance is 7.5 N, what is the acceleration of the ball?",
        "options": ["14.8", "11.6", "8.4", "4.8", "2.6"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 11,
        "text": "60°C তাপমাত্রার 10kg পানিকে 100°C তাপমাত্রার বাষ্পে পরিণত করলে এন্ট্রপির পরিবর্তন কত J.K^-1? (পানির বাষ্পীভবনের সুপ্ত তাপ 2.26×10^6 J.kg^-1) / What is the change in entropy when 10 kg of water at 60°C is converted to steam at 100°C? (Latent heat of vaporization of water = 2.26×10^6 J/kg)",
        "options": ["8.05×10⁴", "6.04×10⁴", "7.26×10⁴", "0.48x10⁴", "6.54×10⁴"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 12,
        "text": "সুরমা নদীতে স্রোতের বেগ 3 kmh^-1। এক ব্যক্তি 5km.h^-1 বেগে নৌকা চালাতে সক্ষম। নদীর প্রস্থ 0.5 km। স্রোতের সঙ্গে কত ডিগ্রী কোণে নৌকা চালালে সে 12min এ নদীর অপরপারে একটি নির্দিষ্ট ঘাটে পৌঁছাতে পারবে? / The river current in Surma River has a speed of 3 km/h. A person can row a boat at a speed of 5 km/h. The width of the river is 0.5 km. At what angle should the boat be rowed against the current to reach a specific dock across the river in 12 minutes?",
        "options": ["30", "50", "45", "59", "35"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 13,
        "text": "তেজস্ক্রিয় 25Na এর অর্ধায়ু 15 দিন। উহার 60% ক্ষয় হতে কত দিন লাগবে? / The half-life of radioactive 25Na is 15 days. How many days will it take for 60% of it to decay?",
        "options": ["20.83", "13.02", "19.83", "11.06", "28.06"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 14,
        "text": "কোন স্থানে পশ্চিমমুখী চৌম্বকক্ষেত্রের মান 4T। ঐ স্থানে একটি ইলেকট্রনকে 2x10^6 m.s^-1 বেগে উত্তর দিকে গতিশীল রাখতে হলে তার উপর কত তড়িৎ প্রাবল্য (NC^-1) আরোপ করতে হবে? / At a place where the magnetic field is 4 T, what electric field (NC^-1) must be applied to keep an electron moving northward with a speed of 2 × 10^6 m/s?",
        "options": ["8×10^6; দক্ষিণমুখী", "8×10^6; নিম্নমুখী", "8×10^6 ; উর্দ্ধমুখী", "4×10^6 ; উর্দ্ধমুখী", "8×10^6 ; পূর্বমুখী"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 15,
        "text": "একটি কৌশিক নলের এক প্রান্ত খাড়াভাবে পানিতে নিমজ্জিত করলে পানি নলের ভেতর আরোহন করে। নলের ব্যাসার্ধ r এবং আরোহিত পানির উচ্চতা h (যখন r << h) এ দুইটির মধ্যে সম্পর্ক হচ্ছে- / When one end of a capillary tube is immersed vertically in water, the water rises inside the tube. What is the relationship between the radius of the tube (r) and the height of water (h) when r << h?",
        "options": ["h ∝ r^-1", "h ∝ r²", "h ∝ r", "h ∝ r³", "h ∝ r^-2"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 16,
        "text": "একটি টানা তারে আড় তরঙ্গের বেগ 1500m.s^-1। টান একই থাকলে তিনগুণ বড় ব্যাসার্ধ বিশিষ্ট একই উপাদানে তৈরী তারে তরঙ্গের বেগ কত m.s^-1? / The speed of a transverse wave on a stretched string is 1500 m/s. If the same tension is applied, what will be the speed of the wave on another string made of the same material but with three times the radius?",
        "options": ["850", "500", "750", "300", "3000"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 17,
        "text": "আনুমানিক কত মিটার দূরত্বের মধ্যে প্রবল নিউক্লীয় বল কার্যকর? / Approximately how many meters is the range of strong nuclear force?",
        "options": ["10^-15", "10^-8", "10^-10", "10^-5", "10^-20"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 18,
        "text": "15 m.s^-1 বেগে চলমান 160g ভরের একটি বলকে তুমি ব্যাট দিয়ে আঘাত করলে, বলটি 25 m.s^-1 বেগে ফিরে গেল। ব্যাট-বল সংঘর্ষের স্থায়ত্বিকালে 10ms হলে তুমি গড়ে কত N বল দিয়ে আঘাত করেছ? / A ball of mass 160 g moving at 15 m/s is hit by a bat, and it rebounds with a speed of 25 m/s. The collision duration is 10 ms. What is the average force exerted by the bat on the ball?",
        "options": ["160", "640", "560", "1600", "120"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 19,
        "text": "20g ভর বিশিষ্ট কোন বস্তুকে 5m দীর্ঘ সুতার সাহায্যে বৃত্তাকার পথে ঘুরানো হচ্ছে। বস্তুটি 6s এ 30টি পূর্ণ আবর্তন করে। সুতার টান কত N? / A 20g object is being rotated in a circular path with a string of length 5 m. The object completes 30 full rotations in 6 s. What is the tension in the string?",
        "options": ["15.92", "29.22", "98.7", "49.12", "10.9"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 20,
        "text": "(3î + 4ĵ) NC⁻¹ বৈদ্যুতিক ক্ষেত্রে একটি α কণার ত্বরণের মান কত m/s²? / What is the acceleration of an α particle in an electric field of (3î + 4ĵ) NC⁻¹?",
        "options": ["2.2 × 10⁶", "1.2 × 10⁶", "1.2 × 10⁸", "2.4 × 10⁸", "2.4 × 10⁶"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 21,
        "text": "কোনটি শনাক্তকরণে 2, 4-ডাইনাইট্রোফিনাইল হাইড্রাজিন ব্যবহৃত হয়? / Which is used for the identification of 2, 4-dinitrophenylhydrazine?",
        "options": ["অ্যালডিহাইড ও কিটোন - Aldehyde and Ketone", "এস্টার - Ester", "অ্যালকোহল - Alcohol", "এপক্সাইড - Epoxide"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 22,
        "text": "কোন আয়নটি প্যারাম্যাগনেটিক নয়? / Which ion is not paramagnetic?",
        "options": ["Fe<sup>2+</sup>", "Co<sup>2+</sup>", "Ni<sup>2+</sup>", "Mg<sup>2+</sup>", "Mn<sup>2+</sup>"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 23,
        "text": "একটি পরমাণুর নিউক্লিয়াসে 18 টি নিউট্রন ও M শেলে 7 টি ইলেকট্রন রয়েছে। পরমাণুটির ভর কত? / The nucleus of an atom contains 18 neutrons and 7 electrons in the M shell. What is the atomic mass?",
        "options": ["17", "18", "25", "35", "36"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 24,
        "text": "কোনটির স্ফুটনাংক সর্বোচ্চ? / Which has the highest boiling point?",
        "options": ["CH<sub>3</sub>-(CH<sub>2</sub>)<sub>8</sub>-CH<sub>3</sub>", "CH<sub>3</sub>CH(CH<sub>3</sub>)-CH(CH<sub>3</sub>)-(CH<sub>3</sub>)<sub>4</sub>-CH<sub>3</sub>", "CH<sub>3</sub>-(CH<sub>3</sub>)<sub>6</sub>-CH<sub>3</sub>", "CH<sub>3</sub>-C(CH<sub>3</sub>)<sub>2</sub>-C(CH<sub>3</sub>)<sub>2</sub>-CH(CH<sub>3</sub>)-CH<sub>3</sub>", "CH<sub>3</sub>-CH(C<sub>2</sub>H<sub>5</sub>)-CH(C<sub>2</sub>H<sub>5</sub>)-CH<sub>3</sub>"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 25,
        "text": "1 kg বিশুদ্ধ পানিতে কতগুলো অণু থাকবে? / How many molecules will be in 1 kg of pure water?",
        "options": ["3.346×10<sup>25</sup>", "6.023×10<sup>26</sup>", "55.55×10<sup>23</sup>", "6.023×10<sup>23</sup>", "3.35×10<sup>22</sup>"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 26,
        "text": "একটি উভমুখী বিক্রিয়ার উৎপাদক ও বিক্রিয়ক উভয়ই গ্যাস। 27°C তাপমাত্রায় kp ও kc এর অনুপাত 620:1 হলে, বিক্রিয়াটিতে মোল সংখ্যার পরিবর্তন (Δn) কত? / In a bimolecular reaction, both the product and reactant are gases. At 27°C, if the ratio of Kp to Kc is 620:1, what is the change in moles (Δn) in the reaction?",
        "options": ["1", "2", "3", "8", "none"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 27,
        "text": "একটি d<sup>1</sup> ইলেকট্রনের ক্ষেত্রে কোয়ান্টাম সংখ্যার কোন সেটটি সঠিক? / Which set of quantum numbers is correct for a d<sup>1</sup> electron?",
        "options": ["(3,2,0,1/2)", "(3,1,0,1/2)", "(3,1,2,-1/2)", "(2,2,2,1/2)", "(3,0,-2,1/2)"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 28,
        "text": "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + n e<sup>-</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O ; বিক্রিয়াটিতে n এর মান কত? / In the reaction Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + n e<sup>-</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O, what is the value of n?",
        "options": ["1", "3", "6", "4", "9"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 29,
        "text": "Ni(NO<sub>3</sub>)<sub>2</sub> দ্রবণে 20 মিনিট ধরে 500 mA বিদ্যুৎ চালনা করলে তড়িৎদ্বারে কত গ্রাম নিকেল জমা হবে? (Ni এর R.A.M= 58.69) / How many grams of nickel will be deposited at the cathode when 500 mA current is passed for 20 minutes through Ni(NO<sub>3</sub>)<sub>2</sub> solution? (R.A.M of Ni = 58.69)",
        "options": ["18.24×10<sup>-2</sup>", "36.48×10<sup>-2</sup>", "1.76×10<sup>4</sup>", "1.82×10<sup>2</sup>", "3.04×10<sup>4</sup>"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 30,
        "text": "একটি পাত্রে 27°C তাপমাত্রায় 1 atm চাপে কিছু CO<sub>2</sub> গ্যাস আছে। গ্যাসটির ঘনত্ব কত g.L<sup>-1</sup>? / What is the density of CO<sub>2</sub> gas at 27°C and 1 atm pressure?",
        "options": ["1.786", "19.85", "0.0176", "0.287", "0.893"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 31,
        "text": "H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, CH<sub>4</sub>, এবং NH<sub>3</sub> গ্যাসের ভ্যান্ডার ওয়ালস ধ্রুবক 'a' এর মান যথাক্রমে 0.24, 1.36, 1.39, 2.25 এবং 4.17 atms L<sup>2</sup> mol<sup>-2</sup> হলে কোন গ্যাসটিকে সহজে তরলীকরণ করা যাবে? / Given the Van der Waals constants 'a' for H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, CH<sub>4</sub>, and NH<sub>3</sub> gases are 0.24, 1.36, 1.39, 2.25, and 4.17 atm L<sup>2</sup> mol<sup>-2</sup>, which gas can be easily liquefied?",
        "options": ["CH<sub>4</sub>", "O<sub>2</sub>", "N<sub>2</sub>", "H<sub>2</sub>", "NH<sub>3</sub>"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 32,
        "text": "NaCl অণুর বন্ধন দৈর্ঘ্য 2.36A° ও ডাইপোল মোমেন্টের মান 8.5D হলে NaCl অণুতে আয়োনিক বন্ধনের শতকরা পরিমাণ কত? / The bond length of NaCl molecule is 2.36 Å and the dipole moment is 8.5 D. What is the percentage ionic bond in NaCl?",
        "options": ["75", "36", "85", "96", "23"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 33,
        "text": "100 mL 0.25M H<sub>2</sub>SO<sub>4</sub> দ্রবণকে 100 mL 0.40M NaOH দ্রবণের সাথে মিশ্রিত করলে কত kJ তাপ উৎপন্ন হবে (প্রশমন বিক্রিয়ার ∆H=-57kJ mol<sup>-1</sup>)? / How much heat will be produced when 100 mL of 0.25M H<sub>2</sub>SO<sub>4</sub> solution is mixed with 100 mL of 0.40M NaOH solution? (The enthalpy change of the reaction is ∆H = -57 kJ mol<sup>-1</sup>)",
        "options": ["1.42", "57.0", "2.85", "2.28", "3.71"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 34,
        "text": "কোনটি সর্বাধিক স্থিতিশীল কার্বোক্যাটায়ন? / Which is the most stable carbocation?",
        "options": ["+CH<sub>3</sub>", "+CHR<sub>2</sub>", "+CH<sub>2</sub>R", "+CR<sub>3</sub>", "+CH<sub>2</sub>RNO<sub>2</sub>"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 35,
        "text": "Fe(III) আয়নের ম্যাগনেটিক মোমেন্ট কত BM? / What is the magnetic moment of Fe(III) ion?",
        "options": ["5.0", "2.45", "3.32", "2.24", "5.48"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 36,
        "text": "30°C তাপমাত্রায় A(g) ⇌  B(g) + C(g) বিক্রিয়াটিতে A(g) 20% বিয়োজিত হয়ে সাম্যাবস্থায় 1.5atm চাপের সৃষ্টি করে। Kp এর মান কত atm? / In the reaction A(g) ⇌ B(g) + C(g) at 30°C, if 20% of A(g) dissociates and a pressure of 1.5 atm is established at equilibrium, what is the value of Kp?",
        "options": ["6.25 × 10<sup>-2</sup>", "2.78× 10<sup>-2</sup>", "160", "8.0", "7.0"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 37,
        "text": "কোনটি হেটারোসাইক্লিক যৌগ? / Which is a heterocyclic compound?",
        "options": ["নাইট্রোবেনজিন - Nitrobenzene", "ন্যাপথালিন - Naphthalene", "ফিউরান - Furan", "অ্যানিলিন - Aniline", "সাইক্লোহেক্সেন - Cyclohexene"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 38,
        "text": "PCI<sub>5</sub>(g) ⇌ PCI<sub>3</sub>(g) + Cl<sub>2</sub>(g); ∆H = +90kJmol<sup>-1</sup>, এই বিক্রিয়াটির তাপ কমালে ও চাপ বাড়ালে সাম্যাবস্থার কী পরিবর্তন হবে? / In the reaction PCI<sub>5</sub>(g) ⇌ PCI<sub>3</sub>(g) + Cl<sub>2</sub>(g); ∆H = +90 kJ mol<sup>-1</sup>, what will happen to the equilibrium when the temperature is decreased and pressure is increased?",
        "options": ["Cl<sub>2</sub> এর উৎপাদন বৃদ্ধি পাবে - The production of Cl<sub>2</sub> will increase", "পশ্চাতমুখী অগ্রসর হবে - The reaction will move in reverse", "অপরিবর্তিত থাকবে - It will remain unchanged", "সম্মুখে অগ্রসর হবে - The reaction will move forward", "অনুঘটক নির্ধারণ করবে - The catalyst will determine"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 39,
        "text": "কোনটি পরমাণুর সঠিক ইলেকট্রন বিন্যাস? / Which is the correct electron configuration of an atom?",
        "options": ["[Ar]4s<sup>2</sup>3d<sup>9</sup>", "[Ar]4s<sup>1</sup>3d<sup>5</sup>", "[Ar]4s<sup>2</sup>3d<sup>4</sup>", "[Ar]4s<sup>1</sup>3d<sup>6</sup>", "4s<sup>0</sup> 3d<sup>6</sup>"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 40,
        "text": "কোনটি আলোক সক্রিয় অ্যালকোহল? / Which is a photoactive alcohol?",
        "options": ["CH<sub>3</sub>-CH(OH)-CH<sub>2</sub>-CH<sub>3</sub>", "CH<sub>3</sub>-CH(OH)-CH<sub>3</sub>", "CH<sub>3</sub>-C(OH)<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>", "HO-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-OH", "HOCH<sub>2</sub>-CH(OH)-CH<sub>2</sub>OH"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 41,
        "text": "r = a cosθ বৃত্তের কেন্দ্র (1/2,0) হলে, এর ক্ষেত্রফল কত? / If the circle has the equation r = a cosθ and its center is at (1/2,0), what is the area?",
        "options": ["π/4", "π/2", "3π/4", "0", "1"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 42,
        "text": "যে কোন বাস্তব সংখ্যা a এর জন্য কোনটি স্বত:সিদ্ধ? / Which of the following is always true for any real number a?",
        "options": ["|a| > 1", "|a| ≤ 0", "|a| ≥ 0", "|a| ≥ a", "|a| ≤ 0"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 43,
        "text": "f(x) = |2x - 1| ফাংশনের রেঞ্জ কত? / What is the range of the function f(x) = |2x - 1|?",
        "options": ["[0, ∞)", "(0, ∞)", "[1/2, ∞)", "{1, ∞)", "(-∞, 1/2]"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 44,
        "text": "(-1,1) বিন্দুগামী একটি বক্ররেখার ঢালের সমীকরণ y = ∛(x - 1); বক্ররেখাটির সমীকরণ কোনটি? / What is the equation of the curve with slope equation y = ∛(x - 1) passing through the point (-1,1)?",
        "options": ["y = (1/3)x + 1/3", "y = (3/4)x - x - (3/4)", "y = (2/3)x", "y = (4/3)x - x + (1/3)", "y = (2/3)x + 1/3"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 45,
        "text": "কোন ত্রিভুজের বাহুগুলোর দৈর্ঘ্য 3, 5 ও 6 একক হলে, এর অন্ত:বৃত্তের পরিধি কত? / What is the perimeter of the incircle of a triangle with side lengths 3, 5, and 6?",
        "options": ["(π2√2)/√7", "(π4√2)/√7", "(π6√2)/√7", "(π8√2)/√7", "(π10√2)/√7"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 46,
        "text": "cosx - secx = 3/2 হলে, cos⁴x + sin⁴x এর মান কত? / If cosx - secx = 3/2, what is the value of cos⁴x + sin⁴x?",
        "options": ["6/8", "25", "8/5", "1", "0"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 47,
        "text": "[0, 2π] ব্যবধিতে y = sinx এবং y = cosx বক্ররেখাদ্বয় দ্বারা আবদ্ধ ক্ষেত্রের ক্ষেত্রফল কত? / What is the area enclosed by the curves y = sinx and y = cosx in the interval [0, 2π]?",
        "options": ["0", "1", "2√2", "4√2", "2π"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 48,
        "text": "f(x) = -|x + 1| + 2 ফাংশনের ক্ষেত্রে কোনটি সঠিক? / For the function f(x) = -|x + 1| + 2, which of the following is true?",
        "options": ["সর্বোচ্চ মান 1", "সর্বনিম্ন মান 1", "সর্বোচ্চ মান 2", "সর্বনিম্ন মান 2", "সর্বনিম্ন মান 0"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 49,
        "text": "2x² - 4xy + 3y² - x + y - 1 = 0 সমীকরণের জ্যামিতিক রূপ কোনটি? / What is the geometric form of the equation 2x² - 4xy + 3y² - x + y - 1 = 0?",
        "options": ["অধিবৃত্ত - Hyperbola", "পরাবৃত্ত - Ellipse", "জোড়া সরলরেখা - Pair of straight lines", "উপবৃত্ত - Parabola", "বৃত্ত - Circle"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 50,
        "text": "4x² - 9y² - 8x + 18y - 41 = 0 কনিকটির অসীমতটদ্বয়ের ঢালের গুণফল কত? / What is the product of the slopes of the asymptotes of the conic 4x² - 9y² - 8x + 18y - 41 = 0?",
        "options": ["3/2", "-4/9", "4/9", "-1", "-2/3"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 51,
        "text": "y = logₓ y হলে, dy/dx এর মান কত? / If y = logₓ y, what is the value of dy/dx?",
        "options": ["1/(x ln x)", "1/x(1 + ln x)", "1/x ln y", "1/x(1 + ln y)", "1/y(1 + ln x)"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 52,
        "text": "y² - 2x - 4y + 4 = 0 বক্ররেখার (0,2) বিন্দুতে অভিলম্বের সমীকরণ কোনটি? / What is the equation of the tangent at the point (0,2) on the curve y² - 2x - 4y + 4 = 0?",
        "options": ["y = 2", "y = 0", "x = 2", "x = 0", "x = y"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 53,
        "text": "x³ + bx² - ax + 1 = 0 সমীকরণের একটি মূল -1 এবং অন্য মূল গুলো সমান হলে a এর মান কোনটি? / For the equation x³ + bx² - ax + 1 = 0, if one root is -1 and the other roots are equal, what is the value of a?",
        "options": ["2", "0", "1", "-1", "3"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 54,
        "text": "y = 2 রেখার উপর লম্ব এবং (h, k) বিন্দুগামী সরলরেখার সমীকরণ কোনটি? / What is the equation of the line perpendicular to y = 2 and passing through the point (h, k)?",
        "options": ["y - k = 0", "x - h = 0", "y - k = 2", "x - h = 2", "x - h = y - k"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 55,
        "text": "দুটি বিন্দুর পোলার স্থানাংক (2√3, 90°) এবং (2√5, 180°) হলে, বিন্দু দুটির দূরত্ব কত? / If the polar coordinates of two points are (2√3, 90°) and (2√5, 180°), what is the distance between the two points?",
        "options": ["2√3", "4√3", "4√5", "4√2", "0"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 56,
        "text": "x² + y² + 2x - 2y + 1 = 0 বৃত্তটি x² + y² = a² বৃত্তকে অন্তঃস্থভাবে স্পর্শ করলে a এর মান কত? / For the circle x² + y² + 2x - 2y + 1 = 0 to be internally tangent to the circle x² + y² = a², what is the value of a?",
        "options": ["1 + √2", "√2", "-√2", "1", "1 - √2"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 57,
        "text": "যদি tanA = √3 হয়, তবে cos2A - sin2A এর মান কত? / If tanA = √3, what is the value of cos2A - sin2A?",
        "options": ["−√3/2", "-1/2", "1/2", "√3/2", "1"],
        "correctAnswer": 1,
        "points": 1
    }, 
    {
        "id": 58,
        "text": "tan⁻¹(e^ax) + cot⁻¹(e^ax) = ? / tan⁻¹(e^ax) + cot⁻¹(e^ax) = ?",
        "options": ["0", "π/3", "π/4", "π/2", "π"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 59,
        "text": "x² - 6x + 4y + 29 = 0 পরাবৃত্তের উপকেন্দ্র ও মূলবিন্দুর সংযোজক রেখার ঢাল কত? / What is the slope of the line connecting the center and the focus of the hyperbola x² - 6x + 4y + 29 = 0?",
        "options": ["−5/3", "−4/3", "-2", "−5/4", "−5/2"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 60,
        "text": "x - 3y = c রেখাটি x² + y² − 6x + 8y + 15 = 0 এর স্পর্শক হলে স্পর্শকটি কর্তৃক x-অক্ষের খন্ডিত অংশ কত একক হবে? / What is the x-intercept of the tangent line x - 3y = c to the curve x² + y² − 6x + 8y + 15 = 0?",
        "options": ["5, 25", "5, -25/3", "-25/3, -5/3", "25, -5/2"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 61,
        "text": "কোন বক্ররেখাটি (1,2) বিন্দু দিয়ে যায় এবং উক্ত বিন্দুতে স্পর্শকের ঢাল 5? / Which curve passes through the point (1,2) and has a slope of 5 at that point?",
        "options": ["y = 2x² − 3x + 2", "y = 2x² − x + 1", "y = 2x² + x − 1", "y = 2x² − 2x + 1", "y = 3x² + x − 2"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 62,
        "text": "Which of the following is an example of the literary device known as Apostrophe ?\n\n\"I will arise and go now, and go to Innisfree\"\n\n\"She walks in beauty like the night\"\n\n\"Blow, blow thou winter wind\"\n\n\"Oh! My car hurts! Oh! My head aches!\"",
        "options": ["'I will arise and go now, and go to Innisfree'", "'She walks in beauty like the night'", "'Blow, blow thou winter wind'", "'Oh! My car hurts! Oh! My head aches!'"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 63,
        "text": "Things really took off when Microsoft Windows was introduced in 1985 and it's good that if was since without the prevalence of personal computers, the Internet wouldn't have had nearly as big an impact as it has ever since. It can be deduced from the preceding statement that-\n\nMicrosoft Windows and personal computers are incompatible\n\npersonal computers succeeded Microsoft Windows\n\nInternet owes its success solely to Microsoft Windows\n\npersonal computers and Microsoft Windows discharged a combined impetus\n\nInternet existed prior to personal computers",
        "options": ["Microsoft Windows and personal computers are incompatible", "personal computers succeeded Microsoft Windows", "Internet owes its success solely to Microsoft Windows", "personal computers and Microsoft Windows discharged a combined impetus", "Internet existed prior to personal computers"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 64,
        "text": "\"Most friendship is feigning, most loving mere folly\" means that -\n\nfriendship occurs amongst people who are not related and loving is a game\n\nfriendship is a great gain and loving makes us jolly\n\nmost friendship is false and loving is a mistake\n\nfriendship comes first and loving comes later\n\nlove and friendship are not disconnected",
        "options": ["friendship occurs amongst people who are not related and loving is a game", "friendship is a great gain and loving makes us jolly", "most friendship is false and loving is a mistake", "friendship comes first and loving comes later", "love and friendship are not disconnected"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 65,
        "text": "In 1998, six-year old Ryan Hreljae was shocked to learn that children in Africa had to walk many kilometers every day just to fetch water. Ryan decided that he needed to build a well for a village in Africa. From the preceding extract, we can infer that -\n\nRyan was resolute to ease the children's lives\n\nRyan was going to help the children of his age collect water\n\neven as a child Ryan cared about others\n\nhe realized how fortunate he was not to be living in Africa\n\nhis response was not uncommon",
        "options": ["Ryan was resolute to ease the children's lives", "Ryan was going to help the children of his age collect water", "even as a child Ryan cared about others", "he realized how fortunate he was not to be living in Africa", "his response was not uncommon"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 66,
        "text": "Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedom. The extract refers to the -\n\ndevelopment of personality in education\n\npromotion of human rights\n\nstrengthening of ideas about freedom and basic rights\n\nincrease of respect for others through free access to education\n\npurpose of education",
        "options": ["development of personality in education", "promotion of human rights", "strengthening of ideas about freedom and basic rights", "increase of respect for others through free access to education", "purpose of education"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 67,
        "text": "In the poem \"The Lake of Innisfree,\" the speaker -\n\nsearches for his friend\n\nseeks refuge in nature\n\ncompares the countryside to the city\n\ndescribes the lake\ndescribes the ecosystem",
        "options": ["searches for his friend", "seeks refuge in nature", "compares the countryside to the city", "describes the lake", "describes the ecosystem"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 68,
        "text": "Which following option is the appropriate wh-question for the underlined parts of the sentence: <u> The parent peer has been trained to speak to other parents </u> about adolescent issues -\n\nWhom has the parent peer been trained to speak to?\nWhat does the parent speak about to the parents?\nWho speaks to the other parents about adolescent issues?\nWhat is the special training of the parent peer?\nWhat has the parent peer been trained to do?",
        "options": ["Whom has the parent peer been trained to speak to?", "What does the parent speak about to the parents?", "Who speaks to the other parents about adolescent issues?", "What is the special training of the parent peer?", "What has the parent peer been trained to do?"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 69,
        "text": "Universities should never be made ........... mechanical organizations ........... collecting and distributing knowledge. Appropriate fillers for the gaps are -\n\nother than, for\nof, from\nfrom, into\nof, against\ninto, for",
        "options": ["other than, for", "of, from", "from, into", "of, against", "into, for"],
        "correctAnswer": 4,
        "points": 1
    },
    {
        "id": 70,
        "text": "The person is positive for leprosy. Here, the word \"positive\" means that the person-\n\nis extremely positive in outlook\nis likely to be susceptible to leprosy\nis hopeful that the situation may change\nhas been diagnosed with\nis strong and not affected",
        "options": ["is extremely positive in outlook", "is likely to be susceptible to leprosy", "is hopeful that the situation may change", "has been diagnosed with", "is strong and not affected"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 71,
        "text": "\"Jaws of Death\" is an example of -\n\nSimile\nMetaphor\nIrony\nPersonification\nSatire",
        "options": ["Simile", "Metaphor", "Irony", "Personification", "Satire"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 72,
        "text": "Charged with capital offences in the 1963 Rivonia Trial, Mandela's statement from the dock was his political testimony. Here, \"capital offences\" means -\n\nfinancial assets\noffences punishable by death\nthe seat of government in the capital\nserious crimes in the capital\nurban larceny",
        "options": ["financial assets", "offences punishable by death", "the seat of government in the capital", "serious crimes in the capital", "urban larceny"],
        "correctAnswer": 1,
        "points": 1
    },
    {
        "id": 73,
        "text": "He said to me, \"You were rich, weren't you?\" Which one is correct from the following options of narration change:\n\nHe asked me if I had been rich\nHe asked me if I was rich\nHe asked me if I have been rich\nHe asked me if I wasn't rich, wasn't I\nHe asked me that I was rich",
        "options": ["He asked me if I had been rich", "He asked me if I was rich", "He asked me if I have been rich", "He asked me if I wasn't rich, wasn't I", "He asked me that I was rich"],
        "correctAnswer": 0,
        "points": 1
    },
    {
        "id": 74,
        "text": "\"One shade the more, one ray the less, /Had half impaired the nameless grace/ Which waves in every raven trees.\" Here, \"raven trees\" is analogous to -\n\nsand and desert\ngold and silver\nlove and rose\ncheetah and speed\nlion and heart",
        "options": ["sand and desert", "gold and silver", "love and rose", "cheetah and speed", "lion and heart"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 75,
        "text": "Neonatal mortality is another concern for younger mothers. The preceding statement refers to -\n\nthe high mortality of young children\nthe death of babies of girls married at a young age\nthe high mortality rate of young mothers\nthe common occurrence of death among newborns\nthe concern for young mothers in pregnancy",
        "options": ["the high mortality of young children", "the death of babies of girls married at a young age", "the high mortality rate of young mothers", "the common occurrence of death among newborns", "the concern for young mothers in pregnancy"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 76,
        "text": "Critical thinking empowers people to assess the credibility, accuracy, and value of information. This statement means that -\n\ncritical thinking is miles apart from empowerment\n\nmass information creates many versions of a single event\n\ncritical thinking enables people to mess up information\n\nthe ability to think critically can protect people against manipulation\n\nquestionable information is a valuable asset, which empowers a person",
        "options": ["critical thinking is miles apart from empowerment", "mass information creates many versions of a single event", "critical thinking enables people to mess up information", "the ability to think critically can protect people against manipulation", "questionable information is a valuable asset, which empowers a person"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 77,
        "text": "Behind changing the name from Brick Lane to \"Banglatown\" there worked Bangladeshi diaspora's leaning towards their heritage and their intent for worldly success. Here, the reason(s) that caused the renaming is/are-\n\ncommercial motive\nintra-cultural motive\ncultural and commercial motives\nsocial and political motives\ncultural and linguistic motives",
        "options": ["commercial motive", "intra-cultural motive", "cultural and commercial motives", "social and political motives", "cultural and linguistic motives"],
        "correctAnswer": 2,
        "points": 1
    },
    {
        "id": 78,
        "text": "Conflict comes naturally; the clashing of thought and ideas is part of the human experience. As per the preceding statement, conflicts arise because people have-\n\nan aggressive nature\ncohesive options and ideas\nan uncompromising mindset\nevolved through intolerance\narchaic ideas",
        "options": ["an aggressive nature", "cohesive options and ideas", "an uncompromising mindset", "evolved through intolerance", "archaic ideas"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 79,
        "text": "What emotion do the lines \"How can the bird that is born for joy / Sit in a cage and sing?\" express?\n\nTerror\nGrief\nHappiness\nTorment\nJoy",
        "options": ["Terror", "Grief", "Happiness", "Torment", "Joy"],
        "correctAnswer": 3,
        "points": 1
    },
    {
        "id": 80,
        "text": "Protection granted by a nation to someone who left his or her native country or as a political refugee is termed as -\n\nrefugee\npersecution\nsuffrage\nillegal alien\nasylum",
        "options": ["refugee", "persecution", "suffrage", "illegal alien", "asylum"],
        "correctAnswer": 4,
        "points": 1
    },
];

let answers = {};
let timeLeft = 120 * 60; // 2 hours (120 minutes)
let examSubmitted = false;
let timer;

function initExam() {
    renderQuestions();
    startTimer();
    addAnimations();
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    if (!container) return; // Ensure the container exists

    container.innerHTML = questions.map(question => `
        <div class="question-card">
            <div class="question-header">
                <span class="question-number">Question ${question.id}</span>
                <span class="points-badge">${question.points} points</span>
            </div>
            <div class="question-text">${question.text}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-question="${question.id}" data-option="${index}" onclick="selectOption(${question.id}, ${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // After rendering questions, process MathJax to render mathematical equations
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, container]);
}

function selectOption(questionId, optionIndex) {
    if (examSubmitted) return;

    const previousAnswer = answers[questionId];
    answers[questionId] = optionIndex;

    // Update UI with animation
    document.querySelectorAll(`[data-question="${questionId}"]`).forEach(option => {
        option.classList.remove('selected');
    });

    const selectedOption = document.querySelector(`[data-question="${questionId}"][data-option="${optionIndex}"]`);
    selectedOption.classList.add('selected');

    // Add subtle animation
    selectedOption.style.transform = 'scale(1.02)';
    setTimeout(() => {
        selectedOption.style.transform = 'scale(1)';
    }, 200);

    // Update attempted count with animation
    const attemptedCount = document.getElementById('attempted-count');
    attemptedCount.style.transform = 'scale(1.2)';
    attemptedCount.textContent = Object.keys(answers).length;
    setTimeout(() => {
        attemptedCount.style.transform = 'scale(1)';
    }, 200);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('time-left').textContent = timeDisplay;

    // Add warning color when time is running out
    const statusPills = document.querySelectorAll('.status-pill');
    if (timeLeft < 300) { // Less than 5 minutes
        statusPills.forEach(pill => {
            pill.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        });
    }
}

function calculateScore() {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach(question => {
        if (answers[question.id] === question.correctAnswer) {
            score += question.points;
            correctAnswers++;
        } else if (answers[question.id] !== undefined) {
            score -= 0.25; // Negative marking
            wrongAnswers++;
        }
    });

    return {
        score: score.toFixed(2),
        totalQuestions: questions.length,
        correctAnswers,
        wrongAnswers,
        unattempted: questions.length - (correctAnswers + wrongAnswers)
    };
}

function submitExam() {
    clearInterval(timer);
    examSubmitted = true;
    const results = calculateScore();

    // Show results with animation
    const container = document.getElementById('questions-container');
    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = `
            <div class="result-card">
                <h2><i class="fas fa-award"></i> Exam Results</h2>
                <div class="stats-grid">
                    <div class="stat-box">
                        <p>Final Score</p>
                        <h3>${results.score}</h3>
                    </div>
                    <div class="stat-box">
                        <p>Time Taken</p>
                        <h3>${formatTime(3600 - timeLeft)}</h3>
                    </div>
                </div>
                <div class="stats-grid">
                    <div class="stat-box">
                        <p><i class="fas fa-check-circle"></i> Correct Answers</p>
                        <h3 style="color: #059669">${results.correctAnswers}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-times-circle"></i> Wrong Answers</p>
                        <h3 style="color: #dc2626">${results.wrongAnswers}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-minus-circle"></i> Unattempted</p>
                        <h3 style="color: #6b7280">${results.unattempted}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-percentage"></i> Accuracy</p>
                        <h3 style="color: #0891b2">${calculateAccuracy(results)}%</h3>
                    </div>
                </div>
                <div class="answer-review">
                    <h3><i class="fas fa-list"></i> Answer Review</h3>
                    ${generateAnswerReview()}
                </div>
            </div>
        `;
        container.style.opacity = '1';
    }, 500);

    // Hide submit button with animation
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.style.transform = 'scale(0.8)';
    submitBtn.style.opacity = '0';
    setTimeout(() => {
        submitBtn.style.display = 'none';
    }, 300);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function calculateAccuracy(results) {
    if (results.correctAnswers + results.wrongAnswers === 0) return 0;
    return Math.round((results.correctAnswers / (results.correctAnswers + results.wrongAnswers)) * 100);
}

function generateAnswerReview() {
    return questions.map(question => `
        <div class="question-card ${answers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}">
            <div class="question-header">
                <span class="question-number">Question ${question.id}</span>
                <span class="result-icon">
                    ${answers[question.id] === question.correctAnswer 
                        ? '<i class="fas fa-check-circle" style="color: #059669"></i>' 
                        : '<i class="fas fa-times-circle" style="color: #dc2626"></i>'}
                </span>
            </div>
            <div class="question-text">${question.text}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option ${
                        index === question.correctAnswer ? 'correct' : 
                        index === answers[question.id] ? 'incorrect' : ''
                    }">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                        ${index === question.correctAnswer 
                            ? '<i class="fas fa-check" style="color: #059669"></i>' 
                            : index === answers[question.id] 
                                ? '<i class="fas fa-times" style="color: #dc2626"></i>' 
                                : '' }
                    </div>
                `).join('')}
            </div>
            <div class="explanation">
                <p><strong>Explanation:</strong> ${question.explanation}</p>
            </div>
        </div>
    `).join('');
}

function addAnimations() {
    // Add hover animations to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('mouseenter', () => {
            if (!examSubmitted && !option.classList.contains('selected')) {
                option.style.transform = 'translateX(5px)';
            }
        });
        option.addEventListener('mouseleave', () => {
            if (!examSubmitted && !option.classList.contains('selected')) {
                option.style.transform = 'translateX(0)';
            }
        });
    });
}

// Add event listener for submit button
document.getElementById('submit-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to submit the exam?')) {
        submitExam();
    }
});

// Initialize exam when page loads
document.addEventListener('DOMContentLoaded', initExam);

