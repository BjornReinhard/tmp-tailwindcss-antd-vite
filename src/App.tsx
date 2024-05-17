import './App.css'
import Header from "@/components/Header.tsx";
import Scrollbars from "react-custom-scrollbars-2";
import { Anchor } from "antd";
import SectionHeader from './components/SectionHeader';
import SideMenu from "@/components/SideMenu.tsx";

function App() {
    return (
        <div className="flex flex-row h-full">
            <div className="flex flex-1 justify-end mt-28">
                <SideMenu />
            </div>
            <div className="flex flex-col container mx-auto flex-grow">
                <Header className="container mx-auto pt-3 pb-1 px-8"/>
                <main className="flex flex-col flex-grow p-3">
                    <section className="flex flex-grow flex-1 w-full rounded-md bg-white justify-center shadow">
                        <Scrollbars autoHide>
                            <div className="p-5">
                                <SectionHeader id="part-1" title="Overview"/>
                                <div id="part-2" className="h-[1000px] flex justify-center p-3">Part2</div>
                                <div id="part-3" className="h-[1000px] flex justify-center p-3">Part3</div>
                                <div id="part-4" className="h-[1000px] flex justify-center p-3">Part4</div>
                                <div id="part-5" className="h-[1000px] flex justify-center p-3">Part5</div>
                            </div>
                        </Scrollbars>
                    </section>
                </main>
            </div>
            <div className="flex flex-1 justify-start mt-28">
                <aside className="flex flex-col p-4 text-sm w-60">
                    {/*<a href="/one"*/}
                    {/*   className="flex no-underline px-3 py-2 text-black transition-colors duration-300 rounded hover:bg-dustyBlue-dark">Item*/}
                    {/*    one</a>*/}
                    {/*<a href="/two"*/}
                    {/*   className="flex no-underline px-3 py-2 text-black transition-colors duration-300 rounded hover:bg-dustyBlue-dark">Item*/}
                    {/*    two</a>*/}
                    {/*<a href="/three"*/}
                    {/*   className="flex no-underline px-3 py-2 text-black transition-colors duration-300 rounded hover:bg-dustyBlue-dark">Item*/}
                    {/*    three</a>*/}
                    {/*<a href="/four"*/}
                    {/*   className="flex no-underline px-3 py-2 text-black transition-colors duration-300 rounded hover:bg-dustyBlue-dark">Item*/}
                    {/*    four</a>*/}
                    <Anchor
                        items={[
                            {
                                key: 'part-1',
                                href: '#part-1',
                                title: 'Part 1',
                            },
                            {
                                key: 'part-2',
                                href: '#part-2',
                                title: 'Part 2',
                            },
                            {
                                key: 'part-3',
                                href: '#part-3',
                                title: 'Part 3',
                            },
                            {
                                key: 'part-4',
                                href: '#part-4',
                                title: 'Part 4',
                            },
                            {
                                key: 'part-5',
                                href: '#part-5',
                                title: 'Part 5',
                            }
                        ]}
                    />
                </aside>
            </div>
        </div>
    )
}

export default App
