"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

export function WarningModalComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [defaultOpen, setDefaultOpen] = useState(true);

  return (
    <div>
      <Modal backdrop="transparent" onClose={onClose} defaultOpen={defaultOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Caution!
              </ModalHeader>
              <ModalBody>
                <p>
                  This is not real ecommerce! It is not possible to make
                  purchases through it. This is an ecommerce for portfolio
                  purposes only. Feel free to try: home, menu, search, product
                  page, category page, author page, search page with filters and
                  add to cart. I did not include a checkout process.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  I understood.
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
