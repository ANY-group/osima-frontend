'use client';

import CategoryEntity from "@/lib/catalog/types/category";
import { createContext } from "react";

export const CategoriesContext = createContext<Array<CategoryEntity>>([]);