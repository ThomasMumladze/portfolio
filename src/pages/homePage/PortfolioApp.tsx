import "./PortfolioApp.scss";

// ========== SECTIONS ========== //
import ProjectSection from "../../components/@SECTIONS/projectSection/ProjectSection";
import SkillsSection from "../../components/@SECTIONS/skillsSection/SkillsSection";
import PersonSection from "../../components/@SECTIONS/personSection/Person";
import ServicesSection from "../../components/@SECTIONS/servicesSection/ServicesSection";

const PortfolioApp = () => {
    return (
        <div className="portfolioApp">
            {/* ========== PERSON SECTION ========== */}
            <PersonSection />
            {/* ========== SERVICES SECTION ========== */}
            <ServicesSection />
            {/* ========== PROJECT SECTION ========== */}
            <ProjectSection />
            {/* ========== SKILLS SECTION ========== */}
            <SkillsSection />
        </div>
    );
};

export default PortfolioApp;
