"use client";
import { useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { Order } from "@/types";
import { Badge } from "@/components/ui";
import { Card, CardContent } from "@/components/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui";
import { formatCurrency, formatDateTime, formatId } from "@/lib/utils";

const OrderDetailsTable = ({ order }: { order: Order }) => {
  return <>Form</>;
};

export default OrderDetailsTable;
