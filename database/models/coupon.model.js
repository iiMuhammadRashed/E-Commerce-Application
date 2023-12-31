import { Schema, Types, model } from 'mongoose';

const couponSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['fixed', 'percent'],
      default: 'fixed',
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const couponModel = model('coupon', couponSchema);
