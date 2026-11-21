
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".nav-item");

    // 현재 화면에 표시되는 섹션에 맞춰 메뉴 활성화
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;

                    navItems.forEach((item) => {
                        item.classList.toggle(
                            "active",
                            item.getAttribute("href") === `#${currentId}`
                        );
                    });
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // 메뉴 클릭 시 해당 섹션으로 부드럽게 이동
    navItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            const targetId = item.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                history.replaceState(null, "", targetId);
            }
        });
    });
});
