import { CloseRounded } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Card = styled(motion.div)`
  width: 340px;
  min-height: 540px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.66));
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  backdrop-filter: blur(14px);
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(34, 211, 238, 0.38);
    box-shadow: 0 28px 85px rgba(0, 0, 0, 0.38);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 190px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 14px;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.accent};
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid rgba(34, 211, 238, 0.18);
  border-radius: 999px;
  padding: 5px 9px;
`;
const MoreTag = styled(Tag)`
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(255, 255, 255, 0.055);
  border-color: ${({ theme }) => theme.border};
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 13px;
  margin-left: 2px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 8px;
  line-height: 1.65;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const Button = styled.a`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  transition: all 0.25s ease;
  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    border-color: transparent;
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: auto;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(3, 7, 18, 0.78);
  backdrop-filter: blur(18px);
`;

const DetailCard = styled(motion.div)`
  width: min(980px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(280px, 1.05fr);
  gap: 28px;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.border};
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.84));
  box-shadow: 0 32px 120px rgba(0, 0, 0, 0.55);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 18px;
  }
`;

const DetailImage = styled.img`
  width: 100%;
  min-height: 300px;
  max-height: 470px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);

  @media (max-width: 820px) {
    min-height: 220px;
  }
`;

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-start;
`;

const DetailTitle = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 34px;
  line-height: 1.12;
  font-weight: 800;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

const CloseButton = styled.button`
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.06);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: rotate(90deg);
  }
`;

const DetailDate = styled.div`
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  font-size: 15px;
`;

const DetailDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
`;

const StackTitle = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  font-size: 15px;
  margin-top: 4px;
`;

const DetailTags = styled(Tags)`
  margin-top: 0;
`;

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const visibleTags = project.tags?.slice(0, 6) ?? [];
  const hiddenTagCount = Math.max((project.tags?.length ?? 0) - visibleTags.length, 0);
  const openProject = () => setIsOpen(true);
  const closeProject = () => setIsOpen(false);

  return (
    <>
    <Card
      role="button"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject();
        }
      }}
      layoutId={`project-card-${project.id ?? project.title}`}
    >
      <Image src={project.image} alt={`${project.title} preview`} loading="lazy" />
      <Tags>
        {visibleTags.map((tag) => (
          <Tag key={`${project.title}-${tag}`}>{tag}</Tag>
        ))}
        {hiddenTagCount > 0 && <MoreTag>+{hiddenTagCount}</MoreTag>}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar
            key={member.name ?? member.img}
            src={member.img}
            alt={member.name ?? "Project member"}
            loading="lazy"
          />
        ))}
      </Members>
      {(project.github || project.webapp) && (
        <ButtonsContainer>
          {project.github && (
            <Button
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              View Code
            </Button>
          )}
          {project.webapp && (
            <Button
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              Live Demo
            </Button>
          )}
        </ButtonsContainer>
      )}
    </Card>
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProject}
        >
          <DetailCard
            layoutId={`project-card-${project.id ?? project.title}`}
            initial={{ y: 34, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 24, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <DetailImage src={project.image} alt={`${project.title} full preview`} />
            <DetailBody>
              <DetailTop>
                <div>
                  <DetailTitle>{project.title}</DetailTitle>
                  <DetailDate>{project.date}</DetailDate>
                </div>
                <CloseButton type="button" onClick={closeProject} aria-label="Close project details">
                  <CloseRounded />
                </CloseButton>
              </DetailTop>
              <DetailDescription>{project.description}</DetailDescription>
              <StackTitle>Technical Stack</StackTitle>
              <DetailTags>
                {project.tags?.map((tag) => (
                  <Tag key={`${project.title}-detail-${tag}`}>{tag}</Tag>
                ))}
              </DetailTags>
              {(project.github || project.webapp) && (
                <ButtonsContainer>
                  {project.github && (
                    <Button href={project.github} target="_blank" rel="noreferrer">
                      View Code
                    </Button>
                  )}
                  {project.webapp && (
                    <Button href={project.webapp} target="_blank" rel="noreferrer">
                      Live Demo
                    </Button>
                  )}
                </ButtonsContainer>
              )}
            </DetailBody>
          </DetailCard>
        </Overlay>
      )}
    </AnimatePresence>
    </>
  );
};

export default ProjectCard;
