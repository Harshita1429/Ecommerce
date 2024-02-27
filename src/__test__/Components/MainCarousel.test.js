import React from "react";
import { render, screen } from '@testing-library/react';
import MainCarousel from "../../customer/Components/HomeCarousel/MainCarousel.js";

describe("MainCarousel", () => {
    test('renders name in profile', () => {
        render(<MainCarousel />)
    });
})