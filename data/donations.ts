import { DonationGoal } from '../types';

export const donationGoals: DonationGoal[] = [
  {
    id: 1,
    title: "Emergency Medical Fund",
    description: "Help us provide immediate medical care for rescued parrots in critical condition.",
    targetAmount: 5000,
    currentAmount: 3200,
    urgency: "high"
  },
  {
    id: 2,
    title: "New Rescue Facility",
    description: "Expand our capacity to rescue more parrots by building a new rehabilitation facility.",
    targetAmount: 25000,
    currentAmount: 12500,
    urgency: "medium"
  },
  {
    id: 3,
    title: "Daily Care Supplies",
    description: "Fund food, toys, and daily care items for our rescued parrots.",
    targetAmount: 3000,
    currentAmount: 2100,
    urgency: "medium"
  }
];