document.addEventListener('DOMContentLoaded', function() {
    // 导航栏交互
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({behavior: 'smooth'});
        });
    });

    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function() {
        // 实现搜索功能
        console.log('搜索:', searchInput.value);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // 实现搜索功能
            console.log('搜索:', searchInput.value);
        }
    });

    // 移除滚动加载相关代码

    // 可以在这里添加联系站长表单的处理逻辑
});