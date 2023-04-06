import "./PortfolioApp.scss";

// ========== SECTIONS ========== //
import ProjectSection from "../../components/@SECTIONS/projectSection/ProjectSection";
import SkillsSection from "../../components/@SECTIONS/skillsSection/SkillsSection";
import HeroSection from "../../components/@SECTIONS/heroSection/HeroSection";

const PortfolioApp = () => {
    return (
        <div className="portfolioApp">
            {/* ========== HERO SECTION ========== */}
            <HeroSection />
            {/* ========== PROJECT SECTION ========== */}
            <ProjectSection />
            {/* ========== SKILLS SECTION ========== */}
            <SkillsSection />
        </div>
    );
};

export default PortfolioApp;
