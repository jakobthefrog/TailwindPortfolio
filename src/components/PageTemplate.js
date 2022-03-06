import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
	{ name: 'Reports', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function PageTemplate(props) {
	return (
		<>
			<div className="min-h-full">
				<Disclosure as="nav" className="bg-gray-800">
					{({ open }) => (
						<>
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
								<div className="flex items-center justify-between h-16">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<img
												className="h-8 w-8"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
												alt="Workflow"
											/>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? 'bg-gray-900 text-white'
																: 'text-gray-300 hover:bg-gray-700 hover:text-white',
															'px-3 py-2 rounded-md text-sm font-medium'
														)}
														aria-current={
															item.current
																? 'page'
																: undefined
														}
													>
														{item.name}
													</a>
												))}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="ml-4 flex items-center md:ml-6">
											<button
												type="button"
												className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
											>
												<span className="sr-only">
													View notifications
												</span>
												<BellIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</button>
										</div>
									</div>
									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">
												Open main menu
											</span>
											{open ? (
												<XIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<MenuIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												item.current
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block px-3 py-2 rounded-md text-base font-medium'
											)}
											aria-current={
												item.current
													? 'page'
													: undefined
											}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<main>
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
						{props.children}
					</div>
				</main>
			</div>
		</>
	);
}
