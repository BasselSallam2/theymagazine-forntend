"use client"

import type { FC } from "react"
import { useEffect, useCallback } from "react"

// Define props interface (empty in this case since no props are used)
interface BootstrapComponentsProps { }

// Type the component as a Functional Component (FC)
const BootstrapComponents: FC<BootstrapComponentsProps> = () => {
	// Custom collapse functionality
	const handleCollapse = useCallback((target: string) => {
		const collapseElement = document.querySelector(target)
		if (collapseElement) {
			const isExpanded = collapseElement.classList.contains('show')
			if (isExpanded) {
				collapseElement.classList.remove('show')
			} else {
				collapseElement.classList.add('show')
			}
		}
	}, [])

	// Custom tab functionality
	const handleTab = useCallback((target: string) => {
		const tabElement = document.querySelector(target)
		if (tabElement) {
			// Remove active class from all tabs
			document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]').forEach(tab => {
				tab.classList.remove('active')
			})
			// Add active class to clicked tab
			tabElement.classList.add('active')

			// Handle tab content
			const tabContent = document.querySelector(tabElement.getAttribute('data-bs-target') || '')
			if (tabContent) {
				document.querySelectorAll('.tab-pane').forEach(pane => {
					pane.classList.remove('show', 'active')
				})
				tabContent.classList.add('show', 'active')
			}
		}
	}, [])

	// Custom dropdown functionality
	const handleDropdown = useCallback((dropdownToggle: HTMLElement) => {
		console.log('Dropdown toggle clicked:', dropdownToggle)

		// Find the dropdown container (li with dropdown class)
		const dropdownContainer = dropdownToggle.closest('.dropdown') as HTMLElement
		console.log('Dropdown container:', dropdownContainer)

		if (!dropdownContainer) {
			console.log('No dropdown container found')
			return
		}

		// Find the dropdown menu within the container
		const dropdownMenu = dropdownContainer.querySelector('.dropdown-menu') as HTMLElement
		console.log('Dropdown menu:', dropdownMenu)

		if (dropdownMenu) {
			const isOpen = dropdownMenu.classList.contains('show')
			console.log('Is dropdown open:', isOpen)

			// Close all other dropdowns first
			document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
				menu.classList.remove('show')
			})

			// Toggle current dropdown
			if (!isOpen) {
				dropdownMenu.classList.add('show')
				console.log('Added show class to dropdown menu')
			}
		} else {
			console.log('No dropdown menu found')
		}
	}, [])

	useEffect(() => {
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			// Add a small delay to ensure DOM is ready
			const setupEventListeners = () => {
				console.log('Setting up Bootstrap event listeners...')

				// Remove Bootstrap body styles
				document.body.style.removeProperty("overflow")
				document.body.style.removeProperty("padding-right")

				// Handle collapse elements
				const accordionHeaders = document.querySelectorAll<HTMLElement>('[data-bs-toggle="collapse"]')
				accordionHeaders.forEach((header) => {
					const handleClick = () => {
						const target = header.getAttribute("data-bs-target")
						if (target) {
							handleCollapse(target)
						}
					}

					header.addEventListener("click", handleClick)
					header.dataset.handleClick = handleClick.toString()
				})

				// Handle tab elements
				const tabTriggerList = document.querySelectorAll<HTMLElement>('[data-bs-toggle="tab"], [data-bs-toggle="pill"]')
				tabTriggerList.forEach((tabEl) => {
					const handleClick = () => {
						const target = tabEl.getAttribute("data-bs-target")
						if (target) {
							handleTab(target)
						}
					}

					tabEl.addEventListener("click", handleClick)
					tabEl.dataset.handleClick = handleClick.toString()
				})

				// Handle dropdown elements
				const dropdownToggles = document.querySelectorAll<HTMLElement>('[data-bs-toggle="dropdown"]')
				console.log('Found dropdown toggles:', dropdownToggles.length)

				dropdownToggles.forEach((toggle, index) => {
					console.log(`Setting up dropdown toggle ${index}:`, toggle)

					const handleClick = (e: Event) => {
						console.log('Dropdown click event triggered')
						e.preventDefault()
						handleDropdown(toggle)
					}

					toggle.addEventListener("click", handleClick)
					toggle.dataset.handleClick = handleClick.toString()
					console.log(`Event listener added to dropdown toggle ${index}`)
				})

				// Close dropdowns when clicking outside
				const handleClickOutside = (e: Event) => {
					const target = e.target as HTMLElement
					if (!target.closest('.dropdown')) {
						document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
							menu.classList.remove('show')
						})
					}
				}

				document.addEventListener("click", handleClickOutside)
			}

			// Use setTimeout to ensure DOM is ready
			setTimeout(setupEventListeners, 100)

			// Cleanup function
			return () => {
				const accordionHeaders = document.querySelectorAll<HTMLElement>('[data-bs-toggle="collapse"]')
				accordionHeaders.forEach((header) => {
					const handleClick = new Function("return " + header.dataset.handleClick)()
					header.removeEventListener("click", handleClick)
					delete header.dataset.handleClick
				})

				const tabTriggerList = document.querySelectorAll<HTMLElement>('[data-bs-toggle="tab"], [data-bs-toggle="pill"]')
				tabTriggerList.forEach((tabEl) => {
					const handleClick = new Function("return " + tabEl.dataset.handleClick)()
					tabEl.removeEventListener("click", handleClick)
					delete tabEl.dataset.handleClick
				})

				const dropdownToggles = document.querySelectorAll<HTMLElement>('[data-bs-toggle="dropdown"]')
				dropdownToggles.forEach((toggle) => {
					const handleClick = new Function("return " + toggle.dataset.handleClick)()
					toggle.removeEventListener("click", handleClick)
					delete toggle.dataset.handleClick
				})

				// Remove click outside listener
				const handleClickOutside = (e: Event) => {
					const target = e.target as HTMLElement
					if (!target.closest('.dropdown')) {
						document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
							menu.classList.remove('show')
						})
					}
				}
				document.removeEventListener("click", handleClickOutside)
			}
		}
	}, [handleCollapse, handleTab, handleDropdown])

	return null
}

export default BootstrapComponents