'use client';

import React from 'react';

import { RxDotsVertical } from 'react-icons/rx';

import { LuPackageCheck, LuPackageSearch } from 'react-icons/lu';

import { TiWarningOutline } from 'react-icons/ti';

import { LiaShippingFastSolid } from 'react-icons/lia';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';

import styles from 'ui/Packages/Admin/packages.module.scss';
import { usePackages } from 'ui/Packages/Admin/packages.hooks';
import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';
import { getPackageStatusIcon } from 'ui/Packages/Admin/packages.partials';
import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';
import { WidgetHeader } from 'ui/common/components/typography/WidgetHeader/WidgetHeader';
import { WidgetSubHeader } from 'ui/common/components/typography/WidgetSubHeader/WidgetSubHeader';
import { WidgetNew } from 'ui/common/components/layout/Widget/WidgetNew/WidgetNew';
import { WidgetAttention } from 'ui/common/components/layout/Widget/WidgetAttention/WidgetAttention';
import { WidgetCompleted } from 'ui/common/components/layout/Widget/WidgetCompleted/widgetCompleted';
import { WidgetDelivery } from 'ui/common/components/layout/Widget/WidgetDelivery/WidgetDelivery';
import { WidgetContent } from 'ui/common/components/layout/Widget/WidgetContent/WidgetContent';
import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';
import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';
import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';
import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';
import { ContainerHeader } from 'ui/common/components/typography/ContainerHeader/ContainerHeader';
import { Container } from 'ui/common/components/layout/Container/Container';

export const PackagesView = () => {
  const { packages, onRowClick, isPackageSelected } = usePackages();

  return (
    <>
      <PageHeader>
        <PageHeading>Packages</PageHeading>
        <WidgetHeading>
          <WidgetNew>
            <WidgetContent>
              <WidgetSubHeader>New today</WidgetSubHeader>
              <WidgetHeader>3</WidgetHeader>
            </WidgetContent>
            <LuPackageSearch className={styles.widgetIcon} />
          </WidgetNew>
          <WidgetDelivery>
            <WidgetContent>
              <WidgetSubHeader>Still in delivery</WidgetSubHeader>
              <WidgetHeader>3</WidgetHeader>
            </WidgetContent>
            <LiaShippingFastSolid className={styles.widgetIcon} />
          </WidgetDelivery>
          <WidgetAttention>
            <WidgetContent>
              <WidgetSubHeader>Attention Needed</WidgetSubHeader>
              <WidgetHeader>3</WidgetHeader>
            </WidgetContent>
            <TiWarningOutline className={styles.widgetIcon} />
          </WidgetAttention>
          <WidgetCompleted>
            <WidgetContent>
              <WidgetSubHeader>Completed today</WidgetSubHeader>
              <WidgetHeader>3</WidgetHeader>
            </WidgetContent>
            <LuPackageCheck className={styles.widgetIcon} />
          </WidgetCompleted>
        </WidgetHeading>
      </PageHeader>
      <PageContainer>
        <PageSubHeader>
          <SectionHeader>Latest packages</SectionHeader>
        </PageSubHeader>
        {packages.map((pack) => (
          <>
            <ListRow key={pack.id} onClick={onRowClick(pack.id)}>
              <div className={styles.rowId}>{pack.id}</div>
              <div className={styles.rowName}>{pack.name}</div>
              <div className={styles.rowStatus}>
                {getPackageStatusIcon(pack.status)}
              </div>
              <div>
                <RxDotsVertical className={styles.itemActions} />
              </div>
            </ListRow>
            {isPackageSelected(pack.id) && (
              <Container>
                <ContainerHeader className={styles.productsHeader}>
                  Products
                </ContainerHeader>
                <div className={styles.productsContent}>
                  {pack.products.map((product) => (
                    <div className={styles.productWrapper}>
                      <div>ID: {product.id}</div>
                      <div>{product.productName}</div>
                    </div>
                  ))}
                </div>
              </Container>
            )}
          </>
        ))}
      </PageContainer>
    </>
  );
};
