import React from 'react';

import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "/FeatureSection" },
  { label: "Workflow", href: "/Workflow" },
  { label: "Pricing", href: "/Pricing" },
  { label: "Testimonials", href: "/Testimonials" },
];

export const testimonials = [
  {
    user: "John Smith",
    company: "CEO of DANON Company",
    image: user1,
    text: "I couldn't be happier with the results! The team went above and beyond to deliver exceptional service. Highly recommend!",
  },
  {
    user: "Sarah Johnson",
    company: "Founder of MD Startup",
    image: user2,
    text: "Working with IntelliFit was a game-changer for our business. Their expertise and dedication helped us achieve our goals faster than we ever imagined",
  },
  {
    user: "David lee",
    company: "Marketing Director at DEF Corporation",
    image: user3,
    text: "Outstanding service from start to finish! IntelliFit truly understands our needs and delivers top-notch solutions every time. Thank you!",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "I've been consistently impressed by the level of professionalism and expertise demonstrated by the team at IntelliFit. They've become an invaluable partner for our organization.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Choosing IntelliFit was one of the best decisions we made for my wellbeing. Their attention to detail and commitment to excellence set them apart from the rest",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The results speak for themselves. IntelliFit not only met but exceeded our expectations. I can't thank them enough for their hard work and dedication.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Personalized Workout Plans",
    description:
      "Get personalized workout plans tailored to your goals, fitness level, and preferences. Simply input your information, and receive customized routines that fit your schedule and target areas.",
  },
  {
    icon: <Fingerprint />,
    text: "Exercise Library",
    description:
      "Explore a vast library of exercises with detailed instructions, images, and videos. Whether you're a beginner or advanced, find exercises categorized by muscle groups, equipment.",
  },
  {
    icon: <ShieldHalf />,
    text: "Progress Tracking",
    description:
      "rack your fitness journey with ease. Monitor your workout frequency, duration, and performance metrics over time.",
  },
  {
    icon: <BatteryCharging />,
    text: "Nutrition Planning",
    description:
      "Optimize your diet and fuel your workouts effectively. Access to calorie calculators, and nutritious recipes tailored to your fitness goals and dietary preferences.",
  },
  {
    icon: <PlugZap />,
    text: "Community Support",
    description:
      "Join a vibrant community of fitness enthusiasts. Engage in forums, participate in group challenges, and connect with like-minded individuals.",
  },
  {
    icon: <GlobeLock />,
    text: "Expert Guidance",
    description:
      "Access expert guidance. Gain valuable insights through Q&A forums, and educational resources to make informed decisions about your health and fitness.",
  },
];

export const checklistItems = [
  {
    title: "Advanced Data Analysis Tools",
    description:
      "Utilize powerful data analysis tools to uncover insights and trends in user activity, helping you make informed decisions to optimize your fitness platform and enhance the user experience.",
  },
  {
    title: "Customizable Workout Templates",
    description:
      "Offer a range of customizable workout templates that users can tailor to their preferences and fitness goals, providing flexibility and variety in their exercise routines.",
  },
  {
    title: "Streamlined Onboarding Process",
    description:
      "Simplify the user onboarding experience with intuitive steps and clear instructions to guide users seamlessly through the setup process.",
  },
  {
    title: "Seamless Integration with Wearable Devices",
    description:
      "Integrate effortlessly with popular wearable devices such as fitness trackers and smartwatches, allowing users to sync their fitness data for a comprehensive overview of their health and wellness journey.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic Workouts",
      "Exercise Library",
      "Progress Tracking",
      "Community Access",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Full Workout Access",
      "Expanded Exercise Library",
      "Advanced Progress Tracking",
      "Premium Community Features",
    ],
  },
  {
    title: "Enterprise",
    price: "$50",
    features: [
      "Personalized Coaching",
      "Custom Workout Plans",
      "Nutrition Guidance",
      "Priority Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
