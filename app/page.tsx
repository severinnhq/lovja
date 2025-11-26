"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion/dom';

import LandingHeader from '@/components/hu/landingheader';
import WhyLovjaSection from "@/components/hu/WhyLovjaSection";
import FAQ from "@/components/hu/faq";
import Footer from "@/components/hu/Footer";
import ReviewsGallery from "@/components/hu/ReviewsGallery";

interface FormData {
  marketingType: string[];
  averageRevenue: string;
  monthlySpend: string;
  treatments: string;
  website: string;
  location: string;
  investmentIntent: string;

  // ADD THESE:
  currentTeethCondition: string[];  // multiple
  dentalIssues: string;             // single
  experience: string;               // single
  desiredOutcome: string;           // single
  biteCondition: string;            // single
  missingTeeth: string;             // single
  timeline: string;                 // single

  fullName: string;
  email: string;
  phone: string;
  position: string;
  acceptedPrivacy: boolean;
}




type QuizStep = {
  question: string;
  type: "multiple" | "single" | "input" | "contact";
  field?: keyof FormData;
  options?: { value: string; label: string }[];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
};
const grow = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut, delay: 0.2 },
  },
};

export default function DigitalMarketingQuiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    marketingType: [],
    currentTeethCondition: [], // <--- important for multi-select
    dentalIssues: "",
    experience: "",
    desiredOutcome: "",
    biteCondition: "",
    missingTeeth: "",
    timeline: "",
    averageRevenue: "",
    monthlySpend: "",
    treatments: "",
    website: "",
    location: "",
    investmentIntent: "",
    fullName: "",
    email: "",
    phone: "",
    position: "",
    acceptedPrivacy: false,
  });
  
  
  const [errors, setErrors] = useState<{[key: number]: string}>({});

  const topSectionRef = useRef<HTMLDivElement>(null);
 

  const quizSteps: QuizStep[] = [
    {
      question: "Milyen állapotban vannak jelenleg a fogai? (Többet is jelölhet)",
      type: "multiple",
     
      field: "currentTeethCondition",
      options: [
        { value: "cracked", label: "Repedezett vagy törött fogak" },
        { value: "previous_restorations", label: "Előző héjak, koronák" },
        { value: "small_uneven", label: "Egyenetlen, apró fogak" },
      { value: "discolored", label: "Elsárgult vagy elszíneződött fogak" },
      ],
    },
    {
      question: "Van-e olyan fogászati problémája, ami befolyásolhatja a héjak készítését?",
      type: "single",
    
      field: "dentalIssues",
      options: [
        { value: "gum_issues", label: "Ínyproblémák (pl. gyulladás)" },
        { value: "periodontal", label: "Fogágybetegség" },
        { value: "bruxism", label: "Fogcsikorgatás vagy erős harapási erő" },
      { value: "none", label: "Nincs ilyen problémám" },
    ],
    },
    {
      question: "Van már tapasztalata esztétikai fogászati kezelésekkel?",
      type: "single",
 
      field: "experience",
      options: [
        { value: "yes", label: "Igen, voltak korábbi héjak vagy koronák" },
        { value: "no", label: "Nem, most gondolkodom először" },
      ],
    },
    {
      question: "Milyen eredményt szeretne elérni a Lovja héjakkal?",
      type: "single",

      field: "desiredOutcome",
      options: [
        { value: "natural", label: "Természetes, harmonikus mosoly" },
        { value: "hollywood", label: "Ragyogó, prémium “hollywoodi” mosoly" },
        { value: "custom", label: "Személyre szabott, exkluzív mosoly" },
      ],
    },
    {

      question: "Milyen a jelenlegi harapása és rágása?",
      type: "single",
 
      field: "biteCondition",
      options: [
        { value: "normal", label: "Normális, nincs problémám" },
        { value: "sometimes_uncomfortable", label: "Néha kellemetlenséget érzek" },
        { value: "difficulty", label: "Rendszeres rágási vagy harapási nehézség" },
      ],
    },
    {
      question: "Van-e foghiánya vagy több fogat kellene pótolni?",
      type: "single",
    
      field: "missingTeeth",
      options: [
        { value: "some_missing", label: "Egy vagy több fog hiányzik" },
        { value: "none_missing", label: "Teljes foghiány nincs" },
        { value: "dentures", label: "Kivehető protézist viselek" },
      ],
    },
    {
      question: "Mikor szeretné elkezdeni a konzultációt és a kezelést?",
      type: "single",
  
      field: "timeline",
      options: [
        { value: "now", label: "Azonnal" },
        { value: "1-2_months", label: "1–2 hónapon belül" },
        { value: "3-6_months", label: "3–6 hónap múlva" },
      ],
    },
    {
      question: "Kapcsolattartási adatok",
      type: "contact",
    },
  ];

 

  const validateStep = (step: number): boolean => {
    const stepData = quizSteps[step - 1];
    let isValid = true;
    let errorMessage = '';

    if (stepData.type === "multiple" && stepData.field) {
      const value = formData[stepData.field];
      if (!Array.isArray(value) || value.length === 0) {
        isValid = false;
        errorMessage = "Kérjük, válasszon legalább egy opciót";
      }
    
    
    } else if (stepData.type === "single" || stepData.type === "multiple") {
      if (!formData[stepData.field!]) {
        isValid = false;
        errorMessage = 'Kérjük, válasszon egy opciót';
      }
    } else if (stepData.type === "input" && stepData.field) {
      const value = formData[stepData.field];
      if (typeof value === 'string' && value.trim() === '') {
        isValid = false;
        errorMessage = 'Kérjük, töltse ki ezt a mezőt';
      }
    }

    if (!isValid) {
      setErrors(prev => ({...prev, [step]: errorMessage}));
    } else {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[step];
        return newErrors;
      });
    }

    return isValid;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    setCurrentStep((s) => Math.min(s + 1, quizSteps.length));
  };

  const handleBack = () =>
    setCurrentStep((s) => Math.max(s - 1, 1));

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  type MultiSelectFields = 'marketingType' | 'currentTeethCondition';

  const handleMultiSelect = (field: MultiSelectFields, value: string) => {
    const arr = [...formData[field]]; // TypeScript knows this is string[]
    const index = arr.indexOf(value);
    if (index > -1) arr.splice(index, 1);
    else arr.push(value);
  
    updateFormData(field, arr); // no 'any' needed
  };
  


  const handleSelection = (value: string) => {
    const step = quizSteps[currentStep - 1];
  
    if (step.type === "multiple" && step.field) {
      handleMultiSelect(step.field as MultiSelectFields, value);
    } 
    else if (step.type === "single" && step.field) {
      updateFormData(step.field, value as any);
    }
  };
  
  
  
  
  
  

  const renderNextButton = () => (
    <button
      onClick={handleNext}
      className="bg-yellow-400 text-black text-lg sm:text-xl font-bold w-full py-2 sm:py-3 rounded-xl hover:bg-yellow-500 transition-colors cursor-pointer btn-shadow"
    >
      Tovább
    </button>
  );

  const renderStep = () => {
    const step = quizSteps[currentStep - 1];

    const QuestionTitle = () => (
      <h2 className="text-2xl min-[560px]:text-3xl lg:text-2xl xl:text-3xl font-semibold text-center mb-4 md:mb-8 text-white text-shadow-md text-shadow-black/50 px-2">
        {step.question}
      </h2>
    );

    const renderBackButton = () => {
      if (currentStep > 1) {
        return (
          <div className="flex justify-start w-full">
            <button
              onClick={handleBack}
              className="text-white underline text-sm sm:text-base mt-2 hover:text-gray-300 transition-colors"
            >
              Vissza
            </button>
          </div>
        );
      }
      return null;
    };

    if (step.type === "input" && step.field) {
      const value = formData[step.field] as string;
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <input
              required
              {...step.inputProps}
              value={value}
              onChange={(e) => updateFormData(step.field as keyof FormData, e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            {errors[currentStep] && (
              <p className="text-red-400 text-sm">{errors[currentStep]}</p>
            )}
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

   if (step.type === "multiple") {
  return (
    <>
      <QuestionTitle />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto mb-4 sm:mb-6">
          {step.options?.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center p-2 sm:p-3 rounded-xl cursor-pointer transition-all h-full min-h-[40px] border border-white/50 ${
                (formData[step.field!] as string[]).includes(opt.value)


                  ? 'bg-white/10 text-white font-bold'
                  : 'bg-black/25 text-white font-medium hover:bg-white/5'
              }`}
            >
              <div className="w-6 h-6 mr-1 sm:mr-2 flex items-center justify-center pointer-events-none"></div>

              <span className="text-xs sm:text-sm flex-1">
                {opt.label}
              </span>
              <input
                type="checkbox"
                checked={(formData[step.field!] as string[]).includes(opt.value)}
                onChange={() => handleSelection(opt.value)}
                
                
                className="hidden"
              />
            </label>
          ))}
        </div>
        {errors[currentStep] && (
          <p className="text-red-400 text-sm text-center">{errors[currentStep]}</p>
        )}
        {renderBackButton()}
        {renderNextButton()}
      </div>
    </>
  );
}

    if (step.type === "single") {
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 max-w-md mx-auto mb-4 sm:mb-6">
            {step.options?.map((opt) => (
  <label
    key={opt.value}
    className={`flex items-center p-2 sm:p-3 rounded-xl cursor-pointer transition-all h-full min-h-[40px] border border-white/50 ${
      formData[step.field!] === opt.value

        ? 'bg-white/10 text-white font-bold'
        : 'bg-black/25 text-white font-medium hover:bg-white/5'
    }`}
  >

                  <span className="text-center text-xs sm:text-sm">
                    {opt.label}
                  </span>
                  <input
                    type="radio"
                    name={step.field}
                    checked={formData[step.field!] === opt.value}
                    onChange={() => handleSelection(opt.value)}
                    className="hidden"
                  />
                </label>
              ))}
            </div>
            {errors[currentStep] && (
              <p className="text-red-400 text-sm text-center">{errors[currentStep]}</p>
            )}
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

    if (step.type === "contact") {
      const canSubmit =
        formData.fullName.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.phone.trim() !== "" &&
        formData.acceptedPrivacy;

      return (
        <>
          <QuestionTitle />
          <div className="max-w-md mx-auto">
            <input
              required
              type="text"
              placeholder="Teljes név"
              value={formData.fullName}
              onChange={(e) => updateFormData("fullName", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            <input
              required
              type="tel"
              placeholder="Telefonszám"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
           
            <label className="flex items-start space-x-2 mb-4 sm:mb-6">
              <input
                required
                type="checkbox"
                checked={formData.acceptedPrivacy}
                onChange={(e) => updateFormData("acceptedPrivacy", e.target.checked)}
                className="w-5 h-5 mt-1 rounded cursor-pointer"
              />
              <span className="text-white text-xs sm:text-sm text-shadow-xs text-shadow-black cursor-pointer">
                Hozzájárulok, hogy a megadott adataimat a kapcsolatfelvétel és
                az időpont egyeztetés céljából kezeljük.
              </span>
            </label>
            {!formData.acceptedPrivacy && (
              <p className="text-red-400 text-sm mb-4">Kérjük, fogadja el az adatkezelési feltételeket</p>
            )}
            {renderBackButton()}
            <button
              disabled={!canSubmit}
              onClick={async () => {
                const payload = {
                  full_name: formData.fullName,
                  email: formData.email,
                  phone: formData.phone,
                  position: formData.position,
                  marketing_type: formData.marketingType.join(", "),
                  average_revenue: formData.averageRevenue,
                  monthly_spend: formData.monthlySpend,
                  treatments: formData.treatments,
                  website: formData.website,
                  location: formData.location,
                  investment_intent: formData.investmentIntent,
                  accepted_privacy: formData.acceptedPrivacy,
                };
                try {
                  await fetch(
                    "https://services.leadconnectorhq.com/hooks/l0c8ywCOTjNlqdeCpdIQ/webhook-trigger/f04446c2-e1f4-4c05-b6da-6a3def092b46",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    }
                  );
                  window.location.href = "/booking";
                } catch (error) {
                  console.error("Error submitting form:", error);
                  alert("Hiba történt a beküldés során.");
                }
              }}
              className={`w-full text-lg sm:text-xl py-2 sm:py-3 rounded-xl font-bold transition-colors ${
                !canSubmit
                  ? "bg-gray-400 cursor-not-allowed text-gray-200"
                  : "bg-yellow-400 text-black hover:bg-[#000816] hover:text-white cursor-pointer btn-shadow"
              }`}
            >
              KÜLDÉS
            </button>
          </div>
        </>
      );
    }

    return null;
  };

  const viewportOptions = { once: true, margin: "0px 0px -100px 0px" };

  return (
    <main className="spacer layer1
    bg-no-repeat bg-center
    bg-contain bg-scroll
    md:bg-auto md:bg-fixed">
      <LandingHeader />
<div
  ref={topSectionRef}
  className="w-full px-8 sm:px-16 md:px-32 lg:px-16 flex flex-col justify-between items-center pt-12 md:pt-16 lg:pt-24 backdrop-blur-0 telo-layer1"
>
  <div className="flex flex-col justify-between items-center w-full ">
    <motion.div
      className="hidden lg:block max-w-4xl mx-auto text-center"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <p className="text-white font-medium text-sm sm:text-base md:text-lg mt-8">
      🎁 BÓNUSZ #1 - Csak töltse ki az űrlapot, és kap egy ingyenes exkluzív mosolyátalakító elemzést / CBTC / szájhigiénia!
      </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:h-[586px] xl:h-[594px] w-full my-16 sm:my-8 md:my-0">
      <motion.div
        className="flex justify-center items-center lg:mr-8 2xl:mr-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
   <motion.div
  className="flex flex-col items-center text-center font-extrabold text-white leading-tight"
  variants={fadeUp}
>
  <div className="text-3xl min-[360px]:text-4xl xl:text-5xl 2xl:text-6xl 
                  [text-shadow:4px_4px_8px_black]">
    Tökéletes <span className="text-white">mosoly</span>
  </div>
  <div className="text-yellow-400 underline text-3xl min-[360px]:text-4xl xl:text-5xl 2xl:text-6xl 
                  [text-shadow:4px_4px_8px_black]">
    csiszolás nélkül
  </div>
  
  <div className="text-3xl min-[360px]:text-4xl xl:text-5xl 2xl:text-6xl 
                  [text-shadow:4px_4px_8px_black]">
    1 nap alatt!
  </div>
</motion.div>

      </motion.div>

      <motion.div
        className="block lg:hidden mt-4 max-w-md md:max-w-lg mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="text-white/90 font-medium text-xs sm:text-sm min-[560px]:text-base md:text-lg">
          🎁 BÓNUSZ #1 - Csak töltse ki az űrlapot, és hozzáférést kap egy 8 lépéses meta útmutatóhoz!
        </p>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-xs backdrop-brightness-110 rounded-2xl p-8 w-full max-w-lg flex flex-col justify-center lg:ml-8 2xl:ml-16 border-2 border-gray-400 my-shadow mt-12 lg:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={grow}
      >
        {renderStep()}
      </motion.div>
    </div>
  </div>
  
</div>


    
       
      <div className="flex flex-col items-center spacer bg-white layer3">
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 bg-[#000816] pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <WhyLovjaSection />
            <ReviewsGallery />
            <FAQ />
          </motion.div>
        </div>
        
       
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 bg-[#000816]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
           
          </motion.div>
        </div>
       
       
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}