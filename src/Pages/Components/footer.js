import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import '../../Assets/css/styles.css';
export default function Footer() {
    return (
        <footer class="p-4 bg-blueCustom shadow md:flex md:items-center md:justify-between md:p-6" id="footer">
            <span class="text-sm sm:text-center text-white">© 2022 <a href="#" class="hover:underline">weCare</a>. All Rights Reserved.
            </span>
            <ul class="flex justify-between items-center mt-3 text-sm text-white sm:mt-0">
                <li>
                    <p class="mr-4 md:mr-6 ">About</p>
                </li>
                <li>
                    <p class="mr-4 md:mr-6">Privacy Policy</p>
                </li>
                <li>
                    <p>Contact</p>
                </li>
            </ul>
        </footer>
    );
}