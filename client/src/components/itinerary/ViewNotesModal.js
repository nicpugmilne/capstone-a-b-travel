import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

export default function ViewNotesModal({ name, notes }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        size="xs"
        onClick={onOpen}
        bg="blue.400"
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
        Notes
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent alignItems={"center"}>
          <ModalHeader>Notes about {name}</ModalHeader>
          <Text m={5}>{notes}</Text>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
