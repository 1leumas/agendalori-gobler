'use client'
import { usePathname, useRouter } from "next/navigation";
import { RiContactsBook2Line } from "react-icons/ri";
import { TbUserSquareRounded } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    function Logout() {
        localStorage.removeItem("token");
        router.replace("/");
    }

    return (
        <div className='navbar'>
            <div className='nav-title' onClick={() => router.push('/agenda')}>
                <svg width="84px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                    <g id="Goblin">
                    <path class="cls-1" style={{ fill: '#aaddb4' }} d="M37.05,37.66v4.72l7.56,4.41c2.65,1.55,4.85,3.77,5.44,6.79a1.57,1.57,0,0,1-1.54,1.88h-33A1.57,1.57,0,0,1,14,53.58c.59-3,2.79-5.24,5.44-6.79L27,42.38V37.66Z" id="path123162-96-8-8"></path>
                    <path class="cls-2" style={{ fill: '#92d39d' }} d="M27,37.66v4.72l-.17.1A9.55,9.55,0,0,0,32,44.14a9.55,9.55,0,0,0,5.22-1.66l-.17-.1V37.66Z" id="path212066"></path>
                    <path class="cls-1" style={{ fill: '#aaddb4' }} d="M55.6,19.09l.09-.53a1.2,1.2,0,0,0-.77-.34,1.48,1.48,0,0,0-.42,0c-2.59.26-6.84,1-9.61,3.21s-1.21,4.76-.9,7.25l5.9-2.31,5.94-7.17Z"></path>
                    <path class="cls-2" style={{ fill: '#92d39d' }} d="M55.69,18.56c-9.55,4.56-11,7.64-11,7.64L43.39,28l.26,3.41a3.09,3.09,0,0,0,5.1-1.76c.35-2,4.93-.59,5.43-4a25.4,25.4,0,0,1,1.67-5.55h0A1.44,1.44,0,0,0,55.69,18.56Z" id="path302351-1"></path>
                    <path class="cls-1" style={{ fill: '#aaddb4' }} d="M19.11,21.43c-2.77-2.19-7-2.95-9.61-3.21a1.48,1.48,0,0,0-.42,0,1.18,1.18,0,0,0-.77.34l.13.51-.3.09,6,7.21L20,28.68C20.32,26.19,22,23.53,19.11,21.43Z"></path>
                    <path class="cls-2" style={{ fill: '#92d39d' }} d="M8.31,18.56a1.44,1.44,0,0,0-.15,1.59h0A25.4,25.4,0,0,1,9.82,25.7c.5,3.4,5.08,2,5.43,4a3.09,3.09,0,0,0,5.1,1.76L20.61,28l-1.3-1.84S17.86,23.13,8.31,18.56Z" id="path373277"></path>
                    <path class="cls-1" style={{ fill: '#aaddb4' }} d="M43.65,31.45c-2.11,5.28-6.53,10-11.65,10s-9.54-4.69-11.65-10c-1-2.61-1.24-7.21-1.24-10a12.89,12.89,0,0,1,25.78,0C44.89,24.24,44.69,28.84,43.65,31.45Z" id="path25222-7-2-48-3"></path>
                    <path class="cls-3" style={{ fill: '#df0c0c' }} d="M34,23.74a.7.7,0,0,0-.67.67,3.95,3.95,0,0,0,7.89,0,.7.7,0,0,0-.67-.67Z" id="path211885"></path>
                    <path class="cls-3" style={{ fill: '#df0c0c' }} d="M23.48,23.74a.7.7,0,0,0-.67.67,3.95,3.95,0,0,0,7.89,0,.7.7,0,0,0-.67-.67Z" id="path302643-0"></path>
                    <path class="cls-2" style={{ fill: '#92d39d' }} d="M21.79,50.22a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h6a1.67,1.67,0,0,1,1.45.84,1,1,0,0,0,1.41.38,1,1,0,0,0,.38-1.41h0a3.77,3.77,0,0,0-3.24-1.87Z" id="path131588-6-3-7-2-1-3"></path>
                    <path class="cls-2" style={{ fill: '#92d39d' }} d="M36.2,50.22A3.77,3.77,0,0,0,33,52.09a1,1,0,0,0,.38,1.41h0a1,1,0,0,0,1.41-.37h0a1.68,1.68,0,0,1,1.46-.84h6a1,1,0,1,0,0-2.06h-6Z" id="path132344-1-6-8-9-5-0"></path>
                    <path class="cls-2" style={{ fill: '#92d39d' }} d="M29.09,44.92a1,1,0,0,0-1.34,1.36l1.19,2.82a1,1,0,0,0,1.36.54h0a1,1,0,0,0,.54-1.35h0l-1.19-2.82A1,1,0,0,0,29.09,44.92Z" id="path133885-0-6-3-9-4"></path>
                    <path class="cls-2" style={{ fill: '#92d39d' }} d="M34.91,44.92a1,1,0,0,0-.56.55l-1.19,2.82a1,1,0,0,0,.54,1.35h0a1,1,0,0,0,1.36-.54h0l1.19-2.82a1,1,0,0,0-.55-1.35h0A1,1,0,0,0,34.91,44.92Z" id="path133967-6-8-9-8-4"></path>
                    </g>
                    </g>
                </svg>

                <span style={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '32px' }}>Gobler</span>
            </div>

            <div className='links'>
                <div
                    onClick={() => router.push('/agenda')}
                    className={pathname === "/agenda" ? 'link-selected' : ''}
                >
                    <LuCalendarDays size={21} />
                    <span>Agenda</span>
                </div>

                <div
                    onClick={() => router.push('/salas')}
                    className={pathname === "/salas" ? 'link-selected' : ''}
                >
                    <SiGoogleclassroom size={21} />
                    <span>Salas</span>
                </div>

                <div
                    onClick={() => router.push('/turmas')}
                    className={pathname === "/turmas" ? 'link-selected' : ''}
                >
                    <RiContactsBook2Line size={22} />
                    <span>Turmas</span>
                </div>

                <div
                    onClick={() => router.push('/usuarios')}
                    className={pathname === "/usuarios" ? 'link-selected' : ''}
                >
                    <TbUserSquareRounded size={22} />
                    <span>Usuários</span>
                </div>

                <div onClick={Logout}>
                    <TbLogout2 size={22} />
                    <span>Sair</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
